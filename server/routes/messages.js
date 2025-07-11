const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const auth = require('../middleware/auth');

router.get('/:customerId', auth, async (req, res) => {
  const messages = await Message.find({ customerId: req.params.customerId });
  res.json(messages);
});

router.post('/', auth, async (req, res) => {
  const { customerId, content, source, direction, status } = req.body;
  const message = new Message({
    customerId,
    content,
    source,
    direction,
    status,
    agentId: req.user.id
  });
  await message.save();
  res.json(message);
});

module.exports = router;
