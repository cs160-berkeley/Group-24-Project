/*import {    VerticalScroller,    VerticalScrollbar,    TopScrollerShadow,    BottomScrollerShadow} from 'scroller';

let MainContainer = Container.template($ => ({    left: 0, right: 0, top: 0, bottom: 0,    contents: [        VerticalScroller($, {             active: true, top: 25, bottom: 0,            contents: [                $.scrolling,                VerticalScrollbar(),                 TopScrollerShadow(),                 BottomScrollerShadow(),                ]                             }),
	]}));
*/

let backgroundSkin = new Skin({ fill : ["#FFFFFF", "#7DBF2E"] });

let topbar = new Skin({      width: 375, height: 25,      texture: new Texture("assets/top-bar.png"),      aspect: "fit"});

let ar = new Skin({      width: 40, height: 42,      texture: new Texture("assets/ar.png"),      aspect: "fit"});

let check = new Skin({      width: 105, height: 31,      texture: new Texture("assets/check.png"),      aspect: "fit"});

let dismiss = new Skin({      width: 105, height: 31,      texture: new Texture("assets/dismiss.png"),      aspect: "fit"});

let fish = new Skin({      width: 229, height: 235,      texture: new Texture("assets/fish.png"),      aspect: "fit"});

let graph = new Skin({      width: 408, height: 272,      texture: new Texture("assets/graph.png"),      aspect: "fit"});

let livecam = new Skin({      width: 47, height: 47,      texture: new Texture("assets/livecam.png"),      aspect: "fit"});

let notification = new Skin({      width: 347, height: 102,      texture: new Texture("assets/notification.png"),      aspect: "fit"});

let species = new Skin({      width: 176, height: 13,      texture: new Texture("assets/species.png"),      aspect: "fit"});

let title = new Skin({      width: 407, height: 91,      texture: new Texture("assets/title.png"),      aspect: "fit"});

let x = new Skin({      width: 27, height: 26,      texture: new Texture("assets/x.png"),      aspect: "fit"});

let fishProfile = Container.template($ => ({    top: 0, bottom: 0, left: 0, right: 0,    active: true, skin: backgroundSkin, state: 0,    contents: [
    	new Content({     		top: -3, left: 0, right: 0,    			skin: topbar, 		}),
		
		new Content({     		top: 12, left: 0, right: -40,    			skin: title, 		}),
		
		new Content({     		top: 20, left: 0, right: 280,    			skin: x, 
   			active: true,
   			behavior: Behavior({         		onTouchEnded: function(container) {          		trace("exit\n");         		},       		}), 		}),

		new Content({     		top: 120, left: 0, right: 0,    			skin: fish, 		}),
		
		new Content({     		top: 300, left: 0, right: 250,    			skin: ar,
   			active: true,
   			behavior: Behavior({         		onTouchEnded: function(container) {          		trace("ar\n");         		},       		}), 		}),
		
		new Content({     		top: 300, left: 250, right: 0,    			skin: livecam,
   			active: true,
   			behavior: Behavior({         		onTouchEnded: function(container) {          		trace("livecam\n");         		},       		}),  		}),
		
		new Content({     		top: 360, left: 0, right: 0,    			skin: species, 		}),
		
		new Content({     		top: 380, left: 0, right: 0,    			skin: notification, 		}),
		
		new Content({     		top: 430, left: 0, right: 150,    			skin: dismiss,
   			active: true,
   			behavior: Behavior({         		onTouchEnded: function(container) {          		trace("dismiss\n");         		},       		}), 		}),
		
		new Content({     		top: 430, left: 150, right: 0,    			skin: check,
   			active: true,
   			behavior: Behavior({         		onTouchEnded: function(container) {          		trace("check\n");         		},       		}), 		}),
    
	],}));

application.add(new fishProfile());

