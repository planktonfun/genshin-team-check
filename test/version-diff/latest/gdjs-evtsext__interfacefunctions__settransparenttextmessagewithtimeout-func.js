
if (typeof gdjs.evtsExt__InterfaceFunctions__SetTransparentTextMessageWithTimeout !== "undefined") {
  gdjs.evtsExt__InterfaceFunctions__SetTransparentTextMessageWithTimeout.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InterfaceFunctions__SetTransparentTextMessageWithTimeout = {};


gdjs.evtsExt__InterfaceFunctions__SetTransparentTextMessageWithTimeout.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().get("TransparentTextMessage").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("message") : ""));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TransparentMessageTimer");
}{runtimeScene.getScene().getVariables().get("TransparentTextMessageSeconds").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Timeout")) || 0 : 0));
}}

}


};

gdjs.evtsExt__InterfaceFunctions__SetTransparentTextMessageWithTimeout.func = function(runtimeScene, message, Timeout, parentEventsFunctionContext) {
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
if (argName === "message") return message;
if (argName === "Timeout") return Timeout;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InterfaceFunctions__SetTransparentTextMessageWithTimeout.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__InterfaceFunctions__SetTransparentTextMessageWithTimeout.registeredGdjsCallbacks = [];