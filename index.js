var NodeMax = {};
var asciify = require('asciify');
var v8Version = process.versions.v8;
var hailMsg = "ALL HAIL THE HOLY V8 ! : " + v8Version;
NodeMax.hail = function(asciifyConfigs) {
	var promise = new Promise(function(resolve, reject){
		asciify(hailMsg, asciifyConfigs, function(err, msg) {
			if (err) {
				reject(err);
				return;
			}
			resolve(msg);
		});
	});
	return promise;
};
module.exports = NodeMax;
