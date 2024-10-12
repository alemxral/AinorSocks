const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { amount } = req.body; // Get the amount from the request body

        try {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: [
                    {
                        price_data: {
                            currency: 'eur', // Set the currency to EUR
                            product_data: {
                                name: 'Your Product Name', // Add your product name here
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
            console.error('Error creating checkout session:', err); // Log the error to the console
            res.status(500).json({ error: err.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}




