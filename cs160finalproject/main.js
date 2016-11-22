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
trace("Hello, World!\n");
let backgroundSkin = new Skin({ fill : ["#FFFFFF", "#7DBF2E"] });
let textStyleTemp = new Style({ font: "24px Roboto", color: "black" });

let dashboardContainer = Container.template($ => ({    top: 0, bottom: 0, left: 0, right: 0,    active: true, skin: backgroundSkin, state: 0,    contents: [            Label($, {top: 140, left: 170, style: textStyleTemp, string: "7" }),              ]}));


var currentScreen = new dashboardContainer();
application.add(currentScreen);

