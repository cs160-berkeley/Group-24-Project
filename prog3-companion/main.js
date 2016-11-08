
import Pins from "pins";

let toolbarSkin = new Skin({      width: 640, height: 34,      texture: new Texture("assets/toolbar.png"),      aspect: "fit"});

let toggleOffSkin = new Skin({      width: 135, height: 93,      texture: new Texture("assets/ios7_switches_1.png"),      aspect: "fit"});

let toggleOnSkin = new Skin({      width: 135, height: 93,      texture: new Texture("assets/ios7_switches_2.png"),      aspect: "fit"});

let lineSkin = new Skin({      width: 593, height: 3,      texture: new Texture("assets/line.png"),      aspect: "fit"});

let musicSkin = new Skin({      width: 640, height: 109,      texture: new Texture("assets/music.png"),      aspect: "fit"});

let musicPlaySkin = new Skin({      width: 640, height: 109,      texture: new Texture("assets/musicPlay.png"),      aspect: "fit"});

let musicPauseSkin = new Skin({      width: 640, height: 109,      texture: new Texture("assets/musicPause.png"),      aspect: "fit"});

let menuBarDashboardSkin = new Skin({      width: 81, height: 81,      texture: new Texture("assets/dashboard.png"),      aspect: "fit"});

let menuSkin = new Skin({      width: 640, height: 84,      texture: new Texture("assets/menu.png"),      aspect: "draw"});

let menuBarFoodSkin = new Skin({      width: 81, height: 81,      texture: new Texture("assets/food.png"),      aspect: "fit"});

let menuBarMyPetSkin = new Skin({      width: 81, height: 81,      texture: new Texture("assets/myPet.png"),      aspect: "fit"});

let menuBarPetFeederSkin = new Skin({      width: 81, height: 81,      texture: new Texture("assets/petFeeder.png"),      aspect: "fit"});

//let menuBarScheduleSkin = new Skin({//      width: 128, height: 86,//      texture: new Texture("assets/scheduleButton.png"),//      aspect: "fit"//});

let dogSkin = new Skin({      width: 54, height: 54,      texture: new Texture("assets/dog.png"),      aspect: "fit"});

let menuBarPetSkin = new Skin({      width: 640, height: 86,      texture: new Texture("assets/menuBarPet.png"),      aspect: "fit"});

let menuBarSkin = new Skin({      width: 640, height: 86,      texture: new Texture("assets/menuBarPetFeeder.png"),      aspect: "fit"});

let verticalLineSkin = new Skin({      width: 2, height: 762,      texture: new Texture("assets/verticalLine.png"),      aspect: "fit"});

let bottleSkin = new Skin({      width: 72, height: 168,      texture: new Texture("assets/watterBottle.png"),      aspect: "fit"});

let bavaroSkin = new Skin({      width: 72, height: 168,      texture: new Texture("assets/bavaro.png"),      aspect: "fit"});

let benefulSkin = new Skin({      width: 72, height: 168,      texture: new Texture("assets/beneful.png"),      aspect: "fit"});

let beyondSkin = new Skin({      width: 72, height: 168,      texture: new Texture("assets/beyond.png"),      aspect: "fit"});

let emptyBarSkin = new Skin({      width: 143, height: 21,      texture: new Texture("assets/emptyBar2.png"),      aspect: "fit"});

let fullBarSkin = new Skin({      width: 143, height: 21,      texture: new Texture("assets/fullBar2.png"),      aspect: "stretch"});

var waterBar = new Content({   	top: 260, height: 21, left: 10, width: 190,     skin: fullBarSkin});

var bavaroBar = new Content({   	top: 260, height: 21, left: 170, width: 190,      skin: fullBarSkin});

var benefulBar = new Content({   	top: 460, height: 21, left: 10, width: 190,      skin: fullBarSkin});

var beyondBar = new Content({   	top: 460, height: 21, left: 170, width: 190,    skin: fullBarSkin});

var ar2 = new Skin({   	width: 41, height: 31,    texture: new Texture("assets/ar3.png"),    aspect: "fit"});

var live = new Skin({   	width: 45, height: 30,    texture: new Texture("assets/live.png"),    aspect: "fit"});

var rectangle = new Skin({   	width: 376, height: 34,    texture: new Texture("assets/rectangle.png"),    aspect: "fit"});

var lineDashboard = new Skin({   	width: 376, height: 1,    texture: new Texture("assets/lineDashboard.png"),    aspect: "fit"});

var lineVertical = new Skin({   	width: 2, height: 276,    texture: new Texture("assets/lineVertical.png"),    aspect: "fit"});

var nemo = new Skin({   	width: 59, height: 58,    texture: new Texture("assets/nemo.png"),    aspect: "fit"});

var gill = new Skin({   	width: 59, height: 58,    texture: new Texture("assets/gill.png"),    aspect: "fit"});

var bubbles = new Skin({   	width: 59, height: 58,    texture: new Texture("assets/bubbles.png"),    aspect: "fit"});

var dory = new Skin({   	width: 59, height: 58,    texture: new Texture("assets/dory.png"),    aspect: "fit"});

var bloat = new Skin({   	width: 59, height: 58,    texture: new Texture("assets/bloat.png"),    aspect: "fit"});

var menu2 = new Skin({   	width: 376, height: 48,    texture: new Texture("assets/menu2.png"),    aspect: "fit"});

var foodFish = new Skin({   	width: 38, height: 38,    texture: new Texture("assets/foodFish.png"),    aspect: "fit"});

var aquarium = new Skin({   	width: 32, height: 32,    texture: new Texture("assets/aquarium.png"),    aspect: "fit"});

var fish = new Skin({   	width: 34, height: 34,    texture: new Texture("assets/fish.png"),    aspect: "fit"});

var fish = new Skin({   	width: 34, height: 34,    texture: new Texture("assets/fish.png"),    aspect: "fit"});

var alarm = new Skin({   	width: 34, height: 33,    texture: new Texture("assets/alarm.png"),    aspect: "fit"});

let backgroundSkin = new Skin({ fill : ["#FFFFFF", "#7DBF2E"] });let textStyleGreeting = new Style({ font: "bold 35px Roboto", color: "black" });
let textStyleNews = new Style({ font: "25px Roboto", color: "black" });
let textStyleHeading = new Style({ font: "bold 25px Roboto", color: "black" });
let textStyletoggle = new Style({ font: "20px Roboto", color: "black" });
let textStyleCommand = new Style({ font: "bold 25px Roboto", color: "#FF2D55" });
let textStyleReading = new Style({ font: "bold 45px Roboto", color: "black" });
let textStyleInfo = new Style({ font: "bold 25px Roboto", color: "black" });

let textStyleFood = new Style({ font: "20px Roboto", color: "black" });
let textStyleFoodBold = new Style({ font: "bold 20px Roboto", color: "black" });

let textStyleEdit = new Style({ font: "18px Roboto", color: "#FF2D55" });


let textStyleAR = new Style({ font: "10px Roboto", color: "black" });
let textStyleLabel2 = new Style({ font: "bold 12px Roboto", color: "#808080" });
let textStyleLabelBlue = new Style({ font: "12px Roboto", color: "#0084FF" });
let textStyleLabelName = new Style({ font: "12px Roboto", color: "black" });

let textStyleTemp = new Style({ font: "24px Roboto", color: "black" });
let textStyleL = new Style({ font: "12px Roboto", color: "black" });


let textStyleMenu = new Style({ font: "12px Roboto", color: "gray" });

var autoFeedingToggle = new Content({   			width: 70, top: 402, right: 5,    		skin: toggleOffSkin,    		active: true,    		behavior: Behavior({    			onTouchEnded: function(container) {    				if (container.skin == toggleOnSkin){    					container.skin = toggleOffSkin;    					//application.distribute("onToggleLight", 0);    				}    				else{    					container.skin = toggleOnSkin;    					//application.distribute("onToggleLight", 1);    				}    				    			}	    		}) 		});
		
		

var autoTemperatureToggle = new Content({   			width: 70, top: 450, right: 5,    		skin: toggleOffSkin,    		active: true,    		behavior: Behavior({    			onTouchEnded: function(container) {    				if (container.skin == toggleOnSkin){    					container.skin = toggleOffSkin;    					//application.distribute("onToggleLight", 0);    				}    				else{    					container.skin = toggleOnSkin;    					//application.distribute("onToggleLight", 1);    				}    				    			}	    		}) 		});

let dashboardContainer = Container.template($ => ({    top: 0, bottom: 0, left: 0, right: 0,    active: true, skin: backgroundSkin, state: 0,    contents: [
    	new Content({     		top: -8, left: 0, right: 0,    			skin: toolbarSkin, 		}),        Label($, {top: 30, left: 20, style: textStyleWelcome, string: "Welcome back Gauthier," }),
        Label($, {top: 60, left: 20, style: textStyleSick, string: "Bubble still seems to be sick." }),
        
        new Content({   			width: 41, height: 30, top: 30, right: 81,    		skin: ar2, 		}),
		
		new Content({   			width: 45, height: 30, top: 31, right: 20,    		skin: live, 		}),
		
		Label($, {top: 65, right: 97, style: textStyleAR, string: "AR" }),
        Label($, {top: 65, right: 29, style: textStyleAR, string: "Live Cam" }),
		
        new Content({   			width: 376, height: 34, top: 100, right: 0,    		skin: rectangle, 		}),
		Label($, {top: 115, left: 10, style: textStyleLabel2, string: "FISH TANK STATISTICS" }),
        
        new Content({   			width: 376, height: 1, top: 120, right: 0,    		skin: rectangle, 		}),
        
        new Content({   			width: 376, height: 1, top: 210, right: 0,    		skin: lineDashboard, 		}),
		Label($, {top: 140, left: 15, style: textStyleTemp, string: "15°C" }),
		Label($, {top: 163, left: 15, style: textStyleL, string: "Temperature" }),

		Label($, {top: 140, left: 170, style: textStyleTemp, string: "7" }),
		Label($, {top: 163, left: 170, style: textStyleL, string: "pH" }),
		
		Label($, {top: 215, left: 15, style: textStyleTemp, string: "35ppt" }),
		Label($, {top: 238, left: 15, style: textStyleL, string: "Salinity" }),
		
		Label($, {top: 215, left: 170, style: textStyleTemp, string: "54mS/cm" }),
		Label($, {top: 238, left: 170, style: textStyleL, string: "Conductivity" }),
		
		new Content({   			width: 376, height: 1, top: 290, right: 0,    		skin: lineDashboard, 		}),
        
        new Content({   			width: 2, height: 200, top: 134, right: 160,    		skin: lineVertical, 		}),
        
        
		new Content({   			width: 376, height: 34, top: 290, right: 0,    		skin: rectangle, 		}),
		
		
		Label($, {top: 305, left: 10, style: textStyleLabel2, string: "MY FISH" }),
		Label($, {top: 305, right: 10, style: textStyleLabelBlue, string: "Show More" }),
		
		new Content({   			width: 45, height: 45, top: 330, left: 10,    		skin: nemo, 		}),
		Label($, {top: 375, left: 18, style: textStyleLabelName, string: "Nemo" }),
		
		new Content({   			width: 45, height: 45, top: 330, left: 70,    		skin: gill, 		}),
		Label($, {top: 375, left: 84, style: textStyleLabelName, string: "Gill" }),
		
		new Content({   			width: 45, height: 45, top: 330, left: 130,    		skin: bubbles, 		}),
		Label($, {top: 375, left: 135, style: textStyleLabelName, string: "Bubbles" }),
		
		new Content({   			width: 45, height: 45, top: 330, left: 190,    		skin: dory, 		}),
		Label($, {top: 375, left: 203, style: textStyleLabelName, string: "Dory" }),
		
		new Content({   			width: 45, height: 45, top: 330, left: 250,    		skin: bloat, 		}),
		Label($, {top: 375, left: 260, style: textStyleLabelName, string: "Bloat" }),
		
		new Content({   			width: 376, height: 34, top: 390, right: 0,    		skin: rectangle, 		}),
		
		Label($, {top: 405, left: 10, style: textStyleLabel2, string: "SWITCH BOARD" }),
		autoFeedingToggle,
		autoTemperatureToggle,
		new Content({   			width: 300, top: 470, right: 0,    		skin: lineSkin, 		}),
		Label($, {top: 437, left: 10, style: textStyletoggle, string: "Auto Feeding" }),
		
		Label($, {top: 484, left: 10, style: textStyletoggle, string: "Auto Temperature Adjustment" }),
		
		
		new Content({   			width: 400, top: 520, left: -20,    		skin: menu2, 		}),
	    Label($, {top: 552, left: 25, style: textStyleMenu, string: "Home" }),
		Label($, {top: 552, left: 95, style: textStyleMenu, string: "My Fishes" }),
		Label($, {top: 552, right: 95, style: textStyleMenu, string: "Schedules" }),
		Label($, {top: 552, right: 25, style: textStyleMenu, string: "Food" }),
		new Content({   			width: 28, top: 520, right: 25,    		skin: foodFish, 		}),
		
		new Content({   			width: 26, top: 522, left: 25,    		skin: aquarium, 		}),
		
		new Content({   			width: 26, top: 520, left: 103,    		skin: fish, 		}),    	    	new Content({   			width: 26, top: 520, right: 103,    		skin: alarm, 		}),    	    ]}));




let FoodContainer = Container.template($ => ({    top: 0, bottom: 0, left: 0, right: 0,    active: true, skin: backgroundSkin, state: 0,    contents: [
    	new Content({     		top: -8, left: 0, right: 0,    			skin: toolbarSkin, 		}),        Label($, {top: 30, left: 20, style: textStyleGreeting, string: "Food" }),
        
		new Content({   			width: 350, top: 100, right: 0,    		skin: lineSkin, 		}),
		
		
		new Content({   			width: 350, top: 300, right: 0,    		skin: lineSkin, 		}),
		    	new Content({   			width: 350, top: 500, right: 0,    		skin: lineSkin, 		}),    	
		new Content({   			top: 101, height: 400, left:0, right: 0,    		skin: verticalLineSkin, 		}),
		
		Label($, {top: 160, left: 70, style: textStyleFood, string: "Water" }),    	
		Label($, {top: 235, left: 10, style: textStyleFoodBold, string: "Quantity" }),    	
    	new Content({   			top: 130, height: 100, left: 0,    		skin: bottleSkin, 		}),
		
		    	new Content({   			top: 260, height: 21, left: 10,    		skin: emptyBarSkin, 		}),
		
		
		waterBar,    	
		Label($, {top: 160, left: 230, style: textStyleFood, string: "Bavaro" }),    	    	Label($, {top: 235, left: 170, style: textStyleFoodBold, string: "Quantity" }),
    	new Content({   			top: 130, height: 100, left: 160,    		skin: bavaroSkin, 		}),
		    	new Content({   			top: 260, height: 21, left: 170,    		skin: emptyBarSkin, 		}),
		
		bavaroBar,
		    	Label($, {top: 360, left: 230, style: textStyleFood, string: "Beyond" }),    	    	Label($, {top: 435, left: 170, style: textStyleFoodBold, string: "Quantity" }),
    	new Content({   			top: 330, height: 100, left: 160,    		skin: beyondSkin, 		}),
		    	new Content({   			top: 460, height: 21, left: 170,    		skin: emptyBarSkin, 		}),
		beyondBar,
		
		
		Label($, {top: 360, left: 70, style: textStyleFood, string: "Beneful" }),    	    	Label($, {top: 435, left: 10, style: textStyleFoodBold, string: "Quantity" }),
    	new Content({   			top: 330, height: 100, left: 0,    		skin: benefulSkin, 		}),
		    	new Content({   			top: 460, height: 21, left: 10,    		skin: emptyBarSkin, 		}),
		benefulBar,    	
		
		    	
		new Content({   			bottom: 0, left:0, height:45,     		skin: menuSkin		}),		new Content({   			bottom: 0, left:0, height:44,     		skin: menuBarDashboardSkin, 			active: true,			behavior: Behavior({	    		onTouchEnded: function(container) {	    			application.remove(currentScreen);  	            	currentScreen = new dashboardContainer();	            	application.add(currentScreen);
	            	waterBar = new Content({ 					  	top: 260, height: 21, left: 10, width: 190, 					    skin: fullBarSkin					});										bavaroBar = new Content({ 					  	top: 260, height: 21, left: 170, width: 190,  					    skin: fullBarSkin					});										benefulBar = new Content({ 					  	top: 460, height: 21, left: 10, width: 190,  					    skin: fullBarSkin					});										beyondBar = new Content({ 					  	top: 460, height: 21, left: 170, width: 190,					    skin: fullBarSkin					});	    		}		    	})		}),		new Content({   			bottom: 0, left:80, height:44,    		skin: menuBarMyPetSkin, 			active: true,			behavior: Behavior({	    		onTouchEnded: function(container) {	    			application.remove(currentScreen);  	            	currentScreen = new myPetContainer();	            	application.add(currentScreen);
	            	waterBar = new Content({ 					  	top: 260, height: 21, left: 10, width: 190, 					    skin: fullBarSkin					});										bavaroBar = new Content({ 					  	top: 260, height: 21, left: 170, width: 190,  					    skin: fullBarSkin					});										benefulBar = new Content({ 					  	top: 460, height: 21, left: 10, width: 190,  					    skin: fullBarSkin					});										beyondBar = new Content({ 					  	top: 460, height: 21, left: 170, width: 190,					    skin: fullBarSkin					});	    		}		    	})		}),		new Content({   			bottom: 0, left:160, height:44,    		skin: menuBarFoodSkin, 						behavior: Behavior({	    		onTouchEnded: function(container) {	    			application.remove(currentScreen);  	            	currentScreen = new FoodContainer();	            	application.add(currentScreen);
	            	waterBar = new Content({ 					  	top: 260, height: 21, left: 10, width: 190, 					    skin: fullBarSkin					});										bavaroBar = new Content({ 					  	top: 260, height: 21, left: 170, width: 190,  					    skin: fullBarSkin					});										benefulBar = new Content({ 					  	top: 460, height: 21, left: 10, width: 190,  					    skin: fullBarSkin					});										beyondBar = new Content({ 					  	top: 460, height: 21, left: 170, width: 190,					    skin: fullBarSkin					});	    		}		    	})		}),				new Content({   			bottom: 0, left:240, height:44,    		skin: menuBarPetFeederSkin, 			active: true,			behavior: Behavior({	    		onTouchEnded: function(container) {	    			application.remove(currentScreen);  	            	currentScreen = new petFeederContainer();	            	application.add(currentScreen);
	            	waterBar = new Content({ 					  	top: 260, height: 21, left: 10, width: 190, 					    skin: fullBarSkin					});										bavaroBar = new Content({ 					  	top: 260, height: 21, left: 170, width: 190,  					    skin: fullBarSkin					});										benefulBar = new Content({ 					  	top: 460, height: 21, left: 10, width: 190,  					    skin: fullBarSkin					});										beyondBar = new Content({ 					  	top: 460, height: 21, left: 170, width: 190,					    skin: fullBarSkin					});	    		}		    	})		}),    	    
		    ]}));

let petFeederContainer = Container.template($ => ({    top: 0, bottom: 0, left: 0, right: 0,    active: true, skin: backgroundSkin, state: 0,    contents: [
    	new Content({     		top: -8, left: 0, right: 0,    			skin: toolbarSkin, 		}),        Label($, {top: 30, left: 20, style: textStyleGreeting, string: "Pet Feeder" }),
        
        Label($, {top: 120, left: 20, style: textStyletoggle, string: "Device Name" }),
        Label($, {top: 120, right: 20, style: textStyleInfo, string: "PL12" }),
        
		new Content({   			width: 300, top: 158, right: 0,    		skin: lineSkin, 		}),
		
		Label($, {top: 170, left: 20, style: textStyletoggle, string: "Supplier" }),
		
		Label($, {top: 170, right: 20, style: textStyleInfo, string: "PetCo" }),
		new Content({   			width: 300, top: 208, right: 0,    		skin: lineSkin, 		}),
		
		
		Label($, {top: 260, left: 20, style: textStyletoggle, string: "Software Version" }),
        Label($, {top: 260, right: 20, style: textStyleInfo, string: "1.0" }),
        
		new Content({   			width: 300, top: 298, right: 0,    		skin: lineSkin, 		}),
		
		Label($, {top: 310, left: 20, style: textStyletoggle, string: "Serial Number" }),
		
		Label($, {top: 310, right: 20, style: textStyleInfo, string: "FH234" }),
		new Content({   			width: 300, top: 348, right: 0,    		skin: lineSkin, 		}),
		    	new Content({   			bottom: 0, left:0, height:45,     		skin: menuSkin		}),
		new Content({   			bottom: 0, left:0, height:44,     		skin: menuBarDashboardSkin, 			active: true,			behavior: Behavior({	    		onTouchEnded: function(container) {
	    			application.remove(currentScreen);  	            	currentScreen = new dashboardContainer();	            	application.add(currentScreen);	    		}		    	})		}),
		new Content({   			bottom: 0, left:80, height:44,    		skin: menuBarMyPetSkin, 			active: true,			behavior: Behavior({	    		onTouchEnded: function(container) {
	    			application.remove(currentScreen);  	            	currentScreen = new myPetContainer();	            	application.add(currentScreen);	    		}		    	})		}),
		new Content({   			bottom: 0, left:160, height:44,    		skin: menuBarFoodSkin, 			active: true,			behavior: Behavior({	    		onTouchEnded: function(container) {
	    			application.remove(currentScreen);  	            	currentScreen = new FoodContainer();	            	application.add(currentScreen);	    		}		    	})		}),
		
		new Content({   			bottom: 0, left:240, height:44,    		skin: menuBarPetFeederSkin, 						behavior: Behavior({	    		onTouchEnded: function(container) {
	    			application.remove(currentScreen);  	            	currentScreen = new petFeederContainer();	            	application.add(currentScreen);	    		}		    	})		}),
		    ]}));

var weightLabel = new Label({top: 140, right: 20, style: textStyleReading, string: "20kg" });

var sizeLabel = new Label({top: 190, right: 20, style: textStyleReading, string: "60cm" });

var ageLabel = new Label({top: 240, right: 20, style: textStyleReading, string: "6 years" });

let myPetContainer = Container.template($ => ({    top: 0, bottom: 0, left: 0, right: 0,    active: true, skin: backgroundSkin, state: 0,    contents: [
    	new Content({     		top: -8, left: 0, right: 0,    			skin: toolbarSkin, 		}),        Label($, {top: 30, left: 20, style: textStyleGreeting, string: "My Pet" }),
        //Label($, {top: 40, right: 20, style: textStyleEdit, string: "Edit Name" }),
        
        
        new Content({   			width: 30, top: 70, left: 20,    		skin: dogSkin, 		}),
        Label($, {top: 85, left: 65, style: textStyletoggle, string: "Dog" }),
        
        
        
        
        Label($, {top: 150, left: 20, style: textStyletoggle, string: "Weight" }),
        
		new Content({   			width: 300, top: 188, right: 0,    		skin: lineSkin, 		}),
		weightLabel,
		
		Label($, {top: 200, left: 20, style: textStyletoggle, string: "Size" }),
		
		sizeLabel,
		
		new Content({   			width: 300, top: 238, right: 0,    		skin: lineSkin, 		}),
		
		Label($, {top: 250, left: 20, style: textStyletoggle, string: "Age" }),
		
		ageLabel,
		
		new Content({   			width: 300, top: 288, right: 0,    		skin: lineSkin, 		}),
		
		new Content({   			bottom: 0, left:0, height:45,     		skin: menuSkin		}),
		new Content({   			bottom: 0, left:0, height:44,     		skin: menuBarDashboardSkin, 			active: true,			behavior: Behavior({	    		onTouchEnded: function(container) {
	    			application.remove(currentScreen);  	            	currentScreen = new dashboardContainer();	            	application.add(currentScreen);
	            	weightLabel = new Label({top: 140, right: 20, style: textStyleReading, string: "20kg" });
					sizeLabel = new Label({top: 190, right: 20, style: textStyleReading, string: "60cm" });
					ageLabel = new Label({top: 240, right: 20, style: textStyleReading, string: "6 years" });	    		}		    	})		}),
		new Content({   			bottom: 0, left:80, height:44,    		skin: menuBarMyPetSkin, 						behavior: Behavior({	    		onTouchEnded: function(container) {
	    			application.remove(currentScreen);  	            	currentScreen = new myPetContainer();	            	application.add(currentScreen);
	            	weightLabel = new Label({top: 140, right: 20, style: textStyleReading, string: "20kg" });
					sizeLabel = new Label({top: 190, right: 20, style: textStyleReading, string: "60cm" });
					ageLabel = new Label({top: 240, right: 20, style: textStyleReading, string: "6 years" });	    		}		    	})		}),
		new Content({   			bottom: 0, left:160, height:44,    		skin: menuBarFoodSkin, 			active: true,			behavior: Behavior({	    		onTouchEnded: function(container) {
	    			application.remove(currentScreen);  	            	currentScreen = new FoodContainer();	            	application.add(currentScreen);
	            	weightLabel = new Label({top: 140, right: 20, style: textStyleReading, string: "20kg" });
					sizeLabel = new Label({top: 190, right: 20, style: textStyleReading, string: "60cm" });
					ageLabel = new Label({top: 240, right: 20, style: textStyleReading, string: "6 years" });	    		}		    	})		}),
		
		new Content({   			bottom: 0, left:240, height:44,    		skin: menuBarPetFeederSkin, 			active: true,			behavior: Behavior({	    		onTouchEnded: function(container) {
	    			application.remove(currentScreen);  	            	currentScreen = new petFeederContainer();	            	application.add(currentScreen);
	            	weightLabel = new Label({top: 140, right: 20, style: textStyleReading, string: "20kg" });
					sizeLabel = new Label({top: 190, right: 20, style: textStyleReading, string: "60cm" });
					ageLabel = new Label({top: 240, right: 20, style: textStyleReading, string: "6 years" });	    		}		    	})		}),    ]}));

var sickLabel = new Label({top: 70, left: 20, style: textStyleNews, string: "Pet is Sick" });

var heaterToggle = new Content({   			width: 70, top: 140, right: 10,    		skin: toggleOffSkin,
    		active: true,
    		behavior: Behavior({
    			onTouchEnded: function(container) {
    				if (container.skin == toggleOnSkin){
    					container.skin = toggleOffSkin;
    					application.distribute("onToggleLight", 0);
    				}
    				else{
    					container.skin = toggleOnSkin;
    					application.distribute("onToggleLight", 1);
    				}
    				
    			}	
    		}) 		});

var fanToggle = new Content({   			width: 70, top: 190, right: 10,    		skin: toggleOffSkin,
    		active: true,
    		behavior: Behavior({
    			onTouchEnded: function(container) {
    				if (container.skin == toggleOnSkin){
    					container.skin = toggleOffSkin;
    					application.distribute("onToggleLight2", 0);
    				}
    				else{
    					container.skin = toggleOnSkin;
    					application.distribute("onToggleLight2", 1);
    				}
    				
    			}	
    		}) 		});

var musicToggle = new Content({   			width: 320, top: 445, right: 0,    		skin: musicPlaySkin,
    		active: true,
    		behavior: Behavior({
    			onTouchEnded: function(container) {
    				if (container.skin == musicPauseSkin){
    					container.skin = musicPlaySkin;
    					application.distribute("onToggleLight3", 0);
    				}
    				else{
    					container.skin = musicPauseSkin;
    					application.distribute("onToggleLight3", 1);
    				}
    				
    			}	
    		})		});

let textStyleWelcome = new Style({ font: "18px Roboto", color: "black" });
let textStyleSick = new Style({ font: "14px Roboto", color: "black" });




let remotePins;
var currentScreen = new dashboardContainer();class AppBehavior extends Behavior {    onLaunch(application) {
    	        application.add(currentScreen);        let discoveryInstance = Pins.discover(            connectionDesc => {                if (connectionDesc.name == "pins-share-led") {                    trace("Connecting to remote pins\n");                    remotePins = Pins.connect(connectionDesc);
                    
                    remotePins.repeat("/water/read", 500, function(result) {
						waterBar.width =190*result;					});
					
					remotePins.repeat("/bavaro/read", 500, function(result) {
						bavaroBar.width =190*result;					});
					
					                	remotePins.repeat("/beneful/read", 500, function(result) {
						benefulBar.width =190*result;					});                	
                	remotePins.repeat("/beyond/read", 500, function(result) {
						beyondBar.width =190*result;					});                	                	remotePins.repeat("/weight/read", 500, function(result) {
						weightLabel.string = String(Math.round(200*result)) + " lbs.";					});
					
					                	remotePins.repeat("/size/read", 500, function(result) {
						sizeLabel.string = String(Math.round(100*result)) + " in.";					});                	
                	                	remotePins.repeat("/age/read", 500, function(result) {
						ageLabel.string = String(Math.round(30*result)) + " years";					});
					                	remotePins.repeat("/sick/read", 500, function(result) {
                		if (result == 1) {
                			sickLabel.string = "Pet is Sick"
                		}
                		else{
                			sickLabel.string = "Pet is Healthy"
                		}					});
					
					remotePins.repeat("/led2/read", 500, function(result) {
                		if (result == 1) {
                			heaterToggle.skin = toggleOnSkin
                		}
                		else{
                			heaterToggle.skin = toggleOffSkin
                		}					});                	                	remotePins.repeat("/led/read", 500, function(result) {
                		if (result == 1) {
                			fanToggle.skin = toggleOnSkin
                		}
                		else{
                			fanToggle.skin = toggleOffSkin
                		}					});
					
					remotePins.repeat("/led3/read", 500, function(result) {
                		if (result == 1) {
                			musicToggle.skin = musicPauseSkin
                		}
                		else{
                			musicToggle.skin = musicPlaySkin
                		}					});                	                	                	                }            },             connectionDesc => {                if (connectionDesc.name == "pins-share-led") {                    trace("Disconnected from remote pins\n");                    remotePins = undefined;                }            }        );
            }    onToggleLight2(application, value) {        if (remotePins) remotePins.invoke("/led/write", value);    }
    onToggleLight(application, value) {        if (remotePins) remotePins.invoke("/led2/write", value);    }
    onToggleLight3(application, value) {        if (remotePins) remotePins.invoke("/led3/write", value);    }
    
    onToggleLight4(application, value) {        if (remotePins) remotePins.invoke("/led4/write", value);    }
    onToggleLight5(application, value) {        if (remotePins) remotePins.invoke("/led5/write", value);    }
    onToggleLight6(application, value) {        if (remotePins) remotePins.invoke("/led6/write", value);    }
    onToggleButton(application, value) {        if (remotePins) remotePins.invoke("/analogSensor/read", value);    }
    onSlider(application, value) {        if (remotePins) remotePins.invoke("/analogSensor/read", value);    }}



application.behavior = new AppBehavior();