
//子弹
//构造函数
class Base{
	constructor(){
		this.ele = document.createElement("div");
		this.key = parseInt(Math.random()*100000000) + ""; //key
	}
}
//
class Bullet extends Base{
	constructor(){
		super();
	}
	//方法
	init(){
		//将新创建的子弹对象添加到allBullet中
		gameEngine.allBullet[this.key] = this;
		//console.log(gameEngine.allBullet);
		
		gameEngine.ele.appendChild(this.ele);
		this.ele.className = "bullet";
		this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth/2 - this.ele.offsetWidth/2 + "px";
		this.ele.style.top = myPlane.ele.offsetTop - this.ele.offsetHeight + "px";
		return this;
	}
	
	//移动
	move(){
		
		const that = this;
		this.timer = setInterval(()=>{
			
			let y = that.ele.offsetTop - 8;
			if (y < -18) {
				clearInterval(that.timer); //关闭定时器
				gameEngine.ele.removeChild(that.ele); // 移除子弹节点
				
				//当子弹从页面上移除，则同将allBullet中的对应子弹对象删除
				delete gameEngine.allBullet[that.key];
				
			}
			else {
				that.ele.style.top = y + "px";
			}
		}, 30);
		
	}
	
	//爆炸
	boom(){
		//停止移动
		clearInterval(this.timer); 
		
		this.ele.className = "bullet-die";
		
		//爆炸动画
		let dieImgs = ["images/die1.png", "images/die2.png"];
		//let i = 0;
		//let that = this;
		let [i,that] = [0,this];
		let dieTimer = setInterval(()=>{
			if (i >= 1){
				clearInterval(dieTimer); //关闭定时器
				gameEngine.ele.removeChild(that.ele); //移除子弹节点
			}
			else 
			that.ele.style.background = "url("+ dieImgs[++i] +") no-repeat";
		},100);
	}
	
}











