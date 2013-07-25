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
var betChips = new BetChips();

function BetChips()
{
	this.five = ko.observable(5);
	this.ten = ko.observable(2);
	this.fifteen = ko.observable(1);
	this.twenty = ko.observable(1);
	this.betAmt = ko.observable(0);
}

ko.applyBindings(betChips);

function addChips()
{
	console.log(arguments);
}