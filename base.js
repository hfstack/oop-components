var Base = Class.extend({
  init:function(config){
    //自动保存配置项
    this.__config = config
  },
  template:'',
  get:function(key){
    return this.__config[key]
  },
  set:function(key,value){
    this.__config[key] = value
  },
  hide:function(){

  },
  show:function(){

  },
  bind:function(){

  },
  render:function() {

  },
  destroy:function(){

  }
})