
if (typeof gdjs.evtsExt__OnlineMultiplayerFirebase__DeleteUserCard !== "undefined") {
  gdjs.evtsExt__OnlineMultiplayerFirebase__DeleteUserCard.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OnlineMultiplayerFirebase__DeleteUserCard = {};


gdjs.evtsExt__OnlineMultiplayerFirebase__DeleteUserCard.userFunc0x1f57da8 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if(window['lobby']) {

    function deleteUser(data) {
        data.deleteTimestamp = Date.now() + eventsFunctionContext.getArgument("WaitMiliseconds").valueOf();

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
                    deleteUser(e[i]);
                }
            }
        }
    });
}
};
gdjs.evtsExt__OnlineMultiplayerFirebase__DeleteUserCard.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


var objects = [];
gdjs.evtsExt__OnlineMultiplayerFirebase__DeleteUserCard.userFunc0x1f57da8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayerFirebase__DeleteUserCard.func = function(runtimeScene, UserName, PlayerName, WaitMiliseconds, parentEventsFunctionContext) {
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
if (argName === "WaitMiliseconds") return WaitMiliseconds;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__OnlineMultiplayerFirebase__DeleteUserCard.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__OnlineMultiplayerFirebase__DeleteUserCard.registeredGdjsCallbacks = [];