/*! 
 * 棉花糖 员工基本信息DAO封装
 * @author Fredric 
 * @date 2014-10-4
 */

var db = require('./dbmanager');
var mongoose = db.mhtdb().mongoose;
var Schema   = db.mhtdb().Schema;


var employee = new Schema({
	employeeid:	{
        type: Number
    },
	name:	{
        type: String
    },
	age:   {
        type: Number
    },
	sex:   {
        type: Number
    }, 
	phone:   {
        type: String
    },
	email:   {
        type: String
    },
	departid:   {
        type: Number
    },
	message:   {
        type: String
    },
});



