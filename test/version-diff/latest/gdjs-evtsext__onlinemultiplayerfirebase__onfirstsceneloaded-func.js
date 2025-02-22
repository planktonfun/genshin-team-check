
if (typeof gdjs.evtsExt__OnlineMultiplayerFirebase__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__OnlineMultiplayerFirebase__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OnlineMultiplayerFirebase__onFirstSceneLoaded = {};


gdjs.evtsExt__OnlineMultiplayerFirebase__onFirstSceneLoaded.userFunc0xff1218 = function(runtimeScene, eventsFunctionContext) {
"use strict";
/** Peer Simulator - simulate peerjs without using the internet */
(()=>{

    const networkSpeedMiliseconds = 0;

    // change into broadcast api to avoid 5mb localstorage limitation
    const channel = new BroadcastChannel('peerEventsChannel');
    const database = {
        peerEventsData: [],
        peerEventId: 0,

        get peerEvents() {
            return this.peerEventsData;
        },
        set peerEvents(arr) {
            this.peerEventsData = arr;
            channel.postMessage({ type: 'setPeerEvents', data: arr });
        },
        get id() {
            return this.peerEventId;
        },
        set id(val) {
            this.peerEventId = val;
            channel.postMessage({ type: 'setPeerEventId', data: val });
        },
        push: function (obj) {
            obj.id = this.id;
            this.id = obj.id + 1;

            var a = this.peerEvents;
            a.push(obj);

            if(a.length > 100) {
                a.shift();
            }

            this.peerEvents = a;
        },
        clear: function() {
            this.peerEvents = [];
        }
    };

    // Listen for messages on the broadcast channel
    channel.onmessage = (event) => {
        const { type, data } = event.data;

        switch (type) {
            case 'setPeerEvents':
                database.peerEventsData = data;
                break;
            case 'setPeerEventId':
                database.peerEventId = data;
                break;
        }
    };

    class EventManager {
      constructor() {
        this._listeners = {};

        this._availableMethods = [];
      }

      subscribeMethod(name) {
        this._availableMethods.push(name);
        this._listeners[name] = ()=>{};
      }

      on(eventName, callback) {
        if(!this._availableMethods.includes(eventName)) return;

        this._listeners[eventName] = callback;
      }

      off(eventName, callback) {
        if(!this._availableMethods.includes(eventName)) return;

        this._listeners[eventName] = ()=>{};
      }

      emit(eventName, eventData) {
        if(!this._availableMethods.includes(eventName)) return;

        this._listeners[eventName](eventData);
      }
    }

    function generateUUID() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    class Connection extends EventManager {
      constructor(peerID = generateUUID(), parent= generateUUID()) {
        super();
        this.subscribeMethod('open')
        this.subscribeMethod('data')
        this.subscribeMethod('close')
        this.init(peerID);
        this.parent = parent;
      }

      init(peerID) {
        this.peer = peerID;
        this.id = peerID;
      }

      send(data) {
        database.push({event: 'sendData', from: this.parent, to: this.peer, data: data});
      }

      open() {
        this.emit('open', this.peer);
      }

      data(dat) {
        this.emit('data', dat);
      }

      close() {
        this.emit('close', this.peer);
      }
    }

    function handleUpdates(peer) {
        window.addEventListener('beforeunload', ()=>{
          database.push({event: 'disconnect', from: peer.peer });

          for(var i in peer.connectedPeers) {
              peer.disconnect(i);
          }
        });

        var eventDone = [];

        var intervalInstance = setInterval(()=>{
          const peerID = peer.peer;

          database.peerEvents.forEach((event)=>{
            const index = event.id;
            if(eventDone.includes(index)) return;

            if(event.event == 'created' && event.from == peerID) {
                peer.open();
                eventDone.push(index);
                // console.log(JSON.stringify(event));
            }

            if(event.event == 'connect' && event.to == peerID) {
                database.push({event: 'accept-connection', from: peerID, to: event.from});
                peer.connectedPeers[event.from] = new Connection(event.from, peerID);
                peer.connection(peer.connectedPeers[event.from]);
                eventDone.push(index);
                // console.log(JSON.stringify(event));
            }

            if(event.event == 'sendData' && event.to == peerID) {
                // console.log(JSON.stringify(event));

                if(!peer.connectedPeers[event.from]) {
                  // console.log('notexist');
                  eventDone.push(index);
                  return;
                }

                // console.log('exist');
                peer.connectedPeers[event.from].data(event.data);
                eventDone.push(index);
            }

            if(event.event == 'close' && event.to == peerID) {
                if(!peer.connectedPeers[event.from]) {
                  eventDone.push(index);
                  return;
                }

                peer.connectedPeers[event.from].close();
                delete peer.connectedPeers[event.from];
                eventDone.push(index);
                // console.log(JSON.stringify(event));
            }

            if(event.event == 'disconnect' && event.from == peerID) {
                peer.close();
                eventDone.push(index);
                // console.log(JSON.stringify(event));
            }

            if(event.event == 'accept-connection' && event.to == peerID) {
                peer.connection(peer.connectedPeers[event.from]);
                peer.connectedPeers[event.from].open();
                // peer.connection(connectedPeers[event.from])
                eventDone.push(index);
                // console.log(JSON.stringify(event));
            }
          });
          // console.log('update')
        }, networkSpeedMiliseconds);

        return intervalInstance;
    }

    let globalInterval = null;

    class Peer extends EventManager {
      constructor(peerID = generateUUID()) {
        super();
        this.subscribeMethod('open');
        this.subscribeMethod('connection');
        this.subscribeMethod('close');
        this.init(peerID);
        this.connectedPeers = {};
      }

      init(peerID) {
        this.peer = peerID;
        this.id = peerID;
        database.push({event: 'created', from: this.peer});

        clearInterval(globalInterval);

        globalInterval = handleUpdates(this);
      }

      connect(peerID) {
        database.push({event: 'connect', from: this.peer, to: peerID});
        this.connectedPeers[peerID] = new Connection(peerID, this.peer);
        return this.connectedPeers[peerID];
      }

      disconnect(peerID) {
        database.push({event: 'close', from: this.peer, to: peerID});
      }

      open() {
        this.emit('open', this.peer);
      }

      connection(conn) {
        this.emit('connection', conn);
      }

      close() {
        this.emit('close', this.peer);
        clearInterval(this.interval);
      }
    }

    class PeerSingleTon extends Peer {
      constructor() {
        super();
        if(this.constructor._instance) {
          return this.constructor._instance;
        }

        this.constructor._instance = this;
      }

      resetInstance() {
        this.constructor._instance = null;
      }

      close() {
        this.emit('close', this.peer);
        clearInterval(globalInterval);
        this.resetInstance();
      }
    }

    class TestThis {
      constructor() {
          var a = new PeerSingleTon()
          a.close();

          return new PeerSingleTon();
      }
    }

    // window.Peer = TestThis;
    window.PeerSimulator = TestThis;
    // window.globalInterval = globalInterval;

})();
};
gdjs.evtsExt__OnlineMultiplayerFirebase__onFirstSceneLoaded.userFunc0x101f278 = function(runtimeScene, eventsFunctionContext) {
"use strict";
function _random(seed) {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function randomInRange(min,max,seed) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    
    return Math.floor(_random(seed) * (max - min + 1) + min);
}

window.randomInRange = randomInRange;
};
gdjs.evtsExt__OnlineMultiplayerFirebase__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isPreview(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("ServerPath").setString("sandbox_trickster");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("UsePeerJSPrivateServer"), true);
}}

}


{


gdjs.evtsExt__OnlineMultiplayerFirebase__onFirstSceneLoaded.userFunc0xff1218(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__OnlineMultiplayerFirebase__LoadGlobalFunction.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__OnlineMultiplayerFirebase__LoadDeltaUpdaterLibraries.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.evtsExt__OnlineMultiplayerFirebase__onFirstSceneLoaded.userFunc0x101f278(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayerFirebase__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__OnlineMultiplayerFirebase__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__OnlineMultiplayerFirebase__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__OnlineMultiplayerFirebase__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__OnlineMultiplayerFirebase__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__OnlineMultiplayerFirebase__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__OnlineMultiplayerFirebase__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
