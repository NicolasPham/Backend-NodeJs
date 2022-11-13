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
    >> OS methods:
      - os.userInfo();
      - os.uptime();
      - os.type();
      - os.release();
      - os.totalmem();
      - os.freemem();
      
  > Path:
    >> const path = require('path');
    >> Methods:
      - path.sep;
      - path.join("/content/", 'subfolder', 'test.txt');
      - path.basename(filePath) - return the name of the file
      - path.resolve(__dirname, 'content', 'subfolder','test.txt'); - return the absolute path
      
  > File System (FS):
    >> fs-sync:
      - const {readFileSync, writeFileSync} = require('fs');
      - const variable = readFileSync("path", "encoded (utf8)")
      - writeFileSync('path', `Content: ${variable file}`, {flag: 'a'}) - flag: 'a' to set WriteFileSync to update the file rather than replace the file
      
    >> fs-async: need a call back function
      - const {readFile, writeFile} = require("fs");
      - readFile('path', 'utf8', (err, result) => {
        if (err) {
          console.log(err);
          return
        }
        console.log(result);
        )
    
  > HTTP:
    - const http = require('http');
    
    
    
    
```
</details>
