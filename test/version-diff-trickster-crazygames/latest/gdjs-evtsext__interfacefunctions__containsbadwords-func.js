
if (typeof gdjs.evtsExt__InterfaceFunctions__ContainsBadWords !== "undefined") {
  gdjs.evtsExt__InterfaceFunctions__ContainsBadWords.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InterfaceFunctions__ContainsBadWords = {};


gdjs.evtsExt__InterfaceFunctions__ContainsBadWords.userFunc0xe7aed8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
function containsBadWords(text) {
  const hasProfanity = hasBadWords(text);
  runtimeScene.getVariables().get('_containsBadWords').setBoolean(hasProfanity);
  gdjs.evtTools.common.resolveAsyncEventsFunction(eventsFunctionContext);

  // const apiUrl = 'https://www.purgomalum.com/service/containsprofanity?text=';

  // Encode the text to be included in the URL
  // const encodedText = encodeURIComponent(text);

  // return fetch(apiUrl + encodedText)
  //   .then(response => response.text())
  //   .then(result => result === 'true')
  //   .catch(error => {
  //     console.error('Error checking for profanity:', error);
  //     gdjs.evtTools.common.resolveAsyncEventsFunction(eventsFunctionContext);
  //     return false;
  //   });
}

const userInput = eventsFunctionContext.getArgument('Input').toString();
containsBadWords(userInput);
  // .then(hasProfanity => {
  //   runtimeScene.getVariables().get('_containsBadWords').setBoolean(hasProfanity);
  //   gdjs.evtTools.common.resolveAsyncEventsFunction(eventsFunctionContext);
  // });

};
gdjs.evtsExt__InterfaceFunctions__ContainsBadWords.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InterfaceFunctions__ContainsBadWords.userFunc0xe7aed8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InterfaceFunctions__ContainsBadWords.func = function(runtimeScene, Input, parentEventsFunctionContext) {
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
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
if (argName === "Input") return Input;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InterfaceFunctions__ContainsBadWords.eventsList0(runtimeScene, eventsFunctionContext);

return eventsFunctionContext.task
}

gdjs.evtsExt__InterfaceFunctions__ContainsBadWords.registeredGdjsCallbacks = [];