const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');
const auth = require('../middleware/auth');

router.get('/', auth, async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
});

router.post('/', auth, async (req, res) => {
  const { fullName, email, mobile, tags } = req.body;
  const customer = new Customer({ fullName, email, mobile, tags });
  await customer.save();
  res.json(customer);
});

module.exports = router;
