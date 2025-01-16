
if (typeof gdjs.evtsExt__DynamicResource__AddImageFromAtlasResource !== "undefined") {
  gdjs.evtsExt__DynamicResource__AddImageFromAtlasResource.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DynamicResource__AddImageFromAtlasResource = {};


gdjs.evtsExt__DynamicResource__AddImageFromAtlasResource.userFunc0x41d6ce0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const resourceName = eventsFunctionContext.getArgument('Image_Resource');
const jsonResource = runtimeScene.getGame().getJsonManager().getLoadedJson(eventsFunctionContext.getArgument("JSON_Resource"));

if(!runtimeScene.__dynamicResources) {
    runtimeScene.__dynamicResources = {};
    runtimeScene.__dynamicResources.textures = [];
    runtimeScene.__dynamicResources.animationNames = [];
}

function getPixiTextureFromResourceName(resourceName) {
    return runtimeScene.getGame().getImageManager().getPIXITexture(resourceName);
}

function createImageResourceFromUrl(resourceName, resourceUrl) {
    const imageManager = runtimeScene.getGame().getImageManager();
    const resourceData = {
        alwaysLoaded: false,
        file: resourceUrl,
        kind: "image",
        metadata: "",
        name: resourceName,
        smoothed: false,
        userAdded: false
    };

    if(!imageManager._resources.has(resourceName)) {
        imageManager._resources.set(resourceName, resourceData);

        // load it for later
        imageManager.getPIXITexture(resourceName);
    }
}

function extractImageFromSpritesheet(resourceName, jsonMap, imageKey) {
    const texture = getPixiTextureFromResourceName(resourceName);

    // Extract the image from the PIXI.Texture
    const baseTexture = texture.baseTexture;
    const spriteSheetCanvas = baseTexture.resource.source; // This is a canvas element or sometimes an image element

    // Draw the image to the canvas
    spriteSheetCanvas.onload = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const { x, y, width, height } = jsonMap[imageKey];

        canvas.width = width;
        canvas.height = height;
        context.drawImage(spriteSheetCanvas, x, y, width, height, 0, 0, width, height);

        createImageResourceFromUrl(imageKey, canvas.toDataURL());
    }

    // Handle the case where the image is already loaded
    if (spriteSheetCanvas.complete) {
        spriteSheetCanvas.onload();
    }
}

for(var imageKey in jsonResource) {
    extractImageFromSpritesheet(resourceName, jsonResource, imageKey);

    runtimeScene.__dynamicResources.textures.push({
        name: imageKey,
        cacheId: imageKey
    });

    runtimeScene.__dynamicResources.animationNames.push(imageKey);
}
};
gdjs.evtsExt__DynamicResource__AddImageFromAtlasResource.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DynamicResource__AddImageFromAtlasResource.userFunc0x41d6ce0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DynamicResource__AddImageFromAtlasResource.func = function(runtimeScene, Image_Resource, JSON_Resource, parentEventsFunctionContext) {
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
if (argName === "JSON_Resource") return JSON_Resource;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__DynamicResource__AddImageFromAtlasResource.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__DynamicResource__AddImageFromAtlasResource.registeredGdjsCallbacks = [];