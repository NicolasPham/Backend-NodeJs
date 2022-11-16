* NodeJs
<details>

```ruby
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
      - const getText = (path) => {
          return new Promise((resolve, reject) => {
              readFile(path, "utf8", (err, data) => {
                  if (err) {
                      reject(err)
                  } else {
                      resolve(data);
                  }
              });
          })
        }
        
      - const start = async () => {
          try {
              const first = await getText("./content/first.txt");
              console.log(first);
          } catch (error) {
              console.log(error);
          }

      };

      - start();

      // or we can do as:
      - getText("./content/first.txt")
          .then(result => console.log(result))
          .catch(err => console.log(err));
    
  > HTTP:
    - const http = require('http');
    - const server2 = http.createServer((req, res) => {
        if (req.url === "/") {
          res.write("welcome to home page");
        } else if (req.url === "/about") {
          res.write("About page")
        } else {
          res.end(`
          <h1>We can't find</h1>
          <p>Please go back to home page by clicking</p>
          <a href ="/">home page</a>
          `)
        }
      });
    - server2.listen(5000, () => {console.log("port 5000")});
    - Methods: 
      > get - read data
        >> www.store.com/api/orders - get all orders
        >> www.store.com/api/orders/:id - get single order (path params)
      > post - insert data - www.store.com /api/orders - place an order (send data)
      > put - update data - www.store.com/api/orders/:id - update specific order (params + send data)
      > delete - delete data - www.store.com/api/orders/:id - delete order (path params)
      
      > response.end([data[, encoding]][, callback]): MUST be called on each response
        signals the serer that all of the response headers and body have been sent, that server should consider this message complete.

4. NPM:
  - package.json: manifest file (stores important info about projects/packages)
  - npm init -y (everything yes to default)
  - npm install: install all dependencies in package.json because we are not sharing the "node_modules" folder
  - npm i nodemon -D : install as a devDependency
  - "scripts": {
    "start": "node app.js",
    "dev" : "nodemon app.js" -- npm run [nameofCommand]
  },

5. Event Loop: is what allows Node.js to perform non-blocking I/O operations by offloading operations to the system kernel whenever possible

6. Events Emitter:
  - const EventEmitter = require('events');
  - const customEmitter = new EventEmitter();
    >> Methods: we can have as many event as we want
      - on: listen for an event
      - emit: emit an event
  - customEmitter.on('nameOfEvent', ([argument1], [argument2])=>{});
  - customEmitter.emit('nameOfEvent',[argument1], [argument2]);
  
    
```
</details>

* Express
<details>

```ruby
- ** HTTP server:
    > const server = http.create((req, res) => {
    > const url = req.url
    > if (url === '/') {
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write('<h1>Hello to home page</h1>');
        res.end();
      } else {
        res.writeHead(404, 'content-type' : 'text/plain');
        res.write('<h1>Page can not be found</h1>')
        res.end();
      }
    > {'content-type': 'text/[html / plain / css / javascript / svg+xml]'}
    })
    > req propeties: req.method / req.url

- ** Express: get / post / put / delete / all / use / listen
  > const express = require('express');
  > const app = express();
  > const path = require('path');
  
  > app.use(express.static('./public'));
  > const homePage = path.join(__dirname, 'navbar-app/index.html)
  
  > app.get('/', (req, res) => {
      res.status(200).send(homePage);
      })
  > app.all('*', (req, res)=> {
      res.status(404).send("404 Page Not Found");
      })
  
```
</details>

* API
<details>

```javascript
- Route:
> app.get("/api/products/:productId", (req, res) => {
    const { productId } = req.params;

    const singleProduct = products.find(
      (product) => product.id === Number(productId)
    );

    if (singleProduct) {
      res.json(singleProduct);
    } else {
      res.send(`<h1>We can't not find your product</h1>`);
    }
  });


- Query String: localhost:5000/api/v1/query?search=a&limit=2
    - app.get('/api/v1/query', (req, res) => {
        const { search, limit } = req.query;
        let sortedProducts = [...products]

        if (search) {
            sortedProducts = sortedProducts.filter((product) => {
                return product.name.startsWith(search)
            })
        }
        if (limit) {
            sortedProducts = sortedProducts.slice(0, Number(limit))
        }
        res.status(200).json(sortedProducts);
    })




```
</details>
