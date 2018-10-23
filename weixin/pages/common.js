function selfbuiltFunc(para){
  console.log('hello this is common.js ' + para+'!')
}
module.exports = {
  slefbulitFunc:selfbuiltFunc//"module.exports 可以在这个模块被调用的时候传值初始化，模块只能通过这个方法才能对外暴露接口并且提供其他.js文件引入使用"
}