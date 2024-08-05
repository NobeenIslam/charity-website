// pages/api/checkout-all-causes.ts

import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

const ALL_CAUSES_PRODUCT_ID = "prod_QaUjhfshG03tgu";

export async function POST(request: Request) {
  try {
    const getBaseUrl = () => {
      if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
      }
      return "http://localhost:3000"; // Fallback for local development
    };

    console.log("test", process.env.NEXT_PUBLIC_BASE_URL);

    const baseUrl = getBaseUrl();

    // Fetch the product to get its default price
    const product = await stripe.products.retrieve(ALL_CAUSES_PRODUCT_ID);

    if (!product.default_price) {
      throw new Error("Product does not have a default price");
    }

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: product.default_price as string,
          quantity: 1,
        },
      ],
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
