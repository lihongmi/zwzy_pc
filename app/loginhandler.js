/*! 
 * 用户登陆业务处理
 * @author Fredric 
 * @date 2014-09-28
 */

var adminuserdao = require('../dao/adminuserdao');

//登陆业务处理
exports.adminloginhandler = function(username,password,callback){
	
	var tmpname = username;
	var tmppw   = password;
	
	adminuserdao.findUserByName(username, function(username, password, actorid){
		var result = 'ERR';
		if(username == tmpname && password == tmppw){
			result = 'OK';
		}
		
		return callback(result, actorid,'用户名称或密码错误');
	});
}