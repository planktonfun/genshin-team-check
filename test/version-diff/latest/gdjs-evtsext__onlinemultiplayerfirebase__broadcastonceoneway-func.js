
if (typeof gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnceOneWay !== "undefined") {
  gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnceOneWay.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnceOneWay = {};


gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnceOneWay.userFunc0xecd700 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const enableDeflation = true; // deflation costs about 5 fps to lower end settings

if(!enableDeflation) {
lobby.sendOneWay(
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
        lobby.sendOneWay(type,data,delay)
        runtimeScene.getVariables().get('EventBytes').setString(info);
      }
    );
}

};
gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnceOneWay.userFunc0xecd7d0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const currentMap = runtimeScene.getGame().getVariables().get('SaveData').toJSObject();
const mapList = runtimeScene.getGame().getVariables().get('MapList').toJSObject();
const mapIndex = currentMap.CurrentMap;
const mapName = mapList[mapIndex].Layout;
const temp = JSON.parse(eventsFunctionContext.getArgument("Data").toString());
const delayTimestamp = getTimeStamp() + eventsFunctionContext.getArgument("DelayMillisecond").valueOf();
const type = eventsFunctionContext.getArgument("Type").toString();

const event = {
    "peerId": temp.uid,
    "type": type,
    "data": temp,
    "delayTimestamp": delayTimestamp
};

recordData(mapName, event);
};
gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnceOneWay.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnceOneWay.userFunc0xecd7d0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnceOneWay.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnceOneWay.userFunc0xecd700(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isPreview(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnceOneWay.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnceOneWay.func = function(runtimeScene, Type, Data, DelayMillisecond, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnceOneWay.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__OnlineMultiplayerFirebase__BroadCastOnceOneWay.registeredGdjsCallbacks = [];