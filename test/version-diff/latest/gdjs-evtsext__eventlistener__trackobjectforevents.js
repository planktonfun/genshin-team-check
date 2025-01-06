
gdjs.evtsExt__EventListener__TrackObjectForEvents = gdjs.evtsExt__EventListener__TrackObjectForEvents || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents = class TrackObjectForEvents extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.hasBeenCreated = false;
    this._behaviorData.hasBeenResized = false;
    this._behaviorData.isRotating = false;
    this._behaviorData.hasBeenRotated = false;
    this._behaviorData.isMoving = false;
    this._behaviorData.hasBeenMoved = false;
    this._behaviorData.isResizing = false;
    this._behaviorData.hasBeenClicked = false;
    this._behaviorData.isOnHover = false;
    this._behaviorData.beingPressed = false;
    this._behaviorData.hasBeenDoubleClicked = false;
    this._behaviorData.beingScrolled = false;
    this._behaviorData.beingScrolledUp = false;
    this._behaviorData.beingScrolledDown = false;
    this._behaviorData.isVisibleInsideCamera = false;
    this._behaviorData.keyIsPressed = false;
    this._behaviorData.keyIsReleased = false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.hasBeenCreated !== newBehaviorData.hasBeenCreated)
      this._behaviorData.hasBeenCreated = newBehaviorData.hasBeenCreated;
    if (oldBehaviorData.hasBeenResized !== newBehaviorData.hasBeenResized)
      this._behaviorData.hasBeenResized = newBehaviorData.hasBeenResized;
    if (oldBehaviorData.isRotating !== newBehaviorData.isRotating)
      this._behaviorData.isRotating = newBehaviorData.isRotating;
    if (oldBehaviorData.hasBeenRotated !== newBehaviorData.hasBeenRotated)
      this._behaviorData.hasBeenRotated = newBehaviorData.hasBeenRotated;
    if (oldBehaviorData.isMoving !== newBehaviorData.isMoving)
      this._behaviorData.isMoving = newBehaviorData.isMoving;
    if (oldBehaviorData.hasBeenMoved !== newBehaviorData.hasBeenMoved)
      this._behaviorData.hasBeenMoved = newBehaviorData.hasBeenMoved;
    if (oldBehaviorData.isResizing !== newBehaviorData.isResizing)
      this._behaviorData.isResizing = newBehaviorData.isResizing;
    if (oldBehaviorData.hasBeenClicked !== newBehaviorData.hasBeenClicked)
      this._behaviorData.hasBeenClicked = newBehaviorData.hasBeenClicked;
    if (oldBehaviorData.isOnHover !== newBehaviorData.isOnHover)
      this._behaviorData.isOnHover = newBehaviorData.isOnHover;
    if (oldBehaviorData.beingPressed !== newBehaviorData.beingPressed)
      this._behaviorData.beingPressed = newBehaviorData.beingPressed;
    if (oldBehaviorData.hasBeenDoubleClicked !== newBehaviorData.hasBeenDoubleClicked)
      this._behaviorData.hasBeenDoubleClicked = newBehaviorData.hasBeenDoubleClicked;
    if (oldBehaviorData.beingScrolled !== newBehaviorData.beingScrolled)
      this._behaviorData.beingScrolled = newBehaviorData.beingScrolled;
    if (oldBehaviorData.beingScrolledUp !== newBehaviorData.beingScrolledUp)
      this._behaviorData.beingScrolledUp = newBehaviorData.beingScrolledUp;
    if (oldBehaviorData.beingScrolledDown !== newBehaviorData.beingScrolledDown)
      this._behaviorData.beingScrolledDown = newBehaviorData.beingScrolledDown;
    if (oldBehaviorData.isVisibleInsideCamera !== newBehaviorData.isVisibleInsideCamera)
      this._behaviorData.isVisibleInsideCamera = newBehaviorData.isVisibleInsideCamera;
    if (oldBehaviorData.keyIsPressed !== newBehaviorData.keyIsPressed)
      this._behaviorData.keyIsPressed = newBehaviorData.keyIsPressed;
    if (oldBehaviorData.keyIsReleased !== newBehaviorData.keyIsReleased)
      this._behaviorData.keyIsReleased = newBehaviorData.keyIsReleased;

    return true;
  }

  // Properties:
  
  _gethasBeenCreated() {
    return this._behaviorData.hasBeenCreated !== undefined ? this._behaviorData.hasBeenCreated : false;
  }
  _sethasBeenCreated(newValue) {
    this._behaviorData.hasBeenCreated = newValue;
  }
  _togglehasBeenCreated() {
    this._sethasBeenCreated(!this._gethasBeenCreated());
  }
  _gethasBeenResized() {
    return this._behaviorData.hasBeenResized !== undefined ? this._behaviorData.hasBeenResized : false;
  }
  _sethasBeenResized(newValue) {
    this._behaviorData.hasBeenResized = newValue;
  }
  _togglehasBeenResized() {
    this._sethasBeenResized(!this._gethasBeenResized());
  }
  _getisRotating() {
    return this._behaviorData.isRotating !== undefined ? this._behaviorData.isRotating : false;
  }
  _setisRotating(newValue) {
    this._behaviorData.isRotating = newValue;
  }
  _toggleisRotating() {
    this._setisRotating(!this._getisRotating());
  }
  _gethasBeenRotated() {
    return this._behaviorData.hasBeenRotated !== undefined ? this._behaviorData.hasBeenRotated : false;
  }
  _sethasBeenRotated(newValue) {
    this._behaviorData.hasBeenRotated = newValue;
  }
  _togglehasBeenRotated() {
    this._sethasBeenRotated(!this._gethasBeenRotated());
  }
  _getisMoving() {
    return this._behaviorData.isMoving !== undefined ? this._behaviorData.isMoving : false;
  }
  _setisMoving(newValue) {
    this._behaviorData.isMoving = newValue;
  }
  _toggleisMoving() {
    this._setisMoving(!this._getisMoving());
  }
  _gethasBeenMoved() {
    return this._behaviorData.hasBeenMoved !== undefined ? this._behaviorData.hasBeenMoved : false;
  }
  _sethasBeenMoved(newValue) {
    this._behaviorData.hasBeenMoved = newValue;
  }
  _togglehasBeenMoved() {
    this._sethasBeenMoved(!this._gethasBeenMoved());
  }
  _getisResizing() {
    return this._behaviorData.isResizing !== undefined ? this._behaviorData.isResizing : false;
  }
  _setisResizing(newValue) {
    this._behaviorData.isResizing = newValue;
  }
  _toggleisResizing() {
    this._setisResizing(!this._getisResizing());
  }
  _gethasBeenClicked() {
    return this._behaviorData.hasBeenClicked !== undefined ? this._behaviorData.hasBeenClicked : false;
  }
  _sethasBeenClicked(newValue) {
    this._behaviorData.hasBeenClicked = newValue;
  }
  _togglehasBeenClicked() {
    this._sethasBeenClicked(!this._gethasBeenClicked());
  }
  _getisOnHover() {
    return this._behaviorData.isOnHover !== undefined ? this._behaviorData.isOnHover : false;
  }
  _setisOnHover(newValue) {
    this._behaviorData.isOnHover = newValue;
  }
  _toggleisOnHover() {
    this._setisOnHover(!this._getisOnHover());
  }
  _getbeingPressed() {
    return this._behaviorData.beingPressed !== undefined ? this._behaviorData.beingPressed : false;
  }
  _setbeingPressed(newValue) {
    this._behaviorData.beingPressed = newValue;
  }
  _togglebeingPressed() {
    this._setbeingPressed(!this._getbeingPressed());
  }
  _gethasBeenDoubleClicked() {
    return this._behaviorData.hasBeenDoubleClicked !== undefined ? this._behaviorData.hasBeenDoubleClicked : false;
  }
  _sethasBeenDoubleClicked(newValue) {
    this._behaviorData.hasBeenDoubleClicked = newValue;
  }
  _togglehasBeenDoubleClicked() {
    this._sethasBeenDoubleClicked(!this._gethasBeenDoubleClicked());
  }
  _getbeingScrolled() {
    return this._behaviorData.beingScrolled !== undefined ? this._behaviorData.beingScrolled : false;
  }
  _setbeingScrolled(newValue) {
    this._behaviorData.beingScrolled = newValue;
  }
  _togglebeingScrolled() {
    this._setbeingScrolled(!this._getbeingScrolled());
  }
  _getbeingScrolledUp() {
    return this._behaviorData.beingScrolledUp !== undefined ? this._behaviorData.beingScrolledUp : false;
  }
  _setbeingScrolledUp(newValue) {
    this._behaviorData.beingScrolledUp = newValue;
  }
  _togglebeingScrolledUp() {
    this._setbeingScrolledUp(!this._getbeingScrolledUp());
  }
  _getbeingScrolledDown() {
    return this._behaviorData.beingScrolledDown !== undefined ? this._behaviorData.beingScrolledDown : false;
  }
  _setbeingScrolledDown(newValue) {
    this._behaviorData.beingScrolledDown = newValue;
  }
  _togglebeingScrolledDown() {
    this._setbeingScrolledDown(!this._getbeingScrolledDown());
  }
  _getisVisibleInsideCamera() {
    return this._behaviorData.isVisibleInsideCamera !== undefined ? this._behaviorData.isVisibleInsideCamera : false;
  }
  _setisVisibleInsideCamera(newValue) {
    this._behaviorData.isVisibleInsideCamera = newValue;
  }
  _toggleisVisibleInsideCamera() {
    this._setisVisibleInsideCamera(!this._getisVisibleInsideCamera());
  }
  _getkeyIsPressed() {
    return this._behaviorData.keyIsPressed !== undefined ? this._behaviorData.keyIsPressed : false;
  }
  _setkeyIsPressed(newValue) {
    this._behaviorData.keyIsPressed = newValue;
  }
  _togglekeyIsPressed() {
    this._setkeyIsPressed(!this._getkeyIsPressed());
  }
  _getkeyIsReleased() {
    return this._behaviorData.keyIsReleased !== undefined ? this._behaviorData.keyIsReleased : false;
  }
  _setkeyIsReleased(newValue) {
    this._behaviorData.keyIsReleased = newValue;
  }
  _togglekeyIsReleased() {
    this._setkeyIsReleased(!this._getkeyIsReleased());
  }
}

/**
 * Shared data generated from 
 */
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.SharedData = class TrackObjectForEventsSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._EventListener_TrackObjectForEventsSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._EventListener_TrackObjectForEventsSharedData = new gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.SharedData(
      initialData
    );
  }
  return instanceContainer._EventListener_TrackObjectForEventsSharedData;
}

// Methods:
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.onCreatedContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595EventListener_9595_9595TrackObjectForEvents_9546TrackObjectForEvents_9546prototype_9546onCreatedContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.onCreatedContext.GDObjectObjects1});
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.onCreatedContext.GDObjectObjects1);
{gdjs.evtsExt__EventListener__ListenEventsOfAnObject.func(runtimeScene, gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595EventListener_9595_9595TrackObjectForEvents_9546TrackObjectForEvents_9546prototype_9546onCreatedContext_9546GDObjectObjects1Objects, eventsFunctionContext.getBehaviorName("Behavior"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenCreatedContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenCreatedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._gethasBeenCreated() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenCreatedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenCreatedContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sethasBeenCreated(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sethasBeenCreated(true);
}
}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenCreated = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenResizedContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenResizedContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenResizedContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenResizedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenResizedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenResizedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenResizedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._gethasBeenResized() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenResizedContext.GDObjectObjects1[k] = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenResizedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenResizedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenResized = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenResizedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenResizedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenResizedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenResizedContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenResizedContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenResizedContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenResizedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenResizedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenResizedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenResizedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sethasBeenResized(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenResizedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenResizedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenResizedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sethasBeenResized(true);
}
}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenResized = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenResizedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenResizedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenResizedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsRotatingContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsRotatingContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsRotatingContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsRotatingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsRotatingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsRotatingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsRotatingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getisRotating() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsRotatingContext.GDObjectObjects1[k] = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsRotatingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsRotatingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsRotating = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsRotatingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsRotatingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsRotatingContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsRotatingContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsRotatingContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsRotatingContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsRotatingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsRotatingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsRotatingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsRotatingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setisRotating(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsRotatingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsRotatingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsRotatingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setisRotating(true);
}
}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsRotating = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsRotatingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsRotatingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsRotatingContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenRotatedContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenRotatedContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenRotatedContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenRotatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenRotatedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenRotatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenRotatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._gethasBeenRotated() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenRotatedContext.GDObjectObjects1[k] = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenRotatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenRotatedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenRotated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenRotatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenRotatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenRotatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenRotatedContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenRotatedContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenRotatedContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenRotatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenRotatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenRotatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenRotatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sethasBeenRotated(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenRotatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenRotatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenRotatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sethasBeenRotated(true);
}
}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenRotated = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenRotatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenRotatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenRotatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsMovingContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsMovingContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsMovingContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsMovingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsMovingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsMovingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsMovingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getisMoving() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsMovingContext.GDObjectObjects1[k] = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsMovingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsMovingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsMoving = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsMovingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsMovingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsMovingContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsMovingContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsMovingContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsMovingContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsMovingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsMovingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsMovingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsMovingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setisMoving(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsMovingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsMovingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsMovingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setisMoving(true);
}
}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsMoving = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsMovingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsMovingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsMovingContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenMovedContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenMovedContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenMovedContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenMovedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenMovedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenMovedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenMovedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._gethasBeenMoved() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenMovedContext.GDObjectObjects1[k] = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenMovedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenMovedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenMoved = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenMovedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenMovedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenMovedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenMovedContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenMovedContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenMovedContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenMovedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenMovedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenMovedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenMovedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sethasBeenMoved(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenMovedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenMovedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenMovedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sethasBeenMoved(true);
}
}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenMoved = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenMovedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenMovedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenMovedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsResizingContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsResizingContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsResizingContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsResizingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsResizingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsResizingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsResizingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getisResizing() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsResizingContext.GDObjectObjects1[k] = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsResizingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsResizingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsResizing = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsResizingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsResizingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsResizingContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsResizingContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsResizingContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsResizingContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsResizingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsResizingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsResizingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsResizingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setisResizing(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsResizingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsResizingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsResizingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setisResizing(true);
}
}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsResizing = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsResizingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsResizingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsResizingContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenClickedContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenClickedContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenClickedContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenClickedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenClickedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenClickedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenClickedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._gethasBeenClicked() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenClickedContext.GDObjectObjects1[k] = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenClickedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenClickedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenClicked = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenClickedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenClickedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenClickedContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenClickedContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenClickedContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenClickedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenClickedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenClickedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenClickedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sethasBeenClicked(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenClickedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenClickedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenClickedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sethasBeenClicked(true);
}
}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenClicked = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenClickedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenClickedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsOnHoverContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsOnHoverContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsOnHoverContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsOnHoverContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsOnHoverContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsOnHoverContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsOnHoverContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getisOnHover() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsOnHoverContext.GDObjectObjects1[k] = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsOnHoverContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsOnHoverContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsOnHover = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsOnHoverContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsOnHoverContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsOnHoverContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsOnHoverContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsOnHoverContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsOnHoverContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsOnHoverContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsOnHoverContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsOnHoverContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsOnHoverContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setisOnHover(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsOnHoverContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsOnHoverContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsOnHoverContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setisOnHover(true);
}
}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsOnHover = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsOnHoverContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsOnHoverContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsOnHoverContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingPressedContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingPressedContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingPressedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingPressedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingPressedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getbeingPressed() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingPressedContext.GDObjectObjects1[k] = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingPressedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingPressedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingPressed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingPressedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingPressedContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingPressedContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingPressedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingPressedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingPressedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setbeingPressed(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingPressedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingPressedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingPressedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setbeingPressed(true);
}
}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingPressed = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingPressedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenDoubleClickedContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenDoubleClickedContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenDoubleClickedContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenDoubleClickedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenDoubleClickedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenDoubleClickedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenDoubleClickedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._gethasBeenDoubleClicked() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenDoubleClickedContext.GDObjectObjects1[k] = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenDoubleClickedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenDoubleClickedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenDoubleClicked = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenDoubleClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenDoubleClickedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.HasBeenDoubleClickedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenDoubleClickedContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenDoubleClickedContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenDoubleClickedContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenDoubleClickedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenDoubleClickedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenDoubleClickedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenDoubleClickedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sethasBeenDoubleClicked(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenDoubleClickedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenDoubleClickedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenDoubleClickedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sethasBeenDoubleClicked(true);
}
}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenDoubleClicked = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenDoubleClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenDoubleClickedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetHasBeenDoubleClickedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getbeingScrolled() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledContext.GDObjectObjects1[k] = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolled = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setbeingScrolled(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setbeingScrolled(true);
}
}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolled = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledUpContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledUpContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledUpContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledUpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledUpContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledUpContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledUpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getbeingScrolledUp() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledUpContext.GDObjectObjects1[k] = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledUpContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledUpContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledUp = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledUpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledUpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledUpContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledUpContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledUpContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledUpContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledUpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledUpContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledUpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledUpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setbeingScrolledUp(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledUpContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledUpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledUpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setbeingScrolledUp(true);
}
}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledUp = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledUpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledUpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledUpContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledDownContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledDownContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledDownContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledDownContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledDownContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledDownContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledDownContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getbeingScrolledDown() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledDownContext.GDObjectObjects1[k] = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledDownContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledDownContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledDown = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledDownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledDownContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.BeingScrolledDownContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledDownContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledDownContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledDownContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledDownContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledDownContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledDownContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledDownContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setbeingScrolledDown(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledDownContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledDownContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledDownContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setbeingScrolledDown(true);
}
}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledDown = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledDownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledDownContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetBeingScrolledDownContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsVisibleInsideCameraContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsVisibleInsideCameraContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsVisibleInsideCameraContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsVisibleInsideCameraContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsVisibleInsideCameraContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsVisibleInsideCameraContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsVisibleInsideCameraContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getisVisibleInsideCamera() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsVisibleInsideCameraContext.GDObjectObjects1[k] = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsVisibleInsideCameraContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsVisibleInsideCameraContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsVisibleInsideCamera = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsVisibleInsideCameraContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsVisibleInsideCameraContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.IsVisibleInsideCameraContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsVisibleInsideCameraContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsVisibleInsideCameraContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsVisibleInsideCameraContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsVisibleInsideCameraContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsVisibleInsideCameraContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsVisibleInsideCameraContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsVisibleInsideCameraContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setisVisibleInsideCamera(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsVisibleInsideCameraContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsVisibleInsideCameraContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsVisibleInsideCameraContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setisVisibleInsideCamera(true);
}
}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsVisibleInsideCamera = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsVisibleInsideCameraContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsVisibleInsideCameraContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetIsVisibleInsideCameraContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsPressedContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsPressedContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsPressedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsPressedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsPressedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getkeyIsPressed() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsPressedContext.GDObjectObjects1[k] = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsPressedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsPressedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsPressed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsPressedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsPressedContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsPressedContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsPressedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsPressedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsPressedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setkeyIsPressed(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsPressedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsPressedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsPressedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setkeyIsPressed(true);
}
}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsPressed = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsPressedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsReleasedContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsReleasedContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsReleasedContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsReleasedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsReleasedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsReleasedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsReleasedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getkeyIsReleased() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsReleasedContext.GDObjectObjects1[k] = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsReleasedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsReleasedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsReleased = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsReleasedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsReleasedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.KeyIsReleasedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsReleasedContext = {};
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsReleasedContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsReleasedContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsReleasedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsReleasedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsReleasedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsReleasedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setkeyIsReleased(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsReleasedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsReleasedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsReleasedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setkeyIsReleased(true);
}
}}

}


};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsReleased = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsReleasedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsReleasedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.SetKeyIsReleasedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("EventListener::TrackObjectForEvents", gdjs.evtsExt__EventListener__TrackObjectForEvents.TrackObjectForEvents);
