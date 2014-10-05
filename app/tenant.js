/*! 
 * 租户业务处理
 * @author Fredric 
 * @date 2014-10-5
 */


/*
 * 创建企业租户
 * *输入参数如下：
{ ID: '13767543218',
  firstpw: '123456',
  secondpw: '123456',
  entername: '棉花糖',
  agree: 'on' }
 */
var tenantdao = require('../dao/tenantdao');
var enteruser = require('../dao/enteruserdao');
var db = require('../dao/dbmanager');

exports.addTenant = function(info, callback){
	
	//console.log(info);	
	tenantdao.findTenantByID(info.ID,function(err,tenant){
		//console.log(err);
		//console.log(tenant);
		if(!tenant){
			console.log('addTenant****');
			
			//在系统管理后台中添加该企业租户信息
			tenantdao.addTenant(info.ID,info.firstpw,info.entername,function(){
								
				//创建以该租户企业ID为名称的数据库
				db.addEnterDb(info.ID);
				
				//该企业ID作为其超级管理员用户
				var userinfo = {username:info.ID,
							    password:info.firstpw,
							    actorid :1,
							    phone:null,
							    email:null};
				
				enteruser.addEnterUser(info.ID,userinfo);
				
			});
			

			

			
			/*初始化该企业租户数据库基础collection，包括
			 * 1。管理员表
			 * 2. 部门表
			 * 3. 员工表
			 * 4. 部门员工列表  
			 */
			
			
								
			return callback("success");
		}else{
			return callback("failed");
		}
	});
	//return callback(err);
}