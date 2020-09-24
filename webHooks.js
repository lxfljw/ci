/*
 * @Author: luxiaofeng
 * @Date: 2020-09-24 21:27:08
 * @LastEditors: luxiaofeng
 * @LastEditTime: 2020-09-24 21:58:09
 * @Description: webhooks 核心
 */

const http = require("http");
const createHandler = require("github-webhook-handler");
const handler = createHandler({ path: "pushCode", secret: "" });
const port = 3000;
const { spawn } = require("child_process");
http
  .createServer(function (req, res) {
    handler(req, res, function (err) {
      res.statusCode = 404;
      res.end("没有此路经!");
    });
  })
  .listen(port);

handler.on("error", (err) => {
  console.error("Error", err.message);
});

handler.on("push", (event) => {
  console.log(
    "Received a push event for %s to %s",
    event.payload.repository.name,
    event.payload.ref
  );
  rumCommand("sh", ["./autoBuild.sh"], function (txt) {
    // 执行 autoBuild.sh 脚本文件
    console.log(txt);
  });
});

function rumCommand(cmd, args, callback) {
  var child = spawn(cmd, args);
  var response = "";
  child.stdout.on("data", function (buffer) {
    response += buffer.toString();
  });
  child.stdout.on("end", function () {
    callback(response);
  });
}
