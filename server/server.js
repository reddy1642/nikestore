const express = require('express');
const stripe = require('stripe')('sk_test_51QPSYoFSkIgZioxSPMcKf6QotJpLWKSwcc9R0ysgmUVT28sRtGf6Gk9ZMMtJZvayo5pFubWrAaGlOSfYLMxkp9Cp00il9kC5s9');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  console.log('Received amount from frontend:', amount);  

  
  if (typeof amount !== 'number' || amount <= 0) {
    return res.status(400).send({ error: 'Invalid amount' });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Stripe error:', error);  
    res.status(500).send({ error: error.message });
  }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
