
if (typeof gdjs.evtsExt__OnlineMultiplayerFirebase__CastLocally !== "undefined") {
  gdjs.evtsExt__OnlineMultiplayerFirebase__CastLocally.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OnlineMultiplayerFirebase__CastLocally = {};


gdjs.evtsExt__OnlineMultiplayerFirebase__CastLocally.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure("{}", runtimeScene.getScene().getVariables().get("a"));
}{gdjs.evtTools.network.jsonToVariableStructure((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Data") : ""), runtimeScene.getScene().getVariables().get("a").getChild("data"));
}{runtimeScene.getScene().getVariables().get("a").getChild("type").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Type") : ""));
}{runtimeScene.getScene().getVariables().get("a").getChild("castLocally").setNumber(1);
}{gdjs.evtTools.variable.variablePushCopy(runtimeScene.getScene().getVariables().get("RecievedMessages"), runtimeScene.getScene().getVariables().get("a"));
}{gdjs.evtTools.network.jsonToVariableStructure("{}", runtimeScene.getScene().getVariables().get("a"));
}}

}


};

gdjs.evtsExt__OnlineMultiplayerFirebase__CastLocally.func = function(runtimeScene, Type, Data, parentEventsFunctionContext) {
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
if (argName === "Type") return Type;
if (argName === "Data") return Data;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__OnlineMultiplayerFirebase__CastLocally.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__OnlineMultiplayerFirebase__CastLocally.registeredGdjsCallbacks = [];