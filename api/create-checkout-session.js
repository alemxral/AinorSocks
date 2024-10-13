const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Use your secret key

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send({ error: 'Method not allowed' });
    }

    // Log the request body for debugging
    console.log('Incoming request body:', req.body);

    const { amount } = req.body; // Capture the amount from the body

    try {
        // Log before creating the session
        console.log('Creating checkout session with amount:', amount);

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [{
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: 'Your Order', // Modify as needed
                    },
                    unit_amount: amount, // Ensure amount is being passed correctly
                },
                quantity: 1,
            }],
            success_url: 'https://miemiesocks.vercel.app/success.html',
            cancel_url: 'https://miemiesocks.vercel.app/cancel.html',
        });

        // Log the created session object
        console.log('Checkout session created:', session);

        // Send back the session URL
        res.status(200).json({ url: session.url });
    } catch (error) {
        // Log any errors encountered during session creation
        console.error('Error creating Stripe session:', error);
        res.status(500).json({ error: 'Failed to create checkout session' });
    }
};








