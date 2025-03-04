
if (typeof gdjs.evtsExt__DynamicResource__AddImageFromAtlasResourceForMobs !== "undefined") {
  gdjs.evtsExt__DynamicResource__AddImageFromAtlasResourceForMobs.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DynamicResource__AddImageFromAtlasResourceForMobs = {};


gdjs.evtsExt__DynamicResource__AddImageFromAtlasResourceForMobs.userFunc0x3806b60 = function(runtimeScene, objects, eventsFunctionContext) {
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

    // const imageManager = runtimeScene.getGame().getImageManager();

    // if(imageManager._resources.has(resourceName)) return;

    // const resourceUrl = canvas.toDataURL();
    // const resourceData = {
    //     alwaysLoaded: false,
    //     file: resourceUrl,
    //     kind: "image",
    //     metadata: "",
    //     name: resourceName,
    //     smoothed: false,
    //     userAdded: false
    // };

    // imageManager._resources.set(resourceName, resourceData);

    // return getPixiTextureFromResourceName(resourceName); // make sure to load it
}

gdjs.__dynamicResources.mobs[`${eventsFunctionContext.getArgument('Prefix').toString()}`] = {...jsonResource};

// if(jsonResource.variables) delete jsonResource.variables;
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function createCanvases(croppedData, spritesheetCanvas) {

    await Promise.all(croppedData.animations.map(async (animation) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        canvas.width = croppedData.size.width;
        canvas.height = croppedData.size.height;

        const { x, y, width, height, offsetX, offsetY, name } = animation;

        // Calculate the top-left corner of the rectangle
        const startX = (Math.floor(canvas.width / 2) - offsetX);
        const startY = (Math.floor(canvas.height / 2) - offsetY);

        context.drawImage(
            spritesheetCanvas, x, y, width, height,
            startX, startY, width, height
        );

        const imageName = `${eventsFunctionContext.getArgument('Prefix').toString()}\\${name}`;

        return createImageResourceFromUrl(imageName, canvas);
    }));

    // await sleep(1000); // test async
    gdjs.evtTools.common.resolveAsyncEventsFunction(eventsFunctionContext);
}


function calculateCroppedCanvas(jsonResource) {
    let maxHeight = 0;
    let maxWidth = 0;
    const croppedData = {};

    croppedData.animations = [];
    croppedData.flip = false;
    croppedData.autoAnimation = false;
    croppedData.animationIndex = 0;

    for(const i in jsonResource) {
        if(i=="variables") continue;

        const animations = jsonResource[i].animations;
        const offsets = jsonResource[i].offsets;

        animations.forEach(animation =>{
            const { x, y, width, height } = animation.position;

            const newCenterX = offsets.x; // Space to the left of the center
            const leftPadding = newCenterX; // Space to the left of the center
            const rightPadding = width - newCenterX; // Space to the right
            const adjustedWidth = Math.max(leftPadding, rightPadding) * 2; // Ensure balance
            const adjustedX = adjustedWidth / 2 - newCenterX;

            const newCenterY = offsets.y; // Space to the top of the center
            const topPadding = newCenterY; // Space to the top of the center
            const bottomPadding = height - newCenterY; // Space to the bottom
            const adjustedHeight = Math.max(topPadding, bottomPadding) * 2; // Ensure balance
            const adjustedY = adjustedHeight / 2 - newCenterY;

            if(adjustedWidth > maxWidth) maxWidth = adjustedWidth;
            if(adjustedHeight > maxHeight) maxHeight = adjustedHeight;

            croppedData.animations.push({x, y, width, height,
                name: animation.name,
                offsetX: offsets.x,
                offsetY: offsets.y,
            });
        })
    }

    croppedData.size = {height:maxHeight, width:maxWidth};

    if(!jsonResource['variables']) jsonResource['variables'] = {};
    jsonResource['variables'].size = croppedData.size;
    
    return croppedData;
    // createCanvases(croppedData);
}

async function extractImageFromSpritesheet(sheetImageResourceName, jsonResource) {
    const texture = getPixiTextureFromResourceName(sheetImageResourceName);

    // Extract the image from the PIXI.Texture
    const baseTexture = texture.baseTexture;
    const spriteSheetCanvas = baseTexture.resource.source; // This is a canvas element or sometimes an image element
    const croppedData = calculateCroppedCanvas(jsonResource);

    // Draw the image to the canvas
    spriteSheetCanvas.onload = async () => {
        await createCanvases(croppedData, spriteSheetCanvas);
    }

    // Handle the case where the image is already loaded
    if (spriteSheetCanvas.complete) {
        spriteSheetCanvas.onload();
    }
}

extractImageFromSpritesheet(resourceName, jsonResource).catch(err => console.error(err));
};
gdjs.evtsExt__DynamicResource__AddImageFromAtlasResourceForMobs.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


var objects = [];
gdjs.evtsExt__DynamicResource__AddImageFromAtlasResourceForMobs.userFunc0x3806b60(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DynamicResource__AddImageFromAtlasResourceForMobs.func = function(runtimeScene, Image_Resource, JSON_Resource, Prefix, parentEventsFunctionContext) {
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
if (argName === "Prefix") return Prefix;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__DynamicResource__AddImageFromAtlasResourceForMobs.eventsList0(runtimeScene, eventsFunctionContext);

return eventsFunctionContext.task
}

gdjs.evtsExt__DynamicResource__AddImageFromAtlasResourceForMobs.registeredGdjsCallbacks = [];