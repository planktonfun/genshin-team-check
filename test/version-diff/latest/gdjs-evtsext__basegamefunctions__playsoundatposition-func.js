
if (typeof gdjs.evtsExt__BaseGameFunctions__PlaySoundAtPosition !== "undefined") {
  gdjs.evtsExt__BaseGameFunctions__PlaySoundAtPosition.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BaseGameFunctions__PlaySoundAtPosition = {};


gdjs.evtsExt__BaseGameFunctions__PlaySoundAtPosition.userFunc0x1227160 = function(runtimeScene, eventsFunctionContext) {
"use strict";
var volume = runtimeScene.getVariables().get('Volume').getAsNumber();
var soundFileName = eventsFunctionContext.getArgument("SoundResource"); //eventsFunctionContext.getArgument("SoundResource").toString();

gdjs.evtTools.sound.playSound(runtimeScene, soundFileName, false, volume, 1);
};
gdjs.evtsExt__BaseGameFunctions__PlaySoundAtPosition.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("TempVolume").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Config").getChild("SFXVolume")));
}{runtimeScene.getScene().getVariables().get("Volume").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("TempVolume")) - (gdjs.evtTools.common.normalize(gdjs.evtTools.common.distanceBetweenPositions(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y")) || 0 : 0)), 0, 500) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("TempVolume"))));
}}

}


{


gdjs.evtsExt__BaseGameFunctions__PlaySoundAtPosition.userFunc0x1227160(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__BaseGameFunctions__PlaySoundAtPosition.func = function(runtimeScene, X, Y, MaxVolume, SoundResource, parentEventsFunctionContext) {
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
if (argName === "X") return X;
if (argName === "Y") return Y;
if (argName === "MaxVolume") return MaxVolume;
if (argName === "SoundResource") return SoundResource;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__BaseGameFunctions__PlaySoundAtPosition.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__BaseGameFunctions__PlaySoundAtPosition.registeredGdjsCallbacks = [];