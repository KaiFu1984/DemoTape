

// <img id="DarkStones1" src="Images/Tiles/Darkstones/DarkStones1.png">
// <img id="DarkStones2" src="Images/Tiles/Darkstones/DarkStones2.png">
// <img id="DarkStones3" src="Images/Tiles/Darkstones/DarkStones3.png">
// <img id="DarkStones4" src="Images/Tiles/Darkstones/DarkStones4.png">
// <img id="DarkStones5" src="Images/Tiles/Darkstones/DarkStones5.png">
// <img id="DarkStones6" src="Images/Tiles/Darkstones/DarkStones6.png">
//deprecated

if(localStorage.getItem("savedPix") ===null) { 	localStorage.setItem("savedPix",JSON.stringify({}))}	

const pix = {}

const Bushalte = new Image()
Bushalte.src = "Images/Items/Bushalte/Bushalte.png"
pix["bushalte"] = Bushalte
const Folie1 = new Image()
Folie1.src = "Images/Presaentation/Folie1.png"
pix["folie1"] = Folie1

// Genere Principels
const SmoothHeaven = new Image()
SmoothHeaven.src ="Images/Backgrounds/Heaven/SmoothHeaven.png"
pix["smoothHeaven"] = SmoothHeaven

const Air = new Image();
Air.src ="Images/Tiles/Air/Air.png"
pix["air"] = Air

//Presentation Fourniture
const WhiteWall = new Image();
WhiteWall.src ="Images/PresentationLab/WhiteWall.png"
pix["whiteWall"] = WhiteWall

const BigBlock = new Image();
BigBlock.src ="Images/PresentationLab/BigBlock.png"
pix["bigBlock"] = BigBlock


const BlackBox = new Image();
BlackBox.src = "Images/Tiles/Air/BlackBox.png"
pix["blackBox"] = BlackBox

const Bird2WalkLeft1 = new Image();
Bird2WalkLeft1.src = "Images/Creatures/Bird/Bird2WalkLeft1.png"
pix["bird2WalkLeft1"] = Bird2WalkLeft1

const Bird2WalkLeft2 = new Image();
Bird2WalkLeft2.src = "Images/Creatures/Bird/Bird2WalkLeft2.png"
pix["bird2WalkLeft2"] = Bird2WalkLeft2

const Bird2WalkLeft3 = new Image();
Bird2WalkLeft3.src = "Images/Creatures/Bird/Bird2WalkLeft3.png"
pix["bird2WalkLeft3"] = Bird2WalkLeft3

const Bird2WalkLeft4 = new Image();
Bird2WalkLeft4.src = "Images/Creatures/Bird/Bird2WalkLeft4.png"
pix["bird2WalkLeft4"] = Bird2WalkLeft4

const Bird2WalkLeft5 = new Image();
Bird2WalkLeft5.src = "Images/Creatures/Bird/Bird2WalkLeft5.png"
pix["bird2WalkLeft5"] = Bird2WalkLeft5

const Bird2WalkRight1 = new Image();
Bird2WalkRight1.src = "Images/Creatures/Bird/Bird2WalkRight1.png"
pix["bird2WalkRight1"] = Bird2WalkRight1

const Bird2WalkRight2 = new Image();
Bird2WalkRight2.src = "Images/Creatures/Bird/Bird2WalkRight2.png"
pix["bird2WalkRight2"] = Bird2WalkRight2

const Bird2WalkRight3 = new Image();
Bird2WalkRight3.src = "Images/Creatures/Bird/Bird2WalkRight3.png"
pix["bird2WalkRight3"] = Bird2WalkRight3

const Bird2WalkRight4 = new Image();
Bird2WalkRight4.src = "Images/Creatures/Bird/Bird2WalkRight4.png"
pix["bird2WalkRight4"] = Bird2WalkRight4

const Bird2WalkRight5 = new Image();
Bird2WalkRight5.src = "Images/Creatures/Bird/Bird2WalkRight5.png"
pix["bird2WalkRight5"] = Bird2WalkRight5

const Bird2IdleIn = new Image();
Bird2IdleIn.src = "Images/Creatures/Bird/Bird2IdleIn.png"
pix["bird2IdleIn"] = Bird2IdleIn

const Bird2IdleInLeft = new Image();
Bird2IdleInLeft.src = "Images/Creatures/Bird/Bird2IdleInLeft.png"
pix["bird2IdleInLeft"] = Bird2IdleInLeft

const Bird2FlapRight1 = new Image();
Bird2FlapRight1.src = "Images/Creatures/Bird/Bird2FlapRight1.png"
pix["bird2FlapRight1"] = Bird2FlapRight1

const Bird2FlapRight2 = new Image();
Bird2FlapRight2.src = "Images/Creatures/Bird/Bird2FlapRight2.png"
pix["bird2FlapRight2"] = Bird2FlapRight2

const Bird2FlapLeft1 = new Image();
Bird2FlapLeft1.src = "Images/Creatures/Bird/Bird2FlapLeft1.png"
pix["bird2FlapLeft1"] = Bird2FlapLeft1

const Bird2FlapLeft2 = new Image();
Bird2FlapLeft2.src = "Images/Creatures/Bird/Bird2FlapLeft2.png"
pix["bird2FlapLeft2"] = Bird2FlapLeft2

const Bird2GlideLeft = new Image();
Bird2GlideLeft.src = "Images/Creatures/Bird/Bird2GlideLeft.png"
pix["bird2GlideLeft"] = Bird2GlideLeft

const Bird2FlapDownLeft = new Image();
Bird2FlapDownLeft.src = "Images/Creatures/Bird/Bird2FlapDownLeft.png"
pix["bird2FlapDownLeft"] = Bird2FlapDownLeft

const Bird2GlideRight = new Image();
Bird2GlideRight.src = "Images/Creatures/Bird/Bird2GlideRight.png"
pix["bird2GlideRight"] = Bird2GlideRight

const Bird2FlapDownRight = new Image();
Bird2FlapDownRight.src = "Images/Creatures/Bird/Bird2FlapDownRight.png"
pix["bird2FlapDownRight"] = Bird2FlapDownRight

const BirdFallRight01 = new Image();
BirdFallRight01.src = "Images/Creatures/Bird/Fall/BirdFallRight01.png"
pix["birdFallRight01"] = BirdFallRight01

const BirdFallRight02 = new Image();
BirdFallRight02.src = "Images/Creatures/Bird/Fall/BirdFallRight02.png"
pix["birdFallRight02"] = BirdFallRight02

const BirdFallLeft01 = new Image();
BirdFallLeft01.src = "Images/Creatures/Bird/Fall/BirdFallLeft01.png"
pix["birdFallLeft01"] = BirdFallLeft01

const BirdFallLeft02 = new Image();
BirdFallLeft02.src = "Images/Creatures/Bird/Fall/BirdFallLeft02.png"
pix["birdFallLeft02"] = BirdFallLeft02

const BirdSwirlRight01 = new Image();
BirdSwirlRight01.src = "Images/Creatures/Bird/Swirl/BirdSwirlRight01.png"
pix["birdSwirlRight01"] = BirdSwirlRight01

const BirdSwirlRight02 = new Image();
BirdSwirlRight02.src = "Images/Creatures/Bird/Swirl/BirdSwirlRight02.png"
pix["birdSwirlRight02"] = BirdSwirlRight02

const BirdSwirlRight03 = new Image();
BirdSwirlRight03.src = "Images/Creatures/Bird/Swirl/BirdSwirlRight03.png"
pix["birdSwirlRight03"] = BirdSwirlRight03

const BirdSwirlRight04 = new Image();
BirdSwirlRight04.src = "Images/Creatures/Bird/Swirl/BirdSwirlRight04.png"
pix["birdSwirlRight04"] = BirdSwirlRight04

const BirdSwirlRight05 = new Image();
BirdSwirlRight05.src = "Images/Creatures/Bird/Swirl/BirdSwirlRight05.png"
pix["birdSwirlRight05"] = BirdSwirlRight05

const Specht_Left_1 = new Image();
Specht_Left_1.src = "Images/Creatures/Specht/Specht_Left_1.png"
pix["specht_Left_1"] = Specht_Left_1

const Specht_Left_2 = new Image();
Specht_Left_2.src = "Images/Creatures/Specht/Specht_Left_2.png"
pix["specht_Left_2"] = Specht_Left_2

const Specht_Left_3 = new Image();
Specht_Left_3.src = "Images/Creatures/Specht/Specht_Left_3.png"
pix["specht_Left_3"] = Specht_Left_3

const Klimaanlage_1_Left = new Image();
Klimaanlage_1_Left.src = "Images/Items/AirCondition/AirCondition_1_Left.png"
pix["klimaanlage_1_Left"] = Klimaanlage_1_Left

const Klimaanlage_2_Left = new Image();
Klimaanlage_2_Left.src = "Images/Items/AirCondition/AirCondition_2_Left.png"
pix["klimaanlage_2_Left"] = Klimaanlage_2_Left

const AirConditionRusty_1_Left = new Image();
AirConditionRusty_1_Left.src = "Images/Items/AirConditionRusty/AirConditionRusty_1_Left.png"
pix["airConditionRusty_1_Left"] = AirConditionRusty_1_Left

const AirConditionRusty_2_Left = new Image();
AirConditionRusty_2_Left.src = "Images/Items/AirConditionRusty/AirConditionRusty_2_Left.png"
pix["airConditionRusty_2_Left"] = AirConditionRusty_2_Left

const AirConditionRusty_BloodStream1_Left = new Image();
AirConditionRusty_BloodStream1_Left.src = "Images/Items/AirConditionRusty/AirConditionRusty_BloodStream1_Left.png"
pix["airConditionRusty_BloodStream1_Left"] = AirConditionRusty_BloodStream1_Left

const AirConditionRusty_BloodStream2_Left = new Image();
AirConditionRusty_BloodStream2_Left.src = "Images/Items/AirConditionRusty/AirConditionRusty_BloodStream2_Left.png"
pix["airConditionRusty_BloodStream2_Left"] = AirConditionRusty_BloodStream2_Left

const AirConditionRusty_BloodStream3_Left = new Image();
AirConditionRusty_BloodStream3_Left.src = "Images/Items/AirConditionRusty/AirConditionRusty_BloodStream3_Left.png"
pix["airConditionRusty_BloodStream3_Left"] = AirConditionRusty_BloodStream3_Left

const AirConditionRusty_BloodStream4_Left = new Image();
AirConditionRusty_BloodStream4_Left.src = "Images/Items/AirConditionRusty/AirConditionRusty_BloodStream4_Left.png"
pix["airConditionRusty_BloodStream4_Left"] = AirConditionRusty_BloodStream4_Left


const Gitter01 = new Image();
Gitter01.src = "Images/Items/Gitter/Gitter01.png"
pix["gitter01"] = Gitter01

const Gitter02 = new Image();
Gitter02.src = "Images/Items/Gitter/Gitter02.png"
pix["gitter02"] = Gitter02

const Gitter03 = new Image();
Gitter03.src = "Images/Items/Gitter/Gitter03.png"
pix["gitter03"] = Gitter03

const Gitter04 = new Image();
Gitter04.src = "Images/Items/Gitter/Gitter04.png"
pix["gitter04"] = Gitter04

const Gitter05 = new Image();
Gitter05.src = "Images/Items/Gitter/Gitter05.png"
pix["gitter05"] = Gitter05

const KaugummiAutomat = new Image();
KaugummiAutomat.src = "Images/Items/KaugummiAutomat/KaugummiAutomat.png"
pix["kaugummiAutomat"] = KaugummiAutomat

const KippenAutomatAmerican = new Image();
KippenAutomatAmerican.src = "Images/Items/KippenAutomatAmerican/KippenAutomatAmerican.png"
pix["kippenAutomatAmerican"] = KippenAutomatAmerican

const KippenAutomatClassic = new Image();
KippenAutomatClassic.src = "Images/Items/KippenAutomatClassic/KippenAutomatClassic.png"
pix["kippenAutomatClassic"] = KippenAutomatClassic

const AvisCorp = new Image();
AvisCorp.src = "Images/Items/NeonSign/AvisCorp/AvisCorp.png"
pix["avisCorp"] = AvisCorp

const Trashcan = new Image();
Trashcan.src = "Images/Items/Trashcan/Trashcan.png"
pix["trashcan"] = Trashcan

const Fuchs_Sit_1 = new Image();
Fuchs_Sit_1.src = "Images/Creatures/Fox/Fuchs_Sit_1.png"
pix["fuchs_Sit_1"] = Fuchs_Sit_1

const Fuchs_Sit_2 = new Image();
Fuchs_Sit_2.src = "Images/Creatures/Fox/Fuchs_Sit_2.png"
pix["fuchs_Sit_2"] = Fuchs_Sit_2

const Fuchs_Sit_3 = new Image();
Fuchs_Sit_3.src = "Images/Creatures/Fox/Fuchs_Sit_3.png"
pix["fuchs_Sit_3"] = Fuchs_Sit_3

const Fuchs_Sit_4 = new Image();
Fuchs_Sit_4.src = "Images/Creatures/Fox/Fuchs_Sit_4.png"
pix["fuchs_Sit_4"] = Fuchs_Sit_4

const Fuchs_Sit_5 = new Image();
Fuchs_Sit_5.src = "Images/Creatures/Fox/Fuchs_Sit_5.png"
pix["fuchs_Sit_5"] = Fuchs_Sit_5

const Fuchs_Sit_6 = new Image();
Fuchs_Sit_6.src = "Images/Creatures/Fox/Fuchs_Sit_6.png"
pix["fuchs_Sit_6"] = Fuchs_Sit_6

const Fuchs_Sit_7 = new Image();
Fuchs_Sit_7.src = "Images/Creatures/Fox/Fuchs_Sit_7.png"
pix["fuchs_Sit_7"] = Fuchs_Sit_7

const Fuchs_Sit_8 = new Image();
Fuchs_Sit_8.src = "Images/Creatures/Fox/Fuchs_Sit_8.png"
pix["fuchs_Sit_8"] = Fuchs_Sit_8

const Rain1 = new Image();
Rain1.src = "Images/Effects/Rain/Rain1.png"
pix["rain1"] = Rain1

const Rain2 = new Image();
Rain2.src = "Images/Effects/Rain/Rain2.png"
pix["rain2"] = Rain2

const Rain3 = new Image();
Rain3.src = "Images/Effects/Rain/Rain3.png"
pix["rain3"] = Rain3

const Rain4 = new Image();
Rain4.src = "Images/Effects/Rain/Rain4.png"
pix["rain4"] = Rain4

const SpeedLinesLeft01 = new Image();
SpeedLinesLeft01.src = "Images/Effects/SpeedLines/SpeedLinesLeft01.png"
pix["speedLinesLeft01"] = SpeedLinesLeft01

const SpeedLinesLeft02 = new Image();
SpeedLinesLeft02.src = "Images/Effects/SpeedLines/SpeedLinesLeft02.png"
pix["speedLinesLeft02"] = SpeedLinesLeft02

const SpeedLinesLeft03 = new Image();
SpeedLinesLeft03.src = "Images/Effects/SpeedLines/SpeedLinesLeft03.png"
pix["speedLinesLeft03"] = SpeedLinesLeft03

const Thunder1 = new Image();
Thunder1.src = "Images/Effects/Thunder/Thunder1.png"
pix["thunder1"] = Thunder1

const Thunder2 = new Image();
Thunder2.src = "Images/Effects/Thunder/Thunder2.png"
pix["thunder2"] = Thunder2

const Thunder3 = new Image();
Thunder3.src = "Images/Effects/Thunder/Thunder3.png"
pix["thunder3"] = Thunder3

const Thunder4 = new Image();
Thunder4.src = "Images/Effects/Thunder/Thunder4.png"
pix["thunder4"] = Thunder4

const BlurryCity0= new Image()
BlurryCity0.src = "Images/Backgrounds/Heaven/BlurryCity0.png"
pix["BlurryCity0"] = BlurryCity0

const BlurryCity1= new Image()
BlurryCity1.src = "Images/Backgrounds/Heaven/BlurryCity1.png"
pix["BlurryCity1"] = BlurryCity1

const Moon = new Image();
Moon.src ="Images/Backgrounds/Heaven/Moon.png"
pix["moon"] = Moon

const Haus1 = new Image();
Haus1.src = "Images/Backgrounds/BackgroundHouses/Haus1.png"
pix["haus1"] = Haus1

const Haus2 = new Image();
Haus2.src = "Images/Backgrounds/BackgroundHouses/Haus2.png"
pix["haus2"] = Haus2

const Haus3 = new Image();
Haus3.src = "Images/Backgrounds/BackgroundHouses/Haus3.png"
pix["haus3"] = Haus3

const Haus4 = new Image();
Haus4.src = "Images/Backgrounds/BackgroundHouses/Haus4.png"
pix["haus4"] = Haus4

const Haus5 = new Image();
Haus5.src = "Images/Backgrounds/BackgroundHouses/Haus5.png"
pix["haus5"] = Haus5

const GlattesPflaster = new Image();
GlattesPflaster.src = "Images/Tiles/GlattesPflaster.png"
pix["glattesPflaster"] = GlattesPflaster

const BlumenKubel = new Image();
BlumenKubel.src = "Images/Items/Blumenkübel/BlumenKubel.png"
pix["blumenKubel"] = BlumenKubel

const Kippenautomat = new Image();
Kippenautomat.src = "Images/Items/Blumenkübel/Kippenautomat.png"
pix["kippenautomat"] = Kippenautomat

const MullKubel = new Image();
MullKubel.src = "Images/Items/Blumenkübel/MullKubel.png"
pix["mullKubel"] = MullKubel

const Telefonzelle = new Image();
Telefonzelle.src = "Images/Items/Blumenkübel/Telefonzelle.png"
pix["telefonzelle"] = Telefonzelle

const Wall = new Image();
Wall.src = "Images/Items/Blumenkübel/Wall.png"
pix["wall"] = Wall

const OneLeft01 = new Image();
OneLeft01.src = "Images/Humans/One/OneLeft01.png"
pix["oneLeft01"] = OneLeft01

const OneLeft02 = new Image();
OneLeft02.src = "Images/Humans/One/OneLeft02.png"
pix["oneLeft02"] = OneLeft02

const OneRight01 = new Image();
OneRight01.src = "Images/Humans/One/OneRight01.png"
pix["oneRight01"] = OneRight01

const OneRight02 = new Image();
OneRight02.src = "Images/Humans/One/OneRight02.png"
pix["oneRight02"] = OneRight02

const WalkLeft01 = new Image();
WalkLeft01.src = "Images/Humans/One/WalkLeft01.png"
pix["walkLeft01"] = WalkLeft01

const WalkLeft02 = new Image();
WalkLeft02.src = "Images/Humans/One/WalkLeft02.png"
pix["walkLeft02"] = WalkLeft02

const WalkLeft03 = new Image();
WalkLeft03.src = "Images/Humans/One/WalkLeft03.png"
pix["walkLeft03"] = WalkLeft03

const WalkRight01 = new Image();
WalkRight01.src = "Images/Humans/One/WalkRight01.png"
pix["walkRight01"] = WalkRight01

const WalkRight02 = new Image();
WalkRight02.src = "Images/Humans/One/WalkRight02.png"
pix["walkRight02"] = WalkRight02

const WalkRight03 = new Image();
WalkRight03.src = "Images/Humans/One/WalkRight03.png"
pix["walkRight03"] = WalkRight03

const Katze1 = new Image();
Katze1.src = "Images/Creatures/Katze/Katze1.png"
pix["katze1"] = Katze1

const Katze2 = new Image();
Katze2.src = "Images/Creatures/Katze/Katze2.png"
pix["katze2"] = Katze2

const Katze3 = new Image();
Katze3.src = "Images/Creatures/Katze/Katze3.png"
pix["katze3"] = Katze3

const Katze4 = new Image();
Katze4.src = "Images/Creatures/Katze/Katze4.png"
pix["katze4"] = Katze4

const BirdDie01 = new Image();
BirdDie01.src = "Images/Creatures/Bird/Die/BirdDie01.png"
pix["birdDie01"] = BirdDie01

const BirdDie02 = new Image();
BirdDie02.src = "Images/Creatures/Bird/Die/BirdDie02.png"
pix["birdDie02"] = BirdDie02

const BirdDie03 = new Image();
BirdDie03.src = "Images/Creatures/Bird/Die/BirdDie03.png"
pix["birdDie03"] = BirdDie03

const BirdDie04 = new Image();
BirdDie04.src = "Images/Creatures/Bird/Die/BirdDie04.png"
pix["birdDie04"] = BirdDie04

const BirdDie05 = new Image();
BirdDie05.src = "Images/Creatures/Bird/Die/BirdDie05.png"
pix["birdDie05"] = BirdDie05

const BirdDie06 = new Image();
BirdDie06.src = "Images/Creatures/Bird/Die/BirdDie06.png"
pix["birdDie06"] = BirdDie06

const BirdDie07 = new Image();
BirdDie07.src = "Images/Creatures/Bird/Die/BirdDie07.png"
pix["birdDie07"] = BirdDie07

const BirdDie08 = new Image();
BirdDie08.src = "Images/Creatures/Bird/Die/BirdDie08.png"
pix["birdDie08"] = BirdDie08

const BirdDie09 = new Image();
BirdDie09.src = "Images/Creatures/Bird/Die/BirdDie09.png"
pix["birdDie09"] = BirdDie09

const SmoothVignette = new Image();
SmoothVignette.src = "Images/Vignettes/smoothViniette.png"
pix["smoothVignette"] = SmoothVignette



