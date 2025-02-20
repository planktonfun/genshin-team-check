
if (typeof gdjs.evtsExt__EventListener__ListenEventsOfAnObject !== "undefined") {
  gdjs.evtsExt__EventListener__ListenEventsOfAnObject.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__EventListener__ListenEventsOfAnObject = {};
gdjs.evtsExt__EventListener__ListenEventsOfAnObject.GDObjectObjects1= [];


gdjs.evtsExt__EventListener__ListenEventsOfAnObject.userFunc0x38c59d8 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if(!window.__eventListenerObjectsToBeTracked) {
    window.__eventListenerObjectsToBeTracked = new Set();
}

__eventListenerObjectsToBeTracked.add(objects[0].getName());
};
gdjs.evtsExt__EventListener__ListenEventsOfAnObject.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__ListenEventsOfAnObject.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__EventListener__ListenEventsOfAnObject.GDObjectObjects1);
gdjs.evtsExt__EventListener__ListenEventsOfAnObject.userFunc0x38c59d8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__EventListener__ListenEventsOfAnObject.func = function(runtimeScene, Object, Parameter, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
"Parameter": Parameter
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

gdjs.evtsExt__EventListener__ListenEventsOfAnObject.GDObjectObjects1.length = 0;

gdjs.evtsExt__EventListener__ListenEventsOfAnObject.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__EventListener__ListenEventsOfAnObject.registeredGdjsCallbacks = [];