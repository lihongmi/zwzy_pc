/*! 
 * 系统用户业务处理
 * @author Fredric 
 * @date 2014-10-4
 */

var adminuser = require('../dao/adminuserdao');

exports.addadminuser = function(req,callback){
	
	//console.log(req);
	
	//console.log(req.username);
	
	var username = req.body.username;
	var password = req.body.password;
	var phone    = req.body.phone;
	var email    = req.body.email;
	var actorid  = (req.body.actorid == "actor01")?1:2;
	
	adminuser.addUesr(username,password,actorid,phone,email);
}