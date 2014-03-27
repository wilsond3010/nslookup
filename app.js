var dns = require('dns');
var util = require('util');
var portscanner = require('portscanner');

var check = function( ip, cb ){
    function myDns(_ip,callback) {

        dns.resolve(_ip, 'PTR', function(err, addresses){

            if( addresses != undefined ){
                var obj = {};
                obj.ip = _ip;
                obj.addresses = addresses;

                portscanner.checkPortStatus(80, _ip, function(error, status) {
                    // Status is 'open' if currently in use or 'closed' if available
                    obj.port = status;

                    callback(null, obj);

                });

            }
            else{
                callback(err, null);
            }
        });
    };

    myDns(ip,cb);
}


for( var i=1; i<=255; i++ ){
    var networkIp = util.format('192.168.1.%s',i);
    check(networkIp,function(err,results){
        if( !err ){
            console.log(results);
        }
    })
}



