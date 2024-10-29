
if (typeof gdjs.evtsExt__OnlineMultiplayerFirebase__RetrievePlayerStatsFromServer !== "undefined") {
  gdjs.evtsExt__OnlineMultiplayerFirebase__RetrievePlayerStatsFromServer.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OnlineMultiplayerFirebase__RetrievePlayerStatsFromServer = {};


gdjs.evtsExt__OnlineMultiplayerFirebase__RetrievePlayerStatsFromServer.userFunc0x109e2b0 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
runtimeScene.getVariables().get('PlayerRetrieved').setBoolean(false);
if(window['lobby']) {
    lobby.getServerVariable(
        runtimeScene.getGame().getVariables().get('ServerPath').getAsString(),
        'PlayerStats/' + eventsFunctionContext.getArgument('PlayerName').toString()
    ).then(e=>{
        runtimeScene.getVariables().get('PlayerRetrieved').setBoolean(true);
        runtimeScene.getVariables().get('SavedData').getChild('NameAlreadyTaken').setBoolean(false);

        if(e) {
            runtimeScene.getVariables().get('SavedData').getChild('NameAlreadyTaken').setBoolean(true);
            const GlobalVariables = e.GlobalVariables;
            for(var i in GlobalVariables) {
                if(i=="NPCStates") continue;
                if(i=="ItemObtainedArray") continue;
                if(i=="LocalBankArray") continue;
                if(i=="ItemObtained") continue;
                
                var data = GlobalVariables[i];
                runtimeScene.getGame().getVariables().get(i).fromJSObject(data);
                // console.log(i)
            }
            
            if(e.GlobalVariables.ItemObtainedArray) {
                const decompressedInventory = decompressInventory(
                    e.GlobalVariables.ItemObtainedArray, "AddedItemName", "AddedItemQty"
                );

                runtimeScene.getGame().getVariables().get('ItemObtained').fromJSObject(decompressedInventory);
            }

            if(e.GlobalVariables.LocalBankArray) {
                const decompressedArray = decompressInventory(
                    e.GlobalVariables.LocalBankArray, "AddedItemName", "AddedItemQty"
                );

                runtimeScene.getGame().getVariables().get('LocalBank').fromJSObject(decompressedArray);
            }
            
        }
    });
}
};
gdjs.evtsExt__OnlineMultiplayerFirebase__RetrievePlayerStatsFromServer.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


var objects = [];
gdjs.evtsExt__OnlineMultiplayerFirebase__RetrievePlayerStatsFromServer.userFunc0x109e2b0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayerFirebase__RetrievePlayerStatsFromServer.func = function(runtimeScene, PlayerName, parentEventsFunctionContext) {
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
if (argName === "PlayerName") return PlayerName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__OnlineMultiplayerFirebase__RetrievePlayerStatsFromServer.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__OnlineMultiplayerFirebase__RetrievePlayerStatsFromServer.registeredGdjsCallbacks = [];