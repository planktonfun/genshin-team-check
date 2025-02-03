
if (typeof gdjs.evtsExt__OnlineMultiplayerFirebase__RetrieveUserCards !== "undefined") {
  gdjs.evtsExt__OnlineMultiplayerFirebase__RetrieveUserCards.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OnlineMultiplayerFirebase__RetrieveUserCards = {};


gdjs.evtsExt__OnlineMultiplayerFirebase__RetrieveUserCards.userFunc0x3977100 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
runtimeScene.getVariables().get('UserRetrieved').setBoolean(false);
runtimeScene.getVariables().get('UserRetrievedError').setBoolean(false);

if(!window['lobby']) return;

var hasAnError = false;
lobby.getServerVariable(
    runtimeScene.getGame().getVariables().get('ServerPath').getAsString(),
    'UserCards/' + eventsFunctionContext.getArgument('UserName').toString()
).catch(e=>{
    runtimeScene.getVariables().get('UserRetrievedError').setBoolean(true);
    hasAnError = true;
}).then(e=>{
    if(hasAnError) return;

    runtimeScene.getVariables().get('UserRetrieved').setBoolean(true);

    var UserCardsCount = 0;
    var UserCards = [];

    if(e) {
        for(var i in e) {
            if (!e[i].deleteTimestamp || Date.now() < e[i].deleteTimestamp) {
                UserCards.push(e[i]);
                UserCardsCount++;
            }

            // console.log(e[i].deleteTimestamp, e[i].deleteTimestamp > 0, Date.now() >= e[i].deleteTimestamp);

            if(e[i].deleteTimestamp && e[i].deleteTimestamp > 0 && Date.now() >= e[i].deleteTimestamp) {
                // console.log(runtimeScene.getGame().getVariables().get('ServerPath').getAsString(), 'UserCards/' + e[i].name)
                lobby.removeUserCard(
                    runtimeScene.getGame().getVariables().get('ServerPath').getAsString(),
                    'UserCards/' + e[i].name
                );
            }
        }
    }

    runtimeScene.getVariables().get('UserCards').fromJSObject(UserCards);
    runtimeScene.getVariables().get('UserRetrievedCount').setNumber(UserCardsCount);
})
};
gdjs.evtsExt__OnlineMultiplayerFirebase__RetrieveUserCards.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


var objects = [];
gdjs.evtsExt__OnlineMultiplayerFirebase__RetrieveUserCards.userFunc0x3977100(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayerFirebase__RetrieveUserCards.func = function(runtimeScene, UserName, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__OnlineMultiplayerFirebase__RetrieveUserCards.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__OnlineMultiplayerFirebase__RetrieveUserCards.registeredGdjsCallbacks = [];