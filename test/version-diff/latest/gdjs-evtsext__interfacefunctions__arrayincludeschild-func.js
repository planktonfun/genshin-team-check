
if (typeof gdjs.evtsExt__InterfaceFunctions__ArrayIncludesChild !== "undefined") {
  gdjs.evtsExt__InterfaceFunctions__ArrayIncludesChild.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InterfaceFunctions__ArrayIncludesChild = {};


gdjs.evtsExt__InterfaceFunctions__ArrayIncludesChild.userFunc0x331a3d8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
var equippable = eventsFunctionContext.getArgument('SceneVariable').toJSObject();
var elementString = eventsFunctionContext.getArgument('ElementString').toString();

var result = 0;

if(equippable.includes(elementString)) {
    result = 1;
}

eventsFunctionContext.returnValue = result;
};
gdjs.evtsExt__InterfaceFunctions__ArrayIncludesChild.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InterfaceFunctions__ArrayIncludesChild.userFunc0x331a3d8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InterfaceFunctions__ArrayIncludesChild.func = function(runtimeScene, SceneVariable, ElementString, parentEventsFunctionContext) {
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
if (argName === "SceneVariable") return SceneVariable;
if (argName === "ElementString") return ElementString;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InterfaceFunctions__ArrayIncludesChild.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__InterfaceFunctions__ArrayIncludesChild.registeredGdjsCallbacks = [];