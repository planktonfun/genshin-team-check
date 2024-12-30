
if (typeof gdjs.evtsExt__BaseGameFunctions__CreateOnOffSkillDamageObject !== "undefined") {
  gdjs.evtsExt__BaseGameFunctions__CreateOnOffSkillDamageObject.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BaseGameFunctions__CreateOnOffSkillDamageObject = {};


gdjs.evtsExt__BaseGameFunctions__CreateOnOffSkillDamageObject.userFunc0x126f030 = function(runtimeScene, eventsFunctionContext) {
"use strict";
function getOnOffSkillDamage(skillName, baseStats, skillStats) {
	switch(skillName) {
		case "WarmUp":
		case "warm_up":
			return 85;
		case "PowerBlow":
		case "power_blow":
			return baseStats.AP*skillStats.multiplier;
		case "GalderThrower":
		case "galder_thrower":
			return skillStats.multiplier;
		case "FinalBlow":
		case "final_blow":
			return (baseStats.AP + ((baseStats.HP - baseStats.remainingHP)/10)) * skillStats.multiplier;
		case "StoneShower":
		case "stone_shower":
			return 75;
		case "StoneStrike":
		case "stone_strike":
			return (baseStats.DA+1)*skillStats.multiplier;
		case "ShurikenMaster":
		case "shuriken_master":
			return ((baseStats.DA+(baseStats.throwAP/10))*skillStats.multiplier)-1;
		case "MagicalSoul":
		case "magical_soul":
			return Math.min(520, baseStats.AP+(220 + (baseStats.level*10)))*(baseStats.MA/100);
		case "ManaArrow":
		case "mana_arrow":
			return baseStats.MA*skillStats.multiplier;
		case "Cure":
		case "cure":
			return baseStats.HP*skillStats.multiplier;
		case "ManaRing":
		case "mana_ring":
			return baseStats.MA*skillStats.multiplier/100;
		case "ManaStorm":
		case "mana_storm":
			return baseStats.MA*skillStats.multiplier;
		case "SteelPunch":
		case "steel_punch":
			return 100;
		case "Shockwave":
		case "shock_wave":
			return baseStats.AP*skillStats.multiplier;
		case "BurningRave":
		case "burning_rave":
			return baseStats.AP*skillStats.multiplier;
		case "UpperSmash":
		case "upper_smash":
			return baseStats.AP*skillStats.multiplier;
		case "TornadoBomb":
		case "tornado_bomb":
			return baseStats.AP+skillStats.multiplier;
		default:
			return 1;
	}
}

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
	numberOfAttacks: 1
};

var skillName = eventsFunctionContext.getArgument("SkillName").toString();
var baseStats = eventsFunctionContext.getArgument("BaseStats").toJSObject();
var equipment = eventsFunctionContext.getArgument("Equipment").toJSObject();
var skillLevel = eventsFunctionContext.getArgument("Level").valueOf();
var SkillProperties = runtimeScene.getVariables().get('SkillProperties').toJSObject();

if(SkillProperties[skillName] == undefined) {
	console.log("You missed one! please implement skill "+ skillName);
	return damageObject;
}

var skillStats = {
	multiplier: SkillProperties[skillName].multiplier[skillLevel-1]
};

// calculate parameters based on based stats
var PhysicalAccuracyPercent = baseStats.AC +52;
var MagicAccuracyPercent = baseStats.LK + 50;
var GunAccuracyPercent = baseStats.LK + 50;

switch(damageObject.attackType) {
	case 'physical':
		damageObject.accuracy = PhysicalAccuracyPercent;
	break;
	case 'magic':
		damageObject.accuracy = MagicAccuracyPercent;
	break;
	case 'gun':
		damageObject.accuracy = GunAccuracyPercent;
	break;
}

damageObject.totalDamage = getOnOffSkillDamage(skillName, baseStats, skillStats);
runtimeScene.getVariables().get('DamageObject').fromJSObject(damageObject);

};
gdjs.evtsExt__BaseGameFunctions__CreateOnOffSkillDamageObject.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__BaseGameFunctions__CreateOnOffSkillDamageObject.userFunc0x126f030(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__BaseGameFunctions__CreateOnOffSkillDamageObject.func = function(runtimeScene, SkillName, Level, BaseStats, Equipment, AttackType, parentEventsFunctionContext) {
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
if (argName === "SkillName") return SkillName;
if (argName === "Level") return Level;
if (argName === "BaseStats") return BaseStats;
if (argName === "Equipment") return Equipment;
if (argName === "AttackType") return AttackType;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__BaseGameFunctions__CreateOnOffSkillDamageObject.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__BaseGameFunctions__CreateOnOffSkillDamageObject.registeredGdjsCallbacks = [];