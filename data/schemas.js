// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
const schemas = [
    { "name": "Latest (3.2)", "directory": "data/files", "isDefault": true },
    {
        "name": "3.1",
        "directory": "data/old/3.1",
        "availableFiles": [
            "actinfo","armor","armtype","automagic","automap","belts","bodylocs","books",
            "charstats","colors","compcode","composit","cubemain","desecratedzones",
            "difficultylevels","elemtypes","enums","events","experience","gamble","gems",
            "hireling","hirelingdesc","hitclass","inventory","itemratio","itemstatcost",
            "itemtypes","itemuicategories","levelgroups","levels","lowqualityitems","lvlmaze",
            "lvlprest","lvlsub","lvltypes","lvlwarp","magicprefix","magicsuffix","misc",
            "misscalc","missiles","monai","monequip","monlvl","monmode","monpet","monplace",
            "monpreset","monprop","monseq","monsounds","monstats","monstats2","montype",
            "monumod","npc","objects","objgroup","objmode","objpreset","overlay","pettype",
            "playerclass","plrmode","plrtype","properties","propertygroups","qualityitems",
            "rareprefix","raresuffix","runes","runeworduicategories","setitems","sets",
            "shrines","skillcalc","skilldesc","skills","soundenviron","sounds","states",
            "storepage","superuniques","treasureclassex","uniqueappellation","uniqueitems",
            "uniqueprefix","uniquesuffix","wanderingmon","weapons"
        ]
    },
    {
        "name": "2.4",
        "directory": "data/old/2.4",
        "availableFiles": [
            "actinfo","armor","automagic","automap","belts","books","charstats","cubemain",
            "difficultylevels","elemtypes","enums","experience","gamble","gems","hireling",
            "hirelingdesc","inventory","itemratio","itemstatcost","itemtypes","levelgroups",
            "levels","lvlmaze","lvlprest","lvlsub","lvltypes","lvlwarp","magicprefix","misc",
            "missiles","monequip","monlvl","monpreset","monprop","monseq","monsounds",
            "monstats","monstats2","montype","monumod","npc","objects","objgroup","objpreset",
            "overlay","pettype","playerclass","properties","qualityitems","rareprefix",
            "raresuffix","runes","setitems","sets","shrines","skilldesc","skills","soundenviron",
            "sounds","states","superuniques","treasureclassex","uniqueappellation","uniqueitems",
            "uniqueprefix","uniquesuffix","wanderingmon","weapons"
        ]
    },
    {
        "name": "Legacy (1.13)",
        "directory": "data/old/1.13",
        "availableFiles": [
            "armor","automagic","automap","belts","books","charstats","cubemain",
            "difficultylevels","elemtypes","enums","experience","gamble","gems","hireling",
            "hirelingdesc","inventory","itemratio","itemstatcost","itemtypes","levels","lvlmaze",
            "lvlprest","lvlsub","lvltypes","lvlwarp","magicprefix","misc","missiles","monequip",
            "monlvl","monpreset","monprop","monseq","monsounds","monstats","monstats2","montype",
            "monumod","npc","objects","objgroup","objpreset","overlay","pettype","playerclass",
            "properties","qualityitems","rareprefix","raresuffix","runes","setitems","sets",
            "shrines","skilldesc","skills","soundenviron","sounds","states","superuniques",
            "treasureclassex","uniqueappellation","uniqueitems","uniqueprefix","uniquesuffix",
            "weapons"
        ]
    }
];
