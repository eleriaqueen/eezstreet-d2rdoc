// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["inventory"] = {
    "title": "inventory.txt",
    "overview": "This file controls the grid sizes of the inventory slots for the game's various UI windows.<br>These values are measured in pixels on the screen.",
    "fields": [
        {
            "name": "class",
            "description": "This is a reference field to define the type of inventory screen",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "invLeft",
            "description": "Starting X coordinate pixel position of the inventory panel",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "invRight",
            "description": "Ending X coordinate pixel position of the inventory panel (Includes the \"invLeft\" value with the inventory width size)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "invTop",
            "description": "Starting Y coordinate pixel position of the inventory panel",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "invBottom",
            "description": "Ending Y coordinate pixel position of the inventory panel (Includes the \"invTop\" value with the inventory height size)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "gridX",
            "description": "Column number size of the inventory grid, measured in the number of grid boxes to use",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "gridY",
            "description": "Column row size of the inventory grid, measured in the number of grid boxes to use",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "gridLeft",
            "description": "Starting X coordinate location of the inventory's left grid side",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "gridRight",
            "description": "Ending X coordinate location of the inventory's right grid side (Includes the \"gridLeft\" value with the grid width size)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "gridTop",
            "description": "Starting Y coordinate location of the inventory's top grid side",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "gridBottom",
            "description": "Ending Y coordinate location of the inventory's bottom grid side (Includes the \"gridTop\" value with the grid height size)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "gridBoxWidth",
            "description": "Width size of an inventory's box cell",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "gridBoxHeight",
            "description": "Height size of an inventory's box cell",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Left",
            "description": "Starting X coordinate location of the Right Weapon Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "rArmLeft",
                "lArmLeft",
                "torsoLeft",
                "headLeft",
                "neckLeft",
                "rHandLeft",
                "lHandLeft",
                "beltLeft",
                "feetLeft",
                "glovesLeft"
            ]
        },
        {
            "name": "Right",
            "description": "Ending X coordinate location of the Right Weapon Slot (Includes the \"rArmLeft\" value with the \"rArmWidth\" value)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "rArmRight",
                "lArmRight",
                "torsoRight",
                "headRight",
                "neckRight",
                "rHandRight",
                "lHandRight",
                "beltRight",
                "feetRight",
                "glovesRight"
            ]
        },
        {
            "name": "Top",
            "description": "Starting Y coordinate location of the Right Weapon Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "rArmTop",
                "lArmTop",
                "torsoTop",
                "headTop",
                "neckTop",
                "rHandTop",
                "lHandTop",
                "beltTop",
                "feetTop",
                "glovesTop"
            ]
        },
        {
            "name": "Bottom",
            "description": "Ending Y coordinate location of the Right Weapon Slot (Includes the \"rArmTop\" value with the \"rArmHeight\" value)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "rArmBottom",
                "lArmBottom",
                "torsoBottom",
                "headBottom",
                "neckBottom",
                "rHandBottom",
                "lHandBottom",
                "beltBottom",
                "feetBottom",
                "glovesBottom"
            ]
        },
        {
            "name": "Width",
            "description": "The pixel width of the Right Weapon Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "rArmWidth",
                "lArmWidth",
                "torsoWidth",
                "headWidth",
                "neckWidth",
                "rHandWidth",
                "lHandWidth",
                "beltWidth",
                "feetWidth",
                "glovesWidth"
            ]
        },
        {
            "name": "Height",
            "description": "The pixel Height of the Right Weapon Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "rArmHeight",
                "lArmHeight",
                "torsoHeight",
                "headHeight",
                "neckHeight",
                "rHandHeight",
                "lHandHeight",
                "beltHeight",
                "feetHeight",
                "glovesHeight"
            ]
        }
    ]
}