
if (typeof gdjs.evtsExt__CrazyGamesAdApi__ShowAuthWindow !== "undefined") {
  gdjs.evtsExt__CrazyGamesAdApi__ShowAuthWindow.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CrazyGamesAdApi__ShowAuthWindow = {};


gdjs.evtsExt__CrazyGamesAdApi__ShowAuthWindow.userFunc0xc81950 = function(runtimeScene, eventsFunctionContext) {
"use strict";
     
      function isTokenExpired(token) {
          const { exp } = decodeJWT(token);
          const currentTime = Math.floor(Date.now() / 1000);
          return exp < currentTime;
      }

      async function showAuthPrompt() {
        try {
            const user = await CrazyGames.SDK.user.showAuthPrompt();
            if (user) {
                console.log("User signed in:", user);
                // Proceed with authenticated user
                await getUserData();
                const data = await getUserSession();
                gdjs._crazyGamesExtension.userId = data.userId;
                gdjs._crazyGamesExtension.username = user.username;
                gdjs._crazyGamesExtension.profilePictureUrl = user.profilePictureUrl;
                eventsFunctionContext.task.resolve();
            } else {
                console.log("User dismissed the auth prompt.");
                // Handle the case where the user cancels the sign-in process
                eventsFunctionContext.task.resolve();
            }
        } catch (error) {
            console.error("Error during auth prompt:", error);
            eventsFunctionContext.task.resolve();
        }
      }

    async function getUserData() {
        const userData = await getUserSession();
        console.log("Decoded user data:", userData);

        // const publicKey = await fetchPublicKey();
        // console.log('Public Key:', publicKey);
        // Send this token to your backend server for verification
        // // Note: Signature verification should be done on a secure server
        // For testing purposes, you can display the public key
        // let token = localStorage.getItem('crazygamesUserToken');
        // console.log('verified', verifyToken(token, publicKey));

      }

    async function getUserSession() {
          let token = null;

           try {
                console.log("Requesting a user token.");
                token = await CrazyGames.SDK.user.getUserToken();
            } catch (error) {
                console.error("Error retrieving new user token:", error);
                return null;
            }

          return decodeJWT(token);
      }

        function decodeJWT(token) {

        // console.log('heylo', jwt_decode(token));
          const parts = token.split('.');
          if (parts.length !== 3) {
              throw new Error('Invalid JWT format');
          }

          const base64Url = parts[1];
          const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          const jsonPayload = decodeURIComponent(atob(base64).split('').map((char) => {
              return '%' + ('00' + char.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));

          return JSON.parse(jsonPayload);
      }

      async function handleLoggedInUser(user) {
        const userToken = await CrazyGames.getUserToken();

        // Check if the CrazyGames account is linked to an in-game account
        const isLinked = await checkIfAccountIsLinked(userToken);

        if (isLinked) {
            // Case: There is a game account linked to this CrazyGames account
            const gameData = await fetchGameData(userToken);
            startGameWithData(gameData);
        } else {
            // Check if the user is logged into your in-game account
            const isLoggedIntoGameAccount = await checkIfLoggedIntoGameAccount();

            if (isLoggedIntoGameAccount) {
                // Case: User is logged into in-game account but not linked to CrazyGames
                showLinkAccountButton();
            } else {
                // Case: No in-game account exists, create a new one linked to CrazyGames
                const newGameData = await createNewGameAccount(userToken);
                startGameWithData(newGameData);
            }
        }
    }

     showAuthPrompt();
};
gdjs.evtsExt__CrazyGamesAdApi__ShowAuthWindow.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CrazyGamesAdApi__ShowAuthWindow.userFunc0xc81950(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CrazyGamesAdApi__ShowAuthWindow.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__CrazyGamesAdApi__ShowAuthWindow.eventsList0(runtimeScene, eventsFunctionContext);

return eventsFunctionContext.task
}

gdjs.evtsExt__CrazyGamesAdApi__ShowAuthWindow.registeredGdjsCallbacks = [];