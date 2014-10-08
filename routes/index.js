
/*
 * GET home page.
 */

var logger = require('../util/log').logger;

var loginaction = require('../action/loginaction');

//首页
exports.index = function(req, res){  
	res.sendfile('public/login.html');
};

//管理员首页
exports.adminindex = function(req,res){
	res.sendfile('public/adminlogin.html');
}

//用户登陆
exports.loginaction = function(req,res){
	
	loginaction.loginaction(req,res,function(result, reason){
		if('OK' == result){
			res.json({result:'001'});
		}else{
			res.json({result:'100',reason:reason});
		}
	});
}

exports.login = function(req,res){
	res.sendfile('public/index.html');
}


var tenant = require('../app/tenant');
//新租户祖册
exports.register = function(req,res){
	tenant.addTenant(req.body,function(result){
		if("success" == result){
			res.json({result:"success"});
		}else{
			res.json({result:"failed",errMsg: "该ID已存在" });
		}
	});
}


//棉花糖管理员登陆首页
exports.adminindex   = function(req,res){
	res.sendfile('public/adminindex.html');
}

exports.mainindex = function(req,res){
	res.sendfile('public/index.html');
}


//管理员个人设置
exports.person = function(req,res){
	res.sendfile('public/adminperson.html');
}

//管理员用户
exports.adminuser = function(req,res){
	res.sendfile('public/adminuser.html');
}

exports.admintenant = function(req,res){
	res.sendfile('public/admintenant.html');
}

var adminuser = require('../dao/adminuserdao');
var auhandler = require('../app/adminuserhandler');
var tenant    = require('../dao/tenantdao');

exports.getadminuser = function(req,res){
	adminuser.findUser({},function(err, users){
		//console.log(users);
		res.json(users);
	});
}

exports.addadminuser = function(req,res){
	auhandler.addadminuser(req);
	res.json({result:'001'});
}

exports.gettenant = function(req,res){
	tenant.findTenant(function(err,tenants){
				
		res.json(tenants);
	});
}

exports.deladminuser = function(req,res){
	//console.log(req.body);
	var username = req.body.username;
	//console.log(username);
	adminuser.delUserByName(username,function(err){
		if(!err){
			res.json({result:"success"});
		}else{
			res.json({result:"failed",errMsg: "删除失败" });
		}
	})
}

exports.updateadminuser = function(req,res){
	//console.log(req.body);
	adminuser.updateuser(req.body,function(err){
		if(!err){
			//console.log('Great');
			res.json({result:"001"});
		}else{
			res.json({result:"failed",errMsg: "更新失败" });
		}
	});
}

/************************************************************************************
 * 服务接口封装
 */
var sessoin = require('../ws/session');
exports.sessionContent = function(req,res){
	sessoin.sessionContent(req,res,function(username, actorname){
		console.log(username + " _ " + actorname);
		res.json({username:username,actorname:actorname});
	})
}











