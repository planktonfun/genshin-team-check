var Mobile_Transpiler = function() {
	this.buttonsImg;
	this.lettersInOrder = 'QWERTYUASDFGHJZXCVBNM';
	this.Mapping = {};

	this.standards = {
		'rectangle': { w:129, h: 57},
		'circle': { radius:7.5 },
		'horizontal': { x:3 },
		'vertical': { y:3 },
		'blank': { color: 'white'},
		'columns': 7,
		'rows': 3,
		colors: {
			'repeat': '#f4003a',
			'once': '#1cecf0',
			'together': '#7e00e6',
		},
		'blocks': {
			'columns': 7
		}
	};

	this.letterCanvas = document.getElementById("canvas-outputarea");
	this.upperLayerCanvas = document.getElementById("canvas-hidden");
	this.upperLayerContext = this.upperLayerCanvas.getContext("2d");
	this.letterContext = this.letterCanvas.getContext("2d");
	this.letterPositions = {x:0, y:0, row:0, rowLimit:5, max_x: 0, max_y: 0};
	this.letterRecordings = [];
	this.lineColor = '#5d5d5d';
	this.fontColor = 'black';
	this.greyout = false;

	this.drawRect = (x, y) => {
		this.letterContext.beginPath();
		this.letterContext.rect(x, y, this.standards.rectangle.w, this.standards.rectangle.h);
		this.letterContext.strokeStyle = this.lineColor;
		this.letterContext.stroke();
	};

	this.drawCircle = (x, y, color) => {
		this.letterContext.beginPath();
		this.letterContext.arc(x, y, this.standards.circle.radius, 0, 2 * Math.PI, false);
		this.letterContext.fillStyle = color;
		this.letterContext.fill();
		this.letterContext.lineWidth = 1;
		this.letterContext.strokeStyle = this.lineColor;
		this.letterContext.stroke();
	};

	this.maxblockCount = 0;
	this.blockCount = 0;
	this.numbering = 1;
	this.rectPosition = {x:15,y:15};
	this.addBlock = () => {
		this.blockCount++;

		if(this.blockCount > this.maxblockCount) this.maxblockCount = this.blockCount;

		this.taken = {};
		this.lastLetter = false;
		this.togethers.started = false;
		this.numbering = 1;
		this.drawRect(this.rectPosition.x, this.rectPosition.y);
		var letters = this.lettersInOrder.split('');
		var li = 0;
		for (var j = 0; j < this.standards.rows; j++) {
			for (var i = 0; i < this.standards.columns; i++) {
				var centerx = this.rectPosition.x+(this.standards.horizontal.x+this.standards.circle.radius)+((this.standards.horizontal.x+(this.standards.circle.radius*2))*i);
				var centery = this.rectPosition.y+this.standards.vertical.y+this.standards.circle.radius+((this.standards.vertical.y+(this.standards.circle.radius*2))*j);

				this.Mapping[letters[li]] = {x:centerx, y:centery};
				li++;

				this.drawCircle(
					centerx,
					centery,
					this.standards.blank.color
				);
			}
		}

		this.rectPosition.x += this.standards.rectangle.w + this.standards.horizontal.x;

		if(this.blockCount >= this.standards.blocks.columns) {
			this.newBlockLine();
		}
	}

	this.lineCount=1;

	this.newBlockLine = () => {
		this.lineCount++;
		this.blockCount = 0;
		this.rectPosition.x = 15;
		this.rectPosition.y += this.standards.rectangle.h + this.standards.vertical.y;
	}

	this.togethers = {x:0,y:0,started:false};
	this.repeatTimes = 1;
	this.lastLetter = false;
	this.taken = {};
	this.drawLetter = (letter, color) => {
		var letter = letter.toUpperCase();

		if(this.lastLetter == letter) {
			color = this.standards.colors.repeat;
			this.repeatTimes++;
			this.numbering--;
		} else {
			this.repeatTimes = 1;

			if(this.taken[letter] != undefined) {
				return false;
			}
		}

		if(this.Mapping[letter] == undefined) throw Error(letter + ' is unknown.');

		this.drawCircle(this.Mapping[letter].x,this.Mapping[letter].y, color);
		this.letterContext.font = "11px OpenSans";

		if(color == this.standards.colors.once)
			this.letterContext.fillStyle = this.fontColor;
		else
			this.letterContext.fillStyle = 'white';

		this.letterContext.textAlign = "center";
		this.letterContext.fillText(this.numbering, this.Mapping[letter].x,this.Mapping[letter].y+4);

		if(this.repeatTimes>1) {
			this.upperLayerContext.clearRect(this.Mapping[letter].x-2, this.Mapping[letter].y+(this.standards.circle.radius*1.5)-4, 20, 11);
			this.upperLayerContext.fillStyle = this.fontColor;
			this.upperLayerContext.fillText('x '+this.repeatTimes, this.Mapping[letter].x,this.Mapping[letter].y+4+(this.standards.circle.radius*1.5));
		}

		this.numbering++;

		if(color != this.standards.colors.together)
			this.lastLetter = letter;

		this.taken[letter] = true;

		// connect togethers
		if(color == this.standards.colors.together) {
			if(!this.togethers.started) {
				this.togethers.started = true;
				this.togethers.x = this.Mapping[letter].x;
				this.togethers.y = this.Mapping[letter].y;
			} else {
				this.letterContext.strokeStyle = this.fontColor;
				this.letterContext.beginPath();
				this.letterContext.moveTo(this.togethers.x, this.togethers.y);
				// this.letterContext.lineTo(this.Mapping[letter].x, this.Mapping[letter].y);
				this.letterContext.quadraticCurveTo(this.togethers.x+20, this.togethers.y-20, this.Mapping[letter].x, this.Mapping[letter].y);
				this.letterContext.stroke();
				this.togethers.x = this.Mapping[letter].x;
				this.togethers.y = this.Mapping[letter].y;
			}
		} else {
			this.togethers.started = false;
		}

		return true;
	}

	this.addLetter = function(temp, color) {
		var result = this.drawLetter(temp,color);

		if(result == false) {
			this.addBlock();
			this.drawLetter(temp,color);
		}
	}

	this.isPurple = false;
	this.compose = function(keys) {
		this.addBlock();

		for (var i = 0; i < keys.length; i++) {

			switch(keys[i]) {
				case '[':
					this.isPurple = true;
				break;
				case ']':
					this.isPurple = false;
					this.togethers.started = false;

					// remove extra block when together is the last note
					if((keys.length-1) != i) this.addBlock();
				break;
				default:
					if(this.isPurple)
						this.addLetter(keys[i], this.standards.colors.together);
					else
						this.addLetter(keys[i], this.standards.colors.once);
				break;
			}
		}

		this.letterContext.drawImage(this.upperLayerCanvas, 0, 0);

		if(this.blockCount == 0) this.lineCount--;

		return [this.lineCount, this.maxblockCount];
	}

	this.resize = function(lineCount, blockCount) {
		this.letterCanvas.width = 30+(blockCount*(this.standards.rectangle.w+3));
		this.letterCanvas.height = 45+(lineCount*(this.standards.rectangle.h+3));
		this.letterContext.fillStyle = "white";
		this.letterContext.fillRect(0, 0, this.letterCanvas.width, this.letterCanvas.height);

		this.upperLayerCanvas.width = 30+(blockCount*(this.standards.rectangle.w+3));
		this.upperLayerCanvas.height = 45+(lineCount*(this.standards.rectangle.h+3));

		this.letterContext.font = "11px OpenSans";
		this.letterContext.textAlign = "left";

		this.drawCircle(30,this.letterCanvas.height-15, this.standards.colors.once);

		this.letterContext.fillStyle = this.fontColor;
		this.letterContext.fillText('once', 45, this.letterCanvas.height-10);

		this.drawCircle(80,this.letterCanvas.height-15, this.standards.colors.repeat);

		this.letterContext.fillStyle = this.fontColor;
		this.letterContext.fillText('repeat', 95, this.letterCanvas.height-10);

		this.drawCircle(140,this.letterCanvas.height-15, this.standards.colors.together);

		this.letterContext.fillStyle = this.fontColor;
		this.letterContext.fillText('together', 155, this.letterCanvas.height-10);
	}

	this.getImage = function() {
		return this.letterCanvas.toDataURL('image/png');
	}
}



$('#transpile-mobile').on('click', function(){
	var pasedMult = $('#transpiler').val().replace(/([^\n]+)\s?x\s?(\d+)\n?/g, function(match, p1, p2, offset, string) {
		var temp = [];
		for (var i = 0; i < p2; i++) {
			temp.push(p1);
		}
		return temp.join('');
	});

	pasedMult = pasedMult.replace(/([\(\[]\~)(\w+)([\]\)])/g, function(match, p1, p2, p3, offset, string) {
		return ['{',p2,'}'].join('');
	});

	pasedMult = pasedMult.replace(/\((\w)\/\/(\w)\s→\s([\w\(\)]+)/g, function(match, p1, p2, p3, offset, string) {
		return ['{',p1,p2,p1,p2,p1,p2,p1,p2,'}',p3].join('');
	});


	keys = pasedMult
	.toUpperCase()
	.replace(/[\.\|]/g, '')
	.replace(/\s/g, '')
	.replace(/↵/g, '')
	.replace(/\t\t/g, '')
	.replace(/-/g, '')
	.replace(/  /g, '')
	.replace(/[\{\}]/g, '')
	.replace(/\(/g, '[')
	.replace(/\)/g, ']')
	.trim()
	.split('');

	console.log(keys);

	var a = new Mobile_Transpiler();
	var size = a.compose(keys);

	var b = new Mobile_Transpiler();

	console.log({size});
	b.resize(size[0], size[1]);
	b.compose(keys);
});
