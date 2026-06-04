// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["properties"] = {
    "title": "Properties.txt",
    "overview": "This file defines how item modifiers work. It takes a stat defined from ItemStatCost.txt and uses a function to handle the stat's \"min\", \"max\" and \"parameter\" values.<br>Used by the following data files: UniqueItems.txt, SetItems.txt, QualityItems.txt, Sets.txt, Runes.txt",
    "fields": [
        {
            "name": "code",
            "description": "Defines the property ID. Used as a reference in other data files",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "func#",
            "description": "Code function used to define the Property. Uses numeric ID values to define what function to use.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "func1",
                "func2",
                "func3",
                "func4",
                "func5",
                "func6",
                "func7"
            ]
        },
        {
            "name": "stat#",
            "description": "Stat applied by the property. Used by the func1 field as a possible parameter using a Stat entry from ItemStatCost.txt. A stat is comprised of a \"min\" and \"max\" value which it uses to calculate the actual numeric value. Stats also can have a \"parameter\" value, depending on its function",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "itemstatcost",
                "field": "Stat"
            },
            "altNames": [
                "stat1",
                "stat2",
                "stat3",
                "stat4",
                "stat5",
                "stat6",
                "stat7"
            ]
        },
        {
            "name": "set#",
            "description": "Used by the func1 field as a possible parameter. If equals 1, then set the stat value regardless of its current value. If equals 0, then add to the stat value",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "set1",
                "set2",
                "set3",
                "set4",
                "set5",
                "set6",
                "set7"
            ]
        },
        {
            "name": "val#",
            "description": "sed by the func1 field as a possible input parameter for additional function calculations",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "val1",
                "val2",
                "val3",
                "val4",
                "val5",
                "val6",
                "val7"
            ]
        }
    ]
};
