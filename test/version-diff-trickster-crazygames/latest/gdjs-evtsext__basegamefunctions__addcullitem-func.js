
if (typeof gdjs.evtsExt__BaseGameFunctions__AddCullItem !== "undefined") {
  gdjs.evtsExt__BaseGameFunctions__AddCullItem.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BaseGameFunctions__AddCullItem = {};
gdjs.evtsExt__BaseGameFunctions__AddCullItem.GDobjectObjects1= [];


gdjs.evtsExt__BaseGameFunctions__AddCullItem.userFunc0x15db230 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if(!window.game) return;

function deleteObject(obj) {
    try {
        runtimeScene.markObjectForDeletion(obj);
    } catch(e) {
        console.log(obj)
        console.log(e);
    }
}

// Add objects (x, y, width, height)
objects.forEach(obj=>{
    const id = eventsFunctionContext.getArgument("id").toString();
    const result = eventsFunctionContext.getArgument("UseAutoId").valueOf() ? addCulled(obj) : addCulled(obj, id);

    if(result) {
        if(eventsFunctionContext.getArgument("removeItem").valueOf()) {
            deleteObject(obj);
        }
    }
});

};
gdjs.evtsExt__BaseGameFunctions__AddCullItem.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("object"), gdjs.evtsExt__BaseGameFunctions__AddCullItem.GDobjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__BaseGameFunctions__AddCullItem.GDobjectObjects1);
gdjs.evtsExt__BaseGameFunctions__AddCullItem.userFunc0x15db230(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__BaseGameFunctions__AddCullItem.func = function(runtimeScene, object, id, removeItem, UseAutoId, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"object": object
},
  _objectArraysMap: {
"object": gdjs.objectsListsToArray(object)
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
if (argName === "removeItem") return removeItem;
if (argName === "UseAutoId") return UseAutoId;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__BaseGameFunctions__AddCullItem.GDobjectObjects1.length = 0;

gdjs.evtsExt__BaseGameFunctions__AddCullItem.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__BaseGameFunctions__AddCullItem.registeredGdjsCallbacks = [];