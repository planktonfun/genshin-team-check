
if (typeof gdjs.evtsExt__InterfaceFunctions__StartMonsterQuest !== "undefined") {
  gdjs.evtsExt__InterfaceFunctions__StartMonsterQuest.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InterfaceFunctions__StartMonsterQuest = {};
gdjs.evtsExt__InterfaceFunctions__StartMonsterQuest.GDMonsterQuestObjectsObjects1= [];
gdjs.evtsExt__InterfaceFunctions__StartMonsterQuest.GDMonsterQuestObjectsObjects2= [];


gdjs.evtsExt__InterfaceFunctions__StartMonsterQuest.userFunc0x3e0a9c8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
// Create Borders and background
const layer = runtimeScene.getVariables().get('LayerToUse').getAsString();
const camera = gdjs.evtTools.camera;
const x = ((camera.getCameraBorderRight(runtimeScene, layer, 0) - camera.getCameraBorderLeft(runtimeScene, layer, 0))/2) - 150;
const y = ((camera.getCameraBorderBottom(runtimeScene, layer, 0) - camera.getCameraBorderTop(runtimeScene, layer, 0))/2) - 150;

const targetName = eventsFunctionContext.getArgument("TargetName").toString();
const qty = eventsFunctionContext.getArgument("Quantity").valueOf();
const minutes = eventsFunctionContext.getArgument("Minutes").valueOf();
const seconds = eventsFunctionContext.getArgument("Seconds").valueOf();
const xp = eventsFunctionContext.getArgument("RewardXP").valueOf();
const tm = eventsFunctionContext.getArgument("RewardTM").valueOf();

monsterQuest.setTarget(targetName);
monsterQuest.setHunter(qty);
monsterQuest.setTimeLimit(minutes, seconds);
monsterQuest.setRewards(xp, tm);
monsterQuest.render(x,y);

};
gdjs.evtsExt__InterfaceFunctions__StartMonsterQuest.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InterfaceFunctions__StartMonsterQuest.userFunc0x3e0a9c8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__InterfaceFunctions__StartMonsterQuest.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("MonsterQuestObjects"), gdjs.evtsExt__InterfaceFunctions__StartMonsterQuest.GDMonsterQuestObjectsObjects1);
{for(var i = 0, len = gdjs.evtsExt__InterfaceFunctions__StartMonsterQuest.GDMonsterQuestObjectsObjects1.length ;i < len;++i) {
    gdjs.evtsExt__InterfaceFunctions__StartMonsterQuest.GDMonsterQuestObjectsObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().get("LayerToUse").setString("ViewInfoInterface");
}
{ //Subevents
gdjs.evtsExt__InterfaceFunctions__StartMonsterQuest.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__InterfaceFunctions__StartMonsterQuest.func = function(runtimeScene, MonsterQuestObjects, TargetName, Quantity, Minutes, Seconds, RewardXP, RewardTM, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"MonsterQuestObjects": MonsterQuestObjects
},
  _objectArraysMap: {
"MonsterQuestObjects": gdjs.objectsListsToArray(MonsterQuestObjects)
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
if (argName === "TargetName") return TargetName;
if (argName === "Quantity") return Quantity;
if (argName === "Minutes") return Minutes;
if (argName === "Seconds") return Seconds;
if (argName === "RewardXP") return RewardXP;
if (argName === "RewardTM") return RewardTM;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__InterfaceFunctions__StartMonsterQuest.GDMonsterQuestObjectsObjects1.length = 0;
gdjs.evtsExt__InterfaceFunctions__StartMonsterQuest.GDMonsterQuestObjectsObjects2.length = 0;

gdjs.evtsExt__InterfaceFunctions__StartMonsterQuest.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__InterfaceFunctions__StartMonsterQuest.registeredGdjsCallbacks = [];