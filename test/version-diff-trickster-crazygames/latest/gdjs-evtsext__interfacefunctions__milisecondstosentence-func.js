
if (typeof gdjs.evtsExt__InterfaceFunctions__MilisecondsToSentence !== "undefined") {
  gdjs.evtsExt__InterfaceFunctions__MilisecondsToSentence.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InterfaceFunctions__MilisecondsToSentence = {};


gdjs.evtsExt__InterfaceFunctions__MilisecondsToSentence.userFunc0xe28518 = function(runtimeScene, eventsFunctionContext) {
"use strict";
function millisecondsToSentence(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;
  const remainingSeconds = seconds % 60;

  const parts = [];

  if (days > 0) {
    parts.push(`${days} day${days > 1 ? 's' : ''}`);
  }

  if (remainingHours > 0) {
    parts.push(`${remainingHours} hour${remainingHours > 1 ? 's' : ''}`);
  }

  if (remainingMinutes > 0) {
    parts.push(`${remainingMinutes} minute${remainingMinutes > 1 ? 's' : ''}`);
  }

  if (remainingSeconds > 0 || milliseconds < 1000) {
    parts.push(`${remainingSeconds} second${remainingSeconds > 1 ? 's' : ''}`);
  }

  return parts.join(', ');
}

// Example usage:
const milliseconds = eventsFunctionContext.getArgument('Miliseconds').valueOf(); // Replace with your desired milliseconds
const sentence = millisecondsToSentence(milliseconds);
eventsFunctionContext.returnValue = sentence;

};
gdjs.evtsExt__InterfaceFunctions__MilisecondsToSentence.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__InterfaceFunctions__MilisecondsToSentence.userFunc0xe28518(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InterfaceFunctions__MilisecondsToSentence.func = function(runtimeScene, Miliseconds, parentEventsFunctionContext) {
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
if (argName === "Miliseconds") return Miliseconds;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InterfaceFunctions__MilisecondsToSentence.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__InterfaceFunctions__MilisecondsToSentence.registeredGdjsCallbacks = [];