
if (typeof gdjs.evtsExt__StepFunctions__ReverseTweenStep !== "undefined") {
  gdjs.evtsExt__StepFunctions__ReverseTweenStep.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__StepFunctions__ReverseTweenStep = {};


gdjs.evtsExt__StepFunctions__ReverseTweenStep.userFunc0xbcce58 = function(runtimeScene, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = stepFunctions.tweenStep(
    eventsFunctionContext.getArgument("TimeStamp").valueOf(),
    eventsFunctionContext.getArgument("Seconds").valueOf(),
    eventsFunctionContext.getArgument("MaxValue").valueOf()
)
};
gdjs.evtsExt__StepFunctions__ReverseTweenStep.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__StepFunctions__ReverseTweenStep.userFunc0xbcce58(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__StepFunctions__ReverseTweenStep.func = function(runtimeScene, TimeStamp, Seconds, MaxValue, parentEventsFunctionContext) {
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
if (argName === "TimeStamp") return TimeStamp;
if (argName === "Seconds") return Seconds;
if (argName === "MaxValue") return MaxValue;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__StepFunctions__ReverseTweenStep.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__StepFunctions__ReverseTweenStep.registeredGdjsCallbacks = [];