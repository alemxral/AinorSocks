// api/create-checkout-session.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { priceId } = req.body; // Get the Price ID from the request body

        try {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: [
                    {
                        price: priceId, // Price ID from your Stripe Dashboard
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: `${req.headers.origin}/success`, // Redirect on success
                cancel_url: `${req.headers.origin}/cancel`, // Redirect on cancel
            });

            res.status(200).json({ id: session.id }); // Send back the session ID
        } catch (err) {
            res.status(500).json({ error: err.message }); // Handle error
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`); // Handle unsupported methods
    }
}

