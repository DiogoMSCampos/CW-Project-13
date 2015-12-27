var bl = require('../../../bl/src')

exports = module.exports

exports.get = function handler (request, reply) {
  reply(bl.sayHello())
}

exports.post = function handler (request, reply) {
  reply(bl.sayHello(request.payload.name))
}

exports.login = function handler (request, reply) {
  reply(bl.login(request.payload.usr,request.payload.password))
}

exports.patients = function handler (request, reply) {
  reply(bl.patients())
}

exports.acts = function handler (request, reply) {
  reply(bl.acts())
}

exports.statusP = function handler (request, reply) {
  reply(bl.statusP())
}

exports.actsforPat = function handler (request,reply){
  reply(bl.actsforPat(request.payload.patientID,request.payload.policyType))
}


