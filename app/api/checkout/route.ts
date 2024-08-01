import { CartItem } from "@/components/context/CartContext";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export async function POST(request: Request) {
  try {
    const { items }: { items: CartItem[] } = await request.json();

    const getBaseUrl = () => {
      if (process.env.NEXT_PUBLIC_BASE_URL) {
        return process.env.NEXT_PUBLIC_BASE_URL;
      }
      if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
      }
      return "http://localhost:3000"; // Fallback for local development
    };

    const baseUrl = getBaseUrl();

    const session = await stripe.checkout.sessions.create({
      line_items: items.map((item: CartItem) => ({
        price_data: {
          currency: "gbp",
          product_data: {
            name: item.title,
            description: item.summary,
          },
          unit_amount: Math.round(item.amount * 100), // Stripe expects amounts in terms of smallest unit
        },
        quantity: item.quantity,
      })),
      mode: "payment",
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
