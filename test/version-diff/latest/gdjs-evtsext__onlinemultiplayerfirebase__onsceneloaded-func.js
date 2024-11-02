
if (typeof gdjs.evtsExt__OnlineMultiplayerFirebase__onSceneLoaded !== "undefined") {
  gdjs.evtsExt__OnlineMultiplayerFirebase__onSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OnlineMultiplayerFirebase__onSceneLoaded = {};


gdjs.evtsExt__OnlineMultiplayerFirebase__onSceneLoaded.userFunc0x2d2c760 = function(runtimeScene, eventsFunctionContext) {
"use strict";
function getItemTable() {

  const itemsDetails = runtimeScene.getVariables().get('ItemDetails').toJSObject();
  const itemTable = [];

  for(var i in itemsDetails) {
    itemTable.push(i);
  }

  return itemTable;
}

function compressInventory(inventory, PropertyA, PropertyB) {
  const compressedItemIDs = [];
  const compressedQuantities = [];
  const itemIDsToCompress = getItemTable();

  inventory.forEach(item => {
    const itemId = itemIDsToCompress.indexOf(item[PropertyA]);
    compressedItemIDs.push(itemId);
    compressedQuantities.push(item[PropertyB]);
  });

  return { itemIDs: compressedItemIDs, quantities: compressedQuantities };
}

function decompressInventory(compressedInventory, PropertyA, PropertyB) {
  // Parse JSON string back into an object
  const itemIDsToCompress = getItemTable();
  const parsedInventory = compressedInventory;

  // Decompress the inventory object by reconstructing the inventory based on the parsed arrays
  const decompressedInventory = [];

  parsedInventory.itemIDs.forEach((itemId, index) => {
    var a = {}
    a[PropertyA] = itemIDsToCompress[itemId];
    a[PropertyB] = parsedInventory.quantities[index];

    decompressedInventory.push(a);
  });

  return decompressedInventory;
}

window.compressInventory = compressInventory;
window.decompressInventory = decompressInventory;
};
gdjs.evtsExt__OnlineMultiplayerFirebase__onSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__OnlineMultiplayerFirebase__onSceneLoaded.userFunc0x2d2c760(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__OnlineMultiplayerFirebase__onSceneLoaded.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__JsonLoader__LoadJSONToScene.func(runtimeScene, "dictionaries\\item-details.json", runtimeScene.getScene().getVariables().get("ItemDetails"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.evtsExt__OnlineMultiplayerFirebase__onSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__OnlineMultiplayerFirebase__InitializeConnection.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.evtsExt__OnlineMultiplayerFirebase__onSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__OnlineMultiplayerFirebase__onSceneLoaded.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__OnlineMultiplayerFirebase__onSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__OnlineMultiplayerFirebase__onSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__OnlineMultiplayerFirebase__onSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeSceneLoadedCallback(gdjs.evtsExt__OnlineMultiplayerFirebase__onSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__OnlineMultiplayerFirebase__onSceneLoaded.registeredGdjsCallbacks.length - 1]);
