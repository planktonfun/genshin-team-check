
if (typeof gdjs.evtsExt__Observers__ObserveSceneVarBySceneVar !== "undefined") {
  gdjs.evtsExt__Observers__ObserveSceneVarBySceneVar.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Observers__ObserveSceneVarBySceneVar = {};


gdjs.evtsExt__Observers__ObserveSceneVarBySceneVar.userFunc0x37f7d38 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const ObserverVariable = eventsFunctionContext.getArgument("ObserverVariable");
const SubjectVariable = eventsFunctionContext.getArgument('SubjectVariable');

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

// Observer
class Observer {
  constructor(sceneVariable) {
    this.sceneVariable = sceneVariable;
    this.content = {
      NotificationEvent: '',
      NotificationMessage: '',
      Notified: false,
    };
    this.sceneVariable.fromJSObject(this.content);
  }

  update(event, data) {
    this.content.Notified=true; // manually make this false after reading the data
    this.content.NotificationEvent=event;
    this.content.NotificationMessage=data;
    this.sceneVariable.fromJSObject(this.content);
  }
}

const subject = new Subject(SubjectVariable);

subject.addObserver(new Observer(ObserverVariable));

// Save a reference to the original setString method
const originalSetString = SubjectVariable.setString;
const originalSetNumber = SubjectVariable.setNumber;
const originalSetBoolean = SubjectVariable.setBoolean;
const originalFromJSObject = SubjectVariable.fromJSObject;

// Override the setString method
SubjectVariable.setString = function(...args) {
  subject.notifyObservers(`text-update`, args[0]);

  // Call the original method with dynamic arguments
  originalSetString.apply(this, args);
};

// Override the setNumber method
SubjectVariable.setNumber = function(...args) {
  subject.notifyObservers(`number-update`, args[0]);

  // Call the original method with dynamic arguments
  originalSetNumber.apply(this, args);
};

// Override the setNumber method
SubjectVariable.setBoolean = function(...args) {
  subject.notifyObservers(`boolean-update`, args[0]);

  // Call the original method with dynamic arguments
  originalSetBoolean.apply(this, args);
};

// Override the setNumber method
SubjectVariable.fromJSObject = function(...args) {
  subject.notifyObservers(`object-update`, args[0]);

  // Call the original method with dynamic arguments
  originalFromJSObject.apply(this, args);
};


};
gdjs.evtsExt__Observers__ObserveSceneVarBySceneVar.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Observers__ObserveSceneVarBySceneVar.userFunc0x37f7d38(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Observers__ObserveSceneVarBySceneVar.func = function(runtimeScene, ObserverVariable, SubjectVariable, parentEventsFunctionContext) {
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
if (argName === "ObserverVariable") return ObserverVariable;
if (argName === "SubjectVariable") return SubjectVariable;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Observers__ObserveSceneVarBySceneVar.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Observers__ObserveSceneVarBySceneVar.registeredGdjsCallbacks = [];