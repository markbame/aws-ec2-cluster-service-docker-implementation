var exec = require('child_process').exec;
const hostname = '0.0.0.0';
const port = 8080;

const server = http.createServer((req, res) => {

  console.log('req',req.url)

  if(req.url == '/build-admin-app') {
    exec('./build-admin.sh', function(){
        console.log('build complete')
    })
  }
  if(req.url == '/build-react-app') {
    exec('./build-app.sh', function(){
        console.log('build complete')
    })
  }
  if(req.url == '/build-node-api') {
    exec('./build-api.sh', function(){
        console.log('build complete')
    })
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('endpoint');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
