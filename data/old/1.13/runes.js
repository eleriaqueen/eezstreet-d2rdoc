// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["runes"] = {
    "title": "Runes.txt",
    "overview": "This file controls the creation of Rune Words and their various modifiers.",
    "fields": [
        {
            "name": "Name",
            "description": "Controls the string key that is used to the display the name of the item when the Rune Word is complete",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "complete",
            "description": "If equals 1, then the Rune Word can be crafted in-game. If equals 0, then the Rune Word cannot be crafted in-game",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "server",
            "description": "If equals 1, then the Rune Word can only be crafted on Ladder realm games. If equals 0, then the Rune Word can be crafted in all game types",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "itype#",
            "description": "Controls what item types are allowed for this Rune Word (Uses the Code field from ItemTypes.txt)",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 16,
                "file": "itemtypes",
                "field": "Code"
            },
            "altNames": [
                "itype1",
                "itype2",
                "itype3",
                "itype4",
                "itype5",
                "itype6"
            ]
        },
        {
            "name": "etype#",
            "description": "Controls what item types are excluded for this Rune Word (Uses the Code field from ItemTypes.txt)",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 16,
                "file": "itemtypes",
                "field": "Code"
            },
            "altNames": [
                "etype1",
                "etype2",
                "etype3"
            ]
        },
        {
            "name": "Rune#",
            "description": "Controls what runes are required to make the Rune Word. The order of each of these fields matters. (Uses the Code field from Misc.txt)",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 32,
                "file": "misc",
                "field": "code"
            },
            "altNames": [
                "Rune1",
                "Rune2",
                "Rune3",
                "Rune4",
                "Rune5",
                "Rune6"
            ]
        },
        {
            "name": "T1Code#",
            "description": "Controls the item properties that the Rune Word provides (Uses the Code field from Properties.txt)",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Reference of $!properties#code!$"
            },
            "altNames": [
                "T1Code1",
                "T1Code2",
                "T1Code3",
                "T1Code4",
                "T1Code5",
                "T1Code6",
                "T1Code7"
            ]
        },
        {
            "name": "T1Param#",
            "description": "The stat's \"parameter\" value associated with the related property (T1Code1). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "A number or references $!skills#skill!$, $!montype#type!$, or $!states#state!$"
            },
            "altNames": [
                "T1Param1",
                "T1Param2",
                "T1Param3",
                "T1Param4",
                "T1Param5",
                "T1Param6",
                "T1Param7"
            ]
        },
        {
            "name": "T1Min#",
            "description": "The stat's \"min\" value to assign to the related property (T1Code1). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "T1Min1",
                "T1Min2",
                "T1Min3",
                "T1Min4",
                "T1Min5",
                "T1Min6",
                "T1Min7"
            ]
        },
        {
            "name": "T1Max#",
            "description": "The stat's \"max\" value to assign to the related property (T1Code1). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "T1Max1",
                "T1Max2",
                "T1Max3",
                "T1Max4",
                "T1Max5",
                "T1Max6",
                "T1Max7"
            ]
        }
    ]
};
