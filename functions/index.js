const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  
  "pk_test_51K1sxHSJhD5RHdVRmthObj25H2BOz7H728Sp2Ypw5jw5NS5IcbR5wX79pgUALi13szONTVZyGFIAH3BeZpADujsU00Njlsjl10"
);

//  API

//  App config
const app = express();

//  Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  console.log("amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total /* subunits of the currency */,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-2349d/us-central1/api
