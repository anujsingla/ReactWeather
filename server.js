var express = require("express");

var app = express();
const port  = process.env.PORT || 3000;

app.use(function(req, res, next) {
    if(re.headers['x-forwarded-proto'] === 'http') {
        next();
    }else {
        res.redirect('http//' + req.hostname + req.url);
    }

});
app.use(express.static('public'));


app.listen(port,function(){
console.log("express server is running on port " + port);
});