
gdjs.evtsExt__Observers__Subject = gdjs.evtsExt__Observers__Subject || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__Observers__Subject.Subject = class Subject extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Observers__Subject.Subject.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.SubjectId = "";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.SubjectId !== newBehaviorData.SubjectId)
      this._behaviorData.SubjectId = newBehaviorData.SubjectId;

    return true;
  }

  // Properties:
  
  _getSubjectId() {
    return this._behaviorData.SubjectId !== undefined ? this._behaviorData.SubjectId : "";
  }
  _setSubjectId(newValue) {
    this._behaviorData.SubjectId = newValue;
  }
}

/**
 * Shared data generated from 
 */
gdjs.evtsExt__Observers__Subject.Subject.SharedData = class SubjectSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Observers__Subject.Subject.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Observers_SubjectSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Observers_SubjectSharedData = new gdjs.evtsExt__Observers__Subject.Subject.SharedData(
      initialData
    );
  }
  return instanceContainer._Observers_SubjectSharedData;
}

// Methods:
gdjs.evtsExt__Observers__Subject.Subject.prototype.onCreatedContext = {};
gdjs.evtsExt__Observers__Subject.Subject.prototype.onCreatedContext.GDObjectObjects1= [];


gdjs.evtsExt__Observers__Subject.Subject.prototype.onCreatedContext.userFunc0x2084d68 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
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

  notifyObservers(event, data, object) {
    // console.log('observers: ', this.observers.length);
    this.observers.forEach(observer => observer.update(event, data, object, this.subjectId));
  }
}

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const object = objects[0];
const behavior = object.getBehavior(behaviorName);

object._subject = new Subject();
behavior._behaviorData.SubjectId = object._subject.subjectId;

};
gdjs.evtsExt__Observers__Subject.Subject.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Observers__Subject.Subject.prototype.onCreatedContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Observers__Subject.Subject.prototype.onCreatedContext.GDObjectObjects1);
gdjs.evtsExt__Observers__Subject.Subject.prototype.onCreatedContext.userFunc0x2084d68(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Observers__Subject.Subject.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Observers__Subject.Subject.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Observers__Subject.Subject.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Observers__Subject.Subject.prototype.onDestroyContext = {};
gdjs.evtsExt__Observers__Subject.Subject.prototype.onDestroyContext.GDObjectObjects1= [];
gdjs.evtsExt__Observers__Subject.Subject.prototype.onDestroyContext.GDObjectObjects2= [];


gdjs.evtsExt__Observers__Subject.Subject.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Observers__Subject.Subject.prototype.onDestroyContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Observers__Subject.Subject.prototype.onDestroyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Observers__Subject.Subject.prototype.onDestroyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).NotifyString("I am deleted", "deleted", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__Observers__Subject.Subject.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Observers__Subject.Subject.prototype.onDestroyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Observers__Subject.Subject.prototype.onDestroyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Observers__Subject.Subject.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Observers__Subject.Subject.prototype.NotifyStringContext = {};
gdjs.evtsExt__Observers__Subject.Subject.prototype.NotifyStringContext.GDObjectObjects1= [];


gdjs.evtsExt__Observers__Subject.Subject.prototype.NotifyStringContext.userFunc0x2084d68 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const obj = objects[0];
obj._subject.notifyObservers(
    eventsFunctionContext.getArgument("Event").toString(),
    eventsFunctionContext.getArgument("Message").toString(),
    obj
);
};
gdjs.evtsExt__Observers__Subject.Subject.prototype.NotifyStringContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Observers__Subject.Subject.prototype.NotifyStringContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Observers__Subject.Subject.prototype.NotifyStringContext.GDObjectObjects1);
gdjs.evtsExt__Observers__Subject.Subject.prototype.NotifyStringContext.userFunc0x2084d68(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Observers__Subject.Subject.prototype.NotifyString = function(Message, Event, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Message") return Message;
if (argName === "Event") return Event;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Observers__Subject.Subject.prototype.NotifyStringContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Observers__Subject.Subject.prototype.NotifyStringContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Observers__Subject.Subject.prototype.NotifyNumberContext = {};
gdjs.evtsExt__Observers__Subject.Subject.prototype.NotifyNumberContext.GDObjectObjects1= [];


gdjs.evtsExt__Observers__Subject.Subject.prototype.NotifyNumberContext.userFunc0x2084d68 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const obj = objects[0];
obj._subject.notifyObservers(
    eventsFunctionContext.getArgument("Event").toString(),
    eventsFunctionContext.getArgument("Message").valueOf(),
    obj
);
};
gdjs.evtsExt__Observers__Subject.Subject.prototype.NotifyNumberContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Observers__Subject.Subject.prototype.NotifyNumberContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Observers__Subject.Subject.prototype.NotifyNumberContext.GDObjectObjects1);
gdjs.evtsExt__Observers__Subject.Subject.prototype.NotifyNumberContext.userFunc0x2084d68(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Observers__Subject.Subject.prototype.NotifyNumber = function(Message, Event, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Message") return Message;
if (argName === "Event") return Event;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Observers__Subject.Subject.prototype.NotifyNumberContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Observers__Subject.Subject.prototype.NotifyNumberContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Observers__Subject.Subject.prototype.SubjectIdContext = {};
gdjs.evtsExt__Observers__Subject.Subject.prototype.SubjectIdContext.GDObjectObjects1= [];
gdjs.evtsExt__Observers__Subject.Subject.prototype.SubjectIdContext.GDObjectObjects2= [];


gdjs.evtsExt__Observers__Subject.Subject.prototype.SubjectIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Observers__Subject.Subject.prototype.SubjectIdContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Observers__Subject.Subject.prototype.SubjectIdContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__Observers__Subject.Subject.prototype.SubjectIdContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSubjectId()); }}}

}


};

gdjs.evtsExt__Observers__Subject.Subject.prototype.SubjectId = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Observers__Subject.Subject.prototype.SubjectIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Observers__Subject.Subject.prototype.SubjectIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Observers__Subject.Subject.prototype.SubjectIdContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Observers__Subject.Subject.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Observers::Subject", gdjs.evtsExt__Observers__Subject.Subject);
