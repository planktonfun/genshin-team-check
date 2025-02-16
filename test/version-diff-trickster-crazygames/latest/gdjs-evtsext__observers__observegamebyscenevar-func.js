
if (typeof gdjs.evtsExt__Observers__ObserveGameBySceneVar !== "undefined") {
  gdjs.evtsExt__Observers__ObserveGameBySceneVar.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Observers__ObserveGameBySceneVar = {};


gdjs.evtsExt__Observers__ObserveGameBySceneVar.userFunc0x37f7d38 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const sceneVar = eventsFunctionContext.getArgument("SceneVariable");

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

gdjs.__observers._subject.addObserver(new Observer(sceneVar));
};
gdjs.evtsExt__Observers__ObserveGameBySceneVar.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Observers__ObserveGameBySceneVar.userFunc0x37f7d38(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Observers__ObserveGameBySceneVar.func = function(runtimeScene, SceneVariable, parentEventsFunctionContext) {
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
if (argName === "SceneVariable") return SceneVariable;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Observers__ObserveGameBySceneVar.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Observers__ObserveGameBySceneVar.registeredGdjsCallbacks = [];