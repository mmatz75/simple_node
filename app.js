const http = require('http')
const fs = require('fs')
const ejs = require('ejs')
const url = require('url')

const index_page = fs.readFileSync('./index.ejs', 'utf8')
const other_page = fs.readFileSync('./other.ejs', 'utf8')
const style_css = fs.readFileSync('./style.css', 'utf8')

let server = http.createServer(getFromClient)

server.listen(3000)
console.log('Server started!')

//
function getFromClient(request, response) {
  let url_parts = url.parse(request.url)
  let content = ''
  switch (url_parts.pathname) {
    case '/':
      content = ejs.render(index_page, {
        title: 'Index',
        content: 'これはIndexページです。',
      })
      response.writeHead(200, { 'Content-type': 'text/html' })
      response.write(content)
      response.end()
      break

    case '/other':
      content = ejs.render(other_page, {
        title: 'Other',
        content: 'これは新しく用意したページです。',
      })
      response.writeHead(200, { 'Content-type': 'text/html' })
      response.write(content)
      response.end()
      break

    case '/style.css':
      response.writeHead(200, { 'Content-type': 'text/css' })
      response.write(style_css)
      response.end()
      break

    default:
      response.writeHead(200, { 'Content-type': 'text/plain' })
      response.end('no page...')
  }
}
