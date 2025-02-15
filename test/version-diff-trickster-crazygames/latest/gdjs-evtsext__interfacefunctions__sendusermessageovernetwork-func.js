
if (typeof gdjs.evtsExt__InterfaceFunctions__SendUserMessageOverNetwork !== "undefined") {
  gdjs.evtsExt__InterfaceFunctions__SendUserMessageOverNetwork.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InterfaceFunctions__SendUserMessageOverNetwork = {};


gdjs.evtsExt__InterfaceFunctions__SendUserMessageOverNetwork.userFunc0x955248 = function(runtimeScene, eventsFunctionContext) {
"use strict";
function isMessageACommand(text) {
  return text.search(': /') > -1;
}

function sendAMessage(message) {
  const playerMessage = runtimeScene.getGame().getVariables().get('PlayerName').getAsString() + ": " + message;
  lobby.sendMessage(
    "ChatMessageSent",
    {
      uid: runtimeScene.getVariables().get('PeerID').getAsString(),
      message: playerMessage
    },
    0,
    false
  );

  // if its a command don't put it into firebase
  if(isMessageACommand(playerMessage)) return;

  // send it into the firebase (exclude message commands)
  lobby.sendChatMessage(
    runtimeScene.getGame().getVariables().get('ServerPath').getAsString(),
    playerMessage
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


gdjs.evtsExt__InterfaceFunctions__SendUserMessageOverNetwork.userFunc0x955248(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

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