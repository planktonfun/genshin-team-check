
if (typeof gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnce !== "undefined") {
  gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnce.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnce = {};


gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnce.userFunc0xec67c8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const enableDeflation = runtimeScene.getGame().getVariables().get('DeflateMessages').getAsBoolean(); // deflation costs about 5 fps to lower end settings

if(!enableDeflation) {
    lobby.sendMessage(
      eventsFunctionContext.getArgument("Type").toString(),
      JSON.parse(eventsFunctionContext.getArgument("Data").toString()),
      eventsFunctionContext.getArgument("DelayMillisecond").valueOf()
    );
} else {
    const lastSent = runtimeScene.getVariables().get('LastSent').toJSObject();

    lastSent[eventsFunctionContext.getArgument("Type").toString()] = {
      Type: eventsFunctionContext.getArgument("Type").toString(),
      Data: JSON.parse(eventsFunctionContext.getArgument("Data").toString()),
      DelayMillisecond:eventsFunctionContext.getArgument("DelayMillisecond").valueOf(),
    };

    runtimeScene.getVariables().get('LastSent').fromJSObject(lastSent);
    runtimeScene.getVariables().get('LastEventUpdated').setBoolean(true);

    sendAsDeflated(
      runtimeScene.getVariables().get('PeerID').getAsString(),
      eventsFunctionContext.getArgument("Type").toString(),
      eventsFunctionContext.getArgument("Data").toString(),
      eventsFunctionContext.getArgument("DelayMillisecond").valueOf(),
      (type,data,delay,info)=>{
        lobby.sendMessage(type,data,delay)
        runtimeScene.getVariables().get('EventBytes').setString(info);
      }
    );
}

};
gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnce.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnce.userFunc0xec67c8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnce.userFunc0x35f6948 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const enableDeflation = runtimeScene.getGame().getVariables().get('DeflateMessages').getAsBoolean(); // deflation costs about 5 fps to lower end settings

// console.log('hello')
if(!enableDeflation) {
 lobby.sendMessageNoHistory(
      eventsFunctionContext.getArgument("Type").toString(),
      JSON.parse(eventsFunctionContext.getArgument("Data").toString()),
      eventsFunctionContext.getArgument("DelayMillisecond").valueOf()
    );
} else {
    sendAsDeflated(
      runtimeScene.getVariables().get('PeerID').getAsString(),
      eventsFunctionContext.getArgument("Type").toString(),
      eventsFunctionContext.getArgument("Data").toString(),
      eventsFunctionContext.getArgument("DelayMillisecond").valueOf(),
      (type,data,delay,info)=>{
        lobby.sendMessageNoHistory(type,data,delay)
        runtimeScene.getVariables().get('EventBytes').setString(info);
      }
    );

}
};
gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnce.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnce.userFunc0x35f6948(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnce.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("SaveHistory") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnce.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("SaveHistory") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnce.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnce.func = function(runtimeScene, Type, Data, DelayMillisecond, SaveHistory, parentEventsFunctionContext) {
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
if (argName === "Type") return Type;
if (argName === "Data") return Data;
if (argName === "DelayMillisecond") return DelayMillisecond;
if (argName === "SaveHistory") return SaveHistory;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnce.eventsList2(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnce.registeredGdjsCallbacks = [];