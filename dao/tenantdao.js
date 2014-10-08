/*! 
 * 棉花糖 管理员租户DAO封装
 * @author Fredric 
 * @date 2014-09-28
 */

var db = require('./dbmanager');
var mongoose = db.mhtdb().mongoose;
var Schema   = db.mhtdb().Schema;
var con      = db.mhtdb().con;

var tenantSchema = new Schema({
	ID:	{
        type: String
    },
	password:   {
        type: String
    },
	entername :   {
        type: String
    }
});

//var tenantModel = mongoose.model('tenantModel',tenantSchema,'tenant');
var tenantModel = db.adminmodel('tenantModel',tenantSchema,'tenant');

exports.findTenantByID = function(id,callback){
	var data = {ID:id};
	tenantModel.findOne(data,function(err,tenant){
		//console.log(err);
		//console.log(tenant);
		return callback(err,tenant);
	});
}

exports.addTenant = function(id,password,entername,callback){
		
	var tenantEntity = new tenantModel({
		ID:id,
		password:password,
		entername:entername,
	});
	
	console.log('addTenant'+tenantEntity);
	
	tenantEntity.save();
	
	return callback();
}

exports.findTenant = function(callback){
	tenantModel.find({},function(err,tenants){
		return callback(err,tenants);
	});
}

