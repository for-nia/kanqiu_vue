var restify = require('restify');
var Joi = require('joi');

/*const schema = Joi.object.keys({
    userName:Joi.string().alphanum
});*/

var server = restify.createServer();

server.get("/hello",(req,res,next)=>{
   res.send("hello world");
   next();
});


server.get({
    path:"gameList"
},(req,res,next)=>{

    var parms = req.params;
    var gamelist = [];
    gamelist.push({
        url:"http://baidu.com",
        leagueName: "NBA",
        date: "2017-04-05",
        homeName: "主队",
        score: "1:1",
        guestName: "客队",
        homeLogo: "http://i1.letvimg.com/lc05_iscms/201703/17/14/00/4d474df84ec847f998167964893a81f1.png",
        guestLogo: "http://i1.letvimg.com/lc05_iscms/201703/17/14/00/4d474df84ec847f998167964893a81f1.png"
    });
    gamelist.push({
        url:"http://baidu.com",
        leagueName: "NBA",
        date: "2017-04-05",
        homeName: "主队",
        score: "1:1",
        guestName: "客队",
        homeLogo: "http://i1.letvimg.com/lc05_iscms/201703/17/14/00/4d474df84ec847f998167964893a81f1.png",
        guestLogo: "http://i1.letvimg.com/lc05_iscms/201703/17/14/00/4d474df84ec847f998167964893a81f1.png"
    });
    gamelist.push({
        url:"http://baidu.com",
        leagueName: "NBA",
        date: "2017-04-05",
        homeName: "主队",
        score: "1:1",
        guestName: "客队",
        homeLogo: "http://i1.letvimg.com/lc05_iscms/201703/17/14/00/4d474df84ec847f998167964893a81f1.png",
        guestLogo: "http://i1.letvimg.com/lc05_iscms/201703/17/14/00/4d474df84ec847f998167964893a81f1.png"
    });
    res.charSet('utf-8');
    res.send(parms['callback']+'('+gamelist+')');
    next();
});

server.listen(8877,()=>{
    console.log('server is listenning on 8877');
});