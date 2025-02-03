
if (typeof gdjs.evtsExt__Observers__ObserveObjectBySceneVar !== "undefined") {
  gdjs.evtsExt__Observers__ObserveObjectBySceneVar.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Observers__ObserveObjectBySceneVar = {};
gdjs.evtsExt__Observers__ObserveObjectBySceneVar.GDSubjectObjectObjects1= [];


gdjs.evtsExt__Observers__ObserveObjectBySceneVar.userFunc0x444b3c0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const sceneVar = eventsFunctionContext.getArgument("SceneVariable");
const subjects = eventsFunctionContext.getObjects('SubjectObject');

// Observer
class Observer {
  constructor(sceneVariable) {
    this.sceneVariable = sceneVariable;
    this.content = {
      NotificationEvent: '',
      NotificationMessage: '',
      Notified: false,
      NotificationSubjectId: '',
    };
    this.sceneVariable.fromJSObject(this.content);
  }

  update(event, message, object, subjectId) {
    this.content = {
      NotificationEvent: event,
      NotificationMessage: message,
      Notified: true, // manually make this false after reading the data
      NotificationSubjectId: subjectId,
    };
    this.sceneVariable.fromJSObject(this.content);
  }
}

subjects.forEach(subject=>{
    subject._subject.addObserver(new Observer(sceneVar));
});
};
gdjs.evtsExt__Observers__ObserveObjectBySceneVar.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Observers__ObserveObjectBySceneVar.userFunc0x444b3c0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Observers__ObserveObjectBySceneVar.func = function(runtimeScene, SceneVariable, SubjectObject, Subject, parentEventsFunctionContext) {
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
if (argName === "SceneVariable") return SceneVariable;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Observers__ObserveObjectBySceneVar.GDSubjectObjectObjects1.length = 0;

gdjs.evtsExt__Observers__ObserveObjectBySceneVar.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Observers__ObserveObjectBySceneVar.registeredGdjsCallbacks = [];