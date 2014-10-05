/*! 
 * 棉花糖  部门岗位DAO封装
 * @author Fredric 
 * @date 2014-10-4
 */

var db = require('./dbmanager');
var mongoose = db.mhtdb().mongoose;
var Schema   = db.mhtdb().Schema;

var position = new Schema({
	positionid:	{
        type: Number //岗位ID
    },
	positionname:   {
        type: String //岗位明恒
    },
	positionnote:   {
        type: string //岗位说明
    }
});