
if (typeof gdjs.evtsExt__OnlineMultiplayerFirebase__RestoreUserCard !== "undefined") {
  gdjs.evtsExt__OnlineMultiplayerFirebase__RestoreUserCard.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OnlineMultiplayerFirebase__RestoreUserCard = {};


gdjs.evtsExt__OnlineMultiplayerFirebase__RestoreUserCard.userFunc0xef9da0 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if(window['lobby']) {

    function restoreUser(data) {
        data.deleteTimestamp = 0;

        lobby.setUserCards(
            runtimeScene.getGame().getVariables().get('ServerPath').getAsString(),
            eventsFunctionContext.getArgument("PlayerName").toString(),
            data,
            'UserCards/' + eventsFunctionContext.getArgument('UserName').toString()
        );
    }

    lobby.getServerVariable(
        runtimeScene.getGame().getVariables().get('ServerPath').getAsString(),
        'UserCards/' + eventsFunctionContext.getArgument('UserName').toString()
    ).then(e=>{
        if(e) {
            for(var i in e) {
                if(e[i].name == eventsFunctionContext.getArgument("PlayerName").toString()) {
                    restoreUser(e[i]);
                }
            }
        }
    });
}
};
gdjs.evtsExt__OnlineMultiplayerFirebase__RestoreUserCard.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


var objects = [];
gdjs.evtsExt__OnlineMultiplayerFirebase__RestoreUserCard.userFunc0xef9da0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayerFirebase__RestoreUserCard.func = function(runtimeScene, UserName, PlayerName, parentEventsFunctionContext) {
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
if (argName === "UserName") return UserName;
if (argName === "PlayerName") return PlayerName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__OnlineMultiplayerFirebase__RestoreUserCard.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__OnlineMultiplayerFirebase__RestoreUserCard.registeredGdjsCallbacks = [];