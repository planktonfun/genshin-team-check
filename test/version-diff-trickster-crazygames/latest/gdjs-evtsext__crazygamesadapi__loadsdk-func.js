
if (typeof gdjs.evtsExt__CrazyGamesAdApi__LoadSDK !== "undefined") {
  gdjs.evtsExt__CrazyGamesAdApi__LoadSDK.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CrazyGamesAdApi__LoadSDK = {};


gdjs.evtsExt__CrazyGamesAdApi__LoadSDK.userFunc0x3fc4978 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const logger = new gdjs.Logger("CrazyGames SDK");

if (!window['CrazyGamesSingleton']) {
    window.CrazyGamesSingleton = (function () {
        let isInitializing = false;
        let isInitialized = false;
        let initPromise = null;

        async function initialize() {
            if (isInitialized) {
                console.log("CrazyGames SDK is already initialized.");
                return Promise.resolve();
            }
            if (isInitializing) {
                console.log("CrazyGames SDK initialization is in progress...");
                return initPromise; // Return the same promise to avoid duplicate calls
            }

            isInitializing = true;
            initPromise = new Promise(async (resolve, reject) => {
                try {
                    await CrazyGames.SDK.init();
                    if (CrazyGames.SDK.environment == 'disabled') {
                        throw new Error('not in local or crazy game environment');
                    }
                    console.log("CrazyGames SDK initialized successfully.");
                    isInitialized = true;
                    resolve();
                } catch (error) {
                    console.error("Failed to initialize CrazyGames SDK:", error);
                    reject(error);
                } finally {
                    isInitializing = false;
                }
            });

            return initPromise;
        }

        return { initialize };
    })();
}

// Function to check if CrazyGames SDK is already loaded
function isCrazyGamesLoaded() {
    return window.CrazyGames && window.CrazyGames.SDK;
}

// Function to initialize CrazyGames SDK safely
async function initializeGame() {
    gdjs._crazyGamesExtension.isSdkReady = true;
    
    // Add user listener
    const listener = (user) => {
        gdjs._crazyGamesExtension.userChanged = true;
        gdjs._crazyGamesExtension.username = user.username;
        gdjs._crazyGamesExtension.profilePictureUrl = user.profilePictureUrl;
    };
    
    CrazyGames.SDK.user.addAuthListener(listener);
    CrazyGames.SDK.user.removeAuthListener(listener);
    
    eventsFunctionContext.task.resolve();
}

// Load SDK only if it's missing
if (!isCrazyGamesLoaded()) {
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://sdk.crazygames.com/crazygames-sdk-v3.js';
    
    scriptElement.onload = async () => {
        console.log("CrazyGames SDK script loaded.");
        await CrazyGamesSingleton.initialize();
        if (CrazyGames.SDK.environment != 'disabled') {
            initializeGame();
        }
        eventsFunctionContext.task.resolve();
    };

    document.body.appendChild(scriptElement);
} else {
    console.log("CrazyGames SDK already loaded.");
    
    (async function () {
        await CrazyGamesSingleton.initialize();
        if (CrazyGames.SDK.environment != 'disabled') {
            initializeGame();
        }
        eventsFunctionContext.task.resolve();
    })();
}
};
gdjs.evtsExt__CrazyGamesAdApi__LoadSDK.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CrazyGamesAdApi__LoadSDK.userFunc0x3fc4978(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CrazyGamesAdApi__LoadSDK.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
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


gdjs.evtsExt__CrazyGamesAdApi__LoadSDK.eventsList0(runtimeScene, eventsFunctionContext);

return eventsFunctionContext.task
}

gdjs.evtsExt__CrazyGamesAdApi__LoadSDK.registeredGdjsCallbacks = [];