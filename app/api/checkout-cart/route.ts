import { CartItem } from "@/components/context/CartContext";
import { NextResponse } from "next/server";
import { getBaseUrl } from "@/utilities/utils";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export async function POST(request: Request) {
  try {
    const { items }: { items: CartItem[] } = await request.json();

    const baseUrl = getBaseUrl();

    const lineItems = await Promise.all(
      items.map(async (item: CartItem) => {
        // Check if a product for this project already exists
        let product = await stripe.products
          .search({
            query: `metadata['projectId']:'${item.projectId}'`,
          })
          .then((res) => res.data[0]);

        // If not, create a new product
        if (!product) {
          product = await stripe.products.create({
            name: item.title,
            description: item.summary,
            metadata: { projectId: item.projectId },
          });
        }

        // Create a price for this specific donation
        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: Math.round(item.amount * 100),
          currency: "gbp",
        });

        return {
          price: price.id,
          quantity: item.quantity,
        };
      })
    );

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      submit_type: "donate",
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Error creating checkout session:", err);
    return NextResponse.json(
      { error: { message: err.message } },
      { status: 500 }
    );
  }
}
