var timer;
var obstacles = ['obstacle1'];
console.log($('#character').offset().top);
var Character = function (newL, newT, newImg, newDivID) {

		this.setLeft = setNewLeft;
		this.setNewImage = setImage;
		this.setTop = setNewTop;

		this.left = newL;
		this.top = newT;
		this.img = newImg;
		this.divID = newDivID;
		this.jump = jumpChar;

	};

	function setNewLeft (left) {
		this.left = left;
	};

	function setNewTop (top) {
		this.top = top;
	}

	var setImage = function() {
		$("#" + this.divID).attr("src", this.img);
		console.log("setting src of " + this.divID + " to " + this.img);
	};

	window.onkeydown = function(e) {
		var key = e.keyCode ? e.keyCode : e.which;

		console.log(key);

		if (key == 39) {

		   moveCharRight(10);

		} else if (key == 37) {

		   moveCharLeft(10);

		} else if (key == 32) {
			
			moveCharUp();

			
		}

	}

	function moveCharRight(distance) {
		var newLeft = mainChar.left + distance;

		console.log(mainChar.divID);
		$("#character").css("left", "+=10");

		console.log("moving char from " + mainChar.left + " to " + newLeft);
		console.log($("#character").offset().left);
		mainChar.setLeft(newLeft);
	}

	function moveCharLeft(distance) {
		var newLeft = mainChar.left - distance;

		console.log(mainChar.divID);
		$("#character").css("left", "-=10");

		console.log("moving char from " + mainChar.left + " to " + newLeft);
		console.log($("#character").offset().left);
		mainChar.setLeft(newLeft);

	}

	function jumpChar() {
		console.log("jump top is called");
		moveCharUp(this.top - 10);
		this.setTop(this.top - 10);
	}

	function moveCharUp() {
		var stopHeight;
		$( "#character" ).animate({
		    top: "-=150"
		  }, 500, function() {
		    console.log($('#character').offset().top);
			if (($("#character").offset().left > $("#obstacle1").offset().left) && ($("#character").offset().left < $("#obstacle1").offset().left + $("#obstacle1").width())) {
				stopHeight = $('#obstacle1').offset().top - ($("#character").offset().top + $("#character").height());
				console.log($('#obstacle1').offset().top + " minus " + $("#character").offset().top);
				console.log("above obstacle");
			} else {
				stopHeight = 480 - $("#character").offset().top;
			}
			//alert(stopHeight);
			moveCharDown(stopHeight);
		  });
	}

	function moveCharDown(stopHeight) {
		$( "#character" ).animate({
		    top: "+=" + stopHeight
		  }, 500, function() {
		    // Animation complete.
		  });
	}

var mainChar = new Character($("#character").offset().left, $("#character").offset().top, "/Users/nathanlynch/Documents/JumpMan/Images/mainChar.png", "charImg");

	mainChar.setNewImage();





