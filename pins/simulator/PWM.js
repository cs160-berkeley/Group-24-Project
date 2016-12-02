//@module
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
 let PinsSimulators = require('PinsSimulators');

exports.configure = function(configuration) {
    this.pinsSimulator = shell.delegate("addSimulatorPart", {
        header: { 
            label: "PWM", 
            name: "Analog Output", 
            iconVariant: PinsSimulators.SENSOR_GAUGE
        },
        axes: [
            new PinsSimulators.AnalogOutputAxisDescription(
                {
                    valueLabel: "Value",
                    valueID: "v"
                },
            )
        ]
    });
}

exports.close = function() {
    shell.delegate("removeSimulatorPart", this.pinsSimulator);
}

exports.write = function(value) {
	this.pinsSimulator.delegate("setValue", "v", value);
}

exports.pins = {
    pwm: { type: "PWM"},
};
