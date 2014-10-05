/*! 
 * 棉花糖 企业部门DAO封装
 * @author Fredric 
 * @date 2014-10-4
 */
var db = require('./dbmanager');
var mongoose = db.mhtdb().mongoose;
var Schema   = db.mhtdb().Schema;

var emplist = new Schema({
	employeeid:	{
        type: Number //员工基本信息ID
    },
    departid:   {
        type: Number //所属部门ID
    },
    positionid:   {
        type: Number //所属岗位ID
    }
});