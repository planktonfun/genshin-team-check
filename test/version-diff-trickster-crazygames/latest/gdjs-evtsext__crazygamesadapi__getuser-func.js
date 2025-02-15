
if (typeof gdjs.evtsExt__CrazyGamesAdApi__GetUser !== "undefined") {
  gdjs.evtsExt__CrazyGamesAdApi__GetUser.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CrazyGamesAdApi__GetUser = {};


gdjs.evtsExt__CrazyGamesAdApi__GetUser.userFunc0xe7bc38 = function(runtimeScene, eventsFunctionContext) {
"use strict";
      function wait(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
      }

      async function getUser() {
        const isAvailable = CrazyGames.SDK.user.isUserAccountAvailable;
        console.log("User account system available:", isAvailable);

        try {
            const user = await CrazyGames.SDK.user.getUser();
            if (user) {
                console.log("User info:", user);
                // Example: Display the user's username in the game
                gdjs._crazyGamesExtension.username = user.username;
                gdjs._crazyGamesExtension.profilePictureUrl = user.profilePictureUrl;
                eventsFunctionContext.task.resolve();
            } else {
                console.log("No user is signed in.");
                // Optionally, prompt the user to sign in
                gdjs._crazyGamesExtension.username = null;
                gdjs._crazyGamesExtension.profilePictureUrl = null;
                eventsFunctionContext.task.resolve();
                
            }
        } catch (error) {
            console.error("Error retrieving user info:", error);
            eventsFunctionContext.task.resolve();
        }
      }

      getUser();
};
gdjs.evtsExt__CrazyGamesAdApi__GetUser.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CrazyGamesAdApi__GetUser.userFunc0xe7bc38(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CrazyGamesAdApi__GetUser.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__CrazyGamesAdApi__GetUser.eventsList0(runtimeScene, eventsFunctionContext);

return eventsFunctionContext.task
}

gdjs.evtsExt__CrazyGamesAdApi__GetUser.registeredGdjsCallbacks = [];