import Pins from "pins";

let textStyle = new Style({ font: "bold 50px", color: "white" });
let textStyle2 = new Style({ font: "bold 25px", color: "white" });let MainContainer = Container.template($ => ({    top: 0, bottom: 0, left: 0, right: 0,    skin: new Skin({ fill: $.backgroundColor }),    contents: [        Label($, {            top: 70, bottom: 70, left: 70, right: 70,            style: textStyle,  string: $.string        }),
        hello
            ],}));

var hello= new Label({            top: 120, bottom: 20, left: 70, right: 70,            style: textStyle2,  string: "HELLO"        });
        
class AppBehavior extends Behavior {    onLaunch(application) {        Pins.configure({            led: {                require: "Digital", // use built-in digital BLL                pins: {                    ground: { pin: 51, type: "Ground" },                    digital: { pin: 52, direction: "output" },                }            }, 
            water: {                require: "Analog",                pins: {                    ground: { pin: 51, type: "Ground" },                    analog: { pin: 58, direction: "input" },
                    power: {pin: 59, voltage: 3.3, type: "Power"},                }            },
            bavaro: {                require: "Analog",                pins: {                    ground: { pin: 51, type: "Ground" },                    analog: { pin: 60, direction: "input" },
                    power: {pin: 59, voltage: 3.3, type: "Power"},                }            },
            beneful: {                require: "Analog",                pins: {                    ground: { pin: 51, type: "Ground" },                    analog: { pin: 61, direction: "input" },
                    power: {pin: 59, voltage: 3.3, type: "Power"},                }            },
            beyond: {                require: "Analog",                pins: {                    ground: { pin: 51, type: "Ground" },                    analog: { pin: 62, direction: "input" },
                    power: {pin: 59, voltage: 3.3, type: "Power"},                }            },  
            weight: {                require: "Analog",                pins: {                    ground: { pin: 51, type: "Ground" },                    analog: { pin: 63, direction: "input" },
                    power: {pin: 59, voltage: 3.3, type: "Power"},                }            }, 
            size: {                require: "Analog",                pins: {                    ground: { pin: 51, type: "Ground" },                    analog: { pin: 64, direction: "input" },
                    power: {pin: 59, voltage: 3.3, type: "Power"},                }            }, 
            age: {                require: "Analog",                pins: {                    ground: { pin: 51, type: "Ground" },                    analog: { pin: 65, direction: "input" },
                    power: {pin: 59, voltage: 3.3, type: "Power"},                }            }, 
            sick: {                require: "Digital",                pins: {                    ground: { pin: 51, type: "Ground" },                    digital: { pin: 66, direction: "input" },
                    power: {pin: 59, voltage: 3.3, type: "Power"},                }            }, 
            led2: {                require: "Digital", // use built-in digital BLL                pins: {                    ground: { pin: 51, type: "Ground" },                    digital: { pin: 53, direction: "output" },                }            },  
            led3: {                require: "Digital", // use built-in digital BLL                pins: {                    ground: { pin: 51, type: "Ground" },                    digital: { pin: 54, direction: "output" },                }            }, 
            led4: {                require: "Digital", // use built-in digital BLL                pins: {                    ground: { pin: 51, type: "Ground" },                    digital: { pin: 55, direction: "output" },                }            }, 
            led5: {                require: "Digital", // use built-in digital BLL                pins: {                    ground: { pin: 51, type: "Ground" },                    digital: { pin: 56, direction: "output" },                }            },    
            led6: {                require: "Digital", // use built-in digital BLL                pins: {                    ground: { pin: 51, type: "Ground" },                    digital: { pin: 57, direction: "output" },                }            },        },  success => {            if (success) {                Pins.share("ws", {zeroconf: true, name: "pins-share-led"});                application.add(new MainContainer({ string: "Ready!", backgroundColor: "#7DBF2E" }));
                Pins.repeat("/led3/read", 50, value => {
                	if (value==1){
                		hello.string = "Playing Music";				    }
				    else{
				    	hello.string = "Music Paused";
				    }				    				});            } else {                   application.add(new MainContainer({ string: "Error", backgroundColor: "red" }));               };        });    }}application.behavior = new AppBehavior(); 