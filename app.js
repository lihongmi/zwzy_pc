
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var testsub = require('./routes/teststub');
var MongoStore = require('connect-mongo')(express);
var log = require('./util/log');

var db = require('./dao/dbmanager');



var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('public', path.join(__dirname, 'public'));
app.set('view engine', 'jade');
log.use(app);
app.use(express.favicon());
app.use(express.logger('dev'));

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({
    secret: 'secret-id',
    store: new MongoStore({
    	db: 'mhtadmin'
})
}));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/admin',routes.adminindex);
app.get('/users', user.list);

//登陆操作
app.post('/loginaction',routes.loginaction);
app.post('/login',routes.login);

//后台管理员登陆
app.get('/adminindex',routes.adminindex);
app.get('/index',routes.mainindex);

//个人设置
app.get('/adminperson', routes.person);

//系统用户管理
app.get('/adminuser', routes.adminuser);
app.post('/getadminuser',routes.getadminuser);
app.post('/addadminuser',routes.addadminuser);
app.post('/delminuser',routes.deladminuser);
app.post('/updateadminuser',routes.updateadminuser);


//外网用户业务
app.post('/register',routes.register);


//服务接口
//获取session信息
app.get('/sessionContent',routes.sessionContent);


//测试接口
app.get('/admintest',testsub.admintest);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
