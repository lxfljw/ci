/*
 * @Author: luxiaofeng
 * @Date: 2020-09-24 21:27:08
 * @LastEditors: luxiaofeng
 * @LastEditTime: 2020-09-26 18:47:43
 * @Description: webhooks 核心
 */

// autoBuild.js
const http = require('http')
const spawn = require('child_process').spawn
const createHandler = require('github-webhook-handler')
const handler = createHandler({ path: '/pushCode', secret: '123' }) // 在代码仓库的 Webhooks 选项处配置
const port = 7777
http.createServer(function (req, res) {
 handler(req, res, function (err) {
  res.statusCode = 404;
  console.error(err);
  res.end('no such location')
 })
}).listen(port)

handler.on('error', function (err) {
 console.error('Error:', err.message)
})

// 监听 push 事件
handler.on('push', function (event) {
 console.log('Received a push event for %s to %s',
  event.payload.repository.name,
  event.payload.ref)
 rumCommand('sh', ['./autoBuild.sh'], function( txt ) { // 执行 autoBuild.sh 脚本文件
  console.log(txt)
 })
})

function rumCommand( cmd, args, callback ) {
  const child = spawn( cmd, args )
  let response = ''
  child.stdout.on('data', function( buffer ){ response += buffer.toString(); })
  child.stdout.on('end', function(){ callback( response ) })
}


console.log(`服务启动,端口:${port}`);
