
if (typeof gdjs.evtsExt__InterfaceFunctions__CompleteQuestByNameArea !== "undefined") {
  gdjs.evtsExt__InterfaceFunctions__CompleteQuestByNameArea.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InterfaceFunctions__CompleteQuestByNameArea = {};


gdjs.evtsExt__InterfaceFunctions__CompleteQuestByNameArea.userFunc0x2421060 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if(!window['questManager']) return;
    
const area = eventsFunctionContext.getArgument('Area');
const npc = eventsFunctionContext.getArgument('NpcName');
const id = area + "_" + npc;

// check for quest individually
if(npcDialogMapEnd.has(id)) {
    let result = npcDialogMapEnd.get(id);

    questManager.checkQuestById(result.id);
}
};
gdjs.evtsExt__InterfaceFunctions__CompleteQuestByNameArea.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__InterfaceFunctions__CompleteQuestByNameArea.userFunc0x2421060(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InterfaceFunctions__CompleteQuestByNameArea.func = function(runtimeScene, NpcName, Area, parentEventsFunctionContext) {
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
if (argName === "NpcName") return NpcName;
if (argName === "Area") return Area;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InterfaceFunctions__CompleteQuestByNameArea.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__InterfaceFunctions__CompleteQuestByNameArea.registeredGdjsCallbacks = [];