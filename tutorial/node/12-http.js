const http = require("http");

// const server = http.createServer((req, res) => {
//   //   if (req.url === '/') {
//   //     res.end('Welcome to our home page')
//   //   }
//   //   if (req.url === '/about') {
//   //     res.end('Here is our short history')
//   //   }
//   //   res.end(`
//   //   <h1>Oops!</h1>
//   // <p>We can't seem to find the page you are looking for</p>
//   // <a href="/">back home</a>
//   //   `)
//   // ###################################
//   // ###################################
//   //
//   //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
//   // SWITCH TO IF, ELSE IF, ELSE (BELOW)
//   // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
//   if (req.url === '/') {
//     res.end('Welcome to our home page')
//   } else if (req.url === '/about') {
//     res.end('Here is our short history')
//   } else {
//     res.end(`
//     <h1>Oops!</h1>
//     <p>We can't seem to find the page you are looking for</p>
//     <a href="/">back home</a>
//     `)
//   }
// })

// server.listen(5000)

const server2 = http.createServer((req, res) => {
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

server2.listen(5000);
