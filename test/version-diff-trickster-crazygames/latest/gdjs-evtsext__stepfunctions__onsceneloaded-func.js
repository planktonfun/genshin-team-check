
if (typeof gdjs.evtsExt__StepFunctions__onSceneLoaded !== "undefined") {
  gdjs.evtsExt__StepFunctions__onSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__StepFunctions__onSceneLoaded = {};


gdjs.evtsExt__StepFunctions__onSceneLoaded.userFunc0x15f50c0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
// e.g. 0 for 15 seconds then 1 for 15 seconds then back to 0 again for togglecycle 2
// e.g. 0 for 15 seconds then 1 for 15 seconds then 2.. then back to 0 again for togglecycle 3
function toggleEveryInterval(timestamp, seconds, toggleCycle = 2) {
	var milisec = seconds * 1000;
	toggleCycle = Math.max(2, toggleCycle);
	return (timestamp/milisec) % toggleCycle;
}

// e.g. 0..360 for 15 second then back to 0 again
function tweenStep(timestamp, seconds, maxValue) {
	var milisec = seconds * 1000;
	return (timestamp % milisec) / milisec * maxValue;
}

// e.g. 360..0 for 15 second then back to 360 again
function reverseTweenStep(timestamp, seconds, maxValue) {
	return maxValue - tweenStep(timestamp, seconds, maxValue);
}

// e.g. 360..0 for 15 second then alternate 0..360 for 15 seconds
function triangleStep(timestamp, seconds, maxValue) {
	if(Math.floor(toggleEveryInterval(timestamp, seconds)) == 1) {
		return tweenStep(timestamp, seconds, maxValue);
	}

	return reverseTweenStep(timestamp, seconds, maxValue);
}

window.stepFunctions={
    toggleEveryInterval: toggleEveryInterval,
    tweenStep: tweenStep,
    reverseTweenStep: reverseTweenStep,
    triangleStep: triangleStep
}
};
gdjs.evtsExt__StepFunctions__onSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__StepFunctions__onSceneLoaded.userFunc0x15f50c0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__StepFunctions__onSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__StepFunctions__onSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__StepFunctions__onSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__StepFunctions__onSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__StepFunctions__onSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeSceneLoadedCallback(gdjs.evtsExt__StepFunctions__onSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__StepFunctions__onSceneLoaded.registeredGdjsCallbacks.length - 1]);
