
if (typeof gdjs.evtsExt__InterfaceFunctions__AppendChatMessage !== "undefined") {
  gdjs.evtsExt__InterfaceFunctions__AppendChatMessage.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InterfaceFunctions__AppendChatMessage = {};


gdjs.evtsExt__InterfaceFunctions__AppendChatMessage.userFunc0x2102498 = function(runtimeScene, eventsFunctionContext) {
"use strict";
function splitStringByPixelWidth(text, maxWidth) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    let lines = [];
    let currentLine = '';
    let currentWidth = 0;

    for (let char of text) {
        const metrics = context.measureText(char);
        const charWidth = metrics.width;

        // Check if adding the character exceeds the max width
        if (currentWidth + charWidth > maxWidth) {
            lines.push(currentLine); // Store the current line
            currentLine = char; // Start a new line with the current character
            currentWidth = charWidth; // Reset current width to the new character's width
        } else {
            currentLine += char; // Add character to the current line
            currentWidth += charWidth; // Update the current width
        }
    }

    if (currentLine) {
        lines.push(currentLine); // Add any remaining characters as the last line
    }

    return lines;
}

const textContent = eventsFunctionContext.getArgument("TextContent").trim();
const chunks = splitStringByPixelWidth(textContent, 216.65);

let temp = [];

function appendChatObject(text) {
    // if its a command don't display it
    if(text.search(': /') > -1) return;

    temp.push(text.trim())
}

chunks.forEach(e=>appendChatObject(e));

runtimeScene.getVariables().get('TempChunks').fromJSObject(temp);
};
gdjs.evtsExt__InterfaceFunctions__AppendChatMessage.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("Temp").getChild("content").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("childqwe")));
}{gdjs.evtTools.variable.variablePushCopy(runtimeScene.getScene().getVariables().get("__chatInterface").getChild("GeneralTextArray"), runtimeScene.getScene().getVariables().get("Temp"));
}}

}


};gdjs.evtsExt__InterfaceFunctions__AppendChatMessage.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InterfaceFunctions__AppendChatMessage.userFunc0x2102498(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__chatInterface").getChild("FilterMessage"), true);
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("Temp").getChild("color").setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Type") == "System");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("Temp").getChild("color").setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Type") == "Whisper");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("Temp").getChild("color").setNumber(2);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Type") == "User");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("Temp").getChild("color").setNumber(3);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Type") == "Guild");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("Temp").getChild("color").setNumber(4);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Type") == "Party");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("Temp").getChild("color").setNumber(5);
}}

}


{


const valueIteratorReference2 = runtimeScene.getScene().getVariables().get("childqwe");
const iterableReference2 = runtimeScene.getScene().getVariables().get("TempChunks");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.evtsExt__InterfaceFunctions__AppendChatMessage.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}
}

}


};

gdjs.evtsExt__InterfaceFunctions__AppendChatMessage.func = function(runtimeScene, TextContent, Type, parentEventsFunctionContext) {
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
if (argName === "TextContent") return TextContent;
if (argName === "Type") return Type;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InterfaceFunctions__AppendChatMessage.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__InterfaceFunctions__AppendChatMessage.registeredGdjsCallbacks = [];