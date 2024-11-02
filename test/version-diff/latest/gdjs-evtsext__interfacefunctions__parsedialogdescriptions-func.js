
if (typeof gdjs.evtsExt__InterfaceFunctions__ParseDialogDescriptions !== "undefined") {
  gdjs.evtsExt__InterfaceFunctions__ParseDialogDescriptions.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InterfaceFunctions__ParseDialogDescriptions = {};


gdjs.evtsExt__InterfaceFunctions__ParseDialogDescriptions.userFunc0x306b458 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const description = eventsFunctionContext.getArgument("Description").toString();

function replaceNewlines(str) {
  return str.replace(/\\n/g, gdjs.evtTools.string.newLine());
}

eventsFunctionContext.returnValue = replaceNewlines(description);
};
gdjs.evtsExt__InterfaceFunctions__ParseDialogDescriptions.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__InterfaceFunctions__ParseDialogDescriptions.userFunc0x306b458(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InterfaceFunctions__ParseDialogDescriptions.func = function(runtimeScene, Description, parentEventsFunctionContext) {
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
if (argName === "Description") return Description;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InterfaceFunctions__ParseDialogDescriptions.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__InterfaceFunctions__ParseDialogDescriptions.registeredGdjsCallbacks = [];