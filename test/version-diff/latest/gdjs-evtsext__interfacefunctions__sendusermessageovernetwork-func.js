
if (typeof gdjs.evtsExt__InterfaceFunctions__SendUserMessageOverNetwork !== "undefined") {
  gdjs.evtsExt__InterfaceFunctions__SendUserMessageOverNetwork.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InterfaceFunctions__SendUserMessageOverNetwork = {};


gdjs.evtsExt__InterfaceFunctions__SendUserMessageOverNetwork.userFunc0x2d73960 = function(runtimeScene, eventsFunctionContext) {
"use strict";
function sendAMessage(message) {
  lobby.sendMessage(
    "ChatMessageSent",
    {
      uid: runtimeScene.getVariables().get('PeerID').getAsString(),
      message: runtimeScene.getGame().getVariables().get('PlayerName').getAsString() + ": " + message
    },
    0,
    false
  );

  lobby.sendChatMessage(
    runtimeScene.getGame().getVariables().get('ServerPath').getAsString(),
    runtimeScene.getGame().getVariables().get('PlayerName').getAsString() + ": " + message
  );
}

// sanitize and send
const tempMessage = eventsFunctionContext.getArgument("Message").toString();
const message = censorBadWords(tempMessage.trim());

runtimeScene.getVariables().get('toBeAddedInChat').setString(message);
sendAMessage(message);
};
gdjs.evtsExt__InterfaceFunctions__SendUserMessageOverNetwork.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InterfaceFunctions__SendUserMessageOverNetwork.userFunc0x2d73960(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InterfaceFunctions__SendUserMessageOverNetwork.func = function(runtimeScene, Message, parentEventsFunctionContext) {
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
if (argName === "Message") return Message;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InterfaceFunctions__SendUserMessageOverNetwork.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__InterfaceFunctions__SendUserMessageOverNetwork.registeredGdjsCallbacks = [];