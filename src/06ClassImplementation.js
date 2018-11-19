console.log('1111');

function Person(name,age){
	this.name = name;
	this.age = age;
};

Person.prototype.say = function(){
	console.log('According to prototype...');
}

const p1 = new Person('Ryan',19);
p1.say();
console.log(p1);
//通过new出来的实例访问到的属性叫   实例属性
//在class花括号内只能写构造器， 实例方法/属性  和   静态方法/属性
//class 内部还是原先的配方 只是语法糖
//可以通过extends关键字来继承父类
//如果在子类的constructor内要先调用super()
//super是一个函数，而且是父类的构造器。子类的super
//其实就是父类constructor构造器的一个引用
//所以super函数内也要传入参数，例如super(name,age)

class Animal{
	//类构造器
	//每个类中都有一个构造器,如果程序员不指定，则为内部有个隐藏构造器（类似JAVA）
	//作用是每当new一个这个类的时候，会立刻自动执行构造器
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	static info = 'eee' //Animal的静态属性
	scream(){
		console.log('Animal screaming');
	}
	static show(){
		console.log('Animal static show');
	}
};


const a1 = new Animal('Puppy',3);
console.log(a1);

//静态属性：通过构造函数直接访问到的属性，直接挂载给了构造函数
Person.info = 'aaaa'; //不是通过new出来得到的，没有挂在到this上
console.log(Animal.info);
