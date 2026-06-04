// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["misc"] = {
    "title": "misc.txt",
    "referenceFiles": [
        "shareditems"
    ],
    "appendFiles": [
        "shareditems"
    ],
    "overview": "This file controls the functionalities for miscellaneous type items. This file is loaded together with other similar files in the following order: weapons.txt, armor.txt, misc.txt. These combined files form the items structure. Columns that typically only exist in one of the files will be listed below all of the shared column entries.",
    "fields": [
        {
            "name": "autobelt",
            "description": "If equals 1, then the item will automatically be placed is a free slot in the belt when picked up, if possible. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "bettergem",
            "description": "Links to another item's Code field. Also used by Function 18 from the Code field in Shrines.txt to specify which gem is the upgraded version",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "multibuy",
            "description": "If equals 1, then use the multi-buy transaction function when holding the shift key and buying this item from an NPC store. This multi-buy function will automatically purchase enough of the item to fill up to a full quantity stack or fill the available belt slots if the item has the autobelt field enabled. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "spellicon",
            "description": "Determines the icon asset for displaying the item's spell. This uses an ID value based on the global skillicon file. If this value equals -1, then the item's spell will not display an icon. Used as a parameter for a PSpell function",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "pspell",
            "description": "Uses the Code value to select a spell from the Player Spell Table when the item is used. This depends on the item type.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "Name",
                    "Parameters",
                    "Description"
                ],
                [
                    "0",
                    "",
                    "",
                    "Do nothing"
                ],
                [
                    "1",
                    {
                        "id": "SkillItemIdentify",
                        "text": "SkillItemIdentify"
                    },
                    "$!#spellicon!$",
                    "Sets the spell icon. Identifies an item."
                ],
                [
                    "2",
                    {
                        "id": "SkillItemTownPortal",
                        "text": "SkillItemTownPortal"
                    },
                    "",
                    "The player creates a town portal"
                ],
                [
                    "3",
                    {
                        "id": "SkillItemHealPotion",
                        "text": "SkillItemHealPotion"
                    },
                    "$!#state!$<br>$!#stat#!$<br>$!#calc#!$<br>$!#len!$",
                    "<ol><li>Applies a $!#state!$ on the player that is controlled by the $!#len!$ field</li><li>This function requires that the stat parameters be either \"hitpoints\", \"hpregen\", \"mana\", or \"manarecovery\"</li><li>Calculates a flat amount of these stats to restore to the player, based on the class and Vitality/Energy attribute for Life/Mana stats</li></ol>"
                ],
                [
                    "4",
                    {
                        "id": "SkillItemHealPotion2",
                        "text": "SkillItemHealPotion2"
                    },
                    "$!#state!$<br>$!#stat#!$<br>$!#calc#!$<br>$!#len!$",
                    "<ol><li>Applies a $!#state!$ on the player that is controlled by the $!#len!$ field</li><li>This function requires that the stat parameters be either \"hitpoints\", \"hpregen\", \"mana\", or \"manarecovery\"</li><li>Calculates a flat amount of these stats to restore to the player</li></ol>"
                ],
                [
                    "5",
                    {
                        "id": "SkillItemRejuvPotion",
                        "text": "SkillItemRejuvPotion"
                    },
                    "$!#stat#!$<br>$!#calc#!$",
                    "Adds a percentage of the stat's \"maxstat\" value (see ItemStatCost.txt) to the current stat. This percentage is determined by the related calculated value."
                ],
                [
                    "6",
                    {
                        "id": "SkillItemPotionAntidote",
                        "text": "SkillItemPotionAntidote"
                    },
                    "$!#state!$<br>$!#cstate#!$<br>$!#len!$",
                    "Clears the $!#cstate#!$ states on the user and applies the $!#state!$ state with its duration controlled by the $!#len!$ field."
                ],
                [
                    "7",
                    {
                        "id": "SkillItemTransmogrify",
                        "text": "SkillItemTransmogrify"
                    },
                    "",
                    "Opens the Horadric Cube UI"
                ],
                [
                    "8",
                    {
                        "id": "SkillItemElixir",
                        "text": "SkillItemElixir"
                    },
                    "",
                    "Get a stat from item's mod class and set it to the it's \"value\" stat"
                ],
                [
                    "9",
                    {
                        "id": "SkillItemHerb",
                        "text": "SkillItemHerb"
                    },
                    "$!#state!$<br>$!#stat#!$<br>$!#calc#!$<br>$!#len!$",
                    "<ol><li>Applies a $!#state!$ on the player that is controlled by the $!#len!$ field</li><li>Calculates a flat amount of the stats to set on the player</li><li>Has a special case where if the stat equals \"staminarecoverybonus\" then also set the current \"stamina\" stat to be equals to the \"maxstamina\" stat</li></ol>"
                ],
                [
                    "10",
                    {
                        "id": "SkillCastFireBallOnTarget",
                        "text": "SkillCastFireBallOnTarget"
                    },
                    "",
                    "Casts Fire Ball on the nearest enemy."
                ],
                [
                    "11",
                    {
                        "id": "SkillCastFireBallAtLocation",
                        "text": "SkillCastFireBallAtLocation"
                    },
                    "",
                    "Casts Fire Ball at the target position."
                ]
            ]
        },
        {
            "name": "state",
            "description": "Links to a State field defined in the States.txt file. It signifies what state will be applied to the player when the item is used. Used as a parameter for a PSpell function",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "states",
                "field": "state"
            }
        },
        {
            "name": "cstate#",
            "description": "Links to a State field defined in the States.txt file. It signifies what state will be removed from the player when the item is used. Used as a parameter for a PSpell function",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "states",
                "field": "state"
            },
            "altNames": [
                "cstate1",
                "cstate2"
            ]
        },
        {
            "name": "len",
            "description": "Calculates the frame length of a state. Used as a parameter for a PSpell function",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Item scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "stat#",
            "description": "Controls the stat modifier when the item is used (Uses the Code field from Properties.txt). Used as a parameter for a PSpell function",
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
                "stat3"
            ]
        },
        {
            "name": "calc#",
            "description": "Calculates the value of the above stat1 field. Used as a parameter for a PSpell function",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Item scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            },
            "altNames": [
                "calc1",
                "calc2",
                "calc3"
            ]
        },
        {
            "name": "spelldesc",
            "description": "Uses a code value to format and display string for the item's tooltip. 0 = Do nothing, 1 = Add spelldescstr string, 2 = Evaluate spelldesccalc with stat adjustments, 3 = Evaluate spelldesccalc and append, 4 = Evaluate spelldesccalc and insert",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "Parameters",
                    "Description"
                ],
                [
                    "0 (or empty)",
                    "",
                    "Do nothing"
                ],
                [
                    "1",
                    "$!#spelldescstr!$<br>$!#spelldescstr2!$",
                    "1. Add the $!#spelldescstr!$ string to the item tooltip<br>2. If $!#spelldescstr2!$ is not null, then use this string instead of $!#spelldescstr!$ string when playing in controller mode"
                ],
                [
                    "2",
                    "$!#spelldescstr!$<br>$!#calc1!$<br>$!#stat1!$",
                    "1. Evaluate the $!#calc1!$ field<br>2. Insert the calculated value into the $!#spelldescstr!$ string and add the string to the item tooltip"
                ]
            ]
        },
        {
            "name": "spelldescstr",
            "description": "Defines the primary string key used by the spelldesc table",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "spelldescstr2"
            ]
        },
        {
            "name": "spelldesccalc",
            "description": "Value applied or used by the spelldesc table",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Item scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        }
    ]
};
