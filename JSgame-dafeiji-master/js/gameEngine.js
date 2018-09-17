


//游戏引擎
//对象
var gameEngine = {
	
	//属性
	//游戏界面div
	ele: null, 
	
	allBullet: {}, //页面上所有子弹
	allEnemy: {}, //页面上所有敌机
	
	tatalScore: 0, //总得分
	
	//方法
	//初始化属性init
	init: function(){
		this.ele = document.getElementById("main");
		return this;
	},
	
	//开始游戏start
	start: function(){
		console.log("游戏开始");
		
		//加载游戏
		gameEngine.loadding(function(){
			console.log("游戏加载完成");
			
			//进入游戏主界面
			//创建我的飞机
			myPlane.init().move();
			myPlane.fire(); //开火， 发射子弹
			
			//监听键盘
			gameEngine.listenKeybord();
			
			//创建敌机
			gameEngine.createEnemy();
			
			//碰撞检测
			gameEngine.listeningCrash();
			
		});
		
	},
	
	//加载游戏loadding
	loadding: function(callback){
		
		//logo
		var logo = document.createElement("div");
		logo.className = "logo";
		gameEngine.ele.appendChild(logo);
		
		//load
		var load = document.createElement("div");
		load.className = "load";
		gameEngine.ele.appendChild(load);
		
		
		//加载动画
		var imgs = ["images/loading1.png", "images/loading2.png", "images/loading3.png"];
		var i = 0;
		var timer = setInterval(function(){
			if (i >= 0){
				clearInterval(timer);
				gameEngine.ele.removeChild(logo);
				gameEngine.ele.removeChild(load);
				
				callback(); //回调
			}
			else {
				load.style.background = "url("+ imgs[++i%3] +") no-repeat";
			}
		}, 500);
		
	},
	
	//监听键盘
	listenKeybord: function(){
		
		var xspeed = 0;
		var yspeed = 0;
		
		window.onkeydown = function(e){
			e = e || event;
			
			if (e.keyCode==37) { //左
				xspeed = -10;
			}
			else if (e.keyCode==38) { //上
				yspeed = -10;
			}
			else if (e.keyCode==39) { //右
				xspeed = 10;
			}
			else if (e.keyCode==40) { //下
				yspeed = 10;
			}
		}
		window.onkeyup = function(){
			xspeed = 0;
			yspeed = 0;
		}
		setInterval(function(){
			var x = myPlane.ele.offsetLeft + xspeed;
			if (x < 0) x = 0;
			else if (x > gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth){
				x = gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth
			}
			myPlane.ele.style.left = x + "px";
			myPlane.ele.style.top = myPlane.ele.offsetTop + yspeed + "px";
		}, 30);
	},
	
	//创建敌机
	createEnemy: function(){
		
		//大型飞机
		setInterval(function(){
			var flag = Math.random()>0.5 ? true : false;
			if (flag) {
				var enemy = new Enemy(Enemy.prototype.Enemy_Type_Large);
				enemy.init().move();
				
			}
		}, 6000);
		
		//中型飞机
		setInterval(function(){
			var flag = Math.random()>0.5 ? true : false;
			if (flag) {
				var enemy = new Enemy(Enemy.prototype.Enemy_Type_Middle);
				enemy.init().move();
				
			}
		}, 2000);
		
		//小型飞机
		setInterval(function(){
			var flag = Math.random()>0.3 ? true : false;
			if (flag) {
				var enemy = new Enemy(Enemy.prototype.Enemy_Type_Small);
				enemy.init().move();
				
			}
		}, 1000);
	},
	
	//碰撞检测
	listeningCrash : function(){
		
		setInterval(function(){
			
			//遍历所有子弹
			//遍历所有敌机
			//判断每个子弹和每个敌机是否有碰撞
			for (var i in gameEngine.allEnemy) { //遍历所有敌机
				
				for (var j in gameEngine.allBullet) { //遍历所有子弹
					
					//判断每个子弹和每个敌机是否有碰撞
					if ( isCrash(gameEngine.allEnemy[i].ele, gameEngine.allBullet[j].ele) ) {
						//console.log("发生了碰撞");
						
						//让子弹爆炸，并从allBullet中移除
						gameEngine.allBullet[j].boom();
						delete gameEngine.allBullet[j]; 
						
						//让敌机受到一点伤害
						gameEngine.allEnemy[i].hurt();
					}
					
				}
				
				//判断敌机和我的飞机是否有碰撞
				if ( isCrash(gameEngine.allEnemy[i].ele, myPlane.ele) ){
					console.log("Game Over");
				}
				
			}
			
			
			
		}, 30);
		
	}
}











