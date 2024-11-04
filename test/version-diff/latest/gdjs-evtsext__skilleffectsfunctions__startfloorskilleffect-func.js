
if (typeof gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect !== "undefined") {
  gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect = {};
gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1= [];
gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects2= [];


gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.userFunc0x11ec4b8 = function(runtimeScene, objects, eventsFunctionContext) {
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

  // Calculate the scale to fit the image inside the oval
  if(eclipse.scale) {
    const scaleX = 2 * eclipse.perimeter / image.width;
    const scaleY = 2 * eclipse.perimeter / image.height;
    image.scale.set(scaleX, scaleY);
  }

  // Add the image sprite to the stage
  container.addChild(image);
  shapePainter.addChild(container);
}

function updateStep() {
    if(!image) return;

    // modify object properties
    objects[0].setCenterPositionInScene(
      objects[0].getVariables().get('Position').getChild('X').getAsNumber(),
      objects[0].getVariables().get('Position').getChild('Y').getAsNumber()
    );

    if(objects[0].isHidden()) {
      if((Date.now() - objects[0].getVariables().get('Created').getAsNumber()) > 0) {
        objects[0].hide(false);
      }
    }

    // 4. Calculate the center coordinates of the stage
    const centerX = image.width / 2;
    const centerY = image.height / 4;

    const matrix = new PIXI.Matrix(eclipse.isometricRatio.width, 0, 0, eclipse.isometricRatio.height, centerX, centerY);

    image.angle = rotationAngle;

    // Apply Custom Transformation Matrix
    container.transform.setFromMatrix(
      matrix
    );

    // Your animation/rendering logic goes here
    rotationAngle += eclipse.rotation;
}

var imageName = eventsFunctionContext.getArgument('ImageSrcString').split('\\').at(-1);
// var imageUrl = runtimeScene._runtimeGame._resourcesLoader.getFullUrl(imageName);

var imageUrl = runtimeScene.getGame().getImageManager()._resources.get(imageName).file;

// console.log(imageUrl);
if(window['getExtractedFile']) {
  imageUrl = getExtractedFile(imageUrl);
}
//.replace(/\.png$/g, '.webp');

const eclipse = {
  perimeter: eventsFunctionContext.getArgument('Perimeter').valueOf(),
  scale: eventsFunctionContext.getArgument('ChangeSize').valueOf(),
  rotation: eventsFunctionContext.getArgument('RotationSpeed').valueOf(),
  src: imageUrl,
  isometricRatio: {
    height: eventsFunctionContext.getArgument('HeightPercent').valueOf(),
    width: eventsFunctionContext.getArgument('WidthPercent').valueOf()
  },
  modifyColors: eventsFunctionContext.getArgument('MakeTransparent').valueOf()
};

if(!window.skillEffects)  window.skillEffects = [];

window.skillEffects.push(updateStep); 

start(eclipse.src);
updateStep();
};
gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1 */

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1);
gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.userFunc0x11ec4b8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("NewShapePainter"), gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1);
{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect("BloomEffect", false);
}
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect("GlowEffect", false);
}
}}

}


};gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect("BloomEffect", true);
}
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect("GlowEffect", true);
}
}}

}


};gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("NewShapePainter"), gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1);
{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1[i].returnVariable(gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1[i].getVariables().get("Created")).setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp") + 62);
}
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1[i].returnVariable(gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1[i].getVariables().get("Position").getChild("X")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PositionX")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1[i].returnVariable(gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1[i].getVariables().get("Position").getChild("Y")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PositionY")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1[i].returnVariable(gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1[i].getVariables().get("LifeTimeSeconds")).setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp") + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("LifeTimeSeconds")) || 0 : 0) * 1000));
}
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1[i].returnVariable(gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1[i].getVariables().get("EffectSeconds")).setNumber(((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("LifeTimeSeconds")) || 0 : 0) * 1000));
}
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).setEffectDoubleParameter("BlendingEffect", "blendmode", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("BlendMode")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect("BlurEffect", false);
}
}
{ //Subevents
gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("DisplayBloomAndGlow") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("DisplayBloomAndGlow") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("NewShapePainter"), gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1);
{for(var i = 0, len = gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1[i].returnVariable(gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1[i].getVariables().get("effectType")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("BloomAndGlowType")) || 0 : 0));
}
}
{ //Subevents
gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.func = function(runtimeScene, NewShapePainter, ImageSrcString, MakeTransparent, ChangeSize, RotationSpeed, Perimeter, HeightPercent, WidthPercent, PositionX, PositionY, DisplayBloomAndGlow, BloomAndGlowType, LifeTimeSeconds, BlendMode, parentEventsFunctionContext) {
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
if (argName === "MakeTransparent") return MakeTransparent;
if (argName === "ChangeSize") return ChangeSize;
if (argName === "RotationSpeed") return RotationSpeed;
if (argName === "Perimeter") return Perimeter;
if (argName === "HeightPercent") return HeightPercent;
if (argName === "WidthPercent") return WidthPercent;
if (argName === "PositionX") return PositionX;
if (argName === "PositionY") return PositionY;
if (argName === "DisplayBloomAndGlow") return DisplayBloomAndGlow;
if (argName === "BloomAndGlowType") return BloomAndGlowType;
if (argName === "LifeTimeSeconds") return LifeTimeSeconds;
if (argName === "BlendMode") return BlendMode;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects1.length = 0;
gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.GDNewShapePainterObjects2.length = 0;

gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.eventsList3(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__SkillEffectsFunctions__StartFloorSkillEffect.registeredGdjsCallbacks = [];