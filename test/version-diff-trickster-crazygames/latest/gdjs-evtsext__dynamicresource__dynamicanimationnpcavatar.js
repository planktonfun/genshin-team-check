
gdjs.evtsExt__DynamicResource__DynamicAnimationNpcAvatar = gdjs.evtsExt__DynamicResource__DynamicAnimationNpcAvatar || {};

/**
 * Behavior generated from dynamic loading image for npc avatars
 */
gdjs.evtsExt__DynamicResource__DynamicAnimationNpcAvatar.DynamicAnimationNpcAvatar = class DynamicAnimationNpcAvatar extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__DynamicResource__DynamicAnimationNpcAvatar.DynamicAnimationNpcAvatar.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

/**
 * Shared data generated from dynamic loading image for npc avatars
 */
gdjs.evtsExt__DynamicResource__DynamicAnimationNpcAvatar.DynamicAnimationNpcAvatar.SharedData = class DynamicAnimationNpcAvatarSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__DynamicResource__DynamicAnimationNpcAvatar.DynamicAnimationNpcAvatar.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._DynamicResource_DynamicAnimationNpcAvatarSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._DynamicResource_DynamicAnimationNpcAvatarSharedData = new gdjs.evtsExt__DynamicResource__DynamicAnimationNpcAvatar.DynamicAnimationNpcAvatar.SharedData(
      initialData
    );
  }
  return instanceContainer._DynamicResource_DynamicAnimationNpcAvatarSharedData;
}

// Methods:
gdjs.evtsExt__DynamicResource__DynamicAnimationNpcAvatar.DynamicAnimationNpcAvatar.prototype.onCreatedContext = {};
gdjs.evtsExt__DynamicResource__DynamicAnimationNpcAvatar.DynamicAnimationNpcAvatar.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__DynamicResource__DynamicAnimationNpcAvatar.DynamicAnimationNpcAvatar.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__DynamicResource__DynamicAnimationNpcAvatar.DynamicAnimationNpcAvatar.prototype.onCreatedContext.userFunc0x382dc08 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
function basename(str, sep) {
    return str.substr(str.lastIndexOf(sep) + 1);
}

function strip_extension(str) {
    return str.substr(0,str.lastIndexOf('.'));
}

function getPixiTextureFromResourceName(resourceName) {
    return runtimeScene.getGame().getImageManager().getPIXITexture(resourceName);
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

function modifyExistingAnimation(existingAnimation, animationSprites) {
    existingAnimation.directions[0].frames.forEach((frame, index)=>{
        const canvas = gdjs.__dynamicResources.canvasCollection.get(animationSprites[index].name);
        frame.center.x = canvas.width/2;
        frame.center.y = canvas.height/2;
        frame.texture = PIXI.Texture.from(canvas);
        frame.baseTexture = PIXI.BaseTexture.from(canvas);
    });
}

function addAnimation(sprite, resource) {
    // const pixiTexture = getPixiTextureFromResourceName(resourceName);
    const imageManager = runtimeScene.getGame().getImageManager();
    const animationData = {
        name: `${resource.name}`,
        useMultipleDirections: false,
        directions: [{
            timeBetweenFrames: 0.08,
            looping: false,
            sprites: [{
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
            }],
        }],
    }

    const newAnimation = new gdjs.SpriteAnimation(imageManager, animationData);
    modifyExistingAnimation(newAnimation, [{name: resource.cacheId}])
    // Add the new animation to the sprite
    sprite._animations.push(newAnimation);
}

gdjs.__dynamicResources.npcAvatars.forEach(resource=>addAnimation(objects[0], resource));

};
gdjs.evtsExt__DynamicResource__DynamicAnimationNpcAvatar.DynamicAnimationNpcAvatar.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__DynamicResource__InitializeVariables.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DynamicResource__DynamicAnimationNpcAvatar.DynamicAnimationNpcAvatar.prototype.onCreatedContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__DynamicResource__DynamicAnimationNpcAvatar.DynamicAnimationNpcAvatar.prototype.onCreatedContext.GDObjectObjects1);
gdjs.evtsExt__DynamicResource__DynamicAnimationNpcAvatar.DynamicAnimationNpcAvatar.prototype.onCreatedContext.userFunc0x382dc08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__DynamicResource__DynamicAnimationNpcAvatar.DynamicAnimationNpcAvatar.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__DynamicResource__DynamicAnimationNpcAvatar.DynamicAnimationNpcAvatar.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DynamicResource__DynamicAnimationNpcAvatar.DynamicAnimationNpcAvatar.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DynamicResource__DynamicAnimationNpcAvatar.DynamicAnimationNpcAvatar.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__DynamicResource__DynamicAnimationNpcAvatar.DynamicAnimationNpcAvatar.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("DynamicResource::DynamicAnimationNpcAvatar", gdjs.evtsExt__DynamicResource__DynamicAnimationNpcAvatar.DynamicAnimationNpcAvatar);
