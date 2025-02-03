
if (typeof gdjs.evtsExt__DynamicResource__InitializeVariables !== "undefined") {
  gdjs.evtsExt__DynamicResource__InitializeVariables.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DynamicResource__InitializeVariables = {};


gdjs.evtsExt__DynamicResource__InitializeVariables.userFunc0x2ab4b08 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if(!gdjs.__dynamicResources) {
    gdjs.__dynamicResources = {};
    gdjs.__dynamicResources.items = [];
    gdjs.__dynamicResources.mobs = {};
    gdjs.__dynamicResources.characters = {};
    gdjs.__dynamicResources.characterIcons = [];
    gdjs.__dynamicResources.npcs = {};
    gdjs.__dynamicResources.npcAvatars = [];
    gdjs.__dynamicResources.canvasCollection = new Map();
}
};
gdjs.evtsExt__DynamicResource__InitializeVariables.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DynamicResource__InitializeVariables.userFunc0x2ab4b08(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DynamicResource__InitializeVariables.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__DynamicResource__InitializeVariables.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__DynamicResource__InitializeVariables.registeredGdjsCallbacks = [];