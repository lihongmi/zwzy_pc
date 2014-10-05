/*! 
 * 棉花糖 管理员用户数据DAO封装
 * @author Fredric 
 * @date 2014-09-28
 */

var db = require('./dbmanager');
var mongoose = db.mhtdb().mongoose;
var Schema   = db.mhtdb().Schema;
var con      = db.mhtdb().con;



var adminuserSchema = new Schema({
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

/*var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {console.log('mhtadmin db connect');});*/

//var userModel = mongoose.model('userModel',adminuserSchema,'user');
var userModel = db.adminmodel('userModel',adminuserSchema,'user');

//根据名字寻找用户
exports.findUserByName = function(name,callback){
	var data = {'username':  name};
	//console.log(data);
	userModel.findOne(data,function(err,doc){
		if(!err){
			//console.log(doc.username + doc.password);
			return callback(doc.username, doc.password, doc.actorid);
		}	
	});
}

exports.delUserByName = function(name,callback){
	var data = {'username':  name};
	userModel.findOne(data,function(err,doc){
		if(!err){
			doc.remove();		
		}
		
		return callback(err);
	});
}

exports.findUser = function(option,callback){
	userModel.find(option, function(err, users){
		//console.log('findUser：'+ users);
		//console.log(err);
		return callback(err,users);
	});
}

exports.addUesr = function(username, password,actorid,phone,email){
	//var tmp = Number(actorid);
	//console.log(actorid);
	var userEntity = new userModel({
		username:username,
		password:password,
		actorid:actorid,
		phone:phone,
		email:email,
	});
	
	//console.log(userEntity);
	
	userEntity.save();
}

exports.updateuser = function(condition,callback){
	var query  = {'username':condition.username};
	
	var update = {'username':condition.username,
				  'password':condition.password,
				  'actorid' :condition.actorid,
				  'phone'   :condition.phone,
				  'email'   :condition.email};
	
	//console.log(query);
	//console.log(update);
	
	userModel.findOneAndUpdate(query, update,function(err){
		return callback(err);
	})
}



