var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/test/';
//var favicon = require('serve-favicon');

// shelljs to execute server-side bash scripts
const shell = require('shelljs')

const bodyParser = require("body-parser");

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

app.post("/test", function (req, res) {
    console.log(req.body.fnum + '');
    shell.exec('scripts/test.sh ' + req.body.fnum + '' + '');
    res.redirect('/');
});

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

app.use("/",router);

app.use(express.static(__dirname + '/test'));

// app.use(favicon(__dirname + '/test/images/favicon.ico'));

app.use("*",function(req,res){
  res.sendFile(path + "index.html");
});

app.listen(3031,function(){
  console.log("Live at Port 3031");
});
