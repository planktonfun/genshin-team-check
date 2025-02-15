
if (typeof gdjs.evtsExt__BaseGameFunctions__UpdateCullItem !== "undefined") {
  gdjs.evtsExt__BaseGameFunctions__UpdateCullItem.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BaseGameFunctions__UpdateCullItem = {};
gdjs.evtsExt__BaseGameFunctions__UpdateCullItem.GDobjectObjects1= [];
gdjs.evtsExt__BaseGameFunctions__UpdateCullItem.GDobjectObjects2= [];


gdjs.evtsExt__BaseGameFunctions__UpdateCullItem.mapOfGDgdjs_9546evtsExt_9595_9595BaseGameFunctions_9595_9595UpdateCullItem_9546GDobjectObjects1Objects = Hashtable.newFrom({"object": gdjs.evtsExt__BaseGameFunctions__UpdateCullItem.GDobjectObjects1});
gdjs.evtsExt__BaseGameFunctions__UpdateCullItem.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("object"), gdjs.evtsExt__BaseGameFunctions__UpdateCullItem.GDobjectObjects1);
{gdjs.evtsExt__BaseGameFunctions__RemoveCullItem.func(runtimeScene, eventsFunctionContext.getArgument("id"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__BaseGameFunctions__AddCullItem.func(runtimeScene, gdjs.evtsExt__BaseGameFunctions__UpdateCullItem.mapOfGDgdjs_9546evtsExt_9595_9595BaseGameFunctions_9595_9595UpdateCullItem_9546GDobjectObjects1Objects, eventsFunctionContext.getArgument("id"), false, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.evtsExt__BaseGameFunctions__UpdateCullItem.func = function(runtimeScene, object, id, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__BaseGameFunctions__UpdateCullItem.GDobjectObjects1.length = 0;
gdjs.evtsExt__BaseGameFunctions__UpdateCullItem.GDobjectObjects2.length = 0;

gdjs.evtsExt__BaseGameFunctions__UpdateCullItem.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__BaseGameFunctions__UpdateCullItem.registeredGdjsCallbacks = [];