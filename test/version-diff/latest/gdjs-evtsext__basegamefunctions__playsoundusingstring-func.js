
if (typeof gdjs.evtsExt__BaseGameFunctions__PlaySoundUsingString !== "undefined") {
  gdjs.evtsExt__BaseGameFunctions__PlaySoundUsingString.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BaseGameFunctions__PlaySoundUsingString = {};


gdjs.evtsExt__BaseGameFunctions__PlaySoundUsingString.userFunc0x3826578 = function(runtimeScene, eventsFunctionContext) {
"use strict";
// if(!window.active) return;

gdjs.evtTools.sound.playSoundOnChannel(
    runtimeScene,
    eventsFunctionContext.getArgument('Source').toString(),
    eventsFunctionContext.getArgument('Channel').valueOf(),
    eventsFunctionContext.getArgument('Loop').valueOf(),
    runtimeScene.getVariables().get('TempVolume').getAsNumber(),
    eventsFunctionContext.getArgument('Pitch').valueOf()
);
};
gdjs.evtsExt__BaseGameFunctions__PlaySoundUsingString.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__BaseGameFunctions__PlaySoundUsingString.userFunc0x3826578(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__BaseGameFunctions__PlaySoundUsingString.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("TempVolume").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Config").getChild("BackgroundVolume")));
}
{ //Subevents
gdjs.evtsExt__BaseGameFunctions__PlaySoundUsingString.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__BaseGameFunctions__PlaySoundUsingString.func = function(runtimeScene, Source, Volume, Pitch, Loop, Channel, parentEventsFunctionContext) {
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
if (argName === "Source") return Source;
if (argName === "Volume") return Volume;
if (argName === "Pitch") return Pitch;
if (argName === "Loop") return Loop;
if (argName === "Channel") return Channel;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__BaseGameFunctions__PlaySoundUsingString.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__BaseGameFunctions__PlaySoundUsingString.registeredGdjsCallbacks = [];