import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      title,
      price,
      service,
      customer,
    } = body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      mode: "payment",

      line_items: [
        {
          price_data: {
            currency: "gbp",

            product_data: {
              name: title,
            },

            unit_amount: price * 100,
          },

          quantity: 1,
        },
      ],

      success_url:
        `${req.headers.get("origin")}/payment/success`,

      cancel_url:
        `${req.headers.get("origin")}/payment/cancel`,

      metadata: {
        service,
        customer,
      },
    });

    return NextResponse.json({
      id: session.id,
    });

  } catch (err) {
    return NextResponse.json(
      {
        error: err.message,
      },
      {
        status: 500,
      }
    );
  }
}