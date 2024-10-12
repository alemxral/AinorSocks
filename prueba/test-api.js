const axios = require('axios');

// Replace this with your actual Vercel API URL
const vercelApiUrl = 'https://miemiesocks.vercel.app/api/create-checkout-session';

// Function to test the Vercel API
async function testVercelApi() {
    try {
        // Sending a POST request with a test payload
        const response = await axios.post(vercelApiUrl, {
            amount: 1000, // Set a test amount (in cents)
        });

        // Log the response from the API
        console.log('Response from Vercel API:', response.data);
    } catch (error) {
        // Log any errors
        console.error('Error while calling Vercel API:', error.response ? error.response.data : error.message);
    }
}

// Execute the function
testVercelApi();
