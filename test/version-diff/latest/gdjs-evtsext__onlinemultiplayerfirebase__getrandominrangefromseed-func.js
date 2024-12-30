
if (typeof gdjs.evtsExt__OnlineMultiplayerFirebase__GetRandomInRangeFromSeed !== "undefined") {
  gdjs.evtsExt__OnlineMultiplayerFirebase__GetRandomInRangeFromSeed.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OnlineMultiplayerFirebase__GetRandomInRangeFromSeed = {};


gdjs.evtsExt__OnlineMultiplayerFirebase__GetRandomInRangeFromSeed.userFunc0xeafd78 = function(runtimeScene, eventsFunctionContext) {
"use strict";
var result = randomInRange(
    eventsFunctionContext.getArgument("Min").valueOf(),
    eventsFunctionContext.getArgument("Max").valueOf(),
    eventsFunctionContext.getArgument("Seed").valueOf(),
);

eventsFunctionContext.returnValue = result;


};
gdjs.evtsExt__OnlineMultiplayerFirebase__GetRandomInRangeFromSeed.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__OnlineMultiplayerFirebase__GetRandomInRangeFromSeed.userFunc0xeafd78(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayerFirebase__GetRandomInRangeFromSeed.func = function(runtimeScene, Min, Max, Seed, parentEventsFunctionContext) {
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
if (argName === "Seed") return Seed;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__OnlineMultiplayerFirebase__GetRandomInRangeFromSeed.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__OnlineMultiplayerFirebase__GetRandomInRangeFromSeed.registeredGdjsCallbacks = [];