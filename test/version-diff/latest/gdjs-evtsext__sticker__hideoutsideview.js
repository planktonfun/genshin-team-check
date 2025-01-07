
gdjs.evtsExt__Sticker__HideOutsideView = gdjs.evtsExt__Sticker__HideOutsideView || {};

/**
 * Behavior generated from HideOutsideView
 */
gdjs.evtsExt__Sticker__HideOutsideView.HideOutsideView = class HideOutsideView extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Sticker__HideOutsideView.HideOutsideView.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

/**
 * Shared data generated from HideOutsideView
 */
gdjs.evtsExt__Sticker__HideOutsideView.HideOutsideView.SharedData = class HideOutsideViewSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Sticker__HideOutsideView.HideOutsideView.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Sticker_HideOutsideViewSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Sticker_HideOutsideViewSharedData = new gdjs.evtsExt__Sticker__HideOutsideView.HideOutsideView.SharedData(
      initialData
    );
  }
  return instanceContainer._Sticker_HideOutsideViewSharedData;
}

// Methods:
gdjs.evtsExt__Sticker__HideOutsideView.HideOutsideView.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Sticker__HideOutsideView.HideOutsideView.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Sticker__HideOutsideView.HideOutsideView.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__Sticker__HideOutsideView.HideOutsideView.prototype.doStepPreEventsContext.userFunc0x15b4258 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if(!window.game) return;

const obj = objects[0];
const playerX = gdjs.evtTools.camera.getCameraX(runtimeScene,"");
const playerY = gdjs.evtTools.camera.getCameraY(runtimeScene,"");

const startX = playerX - game.viewportWidth / 2;
const startY = playerY - game.viewportHeight / 2;
const endX = playerX + game.viewportWidth / 2;
const endY = playerY + game.viewportHeight / 2;

const visible = (
    obj.getAABBRight() > startX && obj.getAABBLeft() < endX &&
    obj.getAABBBottom() > startY && obj.getAABBTop() < endY
);

obj.hide(!visible);
};
gdjs.evtsExt__Sticker__HideOutsideView.HideOutsideView.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Sticker__HideOutsideView.HideOutsideView.prototype.doStepPreEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Sticker__HideOutsideView.HideOutsideView.prototype.doStepPreEventsContext.GDObjectObjects1);
gdjs.evtsExt__Sticker__HideOutsideView.HideOutsideView.prototype.doStepPreEventsContext.userFunc0x15b4258(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Sticker__HideOutsideView.HideOutsideView.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
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

gdjs.evtsExt__Sticker__HideOutsideView.HideOutsideView.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Sticker__HideOutsideView.HideOutsideView.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Sticker__HideOutsideView.HideOutsideView.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("Sticker::HideOutsideView", gdjs.evtsExt__Sticker__HideOutsideView.HideOutsideView);
