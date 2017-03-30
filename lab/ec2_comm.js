var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');


var comm = function(request, callback) {
	DryRun: true || false,
  Filters: [
    {
      Name: 'owner-id',
      Values: [
        'owner-id',
        /* more items */
      ]
    },
    /* more items */
  ]
};
ec2.describeInstances(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
}

exports.lab = comm