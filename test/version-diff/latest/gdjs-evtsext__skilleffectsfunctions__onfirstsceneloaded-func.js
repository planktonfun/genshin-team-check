
if (typeof gdjs.evtsExt__SkillEffectsFunctions__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__SkillEffectsFunctions__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SkillEffectsFunctions__onFirstSceneLoaded = {};


gdjs.evtsExt__SkillEffectsFunctions__onFirstSceneLoaded.userFunc0x1200270 = function(runtimeScene, eventsFunctionContext) {
"use strict";
function getState() {
  if (document.visibilityState === 'hidden') {
    return 'hidden';
  }
  if (document.hasFocus()) {
    return 'focused';
  }
  return 'not focused';
};

window.browserState = getState();

function logStateChange(nextState) {
  var prevState = browserState;
  if (nextState !== prevState) {
    browserState = nextState;
  }
};

function onPageStateChange() {
  logStateChange(getState())
}

['pageshow', 'focus', 'blur', 'visibilitychange', 'resume'].forEach(function (type) {
  window.addEventListener(type, onPageStateChange, {capture: true});
});

function onFreeze() {
  logStateChange('frozen');
}

window.addEventListener('freeze', onFreeze, {capture: true});

function onPageHide(event) {
  if (event.persisted) {
    // If the event's persisted property is `true` the page is about
    // to enter the page navigation cache, which is also in the frozen state.
    logStateChange('frozen');
  } else {
    // If the event's persisted property is not `true` the page is about to be unloaded.
    logStateChange('terminated');
  }
}
};
gdjs.evtsExt__SkillEffectsFunctions__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__SkillEffectsFunctions__onFirstSceneLoaded.userFunc0x1200270(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__SkillEffectsFunctions__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__SkillEffectsFunctions__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__SkillEffectsFunctions__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__SkillEffectsFunctions__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__SkillEffectsFunctions__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__SkillEffectsFunctions__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__SkillEffectsFunctions__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
