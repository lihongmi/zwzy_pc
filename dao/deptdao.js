/*! 
 * 棉花糖 企业部门DAO封装
 * @author Fredric 
 * @date 2014-10-4
 */
var db = require('./dbmanager');
var mongoose = db.mhtdb().mongoose;
var Schema   = db.mhtdb().Schema;

var depart = new Schema({
	departid:	{
        type: Number
    },
	departname:   {
        type: String
    },
	higherdepartid:   {
        type: Number
    }
});