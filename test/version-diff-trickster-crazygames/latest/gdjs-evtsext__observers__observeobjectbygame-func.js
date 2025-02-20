
if (typeof gdjs.evtsExt__Observers__ObserveObjectByGame !== "undefined") {
  gdjs.evtsExt__Observers__ObserveObjectByGame.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Observers__ObserveObjectByGame = {};
gdjs.evtsExt__Observers__ObserveObjectByGame.GDSubjectObjectObjects1= [];


gdjs.evtsExt__Observers__ObserveObjectByGame.userFunc0x12728b8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const subjects = eventsFunctionContext.getObjects('SubjectObject');

subjects.forEach(subject=>{
  subject._subject.addObserver(gdjs.__observers._observer);
});
};
gdjs.evtsExt__Observers__ObserveObjectByGame.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Observers__ObserveObjectByGame.userFunc0x12728b8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Observers__ObserveObjectByGame.func = function(runtimeScene, SubjectObject, Subject, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"SubjectObject": SubjectObject
},
  _objectArraysMap: {
"SubjectObject": gdjs.objectsListsToArray(SubjectObject)
},
  _behaviorNamesMap: {
"Subject": Subject
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

gdjs.evtsExt__Observers__ObserveObjectByGame.GDSubjectObjectObjects1.length = 0;

gdjs.evtsExt__Observers__ObserveObjectByGame.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Observers__ObserveObjectByGame.registeredGdjsCallbacks = [];