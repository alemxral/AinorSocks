const stripe = require('stripe')('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');

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
                                name: 'Polla12', // Add your product name here
                            },
                            unit_amount: amount * 100, // Convert amount to cents
                        },
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: `https://miemiesocks.vercel.app/success.html`,
                cancel_url: `https://miemiesocks.vercel.app/cancel.html`,
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







