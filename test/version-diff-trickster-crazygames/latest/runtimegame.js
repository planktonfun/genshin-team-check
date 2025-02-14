var gdjs;
(function(i) {
    const d = new i.Logger("Game manager")
      , h = (o,e,t)=>{
        if (o.startsWith("data:") || o.startsWith("blob:"))
            return o;
        const s = o.indexOf("?") === -1 ? "?" : "&";
        return o + s + e + "=" + t
    }
      , l = o=>o.startsWith("https://project-resources.gdevelop.io/") || o.startsWith("https://project-resources-dev.gdevelop.io/");
    class c {
        constructor(e) {
            this._runtimeGame = e
        }
        getFullUrl(e) {
            const {gdevelopResourceToken: t} = this._runtimeGame._options;
            e = getExtractedFile(e);
            return !t || !l(e) ? e : h(e, "gd_resource_token", encodeURIComponent(t))
        }
        checkIfCredentialsRequired(e) {
            return this._runtimeGame._options.gdevelopResourceToken ? !1 : !!l(e)
        }
    }
    i.RuntimeGameResourcesLoader = c;
    class _ {
        constructor(e, t) {
            this._notifyScenesForGameResolutionResize = !1;
            this._paused = !1;
            this._hasJustResumed = !1;
            this._sessionMetricsInitialized = !1;
            this._disableMetrics = !1;
            this.loadAllAssetsAsync = async e=>{
                const t = new i.LoadingScreenRenderer(this.getRenderer(),this._imageManager,this._data.properties.loadingScreen)
                  , s = this._data.resources.resources.length;
                let a = 0;
                const n = (r,u)=>{
                    const g = Math.floor(100 * (a + r) / s);
                    t.setPercent(g),
                    e && e(g)
                }
                ;
                a += await this._imageManager.loadTextures(n),
                a += await this._soundManager.preloadAudio(n),
                a += await this._fontManager.loadFonts(n),
                a += await this._jsonManager.preloadJsons(n),
                a += await this._model3DManager.loadModels(n),
                await this._bitmapFontManager.loadBitmapFontData(n),
                await t.unload(),
                await i.getAllAsynchronouslyLoadingLibraryPromise()
            }
            ;
            this._options = t || {},
            this._variables = new i.VariablesContainer(e.variables),
            this._data = e,
            this._resourcesLoader = new i.RuntimeGameResourcesLoader(this);
            const s = this._data.resources.resources;
            this._imageManager = new i.ImageManager(s,this._resourcesLoader),
            this._soundManager = new i.SoundManager(s,this._resourcesLoader),
            this._fontManager = new i.FontManager(s,this._resourcesLoader),
            this._jsonManager = new i.JsonManager(s,this._resourcesLoader),
            this._bitmapFontManager = new i.BitmapFontManager(s,this._resourcesLoader,this._imageManager),
            this._model3DManager = new i.Model3DManager(s,this._resourcesLoader),
            this._effectsManager = new i.EffectsManager,
            this._maxFPS = this._data.properties.maxFPS,
            this._minFPS = this._data.properties.minFPS,
            this._gameResolutionWidth = this._data.properties.windowWidth,
            this._gameResolutionHeight = this._data.properties.windowHeight,
            this._originalWidth = this._gameResolutionWidth,
            this._originalHeight = this._gameResolutionHeight,
            this._resizeMode = this._data.properties.sizeOnStartupMode,
            this._adaptGameResolutionAtRuntime = this._data.properties.adaptGameResolutionAtRuntime,
            this._scaleMode = e.properties.scaleMode || "linear",
            this._pixelsRounding = this._data.properties.pixelsRounding,
            this._antialiasingMode = this._data.properties.antialiasingMode,
            this._isAntialisingEnabledOnMobile = this._data.properties.antialisingEnabledOnMobile,
            this._renderer = new i.RuntimeGameRenderer(this,this._options.forceFullscreen || !1),
            this._watermark = new i.watermark.RuntimeWatermark(this,e.properties.authorUsernames,this._data.properties.watermark),
            this._sceneStack = new i.SceneStack(this),
            this._inputManager = new i.InputManager,
            this._injectExternalLayout = this._options.injectExternalLayout || "",
            this._debuggerClient = i.DebuggerClient ? new i.DebuggerClient(this) : null,
            this._isPreview = this._options.isPreview || !1,
            this._sessionId = null,
            this._playerId = null,
            this._embeddedResourcesMappings = new Map;
            for (const a of this._data.resources.resources)
                if (a.metadata)
                    try {
                        const n = JSON.parse(a.metadata);
                        n?.embeddedResourcesMapping && this._embeddedResourcesMappings.set(a.name, n.embeddedResourcesMapping)
                    } catch {
                        d.error("Some metadata of resources can not be successfully parsed.")
                    }
            if (this._eventsBasedObjectDatas = new Map,
            this._data.eventsFunctionsExtensions)
                for (const a of this._data.eventsFunctionsExtensions)
                    for (const n of a.eventsBasedObjects)
                        this._eventsBasedObjectDatas.set(a.name + "::" + n.name, n);
            this.isUsingGDevelopDevelopmentEnvironment() && d.info("This game will run on the development version of GDevelop APIs.")
        }
        setProjectData(e) {
            this._data = e,
            this._imageManager.setResources(this._data.resources.resources),
            this._soundManager.setResources(this._data.resources.resources),
            this._fontManager.setResources(this._data.resources.resources),
            this._jsonManager.setResources(this._data.resources.resources),
            this._bitmapFontManager.setResources(this._data.resources.resources),
            this._model3DManager.setResources(this._data.resources.resources)
        }
        getAdditionalOptions() {
            return this._options
        }
        getRenderer() {
            return this._renderer
        }
        getVariables() {
            return this._variables
        }
        getSoundManager() {
            return this._soundManager
        }
        getImageManager() {
            return this._imageManager
        }
        getFontManager() {
            return this._fontManager
        }
        getBitmapFontManager() {
            return this._bitmapFontManager
        }
        getInputManager() {
            return this._inputManager
        }
        getJsonManager() {
            return this._jsonManager
        }
        getModel3DManager() {
            return this._model3DManager
        }
        getEffectsManager() {
            return this._effectsManager
        }
        getGameData() {
            return this._data
        }
        getEventsBasedObjectData(e) {
            const t = this._eventsBasedObjectDatas.get(e);
            return t || (d.error('The game has no events-based object of the type "' + e + '"'),
            null)
        }
        getSceneData(e) {
            let t = null;
            for (let s = 0, a = this._data.layouts.length; s < a; ++s) {
                const n = this._data.layouts[s];
                if (e === void 0 || n.name === e) {
                    t = n;
                    break
                }
            }
            return t === null && d.error('The game has no scene called "' + e + '"'),
            t
        }
        hasScene(e) {
            let t = !1;
            for (let s = 0, a = this._data.layouts.length; s < a; ++s) {
                const n = this._data.layouts[s];
                if (e === void 0 || n.name == e) {
                    t = !0;
                    break
                }
            }
            return t
        }
        getExternalLayoutData(e) {
            let t = null;
            for (let s = 0, a = this._data.externalLayouts.length; s < a; ++s) {
                const n = this._data.externalLayouts[s];
                if (n.name === e) {
                    t = n;
                    break
                }
            }
            return t
        }
        getInitialObjectsData() {
            return this._data.objects || []
        }
        getOriginalWidth() {
            return this._originalWidth
        }
        getOriginalHeight() {
            return this._originalHeight
        }
        getGameResolutionWidth() {
            return this._gameResolutionWidth
        }
        getGameResolutionHeight() {
            return this._gameResolutionHeight
        }
        setGameResolutionSize(e, t) {
            if (this._gameResolutionWidth = e,
            this._gameResolutionHeight = t,
            this._adaptGameResolutionAtRuntime && i.RuntimeGameRenderer && i.RuntimeGameRenderer.getWindowInnerWidth && i.RuntimeGameRenderer.getWindowInnerHeight) {
                const s = i.RuntimeGameRenderer.getWindowInnerWidth()
                  , a = i.RuntimeGameRenderer.getWindowInnerHeight();
                this._resizeMode === "adaptWidth" ? this._gameResolutionWidth = this._gameResolutionHeight * s / a : this._resizeMode === "adaptHeight" && (this._gameResolutionHeight = this._gameResolutionWidth * a / s)
            }
            this._renderer.updateRendererSize(),
            this._notifyScenesForGameResolutionResize = !0
        }
        setGameResolutionResizeMode(e) {
            this._resizeMode = e,
            this._forceGameResolutionUpdate()
        }
        getGameResolutionResizeMode() {
            return this._resizeMode
        }
        setAdaptGameResolutionAtRuntime(e) {
            this._adaptGameResolutionAtRuntime = e,
            this._forceGameResolutionUpdate()
        }
        getAdaptGameResolutionAtRuntime() {
            return this._adaptGameResolutionAtRuntime
        }
        getMinimalFramerate() {
            return this._minFPS
        }
        getScaleMode() {
            return this._scaleMode
        }
        getPixelsRounding() {
            return this._pixelsRounding
        }
        getAntialiasingMode() {
            return this._antialiasingMode
        }
        isAntialisingEnabledOnMobile() {
            return this._isAntialisingEnabledOnMobile
        }
        pause(e) {
            this._paused !== e && (this._paused = e,
            this._debuggerClient && (this._paused ? this._debuggerClient.sendGamePaused() : this._debuggerClient.sendGameResumed()))
        }
        hasJustResumed() {
            return this._hasJustResumed
        }
        loadAllAssets(e, t) {
            this.loadAllAssetsAsync(t).then(e)
        }
        startGameLoop() {
            try {
                if (!this.hasScene()) {
                    d.error("The game has no scene.");
                    return
                }
                this._forceGameResolutionUpdate();
                const e = this._data.firstLayout;
                this._sceneStack.push(this.hasScene(e) ? e : this.getSceneData().name, this._injectExternalLayout),
                this._watermark.displayAtStartup(),
                this._setupGameVisibilityEvents();
                const t = this;
                let s = 0;
                this._hasJustResumed = !1,
                this._renderer.startGameLoop(function(a) {
                    if (t._paused || (s += a,
                    t._maxFPS > 0 && 1e3 / s > t._maxFPS + 7))
                        return !0;
                    const n = s;
                    return s = 0,
                    t._notifyScenesForGameResolutionResize && (t._sceneStack.onGameResolutionResized(),
                    t._notifyScenesForGameResolutionResize = !1),
                    t._sceneStack.step(n) ? (t.getInputManager().onFrameEnded(),
                    t._hasJustResumed = !1,
                    !0) : !1
                }),
                setTimeout(()=>{
                    this._setupSessionMetrics()
                }
                , 1e4)
            } catch (e) {
                throw d.error("Internal crash: " + e),
                e
            }
        }
        enableMetrics(e) {
            this._disableMetrics = !e,
            e && this._setupSessionMetrics()
        }
        _setupGameVisibilityEvents() {
            typeof navigator != "undefined" && typeof document != "undefined" && (document.addEventListener("visibilitychange", ()=>{
                document.visibilityState === "visible" && (this._hasJustResumed = !0)
            }
            ),
            window.addEventListener("resume", ()=>{
                this._hasJustResumed = !0
            }
            , !1))
        }
        _setupSessionMetrics() {
            if (this._sessionMetricsInitialized || this._disableMetrics || this.isPreview() || typeof fetch == "undefined" || !this._data.properties.projectUuid)
                return;
            const e = "https://api.gdevelop-app.com/analytics";
            this._playerId = this._makePlayerUuid();
            let t = 0
              , s = 0
              , a = Date.now();
            fetch(e + "/session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    gameId: this._data.properties.projectUuid,
                    playerId: this._playerId,
                    game: {
                        name: this._data.properties.name || "",
                        packageName: this._data.properties.packageName || "",
                        version: this._data.properties.version || "",
                        location: window.location.href
                    },
                    platform: {
                        isCordova: !!window.cordova,
                        devicePlatform: typeof device != "undefined" && device.platform || "",
                        navigatorPlatform: typeof navigator != "undefined" ? navigator.platform : "",
                        hasTouch: typeof navigator != "undefined" ? !!navigator.maxTouchPoints && navigator.maxTouchPoints > 2 : !1
                    }
                })
            }).then(r=>{
                if (!r.ok)
                    throw console.error("Error while creating the session", r),
                    new Error("Error while creating the session");
                return r
            }
            ).then(r=>r.text()).then(r=>{
                this._sessionId = r
            }
            ).catch(()=>{}
            );
            const n = ()=>{
                if (!this._sessionId)
                    return;
                const r = Date.now();
                if (s += r - a,
                a = r,
                s < 5 * 1e3)
                    return;
                const u = Math.floor(s / 1e3) * 1e3;
                t += u,
                s -= u,
                navigator.sendBeacon(e + "/session-hit", JSON.stringify({
                    gameId: this._data.properties.projectUuid,
                    playerId: this._playerId,
                    sessionId: this._sessionId,
                    duration: Math.floor(t / 1e3)
                }))
            }
            ;
            if (typeof navigator != "undefined" && typeof document != "undefined") {
                document.addEventListener("visibilitychange", ()=>{
                    document.visibilityState === "visible" ? a = Date.now() : n()
                }
                ),
                window.addEventListener("pagehide", n, !1),
                window.addEventListener("pause", n, !1),
                window.addEventListener("resume", ()=>{
                    a = Date.now()
                }
                , !1);
                const r = typeof safari == "object" && safari.pushNotification
                  , u = /electron/i.test(navigator.userAgent);
                (r || u) && window.addEventListener("beforeunload", ()=>{
                    n()
                }
                )
            }
            this._sessionMetricsInitialized = !0,
            this._sessionId = this._sessionId
        }
        _makePlayerUuid() {
            try {
                const e = "GDJS-internal-player-uuid"
                  , t = localStorage.getItem(e);
                if (t)
                    return t;
                const s = i.makeUuid();
                return localStorage.setItem(e, s),
                s
            } catch {
                return i.makeUuid()
            }
        }
        getSessionId() {
            return this._sessionId
        }
        getPlayerId() {
            return this._playerId
        }
        onWindowInnerSizeChanged() {
            this._forceGameResolutionUpdate()
        }
        _forceGameResolutionUpdate() {
            this.setGameResolutionSize(this._gameResolutionWidth, this._gameResolutionHeight)
        }
        startCurrentSceneProfiler(e) {
            const t = this._sceneStack.getCurrentScene();
            return t ? (t.startProfiler(e),
            !0) : !1
        }
        stopCurrentSceneProfiler() {
            const e = this._sceneStack.getCurrentScene();
            !e || e.stopProfiler()
        }
        wasFirstSceneLoaded() {
            return this._sceneStack.wasFirstSceneLoaded()
        }
        getSceneStack() {
            return this._sceneStack
        }
        isPreview() {
            return this._isPreview
        }
        isUsingGDevelopDevelopmentEnvironment() {
            return this._options.environment === "dev"
        }
        getExtensionProperty(e, t) {
            for (let s of this._data.properties.extensionProperties)
                if (s.extension === e && s.property === t)
                    return s.value;
            return null
        }
        resolveEmbeddedResource(e, t) {
            const s = this._embeddedResourcesMappings.get(e);
            return s && s[t] ? s[t] : t
        }
    }
    i.RuntimeGame = _
}
)(gdjs || (gdjs = {}));
//# sourceMappingURL=runtimegame.js.map
