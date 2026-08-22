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
            "difficultylevels","ElemTypes","enums","events","experience","gamble","gems",
            "hireling","hirelingdesc","HitClass","inventory","itemratio","itemstatcost",
            "itemtypes","ItemUICategories","levelgroups","levels","lowqualityitems","lvlmaze",
            "lvlprest","lvlsub","lvltypes","lvlwarp","magicprefix","MagicSuffix","misc",
            "misscalc","missiles","monai","monequip","monlvl","MonMode","monpet","monplace",
            "monpreset","MonProp","monseq","monsounds","monstats","monstats2","montype",
            "monumod","npc","objects","objgroup","ObjMode","objpreset","overlay","pettype",
            "PlayerClass","PlrMode","plrtype","properties","propertygroups","qualityitems",
            "rareprefix","raresuffix","runes","RunewordUICategories","setitems","sets",
            "shrines","skillcalc","skilldesc","skills","soundenviron","sounds","states",
            "StorePage","superuniques","treasureclassex","uniqueappellation","uniqueitems",
            "uniqueprefix","uniquesuffix","wanderingmon","weapons"
        ]
    },
    {
        "name": "2.4",
        "directory": "data/old/2.4",
        "availableFiles": [
            "actinfo","armor","automagic","automap","belts","books","charstats","cubemain",
            "difficultylevels","ElemTypes","enums","experience","gamble","gems","hireling",
            "hirelingdesc","inventory","itemratio","itemstatcost","itemtypes","levelgroups",
            "levels","lvlmaze","lvlprest","lvlsub","lvltypes","lvlwarp","magicprefix","MagicSuffix","misc",
            "missiles","monequip","monlvl","monpreset","MonProp","monseq","monsounds",
            "monstats","monstats2","montype","monumod","npc","objects","objgroup","objpreset",
            "overlay","pettype","PlayerClass","properties","qualityitems","rareprefix",
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
            "difficultylevels","ElemTypes","enums","experience","gamble","gems","hireling",
            "hirelingdesc","inventory","itemratio","itemstatcost","itemtypes","levels","lvlmaze",
            "lvlprest","lvlsub","lvltypes","lvlwarp","magicprefix","MagicSuffix","misc","missiles","monequip",
            "monlvl","monpreset","MonProp","monseq","monsounds","monstats","monstats2","montype",
            "monumod","npc","objects","objgroup","objpreset","overlay","pettype","PlayerClass",
            "properties","qualityitems","rareprefix","raresuffix","runes","setitems","sets",
            "shrines","skilldesc","skills","soundenviron","sounds","states","superuniques",
            "treasureclassex","uniqueappellation","uniqueitems","uniqueprefix","uniquesuffix",
            "weapons"
        ]
    }
];
