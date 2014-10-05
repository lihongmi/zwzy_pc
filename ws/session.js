/*! 
 * 获取session信息
 * @author Fredric 
 * @date 2014-09-29
 */ 


var adminactordao = require('../dao/adminactordao');

exports.sessionContent = function(req,res,callback){
	//console.log('sessionContent');
	adminactordao.findNameById(req.session.id, function(actorid,actorname){
		return callback(req.session.username, actorname);
	});
}