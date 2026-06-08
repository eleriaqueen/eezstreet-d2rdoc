// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["soundenviron"] = {
    "title": "SoundEnviron.txt",
    "overview": "This file controls the music and ambient sounds that are played while the player is in the area level<br>The order of each Sound Environment defined in this file will convey what ID value it has<br>This file points to a Sound entry from Sounds.txt for all it's entries<br>This file is used by Levels.txt",
    "fields": [
        {
            "name": "Handle",
            "description": "A reference field to define the name of the Sound Environment",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Index",
            "description": "A reference field to define the ID/Index for the Environment",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Song",
            "description": "Play this sound as the background music while the player is in an area level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Day Ambience",
            "description": "Play this sound as an ambient sound while it is currently daytime in the game",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Night Ambience",
            "description": "Play this sound as an ambient sound while it is currently nighttime in the game",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Day Event",
            "description": "Play this sound at a random range and variance in the background when it is currently daytime in the game",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Night Event",
            "description": "Play this sound at a random range and variance in the background when it is currently nighttime in the game",
            "type": {
                "type": "reference",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Event Delay",
            "description": "Controls the baseline number of frames to wait before playing the Day Event or Night Event sound, depending on the time of day. This only applies when the game is being played in SD mode. This value is used in the following calculation to get a random time to play the next event sound: [Event Delay] - [Event Delay] / 3 + RANDOM(0, ([Event Delay] / 3 * 2 + 1))",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Indoors",
            "description": "If equals 1 then, if the current sound being played in the area level with this Sound Environment is \"event_thunder_1\", then the sound will be obstructed. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Material #",
            "description": "Controls the material of the Sound Environment, which affects which footstep sounds are played. Uses a code to define a specific material.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "Material 1",
                "Material 2"
            ]
        }
    ]
};
