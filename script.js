// class car{
// 	constructor(aniv,arag){
// 		this._aniv = aniv;
// 		this._arag = arag;
// 	}
// }

// let c = new car(3,20);
// console.log(c);


/////////////////2/////////
// class car{
// 	constructor(model,year,color){
// 		this._model = model;
// 		this._year = year;
// 		this._color = color;
// 	}
// 	setColor(col){
// 		this._color = col;
// 	}
// }

// let c = new car("BMW","2019","Blue");
// console.log(c);
// c.setColor("Black");
// console.log(c);


/////////////3///////

// class first{
// 	constructor(x,y){
// 		this._x = x;
// 		this._y = y;
// 	}
// 	sum(){
// 		return this._x+this._y;
// 	}
// }

// class second extends first{
// 	constructor(x,y,z){
// 		super(x,y);
// 		this._z = z;
// 	}
// 	sum(){
// 		return this._x+this._y+this._z;
// 	}
// }

// let s = new second(1,2,3);
// console.log(s.sum());


//////////////////4////////////

// class time{
// 	constructor(hour,minute,second){
// 		this._hour = hour;
// 		this._minute = minute;
// 		this._second = second;
// 	}
// 	f(){
// 		return this._hour+":"+this._minute+":"+this._second;
// 	}
// }

// let date = new Date();
// let h = date.getHours();
// let m = date.getMinutes();
// let s = date.getSeconds();

// let t = new time(h,m,s);
// alert(t.f());