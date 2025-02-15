
if (typeof gdjs.evtsExt__CrazyGamesAdApi__LoadSDK !== "undefined") {
  gdjs.evtsExt__CrazyGamesAdApi__LoadSDK.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CrazyGamesAdApi__LoadSDK = {};


gdjs.evtsExt__CrazyGamesAdApi__LoadSDK.userFunc0x13a9300 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const logger = new gdjs.Logger("CrazyGames SDK");
const addScript = (src) => {
    return new Promise((resolve, reject) => {
        const scriptElement = document.createElement('script');

        scriptElement.setAttribute('src', src);
        scriptElement.addEventListener('load', resolve);
        scriptElement.addEventListener('error', reject);

        document.body.appendChild(scriptElement);
    });
}

async function initializeGame() {
    try {
        await CrazyGames.SDK.init();
        console.log("CrazyGames SDK initialized successfully.");
        // Start your game logic here
    } catch (error) {
        console.error("Failed to initialize CrazyGames SDK:", error);
    }
}

addScript('https://sdk.crazygames.com/crazygames-sdk-v3.js').then(async () => {
    await initializeGame();
    gdjs._crazyGamesExtension.isSdkReady = true;
    logger.log("CrazyGames SDK successfully initialized.");

    const listener = (user) => {
        gdjs._crazyGamesExtension.userChanged = true;
        gdjs._crazyGamesExtension.username = user.username;
        gdjs._crazyGamesExtension.profilePictureUrl = user.profilePictureUrl;
    };
    
    // add listener
    CrazyGames.SDK.user.addAuthListener(listener);

    // remove listener
    CrazyGames.SDK.user.removeAuthListener(listener);

    eventsFunctionContext.task.resolve();
})
};
gdjs.evtsExt__CrazyGamesAdApi__LoadSDK.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CrazyGamesAdApi__LoadSDK.userFunc0x13a9300(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

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