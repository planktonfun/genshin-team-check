
if (typeof gdjs.evtsExt__CrazyGamesAdApi__GetUserSignIn !== "undefined") {
  gdjs.evtsExt__CrazyGamesAdApi__GetUserSignIn.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CrazyGamesAdApi__GetUserSignIn = {};


gdjs.evtsExt__CrazyGamesAdApi__GetUserSignIn.userFunc0x519c9b0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
      console.log("Checking user is signed in start");
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
                gdjs._crazyGamesExtension.userSignedIn = true;
                gdjs._crazyGamesExtension.username = user.username;
                gdjs._crazyGamesExtension.profilePictureUrl = user.profilePictureUrl;
                eventsFunctionContext.task.resolve();
                console.log("Checking user is signed in done");
            } else {
                console.log("No user is signed in.");
                // Optionally, prompt the user to sign in
                gdjs._crazyGamesExtension.userSignedIn = false;
                gdjs._crazyGamesExtension.username = null;
                gdjs._crazyGamesExtension.profilePictureUrl = null;
                eventsFunctionContext.task.resolve();
                console.log("Checking user is signed in done");    
            }
        } catch (error) {
            console.error("Error retrieving user info:", error);
            eventsFunctionContext.task.resolve();
            console.log("Checking user is signed in done");
        }
      }

      getUser();
};
gdjs.evtsExt__CrazyGamesAdApi__GetUserSignIn.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CrazyGamesAdApi__GetUserSignIn.userFunc0x519c9b0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__CrazyGamesAdApi__GetUserSignIn.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__CrazyGamesAdApi__IsSDKLoaded.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
{gdjs.evtTools.common.resolveAsyncEventsFunction((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__CrazyGamesAdApi__IsSDKLoaded.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__CrazyGamesAdApi__GetUserSignIn.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__CrazyGamesAdApi__GetUserSignIn.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__CrazyGamesAdApi__GetUserSignIn.eventsList1(runtimeScene, eventsFunctionContext);

return eventsFunctionContext.task
}

gdjs.evtsExt__CrazyGamesAdApi__GetUserSignIn.registeredGdjsCallbacks = [];