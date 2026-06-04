// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["gems"] = {
    "title": "gems.txt",
    "overview": "This file controls the item modifiers of Gems and runes for each item type<br>This file is used by the following files: Weapons.txt, Armor.txt, Misc.txt",
    "fields": [
        {
            "name": "name",
            "description": "This is a reference field to define the gem/rune name",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "letter",
            "description": "Defines the string that is concatenated together in the item tooltip when a rune is socketed into an item",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "transform",
            "description": "Controls the color change of the item after being socketed by the gem/rune. Referenced from the Index value in colors.txt",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "code",
            "description": "Defines the unique item code used to create the gem/rune",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 32,
                "file": "misc",
                "field": "code"
            }
        },
        {
            "name": "Mod#Code",
            "description": "Controls the item properties that the gem/rune provides when socketed into an item with a \"gemapplytype\" value that equals 0 (Uses the Code field from Properties.txt)",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "References a $!properties#code!$"
            },
            "altNames": [
                "weaponMod1Code",
                "weaponMod2Code",
                "weaponMod3Code",
                "helmMod1Code",
                "helmMod2Code",
                "helmMod3Code",
                "shieldMod1Code",
                "shieldMod2Code",
                "shieldMod3Code"
            ]
        },
        {
            "name": "Mod#Param",
            "description": "The stat's \"parameter\" value associated with the listed property (weaponMod1Code). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "A number or references $!skills#skill!$, $!montype#type!$, or $!states#state!$"
            },
            "altNames": [
                "weaponMod1Param",
                "weaponMod2Param",
                "weaponMod3Param",
                "helmMod1Param",
                "helmMod2Param",
                "helmMod3Param",
                "shieldMod1Param",
                "shieldMod2Param",
                "shieldMod3Param"
            ]
        },
        {
            "name": "Mod#Min",
            "description": "The stat's \"min\" value associated with the listed property (weaponMod1Code). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "weaponMod1Min",
                "weaponMod2Min",
                "weaponMod3Min",
                "helmMod1Min",
                "helmMod2Min",
                "helmMod3Min",
                "shieldMod1Min",
                "shieldMod2Min",
                "shieldMod3Min"
            ]
        },
        {
            "name": "Mod#Max",
            "description": "The stat's \"max\" value to assign to the listed property (weaponMod1Code). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "weaponMod1Max",
                "weaponMod2Max",
                "weaponMod3Max",
                "helmMod1Max",
                "helmMod2Max",
                "helmMod3Max",
                "shieldMod1Max",
                "shieldMod2Max",
                "shieldMod3Max"
            ]
        }
    ]
};
