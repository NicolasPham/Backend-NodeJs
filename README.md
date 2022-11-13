* NodeJs
<details>

```javascript
1. Globals: no window, no browser
  > __dirname: path to current directory
  > __filename: file name
  > require: function to use modules (CommonJS)
  > module: info about current module
  > process: info about environment where the program is being executed

2. Modules: everyfile is module (by default)
  > const names = require("./04-names") - like import in React
  > if the module executes the function, when require the module, function will be executed right away
  > module.exports = 
    >> sayHi: if "sayHi" is a function
    >> {variable1, variable2}: if export multiple variable
    >> Dont include the variable we do not want to export (local)
    >> Only export what we want to share

3. Built-in Modules:
  > OS: 
    >> const os = require("os");
    >> other OS methods:
      - os.userInfo();
      - os.uptime();
      - os.type();
      - os.release();
      - os.totalmem();
      - os.freemem();
  > Path:
  > File System (FS):
  > HTTP:
    
    
    
```
</details>
