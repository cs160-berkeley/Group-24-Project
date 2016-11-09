/* *     Copyright (C) 2010-2016 Marvell International Ltd. *     Copyright (C) 2002-2010 Kinoma, Inc. * *     Licensed under the Apache License, Version 2.0 (the "License"); *     you may not use this file except in compliance with the License. *     You may obtain a copy of the License at * *      http://www.apache.org/licenses/LICENSE-2.0 * *     Unless required by applicable law or agreed to in writing, software *     distributed under the License is distributed on an "AS IS" BASIS, *     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *     See the License for the specific language governing permissions and *     limitations under the License. */ let backgroundSkin = new Skin({ fill : ["#FFFFFF", "#7DBF2E"] });let textStyleMenu = new Style({ font: "12px Roboto", color: "gray" });
let textStyleHeading = new Style({ font: "14px Roboto", color: "black" });
let leftTextStyleEdit = new Style({ font: "16px Roboto", color: "black", horizontal: "left" });
let timeTextStyle = new Style({font: "34px Roboto", color: "black", horizontal: "left"});
let descriptionTextStyle = new Style({font: "12px Roboto", color: "gray", horizontal: "left"});

let toggleOffSkin = new Skin({      width: 135, height: 93,      texture: new Texture("assets/ios7_switches_1.png"),      aspect: "fit"});let toggleOnSkin = new Skin({      width: 135, height: 93,      texture: new Texture("assets/ios7_switches_2.png"),      aspect: "fit"});

let testSkin = new Skin({
	fill: "red",
});let toolbarSkin = new Skin({      width: 640, height: 34,      texture: new Texture("assets/toolbar.png"),      aspect: "fit"});

let darkGray = new Skin({
  fill: "#DDDDDD",
});


let fishListSkin = new Skin({
  fill: "#F7F7F7",
});var menu2 = new Skin({   	width: 376, height: 48,    texture: new Texture("assets/menu2.png"),    aspect: "fit"});var foodFish = new Skin({   	width: 38, height: 38,    texture: new Texture("assets/foodFish.png"),    aspect: "fit"});var aquarium = new Skin({   	width: 32, height: 32,    texture: new Texture("assets/aquarium.png"),    aspect: "fit"});var fish = new Skin({   	width: 34, height: 34,    texture: new Texture("assets/fish.png"),    aspect: "fit"});var alarm = new Skin({   	width: 34, height: 33,    texture: new Texture("assets/alarm.png"),    aspect: "fit"});var backButtonSkin = new Skin({     width: 230, height: 108,    texture: new Texture("assets/backButton.png"),    aspect: "fit"});

var editButtonSkin = new Skin({     width: 164, height: 84,    texture: new Texture("assets/edit.png"),    aspect: "fit"});var addFishButtonSkin = new Skin({     width: 34, height: 34,    texture: new Texture("assets/addFishButton.png"),    aspect: "fit"});var arrowSkin = new Skin({     width: 23, height: 37,    texture: new Texture("assets/arrow.png"),    aspect: "fit"});

var toggle = Content.template($ => ({   			width: 70, top: 0, right: 10,    		skin: toggleOffSkin,
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
    		}) 		}));var reminderScreen = Container.template($ => ({    top: 0, bottom: 0, left: 0, right: 0,    active: true, skin: backgroundSkin, state: 0,	contents: [		new Content({     		top: -8, left: 0, right: 0,    			skin: toolbarSkin, 		}),		new Label({
        top: 10, left: 100, width: 250, height: 50, string: "Scheduling",
      	}),		new Content({   			width: 400, top: 520, left: -20,    		skin: menu2, 		}),	    Label($, {top: 552, left: 25, style: textStyleMenu, string: "Home" }),		Label($, {top: 552, left: 95, style: textStyleMenu, string: "My Fishes" }),		Label($, {top: 552, right: 95, style: textStyleMenu, string: "Schedules" }),		Label($, {top: 552, right: 25, style: textStyleMenu, string: "Food" }),		new Content({   			width: 28, top: 520, right: 25,    		skin: foodFish, 		}),
			new Content ({			top: 20, width: 80, left: 0, height: 34,			skin: backButtonSkin,		}),
		new Label ({
			style: textStyleHeading,
			top: 20, left: 75, width: 200, height: 34,
			string: "Scheduling",
			skin: fishListSkin,
		}),
		new Content ({			top: 20, width: 80, right: 0, height: 34,			skin: editButtonSkin,		}),
		new Line({top: 60, height: 1, skin: darkGray}),

      new Container({top: 61, left: 0, right: 0, contents: [
        new Content({
          top: 7, left: -275, right: 0, height: 34,
          skin: addFishButtonSkin,
        }),

        new Label({
          top: 0, left: 45, right: 0, height: 50, style: leftTextStyleEdit, string: "Add a new task",
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
      		new Content({   			width: 26, top: 522, left: 25,    		skin: aquarium, 		}),				new Content({   			width: 26, top: 520, left: 103,    		skin: fish, 		}),    	    	new Content({   			width: 26, top: 520, right: 105,    		skin: alarm, 		}),	]}))var currentScreen = new reminderScreen();application.add(currentScreen);