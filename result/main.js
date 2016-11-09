let backgroundSkin = new Skin({ fill : ["#FFFFFF", "#7DBF2E"] });

let diagnosis = new Skin({      width: 375, height: 609,      texture: new Texture("assets/diagnosis.png"),      aspect: "fit"});

let title = new Skin({      width: 375, height: 65,      texture: new Texture("assets/title1.png"),      aspect: "fit"});

let ok = new Skin({      width: 23, height: 14,      texture: new Texture("assets/OK.png"),      aspect: "fit"});

let back = new Skin({      width: 64, height: 25,      texture: new Texture("assets/back.png"),      aspect: "fit"});

let results = Container.template($ => ({    top: 0, bottom: 0, left: 0, right: 0,    active: true, skin: backgroundSkin, state: 0,    contents: [
    	new Content({     		top: -5, left: 0, right: 0,    			skin: title, 		}),
		
		new Content({     		top: 8, left: 0, right: 0,    			skin: diagnosis, 		}),
		
		new Content({     		top: 29, left: 282, right: 0,    			skin: ok, 
   			active: true,
   			behavior: Behavior({         		onTouchEnded: function(container) {          		trace("ok\n");         		},       		}), 		}),
		
		new Content({     		top: 23, left: 0, right: 250,    			skin: back,
   			active: true,
   			behavior: Behavior({         		onTouchEnded: function(container) {          		trace("back\n");         		},       		}),  		}),
		
		],}));

application.add(new results());