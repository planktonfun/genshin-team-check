
if (typeof gdjs.evtsExt__Sticker__IsInsidePlayerViewPort !== "undefined") {
  gdjs.evtsExt__Sticker__IsInsidePlayerViewPort.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Sticker__IsInsidePlayerViewPort = {};
gdjs.evtsExt__Sticker__IsInsidePlayerViewPort.GDObjectObjects1= [];


gdjs.evtsExt__Sticker__IsInsidePlayerViewPort.userFunc0x14afa10 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if(!window.game) return;

const obj = objects[0];
const playerX = gdjs.evtTools.camera.getCameraX(runtimeScene,obj.getLayer());
const playerY = gdjs.evtTools.camera.getCameraY(runtimeScene,obj.getLayer());

const startX = playerX - game.viewportWidth / 2;
const startY = playerY - game.viewportHeight / 2;
const endX = playerX + game.viewportWidth / 2;
const endY = playerY + game.viewportHeight / 2;

const visible = (
    obj.getAABBRight() > startX && obj.getAABBLeft() < endX &&
    obj.getAABBBottom() > startY && obj.getAABBTop() < endY
);

eventsFunctionContext.returnValue = visible;
};
gdjs.evtsExt__Sticker__IsInsidePlayerViewPort.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Sticker__IsInsidePlayerViewPort.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Sticker__IsInsidePlayerViewPort.GDObjectObjects1);
gdjs.evtsExt__Sticker__IsInsidePlayerViewPort.userFunc0x14afa10(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Sticker__IsInsidePlayerViewPort.func = function(runtimeScene, Object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
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

gdjs.evtsExt__Sticker__IsInsidePlayerViewPort.GDObjectObjects1.length = 0;

gdjs.evtsExt__Sticker__IsInsidePlayerViewPort.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Sticker__IsInsidePlayerViewPort.registeredGdjsCallbacks = [];