
if (typeof gdjs.evtsExt__BaseGameFunctions__CreateRecievedDamageObject !== "undefined") {
  gdjs.evtsExt__BaseGameFunctions__CreateRecievedDamageObject.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BaseGameFunctions__CreateRecievedDamageObject = {};


gdjs.evtsExt__BaseGameFunctions__CreateRecievedDamageObject.userFunc0x13f7ec0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
var baseStats = eventsFunctionContext.getArgument("BaseStats").toJSObject();
var damageObject = eventsFunctionContext.getArgument("DamageObject").toJSObject();
var random = eventsFunctionContext.getArgument("RandomNumber");

// calculate parameters based on based stats
var PhysicalAttack = baseStats.AP;
var PhysicalAccuracyPercent = baseStats.AC+52;
var MagicCritRatePercent = Math.min(90, (baseStats.AC-48)); // critical attack probability are caped at 90%
var AttackSpeed = Math.max(-40, baseStats.DX); // DX cap -40;
var Mana = baseStats.MP;
var MagicAttack = baseStats.MA;
var MagicDefense = baseStats.MD;
var WeightLimit = baseStats.WT;
var DetectionRatePercent = Math.min(100, baseStats.DA + 10); // 100% detection rate at 90 DA;
var MagicEvasionPercent = baseStats.LK;
var MagicAccuracyPercent = baseStats.LK;
var SkillAccuracyPercent = baseStats.LK;
var GunAccuracyPercent = baseStats.LK;
var PhysicalCritRatePercent = Math.min(90, baseStats.LK); // critical attack probability are caped at 90%
var Health = baseStats.HP;
var PhysicalDefense = baseStats.DP;
var PhysicalEvasionPercent = baseStats.HV*2.5;
var PhysicalBlockPercent = Math.min(baseStats.HV); // block probability are caped at 90%

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

function isBlocked(accuracyPercent, blockPercent) {
  // Generate a random number between 1 and 100 to simulate a dice roll
  const diceRoll = random * 100;

  // Calculate the hit chance for the enemy
  const hitChance = accuracyPercent - blockPercent;

  // Check if the dice roll is within the hit chance range
  if (diceRoll <= hitChance) {
    return false;
  } else {
    return true;
  }
}

function isDodged(accuracyPercent, evasionPercent) {
  // Generate a random number between 1 and 100 to simulate a dice roll
  const diceRoll = random * 100;

  // Calculate the hit chance for the enemy
  const hitChance = accuracyPercent - evasionPercent;

  // Check if the dice roll is within the hit chance range
  if (diceRoll <= hitChance) {
    return false;
  } else {
    return true;
  }
}

// Calculate DamageTaken on the recieving side
var ElementalResistancePercent = ElementalResistancePercentList[damageObject.elementalType];
var DamageTaken = 0;


if(!damageObject.fixedDamage) {
	switch(damageObject.attackType) {
		case 'physical':
			DamageTaken = (damageObject.totalDamage - (PhysicalDefense*0.75)) * (1-(ElementalResistancePercent/100));

			if(!damageObject.hasCrited) {
				var dodged = isDodged(damageObject.accuracy, PhysicalEvasionPercent);
				var blocked = isBlocked(damageObject.accuracy, PhysicalBlockPercent);

				if(dodged) damageObject.isDodged = true;
				if(!dodged && blocked) damageObject.isBlocked = true;
				if(blocked || dodged) DamageTaken = 0;
			}
		break;
		case 'magic':
			DamageTaken = (damageObject.totalDamage - (MagicDefense*0.9)) * (1-(ElementalResistancePercent/100));

			if(!damageObject.hasCrited) {
				var dodged = isDodged(damageObject.accuracy, MagicEvasionPercent);
				if(dodged) damageObject.isDodged = true;
				if(dodged) DamageTaken = 0;
			}
		break;
		case 'gun':
			DamageTaken = (damageObject.totalDamage - (30 * baseStats.HV)) * (1-(ElementalResistancePercent/100));
			if(!damageObject.hasCrited) {
				var dodged = isDodged(damageObject.accuracy, PhysicalEvasionPercent);
				var blocked = isBlocked(damageObject.accuracy, PhysicalBlockPercent);

				if(dodged) damageObject.isDodged = true;
				if(!dodged && blocked) damageObject.isBlocked = true;
				if(blocked || dodged) DamageTaken = 0;
			}
		break;
	}
}

if(damageObject.hasCrited) {
	damageObject.totalDamage = Math.round(Math.max(1,DamageTaken));
} else {
	damageObject.totalDamage = Math.round(Math.max(0,DamageTaken));
}

runtimeScene.getVariables().get('RecievedDamageObject').fromJSObject(damageObject);
};
gdjs.evtsExt__BaseGameFunctions__CreateRecievedDamageObject.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__BaseGameFunctions__CreateRecievedDamageObject.userFunc0x13f7ec0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__BaseGameFunctions__CreateRecievedDamageObject.func = function(runtimeScene, DamageObject, BaseStats, RandomNumber, parentEventsFunctionContext) {
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
if (argName === "DamageObject") return DamageObject;
if (argName === "BaseStats") return BaseStats;
if (argName === "RandomNumber") return RandomNumber;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__BaseGameFunctions__CreateRecievedDamageObject.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__BaseGameFunctions__CreateRecievedDamageObject.registeredGdjsCallbacks = [];