
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite = gdjs.evtsExt__QRCodeInteractive__QrCodeSprite || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite = class QrCodeSprite extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Claimed = false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Claimed !== newBehaviorData.Claimed)
      this._behaviorData.Claimed = newBehaviorData.Claimed;

    return true;
  }

  // Properties:
  
  _getClaimed() {
    return this._behaviorData.Claimed !== undefined ? this._behaviorData.Claimed : false;
  }
  _setClaimed(newValue) {
    this._behaviorData.Claimed = newValue;
  }
  _toggleClaimed() {
    this._setClaimed(!this._getClaimed());
  }
}

/**
 * Shared data generated from 
 */
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.SharedData = class QrCodeSpriteSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._QRCodeInteractive_QrCodeSpriteSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._QRCodeInteractive_QrCodeSpriteSharedData = new gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.SharedData(
      initialData
    );
  }
  return instanceContainer._QRCodeInteractive_QrCodeSpriteSharedData;
}

// Methods:
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.onCreatedContext = {};
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CreateGift((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.CreateGiftContext = {};
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.CreateGiftContext.GDObjectObjects1= [];
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.CreateGiftContext.GDObjectObjects2= [];


gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.CreateGiftContext.userFunc0x10ba778 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
function generateUUIDv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
    });
}

function createQRCode(value) {
    // Create QR code instance
    var qr = qrcode(0,"L"); // 0 = version 1 (21x21), 'L' = low error correction

    // Add data to the QR code
    qr.addData(value);

    // Generate the QR code
    qr.make();

    // Create an image from the QR code instance and append it to the div
    const img = new Image();
    img.src = qr.createDataURL(6);
    img.onload = function () {
        // Draw the image onto the canvas
        const offscreenCanvas = document.createElement('canvas');
        const offscreenContext = offscreenCanvas.getContext('2d');
        offscreenCanvas.width=img.width;
        offscreenCanvas.height=img.height;

        offscreenContext.drawImage(img,0,0);

        objects[0].getRendererObject().texture = PIXI.Texture.from(offscreenCanvas);
        objects[0]._renderer._spriteDirty = true;
    };
}


function waitingForNotification(peerId) {
    const ably = new Ably.Realtime('ikRU1g.5m2H5Q:mP5mbK8vLhou2vGYMZ1dTQz9HoJ7OaFufJO8owaEs48');
    const channel = ably.channels.get('test-channel');

    objects[0].__qrCodeExtension.channel = channel;
    // Subscribe to messages
    channel.subscribe(peerId, (message) => {
        const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
        const object = objects[0];
        const behavior = object.getBehavior(behaviorName);

        behavior._behaviorData["Claimed"] = true;
    });
}

function generateTemporaryURL() {
    try {
    const peerId = generateUUIDv4();
    const temporaryUrl = `https://planktonfun.github.io/genshin-team-check/test/qr-code/ably.html?peerId=${peerId}`; // Replace with your domain

    objects[0].__qrCodeExtension = {};
    objects[0].__qrCodeExtension.peerId = peerId;
    createQRCode(temporaryUrl);
    waitingForNotification(peerId);

    } catch (error) {
    console.error('Error generating URL:', error);
    }
}

generateTemporaryURL();

};
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.CreateGiftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.CreateGiftContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.CreateGiftContext.GDObjectObjects1);
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.CreateGiftContext.userFunc0x10ba778(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.CreateGift = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.CreateGiftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.CreateGiftContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.CreateGiftContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.onDestroyContext = {};
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.onDestroyContext.GDObjectObjects1= [];
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.onDestroyContext.GDObjectObjects2= [];


gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.onDestroyContext.userFunc0x3856980 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
objects[0].__qrCodeExtension.channel.unsubscribe(objects[0].__qrCodeExtension.peerId);
};
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.onDestroyContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.onDestroyContext.GDObjectObjects1);
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.onDestroyContext.userFunc0x3856980(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.onDestroyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.onDestroyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.ClaimedContext = {};
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.ClaimedContext.GDObjectObjects1= [];
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.ClaimedContext.GDObjectObjects2= [];


gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.ClaimedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.ClaimedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.ClaimedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.ClaimedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getClaimed() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.ClaimedContext.GDObjectObjects1[k] = gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.ClaimedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.ClaimedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.Claimed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.ClaimedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.ClaimedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.ClaimedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.SetClaimedContext = {};
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.SetClaimedContext.GDObjectObjects1= [];
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.SetClaimedContext.GDObjectObjects2= [];


gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.SetClaimedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.SetClaimedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.SetClaimedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.SetClaimedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setClaimed(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.SetClaimedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.SetClaimedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.SetClaimedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setClaimed(true);
}
}}

}


};

gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.SetClaimed = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.SetClaimedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.SetClaimedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.SetClaimedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("QRCodeInteractive::QrCodeSprite", gdjs.evtsExt__QRCodeInteractive__QrCodeSprite.QrCodeSprite);
