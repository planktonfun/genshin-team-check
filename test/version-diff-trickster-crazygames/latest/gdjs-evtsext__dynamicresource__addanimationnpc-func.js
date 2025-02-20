
if (typeof gdjs.evtsExt__DynamicResource__AddAnimationNpc !== "undefined") {
  gdjs.evtsExt__DynamicResource__AddAnimationNpc.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DynamicResource__AddAnimationNpc = {};
gdjs.evtsExt__DynamicResource__AddAnimationNpc.GDGeneralNpcObjects1= [];


gdjs.evtsExt__DynamicResource__AddAnimationNpc.userFunc0x19ad9d0 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
function basename(str, sep) {
    return str.substr(str.lastIndexOf(sep) + 1);
}

function strip_extension(str) {
    return str.substr(0,str.lastIndexOf('.'));
}

function rectangleToPolygon(rectangle) {
  const { x, y, width, height } = rectangle;

  // Define the four corners of the rectangle
  return [
    { x: x, y: y }, // Top-left corner
    { x: x + width, y: y }, // Top-right corner
    { x: x + width, y: y + height }, // Bottom-right corner
    { x: x, y: y + height } // Bottom-left corner
  ];
}

function getRectangle(rect, size, offsets) {
  const { x, y, width, height } = rect;
  
  const adjustedX = (size.width / 2) - offsets.x;
  const adjustedY = (size.height / 2) - offsets.y;

  return {
      x: adjustedX,
      y: adjustedY,
      width,
      height
  }
}

function getBottomCenter(rectangle) {
  const { x, y, width, height } = rectangle;
  
  return {
      x: x + (width/2),
      y: y + height
  };
}

function getTopCenter(rectangle) {
  const { x, y, width, height } = rectangle;
  
  return {
      x: x + (width/2),
      y: y
  };
}

function getIntersection(rectangles) {
    if (rectangles.length === 0) return null;

    let x1 = rectangles[0].x;
    let y1 = rectangles[0].y;
    let x2 = rectangles[0].x + rectangles[0].width;
    let y2 = rectangles[0].y + rectangles[0].height;

    for (let i = 1; i < rectangles.length; i++) {
        const rect = rectangles[i];
        x1 = Math.max(x1, rect.x);
        y1 = Math.max(y1, rect.y);
        x2 = Math.min(x2, rect.x + rect.width);
        y2 = Math.min(y2, rect.y + rect.height);

        if (x1 >= x2 || y1 >= y2) {
            return null;
        }
    }

    return { x: x1, y: y1, width: x2 - x1, height: y2 - y1 };
}

function getCommonRectangle() {
    const rectangles = [];

    for(var i in egg) {
        if(i=="variables") continue;
        if(i=="Avatar") continue;

        rectangles.push(
            getRectangle(egg[i].animations[0].position, egg['variables'].size, egg[i].offsets)
        );
    }

    return getIntersection(rectangles);
}

function modifyExistingAnimation(existingAnimation, animationSprites) {
    existingAnimation.directions[0].frames.forEach((frame, index)=>{
        const canvas = gdjs.__dynamicResources.canvasCollection.get(prefix+'\\' + animationSprites[index].name);
        frame.texture = PIXI.Texture.from(canvas);
        frame.baseTexture = PIXI.BaseTexture.from(canvas);
    });
}

function addAnimation(sprite, animationName, animationSprites, variables, offsets, commonRectangle) {
    const spriteBoundaries = rectangleToPolygon(commonRectangle);
    const barPoint = getBottomCenter(commonRectangle);
    const topPoint = getTopCenter(commonRectangle);

    const animationData = {
        name: `${animationName}`,
        useMultipleDirections: false,
        directions: [{
            timeBetweenFrames: 1/eventsFunctionContext.getArgument("FPS").valueOf(),
            looping: true,
            sprites: animationSprites.map(spriteName=>{
                return {
                    image: '', //prefix+'\\' + spriteName.name,
                    points: [
                        {name: 'QuestIcon', x: spriteName.position.width/2, y: 0},
                        {name: 'NpcTitle', x: spriteName.position.width/2, y: spriteName.position.height+25},
                    ],
                    originPoint: {
                        name: 'Origin', x: 0, y: 0
                    },
                    centerPoint: {
                        name: 'Center', automatic: false, x: variables.size.width/2, y: variables.size.height/2
                        // name: 'Center', automatic: true, x: variables.size.width/2, y: variables.size.height/2
                    },
                    hasCustomCollisionMask: true,
                    customCollisionMask: [
                        spriteBoundaries,
                    ],
                }
            }),
        }],
    }

    const imageManager = runtimeScene.getGame().getImageManager();
    const newAnimation = new gdjs.SpriteAnimation(imageManager, animationData);
    modifyExistingAnimation(newAnimation, animationSprites);
    console.log(newAnimation);
    // Add the new animation to the sprite
    sprite._animations.push(newAnimation);
}

const prefix=eventsFunctionContext.getArgument("Prefix").toString();
const egg = {...gdjs.__dynamicResources.npcs[prefix]};
console.log({egg})
const commonRectangle = getCommonRectangle(egg);

for(var i in egg) {
    if(i=="Avatar") continue;
    if(i=="variables") continue;
    addAnimation(objects[0], i, egg[i].animations, egg['variables'], egg[i].offsets, commonRectangle);
}

function toTitleCase(str) {
    return str
        .toLowerCase() // Convert the entire string to lowercase first
        .split(' ') // Split the string into an array of words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
        .join(' '); // Join the words back into a single string
}

objects[0].getVariables().get('Title').setString(toTitleCase(prefix.replaceAll('_',' ')));
objects[0].getVariables().get('Avatar').setString(prefix);
objects[0].getVariables().get('NpcName').setString(prefix);
};
gdjs.evtsExt__DynamicResource__AddAnimationNpc.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("GeneralNpc"), gdjs.evtsExt__DynamicResource__AddAnimationNpc.GDGeneralNpcObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__DynamicResource__AddAnimationNpc.GDGeneralNpcObjects1);
gdjs.evtsExt__DynamicResource__AddAnimationNpc.userFunc0x19ad9d0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DynamicResource__AddAnimationNpc.func = function(runtimeScene, GeneralNpc, Prefix, FPS, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"GeneralNpc": GeneralNpc
},
  _objectArraysMap: {
"GeneralNpc": gdjs.objectsListsToArray(GeneralNpc)
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
if (argName === "Prefix") return Prefix;
if (argName === "FPS") return FPS;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__DynamicResource__AddAnimationNpc.GDGeneralNpcObjects1.length = 0;

gdjs.evtsExt__DynamicResource__AddAnimationNpc.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__DynamicResource__AddAnimationNpc.registeredGdjsCallbacks = [];