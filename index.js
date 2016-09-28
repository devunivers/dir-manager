

"use strict";

var test = require('./lib/manager');
var options={
    'target':'./watch'
}
test.watch(options,function(err,res){
    console.log(res);
})
