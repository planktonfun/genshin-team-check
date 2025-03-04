
if (typeof gdjs.evtsExt__Observers__ObserveGameByGame !== "undefined") {
  gdjs.evtsExt__Observers__ObserveGameByGame.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Observers__ObserveGameByGame = {};


gdjs.evtsExt__Observers__ObserveGameByGame.userFunc0x6ca62c0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs.__observers._subject.addObserver(gdjs.__observers._observer);
};
gdjs.evtsExt__Observers__ObserveGameByGame.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Observers__ObserveGameByGame.userFunc0x6ca62c0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Observers__ObserveGameByGame.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__Observers__ObserveGameByGame.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Observers__ObserveGameByGame.registeredGdjsCallbacks = [];