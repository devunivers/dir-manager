# __Dir manager__

### __usage__
Whithout parameters __dir-manager__ goint to search in the current path

```Javascript
    var dirmanager = require("dir-manager");
    dirmanager.watch({}, function(err, res){
        console.log(res); # object
    })
```
The script above going to search in __c:\user\project __ , if you want get a specify path you can use the __target__  parameter .

```Javascript
    var dirmanager = require("dir-manager");
    dirmanager.watch({target:'./watch'}, function(err, res){
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
