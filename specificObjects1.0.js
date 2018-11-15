//********************************************************
//*****************SpecificBirdGameObjects****************
//********************************************************
//"A JavaScript object is a collection of named values"

"use strict"
function WorldOne(parameterObject)
	//you need directions and RealLayers after loading
{

	this.name = "world"
	this.type = "World"
	this.bird = new Bird(parameterObject["bird"]) 
	this.levels = new Stream(parameterObject["levels"]) 
	this.levelToBe = new TestLab(parameterObject["levelToBe"])
	this.camera = new Camera()
	this.levelToBe.layers.foreground.addElement(this.bird,'foreground')
	this.levelToBe.layers.foreground.addElement(this.camera,'foreground')
	this.bird.attach(this.camera)
}
function Cat(pmo)
{
	GameElement.call(this, pmo)
	this.type = "Cat"
	this.possibleActions.idle.animation = new ImageStream(
									{
										tick:10,
										imageArray:
											[
											"katze1",
											"katze2",
											"katze3",
											"katze4",
											],
										imageArrayLeft:
											[
											"katze1",
											"katze2",
											"katze3",
											"katze4",
											],
									})
									
		
		this.isPenetratedBy = function(aPenetraitor)
		{
			if(aPenetraitor.type==='Bird')
			{
				world.bird.applyDie()
			}
		}
}
Cat.prototype = new GameElement()

function EnduranceBar(pmo)
{
	//Kill the question for collision???
	GameElement.call(this, pmo)
	this.type = "EnduranceBar"
	this.draw = function()
	{
		colorRect(this.position.x, this.position.y,world.bird.endurance*10 , 10, 'green')
	}
}
EnduranceBar.prototype = new GameElement();

function Bird(parameterObject)
{	
	GameElement.call(this,parameterObject)
	
	this.type='Bird'
	this.coolness = 3;
	this.speed = 1;
	this.glidingSkill= 6;
	this.jumpPower = 16;

	this.recoveryRate = 0.1;

	this.flySkill =1;
	//Add Possible Actions 

	// after defining actions there are imutable
	this.possibleActions.move= new Action(
								{
									name:'move', 
									animation:new ImageStream(
									{
										tick:6,
										imageArray:
											[
											"bird2WalkRight1",
											"bird2WalkRight2",
											"bird2WalkRight3",
											"bird2WalkRight4",
											"bird2WalkRight5",
											],
										imageArrayLeft:
										[
											"bird2WalkLeft1",
											"bird2WalkLeft2",
											"bird2WalkLeft3",
											"bird2WalkLeft4",
											"bird2WalkLeft5",
											]
										
									}),
										force:new ForceStream({forceArray:[new Position({x:this.speed * (this.direction.x)})]}),
										priority:10, 
										enduranceCost:0.1, 
										duration:2 
										})
	this.possibleActions.fly = new Action(
								{
									name:'fly', 
									animation:new ImageStream(
										{
										tick:4,
										imageArray:
											[
											"bird2FlapRight1",
											"bird2FlapRight2"
											],
										imageArrayLeft:
											[
											"bird2FlapLeft1",
											"bird2FlapLeft2",
											]		
										}),
										force:new ForceStream({forceArray:[new Position({y:-8})]}), 
										priority:15, 
										enduranceCost:0.5, 
										duration:10 
										})
	this.possibleActions.fall = new Action(
								{
									name:'fall', 
									animation:new ImageStream(
										{
										tick:7,
										imageArray:
											[
											"birdFallRight01",
											"birdFallRight02"
											],
										imageArrayLeft:
											[
											"birdFallLeft01",
											"birdFallLeft02",
											]		
										}),
										force:new ForceStream({}),
										priority:11, 
										enduranceCost:0, 
										duration:Infinity 
										})						
	this.possibleActions.glide = new Action(
								{
									name:'glide', 
									animation:new ImageStream(
										{
										tick:20,
										imageArray:
											[
											"bird2GlideRight",
											"bird2FlapDownRight"
											],
										imageArrayLeft:
											[
											"bird2GlideLeft",
											"bird2FlapDownLeft",
											]		
										}),
										force:new ForceStream({forceArray:[new Position({x:3, y:-4})]}), 
										priority:14, 
										enduranceCost:1, 
										duration:Infinity 
										})					
	this.possibleActions.dash = new Action(
								{
									name:'dash', 
									animation:new ImageStream(
										{
										tick:10,
										imageArray:
											[
											"bird2GlideRight",
											"bird2FlapDownRight"
											],
										imageArrayLeft:
											[
											"bird2GlideLeft",
											"bird2FlapDownLeft",
											]		
										}),
										force:new ForceStream({forceArray:[new Position({x:25})]}), 
										priority:14, 
										enduranceCost:6, 
										duration:1 
										})
	
	this.possibleActions.swirlUp =  new Action(
								{
									name:'swirlUp', 
									animation:new ImageStream(
										{
										tick:3,
										imageArray:
											[
											"birdSwirlRight01",
											"birdSwirlRight02",
											"birdSwirlRight03",
											"birdSwirlRight04",
											"birdSwirlRight05"
											],
										imageArrayLeft:
											[
											"birdSwirlRight01",
											"birdSwirlRight02",
											"birdSwirlRight03",
											"birdSwirlRight04",
											"birdSwirlRight05"
											]		
										}),
										force:new ForceStream({forceArray:[new Position({y:-10})]}), 
										priority:30, 
										enduranceCost:1, 
										duration:60 
										})
	this.possibleActions.die =  new Action(
								{
									name:'die', 
									animation:new ImageStream(
										{
										tick:15,
										imageArray:
											[
											"birdDie01",
											"birdDie02",
											"birdDie03",
											"birdDie04",
											"birdDie05",
											"birdDie06",
											"birdDie07",
											"birdDie08",
											"birdDie09",
											],
											imageArrayLeft:
											[
											"birdDie01",
											"birdDie02",
											"birdDie03",
											"birdDie04",
											"birdDie05",
											"birdDie06",
											"birdDie07",
											"birdDie08",
											"birdDie09",
											]
											
										}),
										force:new ForceStream({forceArray:[new Position()]}), 
										priority:100, 
										enduranceCost:0, 
										duration:135 
										})

	this.possibleActions.idle.animation = new ImageStream(
									{
										tick:10,
										imageArray:
											[
											"bird2WalkRight1",
											"bird2IdleIn",
											],
										imageArrayLeft:
											[
											"bird2WalkLeft1",
											"bird2IdleInLeft",
											],
									})
	this.possibleActions.colibriFlight = new Action(
								{
									name:'fly', 
									animation:new ImageStream(
										{
										tick:2,
										imageArray:
											[
											"bird2FlapRight1",
											"bird2FlapRight2"
											],
										imageArrayLeft:
											[
											"bird2FlapLeft1",
											"bird2FlapLeft2",
											]		
										}),
										force:new ForceStream({forceArray:[new Position({y:-2})]}), 
										priority:16, 
										enduranceCost:0.8, 
										duration:10
										})
	this.applyAction("gravity")
	this.directIntersections = []
	this.checkEnviroment = function()
	{
		//dispatching?
		this.directIntersections=[]
		this.gatherDirectIntersections()
		
		
		if(this.appliedActions.includes('dash') && world.levelToBe.layers.effects.contains('speedLines')===false)
			{world.levelToBe.layers.effects.addElement(new SpeedLines({}),'effects')}
		else(world.levelToBe.layers.effects.removeElement('speedLines'))
		
		//handle sticky
		// if((this.directIntersections.contains('type','Plattform')))
			// {
				
				// var anElement = this.directIntersections.find(function(element){return element.type === 'Plattform'})
				// anElement.attach(this.name)
			// }
		// else{
			// anElement.deattach(this.name)
		// }
		
		//handle Fall
		if(this.directIntersections.length===0)
		{
			
			this.applyAction("fall")
		}
		else
		{ 
			if(this.appliedActions.includes('fall')&&(this.directIntersections.contains('type','Ground')))
			{
				let cam = world.getElementByName("camera")
				cam.applyAction("shake")
			}
			this.removeAction('fall')
			this.handleDirectIntersections()
		}
	}
	this.handleDirectIntersections = function()
	{	
		var self= this
		this.directIntersections.forEach((touchedElement)=>{
			touchedElement.isPenetratedBy(self)
			})
		this.removeAction('glide')
	}
	this.gatherDirectIntersections = function()
	{
		let self = this;
		//layerOn.getElements().forEach(...)
		world.levelToBe.layers[this.layerOn].getElements().forEach((otherElement)=>
		{
			if (self.crashBox.isIntersectingWith(otherElement.crashBox))
				{
					this.directIntersections.push(otherElement)			
				}				
		})
	}
	this.applyMove = function(speedMultiplicator)
	{
		//? this.speed = 1 whenever speed is changed call mutateSpeed		
		this.speed = Math.abs(speedMultiplicator)
		this.applyAction("move")
	}
	this.applyFly = function(controleMultiplicator)
	{
		if(!this.actionIsApplied('glide'))
		{	
			this.flySkill = Math.abs(controleMultiplicator)
			this.applyAction("fly")			
		}
	}
	this.applyGlide= function()
	{
		if(!this.actionIsApplied('fly') && this.actionIsApplied('fall'))
		{		
			this.applyAction("glide")
		}
	}
	this.applyDash = function()
	{
		this.removeAction('move')
		this.applyAction("dash")
	}
	this.applyDie = function()
	{
		this.applyAction("die")		
	}
	this.applyColibriFlight = function()
	{
		this.applyAction("colibriFlight")
	}
}
Bird.prototype = new GameElement();

function HumanOne(parameterObject)
{
	GameElement.call(this, parameterObject)
	this.type = "HumanOne"
	this.speed = 2
	this.possibleActions.move= new Action(
								{
									name:'move', 
									animation:new ImageStream(
									{
										tick:6,
										imageArray:
											[
												"walkRight01",
												"walkRight02",
												"walkRight03"
											],
										imageArrayLeft:
											[
												"walkLeft01",
												"walkLeft02",
												"walkLeft03"
											]
										
									}),
										force:new ForceStream({forceArray:[new Position({x:this.speed  * (this.direction.x)})]}),
										priority:10, 
										enduranceCost:0.1, 
										duration:80 
										})
										//idle is there just add the animation
	this.possibleActions.idle.animation = new ImageStream(
									{
										tick:10,
										imageArray:
											[
											"oneRight01",
											"oneRight02"
											],
										imageArrayLeft:
											[
											"oneLeft01",
											"oneLeft02"
											],
									})
	this.applyAction("move")
	this.applyAction("gravity")

		this.isPenetratedBy = function(aPenetraitor)
		{
			if(aPenetraitor.type==='Bird')
			{
				this.applyAction("move")
			}
		}
}
function Fox(parameterObject)
{
	
	GameElement.call (this,parameterObject)
	this.type = "Fox"
	this.possibleActions.idle.animation = new ImageStream(
									{
									tick:12,
									imageArray:
										[
										"fuchs_sit_1",
										"fuchs_sit_2",
										"fuchs_sit_3",
										"fuchs_sit_4",
										"fuchs_sit_5",
										"fuchs_sit_6",
										"fuchs_sit_7",
										"fuchs_sit_8",
										]
									})
	 this.applyAction("gravity")
}
Fox.prototype = new GameElement()

function AirCondition(parameterObject)
{
	GameElement.call (this, parameterObject);
	this.type = "AirCondition"
	this.possibleActions.idle.animation = new ImageStream(
									{
									tick:6,
									imageArray:
										[
											"klimaanlage_1_Left",
											"klimaanlage_2_Left"
										]
									})
	this.applyAction("gravity")								
}
AirCondition.prototype = new GameElement();

function Gitter(paramObject)
{
	GameElement.call (this, paramObject);
	this.type= "Gitter"
	this.possibleActions.idle.animation = new ImageStream(
									{
									tick:10,
									imageArray:
										[
											"gitter01",
											"gitter02",
											"gitter03",
											"gitter04",
											"gitter05"
										]
									})
	this.isPenetratedBy = function(aPenetraitor)
	{
		aPenetraitor.applyAction("swirlUp")
	}
	this.translate = function(aVector)
	{
		//its just pathing instead of break
	}
}
Gitter.prototype = new GameElement();

function Plattform(paramObject)
{
	GameElement.call (this, paramObject);
	this.type= "Plattform"
	this.possibleActions.idle.animation = new ImageStream(
									{
									tick:10,
									imageArray:
										[
											"kaugummiAutomat",
										]
									})
	this.possibleActions.idle.force = new ForceStream({delay:120, forceArray:[new Position("1,0"), new Position("-1,0")]})
	this.isPenetratedBy = function(aPenetraitor)
	{
		aPenetraitor.pushOutIntersectingElement(this)
		this.attach(aPenetraitor)
	}

}
Plattform.prototype = new GameElement();

function AirConditionRusty(parameterObject)
{
	GameElement.call (this, parameterObject);
	this.type= "AirConditionRusty"
	this.possibleActions.idle.animation = new ImageStream(
									{
										tick:6,
										imageArray:
										[
											"airConditionRusty_1_Left",
											"airConditionRusty_2_Left"
										]
									}	
									)
	this.possibleActions.kill = new Action(
								{
									name:'kill', 
									animation:new ImageStream(
									{
										tick:6,
										imageArray:
											[
											"airconditionrusty_bloodstream1_left",
											"airconditionrusty_bloodstream2_left",
											"airconditionrusty_bloodstream3_left",
											"airconditionrusty_bloodstream4_left"
											]
									}),
										force:new ForceStream({}), 
										priority:20, 
										enduranceCost:0.1, 
										duration:10 
										})
	
	// this.isPenetratedBy = function(aPenetraitor)
	// {
		// //super.isPenetratedBy();
		// aPenetraitor.pushOutIntersectingElement(this);
		// if(aPenetraitor.type() === 'Bird')
		// {
			// this.applyAction("kill")		
		// }
	// }
	this.applyAction("gravity")
}
AirConditionRusty.prototype = new GameElement()

function Specht(parameterObject)
{
	GameElement.call (this, parameterObject);
	this.type= "Specht"
	this.possibleActions.idle.animation = 	new ImageStream(
									{
									tick:4,
									imageArray:
										[
										"specht_left_1",
										"specht_left_2",
										"specht_left_3"
										]
									})
								
}
Specht.prototype = new GameElement()

function BlockOutTile(parameterObject)
{
	GameElement.call(this, parameterObject)
	this.type="BlockOutTile"
	this.possibleActions.idle.animation = new ImageStream(
								{
								tick:12,
								imageArray:
									[
									"blackbox"
									]
								})
	this.isPenetratedBy = function(aPenetraitor)
	{
		aPenetraitor.pushOutIntersectingElement(this)
	}
	this.translate = function()
	{
		
	}
}
BlockOutTile.prototype = new GameElement();

function SuburbBackground(parameterObject)
{
	GameElement.call(this, parameterObject);
	this.type="SuburbBackground"
	this.possibleActions.idle.animation = new ImageStream(
									{
									tick:10,
									imageArray:
									[
										"backgrounddark1"
									]
								})
}
SuburbBackground.prototype = new GameElement({})

function SpeedLines(parameterObject)
{
	GameElement.call(this,parameterObject)
	this.name='speedLines'
	this.type="SpeedLines"
	this.possibleActions.idle.animation =  new ImageStream(
										{
										tick:6,
										imageArray:[
										"speedlinesleft01",
										"speedlinesleft02",
										"speedlinesleft03",
										]}
										)
		this.possibleActions.thunder = new Action({
										name:'thunder',
										animation: new ImageStream(
										{
										tick:6,
										imageArray:
										[
										"thunder1",
										"thunder2",
										"thunder3",
										"thunder4								"
										]
										}),
										priority:20,
										duration:30,
										sound:new Audio('./sounds/stolenExplosion.mp3')
		})
							/this.applyAction("thunder")
}
SpeedLines.prototype = new GameElement()

function Rain(parameterObject)
{
		GameElement.call(this, parameterObject)
		this.type= "Rain"
		this.possibleActions.idle.animation =  new ImageStream(
										{
										tick:6,
										imageArray:[
										"rain1",
										"rain2",
										"rain3",
										"rain4"
										]}
										)
		this.possibleActions.idle.sound = new Audio('./Sounds/rain.wav')
		this.possibleActions.idle.sound.volume = 0.1
		this.possibleActions.thunder = new Action({
										name:'thunder',
										animation: new ImageStream(
										{
										tick:6,
										imageArray:
										[
											"thunder1",
											"thunder2",
											"thunder3",
											"thunder4								"
										]
										}),
										priority:20,
										duration:30,
										sound:new Audio('./sounds/stolenExplosion.mp3')
		})
							this.applyAction("thunder")
}
Rain.prototype = new GameElement()

function TestLab(parameterObject)
	//persistant build up of the elements
{
	Level.call(this, parameterObject)
	this.layers={}
	for(var layer in parameterObject["layers"])
	{
		this.layers[layer] = new Layer(parameterObject.layers[layer])
		//the elements from the parameterObject
	}
}
function PresentationLevel(parameterObject)
	//Remember Matrix? this is coding dojo
{
	Level.call(this, parameterObject)
	this.layers =
	{
		heaven: new Layer({name:"heaven"}),
		faraway: new Layer({name:"faraway"}), 
		background0:new Layer({name:"background0"}),
		background1:new Layer({name:"background1"}),
		foreground: new Layer({name:"foreground"}),
		pheno:new Layer({name:"pheno"}),
		effects:new Layer({name:"effects"}),
		vignette:new Layer({name:"vignette"}),
		showcase: new Layer({name:"showcase"})
	}
	//add Elements
	// let BigBlock = new GroundElement({name:"ground",position:"-200,800", crashBox:"-200,801,2000,2000",imageID:"bigBlock"})
	
	// this.layers.foreground.addElement(BigBlock, "foreground")
	let whiteWall = new SimpleBackgroundElement({name:"whiteWall", imageID:"whiteWall"})
	whiteWall.possibleActions.idle.sound = new Audio ('Sounds/NyghtHymn1.0.wav')
	this.layers.heaven.addElement(whiteWall, "heaven")
}

function NightsEndLevel(parameterObject)
{
	Level.call(this, parameterObject)
	this.layers =
		{
			heaven: new Layer({name:"heaven"}),
			faraway: new Layer({name:"faraway"}), 
			background0:new Layer({name:"background0"}),
			background1:new Layer({name:"background1"}),
			foreground: new Layer({name:"foreground"}),
			pheno:new Layer({name:"pheno"}),
			effects:new Layer({name:"effects"}),
			vignette:new Layer({name:"vignette"}),
			showcase: new Layer({name:"showcase"})
		}
		// heavenImage.possibleActions.idle.sound = new Audio ('./Sounds/NyghtHymn1.0.wav')
		// heavenImage.possibleActions.idle.sound.volume = 0.9
		//this.layers.faraway.addElement (new SimpleBackgroundElement({name:"heaven", imageID:EndOfNightBG}),'faraway')
		
		//addElements
		let blurryCity = new SimpleBackgroundElement({name:"blurryCity", position:"100,150"})
		blurryCity.possibleActions.idle.animation = new ImageStream({tick:70, imageArray:["BlurryCity0", "BlurryCity1"]})
		blurryCity.possibleActions.idle.sound= new Audio ('./Sounds/NyghtHymn1.0.wav')
		this.layers.faraway.addElement(blurryCity, "faraway")
	
		this.layers.faraway.addElement(new SimpleBackgroundElement({name:"moon", position:"500,50", imageID:"moon"}),"faraway")
		
		this.layers.background0.addElement(new SimpleBackgroundElement({name:"haus1", position:"100,88", imageID:"haus1"}),'background0')
		this.layers.background0.addElement(new SimpleBackgroundElement({name:"haus4", position:"800,122", imageID:"haus4"}),'background0')
	
		this.layers.background1.addElement(new SimpleBackgroundElement({name:"haus5", position:"300,100", imageID:"haus5"}),'background0')
		
		this.layers.background1.addElement(new SimpleBackgroundElement({name:"haus2",position:"700,77", imageID:"haus2"}),'background1')
		this.layers.background1.addElement(new SimpleBackgroundElement({name:"haus3",position:"1200,99", imageID:"haus3"}),'background1')
		
		this.layers.foreground.addElement(new GroundElement({name:"pflaster",position:"0,550", crashBox:"0,562,5800,48",imageID:"glattesPflaster"}),'foreground')
		this.layers.foreground.addElement(new Gitter({position:"660,500", crashBox:"660,500,122,50"}),'foreground')
		this.layers.foreground.addElement(new Gitter({position:"800,500", crashBox:"800,500,122,50"}),'foreground')
		this.layers.vignette.addElement(new SimpleBackgroundElement({name:"smoothVignette",position:"0,0",imageID:"smoothVignette"}),'vignette')
		
		var blumenKubel = new SimpleBackgroundElement({name:"blumenKubel",position:"177,222", crashBox:"200,340,50,50",imageID:"blumenKubel"})
		blumenKubel.applyAction("gravity")						
		this.layers.foreground.addElement(blumenKubel,'foreground')
		
		var telefonzelle = new GroundElement({name:"telefonzelle",position:"333,222", crashBox:"360,240,100,230",imageID:"telefonzelle"})
		telefonzelle.applyAction("gravity")						
		this.layers.foreground.addElement(telefonzelle,'foreground')
		
		
		this.layers.pheno.addElement(new Rain(),'pheno')
		this.layers.foreground.addElement(new AirCondition({position:"540,150", crashBox:"540,150,72,50"}),'foreground')
		this.layers.foreground.addElement(new AirCondition({position:"100,150", crashBox:"100,150,72,50"}),'foreground')
		this.layers.foreground.addElement(new SimpleBackgroundElement({name:"KaugummiAutomat",position:"800,200", crashBox:"800,200,50,50",imageID:"kaugummiAutomat"}),'foreground')
		this.layers.foreground.addElement(new SimpleBackgroundElement({name:"KippenAutomatAmerica",position:"950,200", crashBox:"950,200,120,70",imageID:"kippenAutomatAmerican"}),'foreground')
		this.layers.foreground.addElement(new SimpleBackgroundElement({name:"KippenClassic",position:"1150,200", crashBox:"1150,200,70,50",imageID:"kippenAutomatClassic"}),'foreground')
		this.layers.foreground.addElement(new SimpleBackgroundElement({name:"AvisCorp",position:"1250,200", crashBox:"1250,200,70,50",imageID:"avisCorp"}),'foreground')
		this.layers.foreground.addElement(new SimpleBackgroundElement({name:"trashcan",position:"1390,430", crashBox:"1390,430,70,50",imageID:"trashcan"}),'foreground')
		this.layers.foreground.addElement(new HumanOne({position:"490,300", crashBox:"490,300,70,160"}),'foreground')
		this.layers.showcase.addElement(new EnduranceBar({position:"20,20"}),'showcase')
		this.layers.foreground.addElement(new Cat({position:"1000,500", crashBox:"1000,500,50,80"}),'foreground')
}
//--------------------------------------------------------------------------------------------------------
//Camera
function CameraOne()
{
	Camera.call(this,{name:"camera"})
	this.translate = function(aVector)
	{
		world.levelToBe.layers["foreground"].translate(aVector.opposite())
		let lazyFactor = aVector.multiply(0.3)
		world.levelToBe.layers["background0"].translate(lazyFactor.opposite())
		let lazyFactor1 = aVector.multiply(10.0)
		world.levelToBe.layers["background1"].translate(lazyFactor1.opposite())
		let lazyFactorFarAway = aVector.multiply(0.0001)
		world.levelToBe.layers["faraway"].translate(lazyFactorFarAway.opposite())
	}
	this.possibleActions.organicMovement = new Action
	(
		{
			name:'organicMovement',
			force: new ForceStream({forceArray:[new Position("0,0"),new Position("0.01,0"), new Position("0.01,0"), new Position("0.01,0.01"), new Position("0.01,0.01")], delay:38}),
			duration:Infinity
		}
	)
	//this.applyAction("organicMovement")
}
CameraOne.prototype = new Camera()
//Actions
	//A List of actions 
//Elements
function SmoothHeavenElement()
{
	GameElement.call (this, {});
	this.type= "GameElement"
	this.possibleActions.idle.animation = new ImageStream(
									{
										tick:6,
										imageArray:
										[
											"smoothHeaven"
										]
									}	
									)
	
}
SmoothHeavenElement.prototype = new GameElement()

//Level
function City()
{
	Level.call(this, {})
	this.layers =
	{
		heaven: new Layer({name:"heaven"}),
		faraway: new Layer({name:"faraway"}), 
		notThatFar: new Layer({name:"notThatFar"}), 
		background:new Layer({name:"background"}),
		background0:new Layer({name:"background0"}),
		background1:new Layer({name:"background1"}),
		foreground: new Layer({name:"foreground"}),
		pheno:new Layer({name:"pheno"}),
		effects:new Layer({name:"effects"}),
		vignette:new Layer({name:"vignette"}),
		showcase: new Layer({name:"showcase"})
	}
	this.layers.heaven.addElement(new SmoothHeavenElement)
	let moon = new SimpleBackgroundElement({name:"moon", position:"500,50", imageID:"moon"})
	this.layers.faraway.addElement(moon)

	this.layers.background1.addElement(new SimpleBackgroundElement({name:"folie1", position:"0,0", imageID:"folie1"}))
	
	// gameElements
	//ausmessen 
	//wahre position extent y
	this.layers.foreground.addElement(new GameElement({name:"floor", position:"800,500",crashBox:"0,513,3960,274",imageID:"glattesPflaster", type:"Ground"}))
	
	var telefonzelle= new SimpleBackgroundElement({name:"telefonzelle", position:"1000,255",crashBox:"1020,275,138,225",imageID:"telefonzelle"})
	telefonzelle.applyAction("gravity")
	this.layers.foreground.addElement(telefonzelle)
	
	var bushalte =  new SimpleBackgroundElement({name:"bushalte", position:"1200,248",imageID:"bushalte"})
	this.layers.background1.addElement(bushalte)
	
	var gitter = new Gitter({name:"gitter01", position:"1300,450", crashBox:"1300,450,122,50"})
	this.layers.foreground.addElement(gitter)
	
	var airCondition = new AirCondition({position:"1700,428", crashBox:"1700,428,72,50"})
	this.layers.foreground.addElement(airCondition)
	
	var airConditionRusty = new AirConditionRusty({name:"airConditionRusty", position:"1710,350", crashBox:"1720,370,110,65"})
	this.layers.foreground.addElement(airConditionRusty)
	
	var kippenAutomat = new SimpleBackgroundElement({name:"KippenAutomatAmerica",position:"1830,200", crashBox:"1840,200,200,160",imageID:"kippenAutomatAmerican"})
	kippenAutomat.applyAction("gravity")
	this.layers.foreground.addElement(kippenAutomat)
	
	// var plattform = new Plattform({name:"Plattform", position:"400,400", crashBox:"400,400,50,50"})
	// this.layers.foreground.addElement(plattform)
	//houses
	this.layers.faraway.addElement(new SimpleBackgroundElement({name:"haus1", position:"100,200", imageID:"haus1"}))
	this.layers.background.addElement(new SimpleBackgroundElement({name:"haus3", position:"200,122", imageID:"haus3"}),)
	
	this.layers.background0.addElement(new SimpleBackgroundElement({name:"haus5", position:"500,100", imageID:"haus5"}))
		
	this.layers.notThatFar.addElement(new SimpleBackgroundElement({name:"haus2",position:"600,77", imageID:"haus2"}))
	this.layers.background0.addElement(new SimpleBackgroundElement({name:"haus4",position:"1200,99", imageID:"haus4"}))
	
	
}