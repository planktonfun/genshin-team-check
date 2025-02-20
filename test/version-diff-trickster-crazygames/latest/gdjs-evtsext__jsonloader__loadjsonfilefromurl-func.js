
if (typeof gdjs.evtsExt__JsonLoader__LoadJSONFileFromURL !== "undefined") {
  gdjs.evtsExt__JsonLoader__LoadJSONFileFromURL.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__JsonLoader__LoadJSONFileFromURL = {};


gdjs.evtsExt__JsonLoader__LoadJSONFileFromURL.userFunc0x14ec058 = function(runtimeScene, eventsFunctionContext) {
"use strict";
async function fetchJSON(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

(async () => {
    const SceneVariableName = await fetchJSON(eventsFunctionContext.getArgument("URL"));
    // console.log({SceneVariableName});

    eventsFunctionContext
    .getArgument("SceneVariable")
    .fromJSObject(SceneVariableName);
})();

};
gdjs.evtsExt__JsonLoader__LoadJSONFileFromURL.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__JsonLoader__LoadJSONFileFromURL.userFunc0x14ec058(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__JsonLoader__LoadJSONFileFromURL.func = function(runtimeScene, URL, SceneVariable, parentEventsFunctionContext) {
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
if (argName === "URL") return URL;
if (argName === "SceneVariable") return SceneVariable;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__JsonLoader__LoadJSONFileFromURL.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__JsonLoader__LoadJSONFileFromURL.registeredGdjsCallbacks = [];