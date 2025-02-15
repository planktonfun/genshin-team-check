
gdjs.evtsExt__EventListener__TrackTextInputsForEvents = gdjs.evtsExt__EventListener__TrackTextInputsForEvents || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents = class TrackTextInputsForEvents extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Submitted = false;
    this._behaviorData.SubmittedContent = "";
    this._behaviorData.InputChanged = false;
    this._behaviorData.IsFocused = false;
    this._behaviorData.IsBlured = false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Submitted !== newBehaviorData.Submitted)
      this._behaviorData.Submitted = newBehaviorData.Submitted;
    if (oldBehaviorData.SubmittedContent !== newBehaviorData.SubmittedContent)
      this._behaviorData.SubmittedContent = newBehaviorData.SubmittedContent;
    if (oldBehaviorData.InputChanged !== newBehaviorData.InputChanged)
      this._behaviorData.InputChanged = newBehaviorData.InputChanged;
    if (oldBehaviorData.IsFocused !== newBehaviorData.IsFocused)
      this._behaviorData.IsFocused = newBehaviorData.IsFocused;
    if (oldBehaviorData.IsBlured !== newBehaviorData.IsBlured)
      this._behaviorData.IsBlured = newBehaviorData.IsBlured;

    return true;
  }

  // Properties:
  
  _getSubmitted() {
    return this._behaviorData.Submitted !== undefined ? this._behaviorData.Submitted : false;
  }
  _setSubmitted(newValue) {
    this._behaviorData.Submitted = newValue;
  }
  _toggleSubmitted() {
    this._setSubmitted(!this._getSubmitted());
  }
  _getSubmittedContent() {
    return this._behaviorData.SubmittedContent !== undefined ? this._behaviorData.SubmittedContent : "";
  }
  _setSubmittedContent(newValue) {
    this._behaviorData.SubmittedContent = newValue;
  }
  _getInputChanged() {
    return this._behaviorData.InputChanged !== undefined ? this._behaviorData.InputChanged : false;
  }
  _setInputChanged(newValue) {
    this._behaviorData.InputChanged = newValue;
  }
  _toggleInputChanged() {
    this._setInputChanged(!this._getInputChanged());
  }
  _getIsFocused() {
    return this._behaviorData.IsFocused !== undefined ? this._behaviorData.IsFocused : false;
  }
  _setIsFocused(newValue) {
    this._behaviorData.IsFocused = newValue;
  }
  _toggleIsFocused() {
    this._setIsFocused(!this._getIsFocused());
  }
  _getIsBlured() {
    return this._behaviorData.IsBlured !== undefined ? this._behaviorData.IsBlured : false;
  }
  _setIsBlured(newValue) {
    this._behaviorData.IsBlured = newValue;
  }
  _toggleIsBlured() {
    this._setIsBlured(!this._getIsBlured());
  }
}

/**
 * Shared data generated from 
 */
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.SharedData = class TrackTextInputsForEventsSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._EventListener_TrackTextInputsForEventsSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._EventListener_TrackTextInputsForEventsSharedData = new gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.SharedData(
      initialData
    );
  }
  return instanceContainer._EventListener_TrackTextInputsForEventsSharedData;
}

// Methods:
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.onCreatedContext = {};
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.onCreatedContext.GDObjectObjects1= [];


gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.onCreatedContext.userFunc0xc0a7a0 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const object = objects[0];
const behavior = object.getBehavior(behaviorName);

const history = [];
let currentIndex = -1;
let obj = objects[0];
const inputElement = obj._renderer._input;

function isFocused(inputElement) {
    return (document.activeElement === inputElement)
}

if(inputElement.type != "number") {
	inputElement.addEventListener('keydown', (event) => {
	    if(event.key === 'Enter') {
	        // Save the input value to history
	        const value = inputElement.value.trim();
	        if (value) {
	            history.push(value);
	            currentIndex = -1; // Reset index after saving
	        }

	        behavior.SetSubmitted(true);
	        behavior.SetSubmittedContent(inputElement.value);

	        inputElement.value = "";

	    } else if (event.key === 'ArrowUp' && isFocused(inputElement)) {
	        if (currentIndex < history.length - 1) {
	            currentIndex++;
	            inputElement.value = history[history.length - 1 - currentIndex];
	        }
	        event.preventDefault();
	    } else if (event.key === 'ArrowDown' && isFocused(inputElement)) {
	        if (currentIndex > 0) {
	            currentIndex--;
	            inputElement.value = history[history.length - 1 - currentIndex];
	        } else if (currentIndex === 0) {
	            inputElement.value = ''; // Clear input if at the top of the history
	            currentIndex = -1;
	        }
	        event.preventDefault();
	    }
	})
} else {
	inputElement.addEventListener('keydown', (event) => {
	    if(event.key === 'Enter') {
	        behavior.SetSubmitted(true);
	        behavior.SetSubmittedContent(inputElement.value);

	        inputElement.blur();
	    }
	})
}

// Event: 'input' - Triggered when the user types in the input field
inputElement.addEventListener("input", (event) => {
    behavior.SetInputChanged(true);
});

// Event: 'focus' - Triggered when the input field gains focus
inputElement.addEventListener("focus", () => {
    behavior.SetIsFocused(true);
});

// Event: 'blur' - Triggered when the input field loses focus
inputElement.addEventListener("blur", () => {
    behavior.SetIsBlured(true);
});
};
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.onCreatedContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.onCreatedContext.GDObjectObjects1);
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.onCreatedContext.userFunc0xc0a7a0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.doStepPostEventsContext.userFunc0x3707a38 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const object = objects[0];
const behavior = object.getBehavior(behaviorName);

// put this on post event
behavior.SetSubmitted(false);
behavior.SetInputChanged(false);
behavior.SetIsFocused(false);
behavior.SetIsBlured(false);
};
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.doStepPostEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.doStepPostEventsContext.GDObjectObjects1);
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.doStepPostEventsContext.userFunc0x3707a38(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SubmittedContext = {};
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SubmittedContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SubmittedContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SubmittedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SubmittedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SubmittedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SubmittedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSubmitted() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SubmittedContext.GDObjectObjects1[k] = gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SubmittedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SubmittedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.Submitted = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SubmittedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SubmittedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SubmittedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetSubmittedContext = {};
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetSubmittedContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetSubmittedContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetSubmittedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetSubmittedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetSubmittedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetSubmittedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSubmitted(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetSubmittedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetSubmittedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetSubmittedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSubmitted(true);
}
}}

}


};

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetSubmitted = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetSubmittedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetSubmittedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetSubmittedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SubmittedContentContext = {};
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SubmittedContentContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SubmittedContentContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SubmittedContentContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SubmittedContentContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SubmittedContentContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SubmittedContentContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSubmittedContent()); }}}

}


};

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SubmittedContent = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SubmittedContentContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SubmittedContentContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SubmittedContentContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetSubmittedContentContext = {};
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetSubmittedContentContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetSubmittedContentContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetSubmittedContentContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetSubmittedContentContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetSubmittedContentContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetSubmittedContentContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSubmittedContent((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : ""));
}
}}

}


};

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetSubmittedContent = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetSubmittedContentContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetSubmittedContentContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetSubmittedContentContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.InputChangedContext = {};
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.InputChangedContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.InputChangedContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.InputChangedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.InputChangedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.InputChangedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.InputChangedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInputChanged() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.InputChangedContext.GDObjectObjects1[k] = gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.InputChangedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.InputChangedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.InputChanged = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.InputChangedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.InputChangedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.InputChangedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetInputChangedContext = {};
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetInputChangedContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetInputChangedContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetInputChangedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetInputChangedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetInputChangedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetInputChangedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setInputChanged(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetInputChangedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetInputChangedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetInputChangedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setInputChanged(true);
}
}}

}


};

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetInputChanged = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetInputChangedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetInputChangedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetInputChangedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsFocusedContext = {};
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsFocusedContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsFocusedContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsFocusedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsFocusedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsFocusedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsFocusedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsFocused() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsFocusedContext.GDObjectObjects1[k] = gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsFocusedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsFocusedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsFocused = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsFocusedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsFocusedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsFocusedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsFocusedContext = {};
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsFocusedContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsFocusedContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsFocusedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsFocusedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsFocusedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsFocusedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsFocused(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsFocusedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsFocusedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsFocusedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsFocused(true);
}
}}

}


};

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsFocused = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsFocusedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsFocusedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsFocusedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsBluredContext = {};
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsBluredContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsBluredContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsBluredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsBluredContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsBluredContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsBluredContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsBlured() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsBluredContext.GDObjectObjects1[k] = gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsBluredContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsBluredContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsBlured = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsBluredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsBluredContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.IsBluredContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsBluredContext = {};
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsBluredContext.GDObjectObjects1= [];
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsBluredContext.GDObjectObjects2= [];


gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsBluredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsBluredContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsBluredContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsBluredContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsBlured(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsBluredContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsBluredContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsBluredContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsBlured(true);
}
}}

}


};

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsBlured = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsBluredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsBluredContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.SetIsBluredContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("EventListener::TrackTextInputsForEvents", gdjs.evtsExt__EventListener__TrackTextInputsForEvents.TrackTextInputsForEvents);
