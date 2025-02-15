
if (typeof gdjs.evtsExt__InterfaceFunctions__SpawnItemNearCoordinates !== "undefined") {
  gdjs.evtsExt__InterfaceFunctions__SpawnItemNearCoordinates.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InterfaceFunctions__SpawnItemNearCoordinates = {};
gdjs.evtsExt__InterfaceFunctions__SpawnItemNearCoordinates.GDItemSpriteObjectObjects1= [];
gdjs.evtsExt__InterfaceFunctions__SpawnItemNearCoordinates.GDItemSpriteObjectObjects2= [];


gdjs.evtsExt__InterfaceFunctions__SpawnItemNearCoordinates.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure("{}", runtimeScene.getScene().getVariables().get("Temp"));
}{runtimeScene.getScene().getVariables().get("Temp").getChild("ItemName").setString(eventsFunctionContext.getArgument("ItemName"));
}{runtimeScene.getScene().getVariables().get("Temp").getChild("X").setNumber(eventsFunctionContext.getArgument("X"));
}{runtimeScene.getScene().getVariables().get("Temp").getChild("Y").setNumber(eventsFunctionContext.getArgument("Y"));
}{runtimeScene.getScene().getVariables().get("Temp").getChild("ItemId").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("PeerID")) + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp")) + gdjs.evtTools.common.toString(gdjs.random(1000)));
}{runtimeScene.getScene().getVariables().get("Temp").getChild("seed").setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp") + gdjs.random(1000));
}{gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnce.func(runtimeScene, "DropItem", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().get("Temp")), 200, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.network.jsonToVariableStructure("{}", runtimeScene.getScene().getVariables().get("Temp"));
}}

}


};

gdjs.evtsExt__InterfaceFunctions__SpawnItemNearCoordinates.func = function(runtimeScene, ItemSpriteObject, ItemName, X, Y, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"ItemSpriteObject": ItemSpriteObject
},
  _objectArraysMap: {
"ItemSpriteObject": gdjs.objectsListsToArray(ItemSpriteObject)
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
if (argName === "ItemName") return ItemName;
if (argName === "X") return X;
if (argName === "Y") return Y;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__InterfaceFunctions__SpawnItemNearCoordinates.GDItemSpriteObjectObjects1.length = 0;
gdjs.evtsExt__InterfaceFunctions__SpawnItemNearCoordinates.GDItemSpriteObjectObjects2.length = 0;

gdjs.evtsExt__InterfaceFunctions__SpawnItemNearCoordinates.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__InterfaceFunctions__SpawnItemNearCoordinates.registeredGdjsCallbacks = [];