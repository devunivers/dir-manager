var watchObj={};
exports.fusion = function(events,filename,tree){
    watchObj.events = events;
    watchObj.filenamechanged = filename;
    watchObj.pathname = tree.name;
    watchObj.path = tree.path;
    watchObj.tree = tree.children;
    return watchObj;
}
