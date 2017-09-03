const request = require('request');


module.exports = function(req, res) {
  let term = req.query.text.trim();

  res.json({
    body: `${term}`,
    raw: true
  });
};
