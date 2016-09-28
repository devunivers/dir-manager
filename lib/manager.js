"use strict"
var fs = require('fs');
var dirTree = require('directory-tree');
var source = require('./source')

var target;
exports.watch = function(params,callback){
    target = params.target !== undefined ? params.target :'./';
    try{
        fs.watch(target, function(evtType,fn){
            callback(null,source.fusion(evtType,fn,dirTree(target)))
        });
    }catch(e){
        callback(new Error('oO'),null)
    }
}
