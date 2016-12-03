import Pins from "pins";let textStyle = new Style({ font: "bold 50px", color: "white" });let textStyle2 = new Style({ font: "bold 25px", color: "white" });let MainContainer = Container.template($ => ({    top: 0, bottom: 0, left: 0, right: 0,    skin: new Skin({ fill: $.backgroundColor }),    contents: [        Label($, {            top: 70, bottom: 70, left: 70, right: 70,            style: textStyle,  string: $.string        }),            ],}));        class AppBehavior extends Behavior {    onLaunch(application) {        Pins.configure({            autoFeeding: {                require: "Digital",                pins: {                    ground: {pin: 51, type: "Ground"},                    digital: {pin:52, direction: "output"},                }            },            temperature: {                require: "PWM",                pins: {                    pwm: {pin: 53},                }            },            pH: {                require: "PWM",                pins: {                    pwm: {pin: 54},                }            },            salinity: {                require: "PWM",                pins: {                    pwm: {pin: 55},                }            },            ledColor: {                require: "led",                pins: {                    red: { pin: 59 },                    green: { pin: 61 },                    blue: { pin: 62 },                     anode: { pin: 60 }                }            },            feedingFreq: {                require: "PWM",                pins: {                    pwm: {pin: 56},                }            },        },  success => {            if (success) {                Pins.share("ws", {zeroconf: true, name: "pins_share"});                application.add(new MainContainer({ string: "Ready!", backgroundColor: "#7DBF2E" }));            } else {                   application.add(new MainContainer({ string: "Error", backgroundColor: "red" }));               };        });    }}application.behavior = new AppBehavior(); 