
if (typeof gdjs.evtsExt__DynamicResource__AddImageResource !== "undefined") {
  gdjs.evtsExt__DynamicResource__AddImageResource.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DynamicResource__AddImageResource = {};


gdjs.evtsExt__DynamicResource__AddImageResource.userFunc0x24f0730 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const resourceName = eventsFunctionContext.getArgument('Image_Resource');

function basename(str, sep) {
    return str.substr(str.lastIndexOf(sep) + 1);
}

function strip_extension(str) {
    return str.substr(0,str.lastIndexOf('.'));
}

gdjs.__dynamicResources.textures.push({
    name: strip_extension(basename(resourceName,'\\')),
    cacheId: resourceName
});

// for debugging
gdjs.__dynamicResources.animationNames.push(strip_extension(basename(resourceName,'\\')));
};
gdjs.evtsExt__DynamicResource__AddImageResource.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DynamicResource__AddImageResource.userFunc0x24f0730(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DynamicResource__AddImageResource.func = function(runtimeScene, Image_Resource, parentEventsFunctionContext) {
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
if (argName === "Image_Resource") return Image_Resource;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__DynamicResource__AddImageResource.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__DynamicResource__AddImageResource.registeredGdjsCallbacks = [];