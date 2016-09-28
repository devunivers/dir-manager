"use strict"
var fs = require('fs');
var dirTree = require('directory-tree');
var source = require('./source')


exports.watch = function(params,callback){
    fs.watch(params.target,function(evtType,fn){
        var tree = dirTree(params.target);
        callback(null,source.fusion(evtType,fn,tree))
    })
}
