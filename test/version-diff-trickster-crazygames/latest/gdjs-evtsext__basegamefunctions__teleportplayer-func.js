
if (typeof gdjs.evtsExt__BaseGameFunctions__TeleportPlayer !== "undefined") {
  gdjs.evtsExt__BaseGameFunctions__TeleportPlayer.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BaseGameFunctions__TeleportPlayer = {};


gdjs.evtsExt__BaseGameFunctions__TeleportPlayer.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().get("SaveData").getChild("CurrentMap").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MapIndex")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("SpawningPointId").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SpawnPoint") : ""));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("IsTeleporting"), true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "etc_warp.mp3", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Config").getChild("SFXVolume")), 1);
}}

}


};

gdjs.evtsExt__BaseGameFunctions__TeleportPlayer.func = function(runtimeScene, MapIndex, SpawnPoint, parentEventsFunctionContext) {
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
if (argName === "MapIndex") return MapIndex;
if (argName === "SpawnPoint") return SpawnPoint;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__BaseGameFunctions__TeleportPlayer.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__BaseGameFunctions__TeleportPlayer.registeredGdjsCallbacks = [];