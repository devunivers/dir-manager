# __Dir manager__

### __usage__
whithout parameter __dir-manager__ goint to search in the current path
```Javascript
    var dirmanager = require("dir-manager");
    dirmanager.watch({}, function(err, res){
        console.log(res); # object
    })
```
## __Responce__
	- event
	- filenamechanged
	- pathname
	- path
	- tree
	- treefilenamechanged
