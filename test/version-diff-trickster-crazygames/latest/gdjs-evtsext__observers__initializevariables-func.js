
if (typeof gdjs.evtsExt__Observers__InitializeVariables !== "undefined") {
  gdjs.evtsExt__Observers__InitializeVariables.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Observers__InitializeVariables = {};


gdjs.evtsExt__Observers__InitializeVariables.userFunc0x3742598 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if(gdjs.__observers) {
    return;
}

// Observer
class Observer {
  constructor() {
    this.data = {
      Notified: false,
      NotifiedDataString: '',
      NotifiedDataNumber: 0,
      SubjectId: '',
    };
    this.logs=[];
    this.latest = null;
  }

  update(event, data, object, subjectId) {
    this.data.Notified = true;
    this.logs.push({ event, data, object, subjectId });
  }

  consumeData() {
    this.latest = this.logs.shift(); //this.logs.pop();
    const latest = this.latest;

    this.data.NotifiedEvent = latest.event;
    this.data.NotifiedDataString = latest.data;
    this.data.NotifiedDataNumber = latest.data;
    this.data.SubjectId = latest.subjectId;

    if(latest.object) {
      this.data.X = latest.object.getX();
      this.data.Y = latest.object.getY();
      this.data.Z = latest.object.getZOrder();
    }
    
    if(this.logs.length == 0) {
      this.data.Notified = false;
    }
  }
}

// Subject class
class Subject {
  constructor() {
    this.subjectId = Date.now() + "_" + Math.floor(Math.random()*10000);
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

  notifyObservers(event, data, object=null) {
    this.observers.forEach(observer => observer.update(event, data, object, this.subjectId));
  }
}

gdjs.__observers = {};
gdjs.__observers._subject = new Subject();
gdjs.__observers._observer = new Observer();
};
gdjs.evtsExt__Observers__InitializeVariables.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Observers__InitializeVariables.userFunc0x3742598(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Observers__InitializeVariables.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__Observers__InitializeVariables.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Observers__InitializeVariables.registeredGdjsCallbacks = [];