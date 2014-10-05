/*! 
 * 棉花糖 管理员角色DAO封装
 * @author Fredric 
 * @date 2014-10-4
 */


var db = require('./dbmanager');
var mongoose = db.mhtdb().mongoose;
var Schema   = db.mhtdb().Schema;
var con      = db.mhtdb().con;


var adminactorSchema = mongoose.Schema({
	actorid:	{
        type: Number
    },
	actorName:   {
        type: String
    }
});

//var actorModel = mongoose.model('actorModel',adminactorSchema,'actor');
var actorModel = db.adminmodel('actorModel',adminactorSchema,'actor');


exports.findNameById = function(id,callback){
	//console.log('findNameById');
	var data = [{'actorid':  id}];
	actorModel.findOne(data,function(err,doc){
		console.log(doc);
		if(!err){
			//console.log(doc.actorid+ "  "+ doc.actorName);
			return callback(doc.actorid, doc.actorName);
		}	
	});
}
