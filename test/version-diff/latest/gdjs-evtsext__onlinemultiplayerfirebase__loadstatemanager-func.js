
if (typeof gdjs.evtsExt__OnlineMultiplayerFirebase__LoadStateManager !== "undefined") {
  gdjs.evtsExt__OnlineMultiplayerFirebase__LoadStateManager.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OnlineMultiplayerFirebase__LoadStateManager = {};


gdjs.evtsExt__OnlineMultiplayerFirebase__LoadStateManager.userFunc0x1cca360 = function(runtimeScene, eventsFunctionContext) {
"use strict";
// Compresses keyboard or mouse clicks states into a number
// Only supports states that contain booleans
class OnlineStateManager {

  constructor(states, callback) {
    this.states = states; //.reverse();
    this.lastSent = 0;
    this.callback = callback;
    this.client = {};
    this.numberContainers = {};
    this.difference = 0;

    this.states.forEach(state=>this.client[state] = 0);
  }

  _decimalToBinary(decimal) {
    return decimal.toString(2).padStart(this.states.length, '0'); // more keys means more padding
    // return parseInt(decimal, 32).toString(2).padStart(this.states.length, '0'); // more keys means more padding
  }

  _binaryToDecimal(binary) {
    return parseInt(binary, 2);
    // return parseInt(binary, 2).toString(36); // hexadecimal is much more compressed maximum 36
  }

  _createMessage() {
    const raw = this.states.reduce((acc,state)=>{
      acc += this.client[state];
      return acc;
    },"");

    return this._binaryToDecimal(raw);
  }

  sendMessage() {
    const message = this._createMessage();

    // send the message to the server only if its changed
    if(this.lastSent != message) {
      const difference = message - this.lastSent;
      this.lastSent = message;
      this.callback(message, difference);
    }
  }

  setState(state, bool) {
    if(this.client[state] == undefined) return;

    this.client[state] = bool*1;
  }

  parseRecievedMessage(decimal) {
    var final = {};
    var controls = {};
    var segment = this._decimalToBinary(decimal);

    this.states.forEach((state, index) => {
      // dont display numbercontainers
      if(state[0] != "_") {
        final[state] = segment[index]*1;
      };

      controls[state] = segment[index]*1;
    });

    for(var prefix in this.numberContainers) {
      var state = prefix.substring(1);
      final[state] = this.getNumberFromRecieved(state, controls);
    }

    return final;
  }

  createNumberContainer(prefix, maximumValue) {
    var paddings = maximumValue.toString(2);

    for (var i = 0; i < paddings.length; i++) {
      var start = Math.pow(10, i).toString();
      var base = start.padStart(paddings.length, "0");

      this.states.push("_" + prefix + "-" + base);
    }

    this.states.forEach(state=>this.client[state] = 0);
    this.numberContainers["_" + prefix] = paddings.length;
  }

  setNumber(prefix, val) {
    var value = Math.floor(val);
    var paddings = value.toString(2).padStart(this.numberContainers["_" + prefix], "0");
    var generated = {};

    for (var i = 0; i < paddings.length; i++) {
      var start = Math.pow(10, i).toString();
      var base = start.padStart(paddings.length, "0");

      generated["_" + prefix + "-" + base] = paddings[paddings.length-1-i]*1;
    }

    for(var i in generated) {
      this.client[i] = generated[i];
    }
  }

  // Don't use this when recieving
  getNumber(prefix) {
    var binary = "";

    for (var i = 0; i < this.numberContainers["_" + prefix]; i++) {
      var start = Math.pow(10, i).toString();
      var base = start.padStart(this.numberContainers["_" + prefix], "0");

      binary += this.client["_" + prefix + "-" + base];
    }

    return this._binaryToDecimal(binary.split("").reverse().join(""));
  }

  getNumberFromRecieved(prefix, controls) {
    var binary = "";

    for (var i = 0; i < this.numberContainers["_" + prefix]; i++) {
      var start = Math.pow(10, i).toString();
      var base = start.padStart(this.numberContainers["_" + prefix], "0");

      binary += controls["_" + prefix + "-" + base];
    }

    return this._binaryToDecimal(binary.split("").reverse().join(""));
  }
}

window.OnlineStateManager = OnlineStateManager;
};
gdjs.evtsExt__OnlineMultiplayerFirebase__LoadStateManager.userFunc0x3b3af18 = function(runtimeScene, eventsFunctionContext) {
"use strict";
// possible actions that is boolean
const states = [
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'KeyW',
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyZ',
  'KeyX',
  'KeyC',
  'KeyQ',
  'KeyE',
  'ShiftLeft',
  'ControlLeft',
  'ShiftRight',
  'ControlRight',
  'Space',
  'MouseLeft',
  'MouseRight',
  'MouseMiddle'
];

const stateManager = new OnlineStateManager(states, sendToServer);

// compress variables
function sendToServer(message, changes) {
  // disable this because it delays the server
  // window.lobby.sendMessage('action', message, 0);
  window.lobby.sendMessage(
    'action',
    message,
    0,
    false
  );
}

// Function to handle keydown event
function handleKeyDown(event) {
  stateManager.setState(event.code, true);
  stateManager.sendMessage();
}

// Function to handle keyup event
function handleKeyUp(event) {
  stateManager.setState(event.code, false);
  stateManager.sendMessage();
  
}

function handleMouseDown(event) {
  switch (event.button) {
    case 0:
      stateManager.setState('MouseLeft', true);
      break;
    case 1:
      stateManager.setState('MouseMiddle', true);
      break;
    case 2:
      stateManager.setState('MouseRight', true);
      break;
  }
}

function handleMouseUp(event) {
  switch (event.button) {
    case 0:
      stateManager.setState('MouseLeft', false);
      break;
    case 1:
      stateManager.setState('MouseMiddle', false);
      break;
    case 2:
      stateManager.setState('MouseRight', false);
      break;
  }
}

// // Add event listeners for keydown and keyup events
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);
document.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mouseup', handleMouseUp);

window.stateManager = stateManager;

};
gdjs.evtsExt__OnlineMultiplayerFirebase__LoadStateManager.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__OnlineMultiplayerFirebase__LoadStateManager.userFunc0x1cca360(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


gdjs.evtsExt__OnlineMultiplayerFirebase__LoadStateManager.userFunc0x3b3af18(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayerFirebase__LoadStateManager.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__OnlineMultiplayerFirebase__LoadStateManager.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__OnlineMultiplayerFirebase__LoadStateManager.registeredGdjsCallbacks = [];