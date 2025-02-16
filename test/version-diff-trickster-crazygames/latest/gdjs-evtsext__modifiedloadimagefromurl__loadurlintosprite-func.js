
if (typeof gdjs.evtsExt__ModifiedLoadImageFromURL__LoadURLIntoSprite !== "undefined") {
  gdjs.evtsExt__ModifiedLoadImageFromURL__LoadURLIntoSprite.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ModifiedLoadImageFromURL__LoadURLIntoSprite = {};
gdjs.evtsExt__ModifiedLoadImageFromURL__LoadURLIntoSprite.GDObjectObjects1= [];


gdjs.evtsExt__ModifiedLoadImageFromURL__LoadURLIntoSprite.userFunc0x2fc3c68 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (eventsFunctionContext.getArgument("ChangeResource")) {
    const texture = PIXI.BaseTexture.from(eventsFunctionContext.getArgument("URL"));
    for (const obj of objects) obj.getRendererObject().texture.baseTexture = texture;
} else {
    
    const url = "https://api.codetabs.com/v1/proxy/?quest=" + eventsFunctionContext.getArgument("URL");
    // const url = "https://corsproxy.io/?" + encodeURIComponent(eventsFunctionContext.getArgument("URL"));
    
    // const texture = PIXI.Texture.from(eventsFunctionContext.getArgument("URL"));

    if(!window.cachedImg) {
        window.cachedImg = {};
    }

    if(window.cachedImg[url]) {
        for (const obj of objects) {
            obj.getRendererObject().texture = PIXI.Texture.from(window.cachedImg[url]);
        }
    } else {
        if(!window.imgLoaders) window.imgLoaders = [];
        
        window.imgLoaders.push({callback: function(){
            var img = document.createElement('img');
            img.src = url;
            img.crossOrigin = '';
            img.onload = function() {
                // Create a Canvas element
                var canvas = document.createElement('canvas');

                // Set canvas dimensions to match the image
                canvas.width = objects[0].getWidth();
                canvas.height = objects[0].getHeight();

                // Get the 2D drawing context
                var ctx = canvas.getContext('2d');
                
                var aspectRatio = img.width / img.height;
                var imgWidth, imgHeight;
                imgWidth = img.width;
                imgHeight = img.height;
                if (imgWidth > canvas.width || imgHeight > canvas.height) {
                    if (aspectRatio > 1) {
                        // Landscape image
                        imgWidth = canvas.width;
                        imgHeight = canvas.width / aspectRatio;
                    } else {
                        // Portrait or square image
                        imgHeight = canvas.height;
                        imgWidth = canvas.height * aspectRatio;
                    }
                }

                var centerX = (canvas.width / 2) - (imgWidth / 2);
                var centerY = (canvas.height / 2) - (imgHeight / 2);

                // Draw the image on the canvas
                ctx.drawImage(img, centerX, centerY, imgWidth, imgHeight);

                // Get the data URL
                var dataURL = canvas.toDataURL('image/png');
                window.cachedImg[url] = dataURL;

                for (const obj of objects) {
                    obj.getRendererObject().texture = PIXI.Texture.from(window.cachedImg[url]);
                    // obj.getRendererObject().texture = texture;
                }
            }
        }});


    }

}

};
gdjs.evtsExt__ModifiedLoadImageFromURL__LoadURLIntoSprite.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ModifiedLoadImageFromURL__LoadURLIntoSprite.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ModifiedLoadImageFromURL__LoadURLIntoSprite.GDObjectObjects1);
gdjs.evtsExt__ModifiedLoadImageFromURL__LoadURLIntoSprite.userFunc0x2fc3c68(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ModifiedLoadImageFromURL__LoadURLIntoSprite.func = function(runtimeScene, URL, Object, ChangeResource, parentEventsFunctionContext) {
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
if (argName === "URL") return URL;
if (argName === "ChangeResource") return ChangeResource;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ModifiedLoadImageFromURL__LoadURLIntoSprite.GDObjectObjects1.length = 0;

gdjs.evtsExt__ModifiedLoadImageFromURL__LoadURLIntoSprite.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ModifiedLoadImageFromURL__LoadURLIntoSprite.registeredGdjsCallbacks = [];