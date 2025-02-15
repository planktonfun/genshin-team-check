
if (typeof gdjs.evtsExt__OnlineMultiplayerFirebase__UpdateUserCards !== "undefined") {
  gdjs.evtsExt__OnlineMultiplayerFirebase__UpdateUserCards.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OnlineMultiplayerFirebase__UpdateUserCards = {};


gdjs.evtsExt__OnlineMultiplayerFirebase__UpdateUserCards.userFunc0x116ea08 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if(window['lobby']) {
    lobby.setUserCards(
        runtimeScene.getGame().getVariables().get('ServerPath').getAsString(),
        eventsFunctionContext.getArgument("PlayerName").toString(),
        {
            type: runtimeScene.getGame().getVariables().get('Type').getAsString(),
            name: eventsFunctionContext.getArgument("PlayerName").toString(),
            job: runtimeScene.getGame().getVariables().get('SelectedCharacter').getAsString(),
            avatar: runtimeScene.getGame().getVariables().get('SelectedCharacter').getAsString(),
            level: runtimeScene.getGame().getVariables().get('Indicators').getChild('Lv').getAsNumber(),
            galders: runtimeScene.getGame().getVariables().get('Indicators').getChild('Galders').getAsNumber()
        },
        'UserCards/' + eventsFunctionContext.getArgument('UserName').toString()
    );
}
};
gdjs.evtsExt__OnlineMultiplayerFirebase__UpdateUserCards.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


var objects = [];
gdjs.evtsExt__OnlineMultiplayerFirebase__UpdateUserCards.userFunc0x116ea08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayerFirebase__UpdateUserCards.func = function(runtimeScene, UserName, PlayerName, parentEventsFunctionContext) {
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


gdjs.evtsExt__OnlineMultiplayerFirebase__UpdateUserCards.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__OnlineMultiplayerFirebase__UpdateUserCards.registeredGdjsCallbacks = [];