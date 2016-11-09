/*
let textStyleHeading = new Style({ font: "14px Roboto", color: "black" });
let leftTextStyleEdit = new Style({ font: "16px Roboto", color: "black", horizontal: "left" });
let timeTextStyle = new Style({font: "34px Roboto", color: "black", horizontal: "left"});
let descriptionTextStyle = new Style({font: "12px Roboto", color: "gray", horizontal: "left"});

let toggleOffSkin = new Skin({

let testSkin = new Skin({
	fill: "red",
});

let darkGray = new Skin({
  fill: "#DDDDDD",
});


let fishListSkin = new Skin({
  fill: "#F7F7F7",
});

var editButtonSkin = new Skin({ 

var toggle = Content.template($ => ({ 
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
        top: 10, left: 100, width: 250, height: 50, string: "Scheduling",
      	}),
	
		new Label ({
			style: textStyleHeading,
			top: 20, left: 75, width: 200, height: 34,
			string: "Scheduling",
			skin: fishListSkin,
		}),
		new Content ({
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
      