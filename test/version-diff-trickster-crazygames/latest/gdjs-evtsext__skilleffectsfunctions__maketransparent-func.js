
if (typeof gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent !== "undefined") {
  gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent = {};
gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1= [];
gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects2= [];


gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.userFunc0x4f7e540 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const shapePainter = objects[0]._renderer._graphics;

let image = null;
let rotationAngle = 0;
const container = new PIXI.Container();

async function loadImageAsync(src) {
  return new Promise((resolve, reject) => {
    // Create an image element
    const image = new Image();

    // Set the image source
    image.src = src;

    // Set up an event listener for the 'load' event
    image.onload = function () {
      // Call the 'resolve' function when the image is loaded
      resolve(image);
    };

    // Set up an event listener for the 'error' event
    image.onerror = function () {
      // Call the 'reject' function if there is an error loading the image
      reject(new Error('Failed to load the image.'));
    };
  });
}

function replaceColor(canvas, ctx) {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const green = data[i + 1];
        data[i + 3] = green;
    }

    ctx.putImageData(imageData, 0, 0);
}

async function createCanvasSprite(imgSrc) {
  // Create an HTML5 canvas element
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const image = await loadImageAsync(imgSrc);

  canvas.width = image.width;
  canvas.height = image.height;
  // Draw something on the canvas (e.g., a red rectangle)
  ctx.drawImage(image, 0, 0);

  if(eclipse.modifyColors) {
    replaceColor(canvas, ctx);
  }

  // Create a PIXI sprite from the canvas
  const canvasTexture = PIXI.Texture.from(canvas);
  const canvasSprite = new PIXI.Sprite(canvasTexture);

  return canvasSprite;
}

async function start(imgSrc) {
  image = await createCanvasSprite(imgSrc);
  image.anchor.set(0.5);

  // Add the image sprite to the stage
  container.addChild(image);
  shapePainter.addChild(container);
}

var imageName = eventsFunctionContext.getArgument('ImageSrcString').split('\\').at(-1);
var imageUrl = runtimeScene._runtimeGame._resourcesLoader.getFullUrl(imageName);

const eclipse = {
  perimeter: eventsFunctionContext.getArgument('Perimeter').valueOf(),
  scale: false,
  rotation: 0,
  src: imageUrl,
  modifyColors: true
};

start(eclipse.src);
};
gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1 */

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1);
gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.userFunc0x4f7e540(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("NewShapePainter"), gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1);
{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect("BloomEffect", false);
}
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect("GlowEffect", false);
}
}}

}


};gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect("BloomEffect", true);
}
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect("GlowEffect", true);
}
}}

}


};gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("NewShapePainter"), gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1);
{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1[i].returnVariable(gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1[i].getVariables().get("Created")).setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp") + 62);
}
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1[i].returnVariable(gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1[i].getVariables().get("Position").getChild("X")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PositionX")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1[i].returnVariable(gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1[i].getVariables().get("Position").getChild("Y")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PositionY")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1[i].returnVariable(gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1[i].getVariables().get("LifeTimeSeconds")).setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp") + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("LifeTimeSeconds")) || 0 : 0) * 1000));
}
}
{ //Subevents
gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("DisplayBloomAndGlow") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("DisplayBloomAndGlow") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("NewShapePainter"), gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1);
{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1[i].returnVariable(gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1[i].getVariables().get("effectType")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("BloomAndGlowType")) || 0 : 0));
}
}
{ //Subevents
gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.func = function(runtimeScene, NewShapePainter, ImageSrcString, PositionX, PositionY, DisplayBloomAndGlow, BloomAndGlowType, LifeTimeSeconds, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"NewShapePainter": NewShapePainter
},
  _objectArraysMap: {
"NewShapePainter": gdjs.objectsListsToArray(NewShapePainter)
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
if (argName === "ImageSrcString") return ImageSrcString;
if (argName === "PositionX") return PositionX;
if (argName === "PositionY") return PositionY;
if (argName === "DisplayBloomAndGlow") return DisplayBloomAndGlow;
if (argName === "BloomAndGlowType") return BloomAndGlowType;
if (argName === "LifeTimeSeconds") return LifeTimeSeconds;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects1.length = 0;
gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.GDNewShapePainterObjects2.length = 0;

gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.eventsList3(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__SkillEffectsFunctions__MakeTransparent.registeredGdjsCallbacks = [];