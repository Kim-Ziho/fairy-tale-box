//lib
const express = require("express")
const app = express();
//------------------------------------
//env
const envJson = require(`${__dirname}/env/env.json`);
const port = envJson.port ? envJson.port : 3001;
//----------------------------------
// routes
app.use("/download", require("./routes/download"));
app.use("/startrecord", require("./routes/startrecord"));


app.get("/", function (req, res) {
  res.send("Hello node.js");
});
//----------------------------------
//
app.listen(port, () => {
  console.log(`{init : ${port}}`);
});