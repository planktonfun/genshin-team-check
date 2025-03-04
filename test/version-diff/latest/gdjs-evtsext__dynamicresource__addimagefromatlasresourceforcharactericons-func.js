
if (typeof gdjs.evtsExt__DynamicResource__AddImageFromAtlasResourceForCharacterIcons !== "undefined") {
  gdjs.evtsExt__DynamicResource__AddImageFromAtlasResourceForCharacterIcons.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DynamicResource__AddImageFromAtlasResourceForCharacterIcons = {};


gdjs.evtsExt__DynamicResource__AddImageFromAtlasResourceForCharacterIcons.userFunc0x2531220 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const resourceName = eventsFunctionContext.getArgument('Image_Resource');
const jsonResource = runtimeScene.getGame().getJsonManager().getLoadedJson(eventsFunctionContext.getArgument("JSON_Resource"));

function getPixiTextureFromResourceName(resourceName) {
    return runtimeScene.getGame().getImageManager().getPIXITexture(resourceName);
}

function createImageResourceFromUrl(resourceName, canvas) {

    // Use canvas method
    if(gdjs.__dynamicResources.canvasCollection.has(resourceName)) return;
    gdjs.__dynamicResources.canvasCollection.set(resourceName, canvas);
    return true;
}

async function loadSpriteSheet(resourceName) {

    return new Promise(resolve=>{
        const texture = getPixiTextureFromResourceName(resourceName);

        // Extract the image from the PIXI.Texture
        const baseTexture = texture.baseTexture;
        const spriteSheetCanvas = baseTexture.resource.source; // This is a canvas element or sometimes an image element

        // Draw the image to the canvas
        spriteSheetCanvas.onload = () => {
            resolve(spriteSheetCanvas);
        }

        // Handle the case where the image is already loaded
        if (spriteSheetCanvas.complete) {
            spriteSheetCanvas.onload();
        }
    })
}

async function extractImageFromSpritesheet(spriteSheetCanvas, jsonMap, imageKey) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const { x, y, width, height } = jsonMap[imageKey];

    canvas.width = width;
    canvas.height = height;
    context.drawImage(spriteSheetCanvas, x, y, width, height, 0, 0, width, height);

    return createImageResourceFromUrl(imageKey, canvas);
}

(async ()=> {
    const spriteSheetCanvas = await loadSpriteSheet(resourceName);

    for(var imageKey in jsonResource) {
        await extractImageFromSpritesheet(spriteSheetCanvas, jsonResource, imageKey);

        gdjs.__dynamicResources.characterIcons.push({
            name: imageKey,
            cacheId: imageKey
        });
    }

    gdjs.evtTools.common.resolveAsyncEventsFunction(eventsFunctionContext);
})();
};
gdjs.evtsExt__DynamicResource__AddImageFromAtlasResourceForCharacterIcons.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


var objects = [];
gdjs.evtsExt__DynamicResource__AddImageFromAtlasResourceForCharacterIcons.userFunc0x2531220(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DynamicResource__AddImageFromAtlasResourceForCharacterIcons.func = function(runtimeScene, Image_Resource, JSON_Resource, parentEventsFunctionContext) {
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
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


gdjs.evtsExt__DynamicResource__AddImageFromAtlasResourceForCharacterIcons.eventsList0(runtimeScene, eventsFunctionContext);

return eventsFunctionContext.task
}

gdjs.evtsExt__DynamicResource__AddImageFromAtlasResourceForCharacterIcons.registeredGdjsCallbacks = [];