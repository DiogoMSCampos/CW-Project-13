var doctor=require('./doctors.json')
var request=require('./requests.json')
var patients=require('./patients.json')
var acts=require('./acts.json')
var actsrmb=require('./acts-rmb.json')
var report=require('./reports.json')
var fs = require('fs')

exports = module.exports

exports.sayHello = function (name) {
  return 'Hello ' + (name || 'World')
}

exports.login = function (usr,pass) {
  for (var i=0;i<doctor.length;i++){
    if (doctor[i].user==usr){
      if (doctor[i].pass==pass){
          doc=doctor[i].name;
        aux = [];reports_filter=[];
        reports_filter = report.filter(function (el) {return el.docID == doctor[i].docID})
        for (var i=0; i<reports_filter.length; i++){
          for (var j=0; j<request.length; j++) {
            if (request[j].repID === reports_filter[i].repID){
            aux.push({reqID: request[j].reqID, repID: request[j].repID, status: request[j].status});
            }
          }
        }
        return [true,doc,aux]
      }else{
        return [false,'',[]]
      }
    }
  }
}

exports.patients= function (){
  return patients
}

exports.statusP= function (){
  return statusP
}

exports.acts= function (){
  return acts
}

exports.actsforPat= function(pId,policyT){
  var reportsdata=[];
  var actsdata=[];
  var actsrmbdata=[];

  actsrmbdata=actsrmb.filter(function(el){
  
  return el.policy_type == policyT})

  for (var i=0;i<report.length;i++){
     if (pId==report[i].patID){reportsdata.push({act:report[i].actID,repid:report[i].repID})}
  }
  for (var j=0;j<reportsdata.length;j++){
    for (var i=0;i<acts.length;i++){
      if (acts[i].actID==reportsdata[j].act){actsdata.push({type:acts[i].name,cost:acts[i].cost,reimb:actsrembdata[0].reimb_percentage,repId:reportsdata[j].repid})}
    }
  }
  return actsdata
}
