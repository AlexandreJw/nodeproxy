const request = require("request");
const Koa = require('koa')
const app = new Koa()
const fs = require('fs');
const static = require("koa-static");
const path = require('path')
const cors = require('koa2-cors');
const staticPath = '../lib'
app.use(cors());
app.use(static(
  path.join( __dirname,  staticPath)
))
app.use(async ctx => {
  if(ctx.request.path == '/index/index'){
    // await new Promise((resolve) => {
    //   fs.readFile('../index.html', 'utf-8', (e, data) => {
    //     ctx.body = data
    //     resolve(data)
    //   })
    // })
    ctx.response.type = 'html';
    let filePath = path.join(__dirname, '../index.html');
    console.log(filePath)
    ctx.response.body = fs.createReadStream(filePath);
  } else if(ctx.request.path == '/humb'){
    await new Promise((resolve) => {
      request(`http://127.0.0.1/index.php?id=${ctx.query.id || 10}&num=${ctx.query.num}`, (error, response, body) => {
        if (!error && response.statusCode == 200) {
          ctx.body = response.body
          resolve()
        }
      })
    })
  }
})

app.listen(3000)
module.exports = app