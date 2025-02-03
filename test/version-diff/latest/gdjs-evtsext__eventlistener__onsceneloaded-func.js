
if (typeof gdjs.evtsExt__EventListener__onSceneLoaded !== "undefined") {
  gdjs.evtsExt__EventListener__onSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__EventListener__onSceneLoaded = {};


gdjs.evtsExt__EventListener__onSceneLoaded.userFunc0x2ab4b08 = function(runtimeScene, eventsFunctionContext) {
"use strict";
// Initialize tracker storage (run once per scene)
if (!runtimeScene.__eventListener) {
    runtimeScene.__eventListener = new Map(); // To store tracked objects
}

const objectTracker = runtimeScene.__eventListener;

function isCursorOnObject(obj) {
    // Get mouse position
    const mouseX = gdjs.evtTools.input.getCursorX(runtimeScene,obj.getLayer(),0);
    const mouseY = gdjs.evtTools.input.getCursorY(runtimeScene,obj.getLayer(),0);

    // Check if the mouse is over the object
    const boundaries = obj.getAABB();

    if (
        mouseX > boundaries.min[0] && mouseX < boundaries.max[0] &&
        mouseY > boundaries.min[1] && mouseY < boundaries.max[1]
    ) {
        return true;
    }

    return false;
}

function isInsideCamera(obj) {
    const boundaries = obj.getAABB();

    // Get the object position and size
    const objectLeft = boundaries.min[0];
    const objectTop = boundaries.min[1];
    const objectRight = boundaries.max[0];
    const objectBottom = boundaries.max[1];

    // Get the camera's position and size (viewport)
    const cameraLeft = gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene,obj.getLayer(),0);
    const cameraTop = gdjs.evtTools.camera.getCameraBorderTop(runtimeScene,obj.getLayer(),0);
    const cameraRight = gdjs.evtTools.camera.getCameraBorderRight(runtimeScene,obj.getLayer(),0);
    const cameraBottom = gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene,obj.getLayer(),0);

    // Check if the object is inside the camera view
    return (objectRight > cameraLeft && 
                        objectLeft < cameraRight &&
                        objectBottom > cameraTop &&
                        objectTop < cameraBottom);
}

// Define a general tracking function
const trackObjectsEfficiently = (runtimeScene, objectName) => {
    const currentObjects = runtimeScene.getObjects(objectName);
    const delay = 200; // delay in milisecond before declaring an object has stopped
    const doubleClickThreshold = 300;

    currentObjects.forEach(obj => {

        const __publicParameters = {};
        __publicParameters.hasBeenCreated = false;
        __publicParameters.hasBeenResized = false;
        __publicParameters.isRotating     = false;
        __publicParameters.hasBeenRotated = false;
        __publicParameters.isMoving       = false;
        __publicParameters.hasBeenMoved   = false;
        __publicParameters.isResizing     = false;
        __publicParameters.hasBeenClicked = false;
        __publicParameters.isOnHover      = false;
        __publicParameters.beingPressed   = false;
        __publicParameters.hasBeenDoubleClicked = false;
        __publicParameters.beingScrolled = false;
        __publicParameters.beingScrolledUp = false;
        __publicParameters.beingScrolledDown = false;
        __publicParameters.isVisibleInsideCamera = false;
        __publicParameters.keyIsPressed = false;
        __publicParameters.keyIsReleased = false;

        // Add the object to tracker if not already tracked
        if (!objectTracker.has(obj)) {
            objectTracker.set(obj, {
                lastX: obj.getX(),
                lastY: obj.getY(),
                lastZ: obj.getZOrder(),
                lastWidth: obj.getWidth(),
                lastHeight: obj.getHeight(),
                lastAngle: obj.getAngle(),
                isTracked: true, // Custom property

                // for movement
                lastMovementTimestamp: 0,
                movementTimestamp: 0,

                // for resizing
                lastResizeTimestamp: 0,
                resizeTimestamp: 0,

                // for rotation
                lastRotationTimestamp: 0,
                rotationTimestamp: 0,

                // for doubleclick
                lastClickTime: 0,
            });

            __publicParameters.hasBeenCreated = true;
        }

        const state = objectTracker.get(obj);

        // Detect movement
        if (obj.getX() !== state.lastX || obj.getY() !== state.lastY || obj.getZOrder() !== state.lastZ) {
            __publicParameters.isMoving = true;
            state.movementTimestamp = Date.now();
        }

        if(Date.now() - state.movementTimestamp > delay && state.lastMovementTimestamp != state.movementTimestamp) {
            state.lastMovementTimestamp = state.movementTimestamp;
            __publicParameters.hasBeenMoved = true;
        }

        // Detect rotation
        if (obj.getAngle() !== state.lastAngle) {
            __publicParameters.isRotating = true;
            state.rotationTimestamp = Date.now();
        }

        if(Date.now() - state.rotationTimestamp > delay && state.lastRotationTimestamp != state.rotationTimestamp) {
            state.lastRotationTimestamp = state.rotationTimestamp;
            __publicParameters.hasBeenRotated = true;
        }

        // Detect resizing
        if (obj.getWidth() !== state.lastWidth || obj.getHeight() !== state.lastHeight) {
            __publicParameters.isResizing = true;
            state.resizeTimestamp = Date.now();
        }

        if(Date.now() - state.resizeTimestamp > delay && state.lastResizeTimestamp != state.resizeTimestamp) {
            state.lastResizeTimestamp = state.resizeTimestamp;
            __publicParameters.hasBeenResized = true;
        }

        // check if mouse is hovering over object
        __publicParameters.isOnHover = isCursorOnObject(obj);

        // check if clicked
        __publicParameters.hasBeenClicked = __publicParameters.isOnHover && gdjs.evtTools.input.isMouseButtonReleased(runtimeScene,"Left");

        // check if pressed
        __publicParameters.beingPressed = __publicParameters.isOnHover && gdjs.evtTools.input.isMouseButtonPressed(runtimeScene,"Left");

        if(__publicParameters.hasBeenClicked) {
            if(Date.now()-state.lastClickTime <= doubleClickThreshold) {
                __publicParameters.hasBeenDoubleClicked = true;
            }
            state.lastClickTime = Date.now();
        }

        __publicParameters.beingScrolledUp = __publicParameters.isOnHover && gdjs.evtTools.input.isScrollingUp(runtimeScene);
        __publicParameters.beingScrolledDown = __publicParameters.isOnHover && gdjs.evtTools.input.isScrollingDown(runtimeScene);

        __publicParameters.beingScrolled = __publicParameters.beingScrolledUp || __publicParameters.beingScrolledDown;

        __publicParameters.isVisibleInsideCamera = isInsideCamera(obj);

        __publicParameters.keyIsPressed = __publicParameters.isOnHover && gdjs.evtTools.input.anyKeyPressed(runtimeScene);
        __publicParameters.keyIsReleased = __publicParameters.isOnHover && gdjs.evtTools.input.anyKeyReleased(runtimeScene);

        // Update object state
        state.lastAngle = obj.getAngle();
        state.lastX = obj.getX();
        state.lastY = obj.getY();
        state.lastZ = obj.getZOrder();
        state.lastWidth = obj.getWidth();
        state.lastHeight = obj.getHeight();

        const behaviorName = "TrackObjectForEvents"; // you can get this from obj.behaviors[].name
        const behavior = obj.getBehavior(behaviorName);

        for(var i in __publicParameters) {
            if(behavior) {
                behavior._behaviorData[i] = __publicParameters[i];
            } else {
                console.error(`Cannot find behavior ${behaviorName}!`);
                obj.getVariables().get(i).setBoolean(__publicParameters[i]);
            }
        }
    });

    // Check for destroyed objects
    for (const [obj, state] of objectTracker.entries()) {
        if (!currentObjects.includes(obj) && state.isTracked) {
            // console.log(`Object destroyed: ${objectName} - ID: ${obj.id}`); // do something with this later
            objectTracker.delete(obj); // Remove from tracker
        }
    }
};

window.__eventListenerTrackObjectsEfficiently = trackObjectsEfficiently;
};
gdjs.evtsExt__EventListener__onSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__EventListener__onSceneLoaded.userFunc0x2ab4b08(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__EventListener__onSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__EventListener__onSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__EventListener__onSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__EventListener__onSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__EventListener__onSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeSceneLoadedCallback(gdjs.evtsExt__EventListener__onSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__EventListener__onSceneLoaded.registeredGdjsCallbacks.length - 1]);
