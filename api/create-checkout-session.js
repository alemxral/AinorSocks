const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    console.log('Received a request to create a checkout session'); // Log when the endpoint is hit

    if (req.method === 'POST') {
        const { amount } = req.body; // Get the amount from the request body

        console.log(`Creating a checkout session for amount: $${amount / 100}`); // Log the amount being processed

        try {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: [
                    {
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: 'Custom Amount Payment',
                            },
                            unit_amount: amount * 100, // Amount in cents
                        },
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/cancel`,
            });

            res.status(200).json({ id: session.id });
        } catch (err) {
            console.error('Error creating checkout session:', err);
            res.status(500).json({ error: err.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}


