
if (typeof gdjs.evtsExt__OnlineMultiplayerFirebase__SetRespawnTime !== "undefined") {
  gdjs.evtsExt__OnlineMultiplayerFirebase__SetRespawnTime.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OnlineMultiplayerFirebase__SetRespawnTime = {};


gdjs.evtsExt__OnlineMultiplayerFirebase__SetRespawnTime.userFunc0xee9c28 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if(window['lobby']) {
    lobby.setServerRespawnVariable(
        runtimeScene.getGame().getVariables().get('ServerPath').getAsString(),
        eventsFunctionContext.getArgument("MonsterName").toString(),
        eventsFunctionContext.getArgument("Seconds").valueOf(),
        'RespawnCooldowns'
    );
}
};
gdjs.evtsExt__OnlineMultiplayerFirebase__SetRespawnTime.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__OnlineMultiplayerFirebase__SetRespawnTime.userFunc0xee9c28(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayerFirebase__SetRespawnTime.func = function(runtimeScene, MonsterName, Seconds, parentEventsFunctionContext) {
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
if (argName === "MonsterName") return MonsterName;
if (argName === "Seconds") return Seconds;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__OnlineMultiplayerFirebase__SetRespawnTime.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__OnlineMultiplayerFirebase__SetRespawnTime.registeredGdjsCallbacks = [];