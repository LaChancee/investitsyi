const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
 async function handleCheckout() {
     const session = await stripe.checkout.sessions.create({
         payment_method_types: ['card'],
         line_items: [
             {
                 name: 'Abonnement Investsistyi',
                 description: 'Découvrez l\'ivestissement avec Investsitsyi',
                 amount: 1000, // 10.00 USD in cents
                 currency: 'eur',
                 quantity: 1,
             },
         ],
         success_url: 'http://localhost:3000/success',
         cancel_url: 'http://localhost:3000/cancel',
     });

     // Set the sessionId prop on the StripeCheckout component
     // to initiate the payment process
     setSessionId(session.id);
 }