
gdjs.evtsExt__DynamicResource__DynamicAnimationCharacterIcons = gdjs.evtsExt__DynamicResource__DynamicAnimationCharacterIcons || {};

/**
 * Behavior generated from dynamic loading image for character icons
 */
gdjs.evtsExt__DynamicResource__DynamicAnimationCharacterIcons.DynamicAnimationCharacterIcons = class DynamicAnimationCharacterIcons extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__DynamicResource__DynamicAnimationCharacterIcons.DynamicAnimationCharacterIcons.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.FPS = behaviorData.FPS !== undefined ? behaviorData.FPS : Number("12.5") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.FPS !== newBehaviorData.FPS)
      this._behaviorData.FPS = newBehaviorData.FPS;

    return true;
  }

  // Properties:
  
  _getFPS() {
    return this._behaviorData.FPS !== undefined ? this._behaviorData.FPS : Number("12.5") || 0;
  }
  _setFPS(newValue) {
    this._behaviorData.FPS = newValue;
  }
}

/**
 * Shared data generated from dynamic loading image for character icons
 */
gdjs.evtsExt__DynamicResource__DynamicAnimationCharacterIcons.DynamicAnimationCharacterIcons.SharedData = class DynamicAnimationCharacterIconsSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__DynamicResource__DynamicAnimationCharacterIcons.DynamicAnimationCharacterIcons.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._DynamicResource_DynamicAnimationCharacterIconsSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._DynamicResource_DynamicAnimationCharacterIconsSharedData = new gdjs.evtsExt__DynamicResource__DynamicAnimationCharacterIcons.DynamicAnimationCharacterIcons.SharedData(
      initialData
    );
  }
  return instanceContainer._DynamicResource_DynamicAnimationCharacterIconsSharedData;
}

// Methods:
gdjs.evtsExt__DynamicResource__DynamicAnimationCharacterIcons.DynamicAnimationCharacterIcons.prototype.onCreatedContext = {};
gdjs.evtsExt__DynamicResource__DynamicAnimationCharacterIcons.DynamicAnimationCharacterIcons.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__DynamicResource__DynamicAnimationCharacterIcons.DynamicAnimationCharacterIcons.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__DynamicResource__DynamicAnimationCharacterIcons.DynamicAnimationCharacterIcons.prototype.onCreatedContext.userFunc0x29f2460 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
function basename(str, sep) {
    return str.substr(str.lastIndexOf(sep) + 1);
}

function strip_extension(str) {
    return str.substr(0,str.lastIndexOf('.'));
}

function modifyExistingAnimation(existingAnimation, animationSprites) {
    existingAnimation.directions[0].frames.forEach((frame, index)=>{
        const canvas = gdjs.__dynamicResources.canvasCollection.get(animationSprites[index].name);
        frame.center.x = canvas.width/2;
        frame.center.y = canvas.height/2;
        frame.texture = PIXI.Texture.from(canvas);
        frame.baseTexture = PIXI.BaseTexture.from(canvas);
    });
}

function createSprites(resourceName) { 
    const sprites = [];
    if(resourceName.includes('drill')) {
        [ -2, -3, -1, 0, 0, -1 ].forEach(offsetY=>{
            sprites.push({
                image: '', //resource.cacheId, //pixiTexture.textureCacheIds[0],
                points: [],
                originPoint: {
                    name: 'Origin', x: 0, y: offsetY
                },
                centerPoint: {
                    name: 'Center', automatic: true, x: 0, y: 0
                },
                hasCustomCollisionMask: false,
                customCollisionMask: [],
            })
        })
    } else if(resourceName.includes('hands')) {
        [ -3, -2, -1, 0, 0, -1 ].forEach(offsetY=>{
            sprites.push({
                image: '', //resource.cacheId, //pixiTexture.textureCacheIds[0],
                points: [],
                originPoint: {
                    name: 'Origin', x: 0, y: offsetY
                },
                centerPoint: {
                    name: 'Center', automatic: true, x: 0, y: 0
                },
                hasCustomCollisionMask: false,
                customCollisionMask: [],
            })
        })
    } else {
        sprites.push({
                image: '', //resource.cacheId, //pixiTexture.textureCacheIds[0],
                points: [],
                originPoint: {
                    name: 'Origin', x: 0, y: 0
                },
                centerPoint: {
                    name: 'Center', automatic: true, x: 0, y: 0
                },
                hasCustomCollisionMask: false,
                customCollisionMask: [],
            })
    }

    return sprites;
}

function addAnimation(sprite, resource, timeBetweenFrames) {
    const sprites = createSprites(resource.name);

    // const pixiTexture = getPixiTextureFromResourceName(resourceName);
    const imageManager = runtimeScene.getGame().getImageManager();
    const animationData = {
        name: `${resource.name}`,
        useMultipleDirections: false,
        directions: [{
            timeBetweenFrames: timeBetweenFrames,
            looping: true,
            sprites: sprites,
        }],
    }

    const newAnimation = new gdjs.SpriteAnimation(imageManager, animationData);
   
    modifyExistingAnimation(newAnimation, sprites.map(s=>{return{name: resource.cacheId}}));

    // Add the new animation to the sprite
    sprite._animations.push(newAnimation);
}

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const object = objects[0];
const behavior = object.getBehavior(behaviorName);
const timeBetweenFrames = 1/behavior._behaviorData.FPS;

gdjs.__dynamicResources.characterIcons.forEach(resource=>addAnimation(objects[0], resource, timeBetweenFrames));

};
gdjs.evtsExt__DynamicResource__DynamicAnimationCharacterIcons.DynamicAnimationCharacterIcons.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__DynamicResource__InitializeVariables.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicResource__DynamicAnimationCharacterIcons.DynamicAnimationCharacterIcons.prototype.onCreatedContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__DynamicResource__DynamicAnimationCharacterIcons.DynamicAnimationCharacterIcons.prototype.onCreatedContext.GDObjectObjects1);
gdjs.evtsExt__DynamicResource__DynamicAnimationCharacterIcons.DynamicAnimationCharacterIcons.prototype.onCreatedContext.userFunc0x29f2460(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__DynamicResource__DynamicAnimationCharacterIcons.DynamicAnimationCharacterIcons.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DynamicResource__DynamicAnimationCharacterIcons.DynamicAnimationCharacterIcons.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DynamicResource__DynamicAnimationCharacterIcons.DynamicAnimationCharacterIcons.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DynamicResource__DynamicAnimationCharacterIcons.DynamicAnimationCharacterIcons.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__DynamicResource__DynamicAnimationCharacterIcons.DynamicAnimationCharacterIcons.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("DynamicResource::DynamicAnimationCharacterIcons", gdjs.evtsExt__DynamicResource__DynamicAnimationCharacterIcons.DynamicAnimationCharacterIcons);
