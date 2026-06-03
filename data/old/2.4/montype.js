// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["montype"] = {
    "title": "MonType.txt",
    "overview": "This file handles the classification, naming conventions and element of monsters<br>This is used by the monstats.txt data file",
    "fields": [
        {
            "name": "type",
            "description": "Defines the unique monster type ID",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "equiv#",
            "description": "Points to the index of another Monster Type to reference as a parent. This is used to create a hierarchy for Monster Types where the parents will have more universal settings shared across the related children",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "montype",
                "field": "type"
            },
            "altNames": [
                "equiv1",
                "equiv2",
                "equiv3"
            ]
        },
        {
            "name": "strplur",
            "description": "Uses a string for the plural form of the monster type. This is used by Function 22 of the descfunc field from ItemStatCost.txt, based on the monster type selected",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "element",
            "description": "Defines the monster's element type. This can be used for the Necromancer's Raise Skeletal Mage skill for determining what elemental type a Skeletal Mage should be based on the monster it was raised from (If the monster has no element, then the skeletal mage element will be randomly selected).",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 8,
                "file": "ElemTypes",
                "field": "Code"
            }
        }
    ]
}