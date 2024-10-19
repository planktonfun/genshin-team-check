
if (typeof gdjs.evtsExt__BaseGameFunctions__GetDistanceBetweenTwoSprites !== "undefined") {
  gdjs.evtsExt__BaseGameFunctions__GetDistanceBetweenTwoSprites.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BaseGameFunctions__GetDistanceBetweenTwoSprites = {};
gdjs.evtsExt__BaseGameFunctions__GetDistanceBetweenTwoSprites.GDSpriteAObjects1= [];
gdjs.evtsExt__BaseGameFunctions__GetDistanceBetweenTwoSprites.GDSpriteAObjects2= [];
gdjs.evtsExt__BaseGameFunctions__GetDistanceBetweenTwoSprites.GDSpriteBObjects1= [];
gdjs.evtsExt__BaseGameFunctions__GetDistanceBetweenTwoSprites.GDSpriteBObjects2= [];


gdjs.evtsExt__BaseGameFunctions__GetDistanceBetweenTwoSprites.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("SpriteA"), gdjs.evtsExt__BaseGameFunctions__GetDistanceBetweenTwoSprites.GDSpriteAObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("SpriteB"), gdjs.evtsExt__BaseGameFunctions__GetDistanceBetweenTwoSprites.GDSpriteBObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.common.distanceBetweenPositions((( gdjs.evtsExt__BaseGameFunctions__GetDistanceBetweenTwoSprites.GDSpriteAObjects1.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__GetDistanceBetweenTwoSprites.GDSpriteAObjects1[0].getCenterXInScene()), (( gdjs.evtsExt__BaseGameFunctions__GetDistanceBetweenTwoSprites.GDSpriteAObjects1.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__GetDistanceBetweenTwoSprites.GDSpriteAObjects1[0].getCenterYInScene()), (( gdjs.evtsExt__BaseGameFunctions__GetDistanceBetweenTwoSprites.GDSpriteBObjects1.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__GetDistanceBetweenTwoSprites.GDSpriteBObjects1[0].getCenterXInScene()), (( gdjs.evtsExt__BaseGameFunctions__GetDistanceBetweenTwoSprites.GDSpriteBObjects1.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__GetDistanceBetweenTwoSprites.GDSpriteBObjects1[0].getCenterYInScene())); }}}

}


};

gdjs.evtsExt__BaseGameFunctions__GetDistanceBetweenTwoSprites.func = function(runtimeScene, SpriteA, SpriteB, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"SpriteA": SpriteA
, "SpriteB": SpriteB
},
  _objectArraysMap: {
"SpriteA": gdjs.objectsListsToArray(SpriteA)
, "SpriteB": gdjs.objectsListsToArray(SpriteB)
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__BaseGameFunctions__GetDistanceBetweenTwoSprites.GDSpriteAObjects1.length = 0;
gdjs.evtsExt__BaseGameFunctions__GetDistanceBetweenTwoSprites.GDSpriteAObjects2.length = 0;
gdjs.evtsExt__BaseGameFunctions__GetDistanceBetweenTwoSprites.GDSpriteBObjects1.length = 0;
gdjs.evtsExt__BaseGameFunctions__GetDistanceBetweenTwoSprites.GDSpriteBObjects2.length = 0;

gdjs.evtsExt__BaseGameFunctions__GetDistanceBetweenTwoSprites.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__BaseGameFunctions__GetDistanceBetweenTwoSprites.registeredGdjsCallbacks = [];