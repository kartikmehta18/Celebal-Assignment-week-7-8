const express = require("express");
const {
  processPayment,
  sendStripeApiKey,
} = require("../controllers/paymentController");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");

router.route("/payment/process").post(isAuthenticatedUser, processPayment);

// Make Stripe API key route public (no authentication required)
router.route("/stripeapikey").get(sendStripeApiKey);

module.exports = router;
