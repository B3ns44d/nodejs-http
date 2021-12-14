const http = require('http')

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  const url = req.url;
  const routes = {
    '/': 'Hello World',
    '/about': 'About Us'
  }
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(routes[url]) ?? JSON.stringify({ error: 'Not Found' }))
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
