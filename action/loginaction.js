/*! 
 * 用户登陆action处理
 * @author Fredric 
 * @date 2014-09-28
 */ 

var loginhandler = require('../app/loginhandler');


exports.loginaction = function(req,res,callback){
	
	var email = req.body.inputemail;
	var password = req.body.password;
	
	loginhandler.adminloginhandler(email, password,function(result, actorid, reason){
		
		req.session.username = email;
		req.session.actorid  = actorid;
		//保存session
		//TBD
		return callback(result, reason);
	});
}