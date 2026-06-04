// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["uniqueitems"] = {
    "title": "UniqueItems.txt",
    "overview": "This file defines each Unique item and controls their item modifiers.<br>The row order of items should not be changed because it defines their ID value.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "index",
            "description": "Points to a string key value to use as the Unique item's name",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "version",
            "description": "Defines which game version to create this item (0 = Classic mode | 100 = Expansion mode)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "enabled",
            "description": "If equals 1, then this item can be created and dropped. If equals 0, then this item cannot be dropped",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ladder",
            "description": "If equals 1, then this item can only be created and dropped in online Battle.net Ladder games. If equals 0, then this item can be created and dropped in any game mode",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rarity",
            "description": "Modifies the chances that this Unique item will spawn compared to the other Unique items. This value acts as a numerator and a denominator. Each \"rarity\" value gets summed together to give a total denominator, used for the random roll for the item. For example, if there are 3 possible Unique items, and their \"rarity\" values are 3, 5, 7, then their chances to be chosen are 3/15, 5/15, and 7/15 respectively. (The minimum \"rarity\" value equals 1) (Only works for games in Expansion mode)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "nolimit",
            "description": "Requires the quest field from AMW.txt to be enabled. If equals 1, then this item can be created and will automatically be identified. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "lvl",
            "description": "The item level for the item, which controls what object or monster needs to be in order to drop this item",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "code",
            "description": "Defines the baseline item code to use for this Unique item (must match the code field from AMW.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "carry1",
            "description": "If equals 1, then players can only carry one of these items in their inventory. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "cost mult",
            "description": "Multiplicative modifier for the Unique item's buy, sell, and repair costs",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "cost add",
            "description": "Flat integer modification to the Unique item's buy, sell, and repair costs. This is added after the cost mult has modified the costs",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "chrtransform",
            "description": "Controls the color change of the item when equipped on a character or dropped on the ground. If empty, then the item will have the default item color. Referenced from the Code column in Colors.txt",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 8,
                "file": "colors",
                "field": "Code"
            }
        },
        {
            "name": "invtransform",
            "description": "Controls the color change of the item in the inventory UI. If empty, then the item will have the default item color. Referenced from the Code column in Colors.txt",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 8,
                "file": "colors",
                "field": "Code"
            }
        },
        {
            "name": "invfile",
            "description": "An override for the invfile field from AMW.txt. By default, the Unique item will use what was defined by the baseline item from the \"item\" field",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "flippyfile",
            "description": "An override for the \"flippyfile\" field from the weapon.txt, Armor.txt, or Misc.txt files. By default, the Unique item will use what was defined by the baseline item from the \"item\" field",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "dropsound",
            "description": "An override for the \"dropsound\" field from the weapon.txt, Armor.txt, or Misc.txt files. By default, the Unique item will use what was defined by the baseline item from the \"item\" field",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "dropsfxframe",
            "description": "An override for the \"dropsfxframe\" field from the weapon.txt, Armor.txt, or Misc.txt files. By default, the Unique item will use what was defined by the baseline item from the \"item\" field",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "usesound",
            "description": "An override for the \"usesound\" field from the weapon.txt, Armor.txt, or Misc.txt files. By default, the Unique item will use what was defined by the baseline item from the \"item\" field",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "prop#",
            "description": "Controls the item properties for the Unique item (Uses the Code field from Properties.txt)",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "References a $!properties#code!$"
            },
            "altNames": [
                "prop1",
                "prop2",
                "prop3",
                "prop4",
                "prop5",
                "prop6",
                "prop7",
                "prop8",
                "prop9",
                "prop10",
                "prop11",
                "prop12"
            ]
        },
        {
            "name": "par#",
            "description": "The stat's \"parameter\" value associated with the related property (prop#). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "A number or references $!skills#skill!$, $!montype#type!$, or $!states#state!$"
            },
            "altNames": [
                "par1",
                "par2",
                "par3",
                "par4",
                "par5",
                "par6",
                "par7",
                "par8",
                "par9",
                "par10",
                "par11",
                "par12"
            ]
        },
        {
            "name": "min#",
            "description": "The stat's \"min\" value to assign to the related property (prop#). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "min1",
                "min2",
                "min3",
                "min4",
                "min5",
                "min6",
                "min7",
                "min8",
                "min9",
                "min10",
                "min11",
                "min12"
            ]
        },
        {
            "name": "max#",
            "description": "The stat's \"max\" value to assign to the related property (prop#). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "max1",
                "max2",
                "max3",
                "max4",
                "max5",
                "max6",
                "max7",
                "max8",
                "max9",
                "max10",
                "max11",
                "max12"
            ]
        }
    ]
};
