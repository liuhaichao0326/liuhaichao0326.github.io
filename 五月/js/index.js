function Sends(obj, cla) {
	this.obj = document.getElementsByClassName(obj)[0]
	this.imgs = this.obj.children;
	this.cla = document.getElementsByClassName(cla)[0]
	this.lis = this.cla.children;
	this.time = null;
	this.num = 0;
	this.nud = '';
	this.nub = '';
	this.settad = {
		name: '',
		time: null,
		zuo: 'nud',
		you: 'nub',
		dian: true,
	}
}
Sends.prototype.init = function (opt) {
	extend(this.settad, opt);
	var that = this
	// 点击切换
	for (var i = 0; i < this.lis.length; i++) {
		this.lis[i].index = i
		this.lis[i].onclick = function () {
			that.pbsod(this.index)
		}
	}
	// 定时器
	this.tuend()
	// 箭头点击
	if (this.settad.dian) {
		this.nud = document.createElement('div')
		this.nub = document.createElement('div')
		this.nud.className = this.settad.zuo
		this.nub.className = this.settad.you
		this.obj.parentNode.appendChild(this.nud)
		this.obj.parentNode.appendChild(this.nub)
		this.nud.innerHTML = "<"
		this.nub.innerHTML = ">"
		this.nud.onclick = function () {
			that.cued()
		}
		this.nub.onclick = function () {
			that.cnab()
		}
	} else {
		this.nud = '';
		this.nub = '';
	}
}
Sends.prototype.cued = function () {
	this.num--;
	if (this.num < 0) {
		this.num = this.lis.length - 1
	}
	this.pbsod(this.num)
}
Sends.prototype.cnab = function () {
	this.num++;
	if (this.num > this.lis.length - 1) {
		this.num = 0
	}
	this.pbsod(this.num)
}

// 焦点
Sends.prototype.pbsod = function (b) {
	for (var i = 0; i < this.lis.length; i++) {
		this.lis[i].className = ''
	}
	console.log(this.lis[b])
	this.lis[b].className = this.settad.name
	this.obj.style.left = -(b * this.imgs[0].offsetWidth) + 'px';
}

// 定时器
Sends.prototype.tuend = function () {
	var that = this;
	if (this.settad.time != null) {
		this.timer = setInterval(function () {
			that.num++;
			if (that.num < 0) {
				that.num = that.imgs.length - 1;
			}
			if (that.num > that.imgs.length - 1) {
				that.num = 0;
			}
			that.pbsod(that.num);
		}, this.settad.time);
	}
}




function extend(obj1, obj2) {
	for (var attr in obj2) {
		obj1[attr] = obj2[attr];
	}
}


var pedic = document.getElementById('pedic')
var lier = pedic.getElementsByTagName('li')
var enhr = document.getElementById('enhr')
var lisz = enhr.getElementsByTagName('li')
// tab切換
function tab() {
	for (var i = 0; i < lier.length; i++) {
		lier[i].index = i
		lier[i].onclick = function () {
			for (var o = 0; o < lisz.length; o++) {
				lier[o].className = ''
				lisz[o].className = 'moed'
			}
			lier[this.index].className = 'redic'
			lisz[this.index].className = 'owerz'
		}
	}
}
tab();
var abb = new Sends('lefnd', 'poedc')
abb.init({
	name: 'qops',   //添加类名
	time: 2000,   //定时器时间
	zuo: 'nud',  //左箭头点击
	you: 'nub',	//右箭头点击
	dian: true,   //确认是否有箭头点击事件
})
var acc = new Sends('lacy', 'reuk')
acc.init({
	name: 'aeuct',
	time: null,
	zuo: '',
	you: '',
	dian: false,
})
var add = new Sends('icrds', 'lepd')
add.init({
	name: 'engd',
	time: null,
	zuo: '',
	you: '',
	dian: false,
})
var aee = new Sends('diesz', 'dieul')
aee.init({
	name: 'cendro',
	time: null,
	zuo: '',
	you: '',
	dian: false,
})
var aff = new Sends('oieds', 'goule')
aff.init({
	name: 'acide',
	time: null,
	zuo: '',
	you: '',
	dian: false,
})
var aff = new Sends('endpr', 'rtul')
aff.init({
	name: 'ertul',
	time: null,
	zuo: '',
	you: '',
	dian: false,
})
