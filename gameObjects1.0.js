//*********************************************************
//*****************ObjectsObjectsObjects*******************
//*********************************************************
//"A JavaScript object is a collection of named values"
 //Wenn du dich um die Perfomance sorgen machst, dann solltest du das Setzen des [[Prototype]] auf ein Objekt vermeiden. Stattdessen kannst du ein neues Objekt mit dem gewünschten [[Prototype]] mit Object.create() erstellen."https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto"
"use strict";

function Position(parameterObject)
	// new Position("12,1")
	// add pythagoraian distance messurement.
	// Manhatten Distance aus sicht einer Spielfigur, eben in einem maximal gezoomten raster.
	// 	Phytagoreaisch abstände aber bei exaten rasterlosen werten
{ 	
	this.x = 0
	this.y = 0
	
	if(typeof parameterObject === "string")
	{
		this.x = parseInt(parameterObject.split(",")[0])
		this.y = parseInt(parameterObject.split(",")[1])
	}
	else
	{	
		for(var parameter in parameterObject){this[parameter] = parameterObject[parameter]}
	}
	this.type = 'Position'
	
	this.plusModify = function(aPosition)
	{
		this.x = this.x + aPosition.x;
		this.y = this.y + aPosition.y;
		return this
	}
	this.minusModify = function(aPosition)
	{
		this.x = this.x - aPosition.x;
		this.y = this.y - aPosition.y;
		return this
	}
	this.plus = function(aPosition)
	{
		let x = this.x + aPosition.x;
		let y = this.y + aPosition.y;
		return new Position({x:x,y:y})
	}
	this.minus = function(aPosition)
	{
		let x = this.x - aPosition.x;
		let y = this.y - aPosition.y;
		return new Position({x:x,y:y})
	}
	this.multiplyWithPosition = function(aPosition)
	{
		let x = this.x * aPosition.x;
		let y = this.y * aPosition.y;
		return new Position({x:x,y:y})
	}
	this.multiply = function(anInteger)
	{
		let x = this.x * anInteger;
		let y = this.y * anInteger;
		return new Position({x:x,y:y})
	}
	this.round = function()
	{
		let x = Math.round(this.x);
		let y = Math.round(this.y);
		return new Position({x:x,y:y})
	}
	this.isInside = function(aBox)
	{
		if(this.x > aBox.left() && this.x < aBox.right())
			{
				if(this.y > aBox.oben() && this.y < aBox.bottom())
				{
					return true
				}
			}
		return false
	}
	this.cutHigher = function()
	{
		if(Math.abs(this.x) > Math.abs(this.y))
		{return new Position({y:this.y})}
		else{ return new Position({x:this.x})}
	}
	this.cutLower = function()
	{
		if(Math.abs(this.x) < Math.abs(this.y))
		{return new Position({y:this.y})}
		else{ return new Position({x:this.x})}
	}
	this.cutX = function()
	{
		 return new Position({y:this.y})
	}
	this.cutY = function()
	{
	return new Position({x:this.x})
	}
	this.opposite = function()
	{	
		return new Position({x:this.x*-1, y:this.y*-1})
	}
	this.isZero = function()
	{
		if(this.x === 0 && this.y === 0)
			{return true}
		return false
	}
	this.equals = function(aPosition)
	{
		return this.x === aPosition.x && this.y === aPosition.y
	}
	this.positionWithlowestValue = function(aPoint)
	{
		if(Math.abs(this.x) < Math.abs(aPoint.x))
		{
			if(Math.abs(this.x) < Math.abs(aPoint.y))
			{
				return this
			}
		}
		if(Math.abs(this.y) < Math.abs(aPoint.x) )
		{
			if(Math.abs(this.y) < Math.abs(aPoint.y))
			{
				return this
			}
		}
		if(Math.abs(aPoint.x) < Math.abs(this.x) )
		{
			if(Math.abs(aPoint.x) < Math.abs(this.y))
			{
				return aPoint
			}
		}
		if(Math.abs(aPoint.y) < Math.abs(this.x) )
		{
			if(Math.abs(aPoint.y) < Math.abs(this.y))
			{
				return aPoint
			}
		}
		return this
	}	
	this.distanceTo = function(anotherPosition)
	{
		//return a Number
		var distance = this.minus(anotherPosition)
		var pythagoreanDistance = distance.x*distance.x + distance.y*distance.y
		var realDistance = Math.sqrt(pythagoreanDistance)
		return realDistance
	}
	this.shorterDistance = function(aPositionA,aPositionB)
	{	
		var returnValue
		if(this.distanceTo(aPositionA)<this.distanceTo(aPositionB))
			{returnValue = aPositionA}
		else(returnValue = aPositionB)
		return returnValue
		}
}
function Box(parameterObject)
	//position: new Position(x:44, y:192), extent: new Position(x:432, y:402)
	//initialisiert durch string oder parameter object
	{
	this.name = "notChanged"
	this.position = new Position()
	this.extent = new Position()
	this.dimensions = '0,0,0,0'
	if(typeof parameterObject === "string")
	{
				this.dimensions = parameterObject
				let posXInt = parseInt(parameterObject.split(",")[0])
				let posYInt = parseInt(parameterObject.split(",")[1])
				let xExtentInt = parseInt(parameterObject.split(",")[2])
				let yExtentInt = parseInt(parameterObject.split(",")[3])
				this.position = new Position({x:posXInt, y:posYInt})
				this.extent = new Position ({x:xExtentInt, y:yExtentInt})
	}
	else
	{
		for(var parameter in parameterObject)
		{
			if(parameter === "name")
			{
				this[parameter] = parameterObject[parameter]
			}
			if(typeof parameterObject !== "string" && parameterObject[parameter].type=== "Position")
			{
				this[parameter] = new Position(parameterObject[parameter])
			}
			else{this[parameter] = parameterObject[parameter]}
		}	
	}
	this.color = "orange";
	this.type ="Box"
	this.left = function()
	{
		return this.position.x
	}
	this.right = function()
	{
		return this.extent.x + this.left()
	}
	this.oben = function()
	{
		return this.position.y
	}
	this.bottom = function()
	{
		return this.extent.y + this.oben()
	}
	this.obenRight = function()
	{
		return new Position({x:this.right(), y:this.oben()})
	}
	this.bottomLeft = function()
	{
		return new Position({x:this.left(), y:this.bottom()})
	}
	this.obenLeft = function()
	{
		return this.position
	}
	this.bottomRight = function()
	{
		return this.position.plus(this.extent)
	}
	this.width = function()
	{
		return this.extent.x
	}
	this.height = function()
	{
		return this.extent.y
	}
	this.centerPoint = function()
	{
		return this.position.plus(new Position({x:(this.width()/2), y:(this.height()/2)}))
	}
	this.translate = function(aPosition)
	{
		this.position.plusModify(aPosition)
	}
	this.reposition = function(aPosition)
	{
		this.position = aPosition
	}
	this.isIntersectingWith = function(anotherBox)
	{
		if(this.obenLeft().isInside(anotherBox)){return true}
		if(this.obenRight().isInside(anotherBox)){return true}	
		if(this.bottomRight().isInside(anotherBox)){return true}
		if(this.bottomLeft().isInside(anotherBox)){return true}

		return false
	}
	this.draw = function()
	{
		let oldstyle = canvasContext.strokeStyle	
		canvasContext.strokeStyle = this.color
		canvasContext.strokeRect(this.position.x, this.position.y, this.extent.x, this.extent.y)
		canvasContext.strokeStyle = oldstyle
	}
	this.changeColorToRed = function() 
	{
		this.color = "red";		
	}
	this.shortestIntersection = function(aBox)
	{
			let siPoint = new Position({x:50009999, y:50009999})
			if(this.obenLeft().isInside(aBox))
			{
				siPoint = this.obenLeft().minus(aBox.bottomRight())
			}
			if(this.obenRight().isInside(aBox))
			{
				let thisIntersection = this.obenRight().minus(aBox.bottomLeft())
				siPoint = siPoint.positionWithlowestValue(thisIntersection)
			}
			if(this.bottomLeft().isInside(aBox))
			{
				let thisIntersection = this.bottomLeft().minus(aBox.obenRight())
				siPoint = siPoint.positionWithlowestValue(thisIntersection)
			}
			if(this.bottomRight().isInside(aBox))
			{
				let thisIntersection = this.bottomRight().minus(aBox.obenLeft())
				siPoint = siPoint.positionWithlowestValue(thisIntersection)
			}
			if (siPoint.equals(new Position({x:50009999, y:50009999}))) {return "no Intersection"}
			else{return siPoint}
	}
}		
function Stream(parameterObject)
	//forceArray:[new Position("0,0"),new Position("1,0"), new Position("-1,0"), new Position("-1,-1"), new Position("1,1")], delay:38}
{	
	this.streamPosition = 0
	this.contentArray = []
	for(var parameter in parameterObject)
		{
			this[parameter] = parameterObject[parameter]
		}

	this.next = function()
	{
		this.streamPosition ++
		if(this.streamPosition === this.contentArray.length)
		{this.streamPosition = 0}
	}
	this.getContent = function()
	{
		return this.contentArray[this.streamPosition]
	}
	this.add = function(content)
	{
		this.contentArray.push(content)
	}
}
function ImageStream(parameterObject)
	//tick:10, imageArray:["string", "string", "anotherImageID"], imageArrayLeft:["string", "string", "anotherImageID"]
{
	this.streamPosition = 0;
	this.tick = 0;
	this.imageArray = ["air"]; //standard Array, its quackery
	this.imageArrayLeft = ["air"]
	for(var parameter in parameterObject)
	{
		if(parameter === "imageArray")
		{
			this.imageArray = parameterObject[parameter]
		}
		else if(parameter === "imageArrayLeft")
		{
			this.imageArrayLeft = parameterObject[parameter]
		}
		else
		{
			this[parameter] = parameterObject[parameter]	
		}
	}
	this.activeStream = this.imageArray;
	this.position = this.streamPosition;
	this.updateCounter = 0;
	this.played = 0;

	this.getArrayFromDirection = function(aDirection)
	{
		if(aDirection.x !== 1)
		{		
			return this.imageArrayLeft
		}
		return this.imageArray
	}
	
	this.playOnce = function()
	{
		this.playOneTime = true;
	}
	this.step = function(aDirection)
	{
		this.updateCounter ++;
		if(this.updateCounter >= this.tick)
		{
			this.next(aDirection)
			this.updateCounter=0
			//changed!
		}
	}
	this.next = function(aDirection)
	{
		if(this.position === this.getArrayFromDirection(aDirection).length-1)
		{
			this.position = 0;
			this.played = this.played + 1;
		}
		else{this.position ++}
	}
	this.getActiveImageId = function(aDirection)
	{ 
		return this.getArrayFromDirection(aDirection)[this.position];
	}
}
function ForceStream(parameterObject)
	//{forceArray:[new Position("0,0"),new Position("1,0"), new Position("-1,0"), new Position("-1,-1"), new Position("1,1")], delay:38}
{	
	this.delay = 0
	this.delayCounter = 0
	this.streamPosition = 0
	this.forceArray = [new Position()]
	for(var parameter in parameterObject)
		{
			
			if(parameter === "forceArray")
			{
						this.forceArray = parameterObject[parameter]
			}
			if(parameter === "delay")
			{
				this.delay = parseInt(parameterObject[parameter])
			}
			else
			{
				this[parameter] = parameterObject[parameter]
			}
		}

	this.stepDelay =function()
	{
		if(this.delayCounter >= this.delay)
		{
			this.next()
			this.delayCounter = 0
		}
		this.delayCounter ++
	}
	this.next = function(aDirection)
	{
		this.streamPosition ++
		if(this.streamPosition === this.forceArray.length)
		{this.streamPosition = 0}
	}
	this.readForce = function()
	{
		return this.forceArray[this.streamPosition]
	}
	this.useForce = function()
	{
		let force = this.forceArray[this.streamPosition]
		this.stepDelay()
		return force
	}
	this.mutateForce = function(aValue)
	{
		//wierd cause its a permanent modifier
		var newForceArray= []
		this.forceArray.forEach(force => newForceArray.push(force.multiply(aValue)))
		this.forceArray = newForceArray 
	}
}
function Action(parameterObject)
	//name:"aString", animation: anImageStream, force: aForceStream, priority: 34, enduranceCost: 2, duration:200
{
	this.name = "undefined"
	this.animation = new ImageStream({})
	this.force = new ForceStream({})
	this.sound = 'undefined'
	this.priority = 0
	this.enduranceCost = 0
	this.duration = 0
	for(var parameter in parameterObject)
{		
	if (parameter === "animation")
		{
			this[parameter] = new ImageStream(parameterObject["animation"])
		}
		else if(parameter === "force") 
		{
			this[parameter] = new ForceStream(parameterObject["force"])
		}
		else if(parameter === "sound")
		{
			console.log("no sound supported atm")
		}
		else
	
		{	
			if (typeof parameterObject[parameter] === "string")
				{
					this[parameter] = parameterObject[parameter]
				}
			else if (parameterObject[parameter] === null)
			{
				this[parameter] = Infinity
			}
			else if (typeof parameterObject[parameter] === "number")
				
				if(parameterObject[parameter] === "Infinity" || parameterObject[parameter] === Infinity)
				{
						this[parameter] = Infinity
				}
				else
				{
					this[parameter] = parseInt(parameterObject[parameter])
				}
		}
}
	
	this.maxDuration = this.duration
	this.resetDuration = function()
	{
		this.duration = this.maxDuration;
	}
	this.decrementDuration = function()
	{
		this.duration = this.duration -1
	}
	this.readForce = function()
	{
		return this.force.readForce()
	}
	this.useForce = function()
	{
		//use this once
		return this.force.useForce
	}
	this.forceRelativeToDirection = function(aDirection)
	{		
		return aDirection.multiplyWithPosition(this.force.useForce())
	}
	this.mutateForce = function(aValue)
	{
		this.force.mutateForce(aValue)
	}
}
function GameElement(parameterObject)
	//type:"aString", name:"Stapan Trofimowitch", author: "string", position: newPosition({x:231,y:122}), crashBox: new Box("44,192,432,402"), possibleActions:[anAction, anAction, anAction], direction:new Position({x:-1, y:1}), attachedElements:[aGameElement aGameElement]
	//the actions are stored in the generic object possible Actions
{
	this.type = "GameElement"
	this.name="changeNamen"
	this.author="me"
	this.maxEndurance = 5
	this.endurance = 5
	this.position = new Position({})
	this.crashBox = new Box({name:(this.name+"sCrashBox")})	
	this.possibleActions = {}
	this.direction = new Position({x:1, y:1}) //you should make a direction prototype with limited behaviour
	this.attachedElements = ""
	this.appliedActions = []
	
	this.attach = function(anElement)
	{
		if(this.attachedElements ==="")
		{
			this.attachedElements = anElement.name
		}
		else
		{
			if(!this.attachedElements.includes(anElement.name))
			this.attachedElements = this.attachedElements + " "+ anElement.name 
		}
	}
	this.deattach = function(anElement)
	{
		if(this.attachedElements(anElement.name))
		{
			this.attachedElements.replace(anElementName,'')
		}
	}
	
	this.possibleActions.idle = new Action(
								{
									name:'idle',
									force:new ForceStream({}), 
									priority:1, 
									enduranceCost:0.0, 
									duration:Infinity 
								})
	this.possibleActions.gravity = 		new Action(
								{//Action.call(this,{name:'gravity',force:new ForceStream({forceArray:[new Position({y:6})]}),priority:0,duration:Infinity})
									name:'gravity',
									force:new ForceStream({forceArray:[new Position({y:6})]}), 
									priority:0, 
									enduranceCost:0.0, 
									duration:Infinity 
								})					
	for(var parameter in parameterObject)
	{
		
		if(typeof parameterObject[parameter] === "integer")
		{
			this[paramet] = parameterObject[parameter]
		}
		if(typeof parameterObject[parameter] === "string")
		{
			this[parameter] = parameterObject[parameter]
		}
		if(parameter === "appliedActions")
		{
			this[parameter] = parameterObject[parameter]
		}
		if(parameter === "position")
		{
			this[parameter] = new Position(parameterObject[parameter])
		}
		else if(parameter === "direction")
		{
			this[parameter] = new Position(parameterObject[parameter])
		}
		else if(parameter === "crashBox")
		{
			if(typeof parameterObject[parameter] === "string")
			{
				this[parameter] = new Box(parameterObject[parameter])
			}
			else
			{
						var pam = parameterObject[parameter]
						pam['name'] = this.name+'crashBox'
						this[parameter] = new Box(pam)
			}
		}
		else if (parameter === "possibleActions")
		{
			for (var key in parameterObject["possibleActions"])
			{
				this.possibleActions[key] = new Action(parameterObject.possibleActions[key])
			}
		}
		else if(parameter === "attachedElements" && this.type === 'Bird')
		{
			//1. go through world and find the object you want to attach or	
				//you could remember wich objects are in search them later on the fly(it could be just the list of names)
			//2. go create the object you want to connect here
				//if you create it here you shouldnt create it anywhere else
			
			//hier sollte nur der verweis auf ein objekt stehen nicht aber das objekt

		}
	}
	
	this.layerOn = "undefined"

	
	this.totalForceVector = new Position()
	//Actions
	this.redifineOnusIdle = function(anAction)
	{
		this.possibleActions.idle = anAction
	}
	
	this.addAction = function(anAction)
	{
			this.possibleActions[anAction.name] = anAction
	}
	
	this.getDirection = function(){return this.direction}
	
	this.turnLeft = function()
	{
		if (this.direction !== new Position({x:-1, y:1}))
		{
			this.direction = new Position({x:-1, y:1})
		}
	}
	this.turnRight = function()
	{
		if (this.direction !== new Position({x:1, y:1}))
		{
			this.direction = new Position({x:1, y:1})
		}
	}
	
	this.releaseForces = function()
	{
		this.translate(this.totalForceVector)
		this.totalForceVector = new Position()
	}
	
	//Action management
	this.getActionByName = function(anActionName)
	{
		var found ='undefined' 
		this.appliedActions.forEach(action=>{if(action.name === anActionName){found = action}})
		return found
	}
	
	this.containsAction = function(anActionName)
	{
		//Note: There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behaviour, the .forEach() method is the wrong tool, use a plain loop instead. If you are testing the array elements for a predicate and need a boolean return value, you can use every() or some() instead
		var bool= false
		this.appliedActions.forEach(action=>{if(action.name === anActionName){bool= true}})
		return bool
	}
	
	this.applyAction = function(anActionName)
	{
		if(anActionName in this.possibleActions)
		{
			if (!this.appliedActions.includes(anActionName))
				{this.appliedActions.push(anActionName)}
		}
	}
	
	this.removeAction =function(anActionName)
	{
		this.appliedActions = this.appliedActions.filter(action => anActionName !== action)
	}
	
	this.removeExpiredActions = function()
	{
		//this.appliedActions = this.appliedActions.filter(action => action.duration > 0)
		for(var i=0;i<this.appliedActions.length; i++)
		{
			if (this.possibleActions[this.appliedActions[i]].duration < 1)
			{
				this.possibleActions[this.appliedActions[i]].resetDuration()
				this.removeAction(this.appliedActions[i])
			}
		}
	}
	
	this.treatActions = function(anElement)
	{		
		let highestPriority = 0
		//possible Actions are saved in the Object
		//applied actions are References to these (you should think about an action Bag)
		//appliedActions["fds", "fjlke"]
		this.appliedActions.forEach(actionName => 
		{var action = this.possibleActions[actionName] 
			if (action.sound !== 'undefined' && sound === 'on'){action.sound.play()}
			
			if(action.name ==='move')
			{
				this.totalForceVector = this.totalForceVector.plus(action.forceRelativeToDirection(anElement.getDirection()).multiply(this.speed))
			}
			if(action.name === 'fly')
			{
				this.totalForceVector = this.totalForceVector.plus(action.forceRelativeToDirection(anElement.getDirection()).multiply(this.flySkill))
			}
			else
			{
				this.totalForceVector = this.totalForceVector.plus(action.forceRelativeToDirection(anElement.getDirection()))
			}
			this.endurance = this.endurance - action.enduranceCost
			if(action.priority > highestPriority)
			{
				this.activeAnimation = action.animation
				highestPriority = action.priority
			}
			this.removeExpiredActions()
			action.decrementDuration()
		})
	}
	
	this.draw = function()
	{	let imgIdentifire = this.activeAnimation.getActiveImageId(this.direction)
		if (imgIdentifire in pix)
		{
			canvasContext.drawImage(pix[imgIdentifire], this.position.x, this.position.y);
			this.activeAnimation.step(this.direction);
			//check if changed?
			}
		else
		{
			let imageGathering = JSON.parse(localStorage.getItem("savedPix"))
			let imageSrc = imageGathering[this.activeAnimation.getActiveImageId(this.direction)]
			let imgToDraw = new Image()
			imgToDraw.src = imageSrc
			canvasContext.drawImage(imgToDraw, this.position.x, this.position.y);
			this.activeAnimation.step(this.direction);
		}
	}
	this.translate = function(aVector)
	{
		this.move(aVector)
		this.crashBox.translate(aVector)
		if(this.attachedElements !== "")
		{	
			let nameArray = this.attachedElements.split(" ")
			if(nameArray !== undefined)
			{
				for(var i = 0; i<nameArray.length; i++)
				{
					world.getElementByName(nameArray[i]).translate(aVector)
				}
			}
		}
	}
	this.reposition = function(aPosition)
	{
		//keep the offset of the attached elements
		let oldPosition = this.position
		this.position = aPosition
		this.attachedElements.forEach(element=>{
			let offset = oldPosition.minus(element.position)
			element.reposition(aPosition.minus(offset))
			})
	}
	this.move = function(aPosition)
	{
			this.position.plusModify(aPosition)
	}
	//Enviroment
	this.pushOutIntersectingElement = function(anElement)
	{ 	
		let intersectionDepth = ((this.crashBox.shortestIntersection(anElement.crashBox)).multiply(-1))	
		this.translate(intersectionDepth.cutHigher())
	}
	this.isPenetratedBy = function(aPenetraitor)
	{
	//overide it in subclass for behaviour
		aPenetraitor.pushOutIntersectingElement(this)
	}
	
	this.checkEnviroment = function()
	{
		let self = this;
		//überprüfe alle elemente auf der selben ebene
		//für alle elemented
		
		world.levelToBe.layers[this.layerOn].getElements().forEach((thing)=>
		{
			if (self.crashBox.isIntersectingWith(thing.crashBox))
				{
					thing.isPenetratedBy(self);			
				}	
		})
	}
	
	this.actionIsApplied = function(anActionName)
	{
		for(var i = 0; i < this.appliedActions.length; i++)
		{
			if (this.appliedActions[i].name == anActionName) 
			{
				return true;				
			}
		}
		return false
	}
	
	this.applyAction("idle")
	
	this.applyUniqueAction = function(anActionName)
	{ 
		this.appliedActions = []
		this.applyAction(anActionName)
	}
	
	this.clearKnownActions = function()
	{
		this.possibleActions = {}
	}
	
	this.replaceIdle = function(anAction)
	{
		this.possibleActions["idle"] = anAction
		this.activeAnimation = this.possibleActions["idle"].animation
	}
}
function SimpleBackgroundElement(parameterObject)
	//likeGameElement so maybe its not needet ->> this is the worst example of a comment, write - for what it is
{
		GameElement.call(this, parameterObject)
		this.type = "SimpleBackgroundElement"
		this.imageID ="blackBox"
		if("imageID" in parameterObject)
		{
			this["imageID"] = parameterObject["imageID"] 
		}
		this.possibleActions.idle.animation = new ImageStream(
										{
											tick:Infinity,
											imageArray:
											[
												this.imageID
											]
										})
}
SimpleBackgroundElement.prototype = new GameElement({});

function GroundElement(parameterObject)
	//a GameElement with the type ground
{
		SimpleBackgroundElement.call(this, parameterObject);
		this.type = "Ground"
}	
GroundElement.prototype = new SimpleBackgroundElement({});

function Camera(parameterObject)
//if it s moving paralax layer moves
//its followed by other elements
{
	GameElement.call(this,parameterObject)

	this.type = "Camera"
	this.translate = function(aVector)
	{
		world.levelToBe.layers["foreground"].translate(aVector.opposite())
		
		//with same speed but no collision
		let lazyFactor1 = aVector.multiply(1)
		world.levelToBe.layers["background1"].translate(lazyFactor1.opposite())
		//slower cause its farer
		let lazyFactor = aVector.multiply(0.7)
		world.levelToBe.layers["background0"].translate(lazyFactor.opposite())
		//
		let lazybackground = aVector.multiply(0.5)
		world.levelToBe.layers["background"].translate(lazybackground.opposite())
		
		let lazynotThatFar = aVector.multiply(0.3)
		world.levelToBe.layers["notThatFar"].translate(lazynotThatFar.opposite())
		let lazyFactorFarAway = aVector.multiply(0.005)
		world.levelToBe.layers["faraway"].translate(lazyFactorFarAway.opposite())
	}
	this.possibleActions.organicMovement = new Action
	(
		{
			name:'organicMovement',
			force: new ForceStream({forceArray:[new Position("0,0"),new Position("1,0"), new Position("-1,0"), new Position("-1,-1"), new Position("1,1")], delay:8}),
			duration:Infinity
		}
	)
	this.possibleActions.shake = new Action(
	{
		name:'shake',
		force:new ForceStream({forceArray:[new Position(), new Position({y:11}),new Position(),new Position({y:-11})],  delay:2}),
		duration:25
	})
	this.focusElement = function(anElement)
	{
		anElement.getposition()
	}
	this.move = function(aVector)
	{
		//do Nothing
	}
	this.reposition = function(aVector)
	{
		//do Nothing
	}

}
Camera.prototype = new GameElement()

function Grid(parameterObject)
// ITS NOT PLUGGED IN AT THE MOMENT
// ITS PERSISTANCE IS NOT TESTED
// A Layer Contains a Grid. 
// A Fixed Sized Grid for positining GameElements
// With a fixed square size of 48*48
{
	this.type ="Grid"	
	this.cornerHandle = new Position()
	this.positions = 'undefined' //while lazy initialized it returns an Array of Arrays of Positions
	this.initPositions = function()
	{
		var tempPositions = []
		for(let row = 0; row <20; row++)
		{
			var newPillar=[]
			for(let pillar = 0; pillar < 20; pillar ++)
			{
				newPillar.push((new Position({x:48*row, y:48*pillar})).multiplyWithPosition(this.cornerHandle))
			}
			tempPositions.push(newPillar)
		}
		return tempPositions
	} 
	
	this.setCornerHandle= function(aPosition)
	{
		this.cornerHandle= aPosition
		this.initPositions()
	}
	
	this.getPositions = function()
	{
		if(this.positions === 'undefined')
			{this.positions = this.initPositions()}

		return this.positions
	}
	
	this.translate = function(aVector)
	{
		this.getPositions().forEach(function(pillarArray)
							{
								pillarArray.forEach(function(gridPosition)
										{
											gridPosition.plusModify(aVector)
										})
							})
		this.cornerHandle.plusModify(aVector)
	}
	
	this.draw = function(aColor)
	{
		this.getPositions().forEach(function(pillarArray)
								{
									pillarArray.forEach(function(gridPosition)
											{
												canvasContext.strokeStyle = aColor;
												canvasContext.strokeRect(gridPosition.x, gridPosition.y, 48, 48);
												canvasContext.strokeStyle = "black";
											})
								})
	}
}

function Layer(parameterObject)
//they contain an Array of GameElements
// parameterObject = {name:"a3Name", elements:[gameElement]}
{
	//this.grid = new Grid()
	this.name ='aName'
	this.elements =[]
	this.addElement = function(anElement)
	{
		anElement.layerOn= this.name
		this.getElements().push(anElement)
	}
	this.getElements = function()
	{
		return this.elements
	}
	if("name" in parameterObject)
	{
		this.name = parameterObject.name
	}
	if("elements"in parameterObject)
	{
		parameterObject.elements.forEach(element=>{
			if(element.type==="SimpleBackgroundElement")
				{
					var theGameElement = new SimpleBackgroundElement(element)
				}
			else if(element.type ==="AirConditionRusty")
				{
					var theGameElement = new AirConditionRusty(element)
				}
			else if(element.type ==="AirCondition")
				{
					var theGameElement = new AirCondition(element)
				}
			else if(element.type==="Gitter")
				{
					var theGameElement = new Gitter(element) 
				}	
			else if(element.type === "EnduranceBar")
				{
					var theGameElement = new EnduranceBar(element) 
				}	
			else if(element.type === "Ground")
				{
					var theGameElement = new GroundElement(element) 
				}
			else if(element.type === "HumanOne")
				{
					var theGameElement = new HumanOne(element) 
				}
			else if(element.type === "Cat")
				{
					var theGameElement = new Cat(element) 
				}
			else if(element.type === "Bird")
				{
					var theGameElement = new Bird(element)
				}
			else if(element.type === "Rain")
				{
					var theGameElement = new Rain(element)
				}
			else if(element.type === "Camera")
				{
					var theGameElement = new Camera(element)
				}
			else if(element.type === "GameElement")
				{
					var theGameElement = new GameElement(element)
				}
			else if(element.type==="Plattform")
				{
					var theGameElement = new Plattform(element) 
				}					
			else
			{
				throw Error('Der "typ" persitiert nicht');
			}
			this.addElement(theGameElement)
		})
	}
	
	
	this.getElementByName = function(aNameString)
	{
		var found = null
		this.getElements().forEach(element => {if(element.name === aNameString){found = element}})
		if (found !== null)
			{return found}
		else
			{return found}
	}
	
	this.translate = function(aVector)
	{		
		//this.grid.translate(aVector)
		this.getElements().forEach(function(element)
								{
										element.move(aVector)
										element.crashBox.translate(aVector)
								})
	}
	
	this.contains = function(aGameElementNameString)
	{
		var bool=false
		this.getElements().forEach(element=>{if(element.name === aGameElementNameString){bool=true}})
		return bool
	}
	
	this.removeElement = function(aGameElementNameString)
	{
		var newElementList=[]
		this.getElements().forEach(element=>{if(element.name !==aGameElementNameString){newElementList.push(element)}})
		this.elements= newElementList
	}
	
	this.draw = function()
	{
		this.getElements().forEach(element =>{element.draw()})
	}
}
function Level(parameterObject)
	//A Container containing the Layers
	//parameterObject = {layers:{[aName:newLayer(), a2Name:newLayer(), a3Name:newLayer()}}
{
	this.layers = {} //{layers:{aName:new Layer({name:"aName"}), a2Name:new Layer({name:"a2Name"}), a3Name:new Layer({name:"a3Name", elements:[gameElement]})}})
	for(var parameter in parameterObject)
	{
		if(parameter === "layers"){
			for(var genericLayer in parameterObject["layers"])
			{
				this["layers"][genericLayer] = new Layer(parameterObject["layers"][genericLayer])
			}
		}	
		else
		{
			this[parameter] = parameterObject[parameter]	
		}
	}
	this.draw = function()
	{
		for(var layer in this.layers){this.layers[layer].draw()}
	}
	this.getElements = function()
	{
		var elements =[]
		for(var layer in this.layers)
		{
			elements = elements.concat(this.layers[layer].getElements())
		}
		return elements
	}
	this.getElementByName = function(aNameString)
	{
		var found = 'not Found'
		this.getElements().forEach(element => {if(element.name === aNameString){found = element}})
		if (found !== 'not Found')
			{return found}
		else
			{return found}
	}
	
}

function DefinitionMatrix(twoDArray)
	//IS NOT PLUGGEDIN ATM
	//its sad but obsolete
	//its Perstance is not tested
	//sets lazy tiles blocked and non blocking elements
{
	this.matrix = twoDArray;
	this.hasChanged = true;
}
function World(parameterObject)
	//parameterObject = {name:"aString", type:"aString", bird:aBird, levels:stub, levelToBe: new SpecificLevel, camera: new Camera()}
{
	this.name = "world"
	this.type = "World"
	this.bird = undefined
	this.levels = new Stream()

	for(var parameter in parameterObject)
	{
		if(parameter === "levels")
			{
				this["parameter"] = new Stream({})
				parameterObject["levels"].contentArray.forEach(level =>{
					var persistanteLevel = new Level(level)
					this.levels.add(persistanteLevel)
				}
				)
			}
		else
		{
			this[parameter] = parameterObject[parameter]	
		}
	}

	//leaveLevel enterLevel() cameraFocus(aGameElement)
	//this.levelToBe.layers.foreground.addElement(this.bird,'foreground')
	//this.levelToBe.layers.foreground.addElement(this.camera,'foreground')
	this.getElements = function()
	{
		var elements= []
		this.levels.contentArray.forEach(level => elements = elements.concat(level.getElements()))
		return elements
	}
	this.getElementByName = function(aNameString)
	{
		var found = 'not Found'
		this.getElements().forEach(element => {if(element.name === aNameString){found = element}})
		return found
		
	}
	this.isNameUnique = function(aName)
	{
		var flag = false
		var returnValue = true
		this.getElements().forEach(element => {
				
				if (element.name === aName & flag === true) 
					{returnValue = false}
				if (element.name === aName) 
					{flag = true}
		})
		return returnValue
	}
	
	//this.bird = new Bird({name:"bird",author:"me", position:"300,300",crashBox:"310,320,25,25"})
	//this.levels = new Stream({contentArray:[new PresentationLevel(), new NightsEndLevel()] })
	this.levelToBe = this.levels.getContent()
	this.bird = this.getElementByName("bird")
	
}


