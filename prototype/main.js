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



application.add(new fishDiagnosis());





