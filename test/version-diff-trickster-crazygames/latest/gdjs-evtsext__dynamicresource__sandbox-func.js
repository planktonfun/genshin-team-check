
if (typeof gdjs.evtsExt__DynamicResource__Sandbox !== "undefined") {
  gdjs.evtsExt__DynamicResource__Sandbox.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DynamicResource__Sandbox = {};


gdjs.evtsExt__DynamicResource__Sandbox.userFunc0x3eda408 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const resourceName = eventsFunctionContext.getArgument('Image_Resource');
const jsonResource = runtimeScene.getGame().getJsonManager().getLoadedJson(eventsFunctionContext.getArgument("JSON_Resource"));

function basename(str, sep) {
    return str.substr(str.lastIndexOf(sep) + 1);
}

function strip_extension(str) {
    return str.substr(0,str.lastIndexOf('.'));
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

    if(!imageManager._resources.has(resourceName))
        imageManager._resources.set(resourceName, resourceData);

    // check if it worked
    // console.log(imageManager.getPIXITexture(resourceName));
}

function createImageResourceFromPixiTexture(resourceName, pixiTexture) {

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = 26;
    canvas.height = 28;

    // Extract the image from the PIXI.Texture
    const baseTexture = pixiTexture.baseTexture;
    const source = baseTexture.resource.source; // This is a canvas element

    // Calculate the position to center the image
    const x = (canvas.width - source.width) / 2;
    const y = (canvas.height - source.height) / 2;

    // Draw the image at the calculated position
    ctx.drawImage(source, x, y);
    createImageResourceFromUrl(resourceName, canvas.toDataURL());
}

function createImageResourceFromCanvas(resourceName) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Draw something on the canvas
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 100, 100);

    // Convert canvas to data URL
    return createImageResourceFromUrl(resourceName, canvas.toDataURL());
}

function extractImageFromSpritesheet(resourceName, jsonMap, imageKey) {
    const texture = getPixiTextureFromResourceName(resourceName);

    // Extract the image from the PIXI.Texture
    const baseTexture = texture.baseTexture;
    const spriteSheetCanvas = baseTexture.resource.source; // This is a canvas element or sometimes an image element

    console.log(spriteSheetCanvas);

    // Draw the image to the canvas
    spriteSheetCanvas.onload = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const { x, y, width, height } = jsonMap[imageKey];

        canvas.width = width;
        canvas.height = height;
        context.drawImage(spriteSheetCanvas, x, y, width, height, 0, 0, width, height);

        const n = new Image();
        n.src = canvas.toDataURL();

        createImageResourceFromUrl(imageKey, canvas.toDataURL());
    }

    // Handle the case where the image is already loaded
    if (spriteSheetCanvas.complete) {
        spriteSheetCanvas.onload();
    }
}

console.log({jsonResource})
for(var imageKey in jsonResource) {
    extractImageFromSpritesheet(resourceName, jsonResource, imageKey);

    gdjs.__dynamicResources.textures.push({
        name: imageKey,
        cacheId: imageKey //resourceName
    });

    gdjs.__dynamicResources.animationNames.push(imageKey);
}

// createImageResourceFromUrl('tehe', 'https://about.canva.com/wp-content/uploads/sites/8/2019/03/blue.png');
// createImageResourceFromUrl('tehe', 'data:image/png...');
// createImageResourceFromPixiTexture('tehe', getPixiTextureFromResourceName(resourceName));
// createImageResourceFromCanvas('tehe', 'https://about.canva.com/wp-content/uploads/sites/8/2019/03/blue.png');

// gdjs.__dynamicResources.textures.push({
//     name: strip_extension(basename(resourceName,'\\')),
//     cacheId: 'tehe' //resourceName
// });

window.runtimeScene = runtimeScene;
// // for debugging
// console.log(
//     getPixiTextureFromResourceName(resourceName),
//     // getPixiTextureFromResourceName("10000-galder-coupon.webp"),
//     // PIXI.Texture.from('https://about.canva.com/wp-content/uploads/sites/8/2019/03/blue.png')
// );

gdjs.__dynamicResources.animationNames.push(strip_extension(basename(resourceName,'\\')));
};
gdjs.evtsExt__DynamicResource__Sandbox.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DynamicResource__Sandbox.userFunc0x3eda408(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DynamicResource__Sandbox.func = function(runtimeScene, Image_Resource, JSON_Resource, parentEventsFunctionContext) {
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


gdjs.evtsExt__DynamicResource__Sandbox.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__DynamicResource__Sandbox.registeredGdjsCallbacks = [];