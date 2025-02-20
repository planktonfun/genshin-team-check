
gdjs.evtsExt__Observers__Observer = gdjs.evtsExt__Observers__Observer || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__Observers__Observer.Observer = class Observer extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Observers__Observer.Observer.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Notified = false;
    this._behaviorData.NotifiedDataString = "";
    this._behaviorData.NotifiedEvent = "";
    this._behaviorData.X = Number("") || 0;
    this._behaviorData.Y = Number("") || 0;
    this._behaviorData.Z = Number("") || 0;
    this._behaviorData.NotifiedDataNumber = Number("") || 0;
    this._behaviorData.SubjectId = "";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Notified !== newBehaviorData.Notified)
      this._behaviorData.Notified = newBehaviorData.Notified;
    if (oldBehaviorData.NotifiedDataString !== newBehaviorData.NotifiedDataString)
      this._behaviorData.NotifiedDataString = newBehaviorData.NotifiedDataString;
    if (oldBehaviorData.NotifiedEvent !== newBehaviorData.NotifiedEvent)
      this._behaviorData.NotifiedEvent = newBehaviorData.NotifiedEvent;
    if (oldBehaviorData.X !== newBehaviorData.X)
      this._behaviorData.X = newBehaviorData.X;
    if (oldBehaviorData.Y !== newBehaviorData.Y)
      this._behaviorData.Y = newBehaviorData.Y;
    if (oldBehaviorData.Z !== newBehaviorData.Z)
      this._behaviorData.Z = newBehaviorData.Z;
    if (oldBehaviorData.NotifiedDataNumber !== newBehaviorData.NotifiedDataNumber)
      this._behaviorData.NotifiedDataNumber = newBehaviorData.NotifiedDataNumber;
    if (oldBehaviorData.SubjectId !== newBehaviorData.SubjectId)
      this._behaviorData.SubjectId = newBehaviorData.SubjectId;

    return true;
  }

  // Properties:
  
  _getNotified() {
    return this._behaviorData.Notified !== undefined ? this._behaviorData.Notified : false;
  }
  _setNotified(newValue) {
    this._behaviorData.Notified = newValue;
  }
  _toggleNotified() {
    this._setNotified(!this._getNotified());
  }
  _getNotifiedDataString() {
    return this._behaviorData.NotifiedDataString !== undefined ? this._behaviorData.NotifiedDataString : "";
  }
  _setNotifiedDataString(newValue) {
    this._behaviorData.NotifiedDataString = newValue;
  }
  _getNotifiedEvent() {
    return this._behaviorData.NotifiedEvent !== undefined ? this._behaviorData.NotifiedEvent : "";
  }
  _setNotifiedEvent(newValue) {
    this._behaviorData.NotifiedEvent = newValue;
  }
  _getX() {
    return this._behaviorData.X !== undefined ? this._behaviorData.X : Number("") || 0;
  }
  _setX(newValue) {
    this._behaviorData.X = newValue;
  }
  _getY() {
    return this._behaviorData.Y !== undefined ? this._behaviorData.Y : Number("") || 0;
  }
  _setY(newValue) {
    this._behaviorData.Y = newValue;
  }
  _getZ() {
    return this._behaviorData.Z !== undefined ? this._behaviorData.Z : Number("") || 0;
  }
  _setZ(newValue) {
    this._behaviorData.Z = newValue;
  }
  _getNotifiedDataNumber() {
    return this._behaviorData.NotifiedDataNumber !== undefined ? this._behaviorData.NotifiedDataNumber : Number("") || 0;
  }
  _setNotifiedDataNumber(newValue) {
    this._behaviorData.NotifiedDataNumber = newValue;
  }
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
gdjs.evtsExt__Observers__Observer.Observer.SharedData = class ObserverSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Observers__Observer.Observer.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Observers_ObserverSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Observers_ObserverSharedData = new gdjs.evtsExt__Observers__Observer.Observer.SharedData(
      initialData
    );
  }
  return instanceContainer._Observers_ObserverSharedData;
}

// Methods:
gdjs.evtsExt__Observers__Observer.Observer.prototype.onCreatedContext = {};
gdjs.evtsExt__Observers__Observer.Observer.prototype.onCreatedContext.GDObjectObjects1= [];


gdjs.evtsExt__Observers__Observer.Observer.prototype.onCreatedContext.userFunc0x2071118 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// Observer
class Observer {
  constructor(behavior, x, y) {
    this.behavior = behavior;
    this.logs=[];
    this.latest = null;
  }

  update(event, data, object, subjectId) {
    this.behavior._behaviorData.Notified = true;
    this.logs.push({ event, data, object, subjectId }); // stack it, so its not limited to one notification per frame
  }

  consumeData() {
    this.latest = this.logs.shift(); //this.logs.pop();
    const latest = this.latest;

    this.behavior._behaviorData.NotifiedEvent = latest.event;
    this.behavior._behaviorData.NotifiedDataString = latest.data;
    this.behavior._behaviorData.NotifiedDataNumber = latest.data;
    this.behavior._behaviorData.SubjectId = latest.subjectId;
    

    if(latest.object) {
      this.behavior._behaviorData.X = latest.object.getX();
      this.behavior._behaviorData.Y = latest.object.getY();
      this.behavior._behaviorData.Z = latest.object.getZOrder();
    }
    
    if(this.logs.length == 0) {
      this.behavior._behaviorData.Notified = false;
    }
  }
}

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const object = objects[0];
const behavior = object.getBehavior(behaviorName);

object._observer = new Observer(behavior, object.getX(), object.getY());
};
gdjs.evtsExt__Observers__Observer.Observer.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Observers__Observer.Observer.prototype.onCreatedContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Observers__Observer.Observer.prototype.onCreatedContext.GDObjectObjects1);
gdjs.evtsExt__Observers__Observer.Observer.prototype.onCreatedContext.userFunc0x2071118(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Observers__Observer.Observer.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Observers__Observer.Observer.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Observers__Observer.Observer.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedContext = {};
gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedContext.GDObjectObjects1= [];
gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedContext.GDObjectObjects2= [];


gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ConsumeData((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNotified() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedContext.GDObjectObjects1[k] = gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}
{ //Subevents
gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Observers__Observer.Observer.prototype.Notified = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedContext.eventsList1(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Observers__Observer.Observer.prototype.ConsumeDataContext = {};
gdjs.evtsExt__Observers__Observer.Observer.prototype.ConsumeDataContext.GDObjectObjects1= [];


gdjs.evtsExt__Observers__Observer.Observer.prototype.ConsumeDataContext.userFunc0x2071b98 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];

object._observer.consumeData();
};
gdjs.evtsExt__Observers__Observer.Observer.prototype.ConsumeDataContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Observers__Observer.Observer.prototype.ConsumeDataContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Observers__Observer.Observer.prototype.ConsumeDataContext.GDObjectObjects1);
gdjs.evtsExt__Observers__Observer.Observer.prototype.ConsumeDataContext.userFunc0x2071b98(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Observers__Observer.Observer.prototype.ConsumeData = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Observers__Observer.Observer.prototype.ConsumeDataContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Observers__Observer.Observer.prototype.ConsumeDataContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedEventContext = {};
gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedEventContext.GDObjectObjects1= [];
gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedEventContext.GDObjectObjects2= [];


gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedEventContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedEventContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedEventContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedEventContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNotifiedEvent()); }}}

}


};

gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedEvent = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedEventContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedEventContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedEventContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Observers__Observer.Observer.prototype.YContext = {};
gdjs.evtsExt__Observers__Observer.Observer.prototype.YContext.GDObjectObjects1= [];
gdjs.evtsExt__Observers__Observer.Observer.prototype.YContext.GDObjectObjects2= [];


gdjs.evtsExt__Observers__Observer.Observer.prototype.YContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Observers__Observer.Observer.prototype.YContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Observers__Observer.Observer.prototype.YContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Observers__Observer.Observer.prototype.YContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getY()); }}}

}


};

gdjs.evtsExt__Observers__Observer.Observer.prototype.Y = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Observers__Observer.Observer.prototype.YContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Observers__Observer.Observer.prototype.YContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Observers__Observer.Observer.prototype.YContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Observers__Observer.Observer.prototype.PointXContext = {};
gdjs.evtsExt__Observers__Observer.Observer.prototype.PointXContext.GDObjectObjects1= [];


gdjs.evtsExt__Observers__Observer.Observer.prototype.PointXContext.userFunc0x2071118 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const pointName = eventsFunctionContext.getArgument("PointName").toString();

eventsFunctionContext.returnValue = objects[0]._observer.latest.object.getPointX(pointName);
};
gdjs.evtsExt__Observers__Observer.Observer.prototype.PointXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Observers__Observer.Observer.prototype.PointXContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Observers__Observer.Observer.prototype.PointXContext.GDObjectObjects1);
gdjs.evtsExt__Observers__Observer.Observer.prototype.PointXContext.userFunc0x2071118(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Observers__Observer.Observer.prototype.PointX = function(PointName, parentEventsFunctionContext) {

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
if (argName === "PointName") return PointName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Observers__Observer.Observer.prototype.PointXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Observers__Observer.Observer.prototype.PointXContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Observers__Observer.Observer.prototype.PointYContext = {};
gdjs.evtsExt__Observers__Observer.Observer.prototype.PointYContext.GDObjectObjects1= [];


gdjs.evtsExt__Observers__Observer.Observer.prototype.PointYContext.userFunc0x2071118 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const pointName = eventsFunctionContext.getArgument("PointName").toString();

eventsFunctionContext.returnValue = objects[0]._observer.latest.object.getPointY(pointName);
};
gdjs.evtsExt__Observers__Observer.Observer.prototype.PointYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Observers__Observer.Observer.prototype.PointYContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Observers__Observer.Observer.prototype.PointYContext.GDObjectObjects1);
gdjs.evtsExt__Observers__Observer.Observer.prototype.PointYContext.userFunc0x2071118(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Observers__Observer.Observer.prototype.PointY = function(PointName, parentEventsFunctionContext) {

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
if (argName === "PointName") return PointName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Observers__Observer.Observer.prototype.PointYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Observers__Observer.Observer.prototype.PointYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Observers__Observer.Observer.prototype.XContext = {};
gdjs.evtsExt__Observers__Observer.Observer.prototype.XContext.GDObjectObjects1= [];
gdjs.evtsExt__Observers__Observer.Observer.prototype.XContext.GDObjectObjects2= [];


gdjs.evtsExt__Observers__Observer.Observer.prototype.XContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Observers__Observer.Observer.prototype.XContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Observers__Observer.Observer.prototype.XContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Observers__Observer.Observer.prototype.XContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getX()); }}}

}


};

gdjs.evtsExt__Observers__Observer.Observer.prototype.X = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Observers__Observer.Observer.prototype.XContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Observers__Observer.Observer.prototype.XContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Observers__Observer.Observer.prototype.XContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Observers__Observer.Observer.prototype.ZContext = {};
gdjs.evtsExt__Observers__Observer.Observer.prototype.ZContext.GDObjectObjects1= [];
gdjs.evtsExt__Observers__Observer.Observer.prototype.ZContext.GDObjectObjects2= [];


gdjs.evtsExt__Observers__Observer.Observer.prototype.ZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Observers__Observer.Observer.prototype.ZContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Observers__Observer.Observer.prototype.ZContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Observers__Observer.Observer.prototype.ZContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getZ()); }}}

}


};

gdjs.evtsExt__Observers__Observer.Observer.prototype.Z = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Observers__Observer.Observer.prototype.ZContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Observers__Observer.Observer.prototype.ZContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Observers__Observer.Observer.prototype.ZContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedDataStringContext = {};
gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedDataStringContext.GDObjectObjects1= [];
gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedDataStringContext.GDObjectObjects2= [];


gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedDataStringContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedDataStringContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedDataStringContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedDataStringContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNotifiedDataString()); }}}

}


};

gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedDataString = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedDataStringContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedDataStringContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedDataStringContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedDataNumberContext = {};
gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedDataNumberContext.GDObjectObjects1= [];
gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedDataNumberContext.GDObjectObjects2= [];


gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedDataNumberContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedDataNumberContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedDataNumberContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedDataNumberContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNotifiedDataNumber()); }}}

}


};

gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedDataNumber = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedDataNumberContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedDataNumberContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Observers__Observer.Observer.prototype.NotifiedDataNumberContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Observers__Observer.Observer.prototype.SubjectIdContext = {};
gdjs.evtsExt__Observers__Observer.Observer.prototype.SubjectIdContext.GDObjectObjects1= [];
gdjs.evtsExt__Observers__Observer.Observer.prototype.SubjectIdContext.GDObjectObjects2= [];


gdjs.evtsExt__Observers__Observer.Observer.prototype.SubjectIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Observers__Observer.Observer.prototype.SubjectIdContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Observers__Observer.Observer.prototype.SubjectIdContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__Observers__Observer.Observer.prototype.SubjectIdContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSubjectId()); }}}

}


};

gdjs.evtsExt__Observers__Observer.Observer.prototype.SubjectId = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Observers__Observer.Observer.prototype.SubjectIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Observers__Observer.Observer.prototype.SubjectIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Observers__Observer.Observer.prototype.SubjectIdContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Observers__Observer.Observer.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Observers::Observer", gdjs.evtsExt__Observers__Observer.Observer);
