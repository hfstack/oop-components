var Dialog = Base.extend({
	curTarget:'',
	template:
		'<div class="mod-dialog">\
			<div class="dialog-hd">提示 <span class="close">X</span></div>\
			<div class="dialog-bd"></div>\
			<div class="dialog-ft"></div>\
		</div>',
	render:function(){
		var ele = document.createElement('div');
		ele.innerHTML = this.template;
		this.curTarget = ele;
		document.body.appendChild(ele);
		this.bind();
		document.querySelector('.dialog-bd').innerHTML= this.get('tips');
	},
	bind:function(){
		var self = this;
		document.body.addEventListener('click',function(event){
			var target = event.target;
			if(target.className=='close'){
				self.hide();
			}
		},false)
	},
	hide:function(){
		var ele = this.curTarget;
		ele.parentNode.removeChild(ele);
	}	
})