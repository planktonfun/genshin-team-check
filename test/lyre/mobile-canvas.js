var RippleAnimation = function(x,y,context) {
	this.x =x;
	this.y =y;
	this.context = context;
	this.radius = 46;
	this.lineWidth = 4.5;
	this.opacity = 0.8;
	this.color = '#9ef6e5';
	// this.color = 'cyan';
	this.created = Date.now();
	this.alive = true;
	this.limit = 73;
	this.update = () => {

		if(!this.alive) return;
		if(Date.now() - this.created > 3000) this.alive = false;

		this.context.save();
		this.context.beginPath();
		this.context.imageSmoothingEnabled = false;
		this.context.lineWidth = this.lineWidth;
		this.context.strokeStyle = this.color;
		this.context.globalAlpha = this.opacity;
		this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		this.context.stroke();
		this.context.restore();


		if(this.radius > this.limit) {

		// this.alive = false;
			this.color = 'lightblue';
			this.lineWidth *= 0.99;
			this.opacity *= 0.89;
		} else {
			this.opacity *= 0.95;
			this.radius += 1;
		}
	}
}
var MobileCanvas = function(canvasId, videolink) {
	this.canvas = document.getElementById(canvasId);
	this.context = this.canvas.getContext('2d');
	this.videolink = videolink;
	this.animations = {};
	this.cursor = {x:0,y:0,w:10,h:10};
	this.cursorClick = false;
	this.start = async () =>{
		this.background = await this.loadVideo(this.videolink);
		this.cursorImg = await this.loadImage('./cursor-3.png');
		this.sprites = await this.loadImage('./lal.png');
		this.invert = await this.loadImage('./lal-invert.png');
		this.white = await this.loadImage('./lal-white-invert.png');

		this.updateLoop();
		this.initateCursor();
	};

	this.startOffset = {
		crow: 0,
		margin: 39.3,
		marh: 10,
		row: 6,
		sx: 355,
		x: 355,
		y: 684
	};

	this.drawBlurUId = () => {
		this.context.save();

		this.context.filter = 'blur(5px)';
		// draw the canvas over itself, cropping to our required rect
		this.context.drawImage(this.canvas,
			1450, 1020, 200, 100,
			1450, 1020, 200, 100
		);

		this.context.restore();
	}

	this.updateLoop = () => {
		this.canvas.width = this.canvas.width;

		this.context.imageSmoothingEnabled = true;
		this.context.imageSmoothingQuality = 'high';
		this.context.drawImage(this.background,0,0);

		this.drawBlurUId();

		for (var i in this.animations) {
			if(this.animations[i].alive) {
				this.animations[i].update();
			}
		}

		var offset = {
			crow: 0,
			margin: 39.3,
			marh: 10,
			row: 6,
			sx: 355,
			x: 355,
			y: 684
		};

		for (var i in this.buttonMaps) {

			var spriteImg = this.sprites;

			if(this.buttonMaps[i].pressed == true) {
				spriteImg = this.invert;
				this.context.save();
				this.context.globalAlpha = 0.55;

				if(this.buttonMaps[i].ripple) {
					this.buttonMaps[i].ripple = false;
					this.animations[i] = new RippleAnimation(offset.x+(this.buttonSize.width*this.buttonSize.scale/2),offset.y+(this.buttonSize.height*this.buttonSize.scale/2),this.context);
				}
			}

			this.context.drawImage(
				spriteImg, // image src
				this.buttonMaps[i].x, this.buttonMaps[i].y, this.buttonSize.width, this.buttonSize.height, // sprite coordinates
				offset.x,offset.y,this.buttonSize.width*this.buttonSize.scale,this.buttonSize.height*this.buttonSize.scale // draw coordinates
			);

			if(this.cursorClick) {
				if(this.overlap(this.cursor,
					{
						x: offset.x,
						y: offset.y,
						w: this.buttonSize.width*this.buttonSize.scale,
						h: this.buttonSize.height*this.buttonSize.scale
					}))
				{
					this.buttonPressed(i);
					playSound(i);
					this.cursorClick = false;
				}
			}

			if(this.buttonMaps[i].pressed == true) {
				this.context.restore();
			}

			if(this.whites[i] == true) {
				this.context.drawImage(
					this.white, // image src
					this.buttonMaps[i].x, this.buttonMaps[i].y, this.buttonSize.width, this.buttonSize.height, // sprite coordinates
					offset.x,offset.y,this.buttonSize.width*this.buttonSize.scale,this.buttonSize.height*this.buttonSize.scale // draw coordinates
				);
			}

			offset.x += this.buttonSize.width + offset.margin;
			offset.crow++;

			if(offset.crow>offset.row) {
				offset.y += this.buttonSize.height + offset.marh;
				offset.x = offset.sx;
				offset.crow = 0;
			}
		}

		for(var i in this.timers){
			if(Date.now() - this.timers[i] > 80) {
				this.buttonMaps[i].pressed = false;
			}
		}

		for(var i in this.whiteTimers){
			if(Date.now() - this.whiteTimers[i] > 40) {
				this.whites[i] = false;
			}
		}

		// draw cursor
		this.drawCursor();

		requestAnimationFrame(this.updateLoop);
	}

	this.drawCursor = () => {
		this.context.save();
		this.context.filter = 'blur(0.5px)';
		this.context.drawImage(this.cursorImg,this.cursor.x, this.cursor.y);
		this.context.restore();
	}

	this.overlap = (r1, r2) => {
	    var hit = !(r1.x + r1.w < r2.x ||
	               r2.x + r2.w < r1.x ||
	               r1.y + r1.h < r2.y ||
	               r2.y + r2.h < r1.y);

    	return hit;
	}

	this.buttonSize = {
		width: 107,
		height: 108,
		scale: 0.87
	};

	this.whites =  {
		q: false,
		w: false,
		e: false,
		r: false,
		t: false,
		y: false,
		u: false,
		a: false,
		s: false,
		d: false,
		f: false,
		g: false,
		h: false,
		j: false,
		z: false,
		x: false,
		c: false,
		v: false,
		b: false,
		n: false,
		m: false,
	};

	this.buttonMaps = {
		q: {x:39,y:38,pressed:false, ripple: false},
		w: {x:164,y:37,pressed:false, ripple: false},
		e: {x:289,y:37,pressed:false, ripple: false},
		r: {x:414,y:37,pressed:false, ripple: false},
		t: {x:539,y:37,pressed:false, ripple: false},
		y: {x:664,y:37,pressed:false, ripple: false},
		u: {x:789,y:37,pressed:false, ripple: false},
		a: {x:41,y:192,pressed:false, ripple: false},
		s: {x:166,y:191,pressed:false, ripple: false},
		d: {x:291,y:191,pressed:false, ripple: false},
		f: {x:416,y:191,pressed:false, ripple: false},
		g: {x:541,y:191,pressed:false, ripple: false},
		h: {x:666,y:191,pressed:false, ripple: false},
		j: {x:791,y:191,pressed:false, ripple: false},
		z: {x:41,y:346,pressed:false, ripple: false},
		x: {x:166,y:345,pressed:false, ripple: false},
		c: {x:291,y:345,pressed:false, ripple: false},
		v: {x:416,y:345,pressed:false, ripple: false},
		b: {x:541,y:345,pressed:false, ripple: false},
		n: {x:666,y:345,pressed:false, ripple: false},
		m: {x:791,y:345,pressed:false, ripple: false},
	};

	this.timers = {};
	this.whiteTimers = {};

	this.buttonPressed = (letter) => {

		if(this.buttonMaps[letter] == undefined) return;

		this.buttonMaps[letter].pressed = true;
		this.buttonMaps[letter].ripple = true;
		this.whites[letter] = true;

		this.timers[letter] = Date.now();
		this.whiteTimers[letter] = Date.now();
	}

	this.loadVideo = async function(src) {
		return new Promise((resolve) => {
			var videlem = document.createElement("video");
			var sourceMP4 = document.createElement("source"); 
			sourceMP4.type = "video/mp4";
			sourceMP4.src = src;
			videlem.autoplay = true;
			videlem.loop = true;
			videlem.appendChild(sourceMP4);
			videlem.onloadeddata = function() {
				console.log(videlem);
				resolve(videlem);
			};
		});
	}

	this.loadImage = async function(src) {
		return new Promise((resolve) => {
			var temp = new Image();
			temp.src = src;
			temp.onload = function() {
				console.log(temp);
				resolve(temp);
			};
		});
	}

	this.getMousePosition = (canvas, e) => {
	   var boundary = canvas.getBoundingClientRect();
	    return {
	      x: e.clientX - boundary.left,
	      y: e.clientY - boundary.top
	    };
	}

	this.handleMouseMove = (e) => {
		this.cursor = getMousePosition(this.canvas, e);
	}

	this.handleMouseClick = (e) => {
		this.cursorClick = true;
		this.cursor = getMousePosition(this.canvas, e);
	}

	this.handleMouseUp = (e) => {
		this.cursorClick = false;
		this.cursor = getMousePosition(this.canvas, e);
	}

	this.initateCursor = () => {
		this.canvas.addEventListener('mousedown', this.handleMouseClick, false);
		this.canvas.addEventListener('mouseup', this.handleMouseUp, false);
		this.canvas.addEventListener('mousemove', this.handleMouseMove, false);
		this.canvas.addEventListener('touchstart', this.handleMouseMove, false);
		this.canvas.addEventListener('touchend', this.handleMouseClick, false);
	}
}


var videos = [
	'./booba1.mp4',
	'./booba2.mp4',
	'./booba3.mp4',
	'./booba4.mp4',
	'./booba5.mp4',
	'./booba7.mp4'
];

var mobilePlayers = [];
var mpIndex = 0;
var pidPlayers = {};

function createMobilePlayer() {
	mpIndex++;
	var canvas = document.createElement('canvas');
	canvas.id = "mobile-canvas-" + mobilePlayers.length;
	canvas.width = 1680;                          // should be numbers
  	canvas.height = 1052;

  	$('.mobile-view').append(canvas);

  	var vidIndex = Math.floor(Math.random()*videos.length);

  	var temp = new MobileCanvas(canvas.id, videos[vidIndex]);
  	temp.start();

  	videos.splice(vidIndex, 1);

	mobilePlayers.push(temp);
	pidPlayers[mpIndex] = temp;

	return temp;
}

// var mob = new MobileCanvas('mobile-canvas', videos[Math.floor(Math.random()*videos.length)]);
// mob.start();

// var mob2 = new MobileCanvas('mobile-canvas-2', videos[Math.floor(Math.random()*videos.length)]);
// mob2.start();

// var mob3 = new MobileCanvas('mobile-canvas-3', videos[Math.floor(Math.random()*videos.length)]);
// mob3.start();














