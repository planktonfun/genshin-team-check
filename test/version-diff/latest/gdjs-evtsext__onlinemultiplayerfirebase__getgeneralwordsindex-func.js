
if (typeof gdjs.evtsExt__OnlineMultiplayerFirebase__GetGeneralWordsIndex !== "undefined") {
  gdjs.evtsExt__OnlineMultiplayerFirebase__GetGeneralWordsIndex.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OnlineMultiplayerFirebase__GetGeneralWordsIndex = {};


gdjs.evtsExt__OnlineMultiplayerFirebase__GetGeneralWordsIndex.userFunc0x184e028 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const animationMap = new WordIdMapper([
    "Idle",
    "Health",
    "Ready",
    "Attack",
    "Energy",
    "Move",
    "Happy",
    "Death",
    "Anger",
    "Attack-A",
    "Attack-B",
    "Attack-Idle-Equip",
    "Attack-Idle",
    "Attack-Prepare",
    "Block",
    "Casting",
    "Chair-Sitting",
    "Cheer",
    "Critical-Attack",
    "Dodge",
    "Drill",
    "Fainted",
    "Gun-Mode",
    "Gun-Shoot",
    "Hit",
    "Idle-A",
    "Idle-B",
    "Magic",
    "Run-Equip",
    "Run",
    "Sad",
    "Shield-Block",
    "Sit",
    "Sleep",
    "Standing-Equip",
    "Standing",
    "Throw",
    "Walking-Equip",
    "Walking"
]);

try {
    eventsFunctionContext.returnValue = animationMap.get(eventsFunctionContext.getArgument("Word").toString());
} catch(e) {
    eventsFunctionContext.returnValue = 0;
}
};
gdjs.evtsExt__OnlineMultiplayerFirebase__GetGeneralWordsIndex.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__OnlineMultiplayerFirebase__GetGeneralWordsIndex.userFunc0x184e028(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayerFirebase__GetGeneralWordsIndex.func = function(runtimeScene, Word, parentEventsFunctionContext) {
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
if (argName === "Word") return Word;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__OnlineMultiplayerFirebase__GetGeneralWordsIndex.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__OnlineMultiplayerFirebase__GetGeneralWordsIndex.registeredGdjsCallbacks = [];