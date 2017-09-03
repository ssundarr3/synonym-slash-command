const key = require('../utils/key');
const request = require('request');

// The Type Ahead API.
module.exports = function(req, res) {
  let term = req.query.text.trim();  

  if (!term) {
    res.json([{
      title: '<i>(enter a word)</i>',
      text: ''
    }]);
    return;
  }

  request({
    url: `http://words.bighugelabs.com/api/2/${key}/${term}/json`,
    json: true
  }, (err, response) => {
    if (err || response.statusCode !== 200 || !response.body) {
      res.status(500).send('Error');
      return;
    }

    res.json(getAllSynonym(response.body));
  });

};

function getAllSynonym(body){
  let allSyn = [];

  let possibleTypes = ['noun', 'adjective', 'verb'];

  for(let i=0; i<possibleTypes.length; ++i){
    if(body.hasOwnProperty([possibleTypes[i]]) && body[possibleTypes[i]].hasOwnProperty('syn')){
      for(let j=0; j<body[possibleTypes[i]].syn.length; ++j){
        allSyn.push({
          title: '<i>(' + possibleTypes[i] + ')</i> ' + body[possibleTypes[i]].syn[j],
          text : body[possibleTypes[i]].syn[j]
        });
      }
    }
  }

  // if no sysnonyms exist, let user know
  if(allSyn.length === 0){
    allSyn.push([{
        title: '<i>(no results)</i>',
        text: ''
    }]);
  }

  return allSyn;
}
