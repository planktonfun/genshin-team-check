
if (typeof gdjs.evtsExt__BaseGameFunctions__IsSeedCrit !== "undefined") {
  gdjs.evtsExt__BaseGameFunctions__IsSeedCrit.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BaseGameFunctions__IsSeedCrit = {};


gdjs.evtsExt__BaseGameFunctions__IsSeedCrit.userFunc0x14c8610 = function(runtimeScene, eventsFunctionContext) {
"use strict";
var baseStats = eventsFunctionContext.getArgument("BaseStats").toJSObject();
var equipment = eventsFunctionContext.getArgument("Equipment").toJSObject();
var random = eventsFunctionContext.getArgument("RandomNumber");

function calculateNumberOfHits(value) {
  if (value >= 1) {
    return 1;
  } else if (value >= -2) {
    return 2;
  } else if (value >= -8) {
    return 3;
  } else if (value >= -14) {
    return 4;
  } else if (value >= -20) {
    return 5;
  } else if (value >= -26) {
    return 6;
  } else if (value >= -32) {
    return 7;
  } else if (value >= -38) {
    return 8;
  } else if (value >= -44) {
    return 9;
  } else {
    return 10;
  }
}

// calculate parameters based on based stats
var PhysicalAttack = baseStats.AP;
var GunDamage = (20*(baseStats.AC-48)) + baseStats["Gun AP"];
var PhysicalAccuracyPercent = baseStats.AC+52;
var MagicCritRatePercent = Math.min(90, (baseStats.AC-48)); // critical attack probability are caped at 90%
var NumberOfAttacks = calculateNumberOfHits(baseStats.DX); // DX cap -45;
var Mana = baseStats.MP;
var MagicAttack = baseStats.MA;
var MagicDefense = baseStats.MD;
var WeightLimit = baseStats.WT;
var DetectionRatePercent = Math.min(100, baseStats.DA + 10); // 100% detection rate at 90 DA;
var MagicEvasionPercent = baseStats.LK;
var MagicAccuracyPercent = baseStats.LK;
var SkillAccuracyPercent = baseStats.LK;
var GunAccuracyPercent = baseStats.LK+49;
var PhysicalCritRatePercent = Math.min(90, baseStats.LK); // critical attack probability are caped at 90%
var Health = baseStats.HP;
var PhysicalDefense = baseStats.DP;
var PhysicalEvasionPercent = baseStats.HV*2.5;
var PhysicalBlockPercent = Math.min(baseStats.HV); // block probability are caped at 90%

var damageObject = {
	attackType: eventsFunctionContext.getArgument("AttackType").toString(),
	elementalType: 'none',
	elementalMultiplierPercent: 0,
	totalDamage: 0,
	hasCrited: false,
	accuracy: 0,
	isDodged: false,
	fixedDamage: false,
	isBlocked: false,
	numberOfAttacks: NumberOfAttacks
};

// Calculate Damage on the attacker side
var ElementalDamagePercentList = {
	'none': 0,
	'fire':0,
	'water':0,
	'air':0,
	'soil':0,
	'electricity':0,
	'light':0,
	'dark':0,
	'shadow':0
};

var ElementalResistancePercentList = {
	'none': 0,
	'fire':0,
	'water':0,
	'air':0,
	'soil':0,
	'electricity':0,
	'light':0,
	'dark':0,
	'shadow':0
};

function isBlocked(accuracyPercent, evasionPercent) {
  // Generate a random number between 1 and 100 to simulate a dice roll
  const diceRoll = random * 100;

  // Calculate the hit chance for the enemy
  const hitChance = accuracyPercent - evasionPercent;

  // Check if the dice roll is within the hit chance range
  if (diceRoll <= hitChance) {
    return true;
  } else {
    return false;
  }
}

function isDodged(accuracyPercent, evasionPercent) {
  // Generate a random number between 1 and 100 to simulate a dice roll
  const diceRoll = random * 100;

  // Calculate the hit chance for the enemy
  const hitChance = accuracyPercent - evasionPercent;

  // Check if the dice roll is within the hit chance range
  if (diceRoll <= hitChance) {
    return true;
  } else {
    return false;
  }
}

var ElementalMultiplierPercent = ElementalDamagePercentList[damageObject.elementalType];
var MagicDamage = MagicAttack + (MagicAttack * (ElementalMultiplierPercent/100));
var PhysicalDamage = PhysicalAttack + (PhysicalAttack * (ElementalMultiplierPercent/100));

switch(damageObject.attackType) {
	case 'physical':
		damageObject.totalDamage = PhysicalDamage;
		var isCrit = (PhysicalCritRatePercent/100) > random;
		if(isCrit) {
			damageObject.totalDamage *= 1.9;
			damageObject.hasCrited = true;
		}
		damageObject.accuracy = PhysicalAccuracyPercent;
	break;
	case 'magic':
		damageObject.totalDamage = MagicDamage;
		var isCrit = (MagicCritRatePercent/100) > random;
		if(isCrit) {
			damageObject.totalDamage *= 1.1;
			damageObject.hasCrited = true;
		}
		damageObject.accuracy = MagicAccuracyPercent;
	break;
	case 'gun':
		damageObject.totalDamage = GunDamage;
		var isCrit = (PhysicalCritRatePercent/100) > random;
		if(isCrit) {
			damageObject.totalDamage *= 1.9;
			damageObject.hasCrited = true;
		}
		damageObject.accuracy = GunAccuracyPercent;
	break;
}

console.log({
	random,
	hasCrited: damageObject.hasCrited
});

eventsFunctionContext.returnValue = damageObject.hasCrited;
};
gdjs.evtsExt__BaseGameFunctions__IsSeedCrit.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__BaseGameFunctions__IsSeedCrit.userFunc0x14c8610(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__BaseGameFunctions__IsSeedCrit.func = function(runtimeScene, BaseStats, Equipment, RandomNumber, AttackType, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "BaseStats") return BaseStats;
if (argName === "Equipment") return Equipment;
if (argName === "RandomNumber") return RandomNumber;
if (argName === "AttackType") return AttackType;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__BaseGameFunctions__IsSeedCrit.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__BaseGameFunctions__IsSeedCrit.registeredGdjsCallbacks = [];