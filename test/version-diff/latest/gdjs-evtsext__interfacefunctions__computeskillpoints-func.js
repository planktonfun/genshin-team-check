
if (typeof gdjs.evtsExt__InterfaceFunctions__ComputeSkillPoints !== "undefined") {
  gdjs.evtsExt__InterfaceFunctions__ComputeSkillPoints.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InterfaceFunctions__ComputeSkillPoints = {};


gdjs.evtsExt__InterfaceFunctions__ComputeSkillPoints.userFunc0x1180948 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const skillInfoObject = runtimeScene.getVariables().get('skillInfo').toJSObject();
const skillDescriptions = {};

for(var i in skillInfoObject) {
    skillInfoObject[i]["Title"] = skillInfoObject[i]["Title"].replace(" Card", "");
    skillDescriptions[i.replace('_skill_card', '').replace('_card', '')] = skillInfoObject[i];
}

let skillLevels = runtimeScene.getGame().getVariables().get('SkillLevels').toJSObject();
const skillLearned = runtimeScene.getGame().getVariables().get('LearnedSkills').toJSObject();
const TMLv = runtimeScene.getGame().getVariables().get('Indicators').getChild('TmLv').getAsNumber();

var sumOfLevels=0;

skillLearned.filter(item => skillDescriptions[item]).forEach(skillName=>{
    if(!skillLevels[skillName]) skillLevels[skillName] = 1;
    sumOfLevels += skillLevels[skillName];
});
runtimeScene.getGame().getVariables().get('SkillLevels').fromJSObject(skillLevels);
const TMPoints = TMLv - sumOfLevels;

eventsFunctionContext.returnValue = TMPoints;
};
gdjs.evtsExt__InterfaceFunctions__ComputeSkillPoints.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InterfaceFunctions__ComputeSkillPoints.userFunc0x1180948(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InterfaceFunctions__ComputeSkillPoints.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InterfaceFunctions__ComputeSkillPoints.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__InterfaceFunctions__ComputeSkillPoints.registeredGdjsCallbacks = [];