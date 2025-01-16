
if (typeof gdjs.evtsExt__OnlineMultiplayerFirebase__GetRandomDrillItem !== "undefined") {
  gdjs.evtsExt__OnlineMultiplayerFirebase__GetRandomDrillItem.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OnlineMultiplayerFirebase__GetRandomDrillItem = {};


gdjs.evtsExt__OnlineMultiplayerFirebase__GetRandomDrillItem.userFunc0x34b75f8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
function getSceneVar(VarName) {
    return runtimeScene.getVariables().get(VarName).toJSObject();
}

function getGlobalVar(VarName) {
    return runtimeScene.getGame().getVariables().get(VarName).toJSObject();
}

function random(seed) {
    return randomInRange(
        0,
        10000,
        seed,
    )/10000;
}

const saveData = getGlobalVar('SaveData');
const mapList = getGlobalVar('MapList');
const rngList = getSceneVar('DrillRngProperties');

const layout = mapList[saveData.CurrentMap].Layout;


// Define the items array with their drop chances
const items = rngList[layout];

// Function to get a random item with drop chance
let initialSeed = eventsFunctionContext.getArgument("SeedNumber").valueOf();
function getRandomItemWithDropChance(itemsWithDropChance) {
    if(!itemsWithDropChance) return "blank";
    // Calculate the total drop chance
    const totalDropChance = itemsWithDropChance.reduce((acc, item) => acc + item.dropChance, 0);
    
    // Generate a random number between 0 and the total drop chance
    const randomValue = random(initialSeed) * totalDropChance;
    initialSeed++;

    // Iterate through the items and check if the random value falls within the range of their drop chance
    let accumulatedChance = 0;
    for (const item of itemsWithDropChance) {
        accumulatedChance += item.dropChance;
        if (randomValue < accumulatedChance) {
            return item;
        }
    }

    // If no item was selected (this should theoretically never happen)
    return null;
}

// Example usage
const randomItem = getRandomItemWithDropChance(items);

eventsFunctionContext.returnValue = randomItem.name;
};
gdjs.evtsExt__OnlineMultiplayerFirebase__GetRandomDrillItem.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__OnlineMultiplayerFirebase__GetRandomDrillItem.userFunc0x34b75f8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayerFirebase__GetRandomDrillItem.func = function(runtimeScene, SeedNumber, parentEventsFunctionContext) {
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
if (argName === "SeedNumber") return SeedNumber;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__OnlineMultiplayerFirebase__GetRandomDrillItem.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__OnlineMultiplayerFirebase__GetRandomDrillItem.registeredGdjsCallbacks = [];