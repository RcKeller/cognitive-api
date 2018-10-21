
/*
HTTP SETUP
*/
const HTTP = (server, config) => {
  const { dev, ports } = config
  const port = dev ? ports.dev : ports.http
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`HTTP Ready: http://localhost:${port}`)
  })
}

module.exports = HTTP
