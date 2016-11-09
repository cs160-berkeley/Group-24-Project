let backgroundSkin = new Skin({ fill : ["#FFFFFF", "#7DBF2E"] });
let textStyleGreeting = new Style({ font: "bold 35px Roboto", color: "black" });
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

var menu2 = new Skin({ 
    width: 376, height: 48,
    texture: new Texture("assets/menu2.png"),
    aspect: "fit"
});

var aquarium = new Skin({ 
    width: 32, height: 32,
    texture: new Texture("assets/aquarium.png"),
    aspect: "fit"
});

var fish = new Skin({ 
    width: 34, height: 34,
    texture: new Texture("assets/fish.png"),
    aspect: "fit"
});

var alarm = new Skin({ 
    width: 34, height: 33,
    texture: new Texture("assets/alarm.png"),
    aspect: "fit"
});

var foodFish = new Skin({ 
    width: 38, height: 38,
    texture: new Texture("assets/foodFish.png"),
    aspect: "fit"
});

var nemo = new Skin({ 
    width: 59, height: 58,
    texture: new Texture("assets/nemo.png"),
    aspect: "fit"
});

var gill = new Skin({ 
    width: 59, height: 58,
    texture: new Texture("assets/gill.png"),
    aspect: "fit"
});

var bubbles = new Skin({ 
    width: 59, height: 58,
    texture: new Texture("assets/bubbles.png"),
    aspect: "fit"
});

var dory = new Skin({ 
    width: 59, height: 58,
    texture: new Texture("assets/dory.png"),
    aspect: "fit"
});

var bloat = new Skin({ 
    width: 59, height: 58,
    texture: new Texture("assets/bloat.png"),
    aspect: "fit"
});

//==================================================
//============== AHMED's ADDED CODE ================
//==================================================
let leftTextStyleNews = new Style({ font: "25px Roboto", color: "black", horizontal: "left" });
let leftTextStyleEdit = new Style({ font: "18px Roboto", color: "#333333", horizontal: "left" });
let fishNameStyle = new Style({ font: "light 18px Roboto", color: "black", horizontal: "left"  });
let instructionStyle = new Style({ font: "12px Roboto", color: "#808080", horizontal: "left" });

let fishListToolBarSkin = new Skin({ 
    width: 459, height: 30,
    texture: new Texture("assets/fishListToolBar.png"),
    aspect: "fit"
});

let backButtonSkin = new Skin({ 
    width: 230, height: 108,
    texture: new Texture("assets/backButton.png"),
    aspect: "fit"
});

let addFishButtonSkin = new Skin({ 
    width: 34, height: 34,
    texture: new Texture("assets/addFishButton.png"),
    aspect: "fit"
});

let arrowSkin = new Skin({ 
    width: 23, height: 37,
    texture: new Texture("assets/arrow.png"),
    aspect: "fit"
});

let warningSignSkin = new Skin({ 
    width: 35, height: 35,
    texture: new Texture("assets/warning-icon-hi.png"),
    aspect: "fit"
});

let checkMarkSkin = new Skin({ 
    width: 45, height: 41,
    texture: new Texture("assets/checkMark.png"),
    aspect: "fit"
});

let bubbleEyeSkin = new Skin({ 
    width: 58, height: 59,
    texture: new Texture("assets/whiteFish.png"),
    aspect: "fit"
});

let whiteFishSkin = new Skin({ 
    width: 58, height: 59,
    texture: new Texture("assets/bubbleEye.png"),
    aspect: "fit"
});

let rockFishSkin = new Skin({ 
    width: 58, height: 59,
    texture: new Texture("assets/rockFish.png"),
    aspect: "fit"
});

let sickFishSkin = new Skin({ 
    width: 58, height: 59,
    texture: new Texture("assets/sickFish.png"),
    aspect: "fit"
});

let fishListSkin = new Skin({
  fill: "#F7F7F7",
});

let darkGray = new Skin({
  fill: "#DDDDDD",
});

let line = Content.template($ => ({
  top: $.top, left: 0, right: 0, height: $.height,
        skin: $.skin,
}));


//==================================================
//============== Diagnosis Screen ==================
//==================================================
let fishDiagnosis = Container.template($ => ({
    top: 0, bottom: 0, left: 0, right: 0,
    active: true, skin: backgroundSkin, state: 0,
    contents: [
    	new Content({ 
    		top: -8, left: 0, right: 0, 
   			skin: fishListToolBarSkin, 
		}),

      new Content({
        top: 10, left: -220, right: 0, height: 50,
        skin: backButtonSkin,
        active: true,
        behavior: Behavior({
         onTouchEnded: function(container) {
          application.remove(container.container);
          application.add(new fishList());
          trace("BACK\n");
         },
       }),
      }),

      new Label({
        top: 10, left: 100, width: 250, height: 50, style: leftTextStyleNews, string: "  Diagnosis",
        skin: fishListSkin,
      }),

      new line({top: 60, height: 1, skin: darkGray}),

      new Label({
        top: 61, left: 0 , right: 0, height: 20, string: " CHOOSE A SYMPTOM THAT YOUR FISH HAS", 
        style: instructionStyle, skin: fishListSkin,
      }),

      new line({top: 81, height: 1, skin: darkGray}),


      new Container({
        top: 82, left: 0, right: 0, contents: [
          new Content({
            top: 5, left: -240, right: 0, height: 58,
            skin: whiteFishSkin,
          }),

          new Text({
            top: 25, left: 100, right: 50, height: 58, style: fishNameStyle, string: "Fish has a white skin",
            skin: backgroundSkin,
          }),

          new Content({
            top: 15, left: 0, right: -280, height: 34,
            skin: arrowSkin,
          }),

          new line({top: 68, height: 1, skin: darkGray}),

        ],

        active: true,
        behavior: Behavior({
         onTouchEnded: function(container) {
          trace("Fish has a white skin\n");
         },
       }),
      }),


      new Container({
        top: 150, left: 0, right: 0, contents: [
          new Content({
            top: 5, left: -240, right: 0, height: 58,
            skin: bubbleEyeSkin,
          }),

          new Text({
            top: 25, left: 100, right: 50, height: 58, style: fishNameStyle, string: "Fish has blurry eyes",
            skin: backgroundSkin,
          }),

          new Content({
            top: 15, left: 0, right: -280, height: 34,
            skin: arrowSkin,
          }),

          new line({top: 68, height: 1, skin: darkGray}),

        ],

        active: true,
        behavior: Behavior({
         onTouchEnded: function(container) {
          trace("Fish has blurry eyes\n");
         },
       }),
      }),

      new Container({
        top: 218, left: 0, right: 0, contents: [
          new Content({
            top: 5, left: -240, right: 0, height: 58,
            skin: rockFishSkin,
          }),

          new Text({
            top: 25, left: 100, right: 50, height: 58, style: fishNameStyle, string: "Fish is constantly hiding behind rocks",
            skin: backgroundSkin,
          }),

          new Content({
            top: 15, left: 0, right: -280, height: 34,
            skin: arrowSkin,
          }),

          new line({top: 68, height: 1, skin: darkGray}),

        ],

        active: true,
        behavior: Behavior({
         onTouchEnded: function(container) {
          trace("Fish is constantly hiding behind rocks\n");
         },
       }),
      }),

      new Container({
        top: 286, left: 0, right: 0, contents: [
          new Content({
            top: 5, left: -240, right: 0, height: 58,
            skin: sickFishSkin,
          }),

          new Text({
            top: 25, left: 100, right: 50, height: 58, style: fishNameStyle, string: "Fish has a broken fin",
            skin: backgroundSkin,
          }),

          new Content({
            top: 15, left: 0, right: -280, height: 34,
            skin: arrowSkin,
          }),

          new line({top: 68, height: 1, skin: darkGray}),

        ],

        active: true,
        behavior: Behavior({
         onTouchEnded: function(container) {
          trace("Fish has a broken fin\n");
         },
       }),
      }),

      new Container({
        top: 354, left: 0, right: 0, contents: [

          new Text({
            top: 25, left: 15, right: 50, height: 58, style: leftTextStyleNews, string: "None of the above?",
            skin: backgroundSkin,
          }),

          new Content({
            top: 15, left: 0, right: -280, height: 34,
            skin: arrowSkin,
          }),

          new line({top: 68, height: 1, skin: darkGray}),

        ],

        active: true,
        behavior: Behavior({
         onTouchEnded: function(container) {
          trace("None of the above\n");
         },
       }),
      }),


      new Content({ 
        width: 400, top: 520, left: -20,
        skin: menu2, 
    }),

      Label($, {top: 552, left: 25, style: textStyleMenu, string: "Home" }),
      Label($, {top: 552, left: 95, style: textStyleMenu, string: "My Fishes" }),
      Label($, {top: 552, right: 95, style: textStyleMenu, string: "Schedules" }),
      Label($, {top: 552, right: 25, style: textStyleMenu, string: "Food" }),
      new Content({ 
          width: 28, top: 520, right: 25,
          skin: foodFish, 
      }),
      
      new Content({ 
          width: 26, top: 522, left: 25,
          skin: aquarium, 
      }),
      
      new Content({ 
          width: 26, top: 520, left: 103,
          skin: fish, 
      }),
      
      new Content({ 
        width: 26, top: 520, right: 105,
        skin: alarm, 
      }),

      ],
    }));



//==================================================
//============== Fish List Screen ==================
//==================================================
let fishList = Container.template($ => ({
    top: 0, bottom: 0, left: 0, right: 0,
    active: true, skin: backgroundSkin, state: 0,
    contents: [
      new Content({ 
        top: -8, left: 0, right: 0, 
        skin: fishListToolBarSkin, 
    }),

      new Content({
        top: 10, left: -220, right: 0, height: 50,
        skin: backButtonSkin,
        active: true,
        behavior: Behavior({
         onTouchEnded: function(container) {
          trace("BACK\n");
         },
       }),
      }),

      new Label({
        top: 10, left: 100, width: 250, height: 50, style: leftTextStyleNews, string: "    My Fish",
        skin: fishListSkin,
      }),

      new line({top: 60, height: 1, skin: darkGray}),

      new Container({top: 61, left: 0, right: 0, contents: [
        new Content({
          top: 7, left: -280, right: 0, height: 34,
          skin: addFishButtonSkin,
        }),

        new Label({
          top: 0, left: 40, right: 0, height: 50, style: leftTextStyleEdit, string: "Add a new fish",
          skin: backgroundSkin,
        }),

        new Content({
          top: 7, left: 0, right: -280, height: 34,
          skin: arrowSkin,
        }),

        new line({top: 51, height: 1, skin: darkGray}),
      ],

      active: true,
        behavior: Behavior({
         onTouchEnded: function(container) {
          trace("ADDING FISH\n");
         },
       }),

      }),

      new line({top: 113, height: 30, skin: fishListSkin}),
      new line({top: 143, height: 1, skin: darkGray}),


      new Container({
        top: 144, left: 0, right: 0, contents: [
          new Content({
            top: 5, left: -240, right: 0, height: 58,
            skin: bubbles,
          }),

          new Label({
            top: 5, left: 100, right: 0, height: 58, style: fishNameStyle, string: "Bubbles",
            skin: backgroundSkin,
          }),

          new Content({
            top: 15, left: 0, right: -200, height: 35,
            skin: warningSignSkin,
          }),

          new Content({
            top: 15, left: 0, right: -280, height: 34,
            skin: arrowSkin,
          }),

          new line({top: 68, height: 1, skin: darkGray}),

        ],

        active: true,
        behavior: Behavior({
         onTouchEnded: function(container) {
          trace("BUBBLES\n");
          application.remove(container.container);
          application.add(new fishDiagnosis());
         },
       }),
      }),


      new Container({
        top: 213, left: 0, right: 0, contents: [
          new Content({
            top: 5, left: -240, right: 0, height: 58,
            skin: nemo,
          }),

          new Label({
            top: 5, left: 100, right: 0, height: 58, style: fishNameStyle, string: "Nemo",
            skin: backgroundSkin,
          }),

          new Content({
            top: 15, left: 0, right: -200, height: 35,
            skin: checkMarkSkin,
          }),

          new Content({
            top: 15, left: 0, right: -280, height: 34,
            skin: arrowSkin,
          }),

          new line({top: 68, height: 1, skin: darkGray}),

        ],

        active: true,
        behavior: Behavior({
         onTouchEnded: function(container) {
          trace("NEMO\n");
         },
       }),
      }),

      new Container({
        top: 281, left: 0, right: 0, contents: [
          new Content({
            top: 5, left: -240, right: 0, height: 58,
            skin: gill,
          }),

          new Label({
            top: 5, left: 100, right: 0, height: 58, style: fishNameStyle, string: "Gill",
            skin: backgroundSkin,
          }),

          new Content({
            top: 15, left: 0, right: -200, height: 35,
            skin: checkMarkSkin,
          }),

          new Content({
            top: 15, left: 0, right: -280, height: 34,
            skin: arrowSkin,
          }),

          new line({top: 68, height: 1, skin: darkGray}),

        ],

        active: true,
        behavior: Behavior({
         onTouchEnded: function(container) {
          trace("GILL\n");
         },
       }),
      }),

      new Container({
        top: 281 + 68 + 1, left: 0, right: 0, contents: [
          new Content({
            top: 5, left: -240, right: 0, height: 58,
            skin: dory,
          }),

          new Label({
            top: 5, left: 100, right: 0, height: 58, style: fishNameStyle, string: "Dory",
            skin: backgroundSkin,
          }),

          new Content({
            top: 15, left: 0, right: -200, height: 35,
            skin: checkMarkSkin,
          }),

          new Content({
            top: 15, left: 0, right: -280, height: 34,
            skin: arrowSkin,
          }),

          new line({top: 68, height: 1, skin: darkGray}),

        ],

        active: true,
        behavior: Behavior({
         onTouchEnded: function(container) {
          trace("DORY\n");
         },
       }),
      }),


    new Content({ 
        width: 400, top: 520, left: -20,
        skin: menu2, 
    }),

    Label($, {top: 552, left: 25, style: textStyleMenu, string: "Home" }),
    Label($, {top: 552, left: 95, style: textStyleMenu, string: "My Fishes" }),
    Label($, {top: 552, right: 95, style: textStyleMenu, string: "Schedules" }),
    Label($, {top: 552, right: 25, style: textStyleMenu, string: "Food" }),
    new Content({ 
        width: 28, top: 520, right: 25,
        skin: foodFish, 
    }),
    
    new Content({ 
        width: 26, top: 522, left: 25,
        skin: aquarium, 
    }),
    
    new Content({ 
        width: 26, top: 520, left: 103,
        skin: fish, 
    }),
      
      new Content({ 
        width: 26, top: 520, right: 105,
        skin: alarm, 
    }),

      ],
}));

//==================================================
//============== Schedule Screen ==================
//==================================================


let reminderStyleHeading = new Style({ font: "14px Roboto", color: "black" });
let reminderText = new Style({ font: "16px Roboto", color: "black", horizontal: "left" });
let timeTextStyle = new Style({font: "34px Roboto", color: "black", horizontal: "left"});
let descriptionTextStyle = new Style({font: "12px Roboto", color: "gray", horizontal: "left"});

let toggleOffSkin = new Skin({
      width: 135, height: 93,
      texture: new Texture("assets/ios7_switches_1.png"),
      aspect: "fit"
});

let toggleOnSkin = new Skin({
      width: 135, height: 93,
      texture: new Texture("assets/ios7_switches_2.png"),
      aspect: "fit"
});

let testSkin = new Skin({
	fill: "red",
});

let toolbarSkin = new Skin({
      width: 640, height: 34,
      texture: new Texture("assets/toolbar.png"),
      aspect: "fit"
});



var menu2 = new Skin({ 
  	width: 376, height: 48,
    texture: new Texture("assets/menu2.png"),
    aspect: "fit"
});

var foodFish = new Skin({ 
  	width: 38, height: 38,
    texture: new Texture("assets/foodFish.png"),
    aspect: "fit"
});

var aquarium = new Skin({ 
  	width: 32, height: 32,
    texture: new Texture("assets/aquarium.png"),
    aspect: "fit"
});

var fish = new Skin({ 
  	width: 34, height: 34,
    texture: new Texture("assets/fish.png"),
    aspect: "fit"
});


var alarm = new Skin({ 
  	width: 34, height: 33,
    texture: new Texture("assets/alarm.png"),
    aspect: "fit"
});



var editButtonSkin = new Skin({ 
    width: 164, height: 84,
    texture: new Texture("assets/edit.png"),
    aspect: "fit"
});




var toggle = Content.template($ => ({ 
  			width: 70, top: 0, right: 10,
    		skin: toggleOffSkin,
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
    		}) 
		}));


var reminderScreen = Container.template($ => ({
    top: 0, bottom: 0, left: 0, right: 0,
    active: true, skin: backgroundSkin, state: 0,
	contents: [
		new Content({ 
    		top: -8, left: 0, right: 0, 
   			skin: toolbarSkin, 
		}),
		new Label({
        top: 10, left: 100, width: 250, height: 50, string: "Scheduling",
      	}),
		new Content({ 
  			width: 400, top: 520, left: -20,
    		skin: menu2, 
		}),
	    Label($, {top: 552, left: 25, style: textStyleMenu, string: "Home" }),
		Label($, {top: 552, left: 95, style: textStyleMenu, string: "My Fishes" }),
		Label($, {top: 552, right: 95, style: textStyleMenu, string: "Schedules" }),
		Label($, {top: 552, right: 25, style: textStyleMenu, string: "Food" }),
		new Content({ 
  			width: 28, top: 520, right: 25,
    		skin: foodFish, 
		}),
	
		new Content ({
			top: 20, width: 80, left: 0, height: 34,
			skin: backButtonSkin,
		}),
		new Label ({
			style: reminderStyleHeading,
			top: 20, left: 75, width: 200, height: 34,
			string: "Scheduling",
			skin: fishListSkin,
		}),
		new Content ({
			top: 20, width: 80, right: 0, height: 34,
			skin: editButtonSkin,
		}),
		new Line({top: 60, height: 1, skin: darkGray}),

      new Container({top: 61, left: 0, right: 0, contents: [
        new Content({
          top: 7, left: -275, right: 0, height: 34,
          skin: addFishButtonSkin,
        }),

        new Label({
          top: 0, left: 45, right: 0, height: 50, style: reminderText, string: "Add a new task",
          skin: backgroundSkin,
        }),

        new Content({
          top: 7, left: 0, right: -280, height: 34,
          skin: arrowSkin,
        }),

        new Line({top: 51, height: 1, skin: darkGray}),
        

      ],

      active: true,
        behavior: Behavior({
         onTouchEnded: function(container) {
          trace("ADDING FISH\n");
         },
       }),

      }),
      
      new Container({
      	top: 95, left: 0, right: 0,
      	contents: [
      		new Label({
      			top: 0, left: 15, right: 0, height: 80, 
      			style: timeTextStyle, string: "6:59 PM"
      		}),
      		new Label({
      			top: 25, left: 15, right: 0, height: 80, 
      			style: descriptionTextStyle, string: "pH/Temperature change"
      		}),
      		new toggle()
      	]
      }),
      new Container({
      	top: 175, left: 0, right: 0,
      	contents: [
      		new Label({
      			top: 0, left: 15, right: 0, height: 80, 
      			style: timeTextStyle, string: "7:00 AM"
      		}),
      		new Label({
      			top: 25, left: 15, right: 0, height: 80, 
      			style: descriptionTextStyle, string: "Feeding"
      		}),
      		new toggle()
      	]
      }),
      new Container({
      	top: 255, left: 0, right: 0,
      	contents: [
      		new Label({
      			top: 0, left: 15, right: 0, height: 80, 
      			style: timeTextStyle, string: "6:35 PM"
      		}),
      		new Label({
      			top: 25, left: 15, right: 0, height: 80, 
      			style: descriptionTextStyle, string: "Tank cleaning"
      		}),
      		new toggle()
      	]
      }),
      
		new Content({ 
  			width: 26, top: 522, left: 25,
    		skin: aquarium, 
		}),
		
		new Content({ 
  			width: 26, top: 520, left: 103,
    		skin: fish, 
		}),
    	
    	new Content({ 
  			width: 26, top: 520, right: 105,
    		skin: alarm, 
		}),
	]
}))

//==================================================
//============== GAUTHIER's ADDED CODE ================
//==================================================


let toolBarTopSkin = new Skin({ 
    width: 375, height: 67,
    texture: new Texture("assets/toolBarTop.png"),
    aspect: "fit"
});



let lineSkin = new Skin({
      width: 593, height: 3,
      texture: new Texture("assets/line.png"),
      aspect: "fit"
});

let musicSkin = new Skin({
      width: 640, height: 109,
      texture: new Texture("assets/music.png"),
      aspect: "fit"
});

let musicPlaySkin = new Skin({
      width: 640, height: 109,
      texture: new Texture("assets/musicPlay.png"),
      aspect: "fit"
});

let musicPauseSkin = new Skin({
      width: 640, height: 109,
      texture: new Texture("assets/musicPause.png"),
      aspect: "fit"
});

let menuBarDashboardSkin = new Skin({
      width: 81, height: 81,
      texture: new Texture("assets/dashboard.png"),
      aspect: "fit"
});

let menuSkin = new Skin({
      width: 640, height: 84,
      texture: new Texture("assets/menu.png"),
      aspect: "draw"
});

let menuBarFoodSkin = new Skin({
      width: 81, height: 81,
      texture: new Texture("assets/food.png"),
      aspect: "fit"
});

let menuBarMyPetSkin = new Skin({
      width: 81, height: 81,
      texture: new Texture("assets/myPet.png"),
      aspect: "fit"
});

let menuBarPetFeederSkin = new Skin({
      width: 81, height: 81,
      texture: new Texture("assets/petFeeder.png"),
      aspect: "fit"
});

//let menuBarScheduleSkin = new Skin({
//      width: 128, height: 86,
//      texture: new Texture("assets/scheduleButton.png"),
//      aspect: "fit"
//});

let dogSkin = new Skin({
      width: 54, height: 54,
      texture: new Texture("assets/dog.png"),
      aspect: "fit"
});

let menuBarPetSkin = new Skin({
      width: 640, height: 86,
      texture: new Texture("assets/menuBarPet.png"),
      aspect: "fit"
});

let menuBarSkin = new Skin({
      width: 640, height: 86,
      texture: new Texture("assets/menuBarPetFeeder.png"),
      aspect: "fit"
});

let verticalLineSkin = new Skin({
      width: 2, height: 762,
      texture: new Texture("assets/verticalLine.png"),
      aspect: "fit"
});

let bottleSkin = new Skin({
      width: 72, height: 169,
      texture: new Texture("assets/bettaMin.png"),
      aspect: "fit"
});

let bavaroSkin = new Skin({
      width: 72, height: 169,
      texture: new Texture("assets/tetracolor.png"),
      aspect: "fit"
});

let benefulSkin = new Skin({
      width: 72, height: 169,
      texture: new Texture("assets/goldFish.png"),
      aspect: "fit"
});



let beyondSkin = new Skin({
      width: 72, height: 169,
      texture: new Texture("assets/wardley.png"),
      aspect: "fit"
});

let emptyBarSkin = new Skin({
      width: 143, height: 21,
      texture: new Texture("assets/emptyBar2.png"),
      aspect: "fit"
});

let fullBarSkin = new Skin({
      width: 143, height: 21,
      texture: new Texture("assets/fullBar2.png"),
      aspect: "stretch"
});

let backArrow2 = new Skin({
      width: 48, height: 63,
      texture: new Texture("assets/backArrow2.png"),
      aspect: "fit"
});



var waterBar;
var bavaroBar;
var benefulBar;
var beyondBar;

waterBar = new Content({ 
  	top: 250, height: 21, left: 10, width: 190, 
    skin: fullBarSkin
});

bavaroBar = new Content({ 
  	top: 250, height: 21, left: 170, width: 190,  
    skin: fullBarSkin
});

benefulBar = new Content({ 
  	top: 450, height: 21, left: 10, width: 190,  
    skin: fullBarSkin
});

beyondBar = new Content({ 
  	top: 450, height: 21, left: 170, width: 190,
    skin: fullBarSkin
});

var ar2 = new Skin({ 
  	width: 41, height: 31,
    texture: new Texture("assets/ar3.png"),
    aspect: "fit"
});

var live = new Skin({ 
  	width: 45, height: 30,
    texture: new Texture("assets/live.png"),
    aspect: "fit"
});

var rectangle = new Skin({ 
  	width: 376, height: 34,
    texture: new Texture("assets/rectangle.png"),
    aspect: "fit"
});

var lineDashboard = new Skin({ 
  	width: 376, height: 1,
    texture: new Texture("assets/lineDashboard.png"),
    aspect: "fit"
});

var lineVertical = new Skin({ 
  	width: 2, height: 276,
    texture: new Texture("assets/lineVertical.png"),
    aspect: "fit"
});

var nemo = new Skin({ 
  	width: 59, height: 58,
    texture: new Texture("assets/nemo.png"),
    aspect: "fit"
});

var gill = new Skin({ 
  	width: 59, height: 58,
    texture: new Texture("assets/gill.png"),
    aspect: "fit"
});

var bubbles = new Skin({ 
  	width: 59, height: 58,
    texture: new Texture("assets/bubbles.png"),
    aspect: "fit"
});

var dory = new Skin({ 
  	width: 59, height: 58,
    texture: new Texture("assets/dory.png"),
    aspect: "fit"
});

var bloat = new Skin({ 
  	width: 59, height: 58,
    texture: new Texture("assets/bloat.png"),
    aspect: "fit"
});

var menu2 = new Skin({ 
  	width: 376, height: 48,
    texture: new Texture("assets/menu2.png"),
    aspect: "fit"
});

var foodFish = new Skin({ 
  	width: 38, height: 38,
    texture: new Texture("assets/foodFish.png"),
    aspect: "fit"
});

var aquarium = new Skin({ 
  	width: 32, height: 32,
    texture: new Texture("assets/aquarium.png"),
    aspect: "fit"
});

var fish = new Skin({ 
  	width: 34, height: 34,
    texture: new Texture("assets/fish.png"),
    aspect: "fit"
});

var fish = new Skin({ 
  	width: 34, height: 34,
    texture: new Texture("assets/fish.png"),
    aspect: "fit"
});

var alarm = new Skin({ 
  	width: 34, height: 33,
    texture: new Texture("assets/alarm.png"),
    aspect: "fit"
});

var purpleLine = new Skin({ 
  	width: 82, height: 43,
    texture: new Texture("assets/purpleLine.png"),
    aspect: "fit"
});

var blueLine = new Skin({ 
  	width: 74, height: 30,
    texture: new Texture("assets/blueLine.png"),
    aspect: "fit"
});

var orangeLine = new Skin({ 
  	width: 80, height: 8,
    texture: new Texture("assets/orangeLine.png"),
    aspect: "fit"
});

var greenLine = new Skin({ 
  	width: 70, height: 2,
    texture: new Texture("assets/greenLine.png"),
    aspect: "fit"
});



var autoFeedingToggle;
var autoTemperatureToggle;

autoFeedingToggle = new Content({ 
  			width: 70, top: 402, right: 5,
    		skin: toggleOffSkin,
    		active: true,
    		behavior: Behavior({
    			onTouchEnded: function(container) {
    				if (container.skin == toggleOnSkin){
    					container.skin = toggleOffSkin;
    					//application.distribute("onToggleLight", 0);
    				}
    				else{
    					container.skin = toggleOnSkin;
    					//application.distribute("onToggleLight", 1);
    				}
    				
    			}	
    		}) 
		});
		
		

autoTemperatureToggle = new Content({ 
  			width: 70, top: 450, right: 5,
    		skin: toggleOffSkin,
    		active: true,
    		behavior: Behavior({
    			onTouchEnded: function(container) {
    				if (container.skin == toggleOnSkin){
    					container.skin = toggleOffSkin;
    					//application.distribute("onToggleLight", 0);
    				}
    				else{
    					container.skin = toggleOnSkin;
    					//application.distribute("onToggleLight", 1);
    				}
    				
    			}	
    		}) 
		});

//KEYBOARD
import KEYBOARD from './keyboard';

import {
    FieldScrollerBehavior,
    FieldLabelBehavior
} from 'field';

let nameInputSkin = new Skin({ borders: { left: 2, right: 2, top: 2, bottom: 2 }, stroke: 'gray' });
let fieldStyle = new Style({ color: 'black', font: 'bold 24px', horizontal: 'left',
    vertical: 'middle', left: 5, right: 5, top: 5, bottom: 5 });
let fieldHintStyle = new Style({ color: '#aaa', font: '24px', horizontal: 'left',
    vertical: 'middle', left: 5, right: 5, top: 5, bottom: 5 });
let whiteSkin = new Skin({ fill: "white" });
let fieldLabelSkin = new Skin({ fill: ['transparent', 'transparent', '#C0C0C0', '#acd473'] });

let MyField = Container.template($ => ({ 
    width: 250, height: 36, skin: nameInputSkin, contents: [
        Scroller($, { 
            left: 4, right: 4, top: 4, bottom: 4, active: true, 
            Behavior: FieldScrollerBehavior, clip: true, 
            contents: [
                Label($, { 
                    left: 0, top: 0, bottom: 0, skin: fieldLabelSkin, 
                    style: fieldStyle, anchor: 'NAME',
                    editable: true, string: $.name,
                    Behavior: class extends FieldLabelBehavior {
                        onEdited(label) {
                            let data = this.data;
                            data.name = label.string;
                            label.container.hint.visible = (data.name.length == 0);
                            trace(data.name+"\n");
                        }
                    },
                }),
                Label($, {
                    left: 4, right: 4, top: 4, bottom: 4, style: fieldHintStyle,
                    string: "Tap to add text...", name: "hint"
                }),
            ]
        })
    ]
}));

//=======
let textStyleToolbar2 = new Style({ font: "18px Roboto", color: "#FC655E" });
let addFishContainer = Container.template($ => ({
    top: 0, bottom: 0, left: 0, right: 0,
    active: true, skin: backgroundSkin, state: 0,
    contents: [
    	new Content({ 
    		top: -8, left: 0, right: 0, 
   			skin: toolbarSkin, 
		}),
        new Content({ 
    		top: 10, left: 20, 
   			contents:[
   				new MyField({name: "Fish Name"})
			] 
		}),
		new Content({ 
    		top: -6, left: 0, right: 0, 
   			skin: toolBarTopSkin, 
		}),
		
		new Content({ 
    		top: 4, left: 10, width: 20,
   			skin: backArrow2, 
		}),
		
		Label($, {top: 25, left: 31, style: textStyleToolbar2, string: "Back" }),
        Label($, {top: 25, left: 120, style: textStyleToolbar, string: "Add Fish" }),
        Label($, {top: 25, right: 18, style: textStyleToolbar2, string: "Add" }),
		
		new Column({ 
    		top: 100, left: 30, 
   			contents:[
   				new MyField({name: "Fish Name"}),
   				new MyField({name: "Species"}),
   				new MyField({name: "Date of Birth"}),
   				new MyField({name: "Notes"}),
			] 
		}),
		
		new Content({ 
  			width: 400, top: 520, left: -20,
    		skin: menu2, 
		}),
	    Label($, {top: 552, left: 25, style: textStyleMenu, string: "Home" }),
		Label($, {top: 552, left: 95, style: textStyleMenu, string: "My Fishes" }),
		Label($, {top: 552, right: 95, style: textStyleMenu, string: "Schedules" }),
		Label($, {top: 552, right: 25, style: textStyleMenu, string: "Food" }),
		new Content({ 
  			width: 28, top: 520, right: 25,
    		skin: foodFish, 
			active: true,
			behavior: Behavior({
	    		onTouchEnded: function(container) {
	    			application.remove(currentScreen); 
					
					autoFeedingToggle = new Content({ 
				  			width: 70, top: 402, right: 5,
				    		skin: toggleOffSkin,
				    		active: true,
				    		behavior: Behavior({
				    			onTouchEnded: function(container) {
				    				if (container.skin == toggleOnSkin){
				    					container.skin = toggleOffSkin;
				    					//application.distribute("onToggleLight", 0);
				    				}
				    				else{
				    					container.skin = toggleOnSkin;
				    					//application.distribute("onToggleLight", 1);
				    				}
				    				
				    			}	
				    		}) 
						});
						
						
				
				autoTemperatureToggle = new Content({ 
				  			width: 70, top: 450, right: 5,
				    		skin: toggleOffSkin,
				    		active: true,
				    		behavior: Behavior({
				    			onTouchEnded: function(container) {
				    				if (container.skin == toggleOnSkin){
				    					container.skin = toggleOffSkin;
				    					//application.distribute("onToggleLight", 0);
				    				}
				    				else{
				    					container.skin = toggleOnSkin;
				    					//application.distribute("onToggleLight", 1);
				    				}
				    				
				    			}	
				    		}) 
						});
	    			 
	            	currentScreen = new FoodContainer();
	            	application.add(currentScreen);
	    		}	
	    	}) 
		}),
		
		new Content({ 
  			width: 26, top: 522, left: 25,
    		skin: aquarium, 
		}),
		
		new Content({ 
  			width: 26, top: 520, left: 103,
    		skin: fish, 
		}),
    	
    	new Content({ 
  			width: 26, top: 520, right: 105,
    		skin: alarm, 
		}),
    	
    ]
}));

let dashboardContainer = Container.template($ => ({
    top: 0, bottom: 0, left: 0, right: 0,
    active: true, skin: backgroundSkin, state: 0,
    contents: [
    	new Content({ 
    		top: -8, left: 0, right: 0, 
   			skin: toolbarSkin, 
		}),
        Label($, {top: 30, left: 20, style: textStyleWelcome, string: "Welcome back Gauthier," }),
        Label($, {top: 60, left: 20, style: textStyleSick, string: "Bubble still seems to be sick." }),
        
        new Content({ 
  			width: 41, height: 30, top: 30, right: 81,
    		skin: ar2, 
		}),
		
		new Content({ 
  			width: 45, height: 30, top: 31, right: 20,
    		skin: live, 
		}),
		
		Label($, {top: 65, right: 97, style: textStyleAR, string: "AR" }),
        Label($, {top: 65, right: 29, style: textStyleAR, string: "Live Cam" }),
		
        new Content({ 
  			width: 376, height: 34, top: 100, right: 0,
    		skin: rectangle, 
		}),
		Label($, {top: 115, left: 10, style: textStyleLabel2, string: "FISH TANK STATISTICS" }),
        
        new Content({ 
  			width: 376, height: 1, top: 120, right: 0,
    		skin: rectangle, 
		}),
        
        new Content({ 
  			width: 376, height: 1, top: 210, right: 0,
    		skin: lineDashboard, 
		}),
		Label($, {top: 140, left: 15, style: textStyleTemp, string: "15°C" }),
		Label($, {top: 163, left: 15, style: textStyleL, string: "Temperature" }),
		
		new Content({ 
  			width: 60, top: 180, left: 15,
    		skin: blueLine, 
		}),

		new Content({ 
  			width: 60, top: 190, left: 170,
    		skin: orangeLine, 
		}),

		new Content({ 
  			width: 60, top: 270, left: 15,
    		skin: greenLine, 
		}),

		new Content({ 
  			width: 60, top: 250, left: 170,
    		skin: purpleLine, 
		}),
			
	
		Label($, {top: 140, left: 170, style: textStyleTemp, string: "7" }),
		Label($, {top: 163, left: 170, style: textStyleL, string: "pH" }),
		
		Label($, {top: 215, left: 15, style: textStyleTemp, string: "35ppt" }),
		Label($, {top: 238, left: 15, style: textStyleL, string: "Salinity" }),
		
		Label($, {top: 215, left: 170, style: textStyleTemp, string: "54mS/cm" }),
		Label($, {top: 238, left: 170, style: textStyleL, string: "Conductivity" }),
		
		new Content({ 
  			width: 376, height: 1, top: 290, right: 0,
    		skin: lineDashboard, 
		}),
        
        new Content({ 
  			width: 2, height: 200, top: 134, right: 160,
    		skin: lineVertical, 
		}),
        
        
		new Content({ 
  			width: 376, height: 34, top: 290, right: 0,
    		skin: rectangle, 
		}),
		
		
		Label($, {top: 305, left: 10, style: textStyleLabel2, string: "MY FISH" }),
		Label($, {top: 305, right: 10, style: textStyleLabelBlue, string: "Show More" }),
		
		new Content({ 
  			width: 45, height: 45, top: 330, left: 10,
    		skin: nemo, 
		}),
		Label($, {top: 375, left: 18, style: textStyleLabelName, string: "Nemo" }),
		
		new Content({ 
  			width: 45, height: 45, top: 330, left: 70,
    		skin: gill, 
		}),
		Label($, {top: 375, left: 84, style: textStyleLabelName, string: "Gill" }),
		
		new Content({ 
  			width: 45, height: 45, top: 330, left: 130,
    		skin: bubbles, 
		}),
		Label($, {top: 375, left: 135, style: textStyleLabelName, string: "Bubbles" }),
		
		new Content({ 
  			width: 45, height: 45, top: 330, left: 190,
    		skin: dory, 
		}),
		Label($, {top: 375, left: 203, style: textStyleLabelName, string: "Dory" }),
		
		new Content({ 
  			width: 45, height: 45, top: 330, left: 250,
    		skin: bloat, 
		}),
		Label($, {top: 375, left: 260, style: textStyleLabelName, string: "Bloat" }),
		
		new Content({ 
  			width: 376, height: 34, top: 390, right: 0,
    		skin: rectangle, 
		}),
		
		Label($, {top: 405, left: 10, style: textStyleLabel2, string: "SWITCH BOARD" }),
		autoFeedingToggle,
		autoTemperatureToggle,
		new Content({ 
  			width: 300, top: 470, right: 0,
    		skin: lineSkin, 
		}),
		Label($, {top: 437, left: 10, style: textStyletoggle, string: "Auto Feeding" }),
		
		Label($, {top: 484, left: 10, style: textStyletoggle, string: "Auto Temperature Adjustment" }),
		
		
		new Content({ 
  			width: 400, top: 520, left: -20,
    		skin: menu2, 
		}),
	    Label($, {top: 552, left: 25, style: textStyleMenu, string: "Home" }),
		Label($, {top: 552, left: 95, style: textStyleMenu, string: "My Fishes" }),
		Label($, {top: 552, right: 95, style: textStyleMenu, string: "Schedules" }),
		Label($, {top: 552, right: 25, style: textStyleMenu, string: "Food" }),
		new Content({ 
  			width: 28, top: 520, right: 25,
    		skin: foodFish, 
			active: true,
			behavior: Behavior({
	    		onTouchEnded: function(container) {
	    			application.remove(currentScreen); 
					
					autoFeedingToggle = new Content({ 
				  			width: 70, top: 402, right: 5,
				    		skin: toggleOffSkin,
				    		active: true,
				    		behavior: Behavior({
				    			onTouchEnded: function(container) {
				    				if (container.skin == toggleOnSkin){
				    					container.skin = toggleOffSkin;
				    					//application.distribute("onToggleLight", 0);
				    				}
				    				else{
				    					container.skin = toggleOnSkin;
				    					//application.distribute("onToggleLight", 1);
				    				}
				    				
				    			}	
				    		}) 
						});
						
						
				
				autoTemperatureToggle = new Content({ 
				  			width: 70, top: 450, right: 5,
				    		skin: toggleOffSkin,
				    		active: true,
				    		behavior: Behavior({
				    			onTouchEnded: function(container) {
				    				if (container.skin == toggleOnSkin){
				    					container.skin = toggleOffSkin;
				    					//application.distribute("onToggleLight", 0);
				    				}
				    				else{
				    					container.skin = toggleOnSkin;
				    					//application.distribute("onToggleLight", 1);
				    				}
				    				
				    			}	
				    		}) 
						});
	    			 
	            	currentScreen = new FoodContainer();
	            	application.add(currentScreen);
	    		}	
	    	}) 
		}),
		
		new Content({ 
  			width: 26, top: 522, left: 25,
    		skin: aquarium, 
		}),
		
		new Content({ 
  			width: 26, top: 520, left: 103,
    		skin: fish, 
		}),
    	
    	new Content({ 
  			width: 26, top: 520, right: 105,
    		skin: alarm, 
		}),
    	
    ]
}));


let textStyleToolbar = new Style({ font: "22px Roboto", color: "black" });

let FoodContainer = Container.template($ => ({
    top: 0, bottom: 0, left: 0, right: 0,
    active: true, skin: backgroundSkin, state: 0,
    contents: [
    	new Content({ 
    		top: -6, left: 0, right: 0, 
   			skin: toolBarTopSkin, 
		}),
        Label($, {top: 25, left: 140, style: textStyleToolbar, string: "Food" }),
        
		new Content({ 
  			width: 350, top: 90, right: 0,
    		skin: lineSkin, 
		}),
		
		
		new Content({ 
  			width: 350, top: 290, right: 0,
    		skin: lineSkin, 
		}),
		
    	new Content({ 
  			width: 350, top: 490, right: 0,
    		skin: lineSkin, 
		}),
    	
		new Content({ 
  			top: 101, height: 390, left:0, right: 0,
    		skin: verticalLineSkin, 
		}),
		
		Label($, {top: 150, left: 70, style: textStyleFood, string: "BettaMin" }),
    	
		Label($, {top: 225, left: 10, style: textStyleFoodBold, string: "Quantity" }),
    	
    	new Content({ 
  			top: 110, height: 100, left: 0,
    		skin: bottleSkin, 
		}),
		
		
    	new Content({ 
  			top: 250, height: 21, left: 10,
    		skin: emptyBarSkin, 
		}),
		
		
		waterBar,
    	
		Label($, {top: 150, left: 225, style: textStyleFood, string: "TetraColor" }),
    	
    	Label($, {top: 225, left: 170, style: textStyleFoodBold, string: "Quantity" }),
    	new Content({ 
  			top: 110, height: 100, left: 160,
    		skin: bavaroSkin, 
		}),
		
    	new Content({ 
  			top: 250, height: 21, left: 170,
    		skin: emptyBarSkin, 
		}),
		
		bavaroBar,
		
    	Label($, {top: 340, left: 230, style: textStyleFood, string: "Wardley" }),
		Label($, {top: 360, left: 230, style: textStyleFood, string: "Nutrition" }),
    	
    	
    	Label($, {top: 425, left: 170, style: textStyleFoodBold, string: "Quantity" }),
    	new Content({ 
  			top: 310, height: 100, left: 160,
    		skin: beyondSkin, 
		}),
		
    	new Content({ 
  			top: 450, height: 21, left: 170,
    		skin: emptyBarSkin, 
		}),
		beyondBar,
		
		
		Label($, {top: 350, left: 70, style: textStyleFood, string: "Beneful" }),
    	
    	Label($, {top: 425, left: 10, style: textStyleFoodBold, string: "Quantity" }),
    	new Content({ 
  			top: 310, height: 100, left: 0,
    		skin: benefulSkin, 
		}),
		
    	new Content({ 
  			top: 450, height: 21, left: 10,
    		skin: emptyBarSkin, 
		}),
		benefulBar,
    	
		
		
    	
		new Content({ 
  			width: 400, top: 520, left: -20,
    		skin: menu2, 
		}),
	    Label($, {top: 552, left: 25, style: textStyleMenu, string: "Home" }),
		Label($, {top: 552, left: 95, style: textStyleMenu, string: "My Fishes" }),
		Label($, {top: 552, right: 95, style: textStyleMenu, string: "Schedules" }),
		Label($, {top: 552, right: 25, style: textStyleMenu, string: "Food" }),
		new Content({ 
  			width: 28, top: 520, right: 25,
    		skin: foodFish, 
		}),
		
		new Content({ 
  			width: 26, top: 522, left: 25,
    		skin: aquarium, 
			active: true,
			behavior: Behavior({
	    		onTouchEnded: function(container) {
	    			application.remove(currentScreen);  
					
					waterBar = new Content({ 
					  	top: 250, height: 21, left: 10, width: 190, 
					    skin: fullBarSkin
					});
					
					
					bavaroBar = new Content({ 
					  	top: 250, height: 21, left: 170, width: 190,  
					    skin: fullBarSkin
					});
					
					
					benefulBar = new Content({ 
					  	top: 450, height: 21, left: 10, width: 190,  
					    skin: fullBarSkin
					});
					
					
					beyondBar = new Content({ 
					  	top: 450, height: 21, left: 170, width: 190,
					    skin: fullBarSkin
					});
					
	    			
	            	currentScreen = new dashboardContainer();
	            	application.add(currentScreen);
	    		}	
	    	})
		}),
		
		new Content({ 
  			width: 26, top: 520, left: 103,
    		skin: fish, 
		}),
    	
    	new Content({ 
  			width: 26, top: 520, right: 105,
    		skin: alarm, 
		}),
    	
    
		
    ]
}));

//==================================================
//============== Profile Screen ==================
//==================================================
let backgroundSkin1 = new Skin({ fill : ["#FFFFFF", "#7DBF2E"] });

let topbar = new Skin({
      width: 375, height: 25,
      texture: new Texture("assets/top-bar.png"),
      aspect: "fit"
});


let ar4 = new Skin({
      width: 40, height: 42,
      texture: new Texture("assets/ar4.png"),
      aspect: "fit"
});

let check = new Skin({
      width: 105, height: 31,
      texture: new Texture("assets/check.png"),
      aspect: "fit"
});

let dismiss = new Skin({
      width: 105, height: 31,
      texture: new Texture("assets/dismiss.png"),
      aspect: "fit"
});

let fish1 = new Skin({
      width: 229, height: 235,
      texture: new Texture("assets/fish1.png"),
      aspect: "fit"
});

let graph = new Skin({
      width: 408, height: 272,
      texture: new Texture("assets/graph.png"),
      aspect: "fit"
});

let livecam = new Skin({
      width: 47, height: 47,
      texture: new Texture("assets/livecam.png"),
      aspect: "fit"
});

let notification = new Skin({
      width: 347, height: 102,
      texture: new Texture("assets/notification.png"),
      aspect: "fit"
});

let species = new Skin({
      width: 176, height: 13,
      texture: new Texture("assets/species.png"),
      aspect: "fit"
});

let title = new Skin({
      width: 407, height: 91,
      texture: new Texture("assets/title.png"),
      aspect: "fit"
});

let x = new Skin({
      width: 27, height: 26,
      texture: new Texture("assets/x.png"),
      aspect: "fit"
});

let fishProfile = Container.template($ => ({
    top: 0, bottom: 0, left: 0, right: 0,
    active: true, skin: backgroundSkin1, state: 0,
    contents: [
    	new Content({ 
    		top: -3, left: 0, right: 0, 
   			skin: topbar, 
		}),
		
		new Content({ 
    		top: 12, left: 0, right: -40, 
   			skin: title, 
		}),
		
		new Content({ 
    		top: 20, left: 0, right: 280, 
   			skin: x, 
   			active: true,
   			behavior: Behavior({
         		onTouchEnded: function(container) {
          		trace("exit\n");
         		},
       		}), 
		}),

		new Content({ 
    		top: 120, left: 0, right: 0, 
   			skin: fish1, 
		}),
		
		new Content({ 
    		top: 300, left: 0, right: 250, 
   			skin: ar4,
   			active: true,
   			behavior: Behavior({
         		onTouchEnded: function(container) {
          		trace("ar\n");
         		},
       		}), 
		}),
		
		new Content({ 
    		top: 300, left: 250, right: 0, 
   			skin: livecam,
   			active: true,
   			behavior: Behavior({
         		onTouchEnded: function(container) {
          		trace("livecam\n");
         		},
       		}),  
		}),
		
		new Content({ 
    		top: 360, left: 0, right: 0, 
   			skin: species, 
		}),
		
		new Content({ 
    		top: 380, left: 0, right: 0, 
   			skin: notification, 
		}),
		
		new Content({ 
    		top: 430, left: 0, right: 0, 
   			skin: check,
   			active: true,
   			behavior: Behavior({
         		onTouchEnded: function(container) {
          		trace("check\n");
         		},
       		}), 
		}),
    
	],
}));

//==============================================
//==================================================
//============== Diagnosis Results Screen ==================
//==================================================

let diagnosis = new Skin({
      width: 375, height: 609,
      texture: new Texture("assets/diagnosis.png"),
      aspect: "fit"
});

let title1 = new Skin({
      width: 375, height: 65,
      texture: new Texture("assets/title1.png"),
      aspect: "fit"
});

let ok = new Skin({
      width: 23, height: 14,
      texture: new Texture("assets/OK.png"),
      aspect: "fit"
});

let back = new Skin({
      width: 64, height: 25,
      texture: new Texture("assets/back.png"),
      aspect: "fit"
});

let results = Container.template($ => ({
    top: 0, bottom: 0, left: 0, right: 0,
    active: true, skin: backgroundSkin, state: 0,
    contents: [
    	new Content({ 
    		top: -5, left: 0, right: 0, 
   			skin: title, 
		}),
		
		new Content({ 
    		top: 8, left: 0, right: 0, 
   			skin: diagnosis, 
		}),
		
		new Content({ 
    		top: 29, left: 282, right: 0, 
   			skin: ok, 
   			active: true,
   			behavior: Behavior({
         		onTouchEnded: function(container) {
          		trace("ok\n");
         		},
       		}), 
		}),
		
		new Content({ 
    		top: 23, left: 0, right: 250, 
   			skin: back,
   			active: true,
   			behavior: Behavior({
         		onTouchEnded: function(container) {
          		trace("back\n");
         		},
       		}),  
		}),
		
		],
}));

//=====================================


var weightLabel = new Label({top: 140, right: 20, style: textStyleReading, string: "20kg" });

var sizeLabel = new Label({top: 190, right: 20, style: textStyleReading, string: "60cm" });

var ageLabel = new Label({top: 240, right: 20, style: textStyleReading, string: "6 years" });



var sickLabel = new Label({top: 70, left: 20, style: textStyleNews, string: "Pet is Sick" });


let textStyleWelcome = new Style({ font: "18px Roboto", color: "black" });
let textStyleSick = new Style({ font: "14px Roboto", color: "black" });






var currentScreen = new dashboardContainer();

application.add(currentScreen);
