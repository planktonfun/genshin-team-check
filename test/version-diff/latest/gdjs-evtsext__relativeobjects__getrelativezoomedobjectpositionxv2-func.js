
if (typeof gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionXV2 !== "undefined") {
  gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionXV2.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionXV2 = {};
gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionXV2.GDDeathSpriteObjects1= [];


gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionXV2.userFunc0xe76378 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const camera = gdjs.evtTools.camera;

// relative percent
const objectLayer = objects[0].getLayer();
const offsetPercentX = (objects[0].getCenterXInScene() - camera.getCameraBorderLeft(runtimeScene, objectLayer, 0))/camera.getCameraWidth(runtimeScene,objectLayer,0);

const targetLayer = eventsFunctionContext.getArgument("TargetLayer").toString();
const x = camera.getCameraBorderLeft(runtimeScene, targetLayer, 0) + (offsetPercentX * camera.getCameraWidth(runtimeScene, targetLayer, 0));

eventsFunctionContext.returnValue = x;
};
gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionXV2.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("DeathSprite"), gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionXV2.GDDeathSpriteObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionXV2.GDDeathSpriteObjects1);
gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionXV2.userFunc0xe76378(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionXV2.func = function(runtimeScene, DeathSprite, TargetLayer, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"DeathSprite": DeathSprite
},
  _objectArraysMap: {
"DeathSprite": gdjs.objectsListsToArray(DeathSprite)
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
if (argName === "TargetLayer") return TargetLayer;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionXV2.GDDeathSpriteObjects1.length = 0;

gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionXV2.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionXV2.registeredGdjsCallbacks = [];