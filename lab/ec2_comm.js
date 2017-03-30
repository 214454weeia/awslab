var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');
var ec2 = new AWS.EC2();
var params = {
  Filters: [
    {
      Name: 'tag:Project',
      Values: ['foo']
    }
  ]
};
ec2.describeInstances(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

var comm = function (request, callback){

	callback(null, params);
};
exports.lab = comm