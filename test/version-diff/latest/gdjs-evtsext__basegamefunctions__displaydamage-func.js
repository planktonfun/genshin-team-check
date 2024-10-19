
if (typeof gdjs.evtsExt__BaseGameFunctions__DisplayDamage !== "undefined") {
  gdjs.evtsExt__BaseGameFunctions__DisplayDamage.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BaseGameFunctions__DisplayDamage = {};


gdjs.evtsExt__BaseGameFunctions__DisplayDamage.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.variablePushCopy(runtimeScene.getScene().getVariables().get("DamageDisplayArray"), runtimeScene.getScene().getVariables().get("Temp"));
}}

}


};gdjs.evtsExt__BaseGameFunctions__DisplayDamage.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("Temp").getChild("type").setNumber(3);
}{runtimeScene.getScene().getVariables().get("Temp").getChild("x").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("Temp").getChild("y").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("Temp").getChild("animation").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Type") : ""));
}
{ //Subevents
gdjs.evtsExt__BaseGameFunctions__DisplayDamage.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__BaseGameFunctions__DisplayDamage.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.variablePushCopy(runtimeScene.getScene().getVariables().get("DamageDisplayArray"), runtimeScene.getScene().getVariables().get("Temp"));
}}

}


};gdjs.evtsExt__BaseGameFunctions__DisplayDamage.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.variablePushCopy(runtimeScene.getScene().getVariables().get("DamageDisplayArray"), runtimeScene.getScene().getVariables().get("Temp"));
}}

}


};gdjs.evtsExt__BaseGameFunctions__DisplayDamage.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("Temp").getChild("type").setNumber(2);
}{runtimeScene.getScene().getVariables().get("Temp").getChild("x").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("Temp").getChild("y").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("Temp").getChild("pickedColor").setNumber(0);
}{runtimeScene.getScene().getVariables().get("Temp").getChild("damage").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Damage")) || 0 : 0));
}
{ //Subevents
gdjs.evtsExt__BaseGameFunctions__DisplayDamage.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("Temp").getChild("type").setNumber(3);
}{runtimeScene.getScene().getVariables().get("Temp").getChild("x").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("Temp").getChild("y").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y")) || 0 : 0) - 18);
}{runtimeScene.getScene().getVariables().get("Temp").getChild("animation").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Type") : ""));
}
{ //Subevents
gdjs.evtsExt__BaseGameFunctions__DisplayDamage.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__BaseGameFunctions__DisplayDamage.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("Temp").getChild("critColor").setString("red");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : "") == "magical");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("Temp").getChild("critColor").setString("blue");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : "") == "normal");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("Temp").getChild("pickedColor").setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Type") : "") == "critical");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("Temp").getChild("pickedColor").setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : "") == "heal MP");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("Temp").getChild("pickedColor").setNumber(2);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : "") == "heal HP");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("Temp").getChild("pickedColor").setNumber(3);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.variablePushCopy(runtimeScene.getScene().getVariables().get("DamageDisplayArray"), runtimeScene.getScene().getVariables().get("Temp"));
}}

}


};gdjs.evtsExt__BaseGameFunctions__DisplayDamage.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("Temp").getChild("type").setNumber(2);
}{runtimeScene.getScene().getVariables().get("Temp").getChild("x").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("Temp").getChild("y").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("Temp").getChild("damage").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Damage")) || 0 : 0));
}
{ //Subevents
gdjs.evtsExt__BaseGameFunctions__DisplayDamage.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__BaseGameFunctions__DisplayDamage.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("Temp").getChild("type").setNumber(1);
}{runtimeScene.getScene().getVariables().get("Temp").getChild("x").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("Temp").getChild("y").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("Temp").getChild("color").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : ""));
}{runtimeScene.getScene().getVariables().get("Temp").getChild("power").setNumber(0);
}{runtimeScene.getScene().getVariables().get("Temp").getChild("damage").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Damage")) || 0 : 0));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Type") : "") == "power");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("Temp").getChild("power").setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.variablePushCopy(runtimeScene.getScene().getVariables().get("DamageDisplayArray"), runtimeScene.getScene().getVariables().get("Temp"));
}}

}


};gdjs.evtsExt__BaseGameFunctions__DisplayDamage.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Type") : "") == "miss");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Type") : "") == "shield");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Type") : "") == "block");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("StopHere"), true);
}
{ //Subevents
gdjs.evtsExt__BaseGameFunctions__DisplayDamage.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : "") == "normal");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Type") : "") == "critical");
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("StopHere"), false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("StopHere"), true);
}
{ //Subevents
gdjs.evtsExt__BaseGameFunctions__DisplayDamage.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : "") == "heal HP");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : "") == "heal MP");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
{isConditionTrue_2 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : "") == "normal");
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Type") : "") != "critical");
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
{isConditionTrue_2 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : "") == "physical");
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Type") : "") == "critical");
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
{isConditionTrue_2 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : "") == "magical");
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Type") : "") == "critical");
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("StopHere"), false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("StopHere"), true);
}
{ //Subevents
gdjs.evtsExt__BaseGameFunctions__DisplayDamage.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : "") == "physical");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : "") == "magical");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Type") : "") != "critical");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("StopHere"), false);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("StopHere"), true);
}
{ //Subevents
gdjs.evtsExt__BaseGameFunctions__DisplayDamage.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__BaseGameFunctions__DisplayDamage.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("StopHere"), false);
}
{ //Subevents
gdjs.evtsExt__BaseGameFunctions__DisplayDamage.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__BaseGameFunctions__DisplayDamage.func = function(runtimeScene, Color, Type, Damage, X, Y, parentEventsFunctionContext) {
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
if (argName === "Color") return Color;
if (argName === "Type") return Type;
if (argName === "Damage") return Damage;
if (argName === "X") return X;
if (argName === "Y") return Y;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__BaseGameFunctions__DisplayDamage.eventsList9(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__BaseGameFunctions__DisplayDamage.registeredGdjsCallbacks = [];