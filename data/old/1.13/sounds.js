// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["sounds"] = {
    "title": "sounds.txt",
    "overview": "Thisfile controls settings for all sounds in the game<br>The order of each sound defined in this file will convey what ID value it has. This existing order should not be changed.",
    "fields": [
        {
            "name": "Sound",
            "description": "Defines the unique name ID for the sound, which is how other files can reference the sound",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "FileName",
            "description": "Defines the file path and name of the sound file to play",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Group Size",
            "description": "Defines a sound Group by declaring a size value. When the sound has this value greater than 0, then this sound is declared as the group's base sound. Any link to use a sound should use the base sound, to signify that the game should use this group of sounds. This field's value controls the number of sounds indexed after base sound that should be added to the group. For example, if the sound has a \"Group Size\" value equal to 5, then this sound is declared as the group's base sound, and the next 4 sounds indexed after this base sound will be added to the group",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Loop",
            "description": "If equals 1, then the sound will replay itself after it finishes playing. If equals 0, then the sound will only play once",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Fade In",
            "description": "Controls how long to gradually increase the sound's volume starting from 0 when the sound starts playing. Measured in audio game ticks, where 1 game frame is 40 audio ticks, and the game runs at 25 frames per second",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Fade Out",
            "description": "Controls how long to gradually decrease the sound's volume to 0 when the sound stops playing. Measured in audio game ticks, where 1 game frame is 40 audio ticks, and the game runs at 25 frames per second",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Defer Inst",
            "description": "If equals 1, then when a duplicate instance of this sound plays the game will stop that request. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Stop Inst",
            "description": "If equals 1, then when a duplicate instance of this sound plays the previous instance of the sound will stop and the new instance of the sound will play. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Duration",
            "description": "Controls the length of time to play the sound. When the sound has been playing for this length of time, then the sound will stop. If this equals 0, then ignore this functionality",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Compound",
            "description": "Controls the game tick time limit for when a sound can join in playing based on the previous sound played in the Group. If equals 0, then the sound will not be compounded",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Falloff",
            "description": "Defines the range of falloff for hearing the sound, based on distance. Uses a code to determine the range value presets.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "Short - falloff range is 60 to 400 pixels"
                ],
                [
                    "1",
                    "Medium - falloff range is 60 to 700 pixels"
                ],
                [
                    "2",
                    "Large - falloff range is 200 to 1000 pixels"
                ],
                [
                    "3",
                    "Ambient - falloff range is 400 to 1500 pixels"
                ],
                [
                    "4",
                    "Voice - falloff range is 2000 pixels (no falloff)"
                ]
            ]
        },
        {
            "name": "Priority",
            "description": "Controls which if the sound should play before other sounds when too many sounds are playing at once. This value is compared to the priority value of other sounds, and the sound that has the higher priority will play first. Sounds belonging to the player will get an increased priority value of 80",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Stream",
            "description": "If equals 1, then the sound will be file streamed into the game when called to play. If equals 0, then the entire sound will be loaded into the game before playing",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Tracking",
            "description": "If equals 1, then the sound will track a unit and will update its position to follow that unit. If equals 0, then the sound will not move and will be stationary",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Solo",
            "description": "If equals 1, then reduce the volume of other sounds while this sound is playing. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Music Vol",
            "description": "If equals 1, then the sound's volume will be affected by the music volume in the game options menu. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Block #",
            "description": "Defines an offset time value in the sound. If this sound is used in a Sound Environment then these fields control when to periodically update the current song sound to an offset. If this sound is not used in a Sound Environment and Block 1 is used and the Loop field is enabled, then use this block value as the time in the sound when to start looping. If this equals -1, then the field is ignored",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "Block 1",
                "Block 2",
                "Block 3"
            ]
        }
    ]
};
