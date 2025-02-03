
if (typeof gdjs.evtsExt__InterfaceFunctions__UpdateQuest !== "undefined") {
  gdjs.evtsExt__InterfaceFunctions__UpdateQuest.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InterfaceFunctions__UpdateQuest = {};


gdjs.evtsExt__InterfaceFunctions__UpdateQuest.userFunc0x3e37568 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if(!window['questManager']) return;

questManager.updateProgress(
    eventsFunctionContext.getArgument("Type").toString(),
    eventsFunctionContext.getArgument("Amount").valueOf()
);
};
gdjs.evtsExt__InterfaceFunctions__UpdateQuest.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__InterfaceFunctions__UpdateQuest.userFunc0x3e37568(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InterfaceFunctions__UpdateQuest.func = function(runtimeScene, Type, Amount, parentEventsFunctionContext) {
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
if (argName === "Type") return Type;
if (argName === "Amount") return Amount;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InterfaceFunctions__UpdateQuest.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__InterfaceFunctions__UpdateQuest.registeredGdjsCallbacks = [];