
if (typeof gdjs.evtsExt__OnlineMultiplayerFirebase__ChangeRoom !== "undefined") {
  gdjs.evtsExt__OnlineMultiplayerFirebase__ChangeRoom.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OnlineMultiplayerFirebase__ChangeRoom = {};


gdjs.evtsExt__OnlineMultiplayerFirebase__ChangeRoom.userFunc0x130ec10 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if(window['lobby']) {
    lobby.disconnect();
    // console.log('disconnecting');
}
};
gdjs.evtsExt__OnlineMultiplayerFirebase__ChangeRoom.userFunc0x1643828 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if(!runtimeScene.getGame().getVariables().get('ServerPath').getAsString()) {
  throw new Error('please configure serverpath');
  return;
}


const timeGameStarted = Date.now();

function getActingServer(lobby, timeSyncer) {
    const peerIds = [];

    peerIds.push(lobby.pplayer.peer.id);

    for(var peerId in lobby.pplayer.connectedPeers) {
        peerIds.push(peerId);
    }

    peerIds.sort();

    const match = Math.floor(timeSyncer.randomInRange(0,peerIds.length-1));
    const actingServer = peerIds[match];

    return actingServer;
}

// pick one from all the clients and act as a server
function IAmActingServer(lobby, timeSyncer) {
    var serverPeerId = getActingServer(lobby, timeSyncer);
    
    runtimeScene.getVariables().get('ActingServer').setString(serverPeerId);
    runtimeScene.getVariables().get('IsActingServer').setBoolean((lobby.getSelfPeerId() == serverPeerId));

    return (lobby.getSelfPeerId() == serverPeerId);
}

const roomName = sanitizeFirebaseReference(eventsFunctionContext.getArgument("RoomName").toString());
const serverPath = [runtimeScene.getGame().getVariables().get('ServerPath').getAsString(), roomName].join('/');
const lobby = new Lobby(serverPath, handleRecievedData, handleReadyCallback, handleDisconnectCallback);

// console.log('connecting to room ' + roomName);

function handleRecievedData(event, skipDuration=false) {
	// Do something with recieved data
  const duration = Math.max(0, event.delayTimestamp - getTimeStamp());

  if(skipDuration) {
    if(event.type == 'action') {
      const controls = stateManager.parseRecievedMessage(event.data);
      event.controls = controls;
    } else if(event.type == 'coordinates') {
      event.coordinates = event.data;  
    }

    var a = new gdjs.Variable();
    a.fromJSObject(event);
    runtimeScene.getVariables().get('RecievedMessages').pushVariableCopy(a);
  } else {
    setTimeout(()=>{
      if(event.type == 'action') {
        const controls = stateManager.parseRecievedMessage(event.data);
        event.controls = controls;
      } else if(event.type == 'coordinates') {
        event.coordinates = event.data;  
      }

      var a = new gdjs.Variable();
      a.fromJSObject(event);
      runtimeScene.getVariables().get('RecievedMessages').pushVariableCopy(a);
    }, duration);
  }
  
}

function handleReadyCallback(peerId) {
  runtimeScene.getVariables().get('PeerID').setString(peerId);
  runtimeScene.getVariables().get('Connected').setBoolean(true);
  runtimeScene.getVariables().get('CreateSignal').setBoolean(true);
  lobby.listenToChatMessages(runtimeScene.getGame().getVariables().get('ServerPath').getAsString());
}

function handleDisconnectCallback(peerId) {
  const event = {
    peerId: peerId,
    type: 'disconnected',
    data: {
      uid: peerId
    }
  };

  if(!lobby.pplayer.connectedPeers[peerId]) {
    delete lobby.pplayer.connectedPeers[peerId];
  }

  var a = new gdjs.Variable();
  a.fromJSObject(event);
  runtimeScene.getVariables().get('RecievedMessages').pushVariableCopy(a);
}

// Usage
const startingTimestamp = 1688647930;
const timestampDisplay = new TimestampDisplay(startingTimestamp, 1, () => {

  // Game is ready when there are connected users or 5 seconds has passed
  if(lobby.getConnectedCount() > 0) {
    runtimeScene.getVariables().get('Connected').setBoolean(true);
  }

  // Indicator when to actions when time is synchronized
  runtimeScene.getVariables().get('IsTimeSynchronized').setBoolean(true);
  
  // remove users that are disconnected
  var ConnectedUsers = runtimeScene.getVariables().get('ConnectedUsers').toJSObject();

  for(var peerId in ConnectedUsers) {
    if(lobby.pplayer.peer.id == peerId) continue;
    if(!lobby.pplayer.connectedPeers[peerId]) {
      delete ConnectedUsers[peerId];
      handleDisconnectCallback(peerId);
    }
  }

  runtimeScene.getVariables().get('ConnectedUsers').fromJSObject(ConnectedUsers)

});

// time synchronization is important
const timeSyncer = new TimestampDisplay(startingTimestamp, 5, ()=>{
  if(IAmActingServer(lobby, timeSyncer)) {
    if(!lobby.fbobj) return;
    lobby.fbobj.updateServerTimestamp();
  }
});

window.handleDisconnectCallback = handleDisconnectCallback;
window.handleRecievedData = handleRecievedData;
window.lobby = lobby;
window.timestampDisplay = timestampDisplay;
window.timeSyncer = timeSyncer;
};
gdjs.evtsExt__OnlineMultiplayerFirebase__ChangeRoom.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__OnlineMultiplayerFirebase__ChangeRoom.userFunc0x1643828(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__OnlineMultiplayerFirebase__ChangeRoom.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__OnlineMultiplayerFirebase__ChangeRoom.userFunc0x130ec10(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__OnlineMultiplayerFirebase__ChangeRoom.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__OnlineMultiplayerFirebase__ChangeRoom.func = function(runtimeScene, RoomName, parentEventsFunctionContext) {
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
if (argName === "RoomName") return RoomName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__OnlineMultiplayerFirebase__ChangeRoom.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__OnlineMultiplayerFirebase__ChangeRoom.registeredGdjsCallbacks = [];