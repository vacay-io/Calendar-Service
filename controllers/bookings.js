const db = require('../models');

module.exports = {
  get: (req, res, next) => {
    db.Booking.find({})
      .exec()
      .then(data => {
        if (!data) {
          next();
        } else {
          res.json(data);
        }
      })
      .catch(next);
  },

  create: function(req, res) {}
};
