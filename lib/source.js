"use strict"

var fs = require('fs');
var dirTree = require('directory-tree');

var path = function(name,filename){
    var dir  = name.concat('/'+filename);
    if (fs.existsSync(dir)){
        console.log(dir);
        return dirTree(dir)
    }
    return null;
}

exports.fusion = function(events,filename,tree){
    return {
        event:events,
        filenamechanged:filename,
        pathname:tree.name,
        path:tree.path,
        tree:tree.children,
        treefilenamechanged:path(tree.path,filename)
    };
}
