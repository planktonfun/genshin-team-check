
if (typeof gdjs.evtsExt__Observers__ObserveGameByObject !== "undefined") {
  gdjs.evtsExt__Observers__ObserveGameByObject.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Observers__ObserveGameByObject = {};
gdjs.evtsExt__Observers__ObserveGameByObject.GDObserverObjectObjects1= [];


gdjs.evtsExt__Observers__ObserveGameByObject.userFunc0x3441a18 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const observers = eventsFunctionContext.getObjects('ObserverObject');

observers.forEach(observer=>{
    gdjs.__observers._subject.addObserver(observer._observer);
});
};
gdjs.evtsExt__Observers__ObserveGameByObject.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Observers__ObserveGameByObject.userFunc0x3441a18(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Observers__ObserveGameByObject.func = function(runtimeScene, ObserverObject, Observer, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"ObserverObject": ObserverObject
},
  _objectArraysMap: {
"ObserverObject": gdjs.objectsListsToArray(ObserverObject)
},
  _behaviorNamesMap: {
"Observer": Observer
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

gdjs.evtsExt__Observers__ObserveGameByObject.GDObserverObjectObjects1.length = 0;

gdjs.evtsExt__Observers__ObserveGameByObject.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Observers__ObserveGameByObject.registeredGdjsCallbacks = [];