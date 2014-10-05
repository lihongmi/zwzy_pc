/*! 
 * 配置log4j
 * @author Fredric 
 * @date 2014-09-28
 */ 
var log4js = require('log4js');

log4js.configure({
    appenders: [
        {
            type: 'console',
            category: "console"
        }, //控制台输出
        
        {
            type: "dateFile",
            filename: 'logs/oa.log',
            pattern: "_yyyy-MM-dd",
            alwaysIncludePattern: false,
            category: 'normalLog'
        }//日期文件格式
    ],
    levels:{
    	normalLog: 'INFO'
    }
});

var normalLog = log4js.getLogger('normalLog');

exports.logger = normalLog;

exports.use = function(app) {
    app.use(log4js.connectLogger(normalLog, {level:'INFO', format:':method :url'}));
}