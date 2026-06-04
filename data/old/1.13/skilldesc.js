// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["skilldesc"] = {
    "title": "skilldesc.txt",
    "overview": "This file controls a skill's tooltip description and how it is displayed on the Skill Tree<br>Used by the following data files: Missiles.txt, Monstats.txt, Skills.txt",
    "fields": [
        {
            "name": "SkillDesc",
            "description": "The name of the skill description, as a reference for associated Data files",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SkillPage",
            "description": "Determines which page on the Skill tree to display the skill",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "Do not display on any skill tree page"
                ],
                [
                    "1",
                    "Skill Tree Page 1"
                ],
                [
                    "2",
                    "Skill Tree Page 2"
                ],
                [
                    "3",
                    "Skill Tree Page 3"
                ]
            ]
        },
        {
            "name": "SkillRow",
            "description": "Determines which row on the Skill tree page to display the skill",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "Do not display on the skill tree page"
                ],
                [
                    "1",
                    "Row 1"
                ],
                [
                    "2",
                    "Row 2"
                ],
                [
                    "3",
                    "Row 3"
                ],
                [
                    "4",
                    "Row 4"
                ],
                [
                    "5",
                    "Row 5"
                ],
                [
                    "6",
                    "Row 6"
                ]
            ]
        },
        {
            "name": "SkillColumn",
            "description": "Determines which column on the Skill tree page to display the skill",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "Do not display on any skill tree page"
                ],
                [
                    "1",
                    "Left Column"
                ],
                [
                    "2",
                    "Middle Column"
                ],
                [
                    "3",
                    "Right Column"
                ]
            ]
        },
        {
            "name": "ListRow",
            "description": "Determines which row the skill will be listed in, for the skill select UI.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "Common Skill Row"
                ],
                [
                    "1",
                    "Skill Tree 1 Row"
                ],
                [
                    "2",
                    "Skill Tree 2 Row"
                ],
                [
                    "3",
                    "Skill Tree 3 Row"
                ],
                [
                    "(Other)",
                    "Skill will not appear in the Skill Selection UI"
                ]
            ]
        },
        {
            "name": "IconCel",
            "description": "Determines the icon asset for displaying the skill, using the Frame# of the Sprite (See Common Folders). It will use Frame+1 for the \"when pressed\" icon visual. The sprite path can be changed in _ProfileHD.json or _ProfileLV.json",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "str name",
            "description": "Uses a string to display as the skill name",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "str short",
            "description": "Uses a string to display as the skill description in shortcuts or when selecting a skill",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "str long",
            "description": "Uses a string to display as the skill description on the Skill Tree",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "str alt",
            "description": "Uses a string to display the skill name on the Character Screen when the skill is selected",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "str mana",
            "description": "The string used for mana cost.",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "descdam",
            "description": "Use a function to calculate a skill's damage and determine how to display it. These functions sometimes require certain skill fields, especially the damage related fields.",
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
                    "0",
                    "",
                    "Do nothing"
                ],
                [
                    "1",
                    "$!#ddam calc1!$<br>$!#ddam calc2!$",
                    "Calculates the basic Attack damage (Uses function 7)<br>$!#ddam calc1!$ is used as a percent bonus<br>$!#ddam calc2!$ is used as a flat number bonus"
                ],
                [
                    "2",
                    "",
                    "Calculates the character's kick damage"
                ],
                [
                    "3",
                    "",
                    "Calculates the character's throwing weapon damage"
                ],
                [
                    "4",
                    "",
                    "Calculates the character's left throwing weapon damage"
                ],
                [
                    "5",
                    "",
                    "Calculates damage using the equipped weapon damage and the linked skill's physical and elemental damage"
                ],
                [
                    "6",
                    "",
                    "Similar to function 5<br>Calculates the damage of the skill but with carry-over of elemental damage from the source, such as a missile direct hit and then a missile explosion"
                ],
                [
                    "7",
                    "$!#ddam calc1!$<br>$!#ddam calc2!$",
                    "Calculates the damage of a skill, including damage bonuses<br>$!#ddam calc1!$ is used as a percent bonus<br>$!#ddam calc2!$ is used as a flat number bonus"
                ],
                [
                    "8",
                    "$!#ddam calc1!$<br>$!#ddam calc2!$",
                    "Calculates the elemental damage of a skill as a periodic damage (every 25 frames = 1 second)<br>$!#ddam calc1!$ is used as a multiplier of the damage (If equals 0 then default to 1)<br>$!#ddam calc2!$ is used as a divisor of the damage (If equals 0 then default to 1)"
                ],
                [
                    "9",
                    "",
                    "Calculates the elemental damage of a skill as a periodic damage (every 25 frames = 1 second)<br>The damage is always multiplied by 3"
                ],
                [
                    "10",
                    "",
                    "Calculates damage based on the shield equipped and the damage provided by the skill Holy Shield.<br>Also adds a damage percent bonus based on the linked skill's Param3 & Param4 values, plus the stat bonuses from Strength and Dexterity "
                ],
                [
                    "11",
                    "",
                    "Calculates damage by obtaining the current weapon damage, and then adds the following:<br>Fire percent damage based on the linked skill's Calc1 field<br>Cold percent damage based on the linked skill's Calc2 field<br>Lightning percent damage based on the linked skill's Calc3 field"
                ],
                [
                    "12",
                    "",
                    "Calculates a skill's damage based on the status of the Concentration Aura state<br>If the game is in Expansion, then use the linked skill's Calc1 field to define the bonus damage when using Concentration<br>If the game is in Classic, then use the Concentration skill's damage percent increase to define the bonus damage when using Concentration"
                ],
                [
                    "13",
                    "",
                    "Calculates throwing damage, where it adds a damage percent bonus defined by the linked skill's Calc1 field"
                ],
                [
                    "14",
                    "",
                    "Calculates the damage of a skill, and uses the linked skill's Param5 field as an overall damage percent penalty"
                ],
                [
                    "15",
                    "",
                    "Calculates the total damage by adding a damage percent bonus from the linked skill's Param1 & Param2 linear increase calculation, the progressive increase from charges from the linked skill, and the boot damage"
                ],
                [
                    "16",
                    "",
                    "Calculates the total damage by adding a damage percent bonus from the linked skill's Calc1 value, the progressive increase from charges from the linked skill, and the boot damage"
                ],
                [
                    "17",
                    "$!#ddam calc1!$<br>$!#ddam calc2!$",
                    "Calculates the damage of a skill and displays the physical damage and the elemental damage separately<br>$!#ddam calc1!$ is used as a percent bonus<br>$!#ddam calc2!$ is used as a flat number bonus"
                ],
                [
                    "18",
                    "$!#ddam calc1!$<br>$!#ddam calc2!$",
                    "Calculates the damage of a skill, including damage bonuses (Uses function 7)<br>$!#ddam calc1!$ is used as a percent bonus<br>$!#ddam calc2!$ is used as a flat number bonus"
                ],
                [
                    "19",
                    "$!#ddam calc1!$<br>$!#ddam calc2!$",
                    "Calculates the damage of a dual wielding attack. If not dual wielding, then it calculates a normal attack damage<br>$!#ddam calc1!$ is used as a percent bonus<br>$!#ddam calc2!$ is used as a flat number bonus"
                ],
                [
                    "20",
                    "$!#ddam calc1!$<br>$!#ddam calc2!$",
                    "Same as function 19, but does not add elemental damage"
                ],
                [
                    "21",
                    "",
                    "Calculates the throwing weapon damage with the linked skill's elemental damage added"
                ],
                [
                    "22",
                    "",
                    "Calculates the throwing weapon damage for dual wielding throwing weapons and displays them as two values"
                ],
                [
                    "23",
                    "",
                    "Calculates the damage of a skill and displays the physical damage and elemental damage separately<br>(Similar to function 17)"
                ],
                [
                    "24",
                    "",
                    "Calculates damage using the equipped weapon damage and the linked skill's physical and elemental damage<br>(Similar to function 5)"
                ]
            ]
        },
        {
            "name": "ddam calc#",
            "description": "Integer calc value used as a possible parameter for the descdam function",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            },
            "altNames": [
                "ddam calc1",
                "ddam calc2"
            ]
        },
        {
            "name": "p#dmelem",
            "description": "Used for skills that have charge-ups to display the damage on the Character Screen, controls the elemental type for that charge",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 8,
                "file": "ElemTypes",
                "field": "Code"
            },
            "altNames": [
                "p1dmelem",
                "p2dmelem",
                "p3dmelem"
            ]
        },
        {
            "name": "p#dmmin",
            "description": "Used for skills that have charge-ups to display the damage on the Character Screen, controls the minimum damage for that charge",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            },
            "altNames": [
                "p1dmmin",
                "p2dmmin",
                "p3dmmin"
            ]
        },
        {
            "name": "p#dmmax",
            "description": "Used for skills that have charge-ups to display the damage on the Character Screen, controls the maximum damage for that charge",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            },
            "altNames": [
                "p1dmmax",
                "p2dmmax",
                "p3dmmax"
            ]
        },
        {
            "name": "descatt",
            "description": "Used to display the overall Attack Rating of the skill in the Character Screen",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "null"
                ],
                [
                    "1",
                    "Displays the overall Attack Rating the character's primary weapon"
                ],
                [
                    "2",
                    "If the character can dual wield two weapons, then display the overall Attack Rating for each weapon"
                ],
                [
                    "3",
                    "Displays the overall Attack Rating for throwing the right-hand weapon"
                ],
                [
                    "4",
                    "Displays the overall Attack Rating for throwing the left-hand weapon"
                ],
                [
                    "5",
                    "Displays the overall Attack Rating for a skill marked with the \"finishing\" flag"
                ]
            ]
        },
        {
            "name": "descmissile#",
            "description": "Links a missile from Missiles.txt to be used as a reference value for calculations",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "missiles",
                "field": "Missile"
            },
            "altNames": [
                "descmissile1",
                "descmissile2",
                "descmissile3"
            ]
        },
        {
            "name": "descline#",
            "description": "Uses an ID value to select a description function to format the string value. Displays this text as the current level and next level description lines in the skill tooltip.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "descline1",
                "descline2",
                "descline3",
                "descline4",
                "descline5",
                "descline6"
            ],
            "table": [
                [
                    "0",
                    "",
                    "None"
                ],
                [
                    "1",
                    "$!#str mana#!$",
                    "Boolean: if the $!#str mana#!$ column is non-empty, displays the mana cost of the skill."
                ],
                [
                    "2",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$",
                    "Outputs: [$!#desctexta#!$] + [$!#desccalca#!$] [$!#desctextb#!$]<br>Example: desctexta=\"Fire Damage: \", desccalca=30, desctextb=\" percent\" → \"Fire Damage: +30 percent\""
                ],
                [
                    "3",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$",
                    "Outputs: [$!#desctexta#!$] [$!#desccalca#!$] [$!#desctextb#!$]<br>Example: desctexta=\"Mana Cost: \", desccalca=7, desctextb=\" per second\" → \"Mana Cost: 7 per second\""
                ],
                [
                    "4",
                    "$!#desctexta#!$<br>$!#desccalca#!$",
                    "Outputs: [$!#desctexta#!$] + [$!#desccalca#!$]<br>Example: desctexta=\"Heals: \", desccalca=2 → \"Heals: +2\""
                ],
                [
                    "5",
                    "$!#desctexta#!$<br>$!#desccalca#!$",
                    "Outputs: [$!#desctexta#!$] [$!#desccalca#!$]<br>Example: desctexta=\"Ravens: \", desccalca=12 → \"Ravens: 12\""
                ],
                [
                    "6",
                    "$!#desctexta#!$<br>$!#desccalca#!$",
                    "Outputs: + [$!#desccalca#!$] [$!#desctexta#!$]<br>Example: desctexta=\" percent\", desccalca=30 → \"+30 percent\""
                ],
                [
                    "7",
                    "$!#desctexta#!$<br>$!#desccalca#!$",
                    "Outputs: [$!#desccalca#!$] [$!#desctexta#!$]<br>Example: desctexta=\" percent chance\", desccalca=13 → \"13 percent chance\""
                ],
                [
                    "8",
                    "",
                    "Hardcoded: Automatically displays the Attack Rating bonus. Uses $!#desctexta#!$ and $!#desctextb#!$."
                ],
                [
                    "9",
                    "",
                    "Hardcoded: Automatically displays the Damage bonus. Uses $!#desctexta#!$, $!#desctextb#!$, and $!#desccalcb#!$ for the damage value."
                ],
                [
                    "10",
                    "",
                    "Hardcoded: Displays elemental damage range: \"(Elem) Damage: X-Y\". The element type is determined by the EType field in skills.txt."
                ],
                [
                    "11",
                    "",
                    "Hardcoded: Describes a skill's damage. Uses $!#desctexta#!$ and $!#desctextb#!$."
                ],
                [
                    "12",
                    "$!#desctexta#!$<br>$!#desccalca#!$",
                    "Outputs: [$!#desctexta#!$] [$!#desccalca#!$] seconds<br>Example: desctexta=\"Duration: \", desccalca=4 → \"Duration: 4 seconds\""
                ],
                [
                    "13",
                    "$!#desccalca#!$",
                    "Hardcoded: Displays the Life value of the monster referenced by the summon field in skills.txt. Uses [$!#desccalca#!$] as the life value.<br>Example: desccalca=321 → \"Life: 321\""
                ],
                [
                    "14",
                    "",
                    "Hardcoded: Displays poison damage and duration for poison skills. Reads EMin, EMax, ELen, and HitShift from skills.txt.<br>Formula: X = EMin * ELen / 2^HitShift, Y = EMax * ELen / 2^HitShift, Z = ELen / 25<br>Output: \"Poison Damage: X-Y<br>over Z seconds\""
                ],
                [
                    "15",
                    "$!#desctexta#!$<br>$!#desctextb#!$",
                    "Outputs: [$!#desctexta#!$] : [$!#desctextb#!$]<br>Example: desctexta=\"Not\", desctextb=\" Verified\" → \"Not : Verified\""
                ],
                [
                    "16",
                    "$!#desccalca#!$<br>$!#desccalcb#!$",
                    "Hardcoded: Displays duration as a range in seconds. C1 and C2 are in frames (divide by 25 for seconds).<br>Formula: X = C1/25, Y = C2/25<br>Output: \"Duration: X-Y seconds\""
                ],
                [
                    "17",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$<br>$!#desccalcb#!$",
                    "Outputs: [$!#desctextb#!$] [$!#desctexta#!$] [$!#desccalca#!$] - [$!#desccalcb#!$] per second<br>Example: desctexta=\"Fire Damage: \", desctextb=\"Charge 3 - \", desccalca=9, desccalcb=15 → \"Charge 3 - Fire Damage: 9-15 per second\""
                ],
                [
                    "18",
                    "$!#desctexta#!$",
                    "Outputs: [$!#desctexta#!$]<br>Example: desctexta=\"Kills Everything\" → \"Kills Everything\""
                ],
                [
                    "19",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$",
                    "Outputs: [$!#desctextb#!$] [$!#desctexta#!$] ([$!#desccalca#!$] * 2/3) yards. [$!#desccalca#!$] is in game length units (multiply by 2/3 to get yards).<br>Example: desctexta=\"Radius: \", desccalca=16 → \"Radius: 10.67 yards\""
                ],
                [
                    "20",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$",
                    "Outputs: [$!#desctexta#!$] + [$!#desccalca#!$] percent [$!#desctextb#!$]<br>Example: desctexta=\"String1\", desctextb=\"String2\", desccalca=X → \"String1+X percentString2\""
                ],
                [
                    "21",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$",
                    "Outputs: [$!#desctexta#!$] [$!#desccalca#!$] percent [$!#desctextb#!$]<br>Example: desctexta=\"String1\", desctextb=\"String2\", desccalca=X → \"String1X percentString2\""
                ],
                [
                    "22",
                    "",
                    "Hardcoded: Displays average fire damage from fire missiles per second. Reads missile damage and applies HitShift 4.<br>Formula: X, Y = (dmg * 7/3)<br>Output: \"Average Fire Damage: X-Y per second\""
                ],
                [
                    "23",
                    "$!#desctexta#!$",
                    "Hardcoded: Displays a duration in seconds derived from the missile's range field (range / 25). Uses [$!#desctexta#!$] as a prefix.<br>Output: [$!#desctexta#!$] X seconds"
                ],
                [
                    "24",
                    "$!#desctexta#!$<br>$!#desctextb#!$",
                    "Hardcoded: Displays a damage range derived from the skill's damage (dmg / 2). Uses [$!#desctextb#!$] as a charge prefix and [$!#desctexta#!$] as a damage type label.<br>Output: [$!#desctextb#!$] [$!#desctexta#!$] X-Y"
                ],
                [
                    "25",
                    "$!#desctexta#!$<br>$!#desctextb#!$",
                    "Outputs: [$!#desctexta#!$] [$!#desctextb#!$]<br>Example: desctexta=\"Summon Dire Wolf\" → \"Summon Dire Wolf\""
                ],
                [
                    "26",
                    "",
                    "Hardcoded: Displays average elemental damage per second. The element type is determined by EType in skills.txt.<br>Formula: X-Y = (dmg * 25/16), HitShift 4<br>Output: \"Average (Elem) Damage: X-Y per second\""
                ],
                [
                    "27",
                    "",
                    "Hardcoded: Displays average fire damage for fire skills.<br>Formula: X, Y = (dmg * 14/3), HitShift 4<br>Output: \"Average Fire Damage: X-Y per second\""
                ],
                [
                    "28",
                    "",
                    "Hardcoded: Displays a fixed 1-yard radius. Used by Fire Ball. The game value cannot be changed.<br>Output: \"Radius: 1 Yard\""
                ],
                [
                    "29",
                    "",
                    "Hardcoded: Displays the radius in yards derived from the missile's range (range * 2/3). Used by Fire Wall.<br>Output: \"X Yards\""
                ],
                [
                    "30",
                    "$!#desctexta#!$",
                    "Hardcoded: Displays the duration in seconds derived from the submissile's range (submissile1.range / 25). Used by Fire Wall. Uses [$!#desctexta#!$] as a prefix.<br>Output: [$!#desctexta#!$] X seconds"
                ],
                [
                    "31",
                    "$!#desctexta#!$<br>$!#desccalca#!$",
                    "Outputs: [$!#desctexta#!$] ([$!#desccalca#!$] / 25) seconds. [$!#desccalca#!$] is in frames.<br>Example: desctexta=\"Duration: \", desccalca=50 → \"Duration: 2 seconds\""
                ],
                [
                    "32",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$",
                    "Outputs: [$!#desctexta#!$] [$!#desctextb#!$] + [$!#desccalca#!$] percent<br>Example: desctexta=\"Monsters: \", desctextb=\"Damage: \", desccalca=500 → \"Monsters: Damage: +500 percent\""
                ],
                [
                    "33",
                    "$!#desctexta#!$<br>$!#desctextb#!$",
                    "Non-functional: Outputs [$!#desctexta#!$] [$!#desctextb#!$] but does not display anything useful. Used by Skeleton Mastery."
                ],
                [
                    "34",
                    "",
                    "Hardcoded: Displays the damage range of the monster referenced by the summon field in skills.txt, including bonuses from Skeleton Mastery.<br>Output: \"Damage: X-Y\""
                ],
                [
                    "35",
                    "$!#desctexta#!$<br>$!#desccalca#!$<br>$!#desccalcb#!$",
                    "Outputs: [$!#desctexta#!$]: [$!#desccalca#!$] - [$!#desccalcb#!$]<br>Example: desctexta=\"Holy Fire\", desccalca=6, desccalcb=8 → \"Holy Fire: 6-8\""
                ],
                [
                    "36",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$",
                    "Plurality selector: if [$!#desccalca#!$] equals 1, outputs [$!#desccalca#!$] [$!#desctexta#!$]; otherwise outputs [$!#desccalca#!$] [$!#desctextb#!$].<br>Example: desctexta=\" skeleton total\", desctextb=\" skeletons total\", desccalca=4 → \"4 skeletons total\""
                ],
                [
                    "37",
                    "$!#desctexta#!$<br>$!#desccalca#!$",
                    "Outputs: [$!#desctexta#!$] ([$!#desccalca#!$] * 2/3) yards. [$!#desccalca#!$] is in game length units.<br>Example: desctexta=\"Radius: \", desccalca=7 → \"Radius: 4.67 yards\""
                ],
                [
                    "38",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$<br>$!#desccalcb#!$",
                    "Outputs: [$!#desctexta#!$] [$!#desccalca#!$] - [$!#desccalcb#!$] [$!#desctextb#!$]<br>Example: desctexta=\"Cold Damage: \", desctextb=\" to your attack\", desccalca=70, desccalcb=120 → \"Cold Damage: 70-120 to your attack\""
                ],
                [
                    "39",
                    "",
                    "Null/unused. Used by Clay Golem and Iron Golem; displays nothing."
                ],
                [
                    "40",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$",
                    "Color-coded string: use [$!#desccalca#!$] as a color code, then insert [$!#desctextb#!$] into the %s placeholder in [$!#desctexta#!$] and output the colored string.<br>Color codes: 0 = Light Gray, 1 = Red, 2 = Bright Green, 3 = Blue, 4 = Gold, 5 = Dark Gray, 6 = Transparent, 7 = Tan, 8 = Orange, 9 = Yellow"
                ],
                [
                    "41",
                    "$!#desccalca#!$<br>$!#desccalcb#!$",
                    "Hardcoded: Displays a fire damage range. Used by Fire Golem.<br>Output: \"Fire Damage: [$!#desccalca#!$]-[$!#desccalcb#!$]\""
                ],
                [
                    "42",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$<br>$!#desccalcb#!$",
                    "Outputs a decimal value formed from [$!#desccalca#!$] and [$!#desccalcb#!$] (as tenths): [$!#desctexta#!$]: + [$!#desccalca#!$].[$!#desccalcb#!$] [$!#desctextb#!$]<br>Example: desctexta=\"Wake of Fire\", desctextb=\"Yards per level\", desccalca=0, desccalcb=5 → \"Wake of Fire: +0.5 Yards per level\""
                ],
                [
                    "43",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$<br>$!#desccalcb#!$",
                    "Outputs: [$!#desctexta#!$] ([$!#desccalca#!$]/256) - ([$!#desccalcb#!$]/256) [$!#desctextb#!$]. Values are stored in 256ths precision.<br>Example: desctexta=\"Fire Damage: \", desccalca=1, desccalcb=3 → \"Fire Damage: 1-3\""
                ],
                [
                    "44",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$<br>$!#desccalcb#!$",
                    "Outputs: [$!#desctexta#!$] ([$!#desccalca#!$]/256) - ([$!#desccalcb#!$]/256) [$!#desctextb#!$]. Used to display HP/MP/SP values with 256ths precision."
                ],
                [
                    "45",
                    "",
                    "Hardcoded: Displays the Thorns aura's damage return percentage. Output: \"Thorns Damage: 1 percent damage returned\""
                ],
                [
                    "46",
                    "$!#desctexta#!$",
                    "Outputs: [$!#desctexta#!$]. Similar to descline 18 but with a Calc value of 0."
                ],
                [
                    "47",
                    "$!#desctexta#!$<br>$!#desccalca#!$<br>$!#desccalcb#!$",
                    "Outputs: [$!#desctexta#!$] [$!#desccalca#!$] - [$!#desccalcb#!$]<br>Example: desctexta=\"Heals: \", desccalca=5, desccalcb=6 → \"Heals: 5-6\""
                ],
                [
                    "48",
                    "",
                    "Hardcoded: Displays the magic damage range. Used by Blessed Hammer. Reads damage from skills.txt.<br>Output: \"Magic Damage: X-Y\""
                ],
                [
                    "49",
                    "$!#desctexta#!$",
                    "Hardcoded: Displays a damage range from the skill's damage (used for Smite damage). Uses [$!#desctexta#!$] as a label.<br>Output: [$!#desctexta#!$] X-Y"
                ],
                [
                    "50",
                    "$!#desctexta#!$",
                    "Hardcoded: Displays a damage range from the hit submissile's damage (hitsubmissile1.dmg). Uses [$!#desctexta#!$] as a label. Used by Fist of the Heavens.<br>Output: [$!#desctexta#!$] X-Y"
                ],
                [
                    "51",
                    "$!#desctexta#!$",
                    "Hardcoded (potentially): Displays a percent chance value. Used by masteries. Uses $!#desctexta#!$ with a %d format specifier that will be replaced by the calculated value.<br>Example: desctexta=\"%d Percent Chance of Critical Strike\""
                ],
                [
                    "52",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$<br>$!#desccalcb#!$",
                    "Outputs: [$!#desctexta#!$] + [$!#desccalca#!$] - [$!#desccalcb#!$] [$!#desctextb#!$]<br>Example: desctexta=\"Life Steal: \", desctextb=\" percent\", desccalca=4, desccalcb=12 → \"Life Steal: +4-12 percent\""
                ],
                [
                    "53",
                    "",
                    "Hardcoded: Used by Identify scroll (isc). Displays the scroll's function."
                ],
                [
                    "54",
                    "",
                    "Hardcoded: Used by Identify book (ibk). Displays the book's function."
                ],
                [
                    "55",
                    "",
                    "Hardcoded: Used by Town Portal scroll (tsc). Displays the scroll's function."
                ],
                [
                    "56",
                    "",
                    "Hardcoded: Used by Town Portal book (tbk). Displays the book's function."
                ],
                [
                    "57",
                    "$!#desctexta#!$<br>$!#desccalca#!$",
                    "Outputs: [$!#desctexta#!$] + ([$!#desccalca#!$] / 25) seconds. [$!#desccalca#!$] is in frames.<br>Example: desctexta=\"Duration: \", desccalca=300 → \"Duration: +12 seconds\""
                ],
                [
                    "58",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$<br>$!#desccalcb#!$",
                    "Outputs: [$!#desctexta#!$] [$!#desctextb#!$] + [$!#desccalca#!$] - [$!#desccalcb#!$]<br>Example: desctexta=\"No referenced\", desctextb=\" skilldesc available\", desccalca=1, desccalcb=2 → \"No referenced skilldesc available+1-2\""
                ],
                [
                    "59",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$<br>$!#desccalcb#!$",
                    "Outputs: [$!#desctextb#!$] [$!#desctexta#!$] [$!#desccalca#!$] - [$!#desccalcb#!$]. Used by Inferno Sentry.<br>Example: desctexta=\"Fire Damage: \", desccalca=5, desccalcb=6 → \"Fire Damage: 5-6\""
                ],
                [
                    "60",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$",
                    "Outputs: [$!#desctexta#!$] + ([$!#desccalca#!$]/256) [$!#desctextb#!$]. [$!#desccalca#!$] is stored in 256ths precision.<br>Example: desctexta=\"No referenced\", desctextb=\" skill\", desccalca=1 → \"No referenced+1 skill\""
                ],
                [
                    "61",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$",
                    "Outputs: [$!#desctexta#!$] ([$!#desccalca#!$]/256) [$!#desctextb#!$]. [$!#desccalca#!$] is in 256ths precision. Used by Blade Fury.<br>Example: desctexta=\"Mana Cost: \", desctextb=\" per blade\", desccalca=15 → \"Mana Cost: 15 per blade\""
                ],
                [
                    "62",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$<br>$!#desccalcb#!$",
                    "Outputs: [$!#desctexta#!$] [$!#desctextb#!$] [$!#desccalca#!$] - [$!#desccalcb#!$]<br>Example: desctexta=\"Charge 3 - \", desctextb=\"charged bolt damage: \", desccalca=1, desccalcb=12 → \"Charge 3 - charged bolt damage: 1-12\""
                ],
                [
                    "63",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$",
                    "Outputs: [$!#desctexta#!$]: + [$!#desccalca#!$]% [$!#desctextb#!$]<br>Example: desctexta=\"Phoenix Strike\", desctextb=\"Lightning Damage per Level\", desccalca=8 → \"Phoenix Strike: +8% Lightning Damage per Level\""
                ],
                [
                    "64",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$<br>$!#desccalcb#!$",
                    "Outputs: [$!#desctexta#!$]: + [$!#desccalca#!$] / [$!#desccalcb#!$] [$!#desctextb#!$]<br>Example: desctexta=\"No referenced\", desctextb=\" skilldesc\", desccalca=1, desccalcb=2 → \"No referenced: +1/2 skilldesc\""
                ],
                [
                    "65",
                    "$!#desctexta#!$<br>$!#desctextb#!$",
                    "Outputs: [$!#desctexta#!$]: [$!#desctextb#!$]<br>Example: desctexta=\"No referenced\", desctextb=\" skilldesc\" → \"No referenced: skilldesc\""
                ],
                [
                    "66",
                    "$!#desctexta#!$<br>$!#desccalca#!$",
                    "sprintf-style: [$!#desctexta#!$] must contain a %d%% format specifier, which will be replaced by [$!#desccalca#!$].<br>Example: desctexta=\"Converts %d%% Physical Damage to Elemental Damage\", desccalca=100 → \"Converts 100% Physical Damage to Elemental Damage\""
                ],
                [
                    "67",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$",
                    "Outputs: [$!#desctexta#!$]: + [$!#desccalca#!$] [$!#desctextb#!$]<br>Example: desctexta=\"Shiver Armor\", desctextb=\"Seconds per Level\", desccalca=10 → \"Shiver Armor: +10 Seconds per Level\""
                ],
                [
                    "68",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$",
                    "Outputs: [$!#desccalca#!$] [$!#desctexta#!$] [$!#desctextb#!$]<br>Example: desctexta=\" percent\", desctextb=\" damage to Self\", desccalca=8 → \"8 percent damage to Self\""
                ],
                [
                    "69",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$",
                    "Outputs: [$!#desctexta#!$]: [$!#desctextb#!$] [$!#desccalca#!$]<br>Example: desctexta=\"No referenced\", desctextb=\" skill\", desccalca=1 → \"No referenced: skill 1\""
                ],
                [
                    "70",
                    "$!#desctexta#!$<br>$!#desctextb#!$<br>$!#desccalca#!$",
                    "Outputs: [$!#desctexta#!$] [$!#desctextb#!$] + [$!#desccalca#!$]<br>Example: desctexta=\"Magi: \", desctextb=\"Life: \", desccalca=10 → \"Magi: Life: +10\""
                ],
                [
                    "71",
                    "$!#desctexta#!$<br>$!#desctextb#!$",
                    "Outputs: [$!#desctexta#!$]: [$!#desctextb#!$]. [$!#desctextb#!$] can use a %d format specifier for a level-dependent value.<br>Example: desctexta=\"Fire Blast\", desctextb=\"+1 Missile per %d Levels\" → \"Fire Blast: +1 Missile per %d Levels\""
                ],
                [
                    "72",
                    "$!#desctexta#!$<br>$!#desccalca#!$<br>$!#desccalcb#!$",
                    "Outputs: + [$!#desccalca#!$] / [$!#desccalcb#!$] [$!#desctexta#!$]<br>Example: desctexta=\"Weapon Damage\", desccalca=3, desccalcb=8 → \"+3/8 Weapon Damage\""
                ],
                [
                    "73",
                    "$!#desctexta#!$<br>$!#desccalca#!$<br>$!#desccalcb#!$",
                    "Outputs: [$!#desccalca#!$] / [$!#desccalcb#!$] [$!#desctexta#!$]<br>Example: desctexta=\"Weapon Damage\", desccalca=3, desccalcb=4 → \"3/4 Weapon Damage\""
                ],
                [
                    "74",
                    "$!#desctexta#!$",
                    "Outputs: [$!#desctexta#!$]. No referenced skilldesc available using this value."
                ],
                [
                    "75",
                    "$!#desctexta#!$",
                    "Outputs: [$!#desctexta#!$]. No referenced skilldesc available using this value."
                ]
            ]
        },
        {
            "name": "desctexta#",
            "description": "String value used as the first possible string parameter for the descline1 function",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "desctexta1",
                "desctexta2",
                "desctexta3",
                "desctexta4",
                "desctexta5",
                "desctexta6"
            ]
        },
        {
            "name": "desctextb#",
            "description": "String value used as the second possible string parameter for the descline1 function",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "desctextb1",
                "desctextb2",
                "desctextb3",
                "desctextb4",
                "desctextb5",
                "desctextb6"
            ]
        },
        {
            "name": "desccalca#",
            "description": "Integer calculation value used as the first possible numeric parameter for the descline1 function",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            },
            "altNames": [
                "desccalca1",
                "desccalca2",
                "desccalca3",
                "desccalca4",
                "desccalca5",
                "desccalca6"
            ]
        },
        {
            "name": "desccalcb#",
            "description": "Integer calculation value used as the second possible numeric parameter for the descline1 function",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            },
            "altNames": [
                "desccalcb1",
                "desccalcb2",
                "desccalcb3",
                "desccalcb4",
                "desccalcb5",
                "desccalcb6"
            ]
        },
        {
            "name": "dsc2line#",
            "description": "Uses an ID value to select a description function to format the string value. Displays this text as a pinned line, after the skill description. (Uses the same function codes as descline1)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "dsc2line1",
                "dsc2line2",
                "dsc2line3",
                "dsc2line4",
                "dsc2line5"
            ]
        },
        {
            "name": "dsc2texta#",
            "description": "String value used as the first possible string parameter for the dsc2line1 function",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "dsc2texta1",
                "dsc2texta2",
                "dsc2texta3",
                "dsc2texta4",
                "dsc2texta5"
            ]
        },
        {
            "name": "dsc2textb#",
            "description": "String value used as the second possible string parameter for the dsc2line1 function",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "dsc2textb1",
                "dsc2textb2",
                "dsc2textb3",
                "dsc2textb4",
                "dsc2textb5"
            ]
        },
        {
            "name": "dsc2calca#",
            "description": "Integer Calc value used as the first possible numeric parameter for the dsc2line1 function",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            },
            "altNames": [
                "dsc2calca1",
                "dsc2calca2",
                "dsc2calca3",
                "dsc2calca4",
                "dsc2calca5"
            ]
        },
        {
            "name": "dsc2calcb#",
            "description": "Integer Calc value used as the second possible numeric parameter for the dsc2line1 function",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            },
            "altNames": [
                "dsc2calcb1",
                "dsc2calcb2",
                "dsc2calcb3",
                "dsc2calcb4",
                "dsc2calcb5"
            ]
        },
        {
            "name": "dsc3line#",
            "description": "Uses an ID value to select a description function to format the string value. Displays this text as a pinned line at the bottom of the skill tooltip. (Uses the same function codes as descline1)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "dsc3line1",
                "dsc3line2",
                "dsc3line3",
                "dsc3line4",
                "dsc3line5",
                "dsc3line6",
                "dsc3line7"
            ]
        },
        {
            "name": "dsc3texta#",
            "description": "String value used as the first possible string parameter for the dsc3line1 function",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "dsc3texta1",
                "dsc3texta2",
                "dsc3texta3",
                "dsc3texta4",
                "dsc3texta5",
                "dsc3texta6",
                "dsc3texta7"
            ]
        },
        {
            "name": "dsc3textb#",
            "description": "String value used as the second possible string parameter for the dsc3line1 function",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "dsc3textb1",
                "dsc3textb2",
                "dsc3textb3",
                "dsc3textb4",
                "dsc3textb5",
                "dsc3textb6",
                "dsc3textb7"
            ]
        },
        {
            "name": "dsc3calca#",
            "description": "Integer Calc value used as the first possible numeric parameter for the dsc3line1 function",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            },
            "altNames": [
                "dsc3calca1",
                "dsc3calca2",
                "dsc3calca3",
                "dsc3calca4",
                "dsc3calca5",
                "dsc3calca6",
                "dsc3calca7"
            ]
        },
        {
            "name": "dsc3calcb#",
            "description": "Integer Calc value used as the second possible numeric parameter for the dsc3line1 function",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            },
            "altNames": [
                "dsc3calcb1",
                "dsc3calcb2",
                "dsc3calcb3",
                "dsc3calcb4",
                "dsc3calcb5",
                "dsc3calcb6",
                "dsc3calcb7"
            ]
        }
    ]
};
