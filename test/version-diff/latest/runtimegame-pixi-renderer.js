var gdjs;
(function(l) {
    const d = new l.Logger("PIXI game renderer")
      , m = [37, 38, 39, 40];
    class R {
        constructor(n, e) {
            this._isFullPage = !0;
            this._isFullscreen = !1;
            this._pixiRenderer = null;
            this._threeRenderer = null;
            this._gameCanvas = null;
            this._domElementsContainer = null;
            this._canvasWidth = 0;
            this._canvasHeight = 0;
            this._keepRatio = !0;
            this._nextFrameId = 0;
            this.getElectronRemote = ()=>{
                if (typeof require == "function") {
                    const n = this._game.getAdditionalOptions()
                      , e = n && n.electronRemoteRequirePath ? n.electronRemoteRequirePath : "@electron/remote";
                    try {
                        return require(e)
                    } catch (i) {
                        console.error(`Could not load @electron/remote from "${e}". Error is:`, i)
                    }
                }
                return null
            }
            ;
            this._game = n,
            this._forceFullscreen = e,
            this._marginLeft = this._marginTop = this._marginRight = this._marginBottom = 0,
            this._setupOrientation()
        }
        createStandardCanvas(n) {
            let e;
            typeof THREE != "undefined" ? (e = document.createElement("canvas"),
            this._threeRenderer = new THREE.WebGLRenderer({
                canvas: e,
                antialias: this._game.getAntialiasingMode() !== "none" && (this._game.isAntialisingEnabledOnMobile() || !l.evtTools.common.isMobile())
            }),
            this._threeRenderer.autoClear = !1,
            this._threeRenderer.setSize(this._game.getGameResolutionWidth(), this._game.getGameResolutionHeight()),
            this._pixiRenderer = new PIXI.Renderer({
                width: this._game.getGameResolutionWidth(),
                height: this._game.getGameResolutionHeight(),
                view: e,
                context: this._threeRenderer.getContext(),
                clearBeforeRender: !1,
                preserveDrawingBuffer: !0,
                antialias: !1,
                backgroundAlpha: 0
            }),
            e = this._threeRenderer.domElement) : (this._pixiRenderer = PIXI.autoDetectRenderer({
                width: this._game.getGameResolutionWidth(),
                height: this._game.getGameResolutionHeight(),
                preserveDrawingBuffer: !0,
                antialias: !1
            }),
            e = this._pixiRenderer.view),
            n.appendChild(e),
            this._gameCanvas = e,
            e.style.position = "absolute",
            e.tabIndex = 1,
            e.style.userSelect = "none",
            e.style.outline = "none";
            const i = document.createElement("div");
            i.style.position = "absolute",
            i.style.overflow = "hidden",
            i.style.outline = "none",
            i.style.pointerEvents = "none",
            i.addEventListener("scroll", o=>{
                i.scrollLeft = 0,
                i.scrollTop = 0,
                o.preventDefault()
            }
            ),
            e.addEventListener("pointerdown", ()=>{
                e.focus()
            }
            ),
            i.style["-webkit-user-select"] = "none",
            n.appendChild(i),
            this._domElementsContainer = i,
            this._resizeCanvas(),
            this._game.getScaleMode() === "nearest" && (e.style["image-rendering"] = "-moz-crisp-edges",
            e.style["image-rendering"] = "-webkit-optimize-contrast",
            e.style["image-rendering"] = "-webkit-crisp-edges",
            e.style["image-rendering"] = "pixelated"),
            this._game.getPixelsRounding() && (PIXI.settings.ROUND_PIXELS = !0),
            window.addEventListener("resize", ()=>{
                this._game.onWindowInnerSizeChanged(),
                this._resizeCanvas()
            }
            ),
            e.focus()
        }
        static getWindowInnerWidth() {
            return typeof window != "undefined" ? window.innerWidth : 800
        }
        static getWindowInnerHeight() {
            return typeof window != "undefined" ? window.innerHeight : 800
        }
        updateRendererSize() {
            this._resizeCanvas()
        }
        _setupOrientation() {
            if (typeof window == "undefined" || !window.screen || !window.screen.orientation)
                return;
            const n = this._game.getGameData().properties.orientation;
            try {
                if (n === "default") {
                    const e = window.screen.orientation.unlock();
                    e && e.catch(()=>{}
                    )
                } else
                    window.screen.orientation.lock(n).catch(()=>{}
                    )
            } catch (e) {
                d.error("Unexpected error while setting up orientation: ", e)
            }
        }
        _resizeCanvas() {
            if (!this._pixiRenderer || !this._domElementsContainer)
                return;
            (this._pixiRenderer.width !== this._game.getGameResolutionWidth() || this._pixiRenderer.height !== this._game.getGameResolutionHeight()) && (this._pixiRenderer.resize(this._game.getGameResolutionWidth(), this._game.getGameResolutionHeight()),
            this._threeRenderer && this._threeRenderer.setSize(this._game.getGameResolutionWidth(), this._game.getGameResolutionHeight()));
            const n = this._forceFullscreen || this._isFullPage || this._isFullscreen;
            let e = this._game.getGameResolutionWidth()
              , i = this._game.getGameResolutionHeight()
              , o = window.innerWidth - this._marginLeft - this._marginRight
              , r = window.innerHeight - this._marginTop - this._marginBottom;
            if (o < 0 && (o = 0),
            r < 0 && (r = 0),
            n && !this._keepRatio)
                e = o,
                i = r;
            else if (n && this._keepRatio || e > o || i > r) {
                let u = o / e;
                i * u > r && (u = r / i),
                e *= u,
                i *= u
            }
            this._gameCanvas && (this._gameCanvas.style.top = this._marginTop + (r - i) / 2 + "px",
            this._gameCanvas.style.left = this._marginLeft + (o - e) / 2 + "px",
            this._gameCanvas.style.width = e + "px",
            this._gameCanvas.style.height = i + "px"),
            this._domElementsContainer.style.top = this._marginTop + (r - i) / 2 + "px",
            this._domElementsContainer.style.left = this._marginLeft + (o - e) / 2 + "px",
            this._domElementsContainer.style.width = e + "px",
            this._domElementsContainer.style.height = i + "px",
            this._canvasWidth = e,
            this._canvasHeight = i
        }
        keepAspectRatio(n) {
            this._keepRatio !== n && (this._keepRatio = n,
            this._resizeCanvas())
        }
        setMargins(n, e, i, o) {
            this._marginTop === n && this._marginRight === e && this._marginBottom === i && this._marginLeft === o || (this._marginTop = n,
            this._marginRight = e,
            this._marginBottom = i,
            this._marginLeft = o,
            this._resizeCanvas())
        }
        setWindowSize(n, e) {
            const i = this.getElectronRemote();
            if (i) {
                const o = i.getCurrentWindow();
                o && o.setContentSize(n, e)
            } else
                d.warn("Window size can't be changed on this platform.")
        }
        centerWindow() {
            const n = this.getElectronRemote();
            if (n) {
                const e = n.getCurrentWindow();
                e && e.center()
            }
        }
        setFullScreen(n) {
            if (!this._forceFullscreen && this._isFullscreen !== n) {
                this._isFullscreen = !!n;
                const e = this.getElectronRemote();
                if (e) {
                    const i = e.getCurrentWindow();
                    i && i.setFullScreen(this._isFullscreen)
                } else
                    this._isFullscreen ? document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullScreen && document.documentElement.webkitRequestFullScreen() : document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen();
                this._resizeCanvas()
            }
        }
        isFullScreen() {
            const n = this.getElectronRemote();
            return n ? n.getCurrentWindow().isFullScreen() : this._isFullscreen || window.screen.height === window.innerHeight
        }
        convertCanvasToDomElementContainerCoords(n, e) {
            const i = e || [0, 0];
            return i[0] = n[0] * this._canvasWidth / this._game.getGameResolutionWidth(),
            i[1] = n[1] * this._canvasHeight / this._game.getGameResolutionHeight(),
            i
        }
        getCanvasToDomElementContainerHeightScale() {
            return (this._canvasHeight || 1) / this._game.getGameResolutionHeight()
        }
        bindStandardEvents(n, e, i) {
            const o = this._gameCanvas;
            if (!o)
                return;
            const r = t=>{
                const s = [t.pageX - o.offsetLeft, t.pageY - o.offsetTop];
                return s[0] *= this._game.getGameResolutionWidth() / (this._canvasWidth || 1),
                s[1] *= this._game.getGameResolutionHeight() / (this._canvasHeight || 1),
                s
            }
              , u = t=>{
                const s = t.pageX - o.offsetLeft
                  , a = t.pageY - o.offsetTop;
                return 0 <= s && s < (this._canvasWidth || 1) && 0 <= a && a < (this._canvasHeight || 1)
            }
            ;
            (function() {
                isNaN(o.offsetLeft) && (o.offsetLeft = 0,
                o.offsetTop = 0),
                isNaN(i.body.scrollLeft) && (i.body.scrollLeft = 0,
                i.body.scrollTop = 0),
                (i.documentElement === void 0 || i.documentElement === null) && (i.documentElement = {}),
                isNaN(i.documentElement.scrollLeft) && (i.documentElement.scrollLeft = 0,
                i.documentElement.scrollTop = 0),
                isNaN(o.offsetLeft) && (o.offsetLeft = 0,
                o.offsetTop = 0)
            }
            )();
            const f = ()=>!(i.activeElement === o || i.activeElement === i.body || i.activeElement === null)
              , c = t=>!(t.target === o || t.target === i.body);
            i.onkeydown = function(t) {
                f() || (m.includes(t.keyCode) && t.preventDefault(),
                n.onKeyPressed(t.keyCode, t.location))
            }
            ,
            i.onkeyup = function(t) {
                f() || (m.includes(t.keyCode) && t.preventDefault(),
                n.onKeyReleased(t.keyCode, t.location))
            }
            ;
            function g(t) {
                switch (t) {
                case 1:
                    return l.InputManager.MOUSE_MIDDLE_BUTTON;
                case 2:
                    return l.InputManager.MOUSE_RIGHT_BUTTON
                }
                return t
            }
            o.onmousemove = function(t) {
                const s = r(t);
                n.onMouseMove(s[0], s[1])
            }
            ,
            o.onmousedown = function(t) {
                return n.onMouseButtonPressed(g(t.button)),
                e.focus !== void 0 && e.focus(),
                !1
            }
            ,
            o.onmouseup = function(t) {
                return n.onMouseButtonReleased(g(t.button)),
                !1
            }
            ,
            o.onmouseleave = function(t) {
                n.onMouseLeave()
            }
            ,
            o.onmouseenter = function(t) {
                n.onMouseEnter();
                const s = [l.InputManager.MOUSE_LEFT_BUTTON, l.InputManager.MOUSE_RIGHT_BUTTON, l.InputManager.MOUSE_MIDDLE_BUTTON, l.InputManager.MOUSE_BACK_BUTTON, l.InputManager.MOUSE_FORWARD_BUTTON];
                for (let a = 0, v = s.length; a < v; ++a) {
                    const h = s[a]
                      , _ = (t.buttons & 1 << a) != 0
                      , p = n.isMouseButtonPressed(h);
                    _ && !p ? n.onMouseButtonPressed(h) : !_ && p && n.onMouseButtonReleased(h)
                }
            }
            ,
            e.addEventListener("click", function(t) {
                return e.focus !== void 0 && e.focus(),
                !1
            }, !1),
            o.oncontextmenu = function(t) {
                return t.preventDefault(),
                t.stopPropagation(),
                !1
            }
            ,
            o.onwheel = function(t) {
                n.onMouseWheel(-t.deltaY)
            }
            ,
            e.addEventListener("touchmove", function(t) {
                if (!c(t) && (t.preventDefault(),
                t.changedTouches))
                    for (let s = 0; s < t.changedTouches.length; ++s) {
                        const a = r(t.changedTouches[s]);
                        n.onTouchMove(t.changedTouches[s].identifier, a[0], a[1]),
                        n.isSimulatingMouseWithTouch() && (u(t.changedTouches[s]) ? n.onMouseEnter() : n.onMouseLeave())
                    }
            }),
            e.addEventListener("touchstart", function(t) {
                if (!c(t)) {
                    if (t.preventDefault(),
                    t.changedTouches)
                        for (let s = 0; s < t.changedTouches.length; ++s) {
                            const a = r(t.changedTouches[s]);
                            n.onTouchStart(t.changedTouches[s].identifier, a[0], a[1])
                        }
                    return !1
                }
            }),
            e.addEventListener("touchend", function(t) {
                if (!c(t)) {
                    if (t.preventDefault(),
                    t.changedTouches)
                        for (let s = 0; s < t.changedTouches.length; ++s)
                            n.onTouchEnd(t.changedTouches[s].identifier);
                    return !1
                }
            }),
            e.addEventListener("touchcancel", function(t) {
                if (!c(t)) {
                    if (t.preventDefault(),
                    t.changedTouches)
                        for (let s = 0; s < t.changedTouches.length; ++s)
                            n.onTouchCancel(t.changedTouches[s].identifier);
                    return !1
                }
            })
        }
        setWindowTitle(n) {
            typeof document != "undefined" && (document.title = n)
        }
        getWindowTitle() {
            return typeof document != "undefined" ? document.title : ""
        }
        calculateInitialFPS() {
		  return new Promise(resolve => {
		    let frameCount = 0;
		    let startTime = performance.now();

		    function animate() {
		      // Your animation logic here

		      frameCount++;

		      // Check elapsed time and break after 1 second
		      const currentTime = performance.now();
		      if (currentTime - startTime >= 1000) {
		        const initialFPS = (frameCount / 1000) * 1000;
		        resolve(Math.floor(initialFPS));
		        return;
		      }

		      // Request the next animation frame
		      requestAnimationFrame(animate);
		    }

		    // Start the animation
		    animate();
		  });
		}

        startGameLoop(n) {

   //      	this.calculateInitialFPS().then(initialFPS => {
			//   console.log(`Initial FPS: ${initialFPS}`);
			//   initialFPS /= 10;
			//   initialFPS = Math.floor(initialFPS)*10;
			//   var perFrame=1000/initialFPS;
			//   setInterval(()=>{
			//   	n(perFrame);
			//   }, 1000/initialFPS);
			// });

            let e = 0;
            const i = o=>{
                this._nextFrameId = requestAnimationFrame(i);
                const r = e ? o - e : 0;
                e = o,
                n(r) || cancelAnimationFrame(this._nextFrameId)
            }
            ;
            requestAnimationFrame(i)

            setInterval(() =>{
              if (!isActive) {
                for (var i = 0; i < 30; i++) {
                  n(1000/30);
                }
              }
            }, 1000 / 30);

            let isActive = true;

            const handleVisibilityChange = () => {
              isActive = !document.hidden;
              if (!isActive) {
                console.log('window is on background')
                console.log('fallback to slow render')
              } else {
                console.log('window is on background')
                console.log('fallback to fast render')
              }
            }

            document.addEventListener('visibilitychange', handleVisibilityChange);
        }
        getPIXIRenderer() {
            return this._pixiRenderer
        }
        getThreeRenderer() {
            return this._threeRenderer
        }
        getDomElementContainer() {
            return this._domElementsContainer
        }
        openURL(n) {
            if (typeof window != "undefined") {
                const e = this.getElectron();
                if (e)
                    e.shell.openExternal(n);
                else {
                    const i = window.cordova ? "_system" : "_blank";
                    window.open(n, i)
                }
            }
        }
        stopGame() {
            const n = this.getElectronRemote();
            if (n) {
                const e = n.getCurrentWindow();
                e && e.close()
            } else
                typeof navigator != "undefined" && navigator.app && navigator.app.exitApp && navigator.app.exitApp()
        }
        getCanvas() {
            return this._gameCanvas
        }
        isWebGLSupported() {
            return !!this._pixiRenderer && this._pixiRenderer.type === PIXI.RENDERER_TYPE.WEBGL
        }
        getElectron() {
            return typeof require == "function" ? require("electron") : null
        }
        getGame() {
            return this._game
        }
    }
    l.RuntimeGamePixiRenderer = R,
    l.RuntimeGameRenderer = R
}
)(gdjs || (gdjs = {}));
//# sourceMappingURL=runtimegame-pixi-renderer.js.map
