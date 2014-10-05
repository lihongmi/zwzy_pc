/*! 
 * 棉花糖 数据库管理
 * @author Fredric 
 * @date 2014-10-4
 */


var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var admincon = mongoose.createConnection('mongodb://localhost/mhtadmin');

admincon.on('error', console.error.bind(console, 'connection error:'));
admincon.once('open', function callback () {console.log('mhtadmin db connect');});

exports.mhtdb = function(){
	var mhtdb = {};
	mhtdb.mongoose = mongoose;
	mhtdb.Schema   = Schema;
	mhtdb.con      = admincon;
	
	return (mhtdb);
}

exports.adminmodel = function(name,schema,collection){
	return admincon.model(name,schema,collection);
}

exports.dbconnect = function(){
	//mongoose.connect;
	//admincon = mongoose.createConnection('mongodb://localhost/mhtadmin');
	//admincon.on('error', console.error.bind(console, 'connection error:'));
	//admincon.once('open', function callback () {console.log('mhtadmin db connect');});
}


/*****************************************************************************************/
//初始化企业租户的DB 连接池
var enterConn = new Array();

var tenantDb = require('../dao/tenantdao');

function initEnterConn(){

	//读取tenant信息
	tenantDb.findTenant(function(err,users){
		if(!err){
			var count = 0;
			//console.log(users);
			users.forEach(function(user){
				//console.log(user);
				enterConn[count++] = mongoose.createConnection('mongodb://localhost/' + user.ID);
				
				console.log(user.ID + 'db connected');
			});
			
			//console.log(enterConn[0].name);
		}
	})
}

initEnterConn();

//增加一个企业的连接，租户注册时
exports.addEnterDb = function(id){
	enterConn[enterConn.length] = mongoose.createConnection('mongodb://localhost/' + id);
}

//获取制定企业租户的连接
exports.getEnterDb = function(id){	
	for(var i = 0; i < enterConn.length;i++){
		if(id == enterConn[i].name){
			return enterConn[i];
		}
	}	
}
