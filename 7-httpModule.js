const http = require('http');

const server = http.createServer((req,res)=>{
//   res.write('welcoe to our homepage')
//   res.end()

if(req.url === "/about")
  {
      res.end('<h1>lost man in a lost world</h1>')
  }

  else if(req.url === "/")
  {
      res.end('<h1>see this lost nigga o</h1>')
  }
  else{
    res.end('<h1>omo!!</h1><p>this page no dey existence</p>')
  }
 

  console.log(req.url);
})

server.listen(5000);
