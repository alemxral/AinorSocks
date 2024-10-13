

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Use your secret key

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send({ error: 'Method not allowed' });
    }

    // Log the request body for debugging
    console.log('Incoming request body:', req.body);

    const { amount, country, cart } = req.body; // Capture amount, country, and cart data from the request body

    try {
        // Log before creating the session
        console.log('Creating checkout session with amount:', amount);
        console.log('Selected country:', country);
        console.log('Cart items:', cart);

        // Serialize cart items into a string for metadata
        const cartItems = cart.map(item => `Product ID: ${item.id}, Qty: ${item.amount}, Size: ${item.size}, Price: €${item.price}`).join('; ');

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [{
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: 'Your Order', // Modify as needed
                    },
                    unit_amount: amount, // Ensure amount is being passed correctly (in cents)
                },
                quantity: 1,
            }],
            success_url: 'https://miemiesocks.vercel.app/success.html',
            cancel_url: 'https://miemiesocks.vercel.app/shopping-cart.html',
            
            // Lock shipping address and pass selected country
            shipping_address_collection: {
                allowed_countries: [country],  // Country is passed from frontend
            },

            // Pass cart data and country in metadata (not visible to client)
            metadata: {
                shipping_country: country,   // Store selected country
                cart_items: cartItems        // Store cart details
            }
        });

        // Log the created session object
        console.log('Checkout session created:', session);

        // Send back the session URL for the client to redirect
        res.status(200).json({ url: session.url });
    } catch (error) {
        // Log any errors encountered during session creation
        console.error('Error creating Stripe session:', error);
        res.status(500).json({ error: 'Failed to create checkout session' });
    }
};






