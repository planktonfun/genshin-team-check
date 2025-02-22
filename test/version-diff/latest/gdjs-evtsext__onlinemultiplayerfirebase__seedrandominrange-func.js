
if (typeof gdjs.evtsExt__OnlineMultiplayerFirebase__SeedRandomInRange !== "undefined") {
  gdjs.evtsExt__OnlineMultiplayerFirebase__SeedRandomInRange.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OnlineMultiplayerFirebase__SeedRandomInRange = {};


gdjs.evtsExt__OnlineMultiplayerFirebase__SeedRandomInRange.userFunc0x1072d08 = function(runtimeScene, eventsFunctionContext) {
"use strict";

const Min = eventsFunctionContext.getArgument("Min").valueOf();
const Max = eventsFunctionContext.getArgument("Max").valueOf();

eventsFunctionContext.returnValue = window.timestampDisplay.randomInRange(Min,Max);
};
gdjs.evtsExt__OnlineMultiplayerFirebase__SeedRandomInRange.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__OnlineMultiplayerFirebase__SeedRandomInRange.userFunc0x1072d08(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayerFirebase__SeedRandomInRange.func = function(runtimeScene, Min, Max, parentEventsFunctionContext) {
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
if (argName === "Min") return Min;
if (argName === "Max") return Max;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__OnlineMultiplayerFirebase__SeedRandomInRange.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__OnlineMultiplayerFirebase__SeedRandomInRange.registeredGdjsCallbacks = [];