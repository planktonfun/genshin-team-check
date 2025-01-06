
if (typeof gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance !== "undefined") {
  gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance = {};
gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDPlayerSpawnObjects1= [];
gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDPlayerSpawnObjects2= [];
gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDWarpzoneObjects1= [];
gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDWarpzoneObjects2= [];


gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.mapOfGDgdjs_9546evtsExt_9595_9595BaseGameFunctions_9595_9595PlaySoundAtADistance_9546GDPlayerSpawnObjects1Objects = Hashtable.newFrom({"PlayerSpawn": gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDPlayerSpawnObjects1});
gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.mapOfGDgdjs_9546evtsExt_9595_9595BaseGameFunctions_9595_9595PlaySoundAtADistance_9546GDWarpzoneObjects1Objects = Hashtable.newFrom({"Warpzone": gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDWarpzoneObjects1});
gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.userFunc0x151c628 = function(runtimeScene, eventsFunctionContext) {
"use strict";
var volume = runtimeScene.getVariables().get('Volume').getAsNumber();
var soundFileName = eventsFunctionContext.getArgument("SoundResource"); //eventsFunctionContext.getArgument("SoundResource").toString();

try {
    gdjs.evtTools.sound.playSound(runtimeScene, soundFileName, false, volume, 1);
} catch(e) {
    console.log(e);
}
};
gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.userFunc0x151c628(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("PlayerSpawn"), gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDPlayerSpawnObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Warpzone"), gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDWarpzoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.mapOfGDgdjs_9546evtsExt_9595_9595BaseGameFunctions_9595_9595PlaySoundAtADistance_9546GDPlayerSpawnObjects1Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDPlayerSpawnObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDPlayerSpawnObjects1[i].getVariableString(gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDPlayerSpawnObjects1[i].getVariables().get("uid")) == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("PeerID")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDPlayerSpawnObjects1[k] = gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDPlayerSpawnObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDPlayerSpawnObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.mapOfGDgdjs_9546evtsExt_9595_9595BaseGameFunctions_9595_9595PlaySoundAtADistance_9546GDWarpzoneObjects1Objects, (( gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDPlayerSpawnObjects1.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDPlayerSpawnObjects1[0].getCenterXInScene()), (( gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDPlayerSpawnObjects1.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDPlayerSpawnObjects1[0].getCenterYInScene()), false);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDPlayerSpawnObjects1 */
/* Reuse gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDWarpzoneObjects1 */
{runtimeScene.getScene().getVariables().get("TempVolume").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Config").getChild("SFXVolume")));
}{runtimeScene.getScene().getVariables().get("Volume").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("TempVolume")) - (gdjs.evtTools.common.normalize(gdjs.evtTools.common.distanceBetweenPositions((( gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDWarpzoneObjects1.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDWarpzoneObjects1[0].getCenterXInScene()), (( gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDWarpzoneObjects1.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDWarpzoneObjects1[0].getCenterYInScene()), (( gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDPlayerSpawnObjects1.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDPlayerSpawnObjects1[0].getCenterXInScene()), (( gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDPlayerSpawnObjects1.length === 0 ) ? 0 :gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDPlayerSpawnObjects1[0].getCenterYInScene())), 0, 500) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("TempVolume"))));
}
{ //Subevents
gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.func = function(runtimeScene, Distance, PlayerSpawn, Warpzone, SoundResource, MaxVolume, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"PlayerSpawn": PlayerSpawn
, "Warpzone": Warpzone
},
  _objectArraysMap: {
"PlayerSpawn": gdjs.objectsListsToArray(PlayerSpawn)
, "Warpzone": gdjs.objectsListsToArray(Warpzone)
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
if (argName === "Distance") return Distance;
if (argName === "SoundResource") return SoundResource;
if (argName === "MaxVolume") return MaxVolume;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDPlayerSpawnObjects1.length = 0;
gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDPlayerSpawnObjects2.length = 0;
gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDWarpzoneObjects1.length = 0;
gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.GDWarpzoneObjects2.length = 0;

gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__BaseGameFunctions__PlaySoundAtADistance.registeredGdjsCallbacks = [];