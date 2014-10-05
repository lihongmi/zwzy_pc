/*! 
 * 棉花糖  企业租户对应的管理员
 * @author Fredric 
 * @date 2014-10-4
 */
var db = require('./dbmanager');
var set = require('../util/hashmap');
var mongoose = db.mhtdb().mongoose;
var Schema   = db.mhtdb().Schema;

var enterUser = new Schema({
	username:	{
        type: String
    },
	password:   {
        type: String
    },
	actorid :   {
        type: Number
    },
    phone   :   {
    	type: String
    },
    email   :   {
    	type: String
    }
});

var modelmap = new set.hashmap();

function getModel(ID){
	if(null != modelmap.get(ID)){
		return modelmap.get(ID);
	}else{
		var enterUserModel = db.getEnterDb(ID).model('userModel',enterUser,'user');
		modelmap.put(ID,enterUserModel);
		return enterUserModel;
	}	
}

exports.addEnterUser = function(ID,info){
	var entity = new getModel(ID)({
		username:info.username,
		password:info.password,
		actorid:info.actorid,
		phone:info.phone,
		email:info.email,
	});
	
	entity.save();
	
	
}
