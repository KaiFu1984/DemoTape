"use strict"
var tests =[];
function Uberschrift(aText)
{
	this.type = 'uberschrift'
	this.text = aText
}
function TestObject(name,o1,o2)
{
	this.type = "test"
	this.testName = name;
	this.objectOne = o1;
	this.objectTwo = o2;
	this.color = "#8B0000";
		
	this.evaluate = function()
	{
		if(this.objectOne === this.objectTwo)
		{
			this.color = "#808000"
		}
		else
		{
			this.color = "#8B0000"
		}
	}
}
tests.push(new TestObject('aFailTestTest',2,1));

