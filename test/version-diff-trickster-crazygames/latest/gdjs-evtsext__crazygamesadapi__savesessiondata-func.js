
if (typeof gdjs.evtsExt__CrazyGamesAdApi__SaveSessionData !== "undefined") {
  gdjs.evtsExt__CrazyGamesAdApi__SaveSessionData.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CrazyGamesAdApi__SaveSessionData = {};


gdjs.evtsExt__CrazyGamesAdApi__SaveSessionData.userFunc0x235bcd8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
// Storing Persistent User Data
async function saveUserData(key, value) {
    try {
        await CrazyGames.SDK.data.setItem(key, value);
        console.log(`Data saved: ${key} = ${value}`);
    } catch (error) {
        console.error("Error saving user data:", error);
    }
}

const key = eventsFunctionContext.getArgument('Id').toString();
const value = eventsFunctionContext.getArgument('Value').valueOf();

saveUserData(key, value);
};
gdjs.evtsExt__CrazyGamesAdApi__SaveSessionData.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__CrazyGamesAdApi__SaveSessionData.userFunc0x235bcd8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CrazyGamesAdApi__SaveSessionData.func = function(runtimeScene, Id, Value, parentEventsFunctionContext) {
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
if (argName === "Id") return Id;
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CrazyGamesAdApi__SaveSessionData.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CrazyGamesAdApi__SaveSessionData.registeredGdjsCallbacks = [];