/*! 
 * 登陆控制filter
 * @author Fredric 
 * @date 2014-09-28
 */ 


exports.authorize = function(req, res, callback) {
  if (!req.session.user_id) {
    res.redirect('/loginaction');
  } else {
    callback(req,res);
  }
}