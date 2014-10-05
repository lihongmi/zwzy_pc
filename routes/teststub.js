/*! 
 * 测试接口
 * @author Fredric 
 * @date 2014-09-28
 */ 


//测试接口1
//测试adminuserDAO操作

var user = require('../dao/adminuserdao');

exports.admintest = function(req,res){
	//console.log(user.findUserByName('mhtadmin').username);
	//console.log(user.findUserByName('mhtadmin').password);
	
	user.findUserByName('mhtadmin', function(username, password, actorid){
		console.log(username);
		console.log(password);
		console.log(actorid);		
	});
		
}