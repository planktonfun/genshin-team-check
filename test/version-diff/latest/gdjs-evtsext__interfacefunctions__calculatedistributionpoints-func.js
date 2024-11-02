
if (typeof gdjs.evtsExt__InterfaceFunctions__CalculateDistributionPoints !== "undefined") {
  gdjs.evtsExt__InterfaceFunctions__CalculateDistributionPoints.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InterfaceFunctions__CalculateDistributionPoints = {};


gdjs.evtsExt__InterfaceFunctions__CalculateDistributionPoints.userFunc0x304a628 = function(runtimeScene, eventsFunctionContext) {
"use strict";
function increaseVariable(selectedVariable, increaseAmount=1, lockedVariable = 'a') {
  const minLimit = 1;
  const maxLimit = 4;

  // don't increase locked variable
  if(selectedVariable == lockedVariable) {
    // console.log(selectedVariable+" is locked ")
    return;
  }

  // check if variable is already at max limit
  if(distributedVariables[selectedVariable] == maxLimit) {
    // console.log(selectedVariable+" is at maximum ")
    return;
  }

  for (var j = 0; j < increaseAmount; j++) {
    // decrease none selected variable
    for(var i in distributedVariables) {
      // ignore the same variable
      if(i == selectedVariable) {
        continue;
      }

      // don't decrease locked variable
      if(i == lockedVariable) {
        // console.log(i+" is locked ")
        continue;
      }

      // don't decrease variables that already at min limit
      if(distributedVariables[i] <= minLimit){
        // console.log(i+" is at minimum ")
        continue;
      }

      distributedVariables[i]--;
      distributedVariables[selectedVariable]++;
      break;
    }
  }
}

let distributedVariables = runtimeScene.getVariables().get('distributedVariables').toJSObject();

const lockedVariable = eventsFunctionContext.getArgument("LockedType");
const increaseType = eventsFunctionContext.getArgument("IncreaseType");

increaseVariable(increaseType, 1, lockedVariable);

runtimeScene.getVariables().get('distributedVariables').fromJSObject(distributedVariables);

};
gdjs.evtsExt__InterfaceFunctions__CalculateDistributionPoints.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__InterfaceFunctions__CalculateDistributionPoints.userFunc0x304a628(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InterfaceFunctions__CalculateDistributionPoints.func = function(runtimeScene, LockedType, IncreaseType, parentEventsFunctionContext) {
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
if (argName === "LockedType") return LockedType;
if (argName === "IncreaseType") return IncreaseType;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InterfaceFunctions__CalculateDistributionPoints.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__InterfaceFunctions__CalculateDistributionPoints.registeredGdjsCallbacks = [];