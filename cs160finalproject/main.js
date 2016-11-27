/*
 *     Copyright (C) 2010-2016 Marvell International Ltd.
 *     Copyright (C) 2002-2010 Kinoma, Inc.
 *
 *     Licensed under the Apache License, Version 2.0 (the "License");
 *     you may not use this file except in compliance with the License.
 *     You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *     Unless required by applicable law or agreed to in writing, software
 *     distributed under the License is distributed on an "AS IS" BASIS,
 *     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *     See the License for the specific language governing permissions and
 *     limitations under the License.
 */
 
 
import {    HorizontalSlider, HorizontalSliderBehavior} from 'sliders';let sliderTemperature = HorizontalSlider.template($ => ({    height: 50, left: 50, right: 50, top: 105,    Behavior: class extends HorizontalSliderBehavior {        onValueChanged(container) {            trace("Value is: " + this.data.value + "\n");        }    }}));

let sliderPH = HorizontalSlider.template($ => ({    height: 50, left: 50, right: 50, top: 150,    Behavior: class extends HorizontalSliderBehavior {        onValueChanged(container) {            trace("Value is: " + this.data.value + "\n");        }    }}));

let sliderSalinity = HorizontalSlider.template($ => ({    height: 50, left: 50, right: 50, top: 200,    Behavior: class extends HorizontalSliderBehavior {        onValueChanged(container) {            trace("Value is: " + this.data.value + "\n");        }    }}));

trace("Hello, World!\n");
let backgroundSkin = new Skin({ fill : ["#F4F4F4", "#7DBF2E"] });
let launchScreenBackgroundSkin = new Skin({ fill : ["#6BC2A3", "#6BC2A3"] });

let textStyleBanner = new Style({ font: "bold 18px Lato", color: "white" });
let heyGauthier = new Style({ font: "14px Lato", color: "#78B7D4" });
let warningMessage = new Style({ font: "15px Lato", color: "#016695" });
let warningCardText = new Style({ font: "bold 40px Lato", color: "#FF8989" });
let okCardText = new Style({ font: "bold 40px Lato", color: "#91D888" });
let textBanner = new Style({ font: "bold 8px Lato", color: "white" });
let textAuto = new Style({ font: "bold 12px Lato", color: "#636363" });
let textFood = new Style({ font: "bold 11px Lato", color: "#636363" });
let textQuantity = new Style({ font: "11px Lato", color: "#E0E0E0" });
let controlsTitle = new Style({ font: "bold 10px Lato", color: "#BDBDBD" });

let feedingFrequency = new Style({ font: "bold 36px Lato", color: "#81D8E2" });
let timesPerWeek = new Style({ font: "10px Lato", color: "#BDBDBD" });

let sickText = new Style({ font: "bold 8px Lato", color: "#FF6666" });
let nameFishText = new Style({ font: "bold 16px Lato", color: "#4CD6E5" });
let specieText = new Style({ font: "14px Lato", color: "#828282" });
let dateText = new Style({ font: "11px Lato", color: "#BDBDBD" });

let notesTitle = new Style({ font: "bold 8px Lato", color: "#BDBDBD" });

let notesText = new Style({ font: "bold 11px Lato", color: "#828282" });

let alertText = new Style({ font: "bold 14px Lato", color: "#BDBDBD" });

let commentText = new Style({ font: "18px Lato", color: "#F78B8B" });

let textCard = new Style({ font: "16px Lato", color: "#4F4F4F" });

let doneButton = new Style({ font: "bold 18px Lato", color: "white" });


//91D888

let logo = new Skin({      width: 257, height: 67,      texture: new Texture("assets/launchScreen/logoLaunch.png"),      aspect: "fit"});

let banner = new Skin({      width: 375, height: 145,      texture: new Texture("assets/banner.png"),      aspect: "fit"});

let tabMenu = new Skin({      width: 375, height: 65,      texture: new Texture("assets/tabMenu/tabMenu.png"),      aspect: "fit"});

let screen = new Skin({      width: 750, height: 1336,      texture: new Texture("assets/tabMenu/screen.png"),      aspect: "fit"});

let fishIcon = new Skin({      width: 27, height: 31,      texture: new Texture("assets/tabMenu/fishIcon.png"),      aspect: "fit"});

let controlsIcon = new Skin({      width: 31, height: 26,      texture: new Texture("assets/tabMenu/controlsIcon.png"),      aspect: "fit"});

let tankIconActive = new Skin({      width: 38, height: 32,      texture: new Texture("assets/tabMenu/tankIconActive.png"),      aspect: "fit"});

let fishIconActive = new Skin({      width: 27, height: 32,      texture: new Texture("assets/tabMenu/fishIconActive.png"),      aspect: "fit"});

let controlsIconActive = new Skin({      width: 31, height: 27,      texture: new Texture("assets/tabMenu/controlsIconActive.png"),      aspect: "fit"});

let tankIcon = new Skin({      width: 38, height: 33,      texture: new Texture("assets/tabMenu/tankIcon.png"),      aspect: "fit"});

let welcomeCard = new Skin({      width: 308, height: 104,      texture: new Texture("assets/dasboard/welcomeCard.png"),      aspect: "fit"});

let arrowCircle = new Skin({      width: 56, height: 61,      texture: new Texture("assets/dasboard/arrowCircle.png"),      aspect: "fit"});

let warningCard = new Skin({      width: 161, height: 92,      texture: new Texture("assets/dasboard/warningCard.png"),      aspect: "fit"});

let warningBannerCard = new Skin({      width: 145, height: 17,      texture: new Texture("assets/dasboard/warningBannerCard.png"),      aspect: "fit"});

let card = new Skin({      width: 161, height: 92,      texture: new Texture("assets/dasboard/card.png"),      aspect: "fit"});

let bannerCard = new Skin({      width: 145, height: 17,      texture: new Texture("assets/dasboard/bannerCard.png"),      aspect: "fit"});

let pinkDot = new Skin({      width: 60, height: 61,      texture: new Texture("assets/dasboard/pinkDot.png"),      aspect: "fit"});

let foodLevelCard = new Skin({      width: 308, height: 139,      texture: new Texture("assets/dasboard/foodLevelCard.png"),      aspect: "fit"});

let foodLevelBannerCard = new Skin({      width: 300, height: 18,      texture: new Texture("assets/dasboard/foodLevelBannerCard.png"),      aspect: "fit"});

let autoFeedingCard = new Skin({      width: 308, height: 69,      texture: new Texture("assets/dasboard/autoFeedingCard.png"),      aspect: "fit"});

let autoFeedingBannerCard = new Skin({      width: 300, height: 18,      texture: new Texture("assets/dasboard/autoFeedingBannerCard.png"),      aspect: "fit"});

let switchOn = new Skin({      width: 44, height: 33,      texture: new Texture("assets/dasboard/switchOn.png"),      aspect: "fit"});

let switchOff = new Skin({      width: 45, height: 33,      texture: new Texture("assets/dasboard/switchOff.png"),      aspect: "fit"});


let emptyBar = new Skin({      width: 169, height: 10,      texture: new Texture("assets/dasboard/emptyBar.png"),      aspect: "fit"});

let bannerControls = new Skin({      width: 375, height: 144,      texture: new Texture("assets/controlsScreen/bannerControls.png"),      aspect: "fit"});

let blueDot = new Skin({      width: 64, height: 64,      texture: new Texture("assets/controlsScreen/blueDot.png"),      aspect: "fit"});

let blueDotSelect = new Skin({      width: 64, height: 64,      texture: new Texture("assets/controlsScreen/blueDotSelect.png"),      aspect: "fit"});

let controlsCard = new Skin({      width: 333, height: 210,      texture: new Texture("assets/controlsScreen/controlsCard.png"),      aspect: "fit"});
let frequencyCard = new Skin({      width: 333, height: 129,      texture: new Texture("assets/controlsScreen/frequencyCard.png"),      aspect: "fit"});
let greenDot = new Skin({      width: 64, height: 64,      texture: new Texture("assets/controlsScreen/greenDot.png"),      aspect: "fit"});
let greenDotSelect = new Skin({      width: 64, height: 64,      texture: new Texture("assets/controlsScreen/greenDotSelect.png"),      aspect: "fit"});
let ledCard = new Skin({      width: 333, height: 129,      texture: new Texture("assets/controlsScreen/ledCard.png"),      aspect: "fit"});
let minusButton = new Skin({      width: 37, height: 37,      texture: new Texture("assets/controlsScreen/minusButton.png"),      aspect: "fit"});
let orangeDot = new Skin({      width: 64, height: 64,      texture: new Texture("assets/controlsScreen/orangeDot.png"),      aspect: "fit"});
let orangeDotSelect = new Skin({      width: 64, height: 64,      texture: new Texture("assets/controlsScreen/orangeDotSelect.png"),      aspect: "fit"});
let pinkDotSelect = new Skin({      width: 64, height: 64,      texture: new Texture("assets/controlsScreen/pinkDotSelect.png"),      aspect: "fit"});
let pinkDot2 = new Skin({      width: 64, height: 64,      texture: new Texture("assets/controlsScreen/pinkDot.png"),      aspect: "fit"});
let plusButton = new Skin({      width: 37, height: 37,      texture: new Texture("assets/controlsScreen/plusButton.png"),      aspect: "fit"});
let purpleDot = new Skin({      width: 64, height: 64,      texture: new Texture("assets/controlsScreen/purpleDot.png"),      aspect: "fit"});
let purpleDotSelect = new Skin({      width: 64, height: 64,      texture: new Texture("assets/controlsScreen/purpleDotSelect.png"),      aspect: "fit"});
let redDot = new Skin({      width: 64, height: 64,      texture: new Texture("assets/controlsScreen/redDot.png"),      aspect: "fit"});
let redDotSelect = new Skin({      width: 64, height: 64,      texture: new Texture("assets/controlsScreen/redDotSelect.png"),      aspect: "fit"});

let bubbles = new Skin({      width: 74, height: 75,      texture: new Texture("assets/fishList/bubbles.png"),      aspect: "fit"});

let fishBanner = new Skin({      width: 375, height: 145,      texture: new Texture("assets/fishList/fishBanner.png"),      aspect: "fit"});

let fishCard = new Skin({      width: 333, height: 106,      texture: new Texture("assets/fishList/fishCard.png"),      aspect: "fit"});

let gary = new Skin({      width: 74, height: 75,      texture: new Texture("assets/fishList/gary.png"),      aspect: "fit"});

let harry = new Skin({      width: 74, height: 75,      texture: new Texture("assets/fishList/harry.png"),      aspect: "fit"});

let peanut = new Skin({      width: 74, height: 75,      texture: new Texture("assets/fishList/peanut.png"),      aspect: "fit"});

let patty = new Skin({      width: 74, height: 75,      texture: new Texture("assets/fishList/patty.png"),      aspect: "fit"});

let addIcon = new Skin({      width: 22, height: 22,      texture: new Texture("assets/fishList/addIcon.png"),      aspect: "fit"});

let addedIcon = new Skin({      width: 209, height: 210,      texture: new Texture("assets/fishList/addedIcon.png"),      aspect: "fit"});

let addedBlurIcon = new Skin({      width: 209, height: 210,      texture: new Texture("assets/fishList/addedBlurIcon.png"),      aspect: "fit"});

let fishImage = new Skin({      width: 95, height: 95,      texture: new Texture("assets/profile/fishImage.png"),      aspect: "fit"});

let profileCard = new Skin({      width: 354, height: 226,      texture: new Texture("assets/profile/profileCard.png"),      aspect: "fit"});

let profile = new Skin({      width: 375, height: 145,      texture: new Texture("assets/profile/profile.png"),      aspect: "fit"});

let checkFish = new Skin({      width: 355, height: 242,      texture: new Texture("assets/profile/checkFish.png"),      aspect: "fit"});

let confirmSymptons = new Skin({      width: 354, height: 242,      texture: new Texture("assets/profile/confirmSymptons.png"),      aspect: "fit"});

let cross = new Skin({      width: 17, height: 17,      texture: new Texture("assets/profile/cross.png"),      aspect: "fit"});

let okGotIt = new Skin({      width: 354, height: 242,      texture: new Texture("assets/profile/okGotIt.png"),      aspect: "fit"});

let seeRecommendation = new Skin({      width: 354, height: 242,      texture: new Texture("assets/profile/seeRecommendation.png"),      aspect: "fit"});

let circle = new Skin({      width: 12, height: 12,      texture: new Texture("assets/profile/circle.png"),      aspect: "fit"});

let radio = new Skin({      width: 25, height: 26,      texture: new Texture("assets/profile/radio.png"),      aspect: "fit"});

let radioClicked = new Skin({      width: 25, height: 26,      texture: new Texture("assets/profile/radioClicked.png"),      aspect: "fit"});

let bannerAdd = new Skin({      width: 375, height: 145,      texture: new Texture("assets/addFish/bannerAdd.png"),      aspect: "fit"});

let cardFish = new Skin({      width: 358, height: 328,      texture: new Texture("assets/addFish/cardFish.png"),      aspect: "fit"});

let filledCardFish = new Skin({      width: 358, height: 328,      texture: new Texture("assets/addFish/filledCardFish.png"),      aspect: "fit"});

let keyboard = new Skin({      width: 375, height: 250,      texture: new Texture("assets/addFish/keyboard.png"),      aspect: "fit"});

let back = new Skin({      width: 13, height: 21,      texture: new Texture("assets/addFish/back.png"),      aspect: "fit"});

let okGotItButton = new Skin({      width: 346, height: 54,      texture: new Texture("assets/profile/okGotItButton.png"),      aspect: "fit"});

let checkButton = new Skin({      width: 347, height: 54,      texture: new Texture("assets/profile/checkButton.png"),      aspect: "fit"});

let recommendationButton = new Skin({      width: 346, height: 54,      texture: new Texture("assets/profile/recommendationButton.png"),      aspect: "fit"});

let symptomsButton = new Skin({      width: 346, height: 54,      texture: new Texture("assets/profile/symptomsButton.png"),      aspect: "fit"});


var switchDashboard = new Content({   	right: 40,  top: 450, width: 44,     skin: switchOn, 	active: true, 	behavior: Behavior({        onTouchEnded: function(container) {      		if (container.skin == switchOn){
      			container.skin = switchOff;
      		}
      		else{
      			container.skin = switchOn;
      		}        }    })});

let dashboardContainer = Container.template($ => ({    top: 0, bottom: 0, left: 0, right: 0,    active: true, skin: backgroundSkin, state: 0,    contents: [      	
		
		//new Content({   		//	bottom: 0,  width: 750, top: 0,     	//	skin: screen, 		//}),
		
		new Content({   			top: 0,  width: 640,    		skin: banner, 		}),
		
		    	new Content({   			top: 62,  width: 260,    		skin: welcomeCard, 		}),    	
    	
    	Label($, {top: 83, left: 48, style: heyGauthier, string: "Hey, Gauthier!" }),
    	Label($, {top: 100, left: 48, style: warningMessage, string: "Bubbles still seems to be sick..." }),
    	Label($, {top: 120, left: 48, style: warningMessage, string: "You should check on him!" }),    	
    	    	    	
    	    	
				    	new Content({   			right: 23,  top: 110, width: 45,     		skin: arrowCircle,
			active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
		       		switchDashboard = new Content({ 					  	right: 40,  top: 450, width: 44, 					    skin: switchOn, 						active: true,					 	behavior: Behavior({					        onTouchEnded: function(container) {					      		if (container.skin == switchOn){
					      			container.skin = switchOff;
					      		}
					      		else{
					      			container.skin = switchOn;
					      		}					        }					    })					});
					currentScreen = new fishProfileCheckContainer();
					application.add(currentScreen);

						        }		    }) 		}),        	        	new Content({   			left: 25,  top: 150, width: 138,     		skin: warningCard, 		}),    	    	new Content({   			left: 31,  top: 162, width: 126,     		skin: warningBannerCard, 		}),
		
		    	    	new Content({   			left: 25,  top: 222, width: 138,     		skin: warningCard, 		}),    	    	new Content({   			left: 31,  top: 234, width: 126,     		skin: warningBannerCard, 		}),	
		
		new Content({   			right: 18,  top: 157, width: 138,     		skin: card, 		}),    	    	new Content({   			right: 31,  top: 162, width: 126,     		skin: bannerCard, 		}),
		
		new Content({   			right: 18,  top: 229, width: 138,     		skin: card, 		}),    	    	new Content({   			right: 31,  top: 234, width: 126,     		skin: bannerCard, 		}),	
		
		new Content({   			right: 31,  top: 243, width: 126,     		skin: pinkDot, 		}),	
		
		Label($, {top: 180, left: 46, style: warningCardText, string: "100°F" }),	    	Label($, {top: 253, left: 46, style: warningCardText, string: "9 days" }),
    	Label($, {top: 180, right: 70, style: okCardText, string: "8.8" }),
    	Label($, {top: 166, left: 38, style: textBanner, string: "TEMPERATURE" }),
    	Label($, {top: 166, right: 116, style: textBanner, string: "pH LEVELS" }),
    	Label($, {top: 238, left: 38, style: textBanner, string: "TIME SINCE TANK CLEANING" }),
    	Label($, {top: 238, right: 95, style: textBanner, string: "TANK LED COLOR" }),
		

		new Content({   			right: 31,  top: 300, width: 260,     		skin: foodLevelCard, 		}),	
		new Content({   			right: 33,  top: 311, width: 255,     		skin: foodLevelBannerCard, 		}),
		
		new Content({   			right: 30,  top: 430, width: 262,     		skin: autoFeedingCard, 		}),	
		new Content({   			right: 33,  top: 430, width: 255,     		skin: autoFeedingBannerCard, 		}),	    	Label($, {top: 315, left: 38, style: textBanner, string: "FOOD LEVELS" }),    	    	Label($, {top: 435, left: 38, style: textBanner, string: "AUTO LEVELS" }),    	
		Label($, {top: 460, left: 50, style: textAuto, string: "Auto-Feeding" }),    	    	switchDashboard,
	
		new Content({   			right: 74,  top: 335, width: 130,     		skin: emptyBar, 		}),
		new Content({   			right: 74,  top: 358, width: 130,     		skin: emptyBar, 		}),
		new Content({   			right: 74,  top: 381, width: 130,     		skin: emptyBar, 		}),
		new Content({   			right: 74,  top: 404, width: 130,     		skin: emptyBar, 		}),	    	    	    	    	Label($, {top: 335, left: 43, style: textFood, string: "Tropical Flakes" }),    	    	Label($, {top: 358, left: 43, style: textFood, string: "Floating Pellets" }),
    	Label($, {top: 381, left: 43, style: textFood, string: "Tropical Crisps" }),
    	Label($, {top: 404, left: 43, style: textFood, string: "Premium Algae" }),
    	Label($, {top: 335, left: 255, style: textQuantity, string: "FULL" }),
    	Label($, {top: 358, left: 255, style: textQuantity, string: "10%" }),
    	Label($, {top: 381, left: 255, style: textQuantity, string: "33%" }),
    	Label($, {top: 404, left: 255, style: textQuantity, string: "62%" }),    	//textQuantity        	    		//warningCardText	    	//textBanner    //Label($, {top: 30, left: 115, style: textStyleBanner, string: "DASHBOARD" }),          	//Tab Menu
		new Content({   			bottom: 0,  width: 640,    		skin: tabMenu		}),
		new Content({   			bottom: 15,  width: 25, left: 58,    		skin: fishIcon,
			active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
		       		switchDashboard = new Content({ 					  	right: 40,  top: 450, width: 44, 					    skin: switchOn, 						active: true,					 	behavior: Behavior({					        onTouchEnded: function(container) {					      		if (container.skin == switchOn){
					      			container.skin = switchOff;
					      		}
					      		else{
					      			container.skin = switchOn;
					      		}					        }					    })					});
					currentScreen = new fishListContainer();
					application.add(currentScreen);

						        }		    })		}),
		
		
		new Content({   			right: 58,  bottom: 15, width: 30,     		skin: controlsIcon,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					
					switchDashboard = new Content({ 					  	right: 40,  top: 450, width: 44, 					    skin: switchOn, 						active: true,					 	behavior: Behavior({					        onTouchEnded: function(container) {					      		if (container.skin == switchOn){
					      			container.skin = switchOff;
					      		}
					      		else{
					      			container.skin = switchOn;
					      		}					        }					    })					});
							       		
					currentScreen = new controlsContainer();
					application.add(currentScreen);		        }		    })		}),
		    	new Content({   			bottom: 14,  width: 30,     		skin: tankIconActive		})    ]}));

let launchScreenContainer = Container.template($ => ({    top: 0, bottom: 0, left: 0, right: 0,    active: true, skin: launchScreenBackgroundSkin, state: 0, 
 	behavior: Behavior({        onTouchEnded: function(container) {       		application.remove(currentScreen);
			currentScreen = new dashboardContainer();
			application.add(currentScreen);        }    }),    contents: [      	new Content({   			right: 30, left: 30, top: 0, bottom: 0,     		skin: logo, 		}),    ]}));

var foodFrequency = 7;
var frequencyLabel = new Label({top: 395, left: 0, right: 0, style: feedingFrequency, string: foodFrequency.toString() });

var orangeDotButton = new Content({   	top: 283,  width: 50, left: 35,    skin: orangeDot, 
	active: true,
 	behavior: Behavior({        onTouchEnded: function(container) {      		container.skin = orangeDotSelect;
			pinkDotButton.skin = pinkDot2;
			blueDotButton.skin = blueDot;
			greenDotButton.skin = greenDot;      		purpleDotButton.skin = purpleDot;
			redDotButton.skin = redDot;        }    })});
 
var pinkDotButton = new Content({   	top: 283,  width: 50, left: 75,    skin: pinkDotSelect, 
	active: true,
 	behavior: Behavior({        onTouchEnded: function(container) {      		container.skin = pinkDotSelect;
			orangeDotButton.skin = orangeDot;
			blueDotButton.skin = blueDot;
			greenDotButton.skin = greenDot;      		purpleDotButton.skin = purpleDot;
			redDotButton.skin = redDot;        }    })});

var blueDotButton = new Content({   	top: 283,  width: 50, left: 115,    skin: blueDot, 
	active: true,
 	behavior: Behavior({        onTouchEnded: function(container) {      		container.skin = blueDotSelect;
			orangeDotButton.skin = orangeDot;
			purpleDotButton.skin = purpleDot;
			greenDotButton.skin = greenDot;      		purpleDotButton.skin = purpleDot;
			redDotButton.skin = redDot;
			pinkDotButton.skin = pinkDot2;
			        }    }) });			
var greenDotButton = new Content({   	top: 283,  width: 50, left: 155,    skin: greenDot, 
	active: true,
 	behavior: Behavior({        onTouchEnded: function(container) {      		container.skin = greenDotSelect;
			orangeDotButton.skin = orangeDot;
			purpleDotButton.skin = purpleDot;
			blueDotButton.skin = blueDot;      		purpleDotButton.skin = purpleDot;
			redDotButton.skin = redDot;
			pinkDotButton.skin = pinkDot2;
			        }    }) });		var purpleDotButton = new Content({   	top: 283,  width: 50, left: 195,    skin: purpleDot, 
	active: true,
 	behavior: Behavior({        onTouchEnded: function(container) {      		container.skin = purpleDotSelect;
			orangeDotButton.skin = orangeDot;
			blueDotButton.skin = blueDot;
			greenDotButton.skin = greenDot;      		pinkDotButton.skin = pinkDot2;
			redDotButton.skin = redDot;        }    }) });		var redDotButton = new Content({   	top: 283,  width: 50, left: 235,    skin: redDot, 
	active: true,
 	behavior: Behavior({        onTouchEnded: function(container) {      		container.skin = redDotSelect;
			orangeDotButton.skin = orangeDot;
			blueDotButton.skin = blueDot;
			greenDotButton.skin = greenDot;      		purpleDotButton.skin = purpleDot;
			pinkDotButton.skin = pinkDot2;        }    }) });	



let controlsContainer = Container.template($ => ({    top: 0, bottom: 0, left: 0, right: 0,    active: true, skin: backgroundSkin, state: 0,    contents: [      	new Content({   			top: 0,  width: 640,    		skin: bannerControls, 		}),
		new Content({   			top: 62,  width: 260,    		skin: controlsCard, 		}),
		new Content({   			top: 240,  width: 260,    		skin: ledCard, 		}),
		new Content({   			top: 348,  width: 260,    		skin: frequencyCard, 		}),
		
		
		Label($, {top: 100, left: 45, style: controlsTitle, string: "TEMPERATURE (°F)" }),

		Label($, {top: 145, left: 45, style: controlsTitle, string: "pH" }),
		
		Label($, {top: 190, left: 45, style: controlsTitle, string: "SALINITY (PPT)" }),				Label($, {top: 265, left: 45, style: controlsTitle, string: "TANK LED LIGHT COLOR" }),
	
		Label($, {top: 375, left: 45, style: controlsTitle, string: "FEEDING FREQUENCY" }),
				
		new Content({   			top: 395, left: 100, width: 37,    		skin: minusButton, 
			active: true,
 			behavior: Behavior({		        onTouchEnded: function(container) {
					if (foodFrequency != 0){
						foodFrequency -= 1;
					}
					
							      
					frequencyLabel.string = foodFrequency.toString();		        }		    }) 		}),	
 						
		frequencyLabel,
	
		new Content({   			top: 395, right: 100, width: 37,    		skin: plusButton, 
			active: true,
 			behavior: Behavior({		        onTouchEnded: function(container) {		      		foodFrequency += 1;
					frequencyLabel.string = foodFrequency;		        }		    })		}),							Label($, {top: 435, left: 0, right: 0, style: timesPerWeek, string: "times per week" }),
	

						orangeDotButton,		pinkDotButton,				blueDotButton,				greenDotButton,		purpleDotButton,					redDotButton,						new sliderTemperature({ min: 35, max: 200, value: 100 }),
		
		new sliderPH({ min: 0, max: 14, value: 7 }),				new sliderSalinity({ min: 0, max: 50, value: 25 }),						//Tab Menu
		new Content({   			bottom: 0,  width: 640,    		skin: tabMenu, 		}),
		new Content({   			bottom: 15,  width: 25, left: 58,    		skin: fishIcon,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new fishListContainer();
					application.add(currentScreen);
					frequencyLabel = new Label({top: 395, left: 0, right: 0, style: feedingFrequency, string: foodFrequency.toString() });
					orangeDotButton = new Content({ 					  	top: 283,  width: 50, left: 35,					    skin: orangeDot, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {					      		container.skin = orangeDotSelect;
								pinkDotButton.skin = pinkDot2;
								blueDotButton.skin = blueDot;
								greenDotButton.skin = greenDot;					      		purpleDotButton.skin = purpleDot;
								redDotButton.skin = redDot;					        }					    })					});
					 					
					pinkDotButton = new Content({ 					  	top: 283,  width: 50, left: 75,					    skin: pinkDotSelect, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {					      		container.skin = pinkDotSelect;
								orangeDotButton.skin = orangeDot;
								blueDotButton.skin = blueDot;
								greenDotButton.skin = greenDot;					      		purpleDotButton.skin = purpleDot;
								redDotButton.skin = redDot;					        }					    })					});
										
					blueDotButton = new Content({ 					  	top: 283,  width: 50, left: 115,					    skin: blueDot, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {					      		container.skin = blueDotSelect;
								orangeDotButton.skin = orangeDot;
								purpleDotButton.skin = purpleDot;
								greenDotButton.skin = greenDot;					      		purpleDotButton.skin = purpleDot;
								redDotButton.skin = redDot;
								pinkDotButton.skin = pinkDot2;
													        }					    }) 					});								
					greenDotButton = new Content({ 					  	top: 283,  width: 50, left: 155,					    skin: greenDot, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {					      		container.skin = greenDotSelect;
								orangeDotButton.skin = orangeDot;
								purpleDotButton.skin = purpleDot;
								blueDotButton.skin = blueDot;					      		purpleDotButton.skin = purpleDot;
								redDotButton.skin = redDot;
								pinkDotButton.skin = pinkDot2;
													        }					    }) 					});												purpleDotButton = new Content({ 					  	top: 283,  width: 50, left: 195,					    skin: purpleDot, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {					      		container.skin = purpleDotSelect;
								orangeDotButton.skin = orangeDot;
								blueDotButton.skin = blueDot;
								greenDotButton.skin = greenDot;					      		pinkDotButton.skin = pinkDot2;
								redDotButton.skin = redDot;					        }					    }) 					});												redDotButton = new Content({ 					  	top: 283,  width: 50, left: 235,					    skin: redDot, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {					      		container.skin = redDotSelect;
								orangeDotButton.skin = orangeDot;
								blueDotButton.skin = blueDot;
								greenDotButton.skin = greenDot;					      		purpleDotButton.skin = purpleDot;
								pinkDotButton.skin = pinkDot2;					        }					    }) 					});			        }		    })		}),
		
		    	new Content({   			bottom: 14,  width: 30,     		skin: tankIcon,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new dashboardContainer();
					application.add(currentScreen);
					frequencyLabel = new Label({top: 395, left: 0, right: 0, style: feedingFrequency, string: foodFrequency.toString() });
					orangeDotButton = new Content({ 					  	top: 283,  width: 50, left: 35,					    skin: orangeDot, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {					      		container.skin = orangeDotSelect;
								pinkDotButton.skin = pinkDot2;
								blueDotButton.skin = blueDot;
								greenDotButton.skin = greenDot;					      		purpleDotButton.skin = purpleDot;
								redDotButton.skin = redDot;					        }					    })					});
					 					
					pinkDotButton = new Content({ 					  	top: 283,  width: 50, left: 75,					    skin: pinkDotSelect, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {					      		container.skin = pinkDotSelect;
								orangeDotButton.skin = orangeDot;
								blueDotButton.skin = blueDot;
								greenDotButton.skin = greenDot;					      		purpleDotButton.skin = purpleDot;
								redDotButton.skin = redDot;					        }					    })					});
										
					blueDotButton = new Content({ 					  	top: 283,  width: 50, left: 115,					    skin: blueDot, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {					      		container.skin = blueDotSelect;
								orangeDotButton.skin = orangeDot;
								purpleDotButton.skin = purpleDot;
								greenDotButton.skin = greenDot;					      		purpleDotButton.skin = purpleDot;
								redDotButton.skin = redDot;
								pinkDotButton.skin = pinkDot2;
													        }					    }) 					});								
					greenDotButton = new Content({ 					  	top: 283,  width: 50, left: 155,					    skin: greenDot, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {					      		container.skin = greenDotSelect;
								orangeDotButton.skin = orangeDot;
								purpleDotButton.skin = purpleDot;
								blueDotButton.skin = blueDot;					      		purpleDotButton.skin = purpleDot;
								redDotButton.skin = redDot;
								pinkDotButton.skin = pinkDot2;
													        }					    }) 					});												purpleDotButton = new Content({ 					  	top: 283,  width: 50, left: 195,					    skin: purpleDot, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {					      		container.skin = purpleDotSelect;
								orangeDotButton.skin = orangeDot;
								blueDotButton.skin = blueDot;
								greenDotButton.skin = greenDot;					      		pinkDotButton.skin = pinkDot2;
								redDotButton.skin = redDot;					        }					    }) 					});												redDotButton = new Content({ 					  	top: 283,  width: 50, left: 235,					    skin: redDot, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {					      		container.skin = redDotSelect;
								orangeDotButton.skin = orangeDot;
								blueDotButton.skin = blueDot;
								greenDotButton.skin = greenDot;					      		purpleDotButton.skin = purpleDot;
								pinkDotButton.skin = pinkDot2;					        }					    }) 					});			        }		    })		}),	    	
    	    	new Content({   			right: 58,  bottom: 15, width: 30,     		skin: controlsIconActive, 		}),
		    ]}));

let fishListContainer = Container.template($ => ({    top: 0, bottom: 0, left: 0, right: 0,    active: true, skin: backgroundSkin, state: 0,    contents: [      	new Content({   			top: 0,  width: 640,    		skin: fishBanner, 		}),
		new Content({   			top: 30,  right: 20, width: 22,    		skin: addIcon,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new addFishContainer();
					application.add(currentScreen);		        }		    })  		}),
				new Content({   			top: 80,  width: 260,    		skin: fishCard, 
			active: true,
			behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new fishProfileCheckContainer();
					application.add(currentScreen);		        }		    }) 		}),
 		new Content({   			top: 170,  width: 260,    		skin: fishCard, 		}),
 		new Content({   			top: 260,  width: 260,    		skin: fishCard, 		}),
 		new Content({   			top: 350,  width: 260,    		skin: fishCard, 		}),
 		//new Content({   		//	top: 440,  width: 260,    	//	skin: fishCard, 		//}),
 		new Content({   			top: 92,  width: 52, left: 45,    		skin: bubbles, 		}),
 		Label($, {top: 105, left: 120, style: sickText, string: "SICK!" }),		Label($, {top: 114, left: 120, style: nameFishText, string: "BUBBLES" }),
		Label($, {top: 130, left: 120, style: specieText, string: "Yellow Tang" }),
		Label($, {top: 145, left: 120, style: dateText, string: "since March 2016" }),
		
		new Content({   			top: 182,  width: 52, left: 45,    		skin: peanut, 		}),
 		//Label($, {top: 195, left: 120, style: sickText, string: "SICK!" }),		Label($, {top: 199, left: 120, style: nameFishText, string: "PEANUT" }),
		Label($, {top: 215, left: 120, style: specieText, string: "Brown Cichlid" }),
		Label($, {top: 230, left: 120, style: dateText, string: "since December 2015" }),
		
		new Content({   			top: 272,  width: 52, left: 45,    		skin: harry, 		}),
 		//Label($, {top: 285, left: 120, style: sickText, string: "SICK!" }),		Label($, {top: 289, left: 120, style: nameFishText, string: "HARRY" }),
		Label($, {top: 305, left: 120, style: specieText, string: "Blue GloFish" }),
		Label($, {top: 320, left: 120, style: dateText, string: "since May 2015" }),
		
		new Content({   			top: 362,  width: 52, left: 45,    		skin: gary, 		}),
 		//Label($, {top: 375, left: 120, style: sickText, string: "SICK!" }),		Label($, {top: 379, left: 120, style: nameFishText, string: "GARY" }),
		Label($, {top: 395, left: 120, style: specieText, string: "Tan Nerite Snail" }),
		Label($, {top: 410, left: 120, style: dateText, string: "since May 2015" }),
				//Tab Menu
		new Content({   			bottom: 0,  width: 640,    		skin: tabMenu, 		}),
		new Content({   			bottom: 15,  width: 25, left: 58,    		skin: fishIconActive, 		}),
		
		    	new Content({   			bottom: 14,  width: 30,     		skin: tankIcon,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new dashboardContainer();
					application.add(currentScreen);		        }		    })		}),	    	
    	    	new Content({   			right: 58,  bottom: 15, width: 30,     		skin: controlsIcon,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new controlsContainer();
					application.add(currentScreen);		        }		    }) 		}),
		    ]}));

let fishListAddedContainer = Container.template($ => ({    top: 0, bottom: 0, left: 0, right: 0,    active: true, skin: backgroundSkin, state: 0,    contents: [      	new Content({   			top: 0,  width: 640,    		skin: fishBanner, 		}),
		new Content({   			top: 30,  right: 20, width: 22,    		skin: addIcon,
			active: true,
			behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new addFishContainer();
					application.add(currentScreen);		        }		    }) 		}),
				new Content({   			top: 80,  width: 260,    		skin: fishCard, 		}),
 		new Content({   			top: 170,  width: 260,    		skin: fishCard,
			active: true,
			behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new fishProfileCheckContainer();
					application.add(currentScreen);		        }		    }) 		}),
 		new Content({   			top: 260,  width: 260,    		skin: fishCard, 		}),
 		new Content({   			top: 350,  width: 260,    		skin: fishCard, 		}),
 		new Content({   			top: 440,  width: 260,    		skin: fishCard, 		}),
 		//new Content({   		//	top: 440,  width: 260,    	//	skin: fishCard, 		//}),
 		new Content({   			top: 92,  width: 52, left: 45,    		skin: patty, 		}),
 		//Label($, {top: 100, left: 120, style: sickText, string: "SICK!" }),		Label($, {top: 109, left: 120, style: nameFishText, string: "PATTY" }),
		Label($, {top: 125, left: 120, style: specieText, string: "Pink Platy" }),
		Label($, {top: 140, left: 120, style: dateText, string: "since November 2016" }),
		
		new Content({   			top: 182,  width: 52, left: 45,    		skin: bubbles, 		}),
 		Label($, {top: 195, left: 120, style: sickText, string: "SICK!" }),		Label($, {top: 204, left: 120, style: nameFishText, string: "BUBBLES" }),
		Label($, {top: 220, left: 120, style: specieText, string: "Yellow Tang" }),
		Label($, {top: 235, left: 120, style: dateText, string: "since March 2016" }),
		
		new Content({   			top: 272,  width: 52, left: 45,    		skin: peanut, 		}),
 		//Label($, {top: 285, left: 120, style: sickText, string: "SICK!" }),		Label($, {top: 289, left: 120, style: nameFishText, string: "PEANUT" }),
		Label($, {top: 305, left: 120, style: specieText, string: "Brown Cichlid" }),
		Label($, {top: 320, left: 120, style: dateText, string: "since December 2015" }),
		
		new Content({   			top: 362,  width: 52, left: 45,    		skin: harry, 		}),
 		//Label($, {top: 375, left: 120, style: sickText, string: "SICK!" }),		Label($, {top: 379, left: 120, style: nameFishText, string: "HARRY" }),
		Label($, {top: 395, left: 120, style: specieText, string: "Blue GloFish" }),
		Label($, {top: 410, left: 120, style: dateText, string: "since May 2015" }),
		
		new Content({   			top: 452,  width: 52, left: 45,    		skin: gary, 		}),
 		//Label($, {top: 375, left: 120, style: sickText, string: "SICK!" }),		Label($, {top: 469, left: 120, style: nameFishText, string: "GARY" }),
		Label($, {top: 485, left: 120, style: specieText, string: "Tan Nerite Snail" }),
		Label($, {top: 500, left: 120, style: dateText, string: "since May 2015" }),
				//Tab Menu
		new Content({   			bottom: 0,  width: 640,    		skin: tabMenu, 		}),
		new Content({   			bottom: 15,  width: 25, left: 58,    		skin: fishIconActive, 		}),
		
		    	new Content({   			bottom: 14,  width: 30,     		skin: tankIcon,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new dashboardContainer();
					application.add(currentScreen);		        }		    })		}),	    	
    	    	new Content({   			right: 58,  bottom: 15, width: 30,     		skin: controlsIcon,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new controlsContainer();
					application.add(currentScreen);		        }		    }) 		}),
		    ]}));

let fishListAddedConfirmationContainer = Container.template($ => ({    top: 0, bottom: 0, left: 0, right: 0,    active: true, skin: backgroundSkin, state: 0,    contents: [      	new Content({   			top: 0,  width: 640,    		skin: fishBanner, 		}),
		new Content({   			top: 30,  right: 20, width: 22,    		skin: addIcon, 		}),
				new Content({   			top: 80,  width: 260,    		skin: fishCard, 		}),
 		new Content({   			top: 170,  width: 260,    		skin: fishCard, 		}),
 		new Content({   			top: 260,  width: 260,    		skin: fishCard, 		}),
 		new Content({   			top: 350,  width: 260,    		skin: fishCard, 		}),
 		new Content({   			top: 440,  width: 260,    		skin: fishCard, 		}),
 		//new Content({   		//	top: 440,  width: 260,    	//	skin: fishCard, 		//}),
 		new Content({   			top: 92,  width: 52, left: 45,    		skin: patty, 		}),
 		//Label($, {top: 100, left: 120, style: sickText, string: "SICK!" }),		Label($, {top: 109, left: 120, style: nameFishText, string: "PATTY" }),
		Label($, {top: 125, left: 120, style: specieText, string: "Pink Platy" }),
		Label($, {top: 140, left: 120, style: dateText, string: "since November 2016" }),
		
		new Content({   			top: 182,  width: 52, left: 45,    		skin: bubbles, 		}),
 		Label($, {top: 195, left: 120, style: sickText, string: "SICK!" }),		Label($, {top: 204, left: 120, style: nameFishText, string: "BUBBLES" }),
		Label($, {top: 220, left: 120, style: specieText, string: "Yellow Tang" }),
		Label($, {top: 235, left: 120, style: dateText, string: "since March 2016" }),
		
		new Content({   			top: 272,  width: 52, left: 45,    		skin: peanut, 		}),
 		//Label($, {top: 285, left: 120, style: sickText, string: "SICK!" }),		Label($, {top: 289, left: 120, style: nameFishText, string: "PEANUT" }),
		Label($, {top: 305, left: 120, style: specieText, string: "Brown Cichlid" }),
		Label($, {top: 320, left: 120, style: dateText, string: "since December 2015" }),
		
		new Content({   			top: 362,  width: 52, left: 45,    		skin: harry, 		}),
 		//Label($, {top: 375, left: 120, style: sickText, string: "SICK!" }),		Label($, {top: 379, left: 120, style: nameFishText, string: "HARRY" }),
		Label($, {top: 395, left: 120, style: specieText, string: "Blue GloFish" }),
		Label($, {top: 410, left: 120, style: dateText, string: "since May 2015" }),
		
		new Content({   			top: 452,  width: 52, left: 45,    		skin: gary, 		}),
 		//Label($, {top: 375, left: 120, style: sickText, string: "SICK!" }),		Label($, {top: 469, left: 120, style: nameFishText, string: "GARY" }),
		Label($, {top: 485, left: 120, style: specieText, string: "Tan Nerite Snail" }),
		Label($, {top: 500, left: 120, style: dateText, string: "since May 2015" }),
				new Content({   			top: 0,  width: 52, left: 60, right: 60, bottom: 0,    		skin: addedIcon, 		}),		//Tab Menu
		new Content({   			bottom: 0,  width: 640,    		skin: tabMenu, 		}),
		new Content({   			bottom: 15,  width: 25, left: 58,    		skin: fishIconActive, 		}),
		
		    	new Content({   			bottom: 14,  width: 30,     		skin: tankIcon,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new dashboardContainer();
					application.add(currentScreen);		        }		    })		}),	    	
    	    	new Content({   			right: 58,  bottom: 15, width: 30,     		skin: controlsIcon,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new controlsContainer();
					application.add(currentScreen);		        }		    }) 		}),
		    ]}));

let fishListAddedBlurConfirmationContainer = Container.template($ => ({    top: 0, bottom: 0, left: 0, right: 0,    active: true, skin: backgroundSkin, state: 0,    contents: [      	new Content({   			top: 0,  width: 640,    		skin: fishBanner, 		}),
		new Content({   			top: 30,  right: 20, width: 22,    		skin: addIcon, 		}),
				new Content({   			top: 80,  width: 260,    		skin: fishCard, 		}),
 		new Content({   			top: 170,  width: 260,    		skin: fishCard, 		}),
 		new Content({   			top: 260,  width: 260,    		skin: fishCard, 		}),
 		new Content({   			top: 350,  width: 260,    		skin: fishCard, 		}),
 		new Content({   			top: 440,  width: 260,    		skin: fishCard, 		}),
 		//new Content({   		//	top: 440,  width: 260,    	//	skin: fishCard, 		//}),
 		new Content({   			top: 92,  width: 52, left: 45,    		skin: patty, 		}),
 		//Label($, {top: 100, left: 120, style: sickText, string: "SICK!" }),		Label($, {top: 109, left: 120, style: nameFishText, string: "PATTY" }),
		Label($, {top: 125, left: 120, style: specieText, string: "Pink Platy" }),
		Label($, {top: 140, left: 120, style: dateText, string: "since November 2016" }),
		
		new Content({   			top: 182,  width: 52, left: 45,    		skin: bubbles, 		}),
 		Label($, {top: 195, left: 120, style: sickText, string: "SICK!" }),		Label($, {top: 204, left: 120, style: nameFishText, string: "BUBBLES" }),
		Label($, {top: 220, left: 120, style: specieText, string: "Yellow Tang" }),
		Label($, {top: 235, left: 120, style: dateText, string: "since March 2016" }),
		
		new Content({   			top: 272,  width: 52, left: 45,    		skin: peanut, 		}),
 		//Label($, {top: 285, left: 120, style: sickText, string: "SICK!" }),		Label($, {top: 289, left: 120, style: nameFishText, string: "PEANUT" }),
		Label($, {top: 305, left: 120, style: specieText, string: "Brown Cichlid" }),
		Label($, {top: 320, left: 120, style: dateText, string: "since December 2015" }),
		
		new Content({   			top: 362,  width: 52, left: 45,    		skin: harry, 		}),
 		//Label($, {top: 375, left: 120, style: sickText, string: "SICK!" }),		Label($, {top: 379, left: 120, style: nameFishText, string: "HARRY" }),
		Label($, {top: 395, left: 120, style: specieText, string: "Blue GloFish" }),
		Label($, {top: 410, left: 120, style: dateText, string: "since May 2015" }),
		
		new Content({   			top: 452,  width: 52, left: 45,    		skin: gary, 		}),
 		//Label($, {top: 375, left: 120, style: sickText, string: "SICK!" }),		Label($, {top: 469, left: 120, style: nameFishText, string: "GARY" }),
		Label($, {top: 485, left: 120, style: specieText, string: "Tan Nerite Snail" }),
		Label($, {top: 500, left: 120, style: dateText, string: "since May 2015" }),
				new Content({   			top: 0,  width: 52, left: 60, right: 60, bottom: 0,    		skin: addedBlurIcon, 		}),		//Tab Menu
		new Content({   			bottom: 0,  width: 640,    		skin: tabMenu, 		}),
		new Content({   			bottom: 15,  width: 25, left: 58,    		skin: fishIconActive, 		}),
		
		    	new Content({   			bottom: 14,  width: 30,     		skin: tankIcon,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new dashboardContainer();
					application.add(currentScreen);		        }		    })		}),	    	
    	    	new Content({   			right: 58,  bottom: 15, width: 30,     		skin: controlsIcon,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new controlsContainer();
					application.add(currentScreen);		        }		    }) 		}),
		    ]}));

let fishProfileContainer = Container.template($ => ({    top: 0, bottom: 0, left: 0, right: 0,    active: true, skin: backgroundSkin, state: 0,    contents: [      	new Content({   			top: -11,  left: 0, right:0,     		skin: profile, 		}),
		new Content({   			top: 25, left:20, width: 10,    		skin: back,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new fishListContainer();
					application.add(currentScreen);		        }		    })		}),
		Label($, {top: 25, right: 20, style: doneButton, string: "Edit" }),
		
						new Content({   			top: 62,  width: 260,    		skin: profileCard, 		}),
 		new Content({   			top: 105, left: 60, width: 70,    		skin: bubbles, 		}),
 		Label($, {top: 185, left: 65, style: nameFishText, string: "BUBBLES" }),
		Label($, {top: 200, left: 65, style: specieText, string: "Yellow Tang" }),
		Label($, {top: 215, left: 60, style: dateText, string: "since March 2016" }),		
		Label($, {top: 120, left: 165, style: notesTitle, string: "NOTES" }),

		Label($, {top: 140, left: 165, style: notesText, string: "Likes  to eat Tropical Flakes." }),
		Label($, {top: 155, left: 165, style: notesText, string: "Often hides inside castle." }),
		Label($, {top: 185, left: 165, style: notesText, string: "My favorite fish." }),
				//Tab Menu
		new Content({   			bottom: 0,  width: 640,    		skin: tabMenu, 		}),
		new Content({   			bottom: 15,  width: 25, left: 58,    		skin: fishIconActive, 		}),
		
		    	new Content({   			bottom: 14,  width: 30,     		skin: tankIcon,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new dashboardContainer();
					application.add(currentScreen);		        }		    })		}),	    	
    	    	new Content({   			right: 58,  bottom: 15, width: 30,     		skin: controlsIcon,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new controlsContainer();
					application.add(currentScreen);		        }		    }) 		}),
		    ]}));

let fishProfileCheckContainer = Container.template($ => ({    top: 0, bottom: 0, left: 0, right: 0,    active: true, skin: backgroundSkin, state: 0,    contents: [      	new Content({   			top: -11,  left: 0, right:0,     		skin: profile, 		}),
		new Content({   			top: 25, left:20, width: 10,    		skin: back,    		active: true, 		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);					currentScreen = new fishListContainer();					application.add(currentScreen);		        }		    })		}),
		Label($, {top: 25, right: 20, style: doneButton, string: "Edit" }),	
				new Content({   			top: 62,  width: 260,    		skin: profileCard, 		}),
 		new Content({   			top: 105, left: 60, width: 70,    		skin: bubbles, 		}),
 		Label($, {top: 185, left: 65, style: nameFishText, string: "BUBBLES" }),
		Label($, {top: 200, left: 65, style: specieText, string: "Yellow Tang" }),
		Label($, {top: 215, left: 60, style: dateText, string: "since March 2016" }),		
		Label($, {top: 120, left: 165, style: notesTitle, string: "NOTES" }),

		Label($, {top: 140, left: 165, style: notesText, string: "Likes  to eat Tropical Flakes." }),
		Label($, {top: 155, left: 165, style: notesText, string: "Often hides inside castle." }),
		Label($, {top: 185, left: 165, style: notesText, string: "My favorite fish." }),
		
		
		
		
		
		new Content({   			top: 250, width: 260,    		skin: checkFish, 		}),
 
		
		new Content({   			top: 408, width: 255,    		skin: checkButton,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new fishProfileSymptomsContainer();
					application.add(currentScreen);		        }		    })		}),
		

		new Content({   			top: 285, left: 42, width: 10,    		skin: cross,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new fishProfileContainer();
					application.add(currentScreen);		        }		    })		}),
		Label($, {top: 285,  style: alertText, string: "ALERT" }),
		Label($, {top: 310, style: commentText, string: "Bubbles may be sick!" }),
		Label($, {top: 350, left: 60, style: specieText, string: "Last movement was detected 2 hours ago." }),
		Label($, {top: 375, left: 60, style: specieText, string: "Last feeding was 10 hours ago." }),
		

		new Content({   			top: 352, left: 47, width: 8,    		skin: circle, 		}),
 		new Content({   			top: 377, left: 47, width: 8,    		skin: circle, 		}),		
		
		//Tab Menu
		new Content({   			bottom: 0,  width: 640,    		skin: tabMenu, 		}),
		new Content({   			bottom: 15,  width: 25, left: 58,    		skin: fishIconActive, 		}),
		
		    	new Content({   			bottom: 14,  width: 30,     		skin: tankIcon,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new dashboardContainer();
					application.add(currentScreen);		        }		    })		}),	    	
    	    	new Content({   			right: 58,  bottom: 15, width: 30,     		skin: controlsIcon,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new controlsContainer();
					application.add(currentScreen);		        }		    }) 		}),
		    ]}));

var radio1 = new Content({   	top: 305, right: 47, width: 12,    skin: radio, 
	active: true,
 	behavior: Behavior({        onTouchEnded: function(container) {
			if (container.skin == radioClicked){      			container.skin = radio;
			}
			else{
				container.skin = radioClicked;
			}      		        }    })});
 var radio2 = new Content({   	top: 330, right: 47, width: 12,    skin: radio, 
	active: true,
 	behavior: Behavior({        onTouchEnded: function(container) {
			if (container.skin == radioClicked){      			container.skin = radio;
			}
			else{
				container.skin = radioClicked;
			}      		        }    }) });	
 var radio3 = new Content({   	top: 355, right: 47, width: 12,    skin: radio, 
	active: true,
 	behavior: Behavior({        onTouchEnded: function(container) {
			if (container.skin == radioClicked){      			container.skin = radio;
			}
			else{
				container.skin = radioClicked;
			}      		        }    })});
 
var radio4 = new Content({   	top: 380, right: 47, width: 12,    skin: radio, 
	active: true,
 	behavior: Behavior({        onTouchEnded: function(container) {
			if (container.skin == radioClicked){      			container.skin = radio;
			}
			else{
				container.skin = radioClicked;
			}      		        }    })});	

let fishProfileSymptomsContainer = Container.template($ => ({    top: 0, bottom: 0, left: 0, right: 0,    active: true, skin: backgroundSkin, state: 0,    contents: [      	new Content({   			top: -11,  left: 0, right:0,     		skin: profile, 		}),
		new Content({   			top: 25, left:20, width: 10,    		skin: back,    		active: true, 		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);					currentScreen = new fishListContainer();					application.add(currentScreen);
					radio1 = new Content({ 					  	top: 305, right: 47, width: 12,					    skin: radio, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {
								if (container.skin == radioClicked){					      			container.skin = radio;
								}
								else{
									container.skin = radioClicked;
								}					      							        }					    })					});
					 					radio2 = new Content({ 					  	top: 330, right: 47, width: 12,					    skin: radio, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {
								if (container.skin == radioClicked){					      			container.skin = radio;
								}
								else{
									container.skin = radioClicked;
								}					      							        }					    }) 					});	
					 					radio3 = new Content({ 					  	top: 355, right: 47, width: 12,					    skin: radio, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {
								if (container.skin == radioClicked){					      			container.skin = radio;
								}
								else{
									container.skin = radioClicked;
								}					      							        }					    })					});
					 					
					radio4 = new Content({ 					  	top: 380, right: 47, width: 12,					    skin: radio, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {
								if (container.skin == radioClicked){					      			container.skin = radio;
								}
								else{
									container.skin = radioClicked;
								}					      							        }					    })					});			        }		    })		}),
		Label($, {top: 25, right: 20, style: doneButton, string: "Edit" }),
				new Content({   			top: 62,  width: 260,    		skin: profileCard, 		}),
 		new Content({   			top: 105, left: 60, width: 70,    		skin: bubbles, 		}),
 		Label($, {top: 185, left: 65, style: nameFishText, string: "BUBBLES" }),
		Label($, {top: 200, left: 65, style: specieText, string: "Yellow Tang" }),
		Label($, {top: 215, left: 60, style: dateText, string: "since March 2016" }),		
		Label($, {top: 120, left: 165, style: notesTitle, string: "NOTES" }),

		Label($, {top: 140, left: 165, style: notesText, string: "Likes  to eat Tropical Flakes." }),
		Label($, {top: 155, left: 165, style: notesText, string: "Often hides inside castle." }),
		Label($, {top: 185, left: 165, style: notesText, string: "My favorite fish." }),
		
		
		
		
		
		new Content({   			top: 250, width: 260,    		skin: confirmSymptons, 		}),
 		
		new Content({   			top: 408, width: 255,    		skin: symptomsButton,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new fishProfileDiagnosisContainer();
					application.add(currentScreen);
					
					radio1 = new Content({ 					  	top: 305, right: 47, width: 12,					    skin: radio, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {
								if (container.skin == radioClicked){					      			container.skin = radio;
								}
								else{
									container.skin = radioClicked;
								}					      							        }					    })					});
					 					radio2 = new Content({ 					  	top: 330, right: 47, width: 12,					    skin: radio, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {
								if (container.skin == radioClicked){					      			container.skin = radio;
								}
								else{
									container.skin = radioClicked;
								}					      							        }					    }) 					});	
					 					radio3 = new Content({ 					  	top: 355, right: 47, width: 12,					    skin: radio, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {
								if (container.skin == radioClicked){					      			container.skin = radio;
								}
								else{
									container.skin = radioClicked;
								}					      							        }					    })					});
					 					
					radio4 = new Content({ 					  	top: 380, right: 47, width: 12,					    skin: radio, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {
								if (container.skin == radioClicked){					      			container.skin = radio;
								}
								else{
									container.skin = radioClicked;
								}					      							        }					    })					});			        }		    })		}),
		
		new Content({   			top: 285, left: 42, width: 10,    		skin: cross,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new fishProfileContainer();
					application.add(currentScreen);

					radio1 = new Content({ 					  	top: 305, right: 47, width: 12,					    skin: radio, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {
								if (container.skin == radioClicked){					      			container.skin = radio;
								}
								else{
									container.skin = radioClicked;
								}					      							        }					    })					});
					 					radio2 = new Content({ 					  	top: 330, right: 47, width: 12,					    skin: radio, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {
								if (container.skin == radioClicked){					      			container.skin = radio;
								}
								else{
									container.skin = radioClicked;
								}					      							        }					    }) 					});	
					 					radio3 = new Content({ 					  	top: 355, right: 47, width: 12,					    skin: radio, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {
								if (container.skin == radioClicked){					      			container.skin = radio;
								}
								else{
									container.skin = radioClicked;
								}					      							        }					    })					});
					 					
					radio4 = new Content({ 					  	top: 380, right: 47, width: 12,					    skin: radio, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {
								if (container.skin == radioClicked){					      			container.skin = radio;
								}
								else{
									container.skin = radioClicked;
								}					      							        }					    })					});			        }		    }) 		}),
 		Label($, {top: 285,  style: alertText, string: "SYMPTOMS" }),
		Label($, {top: 310, left: 60, style: specieText, string: "Fish has white skin" }),
		Label($, {top: 335, left: 60, style: specieText, string: "Fish has blurry eyes" }),
		Label($, {top: 360, left: 60, style: specieText, string: "Fish is swimming upside down" }),
		Label($, {top: 385, left: 60, style: specieText, string: "Fish has broken fin" }),


		radio1,
		radio2,
		radio3,
		radio4,
		
		//Tab Menu
		new Content({   			bottom: 0,  width: 640,    		skin: tabMenu, 		}),
		new Content({   			bottom: 15,  width: 25, left: 58,    		skin: fishIconActive, 		}),
		
		    	new Content({   			bottom: 14,  width: 30,     		skin: tankIcon,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new dashboardContainer();
					application.add(currentScreen);

					radio1 = new Content({ 					  	top: 305, right: 47, width: 12,					    skin: radio, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {
								if (container.skin == radioClicked){					      			container.skin = radio;
								}
								else{
									container.skin = radioClicked;
								}					      							        }					    })					});
					 					radio2 = new Content({ 					  	top: 330, right: 47, width: 12,					    skin: radio, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {
								if (container.skin == radioClicked){					      			container.skin = radio;
								}
								else{
									container.skin = radioClicked;
								}					      							        }					    }) 					});	
					 					radio3 = new Content({ 					  	top: 355, right: 47, width: 12,					    skin: radio, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {
								if (container.skin == radioClicked){					      			container.skin = radio;
								}
								else{
									container.skin = radioClicked;
								}					      							        }					    })					});
					 					
					radio4 = new Content({ 					  	top: 380, right: 47, width: 12,					    skin: radio, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {
								if (container.skin == radioClicked){					      			container.skin = radio;
								}
								else{
									container.skin = radioClicked;
								}					      							        }					    })					});			        }		    })		}),	    	
    	    	new Content({   			right: 58,  bottom: 15, width: 30,     		skin: controlsIcon,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new controlsContainer();
					application.add(currentScreen);

					radio1 = new Content({ 					  	top: 305, right: 47, width: 12,					    skin: radio, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {
								if (container.skin == radioClicked){					      			container.skin = radio;
								}
								else{
									container.skin = radioClicked;
								}					      							        }					    })					});
					 					radio2 = new Content({ 					  	top: 330, right: 47, width: 12,					    skin: radio, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {
								if (container.skin == radioClicked){					      			container.skin = radio;
								}
								else{
									container.skin = radioClicked;
								}					      							        }					    }) 					});	
					 					radio3 = new Content({ 					  	top: 355, right: 47, width: 12,					    skin: radio, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {
								if (container.skin == radioClicked){					      			container.skin = radio;
								}
								else{
									container.skin = radioClicked;
								}					      							        }					    })					});
					 					
					radio4 = new Content({ 					  	top: 380, right: 47, width: 12,					    skin: radio, 
						active: true,
					 	behavior: Behavior({					        onTouchEnded: function(container) {
								if (container.skin == radioClicked){					      			container.skin = radio;
								}
								else{
									container.skin = radioClicked;
								}					      							        }					    })					});			        }		    }) 		}),
		    ]}));

let fishProfileDiagnosisContainer = Container.template($ => ({    top: 0, bottom: 0, left: 0, right: 0,    active: true, skin: backgroundSkin, state: 0,    contents: [      	new Content({   			top: -11,  left: 0, right:0,     		skin: profile, 		}),
		new Content({   			top: 25, left:20, width: 10,    		skin: back,    		active: true, 		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);					currentScreen = new fishListContainer();					application.add(currentScreen);		        }		    })		}),
		
		Label($, {top: 25, right: 20, style: doneButton, string: "Edit" }),
				new Content({   			top: 62,  width: 260,    		skin: profileCard, 		}),
 		new Content({   			top: 105, left: 60, width: 70,    		skin: bubbles, 		}),
 		Label($, {top: 185, left: 65, style: nameFishText, string: "BUBBLES" }),
		Label($, {top: 200, left: 65, style: specieText, string: "Yellow Tang" }),
		Label($, {top: 215, left: 60, style: dateText, string: "since March 2016" }),		
		Label($, {top: 120, left: 165, style: notesTitle, string: "NOTES" }),

		Label($, {top: 140, left: 165, style: notesText, string: "Likes  to eat Tropical Flakes." }),
		Label($, {top: 155, left: 165, style: notesText, string: "Often hides inside castle." }),
		Label($, {top: 185, left: 165, style: notesText, string: "My favorite fish." }),
		
		
		
		
		
		new Content({   			top: 250, width: 260,    		skin: seeRecommendation, 		}),
		

		new Content({   			top: 408, width: 255,    		skin: recommendationButton,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new fishProfileOkGotItContainer();
					application.add(currentScreen);		        }		    })		}),		 

 

		new Content({   			top: 285, left: 42, width: 10,    		skin: cross,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new fishProfileContainer();
					application.add(currentScreen);		        }		    })		}),
 		Label($, {top: 285,  style: alertText, string: "DIAGNOSIS" }),

 		
		Label($, {top: 310, style: textCard, string: "There are too many fish in your" }),
		Label($, {top: 335, style: textCard, string: "aquarium and your fish has developed" }),
		Label($, {top: 360, style: textCard, string: "a bacterial disease called: Aeromonas" }),
		Label($, {top: 385, style: textCard, string: "hydrophila." }),
		
		//Tab Menu
		new Content({   			bottom: 0,  width: 640,    		skin: tabMenu, 		}),
		new Content({   			bottom: 15,  width: 25, left: 58,    		skin: fishIconActive, 		}),
		
		    	new Content({   			bottom: 14,  width: 30,     		skin: tankIcon,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new dashboardContainer();
					application.add(currentScreen);		        }		    })		}),	    	
    	    	new Content({   			right: 58,  bottom: 15, width: 30,     		skin: controlsIcon,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new controlsContainer();
					application.add(currentScreen);		        }		    }) 		}),
		    ]}));

let fishProfileOkGotItContainer = Container.template($ => ({    top: 0, bottom: 0, left: 0, right: 0,    active: true, skin: backgroundSkin, state: 0,    contents: [      	new Content({   			top: -11,  left: 0, right:0,     		skin: profile, 		}),
		new Content({   			top: 25, left:20, width: 10,    		skin: back,    		active: true, 		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);					currentScreen = new fishListContainer();					application.add(currentScreen);		        }		    })		}),
		
		Label($, {top: 25, right: 20, style: doneButton, string: "Edit" }),
				new Content({   			top: 62,  width: 260,    		skin: profileCard, 		}),
 		new Content({   			top: 105, left: 60, width: 70,    		skin: bubbles, 		}),
 		Label($, {top: 185, left: 65, style: nameFishText, string: "BUBBLES" }),
		Label($, {top: 200, left: 65, style: specieText, string: "Yellow Tang" }),
		Label($, {top: 215, left: 60, style: dateText, string: "since March 2016" }),		
		Label($, {top: 120, left: 165, style: notesTitle, string: "NOTES" }),

		Label($, {top: 140, left: 165, style: notesText, string: "Likes  to eat Tropical Flakes." }),
		Label($, {top: 155, left: 165, style: notesText, string: "Often hides inside castle." }),
		Label($, {top: 185, left: 165, style: notesText, string: "My favorite fish." }),
		
		
		
		
		
		new Content({   			top: 250, width: 260,    		skin: okGotIt, 		}),
 
		new Content({   			top: 408, width: 255,    		skin: okGotItButton,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new fishProfileContainer();
					application.add(currentScreen);		        }		    })		}),	
		
 

		new Content({   			top: 285, left: 42, width: 10,    		skin: cross,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new fishProfileContainer();
					application.add(currentScreen);		        }		    })		}),
 		Label($, {top: 285,  style: alertText, string: "DIAGNOSIS" }),

 		
		Label($, {top: 335, style: textCard, string: "Consider removing a fish from your" }),
		Label($, {top: 360, style: textCard, string: "aquarium to reduce crowdedness." }),		//Tab Menu
		new Content({   			bottom: 0,  width: 640,    		skin: tabMenu, 		}),
		new Content({   			bottom: 15,  width: 25, left: 58,    		skin: fishIconActive, 		}),
		
		    	new Content({   			bottom: 14,  width: 30,     		skin: tankIcon,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new dashboardContainer();
					application.add(currentScreen);		        }		    })		}),	    	
    	    	new Content({   			right: 58,  bottom: 15, width: 30,     		skin: controlsIcon,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new controlsContainer();
					application.add(currentScreen);		        }		    }) 		}),
		    ]}));

let addFishContainer = Container.template($ => ({    top: 0, bottom: 0, left: 0, right: 0,    active: true, skin: backgroundSkin, state: 0,    contents: [      	new Content({   			top: 0,  width: 640,    		skin: bannerAdd, 		}),

		
		new Content({   			top: 30, left:20, width: 10,    		skin: back,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new fishListContainer();
					application.add(currentScreen);		        }		    })		}),
 
		Label($, {top: 30, right: 10, style: doneButton, string: "Done",    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new fishListAddedConfirmationContainer();
					application.add(currentScreen);		        }		    })  }),
				new Content({   			top: 60,  width: 300,    		skin: cardFish,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new addFilledFishContainer();
					application.add(currentScreen);		        }		    }) 		}),
 		new Content({   			bottom: -20,  left: 0, right: 0,    		skin: keyboard, 		}),
 	    ]}));

let addFilledFishContainer = Container.template($ => ({    top: 0, bottom: 0, left: 0, right: 0,    active: true, skin: backgroundSkin, state: 0,    contents: [      	new Content({   			top: 0,  width: 640,    		skin: bannerAdd, 		}),

		
		new Content({   			top: 30, left:20, width: 10,    		skin: back,    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new fishListContainer();
					application.add(currentScreen);		        }		    })		}),
 
		Label($, {top: 30, right: 10, style: doneButton, string: "Done",    		active: true, 
		 	behavior: Behavior({		        onTouchEnded: function(container) {		       		application.remove(currentScreen);
					currentScreen = new fishListAddedContainer();
					application.add(currentScreen);		        }		    })  }),
				new Content({   			top: 60,  width: 300,    		skin: filledCardFish, 		}),
 		new Content({   			bottom: -20,  left: 0, right: 0,    		skin: keyboard, 		}),
 	    ]}));

var currentScreen = new launchScreenContainer();

//var currentScreen = new addFishContainer();
application.add(currentScreen);

