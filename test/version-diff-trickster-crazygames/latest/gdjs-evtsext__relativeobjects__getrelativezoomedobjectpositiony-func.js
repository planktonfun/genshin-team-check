
if (typeof gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionY !== "undefined") {
  gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionY.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionY = {};
gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionY.GDDeathSpriteObjects1= [];
gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionY.GDDeathSpriteObjects2= [];


gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionY.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("DeathSprite"), gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionY.GDDeathSpriteObjects1);
{runtimeScene.getScene().getVariables().get("Layer").setString((( gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionY.GDDeathSpriteObjects1.length === 0 ) ? "" :gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionY.GDDeathSpriteObjects1[0].getLayer()));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(60210316);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("Camera").getChild("Default").getChild("X").setNumber(gdjs.evtTools.camera.getCameraX(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Layer")), 0));
}{runtimeScene.getScene().getVariables().get("Camera").getChild("Default").getChild("Y").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Layer")), 0));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("DeathSprite"), gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionY.GDDeathSpriteObjects1);
{runtimeScene.getScene().getVariables().get("OffsetTestX").setNumber(((( gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionY.GDDeathSpriteObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionY.GDDeathSpriteObjects1[0].getCenterXInScene()) - gdjs.evtTools.camera.getCameraX(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Layer")), 0)) * (gdjs.evtTools.camera.getCameraZoom(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Layer")), 0) - 1) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Camera").getChild("Default").getChild("X")) - gdjs.evtTools.camera.getCameraX(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Layer")), 0)));
}{runtimeScene.getScene().getVariables().get("OffsetTestY").setNumber(((( gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionY.GDDeathSpriteObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionY.GDDeathSpriteObjects1[0].getCenterYInScene()) - gdjs.evtTools.camera.getCameraY(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Layer")), 0)) * (gdjs.evtTools.camera.getCameraZoom(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Layer")), 0) - 1) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Camera").getChild("Default").getChild("Y")) - gdjs.evtTools.camera.getCameraY(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Layer")), 0)));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("DeathSprite"), gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionY.GDDeathSpriteObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = Math.round((( gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionY.GDDeathSpriteObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionY.GDDeathSpriteObjects1[0].getCenterYInScene()) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("OffsetTestY"))); }}}

}


};

gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionY.func = function(runtimeScene, DeathSprite, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"DeathSprite": DeathSprite
},
  _objectArraysMap: {
"DeathSprite": gdjs.objectsListsToArray(DeathSprite)
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

gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionY.GDDeathSpriteObjects1.length = 0;
gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionY.GDDeathSpriteObjects2.length = 0;

gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionY.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__RelativeObjects__GetRelativeZoomedObjectPositionY.registeredGdjsCallbacks = [];