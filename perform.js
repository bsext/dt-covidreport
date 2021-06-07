var ctx = require('../../../../context');
var Utils = ctx.getLib('lib/util/plugin-utils');


var gp = require("./gp.js");

function perform_function(context,request,response){
  var job_id = context.jobconfig.job_id;
  var transaction_id = context.transaction.id;
  var param = context.task.config.param;
  var memstore = context.task.memstore

  var output_type = request.input_type;
  var data = request.data;
  var meta = request.meta || {};

  var prm_bg = param.backgroud;

  var txt_date = param.txt_date
  var txt_today_case = param.txt_today_case
  var txt_case = param.txt_case
  var txt_today_death = param.txt_today_death
  var txt_death = param.txt_death
  var txt_active = param.txt_active
  var txt_critical = param.txt_critical
  var txt_recover = param.txt_recover


  //parsing param from meta
  if(typeof meta._param == 'object')
  {
    var _prm = meta._param;

    prm_bg = (_prm.backgroud)?_prm.backgroud:prm_bg
    
    txt_date = (_prm.txt_date)?_prm.txt_date:txt_date
    txt_today_case = (_prm.txt_today_case)?_prm.txt_today_case:txt_today_case
    txt_case = (_prm.txt_case)?_prm.txt_case:txt_case
    txt_today_death = (_prm.txt_today_death)?_prm.txt_today_death:txt_today_death
    txt_death = (_prm.txt_death)?_prm.txt_death:txt_death
    txt_active = (_prm.txt_active)?_prm.txt_active:txt_active
    txt_critical = (_prm.txt_critical)?_prm.txt_critical:txt_critical
    txt_recover = (_prm.txt_recover)?_prm.txt_recover:txt_recover
  }

  if(typeof txt_date != 'string'){
    var dt = new Date()
    var dttok = dt.toLocaleString().split(',')[0].split('/')
    var dyear = (Number(dttok[2])<2500)?String(Number(dttok[2])+543):dttok[2]
    txt_date = pad(dttok[1],2) + ' . ' + pad(dttok[0],2) + ' . ' + dyear
  }

  gp.report_img({
    "prm_bg" : prm_bg,
    "txt_date":txt_date,
    "txt_today_case":txt_today_case,
    "txt_case":txt_case,
    "txt_today_death" : txt_today_death,
    "txt_death" : txt_death,
    "txt_active" : txt_active,
    "txt_critical" : txt_critical,
    "txt_recover" : txt_recover

  },(err,res)=>{
    meta.file_type = 'png'
    if(!err){
      response.success(res,{'meta':meta,'output_type':output_type});
    }else{
      response.error(err)
    }
  })


  // memstore.setItem('lasttransaction',transaction_id,function(err){
  //   response.success(data);
  // });

  // memstore.getItem('lasttransaction',function(err,value){
  //   response.success(value);
  // });

  //response.reject();
  //response.error("error message")

}

function pad(num, size) {
  var s = "000000000" + num;
  return s.substr(s.length-size);
}

module.exports = perform_function;
