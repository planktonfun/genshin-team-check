
if (typeof gdjs.evtsExt__Observers__ObserveSceneVarByGame !== "undefined") {
  gdjs.evtsExt__Observers__ObserveSceneVarByGame.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Observers__ObserveSceneVarByGame = {};


gdjs.evtsExt__Observers__ObserveSceneVarByGame.userFunc0x2076918 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const sceneVar = eventsFunctionContext.getArgument("SceneVariable");

// Subject class
class Subject {
  constructor(sceneVar) {
    this.sceneVar = sceneVar;
    this.observers = [];
  }

  addObserver(observer) {
    if (!this.observers.includes(observer)) { // Prevent duplicates
      this.observers.push(observer);
    }
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers(event, data) {
    this.observers.forEach(observer => observer.update(event, data));
  }
}

const subject = new Subject(sceneVar);

subject.addObserver(gdjs.__observers._observer);

// Save a reference to the original setString method
const originalSetString = sceneVar.setString;
const originalSetNumber = sceneVar.setNumber;
const originalSetBoolean = sceneVar.setBoolean;
const originalFromJSObject = sceneVar.fromJSObject;

// Override the setString method
sceneVar.setString = function(...args) {
  subject.notifyObservers(`text-update`, args[0]);

  // Call the original method with dynamic arguments
  originalSetString.apply(this, args);
};

// Override the setNumber method
sceneVar.setNumber = function(...args) {
  subject.notifyObservers(`number-update`, args[0]);

  // Call the original method with dynamic arguments
  originalSetNumber.apply(this, args);
};

// Override the setNumber method
sceneVar.setBoolean = function(...args) {
  subject.notifyObservers(`boolean-update`, args[0]);

  // Call the original method with dynamic arguments
  originalSetBoolean.apply(this, args);
};

// Override the setNumber method
sceneVar.fromJSObject = function(...args) {
  subject.notifyObservers(`object-update`, args[0]);

  // Call the original method with dynamic arguments
  originalFromJSObject.apply(this, args);
};


};
gdjs.evtsExt__Observers__ObserveSceneVarByGame.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Observers__ObserveSceneVarByGame.userFunc0x2076918(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Observers__ObserveSceneVarByGame.func = function(runtimeScene, SceneVariable, parentEventsFunctionContext) {
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


gdjs.evtsExt__Observers__ObserveSceneVarByGame.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Observers__ObserveSceneVarByGame.registeredGdjsCallbacks = [];