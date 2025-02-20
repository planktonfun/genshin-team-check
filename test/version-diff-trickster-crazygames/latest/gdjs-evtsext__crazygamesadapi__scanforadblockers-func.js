
if (typeof gdjs.evtsExt__CrazyGamesAdApi__ScanForAdBlockers !== "undefined") {
  gdjs.evtsExt__CrazyGamesAdApi__ScanForAdBlockers.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CrazyGamesAdApi__ScanForAdBlockers = {};


gdjs.evtsExt__CrazyGamesAdApi__ScanForAdBlockers.userFunc0xee7bd8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const logger = new gdjs.Logger("CrazyGames SDK");

// Detecting Ad Blockers
async function checkAdBlocker() {
    try {
        const isAdBlocked = await CrazyGames.SDK.ad.hasAdblock();
        if (isAdBlocked) {
            console.log("Ad blocker detected.", result);
            gdjs._crazyGamesExtension.isAdBlockerDetected = true;
            
            // Handle ad blocker scenario
        } else {
            console.log("No ad blocker detected.");
            gdjs._crazyGamesExtension.isAdBlockerDetected = false;
        }
        
    } catch (error) {
        console.error("Error checking for ad blocker:", error);
        logger.error("Unable to scan adblockers.", error);
        gdjs._crazyGamesExtension.latestError = error;
    }

    eventsFunctionContext.task.resolve();
}

checkAdBlocker();
};
gdjs.evtsExt__CrazyGamesAdApi__ScanForAdBlockers.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CrazyGamesAdApi__ScanForAdBlockers.userFunc0xee7bd8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__CrazyGamesAdApi__ScanForAdBlockers.eventsList1 = function(runtimeScene, eventsFunctionContext) {

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
gdjs.evtsExt__CrazyGamesAdApi__ScanForAdBlockers.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__CrazyGamesAdApi__ScanForAdBlockers.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__CrazyGamesAdApi__ScanForAdBlockers.eventsList1(runtimeScene, eventsFunctionContext);

return eventsFunctionContext.task
}

gdjs.evtsExt__CrazyGamesAdApi__ScanForAdBlockers.registeredGdjsCallbacks = [];