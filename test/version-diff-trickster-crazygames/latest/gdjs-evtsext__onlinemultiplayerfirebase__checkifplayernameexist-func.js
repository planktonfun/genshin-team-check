
if (typeof gdjs.evtsExt__OnlineMultiplayerFirebase__CheckIfPlayerNameExist !== "undefined") {
  gdjs.evtsExt__OnlineMultiplayerFirebase__CheckIfPlayerNameExist.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OnlineMultiplayerFirebase__CheckIfPlayerNameExist = {};


gdjs.evtsExt__OnlineMultiplayerFirebase__CheckIfPlayerNameExist.userFunc0x11fb4a8 = function(runtimeScene, objects, eventsFunctionContext) {
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
        }
    });
}
};
gdjs.evtsExt__OnlineMultiplayerFirebase__CheckIfPlayerNameExist.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


var objects = [];
gdjs.evtsExt__OnlineMultiplayerFirebase__CheckIfPlayerNameExist.userFunc0x11fb4a8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayerFirebase__CheckIfPlayerNameExist.func = function(runtimeScene, PlayerName, parentEventsFunctionContext) {
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


gdjs.evtsExt__OnlineMultiplayerFirebase__CheckIfPlayerNameExist.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__OnlineMultiplayerFirebase__CheckIfPlayerNameExist.registeredGdjsCallbacks = [];