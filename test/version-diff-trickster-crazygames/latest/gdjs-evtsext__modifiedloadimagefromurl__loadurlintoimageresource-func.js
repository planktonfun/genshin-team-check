
if (typeof gdjs.evtsExt__ModifiedLoadImageFromURL__LoadURLIntoImageResource !== "undefined") {
  gdjs.evtsExt__ModifiedLoadImageFromURL__LoadURLIntoImageResource.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ModifiedLoadImageFromURL__LoadURLIntoImageResource = {};


gdjs.evtsExt__ModifiedLoadImageFromURL__LoadURLIntoImageResource.userFunc0x8bcf78 = function(runtimeScene, eventsFunctionContext) {
"use strict";
runtimeScene
    .getGame()
    .getImageManager()
    .getPIXITexture(eventsFunctionContext.getArgument("Resource"))
    .baseTexture = PIXI.BaseTexture.from(eventsFunctionContext.getArgument("URL"));

};
gdjs.evtsExt__ModifiedLoadImageFromURL__LoadURLIntoImageResource.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ModifiedLoadImageFromURL__LoadURLIntoImageResource.userFunc0x8bcf78(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ModifiedLoadImageFromURL__LoadURLIntoImageResource.func = function(runtimeScene, URL, Resource, parentEventsFunctionContext) {
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
if (argName === "URL") return URL;
if (argName === "Resource") return Resource;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ModifiedLoadImageFromURL__LoadURLIntoImageResource.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ModifiedLoadImageFromURL__LoadURLIntoImageResource.registeredGdjsCallbacks = [];