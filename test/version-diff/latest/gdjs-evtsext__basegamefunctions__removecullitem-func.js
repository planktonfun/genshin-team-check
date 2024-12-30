
if (typeof gdjs.evtsExt__BaseGameFunctions__RemoveCullItem !== "undefined") {
  gdjs.evtsExt__BaseGameFunctions__RemoveCullItem.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BaseGameFunctions__RemoveCullItem = {};


gdjs.evtsExt__BaseGameFunctions__RemoveCullItem.userFunc0x128a150 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if(!window.game) return;

game.deleteObject(eventsFunctionContext.getArgument("id").toString());

// runtimeScene.getObjects('itemPickable3').forEach(obj=>{
//     game.deleteObject(obj.getVariables().get('uid').getAsString())
// });



};
gdjs.evtsExt__BaseGameFunctions__RemoveCullItem.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__BaseGameFunctions__RemoveCullItem.userFunc0x128a150(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__BaseGameFunctions__RemoveCullItem.func = function(runtimeScene, id, parentEventsFunctionContext) {
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
if (argName === "id") return id;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__BaseGameFunctions__RemoveCullItem.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__BaseGameFunctions__RemoveCullItem.registeredGdjsCallbacks = [];