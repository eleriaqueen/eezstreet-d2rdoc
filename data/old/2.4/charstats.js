// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["charstats"] = {
    "title": "charstats.txt",
    "overview": "This file controls the starting stats for each of the classes",
    "fields": [
        {
            "name": "class",
            "description": "The name of the character class (this cannot be changed)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "str",
            "description": "Starting amount of the Strength attribute",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "dex",
            "description": "Starting amount of the Dexterity attribute",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "int",
            "description": "Starting amount of the Energy attribute",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "vit",
            "description": "Starting amount of the Vitality attribute",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "stamina",
            "description": "Starting amount of Stamina",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "hpadd",
            "description": "Bonus starting Life value (This value gets added with the vit field value to determine the overall starting amount of Life)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ManaRegen",
            "description": "Number of seconds to regain max Mana. (If this equals 0 then it will default to 300 seconds)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ToHitFactor",
            "description": "Starting amount of Attack Rating",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "WalkVelocity",
            "description": "Base Walk movement speed",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "RunVelocity",
            "description": "Base Run movement speed",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "RunDrain",
            "description": "Rate at which Stamina is lost while running",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "LifePerLevel",
            "description": "Amount of Life added for each level gained (Calculated in fourths and is divided by 256)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "StaminaPerLevel",
            "description": "Amount of Stamina added for each level gained (Calculated in fourths and is divided by 256)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ManaPerLevel",
            "description": "Amount of Mana added for each level gained (Calculated in fourths and is divided by 256)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "LifePerVitality",
            "description": "Amount of Life added for each point in Vitality (Calculated in fourths and is divided by 256)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "StaminaPerVitality",
            "description": "Amount of Stamina added for each point in Vitality (Calculated in fourths and is divided by 256)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ManaPerMagic",
            "description": "Amount of Mana added for each point in Energy (Calculated in fourths and is divided by 256)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "StatPerLevel",
            "description": "Amount of Attribute stat points earned for each level gained",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SkillsPerLevel",
            "description": "Amount of Skill points earned for each level gained",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "LightRadius",
            "description": "Baseline radius size of the character's Light Radius",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "BlockFactor",
            "description": "Baseline percent chance for Blocking",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MinimumCastingDelay",
            "description": "Global delay on all Skills after using a Skill with a Casting Delay (Calculated in Frames, where 25 Frames = 1 Second)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "StartSkill",
            "description": "Controls what skill will be added by default to the character's starting weapon and will be slotted in the Right Skill selection (Uses the skill field from Skills.txt)",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "skills",
                "field": "skill"
            }
        },
        {
            "name": "Skill #",
            "description": "Skill that the character starts with and will always have available (Uses the skill field from Skills.txt)",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "skills",
                "field": "skill"
            },
            "altNames": [
                "Skill 1",
                "Skill 2",
                "Skill 3",
                "Skill 4",
                "Skill 5",
                "Skill 6",
                "Skill 7",
                "Skill 8",
                "Skill 9",
                "Skill 10"
            ]
        },
        {
            "name": "StrAllSkills",
            "description": "String key for displaying the item modifier bonus to all skills for the class (Ex: \"+1 to Barbarian Skill Levels\")",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "StrSkillTab#",
            "description": "String key for displaying the item modifier bonus to all skills for the class's first to third skill tab (Ex: \"+1 to Warcries\")",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "StrSkillTab1",
                "StrSkillTab2",
                "StrSkillTab3"
            ]
        },
        {
            "name": "StrClassOnly",
            "description": "String key for displaying on item modifier exclusive to the class or for class specific items (Ex: \"Barbarian only\")",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "HealthPotionPercent",
            "description": "This scales the amount of Life that a Healing potion will restore based on the class",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ManaPotionPercent",
            "description": "This scales the amount of Mana that a Mana potion will restore based on the class",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "baseWClass",
            "description": "Base weapon class that the character will use by default when no weapon is equipped. Referenced by the Code value of the Weapon Class Table",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "item#",
            "description": "Item that the character starts with (Uses the code field from Weapons.txt, Armor.txt or Misc.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "item1",
                "item2",
                "item3",
                "item4",
                "item5",
                "item6",
                "item7",
                "item8",
                "item9",
                "item10"
            ]
        },
        {
            "name": "item#loc",
            "description": "Location where the related item will be placed in the character's inventory. Referenced from the Code column in BodyLocs.txt",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 8,
                "file": "bodylocs",
                "field": "Code"
            },
            "altNames": [
                "item1loc",
                "item2loc",
                "item3loc",
                "item4loc",
                "item5loc",
                "item6loc",
                "item7loc",
                "item8loc",
                "item9loc",
                "item10loc"
            ]
        },
        {
            "name": "item#count",
            "description": "The amount of the related item that the character starts with",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "item1count",
                "item2count",
                "item3count",
                "item4count",
                "item5count",
                "item6count",
                "item7count",
                "item8count",
                "item9count",
                "item10count"
            ]
        },
        {
            "name": "item#quality",
            "description": "Controls the quality level of the related item using the below table:",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            },
            "altNames": [
                "item1quality",
                "item2quality",
                "item3quality",
                "item4quality",
                "item5quality",
                "item6quality",
                "item7quality",
                "item8quality",
                "item9quality",
                "item10quality"
            ]
        }
    ]
}