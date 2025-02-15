
if (typeof gdjs.evtsExt__InterfaceFunctions__AddItemToOwnInventory !== "undefined") {
  gdjs.evtsExt__InterfaceFunctions__AddItemToOwnInventory.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InterfaceFunctions__AddItemToOwnInventory = {};
gdjs.evtsExt__InterfaceFunctions__AddItemToOwnInventory.GDItemSpriteObjectObjects1= [];
gdjs.evtsExt__InterfaceFunctions__AddItemToOwnInventory.GDItemSpriteObjectObjects2= [];


gdjs.evtsExt__InterfaceFunctions__AddItemToOwnInventory.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure("{}", runtimeScene.getScene().getVariables().get("Temp"));
}{runtimeScene.getScene().getVariables().get("Temp").getChild("name").setString(eventsFunctionContext.getArgument("ItemName"));
}{runtimeScene.getScene().getVariables().get("Temp").getChild("qty").setNumber(eventsFunctionContext.getArgument("Qty"));
}{gdjs.evtTools.variable.variablePushCopy(runtimeScene.getScene().getVariables().get("ItemQueue"), runtimeScene.getScene().getVariables().get("Temp"));
}{gdjs.evtTools.network.jsonToVariableStructure("{}", runtimeScene.getScene().getVariables().get("Temp"));
}}

}


};

gdjs.evtsExt__InterfaceFunctions__AddItemToOwnInventory.func = function(runtimeScene, ItemSpriteObject, ItemName, Qty, parentEventsFunctionContext) {
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
if (argName === "Qty") return Qty;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__InterfaceFunctions__AddItemToOwnInventory.GDItemSpriteObjectObjects1.length = 0;
gdjs.evtsExt__InterfaceFunctions__AddItemToOwnInventory.GDItemSpriteObjectObjects2.length = 0;

gdjs.evtsExt__InterfaceFunctions__AddItemToOwnInventory.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__InterfaceFunctions__AddItemToOwnInventory.registeredGdjsCallbacks = [];