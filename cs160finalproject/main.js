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
 
 
import {

let sliderPH = HorizontalSlider.template($ => ({

let sliderSalinity = HorizontalSlider.template($ => ({

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

let logo = new Skin({

let banner = new Skin({

let tabMenu = new Skin({

let screen = new Skin({

let fishIcon = new Skin({

let controlsIcon = new Skin({

let tankIconActive = new Skin({

let fishIconActive = new Skin({

let controlsIconActive = new Skin({

let tankIcon = new Skin({

let welcomeCard = new Skin({

let arrowCircle = new Skin({

let warningCard = new Skin({

let warningBannerCard = new Skin({

let card = new Skin({

let bannerCard = new Skin({

let pinkDot = new Skin({

let foodLevelCard = new Skin({

let foodLevelBannerCard = new Skin({

let autoFeedingCard = new Skin({

let autoFeedingBannerCard = new Skin({

let switchOn = new Skin({

let switchOff = new Skin({


let emptyBar = new Skin({

let bannerControls = new Skin({

let blueDot = new Skin({

let blueDotSelect = new Skin({

let controlsCard = new Skin({
let frequencyCard = new Skin({
let greenDot = new Skin({
let greenDotSelect = new Skin({
let ledCard = new Skin({
let minusButton = new Skin({
let orangeDot = new Skin({
let orangeDotSelect = new Skin({
let pinkDotSelect = new Skin({
let pinkDot2 = new Skin({
let plusButton = new Skin({
let purpleDot = new Skin({
let purpleDotSelect = new Skin({
let redDot = new Skin({
let redDotSelect = new Skin({

let bubbles = new Skin({

let fishBanner = new Skin({

let fishCard = new Skin({

let gary = new Skin({

let harry = new Skin({

let peanut = new Skin({

let patty = new Skin({

let addIcon = new Skin({

let addedIcon = new Skin({

let addedBlurIcon = new Skin({

let fishImage = new Skin({

let profileCard = new Skin({

let profile = new Skin({

let checkFish = new Skin({

let confirmSymptons = new Skin({

let cross = new Skin({

let okGotIt = new Skin({

let seeRecommendation = new Skin({

let circle = new Skin({

let radio = new Skin({

let radioClicked = new Skin({

let bannerAdd = new Skin({

let cardFish = new Skin({

let filledCardFish = new Skin({

let keyboard = new Skin({

let back = new Skin({

let okGotItButton = new Skin({

let checkButton = new Skin({

let recommendationButton = new Skin({

let symptomsButton = new Skin({


var switchDashboard = new Content({ 
      			container.skin = switchOff;
      		}
      		else{
      			container.skin = switchOn;
      		}

let dashboardContainer = Container.template($ => ({
		
		//new Content({ 
		
		new Content({ 
		
		
    	
    	Label($, {top: 83, left: 48, style: heyGauthier, string: "Hey, Gauthier!" }),
    	Label($, {top: 100, left: 48, style: warningMessage, string: "Bubbles still seems to be sick..." }),
    	Label($, {top: 120, left: 48, style: warningMessage, string: "You should check on him!" }),
    	
    	
				
			active: true, 
		 	behavior: Behavior({

					      			container.skin = switchOff;
					      		}
					      		else{
					      			container.skin = switchOn;
					      		}
					currentScreen = new fishProfileCheckContainer();
					application.add(currentScreen);

				
		
		
		
		new Content({ 
		
		new Content({ 
		
		new Content({ 
		
		Label($, {top: 180, left: 46, style: warningCardText, string: "100°F" }),	





		

		new Content({ 

		
		new Content({ 

		Label($, {top: 460, left: 50, style: textAuto, string: "Auto-Feeding" }),

		new Content({ 









		new Content({ 
		new Content({ 
			active: true, 
		 	behavior: Behavior({

					      			container.skin = switchOff;
					      		}
					      		else{
					      			container.skin = switchOn;
					      		}
					currentScreen = new fishListContainer();
					application.add(currentScreen);

				
		
		
		new Content({ 
		 	behavior: Behavior({
					
					switchDashboard = new Content({ 
					      			container.skin = switchOff;
					      		}
					      		else{
					      			container.skin = switchOn;
					      		}
					
					currentScreen = new controlsContainer();
					application.add(currentScreen);
		

let launchScreenContainer = Container.template($ => ({
 	behavior: Behavior({
			currentScreen = new dashboardContainer();
			application.add(currentScreen);

var foodFrequency = 7;
var frequencyLabel = new Label({top: 395, left: 0, right: 0, style: feedingFrequency, string: foodFrequency.toString() });

var orangeDotButton = new Content({ 
	active: true,
 	behavior: Behavior({
			pinkDotButton.skin = pinkDot2;
			blueDotButton.skin = blueDot;
			greenDotButton.skin = greenDot;
			redDotButton.skin = redDot;
 
var pinkDotButton = new Content({ 
	active: true,
 	behavior: Behavior({
			orangeDotButton.skin = orangeDot;
			blueDotButton.skin = blueDot;
			greenDotButton.skin = greenDot;
			redDotButton.skin = redDot;

var blueDotButton = new Content({ 
	active: true,
 	behavior: Behavior({
			orangeDotButton.skin = orangeDot;
			purpleDotButton.skin = purpleDot;
			greenDotButton.skin = greenDot;
			redDotButton.skin = redDot;
			pinkDotButton.skin = pinkDot2;
			
var greenDotButton = new Content({ 
	active: true,
 	behavior: Behavior({
			orangeDotButton.skin = orangeDot;
			purpleDotButton.skin = purpleDot;
			blueDotButton.skin = blueDot;
			redDotButton.skin = redDot;
			pinkDotButton.skin = pinkDot2;
			
	active: true,
 	behavior: Behavior({
			orangeDotButton.skin = orangeDot;
			blueDotButton.skin = blueDot;
			greenDotButton.skin = greenDot;
			redDotButton.skin = redDot;
	active: true,
 	behavior: Behavior({
			orangeDotButton.skin = orangeDot;
			blueDotButton.skin = blueDot;
			greenDotButton.skin = greenDot;
			pinkDotButton.skin = pinkDot2;



let controlsContainer = Container.template($ => ({



		
		
		Label($, {top: 100, left: 45, style: controlsTitle, string: "TEMPERATURE (°F)" }),

		Label($, {top: 145, left: 45, style: controlsTitle, string: "pH" }),
		
		Label($, {top: 190, left: 45, style: controlsTitle, string: "SALINITY (PPT)" }),
	
		Label($, {top: 375, left: 45, style: controlsTitle, string: "FEEDING FREQUENCY" }),
		
		new Content({ 
			active: true,
 			behavior: Behavior({
					if (foodFrequency != 0){
						foodFrequency -= 1;
					}
					
					
					frequencyLabel.string = foodFrequency.toString();
 
		frequencyLabel,
	
		new Content({ 
			active: true,
 			behavior: Behavior({
					frequencyLabel.string = foodFrequency;
	

				
		
		new sliderPH({ min: 0, max: 14, value: 7 }),
		new Content({ 
		new Content({ 
		 	behavior: Behavior({
					currentScreen = new fishListContainer();
					application.add(currentScreen);
					frequencyLabel = new Label({top: 395, left: 0, right: 0, style: feedingFrequency, string: foodFrequency.toString() });
					orangeDotButton = new Content({ 
						active: true,
					 	behavior: Behavior({
								pinkDotButton.skin = pinkDot2;
								blueDotButton.skin = blueDot;
								greenDotButton.skin = greenDot;
								redDotButton.skin = redDot;
					 
					pinkDotButton = new Content({ 
						active: true,
					 	behavior: Behavior({
								orangeDotButton.skin = orangeDot;
								blueDotButton.skin = blueDot;
								greenDotButton.skin = greenDot;
								redDotButton.skin = redDot;
					
					blueDotButton = new Content({ 
						active: true,
					 	behavior: Behavior({
								orangeDotButton.skin = orangeDot;
								purpleDotButton.skin = purpleDot;
								greenDotButton.skin = greenDot;
								redDotButton.skin = redDot;
								pinkDotButton.skin = pinkDot2;
								
					greenDotButton = new Content({ 
						active: true,
					 	behavior: Behavior({
								orangeDotButton.skin = orangeDot;
								purpleDotButton.skin = purpleDot;
								blueDotButton.skin = blueDot;
								redDotButton.skin = redDot;
								pinkDotButton.skin = pinkDot2;
								
						active: true,
					 	behavior: Behavior({
								orangeDotButton.skin = orangeDot;
								blueDotButton.skin = blueDot;
								greenDotButton.skin = greenDot;
								redDotButton.skin = redDot;
						active: true,
					 	behavior: Behavior({
								orangeDotButton.skin = orangeDot;
								blueDotButton.skin = blueDot;
								greenDotButton.skin = greenDot;
								pinkDotButton.skin = pinkDot2;
		
		
		 	behavior: Behavior({
					currentScreen = new dashboardContainer();
					application.add(currentScreen);
					frequencyLabel = new Label({top: 395, left: 0, right: 0, style: feedingFrequency, string: foodFrequency.toString() });
					orangeDotButton = new Content({ 
						active: true,
					 	behavior: Behavior({
								pinkDotButton.skin = pinkDot2;
								blueDotButton.skin = blueDot;
								greenDotButton.skin = greenDot;
								redDotButton.skin = redDot;
					 
					pinkDotButton = new Content({ 
						active: true,
					 	behavior: Behavior({
								orangeDotButton.skin = orangeDot;
								blueDotButton.skin = blueDot;
								greenDotButton.skin = greenDot;
								redDotButton.skin = redDot;
					
					blueDotButton = new Content({ 
						active: true,
					 	behavior: Behavior({
								orangeDotButton.skin = orangeDot;
								purpleDotButton.skin = purpleDot;
								greenDotButton.skin = greenDot;
								redDotButton.skin = redDot;
								pinkDotButton.skin = pinkDot2;
								
					greenDotButton = new Content({ 
						active: true,
					 	behavior: Behavior({
								orangeDotButton.skin = orangeDot;
								purpleDotButton.skin = purpleDot;
								blueDotButton.skin = blueDot;
								redDotButton.skin = redDot;
								pinkDotButton.skin = pinkDot2;
								
						active: true,
					 	behavior: Behavior({
								orangeDotButton.skin = orangeDot;
								blueDotButton.skin = blueDot;
								greenDotButton.skin = greenDot;
								redDotButton.skin = redDot;
						active: true,
					 	behavior: Behavior({
								orangeDotButton.skin = orangeDot;
								blueDotButton.skin = blueDot;
								greenDotButton.skin = greenDot;
								pinkDotButton.skin = pinkDot2;
    	
		

let fishListContainer = Container.template($ => ({

		 	behavior: Behavior({
					currentScreen = new addFishContainer();
					application.add(currentScreen);
		
			active: true,
			behavior: Behavior({
					currentScreen = new fishProfileCheckContainer();
					application.add(currentScreen);
 
 
 
 
 
 
		Label($, {top: 130, left: 120, style: specieText, string: "Yellow Tang" }),
		Label($, {top: 145, left: 120, style: dateText, string: "since March 2016" }),
		
		new Content({ 
 
		Label($, {top: 215, left: 120, style: specieText, string: "Brown Cichlid" }),
		Label($, {top: 230, left: 120, style: dateText, string: "since December 2015" }),
		
		new Content({ 
 
		Label($, {top: 305, left: 120, style: specieText, string: "Blue GloFish" }),
		Label($, {top: 320, left: 120, style: dateText, string: "since May 2015" }),
		
		new Content({ 
 
		Label($, {top: 395, left: 120, style: specieText, string: "Tan Nerite Snail" }),
		Label($, {top: 410, left: 120, style: dateText, string: "since May 2015" }),
		
		new Content({ 
		new Content({ 
		
		
		 	behavior: Behavior({
					currentScreen = new dashboardContainer();
					application.add(currentScreen);
    	
		 	behavior: Behavior({
					currentScreen = new controlsContainer();
					application.add(currentScreen);
		

let fishListAddedContainer = Container.template($ => ({

			active: true,
			behavior: Behavior({
					currentScreen = new addFishContainer();
					application.add(currentScreen);
		
 
			active: true,
			behavior: Behavior({
					currentScreen = new fishProfileCheckContainer();
					application.add(currentScreen);
 
 
 
 
 
 
		Label($, {top: 125, left: 120, style: specieText, string: "Pink Platy" }),
		Label($, {top: 140, left: 120, style: dateText, string: "since November 2016" }),
		
		new Content({ 
 
		Label($, {top: 220, left: 120, style: specieText, string: "Yellow Tang" }),
		Label($, {top: 235, left: 120, style: dateText, string: "since March 2016" }),
		
		new Content({ 
 
		Label($, {top: 305, left: 120, style: specieText, string: "Brown Cichlid" }),
		Label($, {top: 320, left: 120, style: dateText, string: "since December 2015" }),
		
		new Content({ 
 
		Label($, {top: 395, left: 120, style: specieText, string: "Blue GloFish" }),
		Label($, {top: 410, left: 120, style: dateText, string: "since May 2015" }),
		
		new Content({ 
 
		Label($, {top: 485, left: 120, style: specieText, string: "Tan Nerite Snail" }),
		Label($, {top: 500, left: 120, style: dateText, string: "since May 2015" }),
		
		new Content({ 
		new Content({ 
		
		
		 	behavior: Behavior({
					currentScreen = new dashboardContainer();
					application.add(currentScreen);
    	
		 	behavior: Behavior({
					currentScreen = new controlsContainer();
					application.add(currentScreen);
		

let fishListAddedConfirmationContainer = Container.template($ => ({

		
 
 
 
 
 
 
 
		Label($, {top: 125, left: 120, style: specieText, string: "Pink Platy" }),
		Label($, {top: 140, left: 120, style: dateText, string: "since November 2016" }),
		
		new Content({ 
 
		Label($, {top: 220, left: 120, style: specieText, string: "Yellow Tang" }),
		Label($, {top: 235, left: 120, style: dateText, string: "since March 2016" }),
		
		new Content({ 
 
		Label($, {top: 305, left: 120, style: specieText, string: "Brown Cichlid" }),
		Label($, {top: 320, left: 120, style: dateText, string: "since December 2015" }),
		
		new Content({ 
 
		Label($, {top: 395, left: 120, style: specieText, string: "Blue GloFish" }),
		Label($, {top: 410, left: 120, style: dateText, string: "since May 2015" }),
		
		new Content({ 
 
		Label($, {top: 485, left: 120, style: specieText, string: "Tan Nerite Snail" }),
		Label($, {top: 500, left: 120, style: dateText, string: "since May 2015" }),
		
		new Content({ 
		new Content({ 
		
		
		 	behavior: Behavior({
					currentScreen = new dashboardContainer();
					application.add(currentScreen);
    	
		 	behavior: Behavior({
					currentScreen = new controlsContainer();
					application.add(currentScreen);
		

let fishListAddedBlurConfirmationContainer = Container.template($ => ({

		
 
 
 
 
 
 
 
		Label($, {top: 125, left: 120, style: specieText, string: "Pink Platy" }),
		Label($, {top: 140, left: 120, style: dateText, string: "since November 2016" }),
		
		new Content({ 
 
		Label($, {top: 220, left: 120, style: specieText, string: "Yellow Tang" }),
		Label($, {top: 235, left: 120, style: dateText, string: "since March 2016" }),
		
		new Content({ 
 
		Label($, {top: 305, left: 120, style: specieText, string: "Brown Cichlid" }),
		Label($, {top: 320, left: 120, style: dateText, string: "since December 2015" }),
		
		new Content({ 
 
		Label($, {top: 395, left: 120, style: specieText, string: "Blue GloFish" }),
		Label($, {top: 410, left: 120, style: dateText, string: "since May 2015" }),
		
		new Content({ 
 
		Label($, {top: 485, left: 120, style: specieText, string: "Tan Nerite Snail" }),
		Label($, {top: 500, left: 120, style: dateText, string: "since May 2015" }),
		
		new Content({ 
		new Content({ 
		
		
		 	behavior: Behavior({
					currentScreen = new dashboardContainer();
					application.add(currentScreen);
    	
		 	behavior: Behavior({
					currentScreen = new controlsContainer();
					application.add(currentScreen);
		

let fishProfileContainer = Container.template($ => ({

		 	behavior: Behavior({
					currentScreen = new fishListContainer();
					application.add(currentScreen);
		Label($, {top: 25, right: 20, style: doneButton, string: "Edit" }),
		
		
 
 		Label($, {top: 185, left: 65, style: nameFishText, string: "BUBBLES" }),
		Label($, {top: 200, left: 65, style: specieText, string: "Yellow Tang" }),
		Label($, {top: 215, left: 60, style: dateText, string: "since March 2016" }),


		Label($, {top: 140, left: 165, style: notesText, string: "Likes  to eat Tropical Flakes." }),
		Label($, {top: 155, left: 165, style: notesText, string: "Often hides inside castle." }),
		Label($, {top: 185, left: 165, style: notesText, string: "My favorite fish." }),
		
		new Content({ 
		new Content({ 
		
		
		 	behavior: Behavior({
					currentScreen = new dashboardContainer();
					application.add(currentScreen);
    	
		 	behavior: Behavior({
					currentScreen = new controlsContainer();
					application.add(currentScreen);
		

let fishProfileCheckContainer = Container.template($ => ({

		Label($, {top: 25, right: 20, style: doneButton, string: "Edit" }),
		
 
 		Label($, {top: 185, left: 65, style: nameFishText, string: "BUBBLES" }),
		Label($, {top: 200, left: 65, style: specieText, string: "Yellow Tang" }),
		Label($, {top: 215, left: 60, style: dateText, string: "since March 2016" }),


		Label($, {top: 140, left: 165, style: notesText, string: "Likes  to eat Tropical Flakes." }),
		Label($, {top: 155, left: 165, style: notesText, string: "Often hides inside castle." }),
		Label($, {top: 185, left: 165, style: notesText, string: "My favorite fish." }),
		
		
		
		
		
		new Content({ 
 
		
		new Content({ 
		 	behavior: Behavior({
					currentScreen = new fishProfileSymptomsContainer();
					application.add(currentScreen);
		

		new Content({ 
		 	behavior: Behavior({
					currentScreen = new fishProfileContainer();
					application.add(currentScreen);
		Label($, {top: 285,  style: alertText, string: "ALERT" }),
		Label($, {top: 310, style: commentText, string: "Bubbles may be sick!" }),
		Label($, {top: 350, left: 60, style: specieText, string: "Last movement was detected 2 hours ago." }),
		Label($, {top: 375, left: 60, style: specieText, string: "Last feeding was 10 hours ago." }),
		

		new Content({ 
 
		

		new Content({ 
		new Content({ 
		
		
		 	behavior: Behavior({
					currentScreen = new dashboardContainer();
					application.add(currentScreen);
    	
		 	behavior: Behavior({
					currentScreen = new controlsContainer();
					application.add(currentScreen);
		

var radio1 = new Content({ 
	active: true,
 	behavior: Behavior({
			if (container.skin == radioClicked){
			}
			else{
				container.skin = radioClicked;
			}
 
	active: true,
 	behavior: Behavior({
			if (container.skin == radioClicked){
			}
			else{
				container.skin = radioClicked;
			}
 
	active: true,
 	behavior: Behavior({
			if (container.skin == radioClicked){
			}
			else{
				container.skin = radioClicked;
			}
 
var radio4 = new Content({ 
	active: true,
 	behavior: Behavior({
			if (container.skin == radioClicked){
			}
			else{
				container.skin = radioClicked;
			}

let fishProfileSymptomsContainer = Container.template($ => ({

					radio1 = new Content({ 
						active: true,
					 	behavior: Behavior({
								if (container.skin == radioClicked){
								}
								else{
									container.skin = radioClicked;
								}
					 
						active: true,
					 	behavior: Behavior({
								if (container.skin == radioClicked){
								}
								else{
									container.skin = radioClicked;
								}
					 
						active: true,
					 	behavior: Behavior({
								if (container.skin == radioClicked){
								}
								else{
									container.skin = radioClicked;
								}
					 
					radio4 = new Content({ 
						active: true,
					 	behavior: Behavior({
								if (container.skin == radioClicked){
								}
								else{
									container.skin = radioClicked;
								}
		Label($, {top: 25, right: 20, style: doneButton, string: "Edit" }),
		
 
 		Label($, {top: 185, left: 65, style: nameFishText, string: "BUBBLES" }),
		Label($, {top: 200, left: 65, style: specieText, string: "Yellow Tang" }),
		Label($, {top: 215, left: 60, style: dateText, string: "since March 2016" }),


		Label($, {top: 140, left: 165, style: notesText, string: "Likes  to eat Tropical Flakes." }),
		Label($, {top: 155, left: 165, style: notesText, string: "Often hides inside castle." }),
		Label($, {top: 185, left: 165, style: notesText, string: "My favorite fish." }),
		
		
		
		
		
		new Content({ 
 		
		new Content({ 
		 	behavior: Behavior({
					currentScreen = new fishProfileDiagnosisContainer();
					application.add(currentScreen);
					
					radio1 = new Content({ 
						active: true,
					 	behavior: Behavior({
								if (container.skin == radioClicked){
								}
								else{
									container.skin = radioClicked;
								}
					 
						active: true,
					 	behavior: Behavior({
								if (container.skin == radioClicked){
								}
								else{
									container.skin = radioClicked;
								}
					 
						active: true,
					 	behavior: Behavior({
								if (container.skin == radioClicked){
								}
								else{
									container.skin = radioClicked;
								}
					 
					radio4 = new Content({ 
						active: true,
					 	behavior: Behavior({
								if (container.skin == radioClicked){
								}
								else{
									container.skin = radioClicked;
								}
		
		new Content({ 
		 	behavior: Behavior({
					currentScreen = new fishProfileContainer();
					application.add(currentScreen);

					radio1 = new Content({ 
						active: true,
					 	behavior: Behavior({
								if (container.skin == radioClicked){
								}
								else{
									container.skin = radioClicked;
								}
					 
						active: true,
					 	behavior: Behavior({
								if (container.skin == radioClicked){
								}
								else{
									container.skin = radioClicked;
								}
					 
						active: true,
					 	behavior: Behavior({
								if (container.skin == radioClicked){
								}
								else{
									container.skin = radioClicked;
								}
					 
					radio4 = new Content({ 
						active: true,
					 	behavior: Behavior({
								if (container.skin == radioClicked){
								}
								else{
									container.skin = radioClicked;
								}
 		Label($, {top: 285,  style: alertText, string: "SYMPTOMS" }),
		Label($, {top: 310, left: 60, style: specieText, string: "Fish has white skin" }),
		Label($, {top: 335, left: 60, style: specieText, string: "Fish has blurry eyes" }),
		Label($, {top: 360, left: 60, style: specieText, string: "Fish is swimming upside down" }),
		Label($, {top: 385, left: 60, style: specieText, string: "Fish has broken fin" }),


		radio1,
		radio2,
		radio3,
		radio4,
		

		new Content({ 
		new Content({ 
		
		
		 	behavior: Behavior({
					currentScreen = new dashboardContainer();
					application.add(currentScreen);

					radio1 = new Content({ 
						active: true,
					 	behavior: Behavior({
								if (container.skin == radioClicked){
								}
								else{
									container.skin = radioClicked;
								}
					 
						active: true,
					 	behavior: Behavior({
								if (container.skin == radioClicked){
								}
								else{
									container.skin = radioClicked;
								}
					 
						active: true,
					 	behavior: Behavior({
								if (container.skin == radioClicked){
								}
								else{
									container.skin = radioClicked;
								}
					 
					radio4 = new Content({ 
						active: true,
					 	behavior: Behavior({
								if (container.skin == radioClicked){
								}
								else{
									container.skin = radioClicked;
								}
    	
		 	behavior: Behavior({
					currentScreen = new controlsContainer();
					application.add(currentScreen);

					radio1 = new Content({ 
						active: true,
					 	behavior: Behavior({
								if (container.skin == radioClicked){
								}
								else{
									container.skin = radioClicked;
								}
					 
						active: true,
					 	behavior: Behavior({
								if (container.skin == radioClicked){
								}
								else{
									container.skin = radioClicked;
								}
					 
						active: true,
					 	behavior: Behavior({
								if (container.skin == radioClicked){
								}
								else{
									container.skin = radioClicked;
								}
					 
					radio4 = new Content({ 
						active: true,
					 	behavior: Behavior({
								if (container.skin == radioClicked){
								}
								else{
									container.skin = radioClicked;
								}
		

let fishProfileDiagnosisContainer = Container.template($ => ({

		
		Label($, {top: 25, right: 20, style: doneButton, string: "Edit" }),
		
 
 		Label($, {top: 185, left: 65, style: nameFishText, string: "BUBBLES" }),
		Label($, {top: 200, left: 65, style: specieText, string: "Yellow Tang" }),
		Label($, {top: 215, left: 60, style: dateText, string: "since March 2016" }),


		Label($, {top: 140, left: 165, style: notesText, string: "Likes  to eat Tropical Flakes." }),
		Label($, {top: 155, left: 165, style: notesText, string: "Often hides inside castle." }),
		Label($, {top: 185, left: 165, style: notesText, string: "My favorite fish." }),
		
		
		
		
		
		new Content({ 
		

		new Content({ 
		 	behavior: Behavior({
					currentScreen = new fishProfileOkGotItContainer();
					application.add(currentScreen);

 

		new Content({ 
		 	behavior: Behavior({
					currentScreen = new fishProfileContainer();
					application.add(currentScreen);
 		Label($, {top: 285,  style: alertText, string: "DIAGNOSIS" }),

 		
		Label($, {top: 310, style: textCard, string: "There are too many fish in your" }),
		Label($, {top: 335, style: textCard, string: "aquarium and your fish has developed" }),
		Label($, {top: 360, style: textCard, string: "a bacterial disease called: Aeromonas" }),
		Label($, {top: 385, style: textCard, string: "hydrophila." }),
		

		new Content({ 
		new Content({ 
		
		
		 	behavior: Behavior({
					currentScreen = new dashboardContainer();
					application.add(currentScreen);
    	
		 	behavior: Behavior({
					currentScreen = new controlsContainer();
					application.add(currentScreen);
		

let fishProfileOkGotItContainer = Container.template($ => ({

		
		Label($, {top: 25, right: 20, style: doneButton, string: "Edit" }),
		
 
 		Label($, {top: 185, left: 65, style: nameFishText, string: "BUBBLES" }),
		Label($, {top: 200, left: 65, style: specieText, string: "Yellow Tang" }),
		Label($, {top: 215, left: 60, style: dateText, string: "since March 2016" }),


		Label($, {top: 140, left: 165, style: notesText, string: "Likes  to eat Tropical Flakes." }),
		Label($, {top: 155, left: 165, style: notesText, string: "Often hides inside castle." }),
		Label($, {top: 185, left: 165, style: notesText, string: "My favorite fish." }),
		
		
		
		
		
		new Content({ 
 
		new Content({ 
		 	behavior: Behavior({
					currentScreen = new fishProfileContainer();
					application.add(currentScreen);
		
 

		new Content({ 
		 	behavior: Behavior({
					currentScreen = new fishProfileContainer();
					application.add(currentScreen);
 		Label($, {top: 285,  style: alertText, string: "DIAGNOSIS" }),

 		
		Label($, {top: 335, style: textCard, string: "Consider removing a fish from your" }),
		Label($, {top: 360, style: textCard, string: "aquarium to reduce crowdedness." }),
		new Content({ 
		new Content({ 
		
		
		 	behavior: Behavior({
					currentScreen = new dashboardContainer();
					application.add(currentScreen);
    	
		 	behavior: Behavior({
					currentScreen = new controlsContainer();
					application.add(currentScreen);
		

let addFishContainer = Container.template($ => ({

		
		new Content({ 
		 	behavior: Behavior({
					currentScreen = new fishListContainer();
					application.add(currentScreen);
 
		Label($, {top: 30, right: 10, style: doneButton, string: "Done",
		 	behavior: Behavior({
					currentScreen = new fishListAddedConfirmationContainer();
					application.add(currentScreen);
		
		 	behavior: Behavior({
					currentScreen = new addFilledFishContainer();
					application.add(currentScreen);
 
 	

let addFilledFishContainer = Container.template($ => ({

		
		new Content({ 
		 	behavior: Behavior({
					currentScreen = new fishListContainer();
					application.add(currentScreen);
 
		Label($, {top: 30, right: 10, style: doneButton, string: "Done",
		 	behavior: Behavior({
					currentScreen = new fishListAddedContainer();
					application.add(currentScreen);
		
 
 	

var currentScreen = new launchScreenContainer();

//var currentScreen = new addFishContainer();
application.add(currentScreen);
