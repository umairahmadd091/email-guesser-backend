const { guessEmailFormat } = require('../helpers');

module.exports = {
  index: async (req, res) => {
    const { fullName, domain } = req.body;

    if (!fullName || !domain) {
      return res.status(400).send('Invalid input. Full name and domain are required.');
    }

    const email = guessEmailFormat(fullName, domain);

    if (email) {
      res.json({ email });
    } else {
      res.status(404).send('Email could not be derived.');
    }
  },
};
