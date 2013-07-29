var REDD = new Object(null);

REDD["session"] = {name:"test", timestamp:new Date()};
REDD["amount"] = {five:5,ten:2,fifteen:1,twenty:1};
REDD["bet"] = {question_id:0,amount:0};

function test(){
	$.getJSON('https://dl.dropboxusercontent.com/u/113397498/Redd-Scientific/questions.json').done(function(data) {
		REDD["questions"] = data;
	});
}

test();

/*******
Testing KO
*******/
var betChips =  
{
	//TODO: use arrays
	five : ko.observable(6),
	ten : ko.observable(2),
	fifteen : ko.observable(2),
	twenty : ko.observable(1),
	betAmt : ko.observable(0),
	
	addFive : function(){
		var f = this.five();
		if(f >= 1)
		{
			this.five(f-1);
			var bet = this.betAmt();
			this.betAmt(bet + 5);
		}
	},
	addTen : function(){
		var t = this.ten();
		if(t >= 1)
		{
			this.ten(t-1);
			var bet = this.betAmt();
			this.betAmt(bet + 10);
		}
	},
	addFifteen : function(){
		var ft = this.fifteen();
		if(ft >= 1)
		{
			this.fifteen(ft-1);
			var bet = this.betAmt();
			this.betAmt(bet + 15);
		}
	},
	addTwenty : function(){
		var tw = this.twenty();
		if(tw >= 1)
		{
			this.twenty(tw-1);
			var bet = this.betAmt();
			this.betAmt(bet + 20);
		}
	},
	
	removeFive : function(){
		var b = this.betAmt();
		var f = this.five();
		if(b >= 5)
		{
			this.five(f+1);
			this.betAmt(b - 5);
		}
	},
	removeTen : function(){
		var b = this.betAmt();
		var t = this.ten();
		if(b >= 10)
		{
			this.ten(t+1);
			this.betAmt(b - 10);
		}
	},
	removeFifteen : function(){
		var b = this.betAmt();
		var ft = this.fifteen();
		if(b >= 15)
		{
			this.fifteen(ft+1);
			this.betAmt(b - 15);
		}
	},
	removeTwenty : function(){
		var b = this.betAmt();
		var tw = this.twenty();
		if(b >= 20)
		{
			this.twenty(tw+1);
			this.betAmt(b - 20);
		}
	},
	
	doNothing : function(){},
	addChips : function(){
		var target = arguments[1].currentTarget.classList;
		var chips = target.contains("Chip1")?this.addFive()
				  : target.contains("Chip2")?this.addTen()
				  : target.contains("Chip3")?this.addFifteen()
				  : target.contains("Chip4")?this.addTwenty()
				  : this.doNothing();
	},
	
	removeChips : function(){
		var target = arguments[1].currentTarget.classList;
		console.log("Arguments: " + arguments[1].currentTarget);
		var chips = target.contains("Chip1")?this.removeFive()
				  : target.contains("Chip2")?this.removeTen()
				  : target.contains("Chip3")?this.removeFifteen()
				  : target.contains("Chip4")?this.removeTwenty()
				  : this.doNothing();
	}
	
}

ko.applyBindings(betChips);

/*
function addChips()
{
	var target = arguments[1].currentTarget.classList;
	var chips = target.contains("Chip1")?(bet
	
}

var viewModel = {
        numberOfClicks : ko.observable(0),
        incrementClickCounter : function() {
            var previousCount = this.numberOfClicks();
            this.numberOfClicks(previousCount + 1);
        }
    };*/