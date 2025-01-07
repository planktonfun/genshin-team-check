
if (typeof gdjs.evtsExt__JsonLoader__LoadJSONFromTextObject !== "undefined") {
  gdjs.evtsExt__JsonLoader__LoadJSONFromTextObject.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__JsonLoader__LoadJSONFromTextObject = {};
gdjs.evtsExt__JsonLoader__LoadJSONFromTextObject.GDTextObjectObjects1= [];
gdjs.evtsExt__JsonLoader__LoadJSONFromTextObject.GDTextObjectObjects2= [];


gdjs.evtsExt__JsonLoader__LoadJSONFromTextObject.mapOfEmptyGDTextObjectObjects = Hashtable.newFrom({"TextObject": []});
gdjs.evtsExt__JsonLoader__LoadJSONFromTextObject.mapOfGDgdjs_9546evtsExt_9595_9595JsonLoader_9595_9595LoadJSONFromTextObject_9546GDTextObjectObjects1Objects = Hashtable.newFrom({"TextObject": gdjs.evtsExt__JsonLoader__LoadJSONFromTextObject.GDTextObjectObjects1});
gdjs.evtsExt__JsonLoader__LoadJSONFromTextObject.userFunc0x212f568 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const SceneVariableName = JSON.parse(objects[0].getString());
// console.log({SceneVariableName});
eventsFunctionContext
    .getArgument("SceneVariable")
    .fromJSObject(SceneVariableName);
};
gdjs.evtsExt__JsonLoader__LoadJSONFromTextObject.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__JsonLoader__LoadJSONFromTextObject.GDTextObjectObjects1 */

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__JsonLoader__LoadJSONFromTextObject.GDTextObjectObjects1);
gdjs.evtsExt__JsonLoader__LoadJSONFromTextObject.userFunc0x212f568(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__JsonLoader__LoadJSONFromTextObject.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__JsonLoader__LoadJSONFromTextObject.mapOfEmptyGDTextObjectObjects) == 0;
if (isConditionTrue_0) {
gdjs.evtsExt__JsonLoader__LoadJSONFromTextObject.GDTextObjectObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__JsonLoader__LoadJSONFromTextObject.mapOfGDgdjs_9546evtsExt_9595_9595JsonLoader_9595_9595LoadJSONFromTextObject_9546GDTextObjectObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.evtsExt__JsonLoader__LoadJSONFromTextObject.GDTextObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__JsonLoader__LoadJSONFromTextObject.GDTextObjectObjects1[i].hide();
}
}
{ //Subevents
gdjs.evtsExt__JsonLoader__LoadJSONFromTextObject.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__JsonLoader__LoadJSONFromTextObject.func = function(runtimeScene, TextObject, SceneVariable, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"TextObject": TextObject
},
  _objectArraysMap: {
"TextObject": gdjs.objectsListsToArray(TextObject)
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__JsonLoader__LoadJSONFromTextObject.GDTextObjectObjects1.length = 0;
gdjs.evtsExt__JsonLoader__LoadJSONFromTextObject.GDTextObjectObjects2.length = 0;

gdjs.evtsExt__JsonLoader__LoadJSONFromTextObject.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__JsonLoader__LoadJSONFromTextObject.registeredGdjsCallbacks = [];