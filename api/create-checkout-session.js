const stripe = require('stripe')('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');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Hardcoded data for testing
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: [
                    {
                        price_data: {
                            currency: 'eur', // Set the currency to EUR
                            product_data: {
                                name: 'Test Product', // Hardcoded product name for testing
                            },
                            unit_amount: 1000, // Hardcoded amount: 10 EUR (1000 cents)
                        },
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: `${req.headers.origin}/success.html`,
                cancel_url: `${req.headers.origin}/cancel.html`,
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






