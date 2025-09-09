// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"93v64":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "f3e508fdb828852a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"lhpGb":[function(require,module,exports,__globalThis) {
// 【新增】在JS入口导入CSS文件，让Parcel来处理它
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _mainCss = require("../css/main.css");
// =============================================================================
// --- 模块导入 (Module Imports) ---
// =============================================================================
// 核心库
var _jquery = require("jquery");
var _jqueryDefault = parcelHelpers.interopDefault(_jquery);
// 【新】导入我们重构后的API模块
var _apiJs = require("./shared/api.js");
// 共享模块
var _uiJs = require("./shared/ui.js");
// 页面模块初始化函数
var _page1HomeJs = require("./modules/page1_home.js");
var _page2LibraryJs = require("./modules/page2_library.js");
var _page3ScriptsJs = require("./modules/page3_scripts.js");
var _page4EffectsJs = require("./modules/page4_effects.js");
var _page6ExpressionsJs = require("./modules/page6_expressions.js");
var _page7LearningJs = require("./modules/page7_learning.js");
// =============================================================================
// --- 全局状态变量 (Global State) ---
// =============================================================================
let allScannedLayers = [];
let navigationHistory = [];
// 核心接口实例，方便全局调用
const csInterface = new CSInterface();
// =============================================================================
// --- 主程序入口 (Main Application Entry Point) ---
// =============================================================================
document.addEventListener('DOMContentLoaded', initializeExtension);
/**
 * @description 扩展的总初始化函数
 */ async function initializeExtension() {
    // --- 【新】核心接口和后端脚本初始化 ---
    // 监听来自 JSX 的错误事件
    csInterface.addEventListener("com.niuma.scripterror", function(event) {
        const errorMessage = event.data;
        (0, _uiJs.showToast)(`\u{811A}\u{672C}\u{6267}\u{884C}\u{51FA}\u{9519}: ${errorMessage}`, 'error');
        // 可以在这里添加更多错误处理逻辑，比如自动切换到脚本页面
        const aiPromptInput = document.getElementById('aiPromptInput');
        if (aiPromptInput) {
            aiPromptInput.value = `\u{6211}\u{7684}\u{811A}\u{672C}\u{8FD0}\u{884C}\u{51FA}\u{9519}\u{4E86}\u{FF0C}\u{8BF7}\u{5E2E}\u{6211}\u{770B}\u{770B}\u{662F}\u{4EC0}\u{4E48}\u{95EE}\u{9898}\u{FF0C}\u{5E76}\u{4FEE}\u{590D}\u{5B83}\u{3002}

\u{9519}\u{8BEF}\u{4FE1}\u{606F}\u{FF1A}
${errorMessage}`;
            aiPromptInput.focus();
            document.querySelector('a[href="#page3"]').click();
        }
    });
    // 【新】通过一次API调用异步获取所有初始化数据
    try {
        const initialData = await _apiJs.getInitialPanelData();
        console.log("\u6210\u529F\u4ECEAE\u83B7\u53D6\u5230\u521D\u59CB\u5316\u6570\u636E:", initialData);
    // 你可以在这里使用 initialData 来更新UI，比如显示欢迎信息或AE版本号
    // document.getElementById('welcome-message').textContent = `${initialData.userInfo} (AE v${initialData.version})`;
    } catch (error) {
        console.error("\u52A0\u8F7DAE\u521D\u59CB\u5316\u6570\u636E\u5931\u8D25:", error);
        (0, _uiJs.showToast)("\u65E0\u6CD5\u8FDE\u63A5\u5230AE\u540E\u7AEF\u811A\u672C\uFF0C\u8BF7\u68C0\u67E5\u3002", "error");
    }
    // --- 全局 DOM 元素获取 ---
    const allNavLinks = document.querySelectorAll('.nav-link');
    const allPages = document.querySelectorAll('.page');
    const sidebarToggleBtn = document.getElementById('sidebar-toggle');
    // 图层扫描器相关 DOM
    const layerScannerBtn = document.getElementById('layerScannerBtn');
    const layerScannerFlyout = document.getElementById('layerScannerFlyout');
    const scanTextLayersBtn = document.getElementById('scanTextLayersBtn');
    const scanImageLayersBtn = document.getElementById('scanImageLayersBtn');
    const layerListPanel = document.getElementById('layerListPanel');
    const closeLayerListBtn = document.getElementById('closeLayerListBtn');
    const layerListTitle = document.getElementById('layerListTitle');
    const layerListContainer = document.getElementById('layerListContainer');
    const backToPrevCompBtn = document.getElementById('backToPrevCompBtn');
    // =============================================================================
    // --- 全局UI逻辑 (Global UI Logic) ---
    // =============================================================================
    // --- 1. 页面导航 ---
    allNavLinks.forEach((link)=>{
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // 切换页面时，关闭可能打开的全局浮窗
            hideLayerListPanel();
            hideLayerScannerFlyout();
            allNavLinks.forEach((item)=>item.classList.remove('nav-item-active'));
            this.classList.add('nav-item-active');
            allPages.forEach((page)=>page.classList.add('hidden'));
            const targetPage = document.querySelector(this.getAttribute('href'));
            if (targetPage) targetPage.classList.remove('hidden');
        });
    });
    // --- 2. 侧边栏折叠 ---
    sidebarToggleBtn.addEventListener('click', ()=>{
        document.body.classList.toggle('sidebar-collapsed');
    });
    // --- 3. 图层扫描器 (快速选择按钮) ---
    function hideLayerScannerFlyout() {
        if (!layerScannerFlyout.classList.contains('hidden')) {
            layerScannerFlyout.classList.add('opacity-0', '-translate-x-4', 'pointer-events-none');
            setTimeout(()=>{
                layerScannerFlyout.classList.add('hidden');
            }, 300);
        }
    }
    function toggleLayerScanner() {
        if (layerScannerFlyout.classList.contains('hidden')) {
            layerScannerFlyout.classList.remove('hidden', 'pointer-events-none');
            setTimeout(()=>{
                layerScannerFlyout.classList.remove('opacity-0', '-translate-x-4');
            }, 10);
        } else {
            hideLayerScannerFlyout();
            hideLayerListPanel();
        }
    }
    function hideLayerListPanel() {
        if (layerListPanel.classList.contains('hidden')) return;
        layerListPanel.classList.add('opacity-0', '-translate-x-4', 'pointer-events-none');
        setTimeout(()=>{
            layerListPanel.classList.add('hidden');
        }, 300);
        document.querySelectorAll('.flyout-btn').forEach((b)=>b.classList.remove('flyout-btn-active'));
    }
    // 【旧代码保留，但建议未来也改造成使用api.js的模式】
    function showLayerListPanel(type) {
        layerListPanel.classList.remove('hidden', 'pointer-events-none');
        setTimeout(()=>{
            layerListPanel.classList.remove('opacity-0', '-translate-x-4');
        }, 10);
        (0, _uiJs.showToast)("\u6B63\u5728\u626B\u63CF\u56FE\u5C42...", 'info');
        csInterface.evalScript('getLayersInContext()', (result)=>{
            try {
                const data = JSON.parse(result);
                if (data.error) {
                    (0, _uiJs.showToast)(data.error, 'error');
                    hideLayerListPanel();
                    return;
                }
                allScannedLayers = data.layers || [];
                navigationHistory = [
                    data.originCompId
                ];
                backToPrevCompBtn.classList.add('hidden');
                layerListTitle.textContent = `${data.compName} - ${type === 'text' ? "\u6587\u672C" : "\u56FE\u7247"}\u{56FE}\u{5C42}`;
                renderLayerList(type);
            } catch (e) {
                (0, _uiJs.showToast)("\u89E3\u6790\u56FE\u5C42\u6570\u636E\u5931\u8D25\u3002", 'error');
                console.error(e, result);
                hideLayerListPanel();
            }
        });
    }
    function renderLayerList(type) {
        layerListContainer.innerHTML = '';
        const filteredLayers = allScannedLayers.filter((l)=>l.type === type);
        if (filteredLayers.length === 0) {
            layerListContainer.innerHTML = `<div class="text-gray-500 text-center p-8">\u{5728}\u{6307}\u{5B9A}\u{8303}\u{56F4}\u{5185}\u{672A}\u{627E}\u{5230}${type === 'text' ? "\u6587\u672C" : "\u56FE\u7247"}\u{56FE}\u{5C42}\u{3002}</div>`;
            return;
        }
        filteredLayers.forEach((layer)=>{
            const item = document.createElement('div');
            item.className = 'layer-list-item';
            item.dataset.id = layer.id;
            item.dataset.compId = layer.compId;
            item.dataset.type = layer.type;
            let contentHTML = `<div class="font-semibold text-white truncate pointer-events-none">${layer.name}</div>
                               <div class="text-xs text-gray-400 mt-1 pointer-events-none">\u{4F4D}\u{4E8E}: ${layer.compName}</div>`;
            if (type === 'text') {
                const escapedContent = (layer.content || "").replace(/"/g, '&quot;');
                contentHTML += `<div class="layer-text-content" title="${escapedContent}">${layer.content}</div>`;
            }
            item.innerHTML = contentHTML;
            layerListContainer.appendChild(item);
        });
    }
    function handleLayerItemDblClick(e) {
    // ... (这部分逻辑保持不变)
    }
    // 图层扫描器事件绑定
    layerScannerBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        toggleLayerScanner();
    });
    // ... (其他事件绑定保持不变)
    // =============================================================================
    // --- 初始化所有页面模块 (Initialize All Page Modules) ---
    // =============================================================================
    // 【新】现在页面模块不再需要手动传入csInterface，
    // 因为它们可以直接导入和使用api.js模块，代码更解耦。
    (0, _page1HomeJs.initializePage1)();
    (0, _page2LibraryJs.initializePage2)();
    (0, _page3ScriptsJs.initializePage3)();
    (0, _page4EffectsJs.initializePage4)();
    // Page 5 is empty, no initializer needed.
    (0, _page6ExpressionsJs.initializePage6)();
    (0, _page7LearningJs.initializePage7)();
    console.log("\u9762\u677F\u6240\u6709\u6A21\u5757\u521D\u59CB\u5316\u5B8C\u6210\u3002");
}

},{"../css/main.css":"7E1TK","jquery":"dlwdd","./shared/api.js":"gPB96","./shared/ui.js":"iqy1d","./modules/page1_home.js":"8h0VU","./modules/page2_library.js":"5kC60","./modules/page3_scripts.js":"5ofkH","./modules/page4_effects.js":"lBUUA","./modules/page6_expressions.js":"24vK1","./modules/page7_learning.js":"7Hxt1","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7E1TK":[function() {},{}],"dlwdd":[function(require,module,exports,__globalThis) {
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */ (function(global, factory) {
    "use strict";
    if (typeof module.exports === "object") // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket trac-14549 for more info.
    module.exports = global.document ? factory(global, true) : function(w) {
        if (!w.document) throw new Error("jQuery requires a window with a document");
        return factory(w);
    };
    else factory(global);
// Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : this, function(window1, noGlobal) {
    // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
    // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
    // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
    // enough that all such attempts are guarded in a try block.
    "use strict";
    var arr = [];
    var getProto = Object.getPrototypeOf;
    var slice = arr.slice;
    var flat = arr.flat ? function(array) {
        return arr.flat.call(array);
    } : function(array) {
        return arr.concat.apply([], array);
    };
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var fnToString = hasOwn.toString;
    var ObjectFunctionString = fnToString.call(Object);
    var support = {};
    var isFunction = function isFunction(obj) {
        // Support: Chrome <=57, Firefox <=52
        // In some browsers, typeof returns "function" for HTML <object> elements
        // (i.e., `typeof document.createElement( "object" ) === "function"`).
        // We don't want to classify *any* DOM node as a function.
        // Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
        // Plus for old WebKit, typeof returns "function" for HTML collections
        // (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
        return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
    };
    var isWindow = function isWindow(obj) {
        return obj != null && obj === obj.window;
    };
    var document = window1.document;
    var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
    };
    function DOMEval(code, node, doc) {
        doc = doc || document;
        var i, val, script = doc.createElement("script");
        script.text = code;
        if (node) for(i in preservedScriptAttributes){
            // Support: Firefox 64+, Edge 18+
            // Some browsers don't support the "nonce" property on scripts.
            // On the other hand, just using `getAttribute` is not enough as
            // the `nonce` attribute is reset to an empty string whenever it
            // becomes browsing-context connected.
            // See https://github.com/whatwg/html/issues/2369
            // See https://html.spec.whatwg.org/#nonce-attributes
            // The `node.getAttribute` check was added for the sake of
            // `jQuery.globalEval` so that it can fake a nonce-containing node
            // via an object.
            val = node[i] || node.getAttribute && node.getAttribute(i);
            if (val) script.setAttribute(i, val);
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
    }
    function toType(obj) {
        if (obj == null) return obj + "";
        // Support: Android <=2.3 only (functionish RegExp)
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
    }
    /* global Symbol */ // Defining this global in .eslintrc.json would create a danger of using the global
    // unguarded in another place, it seems safer to define global only for this module
    var version = "3.7.1", rhtmlSuffix = /HTML$/i, // Define a local copy of jQuery
    jQuery = function(selector, context) {
        // The jQuery object is actually just the init constructor 'enhanced'
        // Need init if jQuery is called (just allow error to be thrown if not included)
        return new jQuery.fn.init(selector, context);
    };
    jQuery.fn = jQuery.prototype = {
        // The current version of jQuery being used
        jquery: version,
        constructor: jQuery,
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
            return slice.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(num) {
            // Return all the elements in a clean array
            if (num == null) return slice.call(this);
            // Return just the one element from the set
            return num < 0 ? this[num + this.length] : this[num];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(elems) {
            // Build a new jQuery matched element set
            var ret = jQuery.merge(this.constructor(), elems);
            // Add the old object onto the stack (as a reference)
            ret.prevObject = this;
            // Return the newly-formed element set
            return ret;
        },
        // Execute a callback for every element in the matched set.
        each: function(callback) {
            return jQuery.each(this, callback);
        },
        map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem);
            }));
        },
        slice: function() {
            return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        even: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
                return (i + 1) % 2;
            }));
        },
        odd: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
                return i % 2;
            }));
        },
        eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [
                this[j]
            ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: push,
        sort: arr.sort,
        splice: arr.splice
    };
    jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target;
            // Skip the boolean and the target
            target = arguments[i] || {};
            i++;
        }
        // Handle case when target is a string or something (possible in deep copy)
        if (typeof target !== "object" && !isFunction(target)) target = {};
        // Extend jQuery itself if only one argument is passed
        if (i === length) {
            target = this;
            i--;
        }
        for(; i < length; i++){
            // Only deal with non-null/undefined values
            if ((options = arguments[i]) != null) // Extend the base object
            for(name in options){
                copy = options[name];
                // Prevent Object.prototype pollution
                // Prevent never-ending loop
                if (name === "__proto__" || target === copy) continue;
                // Recurse if we're merging plain objects or arrays
                if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                    src = target[name];
                    // Ensure proper type for the source value
                    if (copyIsArray && !Array.isArray(src)) clone = [];
                    else if (!copyIsArray && !jQuery.isPlainObject(src)) clone = {};
                    else clone = src;
                    copyIsArray = false;
                    // Never move original objects, clone them
                    target[name] = jQuery.extend(deep, clone, copy);
                // Don't bring in undefined values
                } else if (copy !== undefined) target[name] = copy;
            }
        }
        // Return the modified object
        return target;
    };
    jQuery.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: true,
        error: function(msg) {
            throw new Error(msg);
        },
        noop: function() {},
        isPlainObject: function(obj) {
            var proto, Ctor;
            // Detect obvious negatives
            // Use toString instead of jQuery.type to catch host objects
            if (!obj || toString.call(obj) !== "[object Object]") return false;
            proto = getProto(obj);
            // Objects with no prototype (e.g., `Object.create( null )`) are plain
            if (!proto) return true;
            // Objects with prototype are plain iff they were constructed by a global Object function
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function(obj) {
            var name;
            for(name in obj)return false;
            return true;
        },
        // Evaluates a script in a provided context; falls back to the global one
        // if not specified.
        globalEval: function(code, options, doc) {
            DOMEval(code, {
                nonce: options && options.nonce
            }, doc);
        },
        each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) {
                length = obj.length;
                for(; i < length; i++){
                    if (callback.call(obj[i], i, obj[i]) === false) break;
                }
            } else for(i in obj){
                if (callback.call(obj[i], i, obj[i]) === false) break;
            }
            return obj;
        },
        // Retrieve the text value of an array of DOM nodes
        text: function(elem) {
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (!nodeType) // If no nodeType, this is expected to be an array
            while(node = elem[i++])// Do not traverse comment nodes
            ret += jQuery.text(node);
            if (nodeType === 1 || nodeType === 11) return elem.textContent;
            if (nodeType === 9) return elem.documentElement.textContent;
            if (nodeType === 3 || nodeType === 4) return elem.nodeValue;
            // Do not include comment or processing instruction nodes
            return ret;
        },
        // results is for internal usage only
        makeArray: function(arr, results) {
            var ret = results || [];
            if (arr != null) {
                if (isArrayLike(Object(arr))) jQuery.merge(ret, typeof arr === "string" ? [
                    arr
                ] : arr);
                else push.call(ret, arr);
            }
            return ret;
        },
        inArray: function(elem, arr, i) {
            return arr == null ? -1 : indexOf.call(arr, elem, i);
        },
        isXMLDoc: function(elem) {
            var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
            // Assume HTML when documentElement doesn't yet exist, such as inside
            // document fragments.
            return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
        },
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function(first, second) {
            var len = +second.length, j = 0, i = first.length;
            for(; j < len; j++)first[i++] = second[j];
            first.length = i;
            return first;
        },
        grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
            // Go through the array, only saving the items
            // that pass the validator function
            for(; i < length; i++){
                callbackInverse = !callback(elems[i], i);
                if (callbackInverse !== callbackExpect) matches.push(elems[i]);
            }
            return matches;
        },
        // arg is for internal usage only
        map: function(elems, callback, arg) {
            var length, value, i = 0, ret = [];
            // Go through the array, translating each of the items to their new values
            if (isArrayLike(elems)) {
                length = elems.length;
                for(; i < length; i++){
                    value = callback(elems[i], i, arg);
                    if (value != null) ret.push(value);
                }
            // Go through every key on the object,
            } else for(i in elems){
                value = callback(elems[i], i, arg);
                if (value != null) ret.push(value);
            }
            // Flatten any nested arrays
            return flat(ret);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: support
    });
    if (typeof Symbol === "function") jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
    // Populate the class2type map
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(_i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });
    function isArrayLike(obj) {
        // Support: real iOS 8.2 only (not reproducible in simulator)
        // `in` check used to prevent JIT error (gh-2145)
        // hasOwn isn't used here due to false negatives
        // regarding Nodelist length in IE
        var length = !!obj && "length" in obj && obj.length, type = toType(obj);
        if (isFunction(obj) || isWindow(obj)) return false;
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
    }
    function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    }
    var pop = arr.pop;
    var sort = arr.sort;
    var splice = arr.splice;
    var whitespace = "[\\x20\\t\\r\\n\\f]";
    var rtrimCSS = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g");
    // Note: an element does not contain itself
    jQuery.contains = function(a, b) {
        var bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
        // IE doesn't have `contains` on SVG.
        (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
    };
    // CSS string/identifier serialization
    // https://drafts.csswg.org/cssom/#common-serializing-idioms
    var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function fcssescape(ch, asCodePoint) {
        if (asCodePoint) {
            // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
            if (ch === "\0") return "\uFFFD";
            // Control characters and (dependent upon position) numbers get escaped as code points
            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        }
        // Other potentially-special ASCII characters get backslash-escaped
        return "\\" + ch;
    }
    jQuery.escapeSelector = function(sel) {
        return (sel + "").replace(rcssescape, fcssescape);
    };
    var preferredDoc = document, pushNative = push;
    (function() {
        var i, Expr, outermostContext, sortInput, hasDuplicate, push = pushNative, // Local document vars
        document, documentElement, documentIsHTML, rbuggyQSA, matches, // Instance-specific data
        expando = jQuery.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
            if (a === b) hasDuplicate = true;
            return 0;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", // Regular expressions
        // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
        identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", // Attribute selectors: https://www.w3.org/TR/selectors/#attribute-selectors
        attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
        "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
        // 1. quoted (capture 3; capture 4 or capture 5)
        "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
        "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
        ".*" + ")\\)|)", // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
        rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            ID: new RegExp("^#(" + identifier + ")"),
            CLASS: new RegExp("^\\.(" + identifier + ")"),
            TAG: new RegExp("^(" + identifier + "|[*])"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            // For use in libraries implementing .is()
            // We use this for POS matching in `select`
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, // Easily-parseable/retrievable ID or TAG or CLASS selectors
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, // CSS escapes
        // https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
        runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
            var high = "0x" + escape.slice(1) - 0x10000;
            if (nonHex) // Strip the backslash prefix from a non-hex escape sequence
            return nonHex;
            // Replace a hexadecimal escape sequence with the encoded Unicode code point
            // Support: IE <=11+
            // For values outside the Basic Multilingual Plane (BMP), manually construct a
            // surrogate pair
            return high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
        }, // Used for iframes; see `setDocument`.
        // Support: IE 9 - 11+, Edge 12 - 18+
        // Removing the function wrapper causes a "Permission Denied"
        // error in IE/Edge.
        unloadHandler = function() {
            setDocument();
        }, inDisabledFieldset = addCombinator(function(elem) {
            return elem.disabled === true && nodeName(elem, "fieldset");
        }, {
            dir: "parentNode",
            next: "legend"
        });
        // Support: IE <=9 only
        // Accessing document.activeElement can throw unexpectedly
        // https://bugs.jquery.com/ticket/13393
        function safeActiveElement() {
            try {
                return document.activeElement;
            } catch (err) {}
        }
        // Optimize for push.apply( _, NodeList )
        try {
            push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
            // Support: Android <=4.0
            // Detect silently failing push.apply
            // eslint-disable-next-line no-unused-expressions
            arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
            push = {
                apply: function(target, els) {
                    pushNative.apply(target, slice.call(els));
                },
                call: function(target) {
                    pushNative.apply(target, slice.call(arguments, 1));
                }
            };
        }
        function find(selector, context, results, seed) {
            var m, i, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, // nodeType defaults to 9, since context defaults to document
            nodeType = context ? context.nodeType : 9;
            results = results || [];
            // Return early from calls with invalid selector or context
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) return results;
            // Try to shortcut find operations (as opposed to filters) in HTML documents
            if (!seed) {
                setDocument(context);
                context = context || document;
                if (documentIsHTML) {
                    // If the selector is sufficiently simple, try using a "get*By*" DOM method
                    // (excepting DocumentFragment context, where the methods don't exist)
                    if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                        // ID selector
                        if (m = match[1]) {
                            // Document context
                            if (nodeType === 9) {
                                if (elem = context.getElementById(m)) // Support: IE 9 only
                                // getElementById can match elements by name instead of ID
                                {
                                    if (elem.id === m) {
                                        push.call(results, elem);
                                        return results;
                                    }
                                } else return results;
                            // Element context
                            } else // Support: IE 9 only
                            // getElementById can match elements by name instead of ID
                            if (newContext && (elem = newContext.getElementById(m)) && find.contains(context, elem) && elem.id === m) {
                                push.call(results, elem);
                                return results;
                            }
                        // Type selector
                        } else if (match[2]) {
                            push.apply(results, context.getElementsByTagName(selector));
                            return results;
                        // Class selector
                        } else if ((m = match[3]) && context.getElementsByClassName) {
                            push.apply(results, context.getElementsByClassName(m));
                            return results;
                        }
                    }
                    // Take advantage of querySelectorAll
                    if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                        newSelector = selector;
                        newContext = context;
                        // qSA considers elements outside a scoping root when evaluating child or
                        // descendant combinators, which is not what we want.
                        // In such cases, we work around the behavior by prefixing every selector in the
                        // list with an ID selector referencing the scope context.
                        // The technique has to be used as well when a leading combinator is used
                        // as such selectors are not recognized by querySelectorAll.
                        // Thanks to Andrew Dupont for this technique.
                        if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                            // Expand context for sibling selectors
                            newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                            // We can use :scope instead of the ID hack if the browser
                            // supports it & if we're not changing the context.
                            // Support: IE 11+, Edge 17 - 18+
                            // IE/Edge sometimes throw a "Permission denied" error when
                            // strict-comparing two documents; shallow comparisons work.
                            // eslint-disable-next-line eqeqeq
                            if (newContext != context || !support.scope) {
                                // Capture the context ID, setting it first if necessary
                                if (nid = context.getAttribute("id")) nid = jQuery.escapeSelector(nid);
                                else context.setAttribute("id", nid = expando);
                            }
                            // Prefix every selector in the list
                            groups = tokenize(selector);
                            i = groups.length;
                            while(i--)groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
                            newSelector = groups.join(",");
                        }
                        try {
                            push.apply(results, newContext.querySelectorAll(newSelector));
                            return results;
                        } catch (qsaError) {
                            nonnativeSelectorCache(selector, true);
                        } finally{
                            if (nid === expando) context.removeAttribute("id");
                        }
                    }
                }
            }
            // All others
            return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
        }
        /**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */ function createCache() {
            var keys = [];
            function cache(key, value) {
                // Use (key + " ") to avoid collision with native prototype properties
                // (see https://github.com/jquery/sizzle/issues/157)
                if (keys.push(key + " ") > Expr.cacheLength) // Only keep the most recent entries
                delete cache[keys.shift()];
                return cache[key + " "] = value;
            }
            return cache;
        }
        /**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */ function markFunction(fn) {
            fn[expando] = true;
            return fn;
        }
        /**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */ function assert(fn) {
            var el = document.createElement("fieldset");
            try {
                return !!fn(el);
            } catch (e) {
                return false;
            } finally{
                // Remove from its parent by default
                if (el.parentNode) el.parentNode.removeChild(el);
                // release memory in IE
                el = null;
            }
        }
        /**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */ function createInputPseudo(type) {
            return function(elem) {
                return nodeName(elem, "input") && elem.type === type;
            };
        }
        /**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */ function createButtonPseudo(type) {
            return function(elem) {
                return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
            };
        }
        /**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */ function createDisabledPseudo(disabled) {
            // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
            return function(elem) {
                // Only certain elements can match :enabled or :disabled
                // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
                // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
                if ("form" in elem) {
                    // Check for inherited disabledness on relevant non-disabled elements:
                    // * listed form-associated elements in a disabled fieldset
                    //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
                    //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
                    // * option elements in a disabled optgroup
                    //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
                    // All such elements have a "form" property.
                    if (elem.parentNode && elem.disabled === false) {
                        // Option elements defer to a parent optgroup if present
                        if ("label" in elem) {
                            if ("label" in elem.parentNode) return elem.parentNode.disabled === disabled;
                            else return elem.disabled === disabled;
                        }
                        // Support: IE 6 - 11+
                        // Use the isDisabled shortcut property to check for disabled fieldset ancestors
                        return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                        elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                    }
                    return elem.disabled === disabled;
                // Try to winnow out elements that can't be disabled before trusting the disabled property.
                // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
                // even exist on them, let alone have a boolean value.
                } else if ("label" in elem) return elem.disabled === disabled;
                // Remaining elements are neither :enabled nor :disabled
                return false;
            };
        }
        /**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */ function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
                argument = +argument;
                return markFunction(function(seed, matches) {
                    var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                    // Match elements found at the specified indexes
                    while(i--)if (seed[j = matchIndexes[i]]) seed[j] = !(matches[j] = seed[j]);
                });
            });
        }
        /**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */ function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
        }
        /**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */ function setDocument(node) {
            var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
            // Return early if doc is invalid or already selected
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if (doc == document || doc.nodeType !== 9 || !doc.documentElement) return document;
            // Update global variables
            document = doc;
            documentElement = document.documentElement;
            documentIsHTML = !jQuery.isXMLDoc(document);
            // Support: iOS 7 only, IE 9 - 11+
            // Older browsers didn't support unprefixed `matches`.
            matches = documentElement.matches || documentElement.webkitMatchesSelector || documentElement.msMatchesSelector;
            // Support: IE 9 - 11+, Edge 12 - 18+
            // Accessing iframe documents after unload throws "permission denied" errors
            // (see trac-13936).
            // Limit the fix to IE & Edge Legacy; despite Edge 15+ implementing `matches`,
            // all IE 9+ and Edge Legacy versions implement `msMatchesSelector` as well.
            if (documentElement.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) // Support: IE 9 - 11+, Edge 12 - 18+
            subWindow.addEventListener("unload", unloadHandler);
            // Support: IE <10
            // Check if getElementById returns elements by name
            // The broken getElementById methods don't pick up programmatically-set names,
            // so use a roundabout getElementsByName test
            support.getById = assert(function(el) {
                documentElement.appendChild(el).id = jQuery.expando;
                return !document.getElementsByName || !document.getElementsByName(jQuery.expando).length;
            });
            // Support: IE 9 only
            // Check to see if it's possible to do matchesSelector
            // on a disconnected node.
            support.disconnectedMatch = assert(function(el) {
                return matches.call(el, "*");
            });
            // Support: IE 9 - 11+, Edge 12 - 18+
            // IE/Edge don't support the :scope pseudo-class.
            support.scope = assert(function() {
                return document.querySelectorAll(":scope");
            });
            // Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
            // Make sure the `:has()` argument is parsed unforgivingly.
            // We include `*` in the test to detect buggy implementations that are
            // _selectively_ forgiving (specifically when the list includes at least
            // one valid selector).
            // Note that we treat complete lack of support for `:has()` as if it were
            // spec-compliant support, which is fine because use of `:has()` in such
            // environments will fail in the qSA path and fall back to jQuery traversal
            // anyway.
            support.cssHas = assert(function() {
                try {
                    document.querySelector(":has(*,:jqfake)");
                    return false;
                } catch (e) {
                    return true;
                }
            });
            // ID filter and find
            if (support.getById) {
                Expr.filter.ID = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        return elem.getAttribute("id") === attrId;
                    };
                };
                Expr.find.ID = function(id, context) {
                    if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                        var elem = context.getElementById(id);
                        return elem ? [
                            elem
                        ] : [];
                    }
                };
            } else {
                Expr.filter.ID = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                        return node && node.value === attrId;
                    };
                };
                // Support: IE 6 - 7 only
                // getElementById is not reliable as a find shortcut
                Expr.find.ID = function(id, context) {
                    if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                        var node, i, elems, elem = context.getElementById(id);
                        if (elem) {
                            // Verify the id attribute
                            node = elem.getAttributeNode("id");
                            if (node && node.value === id) return [
                                elem
                            ];
                            // Fall back on getElementsByName
                            elems = context.getElementsByName(id);
                            i = 0;
                            while(elem = elems[i++]){
                                node = elem.getAttributeNode("id");
                                if (node && node.value === id) return [
                                    elem
                                ];
                            }
                        }
                        return [];
                    }
                };
            }
            // Tag
            Expr.find.TAG = function(tag, context) {
                if (typeof context.getElementsByTagName !== "undefined") return context.getElementsByTagName(tag);
                else return context.querySelectorAll(tag);
            };
            // Class
            Expr.find.CLASS = function(className, context) {
                if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) return context.getElementsByClassName(className);
            };
            /* QSA/matchesSelector
	---------------------------------------------------------------------- */ // QSA and matchesSelector support
            rbuggyQSA = [];
            // Build QSA regex
            // Regex strategy adopted from Diego Perini
            assert(function(el) {
                var input;
                documentElement.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a>" + "<select id='" + expando + "-\r\\' disabled='disabled'>" + "<option selected=''></option></select>";
                // Support: iOS <=7 - 8 only
                // Boolean attributes and "value" are not treated correctly in some XML documents
                if (!el.querySelectorAll("[selected]").length) rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                // Support: iOS <=7 - 8 only
                if (!el.querySelectorAll("[id~=" + expando + "-]").length) rbuggyQSA.push("~=");
                // Support: iOS 8 only
                // https://bugs.webkit.org/show_bug.cgi?id=136851
                // In-page `selector#id sibling-combinator selector` fails
                if (!el.querySelectorAll("a#" + expando + "+*").length) rbuggyQSA.push(".#.+[+~]");
                // Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
                // In some of the document kinds, these selectors wouldn't work natively.
                // This is probably OK but for backwards compatibility we want to maintain
                // handling them through jQuery traversal in jQuery 3.x.
                if (!el.querySelectorAll(":checked").length) rbuggyQSA.push(":checked");
                // Support: Windows 8 Native Apps
                // The type and name attributes are restricted during .innerHTML assignment
                input = document.createElement("input");
                input.setAttribute("type", "hidden");
                el.appendChild(input).setAttribute("name", "D");
                // Support: IE 9 - 11+
                // IE's :disabled selector does not pick up the children of disabled fieldsets
                // Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
                // In some of the document kinds, these selectors wouldn't work natively.
                // This is probably OK but for backwards compatibility we want to maintain
                // handling them through jQuery traversal in jQuery 3.x.
                documentElement.appendChild(el).disabled = true;
                if (el.querySelectorAll(":disabled").length !== 2) rbuggyQSA.push(":enabled", ":disabled");
                // Support: IE 11+, Edge 15 - 18+
                // IE 11/Edge don't find elements on a `[name='']` query in some cases.
                // Adding a temporary attribute to the document before the selection works
                // around the issue.
                // Interestingly, IE 10 & older don't seem to have the issue.
                input = document.createElement("input");
                input.setAttribute("name", "");
                el.appendChild(input);
                if (!el.querySelectorAll("[name='']").length) rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
            });
            if (!support.cssHas) // Support: Chrome 105 - 110+, Safari 15.4 - 16.3+
            // Our regular `try-catch` mechanism fails to detect natively-unsupported
            // pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
            // in browsers that parse the `:has()` argument as a forgiving selector list.
            // https://drafts.csswg.org/selectors/#relational now requires the argument
            // to be parsed unforgivingly, but browsers have not yet fully adjusted.
            rbuggyQSA.push(":has");
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            /* Sorting
	---------------------------------------------------------------------- */ // Document order sorting
            sortOrder = function(a, b) {
                // Flag for duplicate removal
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }
                // Sort on method existence if only one input has compareDocumentPosition
                var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (compare) return compare;
                // Calculate position if both inputs belong to the same document
                // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                // eslint-disable-next-line eqeqeq
                compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
                1;
                // Disconnected nodes
                if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                    // Choose the first element that is related to our preferred document
                    // Support: IE 11+, Edge 17 - 18+
                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                    // two documents; shallow comparisons work.
                    // eslint-disable-next-line eqeqeq
                    if (a === document || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) return -1;
                    // Support: IE 11+, Edge 17 - 18+
                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                    // two documents; shallow comparisons work.
                    // eslint-disable-next-line eqeqeq
                    if (b === document || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) return 1;
                    // Maintain original order
                    return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
                }
                return compare & 4 ? -1 : 1;
            };
            return document;
        }
        find.matches = function(expr, elements) {
            return find(expr, null, null, elements);
        };
        find.matchesSelector = function(elem, expr) {
            setDocument(elem);
            if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) try {
                var ret = matches.call(elem, expr);
                // IE 9's matchesSelector returns false on disconnected nodes
                if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                // fragment in IE 9
                elem.document && elem.document.nodeType !== 11) return ret;
            } catch (e) {
                nonnativeSelectorCache(expr, true);
            }
            return find(expr, document, null, [
                elem
            ]).length > 0;
        };
        find.contains = function(context, elem) {
            // Set document vars if needed
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if ((context.ownerDocument || context) != document) setDocument(context);
            return jQuery.contains(context, elem);
        };
        find.attr = function(elem, name) {
            // Set document vars if needed
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if ((elem.ownerDocument || elem) != document) setDocument(elem);
            var fn = Expr.attrHandle[name.toLowerCase()], // Don't get fooled by Object.prototype properties (see trac-13807)
            val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
            if (val !== undefined) return val;
            return elem.getAttribute(name);
        };
        find.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        /**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */ jQuery.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i = 0;
            // Unless we *know* we can detect duplicates, assume their presence
            //
            // Support: Android <=4.0+
            // Testing for detecting duplicates is unpredictable so instead assume we can't
            // depend on duplicate detection in all browsers without a stable sort.
            hasDuplicate = !support.sortStable;
            sortInput = !support.sortStable && slice.call(results, 0);
            sort.call(results, sortOrder);
            if (hasDuplicate) {
                while(elem = results[i++])if (elem === results[i]) j = duplicates.push(i);
                while(j--)splice.call(results, duplicates[j], 1);
            }
            // Clear input after sorting to release objects
            // See https://github.com/jquery/sizzle/pull/225
            sortInput = null;
            return results;
        };
        jQuery.fn.uniqueSort = function() {
            return this.pushStack(jQuery.uniqueSort(slice.apply(this)));
        };
        Expr = jQuery.expr = {
            // Can be adjusted by the user
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(match) {
                    match[1] = match[1].replace(runescape, funescape);
                    // Move the given value to match[3] whether quoted or unquoted
                    match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                    if (match[2] === "~=") match[3] = " " + match[3] + " ";
                    return match.slice(0, 4);
                },
                CHILD: function(match) {
                    /* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/ match[1] = match[1].toLowerCase();
                    if (match[1].slice(0, 3) === "nth") {
                        // nth-* requires argument
                        if (!match[3]) find.error(match[0]);
                        // numeric x and y parameters for Expr.filter.CHILD
                        // remember that false/true cast respectively to 0/1
                        match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                        match[5] = +(match[7] + match[8] || match[3] === "odd");
                    // other types prohibit arguments
                    } else if (match[3]) find.error(match[0]);
                    return match;
                },
                PSEUDO: function(match) {
                    var excess, unquoted = !match[6] && match[2];
                    if (matchExpr.CHILD.test(match[0])) return null;
                    // Accept quoted arguments as-is
                    if (match[3]) match[2] = match[4] || match[5] || "";
                    else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
                    (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
                    (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                        // excess is a negative index
                        match[0] = match[0].slice(0, excess);
                        match[2] = unquoted.slice(0, excess);
                    }
                    // Return only captures needed by the pseudo filter method (type and argument)
                    return match.slice(0, 3);
                }
            },
            filter: {
                TAG: function(nodeNameSelector) {
                    var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                    return nodeNameSelector === "*" ? function() {
                        return true;
                    } : function(elem) {
                        return nodeName(elem, expectedNodeName);
                    };
                },
                CLASS: function(className) {
                    var pattern = classCache[className + " "];
                    return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)"), classCache(className, function(elem) {
                        return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                    }));
                },
                ATTR: function(name, operator, check) {
                    return function(elem) {
                        var result = find.attr(elem, name);
                        if (result == null) return operator === "!=";
                        if (!operator) return true;
                        result += "";
                        if (operator === "=") return result === check;
                        if (operator === "!=") return result !== check;
                        if (operator === "^=") return check && result.indexOf(check) === 0;
                        if (operator === "*=") return check && result.indexOf(check) > -1;
                        if (operator === "$=") return check && result.slice(-check.length) === check;
                        if (operator === "~=") return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
                        if (operator === "|=") return result === check || result.slice(0, check.length + 1) === check + "-";
                        return false;
                    };
                },
                CHILD: function(type, what, _argument, first, last) {
                    var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                    return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
                    function(elem) {
                        return !!elem.parentNode;
                    } : function(elem, _context, xml) {
                        var cache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                        if (parent) {
                            // :(first|last|only)-(child|of-type)
                            if (simple) {
                                while(dir){
                                    node = elem;
                                    while(node = node[dir]){
                                        if (ofType ? nodeName(node, name) : node.nodeType === 1) return false;
                                    }
                                    // Reverse direction for :only-* (if we haven't yet done so)
                                    start = dir = type === "only" && !start && "nextSibling";
                                }
                                return true;
                            }
                            start = [
                                forward ? parent.firstChild : parent.lastChild
                            ];
                            // non-xml :nth-child(...) stores cache data on `parent`
                            if (forward && useCache) {
                                // Seek `elem` from a previously-cached index
                                outerCache = parent[expando] || (parent[expando] = {});
                                cache = outerCache[type] || [];
                                nodeIndex = cache[0] === dirruns && cache[1];
                                diff = nodeIndex && cache[2];
                                node = nodeIndex && parent.childNodes[nodeIndex];
                                while(node = ++nodeIndex && node && node[dir] || // Fallback to seeking `elem` from the start
                                (diff = nodeIndex = 0) || start.pop())// When found, cache indexes on `parent` and break
                                if (node.nodeType === 1 && ++diff && node === elem) {
                                    outerCache[type] = [
                                        dirruns,
                                        nodeIndex,
                                        diff
                                    ];
                                    break;
                                }
                            } else {
                                // Use previously-cached element index if available
                                if (useCache) {
                                    outerCache = elem[expando] || (elem[expando] = {});
                                    cache = outerCache[type] || [];
                                    nodeIndex = cache[0] === dirruns && cache[1];
                                    diff = nodeIndex;
                                }
                                // xml :nth-child(...)
                                // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                                if (diff === false) {
                                    // Use the same loop as above to seek `elem` from the start
                                    while(node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                                        // Cache the index of each encountered element
                                        if (useCache) {
                                            outerCache = node[expando] || (node[expando] = {});
                                            outerCache[type] = [
                                                dirruns,
                                                diff
                                            ];
                                        }
                                        if (node === elem) break;
                                    }
                                }
                            }
                            // Incorporate the offset, then check against cycle size
                            diff -= last;
                            return diff === first || diff % first === 0 && diff / first >= 0;
                        }
                    };
                },
                PSEUDO: function(pseudo, argument) {
                    // pseudo-class names are case-insensitive
                    // https://www.w3.org/TR/selectors/#pseudo-classes
                    // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                    // Remember that setFilters inherits from pseudos
                    var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
                    // The user may use createPseudo to indicate that
                    // arguments are needed to create the filter function
                    // just as jQuery does
                    if (fn[expando]) return fn(argument);
                    // But maintain support for old signatures
                    if (fn.length > 1) {
                        args = [
                            pseudo,
                            pseudo,
                            "",
                            argument
                        ];
                        return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                            var idx, matched = fn(seed, argument), i = matched.length;
                            while(i--){
                                idx = indexOf.call(seed, matched[i]);
                                seed[idx] = !(matches[idx] = matched[i]);
                            }
                        }) : function(elem) {
                            return fn(elem, 0, args);
                        };
                    }
                    return fn;
                }
            },
            pseudos: {
                // Potentially complex pseudos
                not: markFunction(function(selector) {
                    // Trim the selector passed to compile
                    // to avoid treating leading and trailing
                    // spaces as combinators
                    var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
                    return matcher[expando] ? markFunction(function(seed, matches, _context, xml) {
                        var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                        // Match elements unmatched by `matcher`
                        while(i--)if (elem = unmatched[i]) seed[i] = !(matches[i] = elem);
                    }) : function(elem, _context, xml) {
                        input[0] = elem;
                        matcher(input, null, xml, results);
                        // Don't keep the element
                        // (see https://github.com/jquery/sizzle/issues/299)
                        input[0] = null;
                        return !results.pop();
                    };
                }),
                has: markFunction(function(selector) {
                    return function(elem) {
                        return find(selector, elem).length > 0;
                    };
                }),
                contains: markFunction(function(text) {
                    text = text.replace(runescape, funescape);
                    return function(elem) {
                        return (elem.textContent || jQuery.text(elem)).indexOf(text) > -1;
                    };
                }),
                // "Whether an element is represented by a :lang() selector
                // is based solely on the element's language value
                // being equal to the identifier C,
                // or beginning with the identifier C immediately followed by "-".
                // The matching of C against the element's language value is performed case-insensitively.
                // The identifier C does not have to be a valid language name."
                // https://www.w3.org/TR/selectors/#lang-pseudo
                lang: markFunction(function(lang) {
                    // lang value must be a valid identifier
                    if (!ridentifier.test(lang || "")) find.error("unsupported lang: " + lang);
                    lang = lang.replace(runescape, funescape).toLowerCase();
                    return function(elem) {
                        var elemLang;
                        do if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                            elemLang = elemLang.toLowerCase();
                            return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                        }
                        while ((elem = elem.parentNode) && elem.nodeType === 1);
                        return false;
                    };
                }),
                // Miscellaneous
                target: function(elem) {
                    var hash = window1.location && window1.location.hash;
                    return hash && hash.slice(1) === elem.id;
                },
                root: function(elem) {
                    return elem === documentElement;
                },
                focus: function(elem) {
                    return elem === safeActiveElement() && document.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
                },
                // Boolean properties
                enabled: createDisabledPseudo(false),
                disabled: createDisabledPseudo(true),
                checked: function(elem) {
                    // In CSS3, :checked should return both checked and selected elements
                    // https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                    return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
                },
                selected: function(elem) {
                    // Support: IE <=11+
                    // Accessing the selectedIndex property
                    // forces the browser to treat the default option as
                    // selected when in an optgroup.
                    if (elem.parentNode) // eslint-disable-next-line no-unused-expressions
                    elem.parentNode.selectedIndex;
                    return elem.selected === true;
                },
                // Contents
                empty: function(elem) {
                    // https://www.w3.org/TR/selectors/#empty-pseudo
                    // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                    //   but not by others (comment: 8; processing instruction: 7; etc.)
                    // nodeType < 6 works because attributes (2) do not appear as children
                    for(elem = elem.firstChild; elem; elem = elem.nextSibling){
                        if (elem.nodeType < 6) return false;
                    }
                    return true;
                },
                parent: function(elem) {
                    return !Expr.pseudos.empty(elem);
                },
                // Element/input types
                header: function(elem) {
                    return rheader.test(elem.nodeName);
                },
                input: function(elem) {
                    return rinputs.test(elem.nodeName);
                },
                button: function(elem) {
                    return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
                },
                text: function(elem) {
                    var attr;
                    return nodeName(elem, "input") && elem.type === "text" && // Support: IE <10 only
                    // New HTML5 attribute values (e.g., "search") appear
                    // with elem.type === "text"
                    ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                },
                // Position-in-collection
                first: createPositionalPseudo(function() {
                    return [
                        0
                    ];
                }),
                last: createPositionalPseudo(function(_matchIndexes, length) {
                    return [
                        length - 1
                    ];
                }),
                eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
                    return [
                        argument < 0 ? argument + length : argument
                    ];
                }),
                even: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 0;
                    for(; i < length; i += 2)matchIndexes.push(i);
                    return matchIndexes;
                }),
                odd: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 1;
                    for(; i < length; i += 2)matchIndexes.push(i);
                    return matchIndexes;
                }),
                lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i;
                    if (argument < 0) i = argument + length;
                    else if (argument > length) i = length;
                    else i = argument;
                    for(; --i >= 0;)matchIndexes.push(i);
                    return matchIndexes;
                }),
                gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for(; ++i < length;)matchIndexes.push(i);
                    return matchIndexes;
                })
            }
        };
        Expr.pseudos.nth = Expr.pseudos.eq;
        // Add button/input type pseudos
        for(i in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        })Expr.pseudos[i] = createInputPseudo(i);
        for(i in {
            submit: true,
            reset: true
        })Expr.pseudos[i] = createButtonPseudo(i);
        // Easy API for creating new setFilters
        function setFilters() {}
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        function tokenize(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) return parseOnly ? 0 : cached.slice(0);
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while(soFar){
                // Comma and first run
                if (!matched || (match = rcomma.exec(soFar))) {
                    if (match) // Don't consume trailing commas as valid
                    soFar = soFar.slice(match[0].length) || soFar;
                    groups.push(tokens = []);
                }
                matched = false;
                // Combinators
                if (match = rleadingCombinator.exec(soFar)) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        // Cast descendant combinators to space
                        type: match[0].replace(rtrimCSS, " ")
                    });
                    soFar = soFar.slice(matched.length);
                }
                // Filters
                for(type in Expr.filter)if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        type: type,
                        matches: match
                    });
                    soFar = soFar.slice(matched.length);
                }
                if (!matched) break;
            }
            // Return the length of the invalid excess
            // if we're just parsing
            // Otherwise, throw an error or return tokens
            if (parseOnly) return soFar.length;
            return soFar ? find.error(selector) : // Cache the tokens
            tokenCache(selector, groups).slice(0);
        }
        function toSelector(tokens) {
            var i = 0, len = tokens.length, selector = "";
            for(; i < len; i++)selector += tokens[i].value;
            return selector;
        }
        function addCombinator(matcher, combinator, base) {
            var dir = combinator.dir, skip = combinator.next, key = skip || dir, checkNonElements = base && key === "parentNode", doneName = done++;
            return combinator.first ? // Check against closest ancestor/preceding element
            function(elem, context, xml) {
                while(elem = elem[dir]){
                    if (elem.nodeType === 1 || checkNonElements) return matcher(elem, context, xml);
                }
                return false;
            } : // Check against all ancestor/preceding elements
            function(elem, context, xml) {
                var oldCache, outerCache, newCache = [
                    dirruns,
                    doneName
                ];
                // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
                if (xml) {
                    while(elem = elem[dir])if (elem.nodeType === 1 || checkNonElements) {
                        if (matcher(elem, context, xml)) return true;
                    }
                } else {
                    while(elem = elem[dir])if (elem.nodeType === 1 || checkNonElements) {
                        outerCache = elem[expando] || (elem[expando] = {});
                        if (skip && nodeName(elem, skip)) elem = elem[dir] || elem;
                        else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) // Assign to newCache so results back-propagate to previous elements
                        return newCache[2] = oldCache[2];
                        else {
                            // Reuse newcache so results back-propagate to previous elements
                            outerCache[key] = newCache;
                            // A match means we're done; a fail means we have to keep checking
                            if (newCache[2] = matcher(elem, context, xml)) return true;
                        }
                    }
                }
                return false;
            };
        }
        function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
                var i = matchers.length;
                while(i--){
                    if (!matchers[i](elem, context, xml)) return false;
                }
                return true;
            } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
            var i = 0, len = contexts.length;
            for(; i < len; i++)find(selector, contexts[i], results);
            return results;
        }
        function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
            for(; i < len; i++){
                if (elem = unmatched[i]) {
                    if (!filter || filter(elem, context, xml)) {
                        newUnmatched.push(elem);
                        if (mapped) map.push(i);
                    }
                }
            }
            return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) postFilter = setMatcher(postFilter);
            if (postFinder && !postFinder[expando]) postFinder = setMatcher(postFinder, postSelector);
            return markFunction(function(seed, results, context, xml) {
                var temp, i, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, // Get initial elements from seed or context
                elems = seed || multipleContexts(selector || "*", context.nodeType ? [
                    context
                ] : context, []), // Prefilter to get matcher input, preserving a map for seed-results synchronization
                matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
                if (matcher) {
                    // If we have a postFinder, or filtered seed, or non-seed postFilter
                    // or preexisting results,
                    matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
                    [] : // ...otherwise use results directly
                    results;
                    // Find primary matches
                    matcher(matcherIn, matcherOut, context, xml);
                } else matcherOut = matcherIn;
                // Apply postFilter
                if (postFilter) {
                    temp = condense(matcherOut, postMap);
                    postFilter(temp, [], context, xml);
                    // Un-match failing elements by moving them back to matcherIn
                    i = temp.length;
                    while(i--)if (elem = temp[i]) matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                }
                if (seed) {
                    if (postFinder || preFilter) {
                        if (postFinder) {
                            // Get the final matcherOut by condensing this intermediate into postFinder contexts
                            temp = [];
                            i = matcherOut.length;
                            while(i--)if (elem = matcherOut[i]) // Restore matcherIn since elem is not yet a final match
                            temp.push(matcherIn[i] = elem);
                            postFinder(null, matcherOut = [], temp, xml);
                        }
                        // Move matched elements from seed to results to keep them synchronized
                        i = matcherOut.length;
                        while(i--)if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) seed[temp] = !(results[temp] = elem);
                    }
                } else {
                    matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                    if (postFinder) postFinder(null, results, matcherOut, xml);
                    else push.apply(results, matcherOut);
                }
            });
        }
        function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, // The foundational matcher ensures that elements are reachable from top-level context(s)
            matchContext = addCombinator(function(elem) {
                return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
                return indexOf.call(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [
                function(elem, context, xml) {
                    // Support: IE 11+, Edge 17 - 18+
                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                    // two documents; shallow comparisons work.
                    // eslint-disable-next-line eqeqeq
                    var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                    // Avoid hanging onto element
                    // (see https://github.com/jquery/sizzle/issues/299)
                    checkContext = null;
                    return ret;
                }
            ];
            for(; i < len; i++)if (matcher = Expr.relative[tokens[i].type]) matchers = [
                addCombinator(elementMatcher(matchers), matcher)
            ];
            else {
                matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                // Return special upon seeing a positional matcher
                if (matcher[expando]) {
                    // Find the next relative operator (if any) for proper handling
                    j = ++i;
                    for(; j < len; j++){
                        if (Expr.relative[tokens[j].type]) break;
                    }
                    return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    tokens.slice(0, i - 1).concat({
                        value: tokens[i - 2].type === " " ? "*" : ""
                    })).replace(rtrimCSS, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                }
                matchers.push(matcher);
            }
            return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, // We must always have either seed elements or outermost context
                elems = seed || byElement && Expr.find.TAG("*", outermost), // Use integer dirruns iff this is the outermost matcher
                dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
                if (outermost) // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                // eslint-disable-next-line eqeqeq
                outermostContext = context == document || context || outermost;
                // Add elements passing elementMatchers directly to results
                // Support: iOS <=7 - 9 only
                // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
                // elements by id. (see trac-14142)
                for(; i !== len && (elem = elems[i]) != null; i++){
                    if (byElement && elem) {
                        j = 0;
                        // Support: IE 11+, Edge 17 - 18+
                        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                        // two documents; shallow comparisons work.
                        // eslint-disable-next-line eqeqeq
                        if (!context && elem.ownerDocument != document) {
                            setDocument(elem);
                            xml = !documentIsHTML;
                        }
                        while(matcher = elementMatchers[j++])if (matcher(elem, context || document, xml)) {
                            push.call(results, elem);
                            break;
                        }
                        if (outermost) dirruns = dirrunsUnique;
                    }
                    // Track unmatched elements for set filters
                    if (bySet) {
                        // They will have gone through all possible matchers
                        if (elem = !matcher && elem) matchedCount--;
                        // Lengthen the array for every element, matched or not
                        if (seed) unmatched.push(elem);
                    }
                }
                // `i` is now the count of elements visited above, and adding it to `matchedCount`
                // makes the latter nonnegative.
                matchedCount += i;
                // Apply set filters to unmatched elements
                // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
                // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
                // no element matchers and no seed.
                // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
                // case, which will result in a "00" `matchedCount` that differs from `i` but is also
                // numerically zero.
                if (bySet && i !== matchedCount) {
                    j = 0;
                    while(matcher = setMatchers[j++])matcher(unmatched, setMatched, context, xml);
                    if (seed) {
                        // Reintegrate element matches to eliminate the need for sorting
                        if (matchedCount > 0) {
                            while(i--)if (!(unmatched[i] || setMatched[i])) setMatched[i] = pop.call(results);
                        }
                        // Discard index placeholder values to get only actual matches
                        setMatched = condense(setMatched);
                    }
                    // Add matches to results
                    push.apply(results, setMatched);
                    // Seedless set matches succeeding multiple successful matchers stipulate sorting
                    if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) jQuery.uniqueSort(results);
                }
                // Override manipulation of globals by nested matchers
                if (outermost) {
                    dirruns = dirrunsUnique;
                    outermostContext = contextBackup;
                }
                return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
        }
        function compile(selector, match /* Internal Use Only */ ) {
            var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
                // Generate a function of recursive functions that can be used to check each element
                if (!match) match = tokenize(selector);
                i = match.length;
                while(i--){
                    cached = matcherFromTokens(match[i]);
                    if (cached[expando]) setMatchers.push(cached);
                    else elementMatchers.push(cached);
                }
                // Cache the compiled function
                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                // Save selector and tokenization
                cached.selector = selector;
            }
            return cached;
        }
        /**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */ function select(selector, context, results, seed) {
            var i, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            // Try to minimize operations if there is only one selector in the list and no seed
            // (the latter of which guarantees us context)
            if (match.length === 1) {
                // Reduce context if the leading compound selector is an ID
                tokens = match[0] = match[0].slice(0);
                if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                    context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0];
                    if (!context) return results;
                    else if (compiled) context = context.parentNode;
                    selector = selector.slice(tokens.shift().value.length);
                }
                // Fetch a seed set for right-to-left matching
                i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
                while(i--){
                    token = tokens[i];
                    // Abort if we hit a combinator
                    if (Expr.relative[type = token.type]) break;
                    if (find = Expr.find[type]) // Search, expanding context for leading sibling combinators
                    {
                        if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                            // If seed is empty or no tokens remain, we can return early
                            tokens.splice(i, 1);
                            selector = seed.length && toSelector(tokens);
                            if (!selector) {
                                push.apply(results, seed);
                                return results;
                            }
                            break;
                        }
                    }
                }
            }
            // Compile and execute a filtering function if one is not provided
            // Provide `match` to avoid retokenization if we modified the selector above
            (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
            return results;
        }
        // One-time assignments
        // Support: Android <=4.0 - 4.1+
        // Sort stability
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        // Initialize against the default document
        setDocument();
        // Support: Android <=4.0 - 4.1+
        // Detached nodes confoundingly follow *each other*
        support.sortDetached = assert(function(el) {
            // Should return 1, but returns 4 (following)
            return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
        });
        jQuery.find = find;
        // Deprecated
        jQuery.expr[":"] = jQuery.expr.pseudos;
        jQuery.unique = jQuery.uniqueSort;
        // These have always been private, but they used to be documented as part of
        // Sizzle so let's maintain them for now for backwards compatibility purposes.
        find.compile = compile;
        find.select = select;
        find.setDocument = setDocument;
        find.tokenize = tokenize;
        find.escape = jQuery.escapeSelector;
        find.getText = jQuery.text;
        find.isXML = jQuery.isXMLDoc;
        find.selectors = jQuery.expr;
        find.support = jQuery.support;
        find.uniqueSort = jQuery.uniqueSort;
    /* eslint-enable */ })();
    var dir = function(elem, dir, until) {
        var matched = [], truncate = until !== undefined;
        while((elem = elem[dir]) && elem.nodeType !== 9)if (elem.nodeType === 1) {
            if (truncate && jQuery(elem).is(until)) break;
            matched.push(elem);
        }
        return matched;
    };
    var siblings = function(n, elem) {
        var matched = [];
        for(; n; n = n.nextSibling)if (n.nodeType === 1 && n !== elem) matched.push(n);
        return matched;
    };
    var rneedsContext = jQuery.expr.match.needsContext;
    var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    // Implement the identical functionality for filter and not
    function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) return jQuery.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
        });
        // Single element
        if (qualifier.nodeType) return jQuery.grep(elements, function(elem) {
            return elem === qualifier !== not;
        });
        // Arraylike of elements (jQuery, arguments, Array)
        if (typeof qualifier !== "string") return jQuery.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
        });
        // Filtered directly for both simple and complex selectors
        return jQuery.filter(qualifier, elements, not);
    }
    jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) expr = ":not(" + expr + ")";
        if (elems.length === 1 && elem.nodeType === 1) return jQuery.find.matchesSelector(elem, expr) ? [
            elem
        ] : [];
        return jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
            return elem.nodeType === 1;
        }));
    };
    jQuery.fn.extend({
        find: function(selector) {
            var i, ret, len = this.length, self = this;
            if (typeof selector !== "string") return this.pushStack(jQuery(selector).filter(function() {
                for(i = 0; i < len; i++){
                    if (jQuery.contains(self[i], this)) return true;
                }
            }));
            ret = this.pushStack([]);
            for(i = 0; i < len; i++)jQuery.find(selector, self[i], ret);
            return len > 1 ? jQuery.uniqueSort(ret) : ret;
        },
        filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
            return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
        }
    });
    // Initialize a jQuery object
    // A central reference to the root jQuery(document)
    var rootjQuery, // A simple way to check for HTML strings
    // Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
    // Strict HTML recognition (trac-11290: must start with <)
    // Shortcut simple #id case for speed
    rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
        var match, elem;
        // HANDLE: $(""), $(null), $(undefined), $(false)
        if (!selector) return this;
        // Method init() accepts an alternate rootjQuery
        // so migrate can support jQuery.sub (gh-2101)
        root = root || rootjQuery;
        // Handle HTML strings
        if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) // Assume that strings that start and end with <> are HTML and skip the regex check
            match = [
                null,
                selector,
                null
            ];
            else match = rquickExpr.exec(selector);
            // Match html or make sure no context is specified for #id
            if (match && (match[1] || !context)) {
                // HANDLE: $(html) -> $(array)
                if (match[1]) {
                    context = context instanceof jQuery ? context[0] : context;
                    // Option to run scripts is true for back-compat
                    // Intentionally let the error be thrown if parseHTML is not present
                    jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                    // HANDLE: $(html, props)
                    if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                        for(match in context)// Properties of context are called as methods if possible
                        if (isFunction(this[match])) this[match](context[match]);
                        else this.attr(match, context[match]);
                    }
                    return this;
                // HANDLE: $(#id)
                } else {
                    elem = document.getElementById(match[2]);
                    if (elem) {
                        // Inject the element directly into the jQuery object
                        this[0] = elem;
                        this.length = 1;
                    }
                    return this;
                }
            } else if (!context || context.jquery) return (context || root).find(selector);
            else return this.constructor(context).find(selector);
        // HANDLE: $(DOMElement)
        } else if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
        // HANDLE: $(function)
        // Shortcut for document ready
        } else if (isFunction(selector)) return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
        selector(jQuery);
        return jQuery.makeArray(selector, this);
    };
    // Give the init function the jQuery prototype for later instantiation
    init.prototype = jQuery.fn;
    // Initialize central reference
    rootjQuery = jQuery(document);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/, // Methods guaranteed to produce a unique set when starting from a unique set
    guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    jQuery.fn.extend({
        has: function(target) {
            var targets = jQuery(target, this), l = targets.length;
            return this.filter(function() {
                var i = 0;
                for(; i < l; i++){
                    if (jQuery.contains(this, targets[i])) return true;
                }
            });
        },
        closest: function(selectors, context) {
            var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
            // Positional selectors never match, since there's no _selection_ context
            if (!rneedsContext.test(selectors)) for(; i < l; i++){
                for(cur = this[i]; cur && cur !== context; cur = cur.parentNode)// Always skip document fragments
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to jQuery#find
                cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                    matched.push(cur);
                    break;
                }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        },
        // Determine the position of an element within the set
        index: function(elem) {
            // No argument, return index in parent
            if (!elem) return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            // Index in selector
            if (typeof elem === "string") return indexOf.call(jQuery(elem), this[0]);
            // Locate the position of the desired element
            return indexOf.call(this, // If it receives a jQuery object, the first element is used
            elem.jquery ? elem[0] : elem);
        },
        add: function(selector, context) {
            return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
        },
        addBack: function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
    });
    function sibling(cur, dir) {
        while((cur = cur[dir]) && cur.nodeType !== 1);
        return cur;
    }
    jQuery.each({
        parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
            return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, _i, until) {
            return dir(elem, "parentNode", until);
        },
        next: function(elem) {
            return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
            return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
            return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
            return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, _i, until) {
            return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, _i, until) {
            return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
            return siblings(elem.firstChild);
        },
        contents: function(elem) {
            if (elem.contentDocument != null && // Support: IE 11+
            // <object> elements with no `data` attribute has an object
            // `contentDocument` with a `null` prototype.
            getProto(elem.contentDocument)) return elem.contentDocument;
            // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
            // Treat the template element as a regular one in browsers that
            // don't support it.
            if (nodeName(elem, "template")) elem = elem.content || elem;
            return jQuery.merge([], elem.childNodes);
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") selector = until;
            if (selector && typeof selector === "string") matched = jQuery.filter(selector, matched);
            if (this.length > 1) {
                // Remove duplicates
                if (!guaranteedUnique[name]) jQuery.uniqueSort(matched);
                // Reverse order for parents* and prev-derivatives
                if (rparentsprev.test(name)) matched.reverse();
            }
            return this.pushStack(matched);
        };
    });
    var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
    // Convert String-formatted options into Object-formatted ones
    function createOptions(options) {
        var object = {};
        jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
            object[flag] = true;
        });
        return object;
    }
    /*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */ jQuery.Callbacks = function(options) {
        // Convert options from String-formatted to Object-formatted if needed
        // (we check in cache first)
        options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
        var firing, // Last fire value for non-forgettable lists
        memory, // Flag to know if list was already fired
        fired, // Flag to prevent firing
        locked, // Actual callback list
        list = [], // Queue of execution data for repeatable lists
        queue = [], // Index of currently firing callback (modified by add/remove as needed)
        firingIndex = -1, // Fire callbacks
        fire = function() {
            // Enforce single-firing
            locked = locked || options.once;
            // Execute callbacks for all pending executions,
            // respecting firingIndex overrides and runtime changes
            fired = firing = true;
            for(; queue.length; firingIndex = -1){
                memory = queue.shift();
                while(++firingIndex < list.length)// Run callback and check for early termination
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                    // Jump to end and forget the data so .add doesn't re-fire
                    firingIndex = list.length;
                    memory = false;
                }
            }
            // Forget the data if we're done with it
            if (!options.memory) memory = false;
            firing = false;
            // Clean up if we're done firing for good
            if (locked) {
                // Keep an empty list if we have data for future add calls
                if (memory) list = [];
                else list = "";
            }
        }, // Actual Callbacks object
        self = {
            // Add a callback or a collection of callbacks to the list
            add: function() {
                if (list) {
                    // If we have memory from a past run, we should fire after adding
                    if (memory && !firing) {
                        firingIndex = list.length - 1;
                        queue.push(memory);
                    }
                    (function add(args) {
                        jQuery.each(args, function(_, arg) {
                            if (isFunction(arg)) {
                                if (!options.unique || !self.has(arg)) list.push(arg);
                            } else if (arg && arg.length && toType(arg) !== "string") // Inspect recursively
                            add(arg);
                        });
                    })(arguments);
                    if (memory && !firing) fire();
                }
                return this;
            },
            // Remove a callback from the list
            remove: function() {
                jQuery.each(arguments, function(_, arg) {
                    var index;
                    while((index = jQuery.inArray(arg, list, index)) > -1){
                        list.splice(index, 1);
                        // Handle firing indexes
                        if (index <= firingIndex) firingIndex--;
                    }
                });
                return this;
            },
            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            has: function(fn) {
                return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
            },
            // Remove all callbacks from the list
            empty: function() {
                if (list) list = [];
                return this;
            },
            // Disable .fire and .add
            // Abort any current/pending executions
            // Clear all callbacks and values
            disable: function() {
                locked = queue = [];
                list = memory = "";
                return this;
            },
            disabled: function() {
                return !list;
            },
            // Disable .fire
            // Also disable .add unless we have memory (since it would have no effect)
            // Abort any pending executions
            lock: function() {
                locked = queue = [];
                if (!memory && !firing) list = memory = "";
                return this;
            },
            locked: function() {
                return !!locked;
            },
            // Call all callbacks with the given context and arguments
            fireWith: function(context, args) {
                if (!locked) {
                    args = args || [];
                    args = [
                        context,
                        args.slice ? args.slice() : args
                    ];
                    queue.push(args);
                    if (!firing) fire();
                }
                return this;
            },
            // Call all the callbacks with the given arguments
            fire: function() {
                self.fireWith(this, arguments);
                return this;
            },
            // To know if the callbacks have already been called at least once
            fired: function() {
                return !!fired;
            }
        };
        return self;
    };
    function Identity(v) {
        return v;
    }
    function Thrower(ex) {
        throw ex;
    }
    function adoptValue(value, resolve, reject, noValue) {
        var method;
        try {
            // Check for promise aspect first to privilege synchronous behavior
            if (value && isFunction(method = value.promise)) method.call(value).done(resolve).fail(reject);
            else if (value && isFunction(method = value.then)) method.call(value, resolve, reject);
            else // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
            // * false: [ value ].slice( 0 ) => resolve( value )
            // * true: [ value ].slice( 1 ) => resolve()
            resolve.apply(undefined, [
                value
            ].slice(noValue));
        // For Promises/A+, convert exceptions into rejections
        // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
        // Deferred#then to conditionally suppress rejection.
        } catch (value) {
            // Support: Android 4.0 only
            // Strict mode functions invoked without .call/.apply get global-object context
            reject.apply(undefined, [
                value
            ]);
        }
    }
    jQuery.extend({
        Deferred: function(func) {
            var tuples = [
                // action, add listener, callbacks,
                // ... .then handlers, argument index, [final state]
                [
                    "notify",
                    "progress",
                    jQuery.Callbacks("memory"),
                    jQuery.Callbacks("memory"),
                    2
                ],
                [
                    "resolve",
                    "done",
                    jQuery.Callbacks("once memory"),
                    jQuery.Callbacks("once memory"),
                    0,
                    "resolved"
                ],
                [
                    "reject",
                    "fail",
                    jQuery.Callbacks("once memory"),
                    jQuery.Callbacks("once memory"),
                    1,
                    "rejected"
                ]
            ], state = "pending", promise = {
                state: function() {
                    return state;
                },
                always: function() {
                    deferred.done(arguments).fail(arguments);
                    return this;
                },
                "catch": function(fn) {
                    return promise.then(null, fn);
                },
                // Keep pipe for back-compat
                pipe: function() {
                    var fns = arguments;
                    return jQuery.Deferred(function(newDefer) {
                        jQuery.each(tuples, function(_i, tuple) {
                            // Map tuples (progress, done, fail) to arguments (done, fail, progress)
                            var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                            // deferred.progress(function() { bind to newDefer or newDefer.notify })
                            // deferred.done(function() { bind to newDefer or newDefer.resolve })
                            // deferred.fail(function() { bind to newDefer or newDefer.reject })
                            deferred[tuple[1]](function() {
                                var returned = fn && fn.apply(this, arguments);
                                if (returned && isFunction(returned.promise)) returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                                else newDefer[tuple[0] + "With"](this, fn ? [
                                    returned
                                ] : arguments);
                            });
                        });
                        fns = null;
                    }).promise();
                },
                then: function(onFulfilled, onRejected, onProgress) {
                    var maxDepth = 0;
                    function resolve(depth, deferred, handler, special) {
                        return function() {
                            var that = this, args = arguments, mightThrow = function() {
                                var returned, then;
                                // Support: Promises/A+ section 2.3.3.3.3
                                // https://promisesaplus.com/#point-59
                                // Ignore double-resolution attempts
                                if (depth < maxDepth) return;
                                returned = handler.apply(that, args);
                                // Support: Promises/A+ section 2.3.1
                                // https://promisesaplus.com/#point-48
                                if (returned === deferred.promise()) throw new TypeError("Thenable self-resolution");
                                // Support: Promises/A+ sections 2.3.3.1, 3.5
                                // https://promisesaplus.com/#point-54
                                // https://promisesaplus.com/#point-75
                                // Retrieve `then` only once
                                then = returned && // Support: Promises/A+ section 2.3.4
                                // https://promisesaplus.com/#point-64
                                // Only check objects and functions for thenability
                                (typeof returned === "object" || typeof returned === "function") && returned.then;
                                // Handle a returned thenable
                                if (isFunction(then)) {
                                    // Special processors (notify) just wait for resolution
                                    if (special) then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));
                                    else {
                                        // ...and disregard older resolution values
                                        maxDepth++;
                                        then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                                    }
                                } else {
                                    // Only substitute handlers pass on context
                                    // and multiple values (non-spec behavior)
                                    if (handler !== Identity) {
                                        that = undefined;
                                        args = [
                                            returned
                                        ];
                                    }
                                    // Process the value(s)
                                    // Default process is resolve
                                    (special || deferred.resolveWith)(that, args);
                                }
                            }, // Only normal processors (resolve) catch and reject exceptions
                            process = special ? mightThrow : function() {
                                try {
                                    mightThrow();
                                } catch (e) {
                                    if (jQuery.Deferred.exceptionHook) jQuery.Deferred.exceptionHook(e, process.error);
                                    // Support: Promises/A+ section 2.3.3.3.4.1
                                    // https://promisesaplus.com/#point-61
                                    // Ignore post-resolution exceptions
                                    if (depth + 1 >= maxDepth) {
                                        // Only substitute handlers pass on context
                                        // and multiple values (non-spec behavior)
                                        if (handler !== Thrower) {
                                            that = undefined;
                                            args = [
                                                e
                                            ];
                                        }
                                        deferred.rejectWith(that, args);
                                    }
                                }
                            };
                            // Support: Promises/A+ section 2.3.3.3.1
                            // https://promisesaplus.com/#point-57
                            // Re-resolve promises immediately to dodge false rejection from
                            // subsequent errors
                            if (depth) process();
                            else {
                                // Call an optional hook to record the error, in case of exception
                                // since it's otherwise lost when execution goes async
                                if (jQuery.Deferred.getErrorHook) process.error = jQuery.Deferred.getErrorHook();
                                else if (jQuery.Deferred.getStackHook) process.error = jQuery.Deferred.getStackHook();
                                window1.setTimeout(process);
                            }
                        };
                    }
                    return jQuery.Deferred(function(newDefer) {
                        // progress_handlers.add( ... )
                        tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                        // fulfilled_handlers.add( ... )
                        tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
                        // rejected_handlers.add( ... )
                        tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
                    }).promise();
                },
                // Get a promise for this deferred
                // If obj is provided, the promise aspect is added to the object
                promise: function(obj) {
                    return obj != null ? jQuery.extend(obj, promise) : promise;
                }
            }, deferred = {};
            // Add list-specific methods
            jQuery.each(tuples, function(i, tuple) {
                var list = tuple[2], stateString = tuple[5];
                // promise.progress = list.add
                // promise.done = list.add
                // promise.fail = list.add
                promise[tuple[1]] = list.add;
                // Handle state
                if (stateString) list.add(function() {
                    // state = "resolved" (i.e., fulfilled)
                    // state = "rejected"
                    state = stateString;
                }, // rejected_callbacks.disable
                // fulfilled_callbacks.disable
                tuples[3 - i][2].disable, // rejected_handlers.disable
                // fulfilled_handlers.disable
                tuples[3 - i][3].disable, // progress_callbacks.lock
                tuples[0][2].lock, // progress_handlers.lock
                tuples[0][3].lock);
                // progress_handlers.fire
                // fulfilled_handlers.fire
                // rejected_handlers.fire
                list.add(tuple[3].fire);
                // deferred.notify = function() { deferred.notifyWith(...) }
                // deferred.resolve = function() { deferred.resolveWith(...) }
                // deferred.reject = function() { deferred.rejectWith(...) }
                deferred[tuple[0]] = function() {
                    deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
                    return this;
                };
                // deferred.notifyWith = list.fireWith
                // deferred.resolveWith = list.fireWith
                // deferred.rejectWith = list.fireWith
                deferred[tuple[0] + "With"] = list.fireWith;
            });
            // Make the deferred a promise
            promise.promise(deferred);
            // Call given func if any
            if (func) func.call(deferred, deferred);
            // All done!
            return deferred;
        },
        // Deferred helper
        when: function(singleValue) {
            var // count of uncompleted subordinates
            remaining = arguments.length, // count of unprocessed arguments
            i = remaining, // subordinate fulfillment data
            resolveContexts = Array(i), resolveValues = slice.call(arguments), // the primary Deferred
            primary = jQuery.Deferred(), // subordinate callback factory
            updateFunc = function(i) {
                return function(value) {
                    resolveContexts[i] = this;
                    resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
                    if (!--remaining) primary.resolveWith(resolveContexts, resolveValues);
                };
            };
            // Single- and empty arguments are adopted like Promise.resolve
            if (remaining <= 1) {
                adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining);
                // Use .then() to unwrap secondary thenables (cf. gh-3000)
                if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) return primary.then();
            }
            // Multiple arguments are aggregated like Promise.all array elements
            while(i--)adoptValue(resolveValues[i], updateFunc(i), primary.reject);
            return primary.promise();
        }
    });
    // These usually indicate a programmer mistake during development,
    // warn about them ASAP rather than swallowing them by default.
    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    // If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
    // captured before the async barrier to get the original error cause
    // which may otherwise be hidden.
    jQuery.Deferred.exceptionHook = function(error, asyncError) {
        // Support: IE 8 - 9 only
        // Console exists when dev tools are open, which can happen at any time
        if (window1.console && window1.console.warn && error && rerrorNames.test(error.name)) window1.console.warn("jQuery.Deferred exception: " + error.message, error.stack, asyncError);
    };
    jQuery.readyException = function(error) {
        window1.setTimeout(function() {
            throw error;
        });
    };
    // The deferred used on DOM ready
    var readyList = jQuery.Deferred();
    jQuery.fn.ready = function(fn) {
        readyList.then(fn)// Wrap jQuery.readyException in a function so that the lookup
        // happens at the time of error handling instead of callback
        // registration.
        .catch(function(error) {
            jQuery.readyException(error);
        });
        return this;
    };
    jQuery.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See trac-6781
        readyWait: 1,
        // Handle when the DOM is ready
        ready: function(wait) {
            // Abort if there are pending holds or we're already ready
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) return;
            // Remember that the DOM is ready
            jQuery.isReady = true;
            // If a normal DOM Ready event fired, decrement, and wait if need be
            if (wait !== true && --jQuery.readyWait > 0) return;
            // If there are functions bound, to execute
            readyList.resolveWith(document, [
                jQuery
            ]);
        }
    });
    jQuery.ready.then = readyList.then;
    // The ready event handler and self cleanup method
    function completed() {
        document.removeEventListener("DOMContentLoaded", completed);
        window1.removeEventListener("load", completed);
        jQuery.ready();
    }
    // Catch cases where $(document).ready() is called
    // after the browser event has already occurred.
    // Support: IE <=9 - 10 only
    // Older IE sometimes signals "interactive" too soon
    if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) // Handle it asynchronously to allow scripts the opportunity to delay ready
    window1.setTimeout(jQuery.ready);
    else {
        // Use the handy event callback
        document.addEventListener("DOMContentLoaded", completed);
        // A fallback to window.onload, that will always work
        window1.addEventListener("load", completed);
    }
    // Multifunctional method to get and set values of a collection
    // The value/s can optionally be executed if it's a function
    var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = key == null;
        // Sets many values
        if (toType(key) === "object") {
            chainable = true;
            for(i in key)access(elems, fn, i, key[i], true, emptyGet, raw);
        // Sets one value
        } else if (value !== undefined) {
            chainable = true;
            if (!isFunction(value)) raw = true;
            if (bulk) {
                // Bulk operations run against the entire set
                if (raw) {
                    fn.call(elems, value);
                    fn = null;
                // ...except when executing function values
                } else {
                    bulk = fn;
                    fn = function(elem, _key, value) {
                        return bulk.call(jQuery(elem), value);
                    };
                }
            }
            if (fn) for(; i < len; i++)fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
        if (chainable) return elems;
        // Gets
        if (bulk) return fn.call(elems);
        return len ? fn(elems[0], key) : emptyGet;
    };
    // Matches dashed string for camelizing
    var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
    // Used by camelCase as callback to replace()
    function fcamelCase(_all, letter) {
        return letter.toUpperCase();
    }
    // Convert dashed to camelCase; used by the css and data modules
    // Support: IE <=9 - 11, Edge 12 - 15
    // Microsoft forgot to hump their vendor prefix (trac-9572)
    function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    }
    var acceptData = function(owner) {
        // Accepts only:
        //  - Node
        //    - Node.ELEMENT_NODE
        //    - Node.DOCUMENT_NODE
        //  - Object
        //    - Any
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
    };
    function Data() {
        this.expando = jQuery.expando + Data.uid++;
    }
    Data.uid = 1;
    Data.prototype = {
        cache: function(owner) {
            // Check if the owner object already has a cache
            var value = owner[this.expando];
            // If not, create one
            if (!value) {
                value = {};
                // We can accept data for non-element nodes in modern browsers,
                // but we should not, see trac-8335.
                // Always return an empty object.
                if (acceptData(owner)) {
                    // If it is a node unlikely to be stringify-ed or looped over
                    // use plain assignment
                    if (owner.nodeType) owner[this.expando] = value;
                    else Object.defineProperty(owner, this.expando, {
                        value: value,
                        configurable: true
                    });
                }
            }
            return value;
        },
        set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            // Handle: [ owner, key, value ] args
            // Always use camelCase key (gh-2257)
            if (typeof data === "string") cache[camelCase(data)] = value;
            else // Copy the properties one-by-one to the cache object
            for(prop in data)cache[camelCase(prop)] = data[prop];
            return cache;
        },
        get: function(owner, key) {
            return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
            owner[this.expando] && owner[this.expando][camelCase(key)];
        },
        access: function(owner, key, value) {
            // In cases where either:
            //
            //   1. No key was specified
            //   2. A string key was specified, but no value provided
            //
            // Take the "read" path and allow the get method to determine
            // which value to return, respectively either:
            //
            //   1. The entire cache object
            //   2. The data stored at the key
            //
            if (key === undefined || key && typeof key === "string" && value === undefined) return this.get(owner, key);
            // When the key is not a string, or both a key and value
            // are specified, set or extend (existing objects) with either:
            //
            //   1. An object of properties
            //   2. A key and value
            //
            this.set(owner, key, value);
            // Since the "set" path can have two possible entry points
            // return the expected data based on which path was taken[*]
            return value !== undefined ? value : key;
        },
        remove: function(owner, key) {
            var i, cache = owner[this.expando];
            if (cache === undefined) return;
            if (key !== undefined) {
                // Support array or space separated string of keys
                if (Array.isArray(key)) // If key is an array of keys...
                // We always set camelCase keys, so remove that.
                key = key.map(camelCase);
                else {
                    key = camelCase(key);
                    // If a key with the spaces exists, use it.
                    // Otherwise, create an array by matching non-whitespace
                    key = key in cache ? [
                        key
                    ] : key.match(rnothtmlwhite) || [];
                }
                i = key.length;
                while(i--)delete cache[key[i]];
            }
            // Remove the expando if there's no more data
            if (key === undefined || jQuery.isEmptyObject(cache)) {
                // Support: Chrome <=35 - 45
                // Webkit & Blink performance suffers when deleting properties
                // from DOM nodes, so set to undefined instead
                // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
                if (owner.nodeType) owner[this.expando] = undefined;
                else delete owner[this.expando];
            }
        },
        hasData: function(owner) {
            var cache = owner[this.expando];
            return cache !== undefined && !jQuery.isEmptyObject(cache);
        }
    };
    var dataPriv = new Data();
    var dataUser = new Data();
    //	Implementation Summary
    //
    //	1. Enforce API surface and semantic compatibility with 1.9.x branch
    //	2. Improve the module's maintainability by reducing the storage
    //		paths to a single mechanism.
    //	3. Use the same single mechanism to support "private" and "user" data.
    //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
    //	5. Avoid exposing implementation details on user objects (eg. expando properties)
    //	6. Provide a clear path for implementation upgrade to WeakMap in 2014
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
    function getData(data) {
        if (data === "true") return true;
        if (data === "false") return false;
        if (data === "null") return null;
        // Only convert to a number if it doesn't change the string
        if (data === +data + "") return +data;
        if (rbrace.test(data)) return JSON.parse(data);
        return data;
    }
    function dataAttr(elem, key, data) {
        var name;
        // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute
        if (data === undefined && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
                try {
                    data = getData(data);
                } catch (e) {}
                // Make sure we set the data so it isn't changed later
                dataUser.set(elem, key, data);
            } else data = undefined;
        }
        return data;
    }
    jQuery.extend({
        hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
            dataUser.remove(elem, name);
        },
        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
        }
    });
    jQuery.fn.extend({
        data: function(key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            // Gets all values
            if (key === undefined) {
                if (this.length) {
                    data = dataUser.get(elem);
                    if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                        i = attrs.length;
                        while(i--)// Support: IE 11 only
                        // The attrs elements can be null (trac-14894)
                        if (attrs[i]) {
                            name = attrs[i].name;
                            if (name.indexOf("data-") === 0) {
                                name = camelCase(name.slice(5));
                                dataAttr(elem, name, data[name]);
                            }
                        }
                        dataPriv.set(elem, "hasDataAttrs", true);
                    }
                }
                return data;
            }
            // Sets multiple values
            if (typeof key === "object") return this.each(function() {
                dataUser.set(this, key);
            });
            return access(this, function(value) {
                var data;
                // The calling jQuery object (element matches) is not empty
                // (and therefore has an element appears at this[ 0 ]) and the
                // `value` parameter was not undefined. An empty jQuery object
                // will result in `undefined` for elem = this[ 0 ] which will
                // throw an exception if an attempt to read a data cache is made.
                if (elem && value === undefined) {
                    // Attempt to get data from the cache
                    // The key will always be camelCased in Data
                    data = dataUser.get(elem, key);
                    if (data !== undefined) return data;
                    // Attempt to "discover" the data in
                    // HTML5 custom data-* attrs
                    data = dataAttr(elem, key);
                    if (data !== undefined) return data;
                    // We tried really hard, but the data doesn't exist.
                    return;
                }
                // Set the data...
                this.each(function() {
                    // We always store the camelCased key
                    dataUser.set(this, key, value);
                });
            }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
            return this.each(function() {
                dataUser.remove(this, key);
            });
        }
    });
    jQuery.extend({
        queue: function(elem, type, data) {
            var queue;
            if (elem) {
                type = (type || "fx") + "queue";
                queue = dataPriv.get(elem, type);
                // Speed up dequeue by getting out quickly if this is just a lookup
                if (data) {
                    if (!queue || Array.isArray(data)) queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                    else queue.push(data);
                }
                return queue || [];
            }
        },
        dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                jQuery.dequeue(elem, type);
            };
            // If the fx queue is dequeued, always remove the progress sentinel
            if (fn === "inprogress") {
                fn = queue.shift();
                startLength--;
            }
            if (fn) {
                // Add a progress sentinel to prevent the fx queue from being
                // automatically dequeued
                if (type === "fx") queue.unshift("inprogress");
                // Clear up the last queue stop function
                delete hooks.stop;
                fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) hooks.empty.fire();
        },
        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    dataPriv.remove(elem, [
                        type + "queue",
                        key
                    ]);
                })
            });
        }
    });
    jQuery.fn.extend({
        queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
                data = type;
                type = "fx";
                setter--;
            }
            if (arguments.length < setter) return jQuery.queue(this[0], type);
            return data === undefined ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data);
                // Ensure a hooks for this queue
                jQuery._queueHooks(this, type);
                if (type === "fx" && queue[0] !== "inprogress") jQuery.dequeue(this, type);
            });
        },
        dequeue: function(type) {
            return this.each(function() {
                jQuery.dequeue(this, type);
            });
        },
        clearQueue: function(type) {
            return this.queue(type || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                if (!--count) defer.resolveWith(elements, [
                    elements
                ]);
            };
            if (typeof type !== "string") {
                obj = type;
                type = undefined;
            }
            type = type || "fx";
            while(i--){
                tmp = dataPriv.get(elements[i], type + "queueHooks");
                if (tmp && tmp.empty) {
                    count++;
                    tmp.empty.add(resolve);
                }
            }
            resolve();
            return defer.promise(obj);
        }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
    var cssExpand = [
        "Top",
        "Right",
        "Bottom",
        "Left"
    ];
    var documentElement = document.documentElement;
    var isAttached = function(elem) {
        return jQuery.contains(elem.ownerDocument, elem);
    }, composed = {
        composed: true
    };
    // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
    // Check attachment across shadow DOM boundaries when possible (gh-3504)
    // Support: iOS 10.0-10.2 only
    // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
    // leading to errors. We need to check for `getRootNode`.
    if (documentElement.getRootNode) isAttached = function(elem) {
        return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
    };
    var isHiddenWithinTree = function(elem, el) {
        // isHiddenWithinTree might be called from jQuery#filter function;
        // in that case, element will be second argument
        elem = el || elem;
        // Inline style trumps all
        return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        isAttached(elem) && jQuery.css(elem, "display") === "none";
    };
    function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
        } : function() {
            return jQuery.css(elem, prop, "");
        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), // Starting value computation is required for potential unit mismatches
        initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
            // Support: Firefox <=54
            // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
            initial = initial / 2;
            // Trust units reported by jQuery.css
            unit = unit || initialInUnit[3];
            // Iteratively approximate from a nonzero starting point
            initialInUnit = +initial || 1;
            while(maxIterations--){
                // Evaluate and update our best guess (doubling guesses that zero out).
                // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
                jQuery.style(elem, prop, initialInUnit + unit);
                if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) maxIterations = 0;
                initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery.style(elem, prop, initialInUnit + unit);
            // Make sure we update the tween properties later on
            valueParts = valueParts || [];
        }
        if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            // Apply relative offset (+=/-=) if specified
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
                tween.unit = unit;
                tween.start = initialInUnit;
                tween.end = adjusted;
            }
        }
        return adjusted;
    }
    var defaultDisplayMap = {};
    function getDefaultDisplay(elem) {
        var temp, doc = elem.ownerDocument, nodeName = elem.nodeName, display = defaultDisplayMap[nodeName];
        if (display) return display;
        temp = doc.body.appendChild(doc.createElement(nodeName));
        display = jQuery.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") display = "block";
        defaultDisplayMap[nodeName] = display;
        return display;
    }
    function showHide(elements, show) {
        var display, elem, values = [], index = 0, length = elements.length;
        // Determine new display value for elements that need to change
        for(; index < length; index++){
            elem = elements[index];
            if (!elem.style) continue;
            display = elem.style.display;
            if (show) {
                // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
                // check is required in this first loop unless we have a nonempty display value (either
                // inline or about-to-be-restored)
                if (display === "none") {
                    values[index] = dataPriv.get(elem, "display") || null;
                    if (!values[index]) elem.style.display = "";
                }
                if (elem.style.display === "" && isHiddenWithinTree(elem)) values[index] = getDefaultDisplay(elem);
            } else if (display !== "none") {
                values[index] = "none";
                // Remember what we're overwriting
                dataPriv.set(elem, "display", display);
            }
        }
        // Set the display of the elements in a second loop to avoid constant reflow
        for(index = 0; index < length; index++)if (values[index] != null) elements[index].style.display = values[index];
        return elements;
    }
    jQuery.fn.extend({
        show: function() {
            return showHide(this, true);
        },
        hide: function() {
            return showHide(this);
        },
        toggle: function(state) {
            if (typeof state === "boolean") return state ? this.show() : this.hide();
            return this.each(function() {
                if (isHiddenWithinTree(this)) jQuery(this).show();
                else jQuery(this).hide();
            });
        }
    });
    var rcheckableType = /^(?:checkbox|radio)$/i;
    var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
    var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
    (function() {
        var fragment = document.createDocumentFragment(), div = fragment.appendChild(document.createElement("div")), input = document.createElement("input");
        // Support: Android 4.0 - 4.3 only
        // Check state lost if the name is set (trac-11217)
        // Support: Windows Web Apps (WWA)
        // `name` and `type` must use .setAttribute for WWA (trac-14901)
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        // Support: Android <=4.1 only
        // Older WebKit doesn't clone checked state correctly in fragments
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        // Support: IE <=11 only
        // Make sure textarea (and checkbox) defaultValue is properly cloned
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        // Support: IE <=9 only
        // IE <=9 replaces <option> tags with their contents when inserted outside of
        // the select element.
        div.innerHTML = "<option></option>";
        support.option = !!div.lastChild;
    })();
    // We have to close these tags to support XHTML (trac-13200)
    var wrapMap = {
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [
            1,
            "<table>",
            "</table>"
        ],
        col: [
            2,
            "<table><colgroup>",
            "</colgroup></table>"
        ],
        tr: [
            2,
            "<table><tbody>",
            "</tbody></table>"
        ],
        td: [
            3,
            "<table><tbody><tr>",
            "</tr></tbody></table>"
        ],
        _default: [
            0,
            "",
            ""
        ]
    };
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    // Support: IE <=9 only
    if (!support.option) wrapMap.optgroup = wrapMap.option = [
        1,
        "<select multiple='multiple'>",
        "</select>"
    ];
    function getAll(context, tag) {
        // Support: IE <=9 - 11 only
        // Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
        var ret;
        if (typeof context.getElementsByTagName !== "undefined") ret = context.getElementsByTagName(tag || "*");
        else if (typeof context.querySelectorAll !== "undefined") ret = context.querySelectorAll(tag || "*");
        else ret = [];
        if (tag === undefined || tag && nodeName(context, tag)) return jQuery.merge([
            context
        ], ret);
        return ret;
    }
    // Mark scripts as having already been evaluated
    function setGlobalEval(elems, refElements) {
        var i = 0, l = elems.length;
        for(; i < l; i++)dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
    var rhtml = /<|&#?\w+;/;
    function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
        for(; i < l; i++){
            elem = elems[i];
            if (elem || elem === 0) {
                // Add nodes directly
                if (toType(elem) === "object") // Support: Android <=4.0 only, PhantomJS 1 only
                // push.apply(_, arraylike) throws on ancient WebKit
                jQuery.merge(nodes, elem.nodeType ? [
                    elem
                ] : elem);
                else if (!rhtml.test(elem)) nodes.push(context.createTextNode(elem));
                else {
                    tmp = tmp || fragment.appendChild(context.createElement("div"));
                    // Deserialize a standard representation
                    tag = (rtagName.exec(elem) || [
                        "",
                        ""
                    ])[1].toLowerCase();
                    wrap = wrapMap[tag] || wrapMap._default;
                    tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                    // Descend through wrappers to the right content
                    j = wrap[0];
                    while(j--)tmp = tmp.lastChild;
                    // Support: Android <=4.0 only, PhantomJS 1 only
                    // push.apply(_, arraylike) throws on ancient WebKit
                    jQuery.merge(nodes, tmp.childNodes);
                    // Remember the top-level container
                    tmp = fragment.firstChild;
                    // Ensure the created nodes are orphaned (trac-12392)
                    tmp.textContent = "";
                }
            }
        }
        // Remove wrapper from fragment
        fragment.textContent = "";
        i = 0;
        while(elem = nodes[i++]){
            // Skip elements already in the context collection (trac-4087)
            if (selection && jQuery.inArray(elem, selection) > -1) {
                if (ignored) ignored.push(elem);
                continue;
            }
            attached = isAttached(elem);
            // Append to fragment
            tmp = getAll(fragment.appendChild(elem), "script");
            // Preserve script evaluation history
            if (attached) setGlobalEval(tmp);
            // Capture executables
            if (scripts) {
                j = 0;
                while(elem = tmp[j++])if (rscriptType.test(elem.type || "")) scripts.push(elem);
            }
        }
        return fragment;
    }
    var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
    function returnTrue() {
        return true;
    }
    function returnFalse() {
        return false;
    }
    function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        // Types can be a map of types/handlers
        if (typeof types === "object") {
            // ( types-Object, selector, data )
            if (typeof selector !== "string") {
                // ( types-Object, data )
                data = data || selector;
                selector = undefined;
            }
            for(type in types)on(elem, type, selector, data, types[type], one);
            return elem;
        }
        if (data == null && fn == null) {
            // ( types, fn )
            fn = selector;
            data = selector = undefined;
        } else if (fn == null) {
            if (typeof selector === "string") {
                // ( types, selector, fn )
                fn = data;
                data = undefined;
            } else {
                // ( types, data, fn )
                fn = data;
                data = selector;
                selector = undefined;
            }
        }
        if (fn === false) fn = returnFalse;
        else if (!fn) return elem;
        if (one === 1) {
            origFn = fn;
            fn = function(event) {
                // Can use an empty set, since event contains the info
                jQuery().off(event);
                return origFn.apply(this, arguments);
            };
            // Use same guid so caller can remove using origFn
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
        }
        return elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector);
        });
    }
    /*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */ jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            // Only attach events to objects that accept data
            if (!acceptData(elem)) return;
            // Caller can pass in an object of custom data in lieu of the handler
            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            }
            // Ensure that invalid selectors throw exceptions at attach time
            // Evaluate against documentElement in case elem is a non-element node (e.g., document)
            if (selector) jQuery.find.matchesSelector(documentElement, selector);
            // Make sure that the handler has a unique ID, used to find/remove it later
            if (!handler.guid) handler.guid = jQuery.guid++;
            // Init the element's event structure and main handler, if this is the first
            if (!(events = elemData.events)) events = elemData.events = Object.create(null);
            if (!(eventHandle = elemData.handle)) eventHandle = elemData.handle = function(e) {
                // Discard the second event of a jQuery.event.trigger() and
                // when an event is called after a page has unloaded
                return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
            };
            // Handle multiple events separated by a space
            types = (types || "").match(rnothtmlwhite) || [
                ""
            ];
            t = types.length;
            while(t--){
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                // There *must* be a type, no attaching namespace-only handlers
                if (!type) continue;
                // If event changes its type, use the special event handlers for the changed type
                special = jQuery.event.special[type] || {};
                // If selector defined, determine special event api type, otherwise given type
                type = (selector ? special.delegateType : special.bindType) || type;
                // Update special based on newly reset type
                special = jQuery.event.special[type] || {};
                // handleObj is passed to all event handlers
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn);
                // Init the event handler queue if we're the first
                if (!(handlers = events[type])) {
                    handlers = events[type] = [];
                    handlers.delegateCount = 0;
                    // Only use addEventListener if the special events handler returns false
                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                        if (elem.addEventListener) elem.addEventListener(type, eventHandle);
                    }
                }
                if (special.add) {
                    special.add.call(elem, handleObj);
                    if (!handleObj.handler.guid) handleObj.handler.guid = handler.guid;
                }
                // Add to the element's handler list, delegates in front
                if (selector) handlers.splice(handlers.delegateCount++, 0, handleObj);
                else handlers.push(handleObj);
                // Keep track of which events have ever been used, for event optimization
                jQuery.event.global[type] = true;
            }
        },
        // Detach an event or set of events from an element
        remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) return;
            // Once for each type.namespace in types; type may be omitted
            types = (types || "").match(rnothtmlwhite) || [
                ""
            ];
            t = types.length;
            while(t--){
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                // Unbind all events (on this namespace, if provided) for the element
                if (!type) {
                    for(type in events)jQuery.event.remove(elem, type + types[t], handler, selector, true);
                    continue;
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                // Remove matching events
                origCount = j = handlers.length;
                while(j--){
                    handleObj = handlers[j];
                    if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                        handlers.splice(j, 1);
                        if (handleObj.selector) handlers.delegateCount--;
                        if (special.remove) special.remove.call(elem, handleObj);
                    }
                }
                // Remove generic event handler if we removed something and no more handlers exist
                // (avoids potential for endless recursion during removal of special event handlers)
                if (origCount && !handlers.length) {
                    if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) jQuery.removeEvent(elem, type, elemData.handle);
                    delete events[type];
                }
            }
            // Remove data and the expando if it's no longer used
            if (jQuery.isEmptyObject(events)) dataPriv.remove(elem, "handle events");
        },
        dispatch: function(nativeEvent) {
            var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), // Make a writable jQuery.Event from the native event object
            event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
            // Use the fix-ed jQuery.Event rather than the (read-only) native event
            args[0] = event;
            for(i = 1; i < arguments.length; i++)args[i] = arguments[i];
            event.delegateTarget = this;
            // Call the preDispatch hook for the mapped type, and let it bail if desired
            if (special.preDispatch && special.preDispatch.call(this, event) === false) return;
            // Determine handlers
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            // Run delegates first; they may want to stop propagation beneath us
            i = 0;
            while((matched = handlerQueue[i++]) && !event.isPropagationStopped()){
                event.currentTarget = matched.elem;
                j = 0;
                while((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped())// If the event is namespaced, then each handler is only invoked if it is
                // specially universal or its namespaces are a superset of the event's.
                if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                    event.handleObj = handleObj;
                    event.data = handleObj.data;
                    ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                    if (ret !== undefined) {
                        if ((event.result = ret) === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                    }
                }
            }
            // Call the postDispatch hook for the mapped type
            if (special.postDispatch) special.postDispatch.call(this, event);
            return event.result;
        },
        handlers: function(event, handlers) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            // Find delegate handlers
            if (delegateCount && // Support: IE <=9
            // Black-hole SVG <use> instance trees (trac-13180)
            cur.nodeType && // Support: Firefox <=42
            // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
            // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
            // Support: IE 11 only
            // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
            !(event.type === "click" && event.button >= 1)) {
                for(; cur !== this; cur = cur.parentNode || this)// Don't check non-elements (trac-13208)
                // Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                    matchedHandlers = [];
                    matchedSelectors = {};
                    for(i = 0; i < delegateCount; i++){
                        handleObj = handlers[i];
                        // Don't conflict with Object.prototype properties (trac-13203)
                        sel = handleObj.selector + " ";
                        if (matchedSelectors[sel] === undefined) matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [
                            cur
                        ]).length;
                        if (matchedSelectors[sel]) matchedHandlers.push(handleObj);
                    }
                    if (matchedHandlers.length) handlerQueue.push({
                        elem: cur,
                        handlers: matchedHandlers
                    });
                }
            }
            // Add the remaining (directly-bound) handlers
            cur = this;
            if (delegateCount < handlers.length) handlerQueue.push({
                elem: cur,
                handlers: handlers.slice(delegateCount)
            });
            return handlerQueue;
        },
        addProp: function(name, hook) {
            Object.defineProperty(jQuery.Event.prototype, name, {
                enumerable: true,
                configurable: true,
                get: isFunction(hook) ? function() {
                    if (this.originalEvent) return hook(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[name];
                },
                set: function(value) {
                    Object.defineProperty(this, name, {
                        enumerable: true,
                        configurable: true,
                        writable: true,
                        value: value
                    });
                }
            });
        },
        fix: function(originalEvent) {
            return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
        },
        special: {
            load: {
                // Prevent triggered image.load events from bubbling to window.load
                noBubble: true
            },
            click: {
                // Utilize native event to ensure correct state for checkable inputs
                setup: function(data) {
                    // For mutual compressibility with _default, replace `this` access with a local var.
                    // `|| data` is dead code meant only to preserve the variable through minification.
                    var el = this || data;
                    // Claim the first handler
                    if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) // dataPriv.set( el, "click", ... )
                    leverageNative(el, "click", true);
                    // Return false to allow normal processing in the caller
                    return false;
                },
                trigger: function(data) {
                    // For mutual compressibility with _default, replace `this` access with a local var.
                    // `|| data` is dead code meant only to preserve the variable through minification.
                    var el = this || data;
                    // Force setup before triggering a click
                    if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) leverageNative(el, "click");
                    // Return non-false to allow normal event-path propagation
                    return true;
                },
                // For cross-browser consistency, suppress native .click() on links
                // Also prevent it if we're currently inside a leveraged native-event stack
                _default: function(event) {
                    var target = event.target;
                    return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(event) {
                    // Support: Firefox 20+
                    // Firefox doesn't alert if the returnValue field is not set.
                    if (event.result !== undefined && event.originalEvent) event.originalEvent.returnValue = event.result;
                }
            }
        }
    };
    // Ensure the presence of an event listener that handles manually-triggered
    // synthetic events by interrupting progress until reinvoked in response to
    // *native* events that it fires directly, ensuring that state changes have
    // already occurred before other listeners are invoked.
    function leverageNative(el, type, isSetup) {
        // Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
        if (!isSetup) {
            if (dataPriv.get(el, type) === undefined) jQuery.event.add(el, type, returnTrue);
            return;
        }
        // Register the controller as a special universal handler for all event namespaces
        dataPriv.set(el, type, false);
        jQuery.event.add(el, type, {
            namespace: false,
            handler: function(event) {
                var result, saved = dataPriv.get(this, type);
                if (event.isTrigger & 1 && this[type]) {
                    // Interrupt processing of the outer synthetic .trigger()ed event
                    if (!saved) {
                        // Store arguments for use when handling the inner native event
                        // There will always be at least one argument (an event object), so this array
                        // will not be confused with a leftover capture object.
                        saved = slice.call(arguments);
                        dataPriv.set(this, type, saved);
                        // Trigger the native event and capture its result
                        this[type]();
                        result = dataPriv.get(this, type);
                        dataPriv.set(this, type, false);
                        if (saved !== result) {
                            // Cancel the outer synthetic event
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            return result;
                        }
                    // If this is an inner synthetic event for an event with a bubbling surrogate
                    // (focus or blur), assume that the surrogate already propagated from triggering
                    // the native event and prevent that from happening again here.
                    // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
                    // bubbling surrogate propagates *after* the non-bubbling base), but that seems
                    // less bad than duplication.
                    } else if ((jQuery.event.special[type] || {}).delegateType) event.stopPropagation();
                // If this is a native event triggered above, everything is now in order
                // Fire an inner synthetic event with the original arguments
                } else if (saved) {
                    // ...and capture the result
                    dataPriv.set(this, type, jQuery.event.trigger(saved[0], saved.slice(1), this));
                    // Abort handling of the native event by all jQuery handlers while allowing
                    // native handlers on the same element to run. On target, this is achieved
                    // by stopping immediate propagation just on the jQuery event. However,
                    // the native event is re-wrapped by a jQuery one on each level of the
                    // propagation so the only way to stop it for jQuery is to stop it for
                    // everyone via native `stopPropagation()`. This is not a problem for
                    // focus/blur which don't bubble, but it does also stop click on checkboxes
                    // and radios. We accept this limitation.
                    event.stopPropagation();
                    event.isImmediatePropagationStopped = returnTrue;
                }
            }
        });
    }
    jQuery.removeEvent = function(elem, type, handle) {
        // This "if" is needed for plain objects
        if (elem.removeEventListener) elem.removeEventListener(type, handle);
    };
    jQuery.Event = function(src, props) {
        // Allow instantiation without the 'new' keyword
        if (!(this instanceof jQuery.Event)) return new jQuery.Event(src, props);
        // Event object
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            // Events bubbling up the document may have been marked as prevented
            // by a handler lower down the tree; reflect the correct value.
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
            src.returnValue === false ? returnTrue : returnFalse;
            // Create target properties
            // Support: Safari <=6 - 7 only
            // Target should not be a text node (trac-504, trac-13143)
            this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
        // Event type
        } else this.type = src;
        // Put explicitly provided properties onto the event object
        if (props) jQuery.extend(this, props);
        // Create a timestamp if incoming event doesn't have one
        this.timeStamp = src && src.timeStamp || Date.now();
        // Mark it as fixed
        this[jQuery.expando] = true;
    };
    // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
    // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && !this.isSimulated) e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && !this.isSimulated) e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && !this.isSimulated) e.stopImmediatePropagation();
            this.stopPropagation();
        }
    };
    // Includes all common event props including KeyEvent and MouseEvent specific props
    jQuery.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: true
    }, jQuery.event.addProp);
    jQuery.each({
        focus: "focusin",
        blur: "focusout"
    }, function(type, delegateType) {
        function focusMappedHandler(nativeEvent) {
            if (document.documentMode) {
                // Support: IE 11+
                // Attach a single focusin/focusout handler on the document while someone wants
                // focus/blur. This is because the former are synchronous in IE while the latter
                // are async. In other browsers, all those handlers are invoked synchronously.
                // `handle` from private data would already wrap the event, but we need
                // to change the `type` here.
                var handle = dataPriv.get(this, "handle"), event = jQuery.event.fix(nativeEvent);
                event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
                event.isSimulated = true;
                // First, handle focusin/focusout
                handle(nativeEvent);
                // ...then, handle focus/blur
                //
                // focus/blur don't bubble while focusin/focusout do; simulate the former by only
                // invoking the handler at the lower level.
                if (event.target === event.currentTarget) // The setup part calls `leverageNative`, which, in turn, calls
                // `jQuery.event.add`, so event handle will already have been set
                // by this point.
                handle(event);
            } else // For non-IE browsers, attach a single capturing handler on the document
            // while someone wants focusin/focusout.
            jQuery.event.simulate(delegateType, nativeEvent.target, jQuery.event.fix(nativeEvent));
        }
        jQuery.event.special[type] = {
            // Utilize native event if possible so blur/focus sequence is correct
            setup: function() {
                var attaches;
                // Claim the first handler
                // dataPriv.set( this, "focus", ... )
                // dataPriv.set( this, "blur", ... )
                leverageNative(this, type, true);
                if (document.documentMode) {
                    // Support: IE 9 - 11+
                    // We use the same native handler for focusin & focus (and focusout & blur)
                    // so we need to coordinate setup & teardown parts between those events.
                    // Use `delegateType` as the key as `type` is already used by `leverageNative`.
                    attaches = dataPriv.get(this, delegateType);
                    if (!attaches) this.addEventListener(delegateType, focusMappedHandler);
                    dataPriv.set(this, delegateType, (attaches || 0) + 1);
                } else // Return false to allow normal processing in the caller
                return false;
            },
            trigger: function() {
                // Force setup before trigger
                leverageNative(this, type);
                // Return non-false to allow normal event-path propagation
                return true;
            },
            teardown: function() {
                var attaches;
                if (document.documentMode) {
                    attaches = dataPriv.get(this, delegateType) - 1;
                    if (!attaches) {
                        this.removeEventListener(delegateType, focusMappedHandler);
                        dataPriv.remove(this, delegateType);
                    } else dataPriv.set(this, delegateType, attaches);
                } else // Return false to indicate standard teardown should be applied
                return false;
            },
            // Suppress native focus or blur if we're currently inside
            // a leveraged native-event stack
            _default: function(event) {
                return dataPriv.get(event.target, type);
            },
            delegateType: delegateType
        };
        // Support: Firefox <=44
        // Firefox doesn't have focus(in | out) events
        // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
        //
        // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
        // focus(in | out) events fire after focus & blur events,
        // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
        // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
        //
        // Support: IE 9 - 11+
        // To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
        // attach a single handler for both events in IE.
        jQuery.event.special[delegateType] = {
            setup: function() {
                // Handle: regular nodes (via `this.ownerDocument`), window
                // (via `this.document`) & document (via `this`).
                var doc = this.ownerDocument || this.document || this, dataHolder = document.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
                // Support: IE 9 - 11+
                // We use the same native handler for focusin & focus (and focusout & blur)
                // so we need to coordinate setup & teardown parts between those events.
                // Use `delegateType` as the key as `type` is already used by `leverageNative`.
                if (!attaches) {
                    if (document.documentMode) this.addEventListener(delegateType, focusMappedHandler);
                    else doc.addEventListener(type, focusMappedHandler, true);
                }
                dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
            },
            teardown: function() {
                var doc = this.ownerDocument || this.document || this, dataHolder = document.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
                if (!attaches) {
                    if (document.documentMode) this.removeEventListener(delegateType, focusMappedHandler);
                    else doc.removeEventListener(type, focusMappedHandler, true);
                    dataPriv.remove(dataHolder, delegateType);
                } else dataPriv.set(dataHolder, delegateType, attaches);
            }
        };
    });
    // Create mouseenter/leave events using mouseover/out and event-time checks
    // so that event delegation works in jQuery.
    // Do the same for pointerenter/pointerleave and pointerover/pointerout
    //
    // Support: Safari 7 only
    // Safari sends mouseenter too often; see:
    // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
    // for the description of the bug (it existed in older Chrome versions as well).
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
                var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                // For mouseenter/leave call the handler if related is outside the target.
                // NB: No relatedTarget if the mouse left/entered the browser window
                if (!related || related !== target && !jQuery.contains(target, related)) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix;
                }
                return ret;
            }
        };
    });
    jQuery.fn.extend({
        on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
        },
        one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
                // ( event )  dispatched jQuery.Event
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                return this;
            }
            if (typeof types === "object") {
                // ( types-object [, selector] )
                for(type in types)this.off(type, selector, types[type]);
                return this;
            }
            if (selector === false || typeof selector === "function") {
                // ( types [, fn] )
                fn = selector;
                selector = undefined;
            }
            if (fn === false) fn = returnFalse;
            return this.each(function() {
                jQuery.event.remove(this, types, fn, selector);
            });
        }
    });
    var // Support: IE <=10 - 11, Edge 12 - 13 only
    // In IE/Edge using regex groups here causes severe slowdowns.
    // See https://connect.microsoft.com/IE/feedback/details/1736512/
    rnoInnerhtml = /<script|<style|<link/i, // checked="checked" or checked
    rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    // Prefer a tbody over its parent table for containing new rows
    function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) return jQuery(elem).children("tbody")[0] || elem;
        return elem;
    }
    // Replace/restore the type attribute of script elements for safe DOM manipulation
    function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
    }
    function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") elem.type = elem.type.slice(5);
        else elem.removeAttribute("type");
        return elem;
    }
    function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, udataOld, udataCur, events;
        if (dest.nodeType !== 1) return;
        // 1. Copy private data: events, handlers, etc.
        if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
                dataPriv.remove(dest, "handle events");
                for(type in events)for(i = 0, l = events[type].length; i < l; i++)jQuery.event.add(dest, type, events[type][i]);
            }
        }
        // 2. Copy user data
        if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery.extend({}, udataOld);
            dataUser.set(dest, udataCur);
        }
    }
    // Fix IE bugs, see support tests
    function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase();
        // Fails to persist the checked state of a cloned checkbox or radio button.
        if (nodeName === "input" && rcheckableType.test(src.type)) dest.checked = src.checked;
        else if (nodeName === "input" || nodeName === "textarea") dest.defaultValue = src.defaultValue;
    }
    function domManip(collection, args, callback, ignored) {
        // Flatten any nested arrays
        args = flat(args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
        // We can't cloneNode fragments that contain checked, in WebKit
        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) return collection.each(function(index) {
            var self = collection.eq(index);
            if (valueIsFunction) args[0] = value.call(this, index, self.html());
            domManip(self, args, callback, ignored);
        });
        if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) fragment = first;
            // Require either new content or an interest in ignored elements to invoke the callback
            if (first || ignored) {
                scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                hasScripts = scripts.length;
                // Use the original fragment for the last item
                // instead of the first because it can end up
                // being emptied incorrectly in certain situations (trac-8070).
                for(; i < l; i++){
                    node = fragment;
                    if (i !== iNoClone) {
                        node = jQuery.clone(node, true, true);
                        // Keep references to cloned scripts for later restoration
                        if (hasScripts) // Support: Android <=4.0 only, PhantomJS 1 only
                        // push.apply(_, arraylike) throws on ancient WebKit
                        jQuery.merge(scripts, getAll(node, "script"));
                    }
                    callback.call(collection[i], node, i);
                }
                if (hasScripts) {
                    doc = scripts[scripts.length - 1].ownerDocument;
                    // Re-enable scripts
                    jQuery.map(scripts, restoreScript);
                    // Evaluate executable scripts on first document insertion
                    for(i = 0; i < hasScripts; i++){
                        node = scripts[i];
                        if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                            if (node.src && (node.type || "").toLowerCase() !== "module") // Optional AJAX dependency, but won't run scripts if not present
                            {
                                if (jQuery._evalUrl && !node.noModule) jQuery._evalUrl(node.src, {
                                    nonce: node.nonce || node.getAttribute("nonce")
                                }, doc);
                            } else // Unwrap a CDATA section containing script contents. This shouldn't be
                            // needed as in XML documents they're already not visible when
                            // inspecting element contents and in HTML documents they have no
                            // meaning but we're preserving that logic for backwards compatibility.
                            // This will be removed completely in 4.0. See gh-4904.
                            DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                        }
                    }
                }
            }
        }
        return collection;
    }
    function remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
        for(; (node = nodes[i]) != null; i++){
            if (!keepData && node.nodeType === 1) jQuery.cleanData(getAll(node));
            if (node.parentNode) {
                if (keepData && isAttached(node)) setGlobalEval(getAll(node, "script"));
                node.parentNode.removeChild(node);
            }
        }
        return elem;
    }
    jQuery.extend({
        htmlPrefilter: function(html) {
            return html;
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
            // Fix IE cloning issues
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                // We eschew jQuery#find here for performance reasons:
                // https://jsperf.com/getall-vs-sizzle/2
                destElements = getAll(clone);
                srcElements = getAll(elem);
                for(i = 0, l = srcElements.length; i < l; i++)fixInput(srcElements[i], destElements[i]);
            }
            // Copy the events from the original to the clone
            if (dataAndEvents) {
                if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);
                    for(i = 0, l = srcElements.length; i < l; i++)cloneCopyEvent(srcElements[i], destElements[i]);
                } else cloneCopyEvent(elem, clone);
            }
            // Preserve script evaluation history
            destElements = getAll(clone, "script");
            if (destElements.length > 0) setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            // Return the cloned set
            return clone;
        },
        cleanData: function(elems) {
            var data, elem, type, special = jQuery.event.special, i = 0;
            for(; (elem = elems[i]) !== undefined; i++)if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                    if (data.events) {
                        for(type in data.events)if (special[type]) jQuery.event.remove(elem, type);
                        else jQuery.removeEvent(elem, type, data.handle);
                    }
                    // Support: Chrome <=35 - 45+
                    // Assign undefined instead of using delete, see Data#remove
                    elem[dataPriv.expando] = undefined;
                }
                if (elem[dataUser.expando]) // Support: Chrome <=35 - 45+
                // Assign undefined instead of using delete, see Data#remove
                elem[dataUser.expando] = undefined;
            }
        }
    });
    jQuery.fn.extend({
        detach: function(selector) {
            return remove(this, selector, true);
        },
        remove: function(selector) {
            return remove(this, selector);
        },
        text: function(value) {
            return access(this, function(value) {
                return value === undefined ? jQuery.text(this) : this.empty().each(function() {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) this.textContent = value;
                });
            }, null, value, arguments.length);
        },
        append: function() {
            return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                }
            });
        },
        prepend: function() {
            return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                }
            });
        },
        before: function() {
            return domManip(this, arguments, function(elem) {
                if (this.parentNode) this.parentNode.insertBefore(elem, this);
            });
        },
        after: function() {
            return domManip(this, arguments, function(elem) {
                if (this.parentNode) this.parentNode.insertBefore(elem, this.nextSibling);
            });
        },
        empty: function() {
            var elem, i = 0;
            for(; (elem = this[i]) != null; i++)if (elem.nodeType === 1) {
                // Prevent memory leaks
                jQuery.cleanData(getAll(elem, false));
                // Remove any remaining nodes
                elem.textContent = "";
            }
            return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },
        html: function(value) {
            return access(this, function(value) {
                var elem = this[0] || {}, i = 0, l = this.length;
                if (value === undefined && elem.nodeType === 1) return elem.innerHTML;
                // See if we can take a shortcut and just use innerHTML
                if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || [
                    "",
                    ""
                ])[1].toLowerCase()]) {
                    value = jQuery.htmlPrefilter(value);
                    try {
                        for(; i < l; i++){
                            elem = this[i] || {};
                            // Remove element nodes and prevent memory leaks
                            if (elem.nodeType === 1) {
                                jQuery.cleanData(getAll(elem, false));
                                elem.innerHTML = value;
                            }
                        }
                        elem = 0;
                    // If using innerHTML throws an exception, use the fallback method
                    } catch (e) {}
                }
                if (elem) this.empty().append(value);
            }, null, value, arguments.length);
        },
        replaceWith: function() {
            var ignored = [];
            // Make the changes, replacing each non-ignored context element with the new content
            return domManip(this, arguments, function(elem) {
                var parent = this.parentNode;
                if (jQuery.inArray(this, ignored) < 0) {
                    jQuery.cleanData(getAll(this));
                    if (parent) parent.replaceChild(elem, this);
                }
            // Force callback invocation
            }, ignored);
        }
    });
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
            for(; i <= last; i++){
                elems = i === last ? this : this.clone(true);
                jQuery(insert[i])[original](elems);
                // Support: Android <=4.0 only, PhantomJS 1 only
                // .get() because push.apply(_, arraylike) throws on ancient WebKit
                push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
        };
    });
    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
    var rcustomProp = /^--/;
    var getStyles = function(elem) {
        // Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) view = window1;
        return view.getComputedStyle(elem);
    };
    var swap = function(elem, options, callback) {
        var ret, name, old = {};
        // Remember the old values, and insert the new ones
        for(name in options){
            old[name] = elem.style[name];
            elem.style[name] = options[name];
        }
        ret = callback.call(elem);
        // Revert the old values
        for(name in options)elem.style[name] = old[name];
        return ret;
    };
    var rboxStyle = new RegExp(cssExpand.join("|"), "i");
    (function() {
        // Executing both pixelPosition & boxSizingReliable tests require only one layout
        // so they're executed at the same time to save the second computation.
        function computeStyleTests() {
            // This is a singleton, we need to execute it only once
            if (!div) return;
            container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window1.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
            // Some styles come back with percentage values, even though they shouldn't
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            // Support: IE 9 - 11 only
            // Detect misreporting of content dimensions for box-sizing:border-box elements
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            // Support: IE 9 only
            // Detect overflow:scroll screwiness (gh-3699)
            // Support: Chrome <=64
            // Don't get tricked when zoom affects offsetWidth (gh-4029)
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container);
            // Nullify the div so it wouldn't be stored in the memory and
            // it will also be a sign that checks already performed
            div = null;
        }
        function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
        }
        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
        // Finish early in limited (non-browser) environments
        if (!div.style) return;
        // Support: IE <=9 - 11 only
        // Style of cloned element affects source element cloned (trac-8908)
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery.extend(support, {
            boxSizingReliable: function() {
                computeStyleTests();
                return boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
                computeStyleTests();
                return pixelBoxStylesVal;
            },
            pixelPosition: function() {
                computeStyleTests();
                return pixelPositionVal;
            },
            reliableMarginLeft: function() {
                computeStyleTests();
                return reliableMarginLeftVal;
            },
            scrollboxSize: function() {
                computeStyleTests();
                return scrollboxSizeVal;
            },
            // Support: IE 9 - 11+, Edge 15 - 18+
            // IE/Edge misreport `getComputedStyle` of table rows with width/height
            // set in CSS while `offset*` properties report correct values.
            // Behavior in IE 9 is more subtle than in newer versions & it passes
            // some versions of this test; make sure not to make it pass there!
            //
            // Support: Firefox 70+
            // Only Firefox includes border widths
            // in computed dimensions. (gh-4529)
            reliableTrDimensions: function() {
                var table, tr, trChild, trStyle;
                if (reliableTrDimensionsVal == null) {
                    table = document.createElement("table");
                    tr = document.createElement("tr");
                    trChild = document.createElement("div");
                    table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                    tr.style.cssText = "box-sizing:content-box;border:1px solid";
                    // Support: Chrome 86+
                    // Height set through cssText does not get applied.
                    // Computed height then comes back as 0.
                    tr.style.height = "1px";
                    trChild.style.height = "9px";
                    // Support: Android 8 Chrome 86+
                    // In our bodyBackground.html iframe,
                    // display for all div elements is set to "inline",
                    // which causes a problem only in Android 8 Chrome 86.
                    // Ensuring the div is `display: block`
                    // gets around this issue.
                    trChild.style.display = "block";
                    documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                    trStyle = window1.getComputedStyle(tr);
                    reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                    documentElement.removeChild(table);
                }
                return reliableTrDimensionsVal;
            }
        });
    })();
    function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), // Support: Firefox 51+
        // Retrieving style before computed somehow
        // fixes an issue with getting wrong values
        // on detached elements
        style = elem.style;
        computed = computed || getStyles(elem);
        // getPropertyValue is needed for:
        //   .css('filter') (IE 9 only, trac-12537)
        //   .css('--customProperty) (gh-3144)
        if (computed) {
            // Support: IE <=9 - 11+
            // IE only supports `"float"` in `getPropertyValue`; in computed styles
            // it's only available as `"cssFloat"`. We no longer modify properties
            // sent to `.css()` apart from camelCasing, so we need to check both.
            // Normally, this would create difference in behavior: if
            // `getPropertyValue` returns an empty string, the value returned
            // by `.css()` would be `undefined`. This is usually the case for
            // disconnected elements. However, in IE even disconnected elements
            // with no styles return `"none"` for `getPropertyValue( "float" )`
            ret = computed.getPropertyValue(name) || computed[name];
            if (isCustomProp && ret) // Support: Firefox 105+, Chrome <=105+
            // Spec requires trimming whitespace for custom properties (gh-4926).
            // Firefox only trims leading whitespace. Chrome just collapses
            // both leading & trailing whitespace to a single space.
            //
            // Fall back to `undefined` if empty string returned.
            // This collapses a missing definition with property defined
            // and set to an empty string but there's no standard API
            // allowing us to differentiate them without a performance penalty
            // and returning `undefined` aligns with older jQuery.
            //
            // rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
            // as whitespace while CSS does not, but this is not a problem
            // because CSS preprocessing replaces them with U+000A LINE FEED
            // (which *is* CSS whitespace)
            // https://www.w3.org/TR/css-syntax-3/#input-preprocessing
            ret = ret.replace(rtrimCSS, "$1") || undefined;
            if (ret === "" && !isAttached(elem)) ret = jQuery.style(elem, name);
            // A tribute to the "awesome hack by Dean Edwards"
            // Android Browser returns percentage for some values,
            // but width seems to be reliably pixels.
            // This is against the CSSOM draft spec:
            // https://drafts.csswg.org/cssom/#resolved-values
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
                // Remember the original values
                width = style.width;
                minWidth = style.minWidth;
                maxWidth = style.maxWidth;
                // Put in the new values to get a computed value out
                style.minWidth = style.maxWidth = style.width = ret;
                ret = computed.width;
                // Revert the changed values
                style.width = width;
                style.minWidth = minWidth;
                style.maxWidth = maxWidth;
            }
        }
        return ret !== undefined ? // Support: IE <=9 - 11 only
        // IE returns zIndex value as an integer.
        ret + "" : ret;
    }
    function addGetHookIf(conditionFn, hookFn) {
        // Define the hook, we'll check on the first run if it's really needed.
        return {
            get: function() {
                if (conditionFn()) {
                    // Hook not needed (or it's not possible to use it due
                    // to missing dependency), remove it.
                    delete this.get;
                    return;
                }
                // Hook needed; redefine it so that the support test is not executed again.
                return (this.get = hookFn).apply(this, arguments);
            }
        };
    }
    var cssPrefixes = [
        "Webkit",
        "Moz",
        "ms"
    ], emptyStyle = document.createElement("div").style, vendorProps = {};
    // Return a vendor-prefixed property or undefined
    function vendorPropName(name) {
        // Check for vendor prefixed names
        var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
        while(i--){
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) return name;
        }
    }
    // Return a potentially-mapped jQuery.cssProps or vendor prefixed property
    function finalPropName(name) {
        var final = jQuery.cssProps[name] || vendorProps[name];
        if (final) return final;
        if (name in emptyStyle) return name;
        return vendorProps[name] = vendorPropName(name) || name;
    }
    var // Swappable if display is none or starts with table
    // except "table", "table-cell", or "table-caption"
    // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
    rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function setPositiveNumber(_elem, value, subtract) {
        // Any relative (+/-) values have already been
        // normalized at this point
        var matches = rcssNum.exec(value);
        return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
        Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
    }
    function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
        // Adjustment may not be necessary
        if (box === (isBorderBox ? "border" : "content")) return 0;
        for(; i < 4; i += 2){
            // Both box models exclude margin
            // Count margin delta separately to only add it after scroll gutter adjustment.
            // This is needed to make negative margins work with `outerHeight( true )` (gh-3982).
            if (box === "margin") marginDelta += jQuery.css(elem, box + cssExpand[i], true, styles);
            // If we get here with a content-box, we're seeking "padding" or "border" or "margin"
            if (!isBorderBox) {
                // Add padding
                delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                // For "border" or "margin", add border
                if (box !== "padding") delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                else extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            // If we get here with a border-box (content + padding + border), we're seeking "content" or
            // "padding" or "margin"
            } else {
                // For "content", subtract padding
                if (box === "content") delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                // For "content" or "padding", subtract border
                if (box !== "margin") delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
        }
        // Account for positive content-box scroll gutter when requested by providing computedVal
        if (!isBorderBox && computedVal >= 0) // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
        // Assuming integer scroll gutter, subtract the rest and round down
        delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5)) || 0;
        return delta + marginDelta;
    }
    function getWidthOrHeight(elem, dimension, extra) {
        // Start with computed style
        var styles = getStyles(elem), // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
        // Fake content-box until we know it's needed to know the true value.
        boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
        // Support: Firefox <=54
        // Return a confounding non-pixel value or feign ignorance, as appropriate.
        if (rnumnonpx.test(val)) {
            if (!extra) return val;
            val = "auto";
        }
        // Support: IE 9 - 11 only
        // Use offsetWidth/offsetHeight for when box sizing is unreliable.
        // In those cases, the computed value can be trusted to be border-box.
        if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        val === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
        elem.getClientRects().length) {
            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
            // Where available, offsetWidth/offsetHeight approximate border box dimensions.
            // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
            // retrieved value as a content box dimension.
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) val = elem[offsetProp];
        }
        // Normalize "" and auto
        val = parseFloat(val) || 0;
        // Adjust for the element's box model
        return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
        val) + "px";
    }
    jQuery.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
            opacity: {
                get: function(elem, computed) {
                    if (computed) {
                        // We should always get a number back from opacity
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        },
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
            animationIterationCount: true,
            aspectRatio: true,
            borderImageSlice: true,
            columnCount: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            gridArea: true,
            gridColumn: true,
            gridColumnEnd: true,
            gridColumnStart: true,
            gridRow: true,
            gridRowEnd: true,
            gridRowStart: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            scale: true,
            widows: true,
            zIndex: true,
            zoom: true,
            // SVG-related
            fillOpacity: true,
            floodOpacity: true,
            stopOpacity: true,
            strokeMiterlimit: true,
            strokeOpacity: true
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {},
        // Get and set the style property on a DOM Node
        style: function(elem, name, value, extra) {
            // Don't set styles on text and comment nodes
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) return;
            // Make sure that we're working with the right name
            var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
            // Make sure that we're working with the right name. We don't
            // want to query the value if it is a CSS custom property
            // since they are user-defined.
            if (!isCustomProp) name = finalPropName(origName);
            // Gets hook for the prefixed version, then unprefixed version
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            // Check if we're setting a value
            if (value !== undefined) {
                type = typeof value;
                // Convert "+=" or "-=" to relative numbers (trac-7345)
                if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                    value = adjustCSS(elem, name, ret);
                    // Fixes bug trac-9237
                    type = "number";
                }
                // Make sure that null and NaN values aren't set (trac-7116)
                if (value == null || value !== value) return;
                // If a number was passed in, add the unit (except for certain CSS properties)
                // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
                // "px" to a few hardcoded values.
                if (type === "number" && !isCustomProp) value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                // background-* props affect original clone's values
                if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) style[name] = "inherit";
                // If a hook was provided, use that value, otherwise just set the specified value
                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                    if (isCustomProp) style.setProperty(name, value);
                    else style[name] = value;
                }
            } else {
                // If a hook was provided get the non-computed value from there
                if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) return ret;
                // Otherwise just get the value from the style object
                return style[name];
            }
        },
        css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            // Make sure that we're working with the right name. We don't
            // want to modify the value if it is a CSS custom property
            // since they are user-defined.
            if (!isCustomProp) name = finalPropName(origName);
            // Try prefixed name followed by the unprefixed name
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            // If a hook was provided get the computed value from there
            if (hooks && "get" in hooks) val = hooks.get(elem, true, extra);
            // Otherwise, if a way to get the computed value exists, use that
            if (val === undefined) val = curCSS(elem, name, styles);
            // Convert "normal" to computed value
            if (val === "normal" && name in cssNormalTransform) val = cssNormalTransform[name];
            // Make numeric if forced or a qualifier was provided and val looks numeric
            if (extra === "" || extra) {
                num = parseFloat(val);
                return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
        }
    });
    jQuery.each([
        "height",
        "width"
    ], function(_i, dimension) {
        jQuery.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
                if (computed) // Certain elements can have dimension info if we invisibly show them
                // but it must have a current display style that would benefit
                return rdisplayswap.test(jQuery.css(elem, "display")) && // Support: Safari 8+
                // Table columns in Safari have non-zero offsetWidth & zero
                // getBoundingClientRect().width unless display is changed.
                // Support: IE <=11 only
                // Running getBoundingClientRect on a disconnected node
                // in IE throws an error.
                (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                    return getWidthOrHeight(elem, dimension, extra);
                }) : getWidthOrHeight(elem, dimension, extra);
            },
            set: function(elem, value, extra) {
                var matches, styles = getStyles(elem), // Only read styles.position if the test has a chance to fail
                // to avoid forcing a reflow.
                scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
                boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
                // Account for unreliable border-box dimensions by comparing offset* to computed and
                // faking a content-box to get border and padding (gh-3699)
                if (isBorderBox && scrollboxSizeBuggy) subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
                // Convert to pixels if value adjustment is needed
                if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                    elem.style[dimension] = value;
                    value = jQuery.css(elem, dimension);
                }
                return setPositiveNumber(elem, value, subtract);
            }
        };
    });
    jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
        if (computed) return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
            marginLeft: 0
        }, function() {
            return elem.getBoundingClientRect().left;
        })) + "px";
    });
    // These hooks are used by animate to expand properties
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
                var i = 0, expanded = {}, // Assumes a single number if not a string
                parts = typeof value === "string" ? value.split(" ") : [
                    value
                ];
                for(; i < 4; i++)expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                return expanded;
            }
        };
        if (prefix !== "margin") jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    });
    jQuery.fn.extend({
        css: function(name, value) {
            return access(this, function(elem, name, value) {
                var styles, len, map = {}, i = 0;
                if (Array.isArray(name)) {
                    styles = getStyles(elem);
                    len = name.length;
                    for(; i < len; i++)map[name[i]] = jQuery.css(elem, name[i], false, styles);
                    return map;
                }
                return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
            }, name, value, arguments.length > 1);
        }
    });
    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery.Tween = Tween;
    Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
            else this.pos = eased = percent;
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) this.options.step.call(this.elem, this.now, this);
            if (hooks && hooks.set) hooks.set(this);
            else Tween.propHooks._default.set(this);
            return this;
        }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
        _default: {
            get: function(tween) {
                var result;
                // Use a property on the element directly when it is not a DOM element,
                // or when there is no matching style property that exists.
                if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) return tween.elem[tween.prop];
                // Passing an empty string as a 3rd parameter to .css will automatically
                // attempt a parseFloat and fallback to a string if the parse fails.
                // Simple values such as "10px" are parsed to Float;
                // complex values such as "rotate(1rad)" are returned as-is.
                result = jQuery.css(tween.elem, tween.prop, "");
                // Empty strings, null, undefined and "auto" are converted to 0.
                return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
                // Use step hook for back compat.
                // Use cssHook if its there.
                // Use .style if available and use plain properties where available.
                if (jQuery.fx.step[tween.prop]) jQuery.fx.step[tween.prop](tween);
                else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                else tween.elem[tween.prop] = tween.now;
            }
        }
    };
    // Support: IE <=9 only
    // Panic based approach to setting things on disconnected nodes
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) tween.elem[tween.prop] = tween.now;
        }
    };
    jQuery.easing = {
        linear: function(p) {
            return p;
        },
        swing: function(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
    };
    jQuery.fx = Tween.prototype.init;
    // Back compat <1.8 extension point
    jQuery.fx.step = {};
    var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
    function schedule() {
        if (inProgress) {
            if (document.hidden === false && window1.requestAnimationFrame) window1.requestAnimationFrame(schedule);
            else window1.setTimeout(schedule, jQuery.fx.interval);
            jQuery.fx.tick();
        }
    }
    // Animations created synchronously will run synchronously
    function createFxNow() {
        window1.setTimeout(function() {
            fxNow = undefined;
        });
        return fxNow = Date.now();
    }
    // Generate parameters to create a standard animation
    function genFx(type, includeWidth) {
        var which, i = 0, attrs = {
            height: type
        };
        // If we include width, step value is 1 to do all cssExpand values,
        // otherwise step value is 2 to skip over Left and Right
        includeWidth = includeWidth ? 1 : 0;
        for(; i < 4; i += 2 - includeWidth){
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) attrs.opacity = attrs.width = type;
        return attrs;
    }
    function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
        for(; index < length; index++){
            if (tween = collection[index].call(animation, prop, value)) // We're done with this property
            return tween;
        }
    }
    function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
        // Queue-skipping animations hijack the fx hooks
        if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                    if (!hooks.unqueued) oldfire();
                };
            }
            hooks.unqueued++;
            anim.always(function() {
                // Ensure the complete handler is called before this completes
                anim.always(function() {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) hooks.empty.fire();
                });
            });
        }
        // Detect show/hide animations
        for(prop in props){
            value = props[prop];
            if (rfxtypes.test(value)) {
                delete props[prop];
                toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) {
                    // Pretend to be hidden if this is a "show" and
                    // there is still data from a stopped show/hide
                    if (value === "show" && dataShow && dataShow[prop] !== undefined) hidden = true;
                    else continue;
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
        }
        // Bail out if this is a no-op like .hide().hide()
        propTween = !jQuery.isEmptyObject(props);
        if (!propTween && jQuery.isEmptyObject(orig)) return;
        // Restrict "overflow" and "display" styles during box animations
        if (isBox && elem.nodeType === 1) {
            // Support: IE <=9 - 11, Edge 12 - 15
            // Record all 3 overflow attributes because IE does not infer the shorthand
            // from identically-valued overflowX and overflowY and Edge just mirrors
            // the overflowX value there.
            opts.overflow = [
                style.overflow,
                style.overflowX,
                style.overflowY
            ];
            // Identify a display type, preferring old show/hide data over the CSS cascade
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) restoreDisplay = dataPriv.get(elem, "display");
            display = jQuery.css(elem, "display");
            if (display === "none") {
                if (restoreDisplay) display = restoreDisplay;
                else {
                    // Get nonempty value(s) by temporarily forcing visibility
                    showHide([
                        elem
                    ], true);
                    restoreDisplay = elem.style.display || restoreDisplay;
                    display = jQuery.css(elem, "display");
                    showHide([
                        elem
                    ]);
                }
            }
            // Animate inline elements as inline-block
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
                if (jQuery.css(elem, "float") === "none") {
                    // Restore the original display value at the end of pure show/hide animations
                    if (!propTween) {
                        anim.done(function() {
                            style.display = restoreDisplay;
                        });
                        if (restoreDisplay == null) {
                            display = style.display;
                            restoreDisplay = display === "none" ? "" : display;
                        }
                    }
                    style.display = "inline-block";
                }
            }
        }
        if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
                style.overflow = opts.overflow[0];
                style.overflowX = opts.overflow[1];
                style.overflowY = opts.overflow[2];
            });
        }
        // Implement show/hide animations
        propTween = false;
        for(prop in orig){
            // General show/hide setup for this element animation
            if (!propTween) {
                if (dataShow) {
                    if ("hidden" in dataShow) hidden = dataShow.hidden;
                } else dataShow = dataPriv.access(elem, "fxshow", {
                    display: restoreDisplay
                });
                // Store hidden/visible for toggle so `.stop().toggle()` "reverses"
                if (toggle) dataShow.hidden = !hidden;
                // Show elements before animating them
                if (hidden) showHide([
                    elem
                ], true);
                /* eslint-disable no-loop-func */ anim.done(function() {
                    /* eslint-enable no-loop-func */ // The final step of a "hide" animation is actually hiding the element
                    if (!hidden) showHide([
                        elem
                    ]);
                    dataPriv.remove(elem, "fxshow");
                    for(prop in orig)jQuery.style(elem, prop, orig[prop]);
                });
            }
            // Per-property setup
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
                dataShow[prop] = propTween.start;
                if (hidden) {
                    propTween.end = propTween.start;
                    propTween.start = 0;
                }
            }
        }
    }
    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        // camelCase, specialEasing and expand cssHook pass
        for(index in props){
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0];
            }
            if (index !== name) {
                props[name] = value;
                delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
                value = hooks.expand(value);
                delete props[name];
                // Not quite $.extend, this won't overwrite existing keys.
                // Reusing 'index' because we have the correct "name"
                for(index in value)if (!(index in props)) {
                    props[index] = value[index];
                    specialEasing[index] = easing;
                }
            } else specialEasing[name] = easing;
        }
    }
    function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
            // Don't match elem in the :animated selector
            delete tick.elem;
        }), tick = function() {
            if (stopped) return false;
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), // Support: Android 2.3 only
            // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
            temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
            for(; index < length; index++)animation.tweens[index].run(percent);
            deferred.notifyWith(elem, [
                animation,
                percent,
                remaining
            ]);
            // If there's more to do, yield
            if (percent < 1 && length) return remaining;
            // If this was an empty animation, synthesize a final progress notification
            if (!length) deferred.notifyWith(elem, [
                animation,
                1,
                0
            ]);
            // Resolve the animation and report its conclusion
            deferred.resolveWith(elem, [
                animation
            ]);
            return false;
        }, animation = deferred.promise({
            elem: elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
                specialEasing: {},
                easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
                var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                animation.tweens.push(tween);
                return tween;
            },
            stop: function(gotoEnd) {
                var index = 0, // If we are going to the end, we want to run all the tweens
                // otherwise we skip this part
                length = gotoEnd ? animation.tweens.length : 0;
                if (stopped) return this;
                stopped = true;
                for(; index < length; index++)animation.tweens[index].run(1);
                // Resolve when we played the last frame; otherwise, reject
                if (gotoEnd) {
                    deferred.notifyWith(elem, [
                        animation,
                        1,
                        0
                    ]);
                    deferred.resolveWith(elem, [
                        animation,
                        gotoEnd
                    ]);
                } else deferred.rejectWith(elem, [
                    animation,
                    gotoEnd
                ]);
                return this;
            }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for(; index < length; index++){
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
                if (isFunction(result.stop)) jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
                return result;
            }
        }
        jQuery.map(props, createTween, animation);
        if (isFunction(animation.opts.start)) animation.opts.start.call(elem, animation);
        // Attach callbacks from options
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery.fx.timer(jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        }));
        return animation;
    }
    jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {
            "*": [
                function(prop, value) {
                    var tween = this.createTween(prop, value);
                    adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                    return tween;
                }
            ]
        },
        tweener: function(props, callback) {
            if (isFunction(props)) {
                callback = props;
                props = [
                    "*"
                ];
            } else props = props.match(rnothtmlwhite);
            var prop, index = 0, length = props.length;
            for(; index < length; index++){
                prop = props[index];
                Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                Animation.tweeners[prop].unshift(callback);
            }
        },
        prefilters: [
            defaultPrefilter
        ],
        prefilter: function(callback, prepend) {
            if (prepend) Animation.prefilters.unshift(callback);
            else Animation.prefilters.push(callback);
        }
    });
    jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
        };
        // Go to the end state if fx are off
        if (jQuery.fx.off) opt.duration = 0;
        else if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery.fx.speeds) opt.duration = jQuery.fx.speeds[opt.duration];
            else opt.duration = jQuery.fx.speeds._default;
        }
        // Normalize opt.queue - true/undefined/null -> "fx"
        if (opt.queue == null || opt.queue === true) opt.queue = "fx";
        // Queueing
        opt.old = opt.complete;
        opt.complete = function() {
            if (isFunction(opt.old)) opt.old.call(this);
            if (opt.queue) jQuery.dequeue(this, opt.queue);
        };
        return opt;
    };
    jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
            // Show any hidden elements after setting opacity to 0
            return this.filter(isHiddenWithinTree).css("opacity", 0).show()// Animate to the value specified
            .end().animate({
                opacity: to
            }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                // Operate on a copy of prop so per-property easing won't be lost
                var anim = Animation(this, jQuery.extend({}, prop), optall);
                // Empty animations, or finishing resolves immediately
                if (empty || dataPriv.get(this, "finish")) anim.stop(true);
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd);
            };
            if (typeof type !== "string") {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if (clearQueue) this.queue(type || "fx", []);
            return this.each(function() {
                var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
                if (index) {
                    if (data[index] && data[index].stop) stopQueue(data[index]);
                } else {
                    for(index in data)if (data[index] && data[index].stop && rrun.test(index)) stopQueue(data[index]);
                }
                for(index = timers.length; index--;)if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                    timers[index].anim.stop(gotoEnd);
                    dequeue = false;
                    timers.splice(index, 1);
                }
                // Start the next in the queue if the last step wasn't forced.
                // Timers currently will call their complete callbacks, which
                // will dequeue but only if they were gotoEnd.
                if (dequeue || !gotoEnd) jQuery.dequeue(this, type);
            });
        },
        finish: function(type) {
            if (type !== false) type = type || "fx";
            return this.each(function() {
                var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                // Enable finishing flag on private data
                data.finish = true;
                // Empty the queue first
                jQuery.queue(this, type, []);
                if (hooks && hooks.stop) hooks.stop.call(this, true);
                // Look for any active animations, and finish them
                for(index = timers.length; index--;)if (timers[index].elem === this && timers[index].queue === type) {
                    timers[index].anim.stop(true);
                    timers.splice(index, 1);
                }
                // Look for any animations in the old queue and finish them
                for(index = 0; index < length; index++)if (queue[index] && queue[index].finish) queue[index].finish.call(this);
                // Turn off finishing flag
                delete data.finish;
            });
        }
    });
    jQuery.each([
        "toggle",
        "show",
        "hide"
    ], function(_i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
    });
    // Generate shortcuts for custom animations
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    });
    jQuery.timers = [];
    jQuery.fx.tick = function() {
        var timer, i = 0, timers = jQuery.timers;
        fxNow = Date.now();
        for(; i < timers.length; i++){
            timer = timers[i];
            // Run the timer and safely remove it when done (allowing for external removal)
            if (!timer() && timers[i] === timer) timers.splice(i--, 1);
        }
        if (!timers.length) jQuery.fx.stop();
        fxNow = undefined;
    };
    jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer);
        jQuery.fx.start();
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
        if (inProgress) return;
        inProgress = true;
        schedule();
    };
    jQuery.fx.stop = function() {
        inProgress = null;
    };
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
    };
    // Based off of the plugin by Clint Helfers, with permission.
    jQuery.fn.delay = function(time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
            var timeout = window1.setTimeout(next, time);
            hooks.stop = function() {
                window1.clearTimeout(timeout);
            };
        });
    };
    (function() {
        var input = document.createElement("input"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
        input.type = "checkbox";
        // Support: Android <=4.3 only
        // Default value for a checkbox should be "on"
        support.checkOn = input.value !== "";
        // Support: IE <=11 only
        // Must access selectedIndex to make default options select
        support.optSelected = opt.selected;
        // Support: IE <=11 only
        // An input loses its value after becoming a radio
        input = document.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
    })();
    var boolHook, attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
        attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name);
            });
        }
    });
    jQuery.extend({
        attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            // Don't get/set attributes on text, comment and attribute nodes
            if (nType === 3 || nType === 8 || nType === 2) return;
            // Fallback to prop when attributes are not supported
            if (typeof elem.getAttribute === "undefined") return jQuery.prop(elem, name, value);
            // Attribute hooks are determined by the lowercase version
            // Grab necessary hook if one is defined
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
            if (value !== undefined) {
                if (value === null) {
                    jQuery.removeAttr(elem, name);
                    return;
                }
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) return ret;
                elem.setAttribute(name, value + "");
                return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) return ret;
            ret = jQuery.find.attr(elem, name);
            // Non-existent attributes return null, we normalize to undefined
            return ret == null ? undefined : ret;
        },
        attrHooks: {
            type: {
                set: function(elem, value) {
                    if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) elem.value = val;
                        return value;
                    }
                }
            }
        },
        removeAttr: function(elem, value) {
            var name, i = 0, // Attribute names can contain non-HTML whitespace characters
            // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
            attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) while(name = attrNames[i++])elem.removeAttribute(name);
        }
    });
    // Hooks for boolean attributes
    boolHook = {
        set: function(elem, value, name) {
            if (value === false) // Remove boolean attributes when set to false
            jQuery.removeAttr(elem, name);
            else elem.setAttribute(name, name);
            return name;
        }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function(elem, name, isXML) {
            var ret, handle, lowercaseName = name.toLowerCase();
            if (!isXML) {
                // Avoid an infinite loop by temporarily removing this function from the getter
                handle = attrHandle[lowercaseName];
                attrHandle[lowercaseName] = ret;
                ret = getter(elem, name, isXML) != null ? lowercaseName : null;
                attrHandle[lowercaseName] = handle;
            }
            return ret;
        };
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
    jQuery.fn.extend({
        prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
            return this.each(function() {
                delete this[jQuery.propFix[name] || name];
            });
        }
    });
    jQuery.extend({
        prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            // Don't get/set properties on text, comment and attribute nodes
            if (nType === 3 || nType === 8 || nType === 2) return;
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                // Fix name and attach hooks
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name];
            }
            if (value !== undefined) {
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) return ret;
                return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) return ret;
            return elem[name];
        },
        propHooks: {
            tabIndex: {
                get: function(elem) {
                    // Support: IE <=9 - 11 only
                    // elem.tabIndex doesn't always return the
                    // correct value when it hasn't been explicitly set
                    // Use proper attribute retrieval (trac-12072)
                    var tabindex = jQuery.find.attr(elem, "tabindex");
                    if (tabindex) return parseInt(tabindex, 10);
                    if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) return 0;
                    return -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    // Support: IE <=11 only
    // Accessing the selectedIndex property
    // forces the browser to respect setting selected
    // on the option
    // The getter ensures a default option is selected
    // when in an optgroup
    // eslint rule "no-unused-expressions" is disabled for this code
    // since it considers such accessions noop
    if (!support.optSelected) jQuery.propHooks.selected = {
        get: function(elem) {
            /* eslint no-unused-expressions: "off" */ var parent = elem.parentNode;
            if (parent && parent.parentNode) parent.parentNode.selectedIndex;
            return null;
        },
        set: function(elem) {
            /* eslint no-unused-expressions: "off" */ var parent = elem.parentNode;
            if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) parent.parentNode.selectedIndex;
            }
        }
    };
    jQuery.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
    ], function() {
        jQuery.propFix[this.toLowerCase()] = this;
    });
    // Strip and collapse whitespace according to HTML spec
    // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
    function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
    }
    function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
    }
    function classesToArray(value) {
        if (Array.isArray(value)) return value;
        if (typeof value === "string") return value.match(rnothtmlwhite) || [];
        return [];
    }
    jQuery.fn.extend({
        addClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) return this.each(function(j) {
                jQuery(this).addClass(value.call(this, j, getClass(this)));
            });
            classNames = classesToArray(value);
            if (classNames.length) return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                    for(i = 0; i < classNames.length; i++){
                        className = classNames[i];
                        if (cur.indexOf(" " + className + " ") < 0) cur += className + " ";
                    }
                    // Only assign if different to avoid unneeded rendering.
                    finalValue = stripAndCollapse(cur);
                    if (curValue !== finalValue) this.setAttribute("class", finalValue);
                }
            });
            return this;
        },
        removeClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) return this.each(function(j) {
                jQuery(this).removeClass(value.call(this, j, getClass(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            classNames = classesToArray(value);
            if (classNames.length) return this.each(function() {
                curValue = getClass(this);
                // This expression is here for better compressibility (see addClass)
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                    for(i = 0; i < classNames.length; i++){
                        className = classNames[i];
                        // Remove *all* instances
                        while(cur.indexOf(" " + className + " ") > -1)cur = cur.replace(" " + className + " ", " ");
                    }
                    // Only assign if different to avoid unneeded rendering.
                    finalValue = stripAndCollapse(cur);
                    if (curValue !== finalValue) this.setAttribute("class", finalValue);
                }
            });
            return this;
        },
        toggleClass: function(value, stateVal) {
            var classNames, className, i, self, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            if (isFunction(value)) return this.each(function(i) {
                jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
            });
            if (typeof stateVal === "boolean" && isValidValue) return stateVal ? this.addClass(value) : this.removeClass(value);
            classNames = classesToArray(value);
            return this.each(function() {
                if (isValidValue) {
                    // Toggle individual class names
                    self = jQuery(this);
                    for(i = 0; i < classNames.length; i++){
                        className = classNames[i];
                        // Check each className given, space separated list
                        if (self.hasClass(className)) self.removeClass(className);
                        else self.addClass(className);
                    }
                // Toggle whole class name
                } else if (value === undefined || type === "boolean") {
                    className = getClass(this);
                    if (className) // Store className if set
                    dataPriv.set(this, "__className__", className);
                    // If the element has a class name or if we're passed `false`,
                    // then remove the whole classname (if there was one, the above saved it).
                    // Otherwise bring back whatever was previously saved (if anything),
                    // falling back to the empty string if nothing was stored.
                    if (this.setAttribute) this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
                }
            });
        },
        hasClass: function(selector) {
            var className, elem, i = 0;
            className = " " + selector + " ";
            while(elem = this[i++]){
                if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) return true;
            }
            return false;
        }
    });
    var rreturn = /\r/g;
    jQuery.fn.extend({
        val: function(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
                if (elem) {
                    hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) return ret;
                    ret = elem.value;
                    // Handle most common string cases
                    if (typeof ret === "string") return ret.replace(rreturn, "");
                    // Handle cases where value is null/undef or number
                    return ret == null ? "" : ret;
                }
                return;
            }
            valueIsFunction = isFunction(value);
            return this.each(function(i) {
                var val;
                if (this.nodeType !== 1) return;
                if (valueIsFunction) val = value.call(this, i, jQuery(this).val());
                else val = value;
                // Treat null/undefined as ""; convert numbers to string
                if (val == null) val = "";
                else if (typeof val === "number") val += "";
                else if (Array.isArray(val)) val = jQuery.map(val, function(value) {
                    return value == null ? "" : value + "";
                });
                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                // If set returns undefined, fall back to normal setting
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) this.value = val;
            });
        }
    });
    jQuery.extend({
        valHooks: {
            option: {
                get: function(elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return val != null ? val : // Support: IE <=10 - 11 only
                    // option.text throws exceptions (trac-14686, trac-14858)
                    // Strip and collapse whitespace
                    // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                    stripAndCollapse(jQuery.text(elem));
                }
            },
            select: {
                get: function(elem) {
                    var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                    if (index < 0) i = max;
                    else i = one ? index : 0;
                    // Loop through all the selected options
                    for(; i < max; i++){
                        option = options[i];
                        // Support: IE <=9 only
                        // IE8-9 doesn't update selected after form reset (trac-2551)
                        if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                        !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                            // Get the specific value for the option
                            value = jQuery(option).val();
                            // We don't need an array for one selects
                            if (one) return value;
                            // Multi-Selects return an array
                            values.push(value);
                        }
                    }
                    return values;
                },
                set: function(elem, value) {
                    var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                    while(i--){
                        option = options[i];
                        /* eslint-disable no-cond-assign */ if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) optionSet = true;
                    /* eslint-enable no-cond-assign */ }
                    // Force browsers to behave consistently when non-matching value is set
                    if (!optionSet) elem.selectedIndex = -1;
                    return values;
                }
            }
        }
    });
    // Radios and checkboxes getter/setter
    jQuery.each([
        "radio",
        "checkbox"
    ], function() {
        jQuery.valHooks[this] = {
            set: function(elem, value) {
                if (Array.isArray(value)) return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
            }
        };
        if (!support.checkOn) jQuery.valHooks[this].get = function(elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
        };
    });
    // Return jQuery for attributes-only inclusion
    var location = window1.location;
    var nonce = {
        guid: Date.now()
    };
    var rquery = /\?/;
    // Cross-browser xml parsing
    jQuery.parseXML = function(data) {
        var xml, parserErrorElem;
        if (!data || typeof data !== "string") return null;
        // Support: IE 9 - 11 only
        // IE throws on parseFromString with invalid input.
        try {
            xml = new window1.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {}
        parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
        if (!xml || parserErrorElem) jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
            return el.textContent;
        }).join("\n") : data));
        return xml;
    };
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
        e.stopPropagation();
    };
    jQuery.extend(jQuery.event, {
        trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [
                elem || document
            ], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document;
            // Don't do events on text and comment nodes
            if (elem.nodeType === 3 || elem.nodeType === 8) return;
            // focus/blur morphs to focusin/out; ensure we're not firing them right now
            if (rfocusMorph.test(type + jQuery.event.triggered)) return;
            if (type.indexOf(".") > -1) {
                // Namespaced trigger; create a regexp to match event type in handle()
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            // Caller can pass in a jQuery.Event object, Object, or just an event type string
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            // Clean up the event in case it is being reused
            event.result = undefined;
            if (!event.target) event.target = elem;
            // Clone any incoming data and prepend the event, creating the handler arg list
            data = data == null ? [
                event
            ] : jQuery.makeArray(data, [
                event
            ]);
            // Allow special events to draw outside the lines
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) return;
            // Determine event propagation path in advance, per W3C events spec (trac-9951)
            // Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) cur = cur.parentNode;
                for(; cur; cur = cur.parentNode){
                    eventPath.push(cur);
                    tmp = cur;
                }
                // Only add window if we got to document (e.g., not plain obj or detached DOM)
                if (tmp === (elem.ownerDocument || document)) eventPath.push(tmp.defaultView || tmp.parentWindow || window1);
            }
            // Fire handlers on the event path
            i = 0;
            while((cur = eventPath[i++]) && !event.isPropagationStopped()){
                lastElement = cur;
                event.type = i > 1 ? bubbleType : special.bindType || type;
                // jQuery handler
                handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");
                if (handle) handle.apply(cur, data);
                // Native handler
                handle = ontype && cur[ontype];
                if (handle && handle.apply && acceptData(cur)) {
                    event.result = handle.apply(cur, data);
                    if (event.result === false) event.preventDefault();
                }
            }
            event.type = type;
            // If nobody prevented the default action, do it now
            if (!onlyHandlers && !event.isDefaultPrevented()) {
                if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) // Call a native DOM method on the target with the same name as the event.
                // Don't do default actions on window, that's where global variables be (trac-6170)
                {
                    if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                        // Don't re-trigger an onFOO event when we call its FOO() method
                        tmp = elem[ontype];
                        if (tmp) elem[ontype] = null;
                        // Prevent re-triggering of the same event, since we already bubbled it above
                        jQuery.event.triggered = type;
                        if (event.isPropagationStopped()) lastElement.addEventListener(type, stopPropagationCallback);
                        elem[type]();
                        if (event.isPropagationStopped()) lastElement.removeEventListener(type, stopPropagationCallback);
                        jQuery.event.triggered = undefined;
                        if (tmp) elem[ontype] = tmp;
                    }
                }
            }
            return event.result;
        },
        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function(type, elem, event) {
            var e = jQuery.extend(new jQuery.Event(), event, {
                type: type,
                isSimulated: true
            });
            jQuery.event.trigger(e, null, elem);
        }
    });
    jQuery.fn.extend({
        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) return jQuery.event.trigger(type, data, elem, true);
        }
    });
    var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    function buildParams(prefix, obj, traditional, add) {
        var name;
        if (Array.isArray(obj)) // Serialize array item.
        jQuery.each(obj, function(i, v) {
            if (traditional || rbracket.test(prefix)) // Treat each array item as a scalar.
            add(prefix, v);
            else // Item is non-scalar (array or object), encode its numeric index.
            buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
        });
        else if (!traditional && toType(obj) === "object") // Serialize object item.
        for(name in obj)buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
        else // Serialize scalar item.
        add(prefix, obj);
    }
    // Serialize an array of form elements or a set of
    // key/values into a query string
    jQuery.param = function(a, traditional) {
        var prefix, s = [], add = function(key, valueOrFunction) {
            // If value is a function, invoke it and use its return value
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };
        if (a == null) return "";
        // If an array was passed in, assume that it is an array of form elements.
        if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) // Serialize the form elements
        jQuery.each(a, function() {
            add(this.name, this.value);
        });
        else // If traditional, encode the "old" way (the way 1.3.2 or older
        // did it), otherwise encode params recursively.
        for(prefix in a)buildParams(prefix, a[prefix], traditional, add);
        // Return the resulting serialization
        return s.join("&");
    };
    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                // Can add propHook for "elements" to filter or add form elements
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
                var type = this.type;
                // Use .is( ":disabled" ) so that fieldset[disabled] works
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(_i, elem) {
                var val = jQuery(this).val();
                if (val == null) return null;
                if (Array.isArray(val)) return jQuery.map(val, function(val) {
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                });
                return {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                };
            }).get();
        }
    });
    var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, // trac-7653, trac-8125, trac-8152: local protocol detection
    rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, /* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */ prefilters = {}, /* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */ transports = {}, // Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
    allTypes = "*/".concat("*"), // Anchor tag for parsing the document origin
    originAnchor = document.createElement("a");
    originAnchor.href = location.href;
    // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
    function addToPrefiltersOrTransports(structure) {
        // dataTypeExpression is optional and defaults to "*"
        return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) {
                // For each dataType in the dataTypeExpression
                while(dataType = dataTypes[i++])// Prepend if requested
                if (dataType[0] === "+") {
                    dataType = dataType.slice(1) || "*";
                    (structure[dataType] = structure[dataType] || []).unshift(func);
                // Otherwise append
                } else (structure[dataType] = structure[dataType] || []).push(func);
            }
        };
    }
    // Base inspection function for prefilters and transports
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return false;
                } else if (seekingTransport) return !(selected = dataTypeOrTransport);
            });
            return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    // A special extend for ajax options
    // that takes "flat" options (not to be deep extended)
    // Fixes trac-9887
    function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for(key in src)if (src[key] !== undefined) (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
        if (deep) jQuery.extend(true, target, deep);
        return target;
    }
    /* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */ function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        // Remove auto dataType and get content-type in the process
        while(dataTypes[0] === "*"){
            dataTypes.shift();
            if (ct === undefined) ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
        }
        // Check if we're dealing with a known content-type
        if (ct) {
            for(type in contents)if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
            }
        }
        // Check to see if we have a response for the expected dataType
        if (dataTypes[0] in responses) finalDataType = dataTypes[0];
        else {
            // Try convertible dataTypes
            for(type in responses){
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break;
                }
                if (!firstDataType) firstDataType = type;
            }
            // Or just use first one
            finalDataType = finalDataType || firstDataType;
        }
        // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) dataTypes.unshift(finalDataType);
            return responses[finalDataType];
        }
    }
    /* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */ function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, // Work with a copy of dataTypes in case we need to modify it for conversion
        dataTypes = s.dataTypes.slice();
        // Create converters map with lowercased keys
        if (dataTypes[1]) for(conv in s.converters)converters[conv.toLowerCase()] = s.converters[conv];
        current = dataTypes.shift();
        // Convert to each sequential dataType
        while(current){
            if (s.responseFields[current]) jqXHR[s.responseFields[current]] = response;
            // Apply the dataFilter if provided
            if (!prev && isSuccess && s.dataFilter) response = s.dataFilter(response, s.dataType);
            prev = current;
            current = dataTypes.shift();
            if (current) {
                // There's only work to do if current dataType is non-auto
                if (current === "*") current = prev;
                else if (prev !== "*" && prev !== current) {
                    // Seek a direct converter
                    conv = converters[prev + " " + current] || converters["* " + current];
                    // If none found, seek a pair
                    if (!conv) for(conv2 in converters){
                        // If conv2 outputs current
                        tmp = conv2.split(" ");
                        if (tmp[1] === current) {
                            // If prev can be converted to accepted input
                            conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                            if (conv) {
                                // Condense equivalence converters
                                if (conv === true) conv = converters[conv2];
                                else if (converters[conv2] !== true) {
                                    current = tmp[0];
                                    dataTypes.unshift(tmp[1]);
                                }
                                break;
                            }
                        }
                    }
                    // Apply converter (if not an equivalence)
                    if (conv !== true) {
                        // Unless errors are allowed to bubble, catch and return them
                        if (conv && s.throws) response = conv(response);
                        else try {
                            response = conv(response);
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: conv ? e : "No conversion from " + prev + " to " + current
                            };
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: response
        };
    }
    jQuery.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/ accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {
                // Convert anything to text
                "* text": String,
                // Text to html (true = no transformation)
                "text html": true,
                // Evaluate text as a json expression
                "text json": JSON.parse,
                // Parse text as xml
                "text xml": jQuery.parseXML
            },
            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
                url: true,
                context: true
            }
        },
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function(target, settings) {
            return settings ? // Building a settings object
            ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
            ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        // Main method
        ajax: function(url, options) {
            // If url is an object, simulate pre-1.5 signature
            if (typeof url === "object") {
                options = url;
                url = undefined;
            }
            // Force options to be an object
            options = options || {};
            var transport, // URL without anti-cache param
            cacheURL, // Response headers
            responseHeadersString, responseHeaders, // timeout handle
            timeoutTimer, // Url cleanup var
            urlAnchor, // Request state (becomes false upon send and true upon completion)
            completed, // To know if global events are to be dispatched
            fireGlobals, // Loop variable
            i, // uncached part of the url
            uncached, // Create the final options object
            s = jQuery.ajaxSetup({}, options), // Callbacks context
            callbackContext = s.context || s, // Context for global events is callbackContext if it is a DOM node or jQuery collection
            globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, // Deferreds
            deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), // Status-dependent callbacks
            statusCode = s.statusCode || {}, // Headers (they are sent all at once)
            requestHeaders = {}, requestHeadersNames = {}, // Default abort message
            strAbort = "canceled", // Fake xhr
            jqXHR = {
                readyState: 0,
                // Builds headers hashtable if needed
                getResponseHeader: function(key) {
                    var match;
                    if (completed) {
                        if (!responseHeaders) {
                            responseHeaders = {};
                            while(match = rheaders.exec(responseHeadersString))responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                        }
                        match = responseHeaders[key.toLowerCase() + " "];
                    }
                    return match == null ? null : match.join(", ");
                },
                // Raw string
                getAllResponseHeaders: function() {
                    return completed ? responseHeadersString : null;
                },
                // Caches the header
                setRequestHeader: function(name, value) {
                    if (completed == null) {
                        name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                        requestHeaders[name] = value;
                    }
                    return this;
                },
                // Overrides response content-type header
                overrideMimeType: function(type) {
                    if (completed == null) s.mimeType = type;
                    return this;
                },
                // Status-dependent callbacks
                statusCode: function(map) {
                    var code;
                    if (map) {
                        if (completed) // Execute the appropriate callbacks
                        jqXHR.always(map[jqXHR.status]);
                        else // Lazy-add the new callbacks in a way that preserves old ones
                        for(code in map)statusCode[code] = [
                            statusCode[code],
                            map[code]
                        ];
                    }
                    return this;
                },
                // Cancel the request
                abort: function(statusText) {
                    var finalText = statusText || strAbort;
                    if (transport) transport.abort(finalText);
                    done(0, finalText);
                    return this;
                }
            };
            // Attach deferreds
            deferred.promise(jqXHR);
            // Add protocol if not provided (prefilters might expect it)
            // Handle falsy url in the settings object (trac-10093: consistency with old signature)
            // We also use the url parameter if available
            s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
            // Alias method option to type as per ticket trac-12004
            s.type = options.method || options.type || s.method || s.type;
            // Extract dataTypes list
            s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [
                ""
            ];
            // A cross-domain request is in order when the origin doesn't match the current origin.
            if (s.crossDomain == null) {
                urlAnchor = document.createElement("a");
                // Support: IE <=8 - 11, Edge 12 - 15
                // IE throws exception on accessing the href property if url is malformed,
                // e.g. http://example.com:80x/
                try {
                    urlAnchor.href = s.url;
                    // Support: IE <=8 - 11 only
                    // Anchor's host property isn't correctly set when s.url is relative
                    urlAnchor.href = urlAnchor.href;
                    s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
                } catch (e) {
                    // If there is an error parsing the URL, assume it is crossDomain,
                    // it can be rejected by the transport if it is invalid
                    s.crossDomain = true;
                }
            }
            // Convert data if not already a string
            if (s.data && s.processData && typeof s.data !== "string") s.data = jQuery.param(s.data, s.traditional);
            // Apply prefilters
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            // If request was aborted inside a prefilter, stop there
            if (completed) return jqXHR;
            // We can fire global events as of now if asked to
            // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
            fireGlobals = jQuery.event && s.global;
            // Watch for a new set of requests
            if (fireGlobals && jQuery.active++ === 0) jQuery.event.trigger("ajaxStart");
            // Uppercase the type
            s.type = s.type.toUpperCase();
            // Determine if request has content
            s.hasContent = !rnoContent.test(s.type);
            // Save the URL in case we're toying with the If-Modified-Since
            // and/or If-None-Match header later on
            // Remove hash to simplify url manipulation
            cacheURL = s.url.replace(rhash, "");
            // More options handling for requests with no content
            if (!s.hasContent) {
                // Remember the hash so we can put it back
                uncached = s.url.slice(cacheURL.length);
                // If data is available and should be processed, append data to url
                if (s.data && (s.processData || typeof s.data === "string")) {
                    cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                    // trac-9682: remove data so that it's not used in an eventual retry
                    delete s.data;
                }
                // Add or update anti-cache param if needed
                if (s.cache === false) {
                    cacheURL = cacheURL.replace(rantiCache, "$1");
                    uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
                }
                // Put hash and anti-cache on the URL that will be requested (gh-1732)
                s.url = cacheURL + uncached;
            // Change '%20' to '+' if this is encoded form body content (gh-2658)
            } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) s.data = s.data.replace(r20, "+");
            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            if (s.ifModified) {
                if (jQuery.lastModified[cacheURL]) jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                if (jQuery.etag[cacheURL]) jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
            }
            // Set the correct header, if data is being sent
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) jqXHR.setRequestHeader("Content-Type", s.contentType);
            // Set the Accepts header for the server, depending on the dataType
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            // Check for headers option
            for(i in s.headers)jqXHR.setRequestHeader(i, s.headers[i]);
            // Allow custom headers/mimetypes and early abort
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) // Abort if not done already and return
            return jqXHR.abort();
            // Aborting is no longer a cancellation
            strAbort = "abort";
            // Install callbacks on deferreds
            completeDeferred.add(s.complete);
            jqXHR.done(s.success);
            jqXHR.fail(s.error);
            // Get transport
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            // If no transport, we auto-abort
            if (!transport) done(-1, "No Transport");
            else {
                jqXHR.readyState = 1;
                // Send global event
                if (fireGlobals) globalEventContext.trigger("ajaxSend", [
                    jqXHR,
                    s
                ]);
                // If request was aborted inside ajaxSend, stop there
                if (completed) return jqXHR;
                // Timeout
                if (s.async && s.timeout > 0) timeoutTimer = window1.setTimeout(function() {
                    jqXHR.abort("timeout");
                }, s.timeout);
                try {
                    completed = false;
                    transport.send(requestHeaders, done);
                } catch (e) {
                    // Rethrow post-completion exceptions
                    if (completed) throw e;
                    // Propagate others as results
                    done(-1, e);
                }
            }
            // Callback for when everything is done
            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                // Ignore repeat invocations
                if (completed) return;
                completed = true;
                // Clear timeout if it exists
                if (timeoutTimer) window1.clearTimeout(timeoutTimer);
                // Dereference transport for early garbage collection
                // (no matter how long the jqXHR object will be used)
                transport = undefined;
                // Cache response headers
                responseHeadersString = headers || "";
                // Set readyState
                jqXHR.readyState = status > 0 ? 4 : 0;
                // Determine if successful
                isSuccess = status >= 200 && status < 300 || status === 304;
                // Get response data
                if (responses) response = ajaxHandleResponses(s, jqXHR, responses);
                // Use a noop converter for missing script but not if jsonp
                if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) s.converters["text script"] = function() {};
                // Convert no matter what (that way responseXXX fields are always set)
                response = ajaxConvert(s, response, jqXHR, isSuccess);
                // If successful, handle type chaining
                if (isSuccess) {
                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    if (s.ifModified) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) jQuery.lastModified[cacheURL] = modified;
                        modified = jqXHR.getResponseHeader("etag");
                        if (modified) jQuery.etag[cacheURL] = modified;
                    }
                    // if no content
                    if (status === 204 || s.type === "HEAD") statusText = "nocontent";
                    else if (status === 304) statusText = "notmodified";
                    else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error;
                    }
                } else {
                    // Extract error from statusText and normalize for non-aborts
                    error = statusText;
                    if (status || !statusText) {
                        statusText = "error";
                        if (status < 0) status = 0;
                    }
                }
                // Set data for the fake xhr object
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + "";
                // Success/Error
                if (isSuccess) deferred.resolveWith(callbackContext, [
                    success,
                    statusText,
                    jqXHR
                ]);
                else deferred.rejectWith(callbackContext, [
                    jqXHR,
                    statusText,
                    error
                ]);
                // Status-dependent callbacks
                jqXHR.statusCode(statusCode);
                statusCode = undefined;
                if (fireGlobals) globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [
                    jqXHR,
                    s,
                    isSuccess ? success : error
                ]);
                // Complete
                completeDeferred.fireWith(callbackContext, [
                    jqXHR,
                    statusText
                ]);
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [
                        jqXHR,
                        s
                    ]);
                    // Handle the global AJAX counter
                    if (!--jQuery.active) jQuery.event.trigger("ajaxStop");
                }
            }
            return jqXHR;
        },
        getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
            return jQuery.get(url, undefined, callback, "script");
        }
    });
    jQuery.each([
        "get",
        "post"
    ], function(_i, method) {
        jQuery[method] = function(url, data, callback, type) {
            // Shift arguments if data argument was omitted
            if (isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
            }
            // The url can be an options object (which then must have .url)
            return jQuery.ajax(jQuery.extend({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            }, jQuery.isPlainObject(url) && url));
        };
    });
    jQuery.ajaxPrefilter(function(s) {
        var i;
        for(i in s.headers)if (i.toLowerCase() === "content-type") s.contentType = s.headers[i] || "";
    });
    jQuery._evalUrl = function(url, options, doc) {
        return jQuery.ajax({
            url: url,
            // Make this explicit, since user can override this through ajaxSetup (trac-11264)
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            // Only evaluate the response if it is successful (gh-4126)
            // dataFilter is not invoked for failure responses, so using it instead
            // of the default converter is kludgy but it works.
            converters: {
                "text script": function() {}
            },
            dataFilter: function(response) {
                jQuery.globalEval(response, options, doc);
            }
        });
    };
    jQuery.fn.extend({
        wrapAll: function(html) {
            var wrap;
            if (this[0]) {
                if (isFunction(html)) html = html.call(this[0]);
                // The elements to wrap the target around
                wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) wrap.insertBefore(this[0]);
                wrap.map(function() {
                    var elem = this;
                    while(elem.firstElementChild)elem = elem.firstElementChild;
                    return elem;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(html) {
            if (isFunction(html)) return this.each(function(i) {
                jQuery(this).wrapInner(html.call(this, i));
            });
            return this.each(function() {
                var self = jQuery(this), contents = self.contents();
                if (contents.length) contents.wrapAll(html);
                else self.append(html);
            });
        },
        wrap: function(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i) {
                jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
            });
        },
        unwrap: function(selector) {
            this.parent(selector).not("body").each(function() {
                jQuery(this).replaceWith(this.childNodes);
            });
            return this;
        }
    });
    jQuery.expr.pseudos.hidden = function(elem) {
        return !jQuery.expr.pseudos.visible(elem);
    };
    jQuery.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    };
    jQuery.ajaxSettings.xhr = function() {
        try {
            return new window1.XMLHttpRequest();
        } catch (e) {}
    };
    var xhrSuccessStatus = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // trac-1450: sometimes IE returns 1223 when it should be 204
        1223: 204
    }, xhrSupported = jQuery.ajaxSettings.xhr();
    support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    support.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function(options) {
        var callback, errorCallback;
        // Cross domain only allowed if supported through XMLHttpRequest
        if (support.cors || xhrSupported && !options.crossDomain) return {
            send: function(headers, complete) {
                var i, xhr = options.xhr();
                xhr.open(options.type, options.url, options.async, options.username, options.password);
                // Apply custom fields if provided
                if (options.xhrFields) for(i in options.xhrFields)xhr[i] = options.xhrFields[i];
                // Override mime type if needed
                if (options.mimeType && xhr.overrideMimeType) xhr.overrideMimeType(options.mimeType);
                // X-Requested-With header
                // For cross-domain requests, seeing as conditions for a preflight are
                // akin to a jigsaw puzzle, we simply never set it to be sure.
                // (it can always be set on a per-request basis or even using ajaxSetup)
                // For same-domain requests, won't change header if already provided.
                if (!options.crossDomain && !headers["X-Requested-With"]) headers["X-Requested-With"] = "XMLHttpRequest";
                // Set headers
                for(i in headers)xhr.setRequestHeader(i, headers[i]);
                // Callback
                callback = function(type) {
                    return function() {
                        if (callback) {
                            callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                            if (type === "abort") xhr.abort();
                            else if (type === "error") {
                                // Support: IE <=9 only
                                // On a manual native abort, IE9 throws
                                // errors on any property access that is not readyState
                                if (typeof xhr.status !== "number") complete(0, "error");
                                else complete(// File: protocol always yields status 0; see trac-8605, trac-14207
                                xhr.status, xhr.statusText);
                            } else complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                            // IE9 has no XHR2 but throws on binary (trac-11426)
                            // For XHR2 non-text, let the caller handle it (gh-2498)
                            (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                                binary: xhr.response
                            } : {
                                text: xhr.responseText
                            }, xhr.getAllResponseHeaders());
                        }
                    };
                };
                // Listen to events
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                // Support: IE 9 only
                // Use onreadystatechange to replace onabort
                // to handle uncaught aborts
                if (xhr.onabort !== undefined) xhr.onabort = errorCallback;
                else xhr.onreadystatechange = function() {
                    // Check readyState before timeout as it changes
                    if (xhr.readyState === 4) // Allow onerror to be called first,
                    // but that will not handle a native abort
                    // Also, save errorCallback to a variable
                    // as xhr.onerror cannot be accessed
                    window1.setTimeout(function() {
                        if (callback) errorCallback();
                    });
                };
                // Create the abort callback
                callback = callback("abort");
                try {
                    // Do send the request (this may raise an exception)
                    xhr.send(options.hasContent && options.data || null);
                } catch (e) {
                    // trac-14683: Only rethrow if this hasn't been notified as an error yet
                    if (callback) throw e;
                }
            },
            abort: function() {
                if (callback) callback();
            }
        };
    });
    // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
    jQuery.ajaxPrefilter(function(s) {
        if (s.crossDomain) s.contents.script = false;
    });
    // Install script dataType
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(text) {
                jQuery.globalEval(text);
                return text;
            }
        }
    });
    // Handle cache's special case and crossDomain
    jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === undefined) s.cache = false;
        if (s.crossDomain) s.type = "GET";
    });
    // Bind script tag hack transport
    jQuery.ajaxTransport("script", function(s) {
        // This transport only deals with cross domain or forced-by-attrs requests
        if (s.crossDomain || s.scriptAttrs) {
            var script, callback;
            return {
                send: function(_, complete) {
                    script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
                        charset: s.scriptCharset,
                        src: s.url
                    }).on("load error", callback = function(evt) {
                        script.remove();
                        callback = null;
                        if (evt) complete(evt.type === "error" ? 404 : 200, evt.type);
                    });
                    // Use native DOM manipulation to avoid our domManip AJAX trickery
                    document.head.appendChild(script[0]);
                },
                abort: function() {
                    if (callback) callback();
                }
            };
        }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    // Default jsonp settings
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
            this[callback] = true;
            return callback;
        }
    });
    // Detect, normalize options and install callbacks for jsonp requests
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        // Handle iff the expected data type is "jsonp" or we have a parameter to set
        if (jsonProp || s.dataTypes[0] === "jsonp") {
            // Get callback name, remembering preexisting value associated with it
            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            // Insert callback into url or form data
            if (jsonProp) s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            else if (s.jsonp !== false) s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            // Use data converter to retrieve json after script execution
            s.converters["script json"] = function() {
                if (!responseContainer) jQuery.error(callbackName + " was not called");
                return responseContainer[0];
            };
            // Force json dataType
            s.dataTypes[0] = "json";
            // Install callback
            overwritten = window1[callbackName];
            window1[callbackName] = function() {
                responseContainer = arguments;
            };
            // Clean-up function (fires after converters)
            jqXHR.always(function() {
                // If previous value didn't exist - remove it
                if (overwritten === undefined) jQuery(window1).removeProp(callbackName);
                else window1[callbackName] = overwritten;
                // Save back as free
                if (s[callbackName]) {
                    // Make sure that re-using the options doesn't screw things around
                    s.jsonpCallback = originalSettings.jsonpCallback;
                    // Save the callback name for future use
                    oldCallbacks.push(callbackName);
                }
                // Call if it was a function and we have a response
                if (responseContainer && isFunction(overwritten)) overwritten(responseContainer[0]);
                responseContainer = overwritten = undefined;
            });
            // Delegate to script
            return "script";
        }
    });
    // Support: Safari 8 only
    // In Safari 8 documents created via document.implementation.createHTMLDocument
    // collapse sibling forms: the second one becomes a child of the first one.
    // Because of that, this security measure has to be disabled in Safari 8.
    // https://bugs.webkit.org/show_bug.cgi?id=137337
    support.createHTMLDocument = function() {
        var body = document.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
    }();
    // Argument "data" should be string of html
    // context (optional): If specified, the fragment will be created in this context,
    // defaults to document
    // keepScripts (optional): If true, will include scripts passed in the html string
    jQuery.parseHTML = function(data, context, keepScripts) {
        if (typeof data !== "string") return [];
        if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
        }
        var base, parsed, scripts;
        if (!context) {
            // Stop scripts or inline event handlers from being executed immediately
            // by using document.implementation
            if (support.createHTMLDocument) {
                context = document.implementation.createHTMLDocument("");
                // Set the base href for the created document
                // so any parsed elements with URLs
                // are based on the document's URL (gh-2965)
                base = context.createElement("base");
                base.href = document.location.href;
                context.head.appendChild(base);
            } else context = document;
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        // Single tag
        if (parsed) return [
            context.createElement(parsed[1])
        ];
        parsed = buildFragment([
            data
        ], context, scripts);
        if (scripts && scripts.length) jQuery(scripts).remove();
        return jQuery.merge([], parsed.childNodes);
    };
    /**
 * Load a url into a page
 */ jQuery.fn.load = function(url, params, callback) {
        var selector, type, response, self = this, off = url.indexOf(" ");
        if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
        }
        // If it's a function
        if (isFunction(params)) {
            // We assume that it's the callback
            callback = params;
            params = undefined;
        // Otherwise, build a param string
        } else if (params && typeof params === "object") type = "POST";
        // If we have elements to modify, make the request
        if (self.length > 0) jQuery.ajax({
            url: url,
            // If "type" variable is undefined, then "GET" method will be used.
            // Make value of this field explicit since
            // user can override it through ajaxSetup method
            type: type || "GET",
            dataType: "html",
            data: params
        }).done(function(responseText) {
            // Save response for use in complete callback
            response = arguments;
            self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
            // Exclude scripts to avoid IE 'Permission Denied' errors
            jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
            responseText);
        // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
        }).always(callback && function(jqXHR, status) {
            self.each(function() {
                callback.apply(this, response || [
                    jqXHR.responseText,
                    status,
                    jqXHR
                ]);
            });
        });
        return this;
    };
    jQuery.expr.pseudos.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
        }).length;
    };
    jQuery.offset = {
        setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            // Set position first, in-case top/left are set even on static elem
            if (position === "static") elem.style.position = "relative";
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            // Need to be able to calculate position if either
            // top or left is auto and position is either absolute or fixed
            if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction(options)) // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
            options = options.call(elem, i, jQuery.extend({}, curOffset));
            if (options.top != null) props.top = options.top - curOffset.top + curTop;
            if (options.left != null) props.left = options.left - curOffset.left + curLeft;
            if ("using" in options) options.using.call(elem, props);
            else curElem.css(props);
        }
    };
    jQuery.fn.extend({
        // offset() relates an element's border box to the document origin
        offset: function(options) {
            // Preserve chaining for setter
            if (arguments.length) return options === undefined ? this : this.each(function(i) {
                jQuery.offset.setOffset(this, options, i);
            });
            var rect, win, elem = this[0];
            if (!elem) return;
            // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
            // Support: IE <=11 only
            // Running getBoundingClientRect on a
            // disconnected node in IE throws an error
            if (!elem.getClientRects().length) return {
                top: 0,
                left: 0
            };
            // Get document-relative position by adding viewport scroll to viewport-relative gBCR
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
                top: rect.top + win.pageYOffset,
                left: rect.left + win.pageXOffset
            };
        },
        // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function() {
            if (!this[0]) return;
            var offsetParent, offset, doc, elem = this[0], parentOffset = {
                top: 0,
                left: 0
            };
            // position:fixed elements are offset from the viewport, which itself always has zero offset
            if (jQuery.css(elem, "position") === "fixed") // Assume position:fixed implies availability of getBoundingClientRect
            offset = elem.getBoundingClientRect();
            else {
                offset = this.offset();
                // Account for the *real* offset parent, which can be the document or its root element
                // when a statically positioned element is identified
                doc = elem.ownerDocument;
                offsetParent = elem.offsetParent || doc.documentElement;
                while(offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static")offsetParent = offsetParent.parentNode;
                if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                    // Incorporate borders into its offset, since they are outside its content origin
                    parentOffset = jQuery(offsetParent).offset();
                    parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                    parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
                }
            }
            // Subtract parent offsets and element margins
            return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
        },
        // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function() {
            return this.map(function() {
                var offsetParent = this.offsetParent;
                while(offsetParent && jQuery.css(offsetParent, "position") === "static")offsetParent = offsetParent.offsetParent;
                return offsetParent || documentElement;
            });
        }
    });
    // Create scrollLeft and scrollTop methods
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery.fn[method] = function(val) {
            return access(this, function(elem, method, val) {
                // Coalesce documents and windows
                var win;
                if (isWindow(elem)) win = elem;
                else if (elem.nodeType === 9) win = elem.defaultView;
                if (val === undefined) return win ? win[prop] : elem[method];
                if (win) win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
                else elem[method] = val;
            }, method, val, arguments.length);
        };
    });
    // Support: Safari <=7 - 9.1, Chrome <=37 - 49
    // Add the top/left cssHooks using jQuery.fn.position
    // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
    // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
    // getComputedStyle returns percent when specified for top/left/bottom/right;
    // rather than make the css module depend on the offset module, just check for it here
    jQuery.each([
        "top",
        "left"
    ], function(_i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
            if (computed) {
                computed = curCSS(elem, prop);
                // If curCSS returns percentage, fallback to offset
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
            }
        });
    });
    // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, funcName) {
            // Margin is only for outerHeight, outerWidth
            jQuery.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                return access(this, function(elem, type, value) {
                    var doc;
                    if (isWindow(elem)) // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                    return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                    // Get document width or height
                    if (elem.nodeType === 9) {
                        doc = elem.documentElement;
                        // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                        // whichever is greatest
                        return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                    }
                    return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
                    jQuery.css(elem, type, extra) : // Set width or height on the element
                    jQuery.style(elem, type, value, extra);
                }, type, chainable ? margin : undefined, chainable);
            };
        });
    });
    jQuery.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
    ], function(_i, type) {
        jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
        };
    });
    jQuery.fn.extend({
        bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
            return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
            // ( namespace ) or ( selector, types [, fn] )
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        },
        hover: function(fnOver, fnOut) {
            return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
        }
    });
    jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(_i, name) {
        // Handle event binding
        jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
    });
    // Support: Android <=4.0 only
    // Make sure we trim BOM and NBSP
    // Require that the "whitespace run" starts from a non-whitespace
    // to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
    var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    // Bind a function to a context, optionally partially applying any
    // arguments.
    // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
    // However, it is not slated for removal any time soon
    jQuery.proxy = function(fn, context) {
        var tmp, args, proxy;
        if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
        }
        // Quick check to determine if target is callable, in the spec
        // this throws a TypeError, but we will just return undefined.
        if (!isFunction(fn)) return undefined;
        // Simulated bind
        args = slice.call(arguments, 2);
        proxy = function() {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
        };
        // Set the guid of unique handler to the same of original handler, so it can be removed
        proxy.guid = fn.guid = fn.guid || jQuery.guid++;
        return proxy;
    };
    jQuery.holdReady = function(hold) {
        if (hold) jQuery.readyWait++;
        else jQuery.ready(true);
    };
    jQuery.isArray = Array.isArray;
    jQuery.parseJSON = JSON.parse;
    jQuery.nodeName = nodeName;
    jQuery.isFunction = isFunction;
    jQuery.isWindow = isWindow;
    jQuery.camelCase = camelCase;
    jQuery.type = toType;
    jQuery.now = Date.now;
    jQuery.isNumeric = function(obj) {
        // As of jQuery 3.0, isNumeric is limited to
        // strings and numbers (primitives or objects)
        // that can be coerced to finite numbers (gh-2662)
        var type = jQuery.type(obj);
        return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(obj - parseFloat(obj));
    };
    jQuery.trim = function(text) {
        return text == null ? "" : (text + "").replace(rtrim, "$1");
    };
    // Register as a named AMD module, since jQuery can be concatenated with other
    // files that may use define, but not via a proper concatenation script that
    // understands anonymous AMD modules. A named AMD is safest and most robust
    // way to register. Lowercase jquery is used because AMD module names are
    // derived from file names, and jQuery is normally delivered in a lowercase
    // file name. Do this after creating the global so that if an AMD module wants
    // to call noConflict to hide this version of jQuery, it will work.
    // Note that for maximum portability, libraries that are not jQuery should
    // declare themselves as anonymous modules, and avoid setting a global if an
    // AMD loader is present. jQuery is a special case. For more information, see
    // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
    if (typeof define === "function" && define.amd) define("jquery", [], function() {
        return jQuery;
    });
    var // Map over jQuery in case of overwrite
    _jQuery = window1.jQuery, // Map over the $ in case of overwrite
    _$ = window1.$;
    jQuery.noConflict = function(deep) {
        if (window1.$ === jQuery) window1.$ = _$;
        if (deep && window1.jQuery === jQuery) window1.jQuery = _jQuery;
        return jQuery;
    };
    // Expose jQuery and $ identifiers, even in AMD
    // (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
    // and CommonJS for browser emulators (trac-13566)
    if (typeof noGlobal === "undefined") window1.jQuery = window1.$ = jQuery;
    return jQuery;
});

},{}],"gPB96":[function(require,module,exports,__globalThis) {
// =============================================================================
// 与 After Effects (ExtendScript) 的通信模块
// =============================================================================
// 这一行是必须的，用于获取 CEP 的核心通信接口
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @description 通过一次调用获取面板所需的所有初始化数据。
 * @returns {Promise<object>} 返回一个Promise，它最终会解析为一个包含所有初始化数据的对象。
 */ parcelHelpers.export(exports, "getInitialPanelData", ()=>getInitialPanelData);
// --- 以下是你其他JSX函数的Promise封装示例 ---
/**
 * @description [示例] 整理项目
 * @param {string} excludeNamesJson - 需要排除的文件名JSON字符串
 * @returns {Promise<string>}
 */ parcelHelpers.export(exports, "organizeProjectItems", ()=>organizeProjectItems);
/**
 * @description [示例] 创建项目文件夹
 * @param {string} folderNamesJson - 包含文件夹名称的JSON字符串
 * @returns {Promise<string>}
 */ parcelHelpers.export(exports, "createProjectFolders", ()=>createProjectFolders);
// =============================================================================
// 与外部 API (如 DeepSeek) 的通信模块
// =============================================================================
/**
 * 【你原有的函数，完整保留】
 * 调用 DeepSeek API 发送聊天请求。
 * @param {string} apiKey -用户的 DeepSeek API Key。
 * @param {Array<object>} messages - 对话历史消息数组。
 * @returns {Promise<object>} - 返回 API 响应的 JSON 对象。
 */ parcelHelpers.export(exports, "callDeepSeekAPI", ()=>callDeepSeekAPI);
const csInterface = new CSInterface();
/**
 * @description 【核心辅助函数】执行一个JSX脚本并返回一个Promise。
 * 这是所有AE通信的基础，它将老旧的回调方式转换为了现代的Promise方式。
 * @param {string} script - 要执行的JSX脚本内容 (例如 "myFunction('param1')")
 * @returns {Promise<any>} 返回一个Promise，成功时resolve结果，失败时reject错误信息。
 */ function evalScriptAsPromise(script) {
    return new Promise((resolve, reject)=>{
        csInterface.evalScript(script, (result)=>{
            // ExtendScript发生错误时，通常会返回一个以"EvalScript error:"开头的字符串
            if (typeof result === 'string' && result.startsWith("EvalScript error:")) reject(result);
            else resolve(result);
        });
    });
}
function getInitialPanelData() {
    return evalScriptAsPromise('getInitialPanelData()').then((jsonString)=>{
        try {
            // 安全地解析从JSX返回的JSON字符串
            const data = JSON.parse(jsonString);
            if (data.error) // 如果JSX脚本内部捕获了错误并返回，我们也把它当作失败处理
            return Promise.reject(data.error);
            return data;
        } catch (e) {
            // 如果返回的不是一个有效的JSON，也当作失败处理
            return Promise.reject("\u89E3\u6790JSX\u8FD4\u56DE\u7684JSON\u6570\u636E\u5931\u8D25: " + e);
        }
    });
}
function organizeProjectItems(excludeNamesJson) {
    // 为了安全，我们需要对传入的字符串进行转义，防止引号等字符破坏脚本
    const escapedJson = JSON.stringify(excludeNamesJson);
    return evalScriptAsPromise(`organizeProjectItems(${escapedJson})`);
}
function createProjectFolders(folderNamesJson) {
    const escapedJson = JSON.stringify(folderNamesJson);
    return evalScriptAsPromise(`createProjectFolders(${escapedJson})`);
}
async function callDeepSeekAPI(apiKey, messages) {
    const API_URL = 'https://api.deepseek.com/v1/chat/completions';
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: messages
            })
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error.message || `HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('API Call Error:', error);
        throw error;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"iqy1d":[function(require,module,exports,__globalThis) {
// =============================================================================
// 通用 UI 辅助函数 (General UI Helper Functions)
// =============================================================================
/**
 * 在界面右上角显示一个会自动消失的通知消息。
 * @param {string} message - 要显示的消息内容。
 * @param {'info' | 'success' | 'error'} type - 消息类型，会影响样式。
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showToast", ()=>showToast);
/**
 * 生成一个基于时间和随机数的唯一字符串ID。
 * @returns {string} 一个唯一的ID。
 */ parcelHelpers.export(exports, "generateId", ()=>generateId);
/**
 * 打开一个模态弹窗。
 * @param {HTMLElement} modal - 模态弹窗的背景遮罩元素。
 * @param {HTMLElement} modalContent - 模态弹窗的内容面板元素。
 */ parcelHelpers.export(exports, "openModal", ()=>openModal);
/**
 * 关闭一个模态弹窗。
 * @param {HTMLElement} modal - 模态弹窗的背景遮罩元素。
 * @param {HTMLElement} modalContent - 模态弹窗的内容面板元素。
 */ parcelHelpers.export(exports, "closeModal", ()=>closeModal);
/**
 * 在AI聊天日志中添加一条消息。
 * @param {HTMLElement} chatLogElement - 显示聊天记录的DOM元素。
 * @param {string} content - 消息内容。
 * @param {'user' | 'assistant'} role - 消息发送者的角色。
 */ parcelHelpers.export(exports, "addMessageToLog", ()=>addMessageToLog);
/**
 * 显示一个可高度自定义的确认/输入弹窗。
 * @param {object} options - 配置对象.
 * @returns {Promise<any>} - 用户点击确认时解析，点击取消时拒绝。
 */ parcelHelpers.export(exports, "showCustomPrompt", ()=>showCustomPrompt);
function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) {
        console.log(`Toast (${type}): ${message}`);
        return;
    }
    const toast = document.createElement('div');
    toast.className = 'transform transition-all duration-300 ease-out opacity-0 translate-x-full';
    const toastClasses = type === 'success' ? 'toast-success' : type === 'error' ? 'toast-error' : 'bg-dark-200 text-white text-sm font-medium rounded-lg shadow-2xl p-4 max-w-sm';
    toast.innerHTML = `<div class="${toastClasses}">${message}</div>`;
    toastContainer.appendChild(toast);
    setTimeout(()=>toast.classList.remove('opacity-0', 'translate-x-full'), 10);
    setTimeout(()=>{
        toast.classList.add('opacity-0', 'translate-x-full');
        toast.addEventListener('transitionend', ()=>toast.remove());
    }, 6000);
}
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}
function openModal(modal, modalContent) {
    if (!modal || !modalContent) return;
    modal.classList.remove('pointer-events-none', 'opacity-0');
    modalContent.classList.remove('scale-95', 'opacity-0');
}
function closeModal(modal, modalContent) {
    if (!modal || !modalContent) return;
    modal.classList.add('opacity-0');
    modalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(()=>{
        modal.classList.add('pointer-events-none');
    }, 300); // 必须匹配 CSS 中的 transition duration
}
function addMessageToLog(chatLogElement, content, role) {
    const messageWrapper = document.createElement('div');
    if (role === 'user') {
        messageWrapper.className = 'w-full flex justify-end';
        const messageBubble = document.createElement('div');
        messageBubble.className = 'bg-primary/80 rounded-lg p-3 max-w-[80%]';
        const p = document.createElement('p');
        p.className = 'text-white text-sm whitespace-pre-wrap';
        p.textContent = content;
        messageBubble.appendChild(p);
        messageWrapper.appendChild(messageBubble);
    } else {
        messageWrapper.className = 'w-full flex justify-start';
        const messageBubble = document.createElement('div');
        messageBubble.className = 'bg-dark-300 rounded-lg p-3 max-w-[90%] space-y-2';
        const codeRegex = /```(?:javascript|jsx|js)?\s*([\s\S]+?)\s*```/g;
        let lastIndex = 0;
        let match;
        while((match = codeRegex.exec(content)) !== null){
            if (match.index > lastIndex) {
                const textPart = document.createElement('p');
                textPart.className = 'text-gray-300 text-sm whitespace-pre-wrap';
                textPart.textContent = content.substring(lastIndex, match.index).trim();
                if (textPart.textContent) messageBubble.appendChild(textPart);
            }
            const codeWrapper = document.createElement('div');
            codeWrapper.className = 'relative group';
            const pre = document.createElement('pre');
            const code = document.createElement('code');
            code.className = 'language-javascript';
            code.textContent = match[1].trim();
            pre.appendChild(code);
            const copyButton = document.createElement('button');
            copyButton.innerHTML = '<i class="fa fa-copy"></i>';
            copyButton.className = 'absolute top-2 right-2 p-2 text-gray-400 bg-dark-400/50 rounded-lg hover:text-white hover:bg-dark-200 opacity-0 group-hover:opacity-100 transition-all duration-200';
            copyButton.title = "\u590D\u5236";
            copyButton.addEventListener('click', ()=>{
                const codeToCopy = code.textContent;
                const textArea = document.createElement('textarea');
                textArea.value = codeToCopy;
                textArea.style.position = 'fixed';
                textArea.style.top = '-9999px';
                textArea.style.left = '-9999px';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                try {
                    if (document.execCommand('copy')) {
                        copyButton.innerHTML = '<i class="fa fa-check"></i>';
                        copyButton.title = "\u5DF2\u590D\u5236";
                        setTimeout(()=>{
                            copyButton.innerHTML = '<i class="fa fa-copy"></i>';
                            copyButton.title = "\u590D\u5236";
                        }, 2000);
                    } else showToast("\u590D\u5236\u5931\u8D25", 'error');
                } catch (err) {
                    showToast("\u590D\u5236\u5931\u8D25", 'error');
                    console.error("\u65E0\u6CD5\u590D\u5236", err);
                }
                document.body.removeChild(textArea);
            });
            codeWrapper.appendChild(pre);
            codeWrapper.appendChild(copyButton);
            messageBubble.appendChild(codeWrapper);
            // 确保 hljs 在 DOM 更新后执行
            if (window.hljs) window.hljs.highlightElement(code);
            lastIndex = match.index + match[0].length;
        }
        if (lastIndex < content.length) {
            const textPart = document.createElement('p');
            textPart.className = 'text-gray-300 text-sm whitespace-pre-wrap';
            textPart.textContent = content.substring(lastIndex).trim();
            if (textPart.textContent) messageBubble.appendChild(textPart);
        }
        if (messageBubble.childNodes.length === 0) {
            const textPart = document.createElement('p');
            textPart.className = 'text-gray-300 text-sm whitespace-pre-wrap';
            textPart.textContent = content.trim();
            messageBubble.appendChild(textPart);
        }
        messageWrapper.appendChild(messageBubble);
    }
    chatLogElement.appendChild(messageWrapper);
    chatLogElement.scrollTop = chatLogElement.scrollHeight;
}
function showCustomPrompt(options) {
    return new Promise((resolve, reject)=>{
        const genericModal = document.getElementById('genericModal');
        const genericModalContent = document.getElementById('genericModalContent');
        const genericModalTitle = document.getElementById('genericModalTitle');
        const genericModalBody = document.getElementById('genericModalBody');
        const genericModalConfirmBtn = document.getElementById('genericModalConfirmBtn');
        const genericModalCancelBtn = document.getElementById('genericModalCancelBtn');
        if (!genericModal || !genericModalContent || !genericModalTitle || !genericModalBody || !genericModalConfirmBtn || !genericModalCancelBtn) return reject("\u901A\u7528\u5F39\u7A97\u7684 DOM \u5143\u7D20\u672A\u627E\u5230");
        genericModalTitle.textContent = options.title;
        genericModalBody.innerHTML = options.body;
        genericModalConfirmBtn.textContent = options.confirmText || "\u786E\u8BA4";
        genericModalConfirmBtn.className = 'btn-primary px-4 py-2 rounded-lg';
        if (options.confirmClass) genericModalConfirmBtn.classList.add(options.confirmClass);
        const changePathBtn = genericModalBody.querySelector('#prompt_changePathBtn');
        if (changePathBtn && window.cep) changePathBtn.addEventListener('click', ()=>{
            const pathInput = document.getElementById('promptInput_path');
            const initialPath = pathInput ? pathInput.value : '';
            const result = window.cep.fs.showOpenDialogEx(false, true, "\u8BF7\u9009\u62E9\u811A\u672C\u4FDD\u5B58\u6587\u4EF6\u5939", initialPath);
            if (result && result.data && result.data.length > 0) {
                const newDir = result.data[0];
                if (pathInput) {
                    pathInput.value = newDir;
                    pathInput.title = newDir;
                }
            }
        });
        openModal(genericModal, genericModalContent);
        const confirmHandler = ()=>{
            let value;
            if (options.isComplex) {
                const groupSelect = document.getElementById('promptInput_group');
                const fileNameInput = document.getElementById('promptInput_name');
                const pathInput = document.getElementById('promptInput_path');
                value = {
                    groupId: groupSelect ? groupSelect.value : null,
                    fileName: fileNameInput ? fileNameInput.value : null,
                    savePath: pathInput ? pathInput.value : null
                };
            } else {
                // 也处理添加表达式这种多输入框但非复杂对象返回的场景
                const promptInput = document.getElementById('promptInput');
                if (promptInput) value = promptInput.value;
                else value = true;
            }
            cleanup();
            resolve(value);
        };
        const cancelHandler = ()=>{
            cleanup();
            reject();
        };
        const cleanup = ()=>{
            genericModalConfirmBtn.removeEventListener('click', confirmHandler);
            genericModalCancelBtn.removeEventListener('click', cancelHandler);
            closeModal(genericModal, genericModalContent);
        };
        genericModalConfirmBtn.addEventListener('click', confirmHandler, {
            once: true
        });
        genericModalCancelBtn.addEventListener('click', cancelHandler, {
            once: true
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8h0VU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * 初始化欢迎页 (Page 1) 的所有功能和事件监听。
 * @param {CSInterface} csInterface - CSInterface 的实例，用于与 AE 通信。
 */ parcelHelpers.export(exports, "initializePage1", ()=>initializePage1);
var _uiJs = require("../shared/ui.js");
var _constantsJs = require("../shared/constants.js");
function initializePage1(csInterface) {
    // --- DOM 元素获取 ---
    const createDefaultFoldersBtn = document.getElementById('createDefaultFoldersBtn');
    const openFolderPanelBtn = document.getElementById('openFolderPanelBtn');
    const organizeProjectBtn = document.getElementById('organizeProjectBtn');
    const organizeExcludeInput = document.getElementById('organizeExcludeInput');
    // 自定义文件夹面板的 DOM 元素
    const folderPanelModal = document.getElementById('folderPanelModal');
    const folderPanelModalContent = document.getElementById('folderPanelModalContent');
    const closeFolderPanelBtn = document.getElementById('closeFolderPanelBtn');
    const folderInputsContainer = document.getElementById('folderInputsContainer');
    const addFolderInputBtn = document.getElementById('addFolderInputBtn');
    const createCustomFoldersBtn = document.getElementById('createCustomFoldersBtn');
    const saveAsDefaultBtn = document.getElementById('saveAsDefaultBtn');
    const restoreInitialBtn = document.getElementById('restoreInitialBtn');
    const presetSelector = document.getElementById('presetSelector');
    const deletePresetBtn = document.getElementById('deletePresetBtn');
    const newPresetNameInput = document.getElementById('newPresetName');
    const saveNewPresetBtn = document.getElementById('saveNewPresetBtn');
    // --- 内部辅助函数 ---
    function executeCreateFolders(folderArray) {
        const validFolders = folderArray.filter((name)=>name && name.trim() !== '');
        if (validFolders.length === 0) {
            (0, _uiJs.showToast)("\u6CA1\u6709\u8981\u521B\u5EFA\u7684\u6587\u4EF6\u5939\u3002", 'info');
            return;
        }
        const folderNamesJson = JSON.stringify(validFolders);
        // 注意：evalScript 的第二个参数（JSON.stringify）是为了将整个字符串正确传递给 JSX
        const script = `createProjectFolders(${JSON.stringify(folderNamesJson)})`;
        csInterface.evalScript(script, (result)=>{
            if (result) (0, _uiJs.showToast)(result, result.includes("\u9519\u8BEF") ? 'error' : 'success');
            else (0, _uiJs.showToast)("\u811A\u672C\u6267\u884C\u65E0\u54CD\u5E94\u3002", 'error');
        });
    }
    function populateFolderInputs(folderNames) {
        folderInputsContainer.innerHTML = '';
        folderNames.forEach((name)=>createFolderInputElement(name));
    }
    function createFolderInputElement(value = '') {
        const inputDiv = document.createElement('div');
        inputDiv.className = 'flex items-center space-x-3';
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'input-field';
        input.value = value;
        input.placeholder = "\u8F93\u5165\u6587\u4EF6\u5939\u540D\u79F0";
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn-danger p-2 rounded-lg flex-shrink-0';
        deleteBtn.innerHTML = '<i class="fa fa-times"></i>';
        deleteBtn.onclick = ()=>{
            inputDiv.remove();
        };
        inputDiv.appendChild(input);
        inputDiv.appendChild(deleteBtn);
        folderInputsContainer.appendChild(inputDiv);
    }
    function getCurrentFolderList() {
        const inputs = folderInputsContainer.querySelectorAll('input[type="text"]');
        return Array.from(inputs).map((input)=>input.value.trim()).filter((name)=>name);
    }
    function loadPresetsToSelector() {
        const customPresets = JSON.parse(localStorage.getItem((0, _constantsJs.CUSTOM_PRESETS_KEY)) || '{}');
        presetSelector.innerHTML = '<option value="">--\u9009\u62E9\u9884\u8BBE--</option>';
        for(const presetName in customPresets){
            const option = document.createElement('option');
            option.value = presetName;
            option.textContent = presetName;
            presetSelector.appendChild(option);
        }
    }
    // --- 事件监听器 ---
    createDefaultFoldersBtn.addEventListener('click', ()=>{
        const defaultPreset = JSON.parse(localStorage.getItem((0, _constantsJs.DEFAULT_PRESET_KEY)));
        executeCreateFolders(defaultPreset || (0, _constantsJs.initialFolders));
    });
    openFolderPanelBtn.addEventListener('click', ()=>(0, _uiJs.openModal)(folderPanelModal, folderPanelModalContent));
    if (organizeProjectBtn) organizeProjectBtn.addEventListener('click', ()=>{
        const excludeText = organizeExcludeInput.value.trim();
        const excludeNames = excludeText.split(/,|，|\s+/).filter((name)=>name);
        // 注意：这里需要两次 stringify，一次转为JSON字符串，第二次是为了让这个字符串本身能被 evalScript 安全地传递
        const script = `organizeProjectItems(${JSON.stringify(JSON.stringify(excludeNames))})`;
        csInterface.evalScript(script, (result)=>{
            (0, _uiJs.showToast)(result, result.includes("\u5931\u8D25") ? 'error' : 'success');
        });
    });
    // 自定义文件夹面板的事件监听
    closeFolderPanelBtn.addEventListener('click', ()=>(0, _uiJs.closeModal)(folderPanelModal, folderPanelModalContent));
    folderPanelModal.addEventListener('click', (e)=>{
        if (e.target === folderPanelModal) (0, _uiJs.closeModal)(folderPanelModal, folderPanelModalContent);
    });
    addFolderInputBtn.addEventListener('click', ()=>createFolderInputElement());
    createCustomFoldersBtn.addEventListener('click', ()=>{
        executeCreateFolders(getCurrentFolderList());
        (0, _uiJs.closeModal)(folderPanelModal, folderPanelModalContent);
    });
    saveAsDefaultBtn.addEventListener('click', ()=>{
        const folders = getCurrentFolderList();
        if (folders.length > 0) {
            localStorage.setItem((0, _constantsJs.DEFAULT_PRESET_KEY), JSON.stringify(folders));
            (0, _uiJs.showToast)("\u5DF2\u8BBE\u4E3A\u9ED8\u8BA4", 'success');
        } else (0, _uiJs.showToast)("\u914D\u7F6E\u4E3A\u7A7A", 'error');
    });
    restoreInitialBtn.addEventListener('click', ()=>populateFolderInputs((0, _constantsJs.initialFolders)));
    saveNewPresetBtn.addEventListener('click', ()=>{
        const name = newPresetNameInput.value.trim();
        if (!name) return (0, _uiJs.showToast)("\u8BF7\u8F93\u5165\u9884\u8BBE\u540D\u79F0", 'error');
        const folders = getCurrentFolderList();
        if (folders.length === 0) return (0, _uiJs.showToast)("\u6587\u4EF6\u5939\u5217\u8868\u4E3A\u7A7A", 'error');
        const presets = JSON.parse(localStorage.getItem((0, _constantsJs.CUSTOM_PRESETS_KEY)) || '{}');
        presets[name] = folders;
        localStorage.setItem((0, _constantsJs.CUSTOM_PRESETS_KEY), JSON.stringify(presets));
        newPresetNameInput.value = '';
        loadPresetsToSelector();
        presetSelector.value = name;
        (0, _uiJs.showToast)(`\u{9884}\u{8BBE} "${name}" \u{5DF2}\u{4FDD}\u{5B58}`, 'success');
    });
    presetSelector.addEventListener('change', ()=>{
        const name = presetSelector.value;
        if (name) {
            const presets = JSON.parse(localStorage.getItem((0, _constantsJs.CUSTOM_PRESETS_KEY)) || '{}');
            populateFolderInputs(presets[name]);
        }
    });
    deletePresetBtn.addEventListener('click', ()=>{
        const name = presetSelector.value;
        if (!name) return (0, _uiJs.showToast)("\u8BF7\u9009\u62E9\u8981\u5220\u9664\u7684\u9884\u8BBE", 'error');
        if (confirm(`\u{786E}\u{5B9A}\u{5220}\u{9664}\u{9884}\u{8BBE} "${name}"?`)) {
            const presets = JSON.parse(localStorage.getItem((0, _constantsJs.CUSTOM_PRESETS_KEY)) || '{}');
            delete presets[name];
            localStorage.setItem((0, _constantsJs.CUSTOM_PRESETS_KEY), JSON.stringify(presets));
            loadPresetsToSelector();
            populateFolderInputs((0, _constantsJs.initialFolders));
            (0, _uiJs.showToast)(`\u{9884}\u{8BBE} "${name}" \u{5DF2}\u{5220}\u{9664}`, 'info');
        }
    });
    // --- 模块初始化调用 ---
    const defaultPreset = JSON.parse(localStorage.getItem((0, _constantsJs.DEFAULT_PRESET_KEY)));
    populateFolderInputs(defaultPreset || (0, _constantsJs.initialFolders));
    loadPresetsToSelector();
}

},{"../shared/ui.js":"iqy1d","../shared/constants.js":"hsqHL","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hsqHL":[function(require,module,exports,__globalThis) {
// =============================================================================
// 全局常量 (Global Constants)
// =============================================================================
/**
 * 默认的工程文件夹结构
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initialFolders", ()=>initialFolders);
parcelHelpers.export(exports, "DEFAULT_PRESET_KEY", ()=>DEFAULT_PRESET_KEY);
parcelHelpers.export(exports, "CUSTOM_PRESETS_KEY", ()=>CUSTOM_PRESETS_KEY);
parcelHelpers.export(exports, "QUICK_ACCESS_FOLDERS_KEY", ()=>QUICK_ACCESS_FOLDERS_KEY);
parcelHelpers.export(exports, "LIBRARY_FAVORITES_KEY", ()=>LIBRARY_FAVORITES_KEY);
parcelHelpers.export(exports, "SCRIPT_CONFIG_KEY", ()=>SCRIPT_CONFIG_KEY);
parcelHelpers.export(exports, "SCRIPT_FOLDER_KEY", ()=>SCRIPT_FOLDER_KEY);
parcelHelpers.export(exports, "CUSTOM_SCRIPT_SAVE_DIR_KEY", ()=>CUSTOM_SCRIPT_SAVE_DIR_KEY);
parcelHelpers.export(exports, "AI_API_KEY", ()=>AI_API_KEY);
parcelHelpers.export(exports, "AI_CONVERSATIONS_KEY", ()=>AI_CONVERSATIONS_KEY);
parcelHelpers.export(exports, "EFFECTS_KEY", ()=>EFFECTS_KEY);
parcelHelpers.export(exports, "PROJECT_FOLDER_KEY", ()=>PROJECT_FOLDER_KEY);
parcelHelpers.export(exports, "EXPRESSIONS_KEY", ()=>EXPRESSIONS_KEY);
parcelHelpers.export(exports, "AI_EXPRESSION_API_KEY", ()=>AI_EXPRESSION_API_KEY);
parcelHelpers.export(exports, "AI_EXPRESSION_CONVERSATIONS_KEY", ()=>AI_EXPRESSION_CONVERSATIONS_KEY);
const initialFolders = [
    "01_\u89C6\u9891",
    "02_\u97F3\u9891",
    "03_\u56FE\u7247",
    "04_\u5408\u6210",
    "05_\u56FA\u6001\u5C42",
    "06_\u5176\u4ED6"
];
const DEFAULT_PRESET_KEY = 'niuma-accelerator-default-preset';
const CUSTOM_PRESETS_KEY = 'niuma-accelerator-custom-presets';
const QUICK_ACCESS_FOLDERS_KEY = 'niuma-accelerator-quick-access-folders';
const LIBRARY_FAVORITES_KEY = 'niuma-accelerator-library-favorites';
const SCRIPT_CONFIG_KEY = 'niuma-accelerator-script-config-v6';
const SCRIPT_FOLDER_KEY = 'niuma-accelerator-script-folder';
const CUSTOM_SCRIPT_SAVE_DIR_KEY = 'niuma-accelerator-custom-script-dir';
const AI_API_KEY = 'niuma-accelerator-deepseek-api-key';
const AI_CONVERSATIONS_KEY = 'niuma-accelerator-ai-conversations';
const EFFECTS_KEY = 'niuma-accelerator-effects-v2';
const PROJECT_FOLDER_KEY = 'niuma-accelerator-project-folder';
const EXPRESSIONS_KEY = 'niuma-accelerator-expressions-v1';
const AI_EXPRESSION_API_KEY = 'niuma-accelerator-expression-deepseek-api-key';
const AI_EXPRESSION_CONVERSATIONS_KEY = 'niuma-accelerator-ai-expression-conversations';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5kC60":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * 初始化复用库 (Page 2) 的所有功能和事件监听。
 * @param {CSInterface} csInterface - CSInterface 的实例，用于与 AE 通信。
 */ parcelHelpers.export(exports, "initializePage2", ()=>initializePage2);
var _uiJs = require("../shared/ui.js");
var _constantsJs = require("../shared/constants.js");
// 模块级别的状态变量
let libraryNavHistory = [];
let showOnlyLibraryFavorites = false;
function initializePage2(csInterface) {
    // --- DOM 元素获取 ---
    const collectCompBtn = document.getElementById('collectCompBtn');
    const libraryFavoriteToggle = document.getElementById('libraryFavoriteToggle');
    const folderDropZone = document.getElementById('folderDropZone');
    const quickAccessFolders = document.getElementById('quickAccessFolders');
    const libraryBackBtn = document.getElementById('libraryBackBtn');
    const currentPathInput = document.getElementById('currentPathInput');
    const addCurrentPathToQuickAccessBtn = document.getElementById('addCurrentPathToQuickAccessBtn');
    const openPathBtn = document.getElementById('openPathBtn');
    const folderGrid = document.getElementById('folderContentGrid');
    const zoomSlider = document.getElementById('zoomSlider');
    // --- 内部辅助函数 ---
    function getLibraryFavorites() {
        try {
            return JSON.parse(localStorage.getItem((0, _constantsJs.LIBRARY_FAVORITES_KEY)) || '[]');
        } catch (e) {
            return [];
        }
    }
    function saveLibraryFavorites(favorites) {
        localStorage.setItem((0, _constantsJs.LIBRARY_FAVORITES_KEY), JSON.stringify(favorites));
    }
    function toggleLibraryFavorite(aepPath, buttonElement) {
        let favorites = getLibraryFavorites();
        const isFavorite = favorites.includes(aepPath);
        if (isFavorite) {
            favorites = favorites.filter((p)=>p !== aepPath);
            buttonElement.classList.remove('text-yellow-400');
            buttonElement.innerHTML = '<i class="fa fa-star-o"></i>';
        } else {
            favorites.push(aepPath);
            buttonElement.classList.add('text-yellow-400');
            buttonElement.innerHTML = '<i class="fa fa-star"></i>';
        }
        saveLibraryFavorites(favorites);
        if (showOnlyLibraryFavorites && isFavorite) {
            const itemToHide = buttonElement.closest('.asset-preview-item, .aep-only-item');
            if (itemToHide) itemToHide.style.display = 'none';
        }
    }
    function getQuickAccessFolders() {
        try {
            return JSON.parse(localStorage.getItem((0, _constantsJs.QUICK_ACCESS_FOLDERS_KEY)) || '[]');
        } catch (e) {
            return [];
        }
    }
    function saveQuickAccessFolders(folders) {
        localStorage.setItem((0, _constantsJs.QUICK_ACCESS_FOLDERS_KEY), JSON.stringify(folders));
    }
    function addPathToQuickAccess(path) {
        if (!path || path === "\u8BF7\u4ECE\u5DE6\u4FA7\u9009\u62E9\u6587\u4EF6\u5939\uFF0C\u6216\u5728\u6B64\u8F93\u5165\u8DEF\u5F84\u540E\u6309\u56DE\u8F66") {
            (0, _uiJs.showToast)("\u65E0\u6548\u7684\u6587\u4EF6\u5939\u8DEF\u5F84", 'error');
            return;
        }
        csInterface.evalScript(`checkIfFolder(${JSON.stringify(path)})`, (isFolder)=>{
            if (isFolder === 'true') {
                let folders = getQuickAccessFolders();
                if (!folders.includes(path)) {
                    folders.push(path);
                    saveQuickAccessFolders(folders);
                    renderQuickAccessFolders();
                    (0, _uiJs.showToast)("\u6587\u4EF6\u5939\u5DF2\u6DFB\u52A0\u81F3\u5FEB\u901F\u8BBF\u95EE", 'success');
                } else (0, _uiJs.showToast)("\u8BE5\u6587\u4EF6\u5939\u5DF2\u5728\u5FEB\u901F\u8BBF\u95EE\u5217\u8868\u4E2D", 'info');
            } else (0, _uiJs.showToast)("\u8BF7\u62D6\u653E\u4E00\u4E2A\u6587\u4EF6\u5939\uFF0C\u800C\u4E0D\u662F\u6587\u4EF6", 'error');
        });
    }
    function renderQuickAccessFolders() {
        const folders = getQuickAccessFolders();
        quickAccessFolders.innerHTML = '';
        if (folders.length === 0) {
            quickAccessFolders.innerHTML = `<div class="text-center py-8 text-gray-500">
                <p>\u{5FEB}\u{901F}\u{8BBF}\u{95EE}\u{5217}\u{8868}\u{4E3A}\u{7A7A}</p>
                <p class="text-xs mt-1">\u{8BF7}\u{62D6}\u{653E}\u{6587}\u{4EF6}\u{5939}\u{5230}\u{4E0A}\u{65B9}\u{533A}\u{57DF}</p>
            </div>`;
            return;
        }
        folders.forEach((folderPath)=>{
            const folderName = folderPath.split(/[\\/]/).pop();
            const item = document.createElement('div');
            item.className = 'folder-item p-2 justify-between';
            item.dataset.path = folderPath;
            const titleWrapper = document.createElement('div');
            titleWrapper.className = 'flex items-center overflow-hidden';
            titleWrapper.innerHTML = `<i class="fa fa-folder text-yellow-500/80"></i><span class="folder-name">${folderName}</span>`;
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn-icon w-6 h-6 text-gray-500 hover:text-red-500 flex-shrink-0';
            deleteBtn.innerHTML = '<i class="fa fa-trash-o text-xs"></i>';
            deleteBtn.title = "\u79FB\u9664\u6B64\u5FEB\u901F\u8BBF\u95EE\u6587\u4EF6\u5939";
            deleteBtn.onclick = function(e) {
                e.stopPropagation();
                let currentFolders = getQuickAccessFolders();
                currentFolders = currentFolders.filter((p)=>p !== folderPath);
                saveQuickAccessFolders(currentFolders);
                renderQuickAccessFolders();
            };
            item.appendChild(titleWrapper);
            item.appendChild(deleteBtn);
            item.onclick = function() {
                document.querySelectorAll('.folder-item.active').forEach((active)=>active.classList.remove('active'));
                item.classList.add('active');
                libraryNavHistory = [];
                displayFolderContents(folderPath);
            };
            quickAccessFolders.appendChild(item);
        });
    }
    function displayFolderContents(folderPath, isNewNavigation = true) {
        if (!folderPath || folderPath === "\u8BF7\u4ECE\u5DE6\u4FA7\u9009\u62E9\u6587\u4EF6\u5939\uFF0C\u6216\u5728\u6B64\u8F93\u5165\u8DEF\u5F84\u540E\u6309\u56DE\u8F66") return;
        if (isNewNavigation) {
            if (libraryNavHistory[libraryNavHistory.length - 1] !== folderPath) libraryNavHistory.push(folderPath);
        }
        libraryBackBtn.classList.toggle('hidden', libraryNavHistory.length <= 1);
        currentPathInput.value = folderPath;
        currentPathInput.title = folderPath;
        folderGrid.innerHTML = '<div class="col-span-full text-center py-10 text-gray-500"><i class="fa fa-spinner fa-spin fa-2x"></i></div>';
        csInterface.evalScript(`scanFolderForAssets(${JSON.stringify(folderPath)})`, (result)=>{
            if (!result || result.startsWith('ERROR:')) {
                (0, _uiJs.showToast)(`\u{52A0}\u{8F7D}\u{6587}\u{4EF6}\u{5939}\u{5185}\u{5BB9}\u{5931}\u{8D25}: ${result}`, 'error');
                folderGrid.innerHTML = `<div class="col-span-full text-center py-10 text-red-500">${result}</div>`;
                return;
            }
            try {
                const data = JSON.parse(result || '{}');
                folderGrid.innerHTML = '';
                let assetsToRender = Array.isArray(data.assets) ? data.assets : [];
                const favorites = getLibraryFavorites();
                if (showOnlyLibraryFavorites) assetsToRender = assetsToRender.filter((asset)=>favorites.includes(asset.aepPath));
                if ((!data.subfolders || data.subfolders.length === 0) && assetsToRender.length === 0) folderGrid.innerHTML = '<div class="col-span-full text-center py-10 text-gray-500">\u6B64\u6587\u4EF6\u5939\u4E3A\u7A7A\u6216\u65E0\u5339\u914D\u9879</div>';
                (data.subfolders || []).forEach((folder)=>{
                    const folderEl = document.createElement('div');
                    folderEl.className = 'content-folder-item';
                    folderEl.innerHTML = `<i class="fa fa-folder"></i><span class="folder-name">${folder.name}</span>`;
                    folderEl.ondblclick = ()=>displayFolderContents(folder.path);
                    folderGrid.appendChild(folderEl);
                });
                assetsToRender.forEach((asset)=>{
                    let assetEl = null;
                    if (asset.type === 'paired' && asset.gifPath) {
                        assetEl = document.createElement('div');
                        assetEl.className = 'asset-preview-item group';
                        const imgEl = document.createElement('img');
                        imgEl.src = `file:///${asset.gifPath.replace(/\\/g, '/')}`;
                        imgEl.alt = asset.name || '';
                        imgEl.className = 'object-cover';
                        imgEl.onload = ()=>{
                            try {
                                if (imgEl.naturalHeight > imgEl.naturalWidth) assetEl.classList.add('portrait');
                            } catch (e) {}
                        };
                        const nameEl = document.createElement('div');
                        nameEl.className = 'asset-name';
                        nameEl.textContent = asset.name || '';
                        const favoriteBtn = document.createElement('button');
                        favoriteBtn.className = 'asset-favorite-btn text-gray-300';
                        const isFav = favorites.includes(asset.aepPath);
                        if (isFav) {
                            favoriteBtn.classList.add('text-yellow-400');
                            favoriteBtn.innerHTML = `<i class="fa fa-star"></i>`;
                        } else favoriteBtn.innerHTML = `<i class="fa fa-star-o"></i>`;
                        favoriteBtn.title = "\u6536\u85CF/\u53D6\u6D88\u6536\u85CF";
                        favoriteBtn.addEventListener('click', (e)=>{
                            e.stopPropagation();
                            toggleLibraryFavorite(asset.aepPath, favoriteBtn);
                        });
                        assetEl.appendChild(imgEl);
                        assetEl.appendChild(nameEl);
                        assetEl.appendChild(favoriteBtn);
                    } else if (asset.type === 'aep_only') {
                        assetEl = document.createElement('div');
                        assetEl.className = 'aep-only-item content-file-item group';
                    }
                    if (assetEl) {
                        assetEl.dataset.aepPath = asset.aepPath || '';
                        assetEl.ondblclick = ()=>{
                            const aepPathToImport = assetEl.dataset.aepPath;
                            (0, _uiJs.showToast)(`\u{6B63}\u{5728}\u{5BFC}\u{5165} ${asset.name || ''}...`, 'info');
                            csInterface.evalScript(`importAepToProjectPanel(${JSON.stringify(aepPathToImport)})`, (importResult)=>{
                                if (importResult && importResult.startsWith('ERROR:')) (0, _uiJs.showToast)(importResult, 'error');
                                else (0, _uiJs.showToast)("\u5BFC\u5165\u5DF2\u89E6\u53D1", 'success');
                            });
                        };
                        folderGrid.appendChild(assetEl);
                    }
                });
            } catch (e) {
                (0, _uiJs.showToast)("\u89E3\u6790\u6587\u4EF6\u5939\u6570\u636E\u5931\u8D25", 'error');
                console.error(e, result);
            }
        });
    }
    // --- 事件监听器 ---
    if (zoomSlider && folderGrid) {
        const baseWidth = 180;
        folderGrid.style.setProperty('--item-min-width', `${baseWidth}px`);
        zoomSlider.addEventListener('input', function() {
            const newMinWidth = baseWidth * (this.value / 100);
            folderGrid.style.setProperty('--item-min-width', `${newMinWidth}px`);
        });
    }
    folderDropZone.addEventListener('dragenter', (e)=>{
        e.preventDefault();
        e.stopPropagation();
        folderDropZone.classList.add('dropzone-active');
    });
    folderDropZone.addEventListener('dragover', (e)=>{
        e.preventDefault();
        e.stopPropagation();
    });
    folderDropZone.addEventListener('dragleave', (e)=>{
        e.preventDefault();
        e.stopPropagation();
        folderDropZone.classList.remove('dropzone-active');
    });
    folderDropZone.addEventListener('drop', (e)=>{
        e.preventDefault();
        e.stopPropagation();
        folderDropZone.classList.remove('dropzone-active');
        const files = e.dataTransfer.files;
        if (files.length > 0) addPathToQuickAccess(files[0].path);
    });
    currentPathInput.addEventListener('keydown', (event)=>{
        if (event.key === 'Enter') {
            const path = currentPathInput.value.trim();
            if (path) displayFolderContents(path);
        }
    });
    openPathBtn.addEventListener('click', ()=>{
        const path = currentPathInput.value;
        if (path && path !== "\u8BF7\u4ECE\u5DE6\u4FA7\u9009\u62E9\u6587\u4EF6\u5939\uFF0C\u6216\u5728\u6B64\u8F93\u5165\u8DEF\u5F84\u540E\u6309\u56DE\u8F66") csInterface.evalScript(`openFolder(${JSON.stringify(path)})`);
    });
    addCurrentPathToQuickAccessBtn.addEventListener('click', ()=>{
        const path = currentPathInput.value;
        addPathToQuickAccess(path);
    });
    collectCompBtn.addEventListener('click', ()=>{
        const extensionRoot = csInterface.getSystemPath('extension');
        const gifBatPath = extensionRoot + "/js/gif.bat";
        const safePath = gifBatPath.replace(/\\/g, '/');
        const script = 'collectActiveComp("' + safePath + '")';
        csInterface.evalScript(script, (result)=>{
            try {
                const res = JSON.parse(result);
                if (res.success) (0, _uiJs.showToast)(res.message, 'success');
                else (0, _uiJs.showToast)(res.message, 'error');
            } catch (e) {
                console.error("\u89E3\u6790 collectActiveComp \u8FD4\u56DE\u7ED3\u679C\u5931\u8D25:", e, result);
                (0, _uiJs.showToast)("\u811A\u672C\u6267\u884C\u5931\u8D25\uFF0C\u65E0\u6CD5\u89E3\u6790\u8FD4\u56DE\u6570\u636E\u3002", 'error');
            }
        });
    });
    libraryFavoriteToggle.addEventListener('click', ()=>{
        showOnlyLibraryFavorites = !showOnlyLibraryFavorites;
        libraryFavoriteToggle.innerHTML = showOnlyLibraryFavorites ? '<i class="fa fa-star mr-2"></i>\u663E\u793A\u5168\u90E8' : '<i class="fa fa-star-o mr-2"></i>\u53EA\u770B\u6536\u85CF';
        if (showOnlyLibraryFavorites) libraryFavoriteToggle.classList.add('text-yellow-400');
        else libraryFavoriteToggle.classList.remove('text-yellow-400');
        const currentPath = currentPathInput.value;
        if (currentPath && currentPath !== "\u8BF7\u4ECE\u5DE6\u4FA7\u9009\u62E9\u6587\u4EF6\u5939\uFF0C\u6216\u5728\u6B64\u8F93\u5165\u8DEF\u5F84\u540E\u6309\u56DE\u8F66") displayFolderContents(currentPath, false);
    });
    libraryBackBtn.addEventListener('click', function() {
        if (libraryNavHistory.length > 1) {
            libraryNavHistory.pop();
            var parentPath = libraryNavHistory[libraryNavHistory.length - 1];
            displayFolderContents(parentPath, false);
        }
    });
    // --- 模块初始化调用 ---
    renderQuickAccessFolders();
}

},{"../shared/ui.js":"iqy1d","../shared/constants.js":"hsqHL","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5ofkH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * 初始化脚本页面 (Page 3) 的所有功能和事件监听。
 * @param {CSInterface} csInterface - CSInterface 的实例，用于与 AE 通信。
 */ parcelHelpers.export(exports, "initializePage3", ()=>initializePage3);
var _uiJs = require("../shared/ui.js");
var _constantsJs = require("../shared/constants.js");
var _apiJs = require("../shared/api.js");
// 模块级别的状态变量
let showOnlyScriptFavorites = false;
let allAvailableScripts = [];
let conversations = [];
let activeConversationId = null;
function initializePage3(csInterface) {
    // --- DOM 元素获取 ---
    // 脚本管理
    const scriptSearchInput = document.getElementById('scriptSearchInput');
    const addScriptGroupBtn = document.getElementById('addScriptGroupBtn');
    const scriptListContainer = document.getElementById('scriptListContainer');
    const scriptFavoritesBar = document.getElementById('scriptFavoritesBar');
    const scriptFavoriteToggle = document.getElementById('scriptFavoriteToggle');
    const loadScriptsBtn = document.getElementById('loadScriptsBtn');
    // AI 脚本助手
    const aiSettingsBtn = document.getElementById('aiSettingsBtn');
    const aiPromptInput = document.getElementById('aiPromptInput');
    const aiSendBtn = document.getElementById('aiSendBtn');
    const aiGeneratorMainView = document.getElementById('aiGeneratorMainView');
    const aiGeneratorSetupView = document.getElementById('aiGeneratorSetupView');
    const aiApiKeyInput = document.getElementById('aiApiKeyInput');
    const aiSaveApiKeyBtn = document.getElementById('aiSaveApiKeyBtn');
    const toggleApiKeyVisibilityBtn = document.getElementById('toggleApiKeyVisibilityBtn');
    const aiChatLog = document.getElementById('aiChatLog');
    const aiNewChatBtn = document.getElementById('aiNewChatBtn');
    const aiConversationList = document.getElementById('aiConversationList');
    const apiKeyError = document.getElementById('apiKeyError');
    // 自定义脚本弹窗
    const aiRunCustomScriptBtn = document.getElementById('aiRunCustomScriptBtn');
    const customScriptModal = document.getElementById('customScriptModal');
    const customScriptModalContent = document.getElementById('customScriptModalContent');
    const closeCustomScriptModalBtn = document.getElementById('closeCustomScriptModalBtn');
    const customScriptInput = document.getElementById('customScriptInput');
    const runCustomScriptBtn = document.getElementById('runCustomScriptBtn');
    const saveCustomScriptBtn = document.getElementById('saveCustomScriptBtn');
    // =============================================================================
    // --- 脚本管理模块 (Script Management Module) ---
    // =============================================================================
    function getScriptConfig() {
        try {
            const configStr = localStorage.getItem((0, _constantsJs.SCRIPT_CONFIG_KEY));
            if (configStr) {
                const config = JSON.parse(configStr);
                // 确保数据结构的兼容性
                if (config && Array.isArray(config.groups)) return config;
            }
        } catch (e) {
            console.error("\u89E3\u6790\u811A\u672C\u914D\u7F6E\u5931\u8D25:", e);
        }
        // 返回一个默认的、安全的结构
        return {
            groups: [
                {
                    id: (0, _uiJs.generateId)(),
                    name: "\u9ED8\u8BA4\u5206\u7EC4",
                    scripts: []
                }
            ]
        };
    }
    function saveScriptConfig(config) {
        localStorage.setItem((0, _constantsJs.SCRIPT_CONFIG_KEY), JSON.stringify(config));
    }
    function runScript(path) {
        if (!path) return;
        const sanitizedPath = path.replace(/\\/g, '/');
        const scriptToRun = '$.evalFile("' + sanitizedPath + '")';
        csInterface.evalScript('runScriptAndReportErrors(' + JSON.stringify(scriptToRun) + ')', function(result) {
            if (result === "success") (0, _uiJs.showToast)("\u811A\u672C\u6267\u884C\u5B8C\u6BD5", "success");
        // 错误情况由全局的 com.niuma.scripterror 事件监听器处理
        });
    }
    function createScriptListItemElement(scriptData) {
        const item = document.createElement('div');
        item.className = 'script-list-item';
        item.dataset.path = scriptData.path;
        item.title = scriptData.path;
        item.innerHTML = `
            <span class="script-name">${scriptData.path.split(/[\\/]/).pop().replace(/\.(jsx|jsxbin)$/, '')}</span>
            <div class="action-buttons">
                <button class="action-btn favorite-btn" title="\u{6536}\u{85CF}">
                    <i class="fa ${scriptData.isFavorite ? 'fa-star text-yellow-400' : 'fa-star-o'}"></i>
                </button>
                <button class="action-btn delete-btn" title="\u{4ECE}\u{786C}\u{76D8}\u{5220}\u{9664}\u{811A}\u{672C}">
                    <i class="fa fa-trash-o"></i>
                </button>
            </div>`;
        item.addEventListener('click', (e)=>{
            if (!e.target.closest('button')) runScript(scriptData.path);
        });
        return item;
    }
    function createScriptGroupElement(group, isInitiallyExpanded = false) {
        const groupEl = document.createElement('div');
        groupEl.className = 'mb-2 group/script-group';
        groupEl.dataset.groupId = group.id;
        const header = document.createElement('div');
        header.className = "flex items-center justify-between p-1 cursor-pointer rounded-md hover:bg-dark-300/50";
        const titleContainer = document.createElement('div');
        titleContainer.className = 'flex items-center gap-2 flex-1 overflow-hidden';
        const titleSpan = document.createElement('span');
        titleSpan.className = 'font-semibold text-gray-300 text-sm truncate';
        titleSpan.textContent = group.name;
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'text-gray-500 hover:text-red-500 opacity-0 group-hover/script-group:opacity-100 transition-opacity w-5 h-5 flex items-center justify-center';
        deleteBtn.innerHTML = '<i class="fa fa-trash-o text-xs"></i>';
        deleteBtn.title = "\u5220\u9664\u5206\u7EC4";
        titleContainer.appendChild(titleSpan);
        if (group.name !== "\u9ED8\u8BA4\u5206\u7EC4") titleContainer.appendChild(deleteBtn);
        const expandIcon = document.createElement('i');
        expandIcon.className = `fa ${isInitiallyExpanded ? 'fa-chevron-down' : 'fa-chevron-right'} text-xs text-gray-400 transition-transform duration-200 flex-shrink-0`;
        header.appendChild(titleContainer);
        header.appendChild(expandIcon);
        const list = document.createElement('div');
        list.className = `pl-2 pt-1 ${isInitiallyExpanded ? '' : 'hidden'}`;
        (group.scripts || []).forEach((scriptData)=>{
            list.appendChild(createScriptListItemElement(scriptData));
        });
        groupEl.appendChild(header);
        groupEl.appendChild(list);
        // 事件绑定
        header.onclick = ()=>{
            list.classList.toggle('hidden');
            expandIcon.classList.toggle('fa-chevron-right');
            expandIcon.classList.toggle('fa-chevron-down');
        };
        deleteBtn.onclick = (e)=>{
            e.stopPropagation();
            (0, _uiJs.showCustomPrompt)({
                title: "\u786E\u8BA4\u5220\u9664\u5206\u7EC4",
                body: `<p>\u{60A8}\u{786E}\u{5B9A}\u{8981}\u{5220}\u{9664}\u{5206}\u{7EC4} "${group.name}" \u{5417}\u{FF1F}</p><p class="text-yellow-400 text-xs mt-2">\u{8BE5}\u{5206}\u{7EC4}\u{4E0B}\u{7684}\u{6240}\u{6709}\u{811A}\u{672C}\u{5C06}\u{88AB}\u{5B89}\u{5168}\u{5730}\u{79FB}\u{81F3}\u{201C}\u{9ED8}\u{8BA4}\u{5206}\u{7EC4}\u{201D}\u{3002}</p>`,
                confirmText: "\u5220\u9664",
                confirmClass: 'btn-danger'
            }).then(()=>{
                deleteScriptGroup(group.id);
            }).catch(()=>{});
        };
        return groupEl;
    }
    function addScriptUIEventListeners() {
        document.querySelectorAll('.script-list-item .favorite-btn').forEach((btn)=>{
            btn.addEventListener('click', (e)=>{
                e.stopPropagation();
                const path = e.target.closest('.script-list-item').dataset.path;
                toggleScriptFavorite(path);
            });
        });
        document.querySelectorAll('.script-list-item .delete-btn').forEach((btn)=>{
            btn.addEventListener('click', (e)=>{
                e.stopPropagation();
                const path = e.target.closest('.script-list-item').dataset.path;
                const fileName = path.split(/[\\/]/).pop();
                (0, _uiJs.showCustomPrompt)({
                    title: "\u786E\u8BA4\u5220\u9664\u811A\u672C",
                    body: `<p>\u{60A8}\u{786E}\u{5B9A}\u{8981}\u{5220}\u{9664}\u{811A}\u{672C}\u{6587}\u{4EF6} "${fileName}" \u{5417}\u{FF1F}</p><p class="text-red-500 text-xs mt-2">\u{6B64}\u{64CD}\u{4F5C}\u{5C06}\u{4ECE}\u{60A8}\u{7684}\u{786C}\u{76D8}\u{4E0A}\u{6C38}\u{4E45}\u{5220}\u{9664}\u{8BE5}\u{6587}\u{4EF6}\u{FF0C}\u{65E0}\u{6CD5}\u{64A4}\u{9500}\u{3002}</p>`,
                    confirmText: "\u6C38\u4E45\u5220\u9664",
                    confirmClass: 'btn-danger'
                }).then(()=>{
                    const sanitizedPath = path.replace(/\\/g, '/');
                    const script = `(function() {
                        var fileToDelete = new File(${JSON.stringify(sanitizedPath)});
                        if (fileToDelete.exists) { return fileToDelete.remove() ? "success" : "\u{9519}\u{8BEF}: \u{6587}\u{4EF6}\u{53EF}\u{80FD}\u{88AB}\u{5360}\u{7528}\u{6216}\u{6743}\u{9650}\u{4E0D}\u{8DB3}\u{3002}"; }
                        else { return "\u{9519}\u{8BEF}: \u{6587}\u{4EF6}\u{8DEF}\u{5F84}\u{4E0D}\u{5B58}\u{5728}\u{3002}"; }
                    })()`;
                    csInterface.evalScript(script, (result)=>{
                        if (result === 'success') {
                            const config = getScriptConfig();
                            config.groups.forEach((group)=>{
                                group.scripts = (group.scripts || []).filter((s)=>s.path !== path);
                            });
                            saveScriptConfig(config);
                            renderScriptsUI();
                            (0, _uiJs.showToast)(`\u{811A}\u{672C} "${fileName}" \u{5DF2}\u{4ECE}\u{786C}\u{76D8}\u{5220}\u{9664}`, 'success');
                        } else (0, _uiJs.showToast)(`\u{5220}\u{9664}\u{5931}\u{8D25}: ${result}`, 'error');
                    });
                }).catch(()=>{});
            });
        });
    }
    function renderScriptsUI() {
        const expansionStates = {};
        scriptListContainer.querySelectorAll('.group\\/script-group').forEach((groupEl)=>{
            const groupId = groupEl.dataset.groupId;
            const listEl = groupEl.querySelector('div:last-child');
            if (groupId && listEl) expansionStates[groupId] = !listEl.classList.contains('hidden');
        });
        const config = getScriptConfig();
        const searchTerm = scriptSearchInput.value.toLowerCase();
        let groupsToRender = config.groups || [];
        if (showOnlyScriptFavorites) groupsToRender = groupsToRender.map((group)=>{
            const favoriteScripts = (group.scripts || []).filter((script)=>script.isFavorite);
            return {
                ...group,
                scripts: favoriteScripts
            };
        }).filter((group)=>group.scripts.length > 0);
        if (searchTerm) groupsToRender = groupsToRender.map((group)=>{
            const searchedScripts = (group.scripts || []).filter((script)=>script.path.split(/[\\/]/).pop().toLowerCase().replace(/\.(jsx|jsxbin)$/, '').includes(searchTerm));
            return {
                ...group,
                scripts: searchedScripts
            };
        }).filter((group)=>group.scripts.length > 0);
        scriptListContainer.innerHTML = '';
        if (groupsToRender.length === 0) scriptListContainer.innerHTML = `<div class="text-center py-8 text-gray-500"><i class="fa fa-folder-open-o fa-2x mb-3"></i><p>\u{6CA1}\u{6709}\u{627E}\u{5230}\u{811A}\u{672C}</p><p class="text-xs mt-1">\u{8BF7}\u{68C0}\u{67E5}\u{7B5B}\u{9009}\u{6761}\u{4EF6}\u{6216}\u{52A0}\u{8F7D}\u{811A}\u{672C}</p></div>`;
        else groupsToRender.forEach((group)=>{
            const isExpanded = expansionStates[group.id] === undefined ? true : expansionStates[group.id];
            scriptListContainer.appendChild(createScriptGroupElement(group, isExpanded));
        });
        scriptFavoritesBar.innerHTML = '';
        const favorites = [];
        (config.groups || []).forEach((g)=>{
            (g.scripts || []).forEach((s)=>{
                if (s.isFavorite) favorites.push(s);
            });
        });
        if (favorites.length > 0) favorites.forEach((script)=>{
            const favEl = document.createElement('div');
            favEl.className = 'favorite-script-item';
            favEl.dataset.path = script.path;
            favEl.title = script.path;
            const nameSpan = document.createElement('span');
            nameSpan.textContent = script.path.split(/[\\/]/).pop().replace(/\.(jsx|jsxbin)$/, '');
            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-favorite-btn';
            removeBtn.innerHTML = '<i class="fa fa-times"></i>';
            favEl.appendChild(nameSpan);
            favEl.appendChild(removeBtn);
            favEl.addEventListener('click', (e)=>{
                if (!e.target.closest('.remove-favorite-btn')) runScript(script.path);
            });
            removeBtn.addEventListener('click', (e)=>{
                e.stopPropagation();
                toggleScriptFavorite(script.path);
            });
            scriptFavoritesBar.appendChild(favEl);
        });
        else scriptFavoritesBar.innerHTML = `<span class="text-gray-500 text-sm">\u{70B9}\u{51FB}\u{5DE6}\u{4FA7}\u{811A}\u{672C}\u{65C1}\u{7684}<i class="fa fa-star-o mx-1"></i>\u{6309}\u{94AE}\u{53EF}\u{6DFB}\u{52A0}\u{81F3}\u{6B64}</span>`;
        addScriptUIEventListeners();
    }
    function mergeScriptsWithConfig() {
        const config = getScriptConfig();
        const allKnownPaths = new Set();
        config.groups.forEach((group)=>{
            (group.scripts || []).forEach((script)=>{
                allKnownPaths.add(script.path);
            });
        });
        const newScripts = allAvailableScripts.filter((script)=>!allKnownPaths.has(script.path));
        if (newScripts.length > 0) {
            let defaultGroup = config.groups.find((g)=>g.name === "\u9ED8\u8BA4\u5206\u7EC4");
            if (!defaultGroup) {
                defaultGroup = {
                    id: (0, _uiJs.generateId)(),
                    name: "\u9ED8\u8BA4\u5206\u7EC4",
                    scripts: []
                };
                config.groups.unshift(defaultGroup);
            }
            if (!defaultGroup.scripts) defaultGroup.scripts = [];
            newScripts.forEach((script)=>{
                defaultGroup.scripts.push({
                    path: script.path,
                    isFavorite: false
                });
            });
            saveScriptConfig(config);
        }
    }
    function loadDefaultAeScripts() {
        return new Promise((resolve)=>{
            csInterface.evalScript('scanAeScripts()', (result)=>{
                try {
                    if (result && result !== 'null') {
                        const defaultScripts = JSON.parse(result);
                        const existingPaths = new Set(allAvailableScripts.map((s)=>s.path));
                        defaultScripts.forEach((script)=>{
                            if (!existingPaths.has(script.path)) {
                                allAvailableScripts.push(script);
                                existingPaths.add(script.path);
                            }
                        });
                    }
                } catch (e) {
                    (0, _uiJs.showToast)("\u89E3\u6790AE\u9ED8\u8BA4\u811A\u672C\u5217\u8868\u5931\u8D25", 'error');
                }
                resolve();
            });
        });
    }
    async function initializeScriptModule() {
        await loadDefaultAeScripts();
        mergeScriptsWithConfig();
        renderScriptsUI();
    }
    function deleteScriptGroup(groupId) {
        let config = getScriptConfig();
        const groupToDelete = config.groups.find((g)=>g.id === groupId);
        if (!groupToDelete || groupToDelete.name === "\u9ED8\u8BA4\u5206\u7EC4") return;
        let defaultGroup = config.groups.find((g)=>g.name === "\u9ED8\u8BA4\u5206\u7EC4");
        if (!defaultGroup) {
            defaultGroup = {
                id: (0, _uiJs.generateId)(),
                name: "\u9ED8\u8BA4\u5206\u7EC4",
                scripts: []
            };
            config.groups.unshift(defaultGroup);
        }
        if (groupToDelete.scripts && groupToDelete.scripts.length > 0) {
            if (!defaultGroup.scripts) defaultGroup.scripts = [];
            defaultGroup.scripts.push(...groupToDelete.scripts);
        }
        config.groups = config.groups.filter((g)=>g.id !== groupId);
        saveScriptConfig(config);
        renderScriptsUI();
        (0, _uiJs.showToast)(`\u{5206}\u{7EC4} "${groupToDelete.name}" \u{5DF2}\u{5220}\u{9664}`, 'success');
    }
    function toggleScriptFavorite(path) {
        const config = getScriptConfig();
        for (const group of config.groups){
            const script = (group.scripts || []).find((s)=>s.path === path);
            if (script) {
                script.isFavorite = !script.isFavorite;
                break;
            }
        }
        saveScriptConfig(config);
        renderScriptsUI();
    }
    function loadScriptFiles() {
        csInterface.evalScript('selectScriptFiles()', (result)=>{
            if (!result || result === 'null' || result === 'canceled') return;
            try {
                const data = JSON.parse(result);
                const selectedScripts = data.scripts || [];
                if (selectedScripts.length === 0) return;
                const config = getScriptConfig();
                const allKnownPaths = new Set(config.groups.flatMap((g)=>(g.scripts || []).map((s)=>s.path)));
                const newScripts = selectedScripts.filter((script)=>!allKnownPaths.has(script.path));
                if (newScripts.length > 0) {
                    const groupOptions = (config.groups || []).map((g)=>`<option value="${g.id}">${g.name}</option>`).join('');
                    (0, _uiJs.showCustomPrompt)({
                        title: "\u52A0\u8F7D\u65B0\u811A\u672C",
                        body: `<div class="space-y-2"><p class="text-sm text-gray-300">\u{68C0}\u{6D4B}\u{5230} ${newScripts.length} \u{4E2A}\u{65B0}\u{811A}\u{672C}\u{3002}\u{8BF7}\u{9009}\u{62E9}\u{8981}\u{5C06}\u{5B83}\u{4EEC}\u{6DFB}\u{52A0}\u{5230}\u{7684}\u{5206}\u{7EC4}\u{FF1A}</p><select id="promptInput" class="input-field w-full mt-2">${groupOptions}</select></div>`,
                        confirmText: "\u6DFB\u52A0"
                    }).then((selectedGroupId)=>{
                        const targetGroup = config.groups.find((g)=>g.id === selectedGroupId);
                        if (targetGroup) {
                            if (!targetGroup.scripts) targetGroup.scripts = [];
                            newScripts.forEach((script)=>{
                                targetGroup.scripts.push({
                                    path: script.path,
                                    isFavorite: false
                                });
                            });
                            saveScriptConfig(config);
                            renderScriptsUI();
                            (0, _uiJs.showToast)(`${newScripts.length}\u{4E2A}\u{65B0}\u{811A}\u{672C}\u{5DF2}\u{6DFB}\u{52A0}\u{5230} "${targetGroup.name}" \u{5206}\u{7EC4}`, 'success');
                        }
                    }).catch(()=>{});
                } else (0, _uiJs.showToast)("\u6240\u9009\u811A\u672C\u5DF2\u5B58\u5728\u4E8E\u5217\u8868\u4E2D", 'info');
            } catch (e) {
                (0, _uiJs.showToast)("\u89E3\u6790\u811A\u672C\u6587\u4EF6\u5217\u8868\u5931\u8D25", 'error');
                console.error(e, result);
            }
        });
    }
    // =============================================================================
    // --- AI 脚本助手模块 (AI Script Assistant Module) ---
    // =============================================================================
    function loadConversations() {
        try {
            conversations = JSON.parse(localStorage.getItem((0, _constantsJs.AI_CONVERSATIONS_KEY))) || [];
        } catch (e) {
            console.error("\u65E0\u6CD5\u89E3\u6790\u5BF9\u8BDD\u5386\u53F2: ", e);
            conversations = [];
        }
    }
    function saveConversations() {
        localStorage.setItem((0, _constantsJs.AI_CONVERSATIONS_KEY), JSON.stringify(conversations));
    }
    function setActiveConversation(id) {
        activeConversationId = id;
        renderConversationList();
        renderChatLog();
    }
    function createNewConversation() {
        const newId = (0, _uiJs.generateId)();
        const newConversation = {
            id: newId,
            title: `\u{5BF9}\u{8BDD} ${conversations.length + 1}`,
            history: [
                {
                    "role": "system",
                    "content": "You are a helpful AI assistant specializing in Adobe After Effects ExtendScript (ES3). Your primary goal is to assist users by providing clear, well-explained solutions. When a user asks for a script, first provide a concise explanation of how the script works, using markdown for formatting. Then, present the complete, executable ExtendScript code inside a formatted javascript markdown block. Always be friendly and encouraging."
                }
            ]
        };
        conversations.unshift(newConversation);
        setActiveConversation(newId);
        saveConversations();
    }
    function renderChatLog() {
        aiChatLog.innerHTML = '';
        const activeConv = conversations.find((c)=>c.id === activeConversationId);
        if (activeConv) activeConv.history.forEach((message)=>{
            if (message.role !== 'system') (0, _uiJs.addMessageToLog)(aiChatLog, message.content, message.role);
        });
    }
    function renderConversationList() {
        aiConversationList.innerHTML = '';
        conversations.forEach((conv)=>{
            const item = document.createElement('div');
            item.className = `p-2 rounded-lg cursor-pointer text-sm truncate flex justify-between items-center group ${conv.id === activeConversationId ? 'bg-primary/20 text-white' : 'hover:bg-dark-300'}`;
            item.dataset.id = conv.id;
            item.title = conv.title;
            const titleSpan = document.createElement('span');
            titleSpan.className = 'flex-1 truncate';
            titleSpan.textContent = conv.title;
            item.appendChild(titleSpan);
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'w-5 h-5 items-center justify-center text-gray-500 hover:text-white hidden group-hover:flex flex-shrink-0';
            deleteBtn.innerHTML = '<i class="fa fa-trash-o"></i>';
            item.appendChild(deleteBtn);
            item.addEventListener('click', ()=>setActiveConversation(conv.id));
            deleteBtn.onclick = (e)=>{
                e.stopPropagation();
                (0, _uiJs.showCustomPrompt)({
                    title: "\u786E\u8BA4\u5220\u9664\u5BF9\u8BDD",
                    body: `<p>\u{786E}\u{5B9A}\u{8981}\u{5220}\u{9664}\u{5BF9}\u{8BDD} "${conv.title}" \u{5417}\u{FF1F}</p>`,
                    confirmText: "\u5220\u9664",
                    confirmClass: 'btn-danger'
                }).then(()=>{
                    conversations = conversations.filter((c)=>c.id !== conv.id);
                    saveConversations();
                    if (activeConversationId === conv.id) {
                        if (conversations.length > 0) setActiveConversation(conversations[0].id);
                        else createNewConversation();
                    } else renderConversationList();
                }).catch(()=>{});
            };
            aiConversationList.appendChild(item);
        });
    }
    function toggleAiGeneratorView() {
        const apiKey = localStorage.getItem((0, _constantsJs.AI_API_KEY));
        if (apiKey) {
            aiGeneratorMainView.style.display = 'flex';
            aiGeneratorSetupView.style.display = 'none';
        } else {
            aiGeneratorMainView.style.display = 'none';
            aiGeneratorSetupView.style.display = 'flex';
        }
    }
    function initializeAiChat() {
        toggleAiGeneratorView();
        loadConversations();
        if (conversations.length === 0) createNewConversation();
        else setActiveConversation(conversations[0].id);
    }
    // =============================================================================
    // --- 事件监听器 (Event Listeners) ---
    // =============================================================================
    // --- 脚本管理事件 ---
    scriptSearchInput.addEventListener('input', renderScriptsUI);
    scriptFavoriteToggle.addEventListener('click', ()=>{
        showOnlyScriptFavorites = !showOnlyScriptFavorites;
        scriptFavoriteToggle.innerHTML = showOnlyScriptFavorites ? '<i class="fa fa-star mr-2"></i>\u663E\u793A\u5168\u90E8' : '<i class="fa fa-star-o mr-2"></i>\u53EA\u770B\u6536\u85CF';
        if (showOnlyScriptFavorites) scriptFavoriteToggle.classList.add('text-yellow-400');
        else scriptFavoriteToggle.classList.remove('text-yellow-400');
        renderScriptsUI();
    });
    addScriptGroupBtn.addEventListener('click', ()=>{
        (0, _uiJs.showCustomPrompt)({
            title: "\u65B0\u5EFA\u5206\u7EC4",
            body: '<input type="text" id="promptInput" class="input-field w-full" placeholder="\u8F93\u5165\u65B0\u5206\u7EC4\u7684\u540D\u79F0">',
            confirmText: "\u521B\u5EFA"
        }).then((groupName)=>{
            if (groupName && groupName.trim()) {
                let config = getScriptConfig();
                if (!config.groups) config.groups = [];
                config.groups.push({
                    id: (0, _uiJs.generateId)(),
                    name: groupName.trim(),
                    scripts: []
                });
                saveScriptConfig(config);
                renderScriptsUI();
            }
        }).catch(()=>{});
    });
    loadScriptsBtn.addEventListener('click', loadScriptFiles);
    // --- AI 助手事件 ---
    aiSendBtn.addEventListener('click', async ()=>{
        const prompt = aiPromptInput.value.trim();
        if (!prompt) return;
        const apiKey = localStorage.getItem((0, _constantsJs.AI_API_KEY));
        if (!apiKey) {
            (0, _uiJs.showToast)("\u8BF7\u5148\u8BBE\u7F6EAPI Key", 'error');
            toggleAiGeneratorView();
            return;
        }
        const activeConv = conversations.find((c)=>c.id === activeConversationId);
        if (!activeConv) return;
        (0, _uiJs.addMessageToLog)(aiChatLog, prompt, 'user');
        aiPromptInput.value = '';
        activeConv.history.push({
            role: 'user',
            content: prompt
        });
        saveConversations();
        const thinkingBubble = document.createElement('div');
        thinkingBubble.className = 'w-full flex justify-start ai-thinking';
        thinkingBubble.innerHTML = `<div class="bg-dark-300 rounded-lg p-3 max-w-[90%]"><i class="fa fa-spinner fa-spin"></i></div>`;
        aiChatLog.appendChild(thinkingBubble);
        aiChatLog.scrollTop = aiChatLog.scrollHeight;
        aiSendBtn.disabled = true;
        try {
            const data = await (0, _apiJs.callDeepSeekAPI)(apiKey, activeConv.history);
            const responseContent = data.choices[0].message.content;
            activeConv.history.push({
                role: 'assistant',
                content: responseContent
            });
            saveConversations();
            aiChatLog.removeChild(thinkingBubble);
            (0, _uiJs.addMessageToLog)(aiChatLog, responseContent, 'assistant');
        } catch (error) {
            aiChatLog.removeChild(thinkingBubble);
            const errorMessage = "AI\u54CD\u5E94\u5931\u8D25: " + error.message;
            (0, _uiJs.addMessageToLog)(aiChatLog, errorMessage, 'assistant');
            (0, _uiJs.showToast)(errorMessage, 'error');
        } finally{
            aiSendBtn.disabled = false;
        }
    });
    aiPromptInput.addEventListener('keydown', (event)=>{
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            aiSendBtn.click();
        }
    });
    aiSettingsBtn.addEventListener('click', ()=>{
        const apiKey = localStorage.getItem((0, _constantsJs.AI_API_KEY));
        if (apiKey) aiApiKeyInput.value = apiKey;
        toggleAiGeneratorView();
    });
    aiSaveApiKeyBtn.addEventListener('click', async ()=>{
        apiKeyError.textContent = '';
        const newApiKey = aiApiKeyInput.value.trim();
        if (!newApiKey) {
            apiKeyError.textContent = "API Key \u4E0D\u80FD\u4E3A\u7A7A\u3002";
            return;
        }
        const originalText = aiSaveApiKeyBtn.textContent;
        aiSaveApiKeyBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> \u6B63\u5728\u9A8C\u8BC1...';
        aiSaveApiKeyBtn.disabled = true;
        try {
            await (0, _apiJs.callDeepSeekAPI)(newApiKey, [
                {
                    role: 'user',
                    content: 'Hi'
                }
            ]);
            localStorage.setItem((0, _constantsJs.AI_API_KEY), newApiKey);
            (0, _uiJs.showToast)("API Key \u9A8C\u8BC1\u6210\u529F\u5E76\u5DF2\u4FDD\u5B58!", 'success');
            toggleAiGeneratorView();
            initializeAiChat();
        } catch (error) {
            apiKeyError.textContent = "API Key \u65E0\u6548\u6216\u7F51\u7EDC\u8FDE\u63A5\u5931\u8D25\u3002";
        } finally{
            aiSaveApiKeyBtn.innerHTML = originalText;
            aiSaveApiKeyBtn.disabled = false;
        }
    });
    toggleApiKeyVisibilityBtn.addEventListener('click', ()=>{
        const icon = toggleApiKeyVisibilityBtn.querySelector('i');
        if (aiApiKeyInput.type === 'password') {
            aiApiKeyInput.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            aiApiKeyInput.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
    aiNewChatBtn.addEventListener('click', createNewConversation);
    // --- 自定义脚本弹窗事件 ---
    aiRunCustomScriptBtn.addEventListener('click', (event)=>{
        event.stopPropagation();
        (0, _uiJs.openModal)(customScriptModal, customScriptModalContent);
    });
    closeCustomScriptModalBtn.addEventListener('click', ()=>(0, _uiJs.closeModal)(customScriptModal, customScriptModalContent));
    runCustomScriptBtn.addEventListener('click', ()=>{
        const scriptToRun = customScriptInput.value;
        if (!scriptToRun.trim()) {
            (0, _uiJs.showToast)("\u811A\u672C\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A", 'error');
            return;
        }
        runScript(scriptToRun); // Re-use the runScript function
    });
    saveCustomScriptBtn.addEventListener('click', async ()=>{
        const scriptContent = customScriptInput.value.trim();
        if (!scriptContent) {
            (0, _uiJs.showToast)("\u811A\u672C\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A", 'error');
            return;
        }
        const config = getScriptConfig();
        const groups = config.groups || [];
        if (groups.length === 0) {
            (0, _uiJs.showToast)("\u8BF7\u5148\u521B\u5EFA\u4E00\u4E2A\u811A\u672C\u5206\u7EC4", 'error');
            return;
        }
        const groupOptions = groups.map((g)=>`<option value="${g.id}">${g.name}</option>`).join('');
        try {
            (0, _uiJs.closeModal)(customScriptModal, customScriptModalContent);
            const saveDir = localStorage.getItem((0, _constantsJs.CUSTOM_SCRIPT_SAVE_DIR_KEY)) || '';
            const result = await (0, _uiJs.showCustomPrompt)({
                title: "\u4FDD\u5B58\u65B0\u811A\u672C",
                body: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-300 mb-1.5">\u{9009}\u{62E9}\u{5206}\u{7EC4}</label>
                            <select id="promptInput_group" class="input-field w-full">${groupOptions}</select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-300 mb-1.5">\u{811A}\u{672C}\u{6587}\u{4EF6}\u{540D} (\u{65E0}\u{9700}\u{540E}\u{7F00})</label>
                            <input type="text" id="promptInput_name" class="input-field w-full" placeholder="\u{4F8B}\u{5982}: My Awesome Script">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-300 mb-1.5">\u{4FDD}\u{5B58}\u{4F4D}\u{7F6E}</label>
                            <div class="flex items-center gap-2">
                                <input type="text" id="promptInput_path" class="input-field w-full bg-dark-200" value="${saveDir}" placeholder="\u{70B9}\u{51FB}\u{53F3}\u{4FA7}\u{6309}\u{94AE}\u{9009}\u{62E9}..." readonly title="${saveDir}">
                                <button type="button" id="prompt_changePathBtn" class="btn-secondary px-4 py-2 rounded-lg flex-shrink-0">\u{9009}\u{62E9}</button>
                            </div>
                        </div>
                    </div>
                `,
                confirmText: "\u4FDD\u5B58",
                isComplex: true
            });
            const { groupId, fileName, savePath } = result;
            if (!fileName || !fileName.trim()) {
                (0, _uiJs.showToast)("\u6587\u4EF6\u540D\u4E0D\u80FD\u4E3A\u7A7A", 'error');
                return;
            }
            if (!savePath || !savePath.trim()) {
                (0, _uiJs.showToast)("\u8BF7\u9009\u62E9\u4E00\u4E2A\u4FDD\u5B58\u4F4D\u7F6E", 'error');
                return;
            }
            localStorage.setItem((0, _constantsJs.CUSTOM_SCRIPT_SAVE_DIR_KEY), savePath);
            const finalFileName = fileName.trim().endsWith('.jsx') ? fileName.trim() : fileName.trim() + '.jsx';
            const sanitizedSavePath = savePath.replace(/\\/g, '/');
            const fullPath = sanitizedSavePath + '/' + finalFileName;
            csInterface.evalScript(`saveScriptToFile(${JSON.stringify(scriptContent)}, ${JSON.stringify(fullPath)})`, (saveResult)=>{
                if (saveResult === 'success') {
                    const targetGroup = groups.find((g)=>g.id === groupId);
                    if (targetGroup) {
                        if (!targetGroup.scripts) targetGroup.scripts = [];
                        const existingScript = targetGroup.scripts.find((s)=>s.path === fullPath);
                        if (!existingScript) {
                            targetGroup.scripts.push({
                                path: fullPath,
                                isFavorite: false
                            });
                            saveScriptConfig(config);
                            renderScriptsUI();
                        }
                        (0, _uiJs.showToast)(`\u{811A}\u{672C}\u{5DF2}\u{4FDD}\u{5B58}\u{5230} ${targetGroup.name}`, 'success');
                    }
                } else (0, _uiJs.showToast)(`\u{811A}\u{672C}\u{4FDD}\u{5B58}\u{5931}\u{8D25}: ${saveResult}`, 'error');
            });
        } catch (err) {}
    });
    // --- 模块初始化调用 ---
    initializeScriptModule();
    initializeAiChat();
}

},{"../shared/ui.js":"iqy1d","../shared/constants.js":"hsqHL","../shared/api.js":"gPB96","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lBUUA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * 初始化预设页面 (Page 4) 的所有功能和事件监听。
 * @param {CSInterface} csInterface - CSInterface 的实例，用于与 AE 通信。
 */ parcelHelpers.export(exports, "initializePage4", ()=>initializePage4);
var _uiJs = require("../shared/ui.js");
var _constantsJs = require("../shared/constants.js");
// 模块级别的状态变量
let currentEffectId = null;
let showOnlyFavorites = false;
function initializePage4(csInterface) {
    // --- DOM 元素获取 ---
    const effectsContainer = document.getElementById('effectsContainer');
    const effectSearchInput = document.getElementById('effectSearchInput');
    const favoriteToggle = document.getElementById('favoriteToggle');
    const previewContainer = document.getElementById('previewContainer');
    const preRenderBtn = document.getElementById('preRenderBtn');
    const openProjectBtn = document.getElementById('openProjectBtn');
    const importFfxBtnBottom = document.getElementById('importFfxBtnBottom');
    const saveFfxBtnBottom = document.getElementById('saveFfxBtnBottom');
    // 设置面板的 DOM 元素
    const effectSettingsModal = document.getElementById('effectSettingsModal');
    const effectSettingsModalContent = document.getElementById('effectSettingsModalContent');
    const closeSettingsModalBtn = document.getElementById('closeSettingsModalBtn');
    const effectNameInput = document.getElementById('effectNameInput');
    const effectDescInput = document.getElementById('effectDescInput');
    const iconSelection = document.getElementById('iconSelection');
    const customIconDropzone = document.getElementById('customIconDropzone');
    const saveEffectSettingsBtn = document.getElementById('saveEffectSettingsBtn');
    // --- 内部辅助函数 ---
    function getEffects() {
        return JSON.parse(localStorage.getItem((0, _constantsJs.EFFECTS_KEY)) || '[]');
    }
    function saveEffects(effects) {
        localStorage.setItem((0, _constantsJs.EFFECTS_KEY), JSON.stringify(effects));
    }
    function renderEffectList() {
        const allEffects = getEffects();
        const searchTerm = effectSearchInput.value.toLowerCase();
        let filteredEffects = allEffects;
        if (showOnlyFavorites) filteredEffects = filteredEffects.filter((effect)=>effect.isFavorite);
        if (searchTerm) filteredEffects = filteredEffects.filter((effect)=>effect.name.toLowerCase().includes(searchTerm) || effect.description && effect.description.toLowerCase().includes(searchTerm));
        effectsContainer.innerHTML = '';
        if (filteredEffects.length === 0) {
            effectsContainer.innerHTML = '<div class="text-center py-4 text-gray-500">\u672A\u627E\u5230\u5339\u914D\u7684\u6548\u679C</div>';
            return;
        }
        filteredEffects.forEach((effect)=>{
            const effectBar = document.createElement('div');
            const isSelected = currentEffectId === effect.id;
            effectBar.className = `effect-item ${isSelected ? 'effect-item-selected' : ''}`;
            effectBar.dataset.id = effect.id;
            const iconContainer = document.createElement('div');
            iconContainer.className = 'w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 cursor-pointer hover:bg-dark-300';
            iconContainer.dataset.action = 'show-settings';
            if (effect.customIcon && effect.customIcon.startsWith('ICON')) {
                const extensionPath = csInterface.getSystemPath('extension').replace(/\\/g, '/');
                const iconPath = `file:///${extensionPath}/${effect.customIcon}`;
                iconContainer.innerHTML = `<img src="${iconPath}" class="w-8 h-8 object-cover rounded pointer-events-none">`;
            } else {
                const icons = [
                    'fa-bolt',
                    'fa-lightbulb-o',
                    'fa-refresh',
                    'fa-paint-brush',
                    'fa-magic',
                    'fa-star'
                ];
                const iconClass = icons[effect.iconIndex || 0];
                iconContainer.innerHTML = `<i class="fa ${iconClass} text-primary text-xl pointer-events-none"></i>`;
            }
            const infoContainer = document.createElement('div');
            infoContainer.className = 'flex-1 ml-3 mr-2 overflow-hidden';
            infoContainer.innerHTML = `
                <div class="font-medium text-white truncate">${effect.name}</div>
                <div class="text-sm text-gray-400 truncate">${effect.description || "\u65E0\u63CF\u8FF0"}</div>
            `;
            const actionsContainer = document.createElement('div');
            actionsContainer.className = 'flex items-center flex-shrink-0';
            const favoriteBtn = document.createElement('button');
            favoriteBtn.className = `btn-icon ${effect.isFavorite ? 'text-yellow-500 bg-yellow-500/10' : 'text-gray-400 hover:bg-dark-300'}`;
            favoriteBtn.innerHTML = `<i class="fa ${effect.isFavorite ? 'fa-star' : 'fa-star-o'}"></i>`;
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn-icon text-gray-400 hover:bg-dark-300';
            deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
            actionsContainer.appendChild(favoriteBtn);
            actionsContainer.appendChild(deleteBtn);
            effectBar.appendChild(iconContainer);
            effectBar.appendChild(infoContainer);
            effectBar.appendChild(actionsContainer);
            // 事件绑定
            favoriteBtn.onclick = (e)=>{
                e.stopPropagation();
                toggleFavorite(effect.id);
            };
            deleteBtn.onclick = (e)=>{
                e.stopPropagation();
                showDeleteConfirm(effect.id);
            };
            effectBar.addEventListener('click', (e)=>{
                if (e.target.dataset.action === 'show-settings' || e.target.parentElement.dataset.action === 'show-settings') {
                    e.stopPropagation();
                    showSettingsPanel(effect.id);
                } else selectEffect(effect.id);
            });
            effectBar.addEventListener('dblclick', ()=>applyEffectToLayer(effect.id));
            effectsContainer.appendChild(effectBar);
        });
    }
    function selectEffect(id) {
        const effect = getEffects().find((e)=>e.id === id);
        if (!effect) return;
        currentEffectId = id;
        if (effect.previewGifPath) {
            const gifPath = effect.previewGifPath.replace(/\\/g, '/');
            previewContainer.className = 'bg-dark-500 rounded-lg h-64 p-0';
            previewContainer.innerHTML = `<img src="file:///${gifPath}?t=${new Date().getTime()}" class="w-full h-full object-contain rounded-lg" alt="GIF Preview">`;
        } else {
            previewContainer.className = 'bg-dark-500 rounded-lg p-6 h-64 flex items-center justify-center';
            previewContainer.innerHTML = `<p class="text-white font-bold text-xl">\u{9884}\u{89C8}\u{5143}\u{7D20}</p>`;
        }
        renderEffectList();
    }
    function showSettingsPanel(id) {
        selectEffect(id); // 确保当前选中项正确
        const effect = getEffects().find((e)=>e.id === id);
        if (!effect) return;
        effectNameInput.value = effect.name;
        effectDescInput.value = effect.description || '';
        document.querySelectorAll('#iconSelection > div').forEach((div)=>div.classList.remove('icon-selected'));
        const selectedIcon = document.querySelectorAll('#iconSelection > div')[effect.iconIndex || 0];
        if (selectedIcon) selectedIcon.classList.add('icon-selected');
        if (effect.customIcon && effect.customIcon.startsWith('ICON')) {
            const extensionPath = csInterface.getSystemPath('extension').replace(/\\/g, '/');
            const iconPath = `file:///${extensionPath}/${effect.customIcon}`;
            customIconDropzone.innerHTML = `<img src="${iconPath}" class="w-full h-full object-cover rounded-lg">`;
        } else customIconDropzone.innerHTML = '<i class="fa fa-upload text-gray-400 mb-2 text-xl"></i><p class="text-xs text-gray-400 leading-tight">\u70B9\u51FB\u6216\u62D6\u653E</p>';
        (0, _uiJs.openModal)(effectSettingsModal, effectSettingsModalContent);
    }
    function preRenderCurrentComposition() {
        const effect = getEffects().find((e)=>e.id === currentEffectId);
        if (!effect) return;
        const previewFileName = `${effect.name}_\u{9884}\u{89C8}`;
        let projectFolder = localStorage.getItem((0, _constantsJs.PROJECT_FOLDER_KEY));
        function startProcess(folderPath) {
            (0, _uiJs.showToast)("\u5F00\u59CB\u6E32\u67D3\u5E76\u8F6C\u6362\u4E3AGIF...", 'info');
            const gifBatPath = csInterface.getSystemPath('extension') + '/js/gif.bat';
            const sanitizedFolderPath = folderPath.replace(/\\/g, '/');
            const sanitizedBatPath = gifBatPath.replace(/\\/g, '/');
            const script = `renderCompAndMakeGIF(${JSON.stringify(sanitizedFolderPath)}, ${JSON.stringify(sanitizedBatPath)}, ${JSON.stringify(previewFileName)})`;
            csInterface.evalScript(script, (result)=>{
                try {
                    const res = JSON.parse(result);
                    if (res.success) {
                        (0, _uiJs.showToast)(res.message, 'success');
                        const gifPath = res.path.replace(/\\/g, '/');
                        previewContainer.className = 'bg-dark-500 rounded-lg h-64 p-0';
                        previewContainer.innerHTML = `<img src="file:///${gifPath}?t=${new Date().getTime()}" class="w-full h-full object-contain rounded-lg" alt="GIF Preview">`;
                        let allEffects = getEffects();
                        const effectIndex = allEffects.findIndex((e)=>e.id === currentEffectId);
                        if (effectIndex !== -1) {
                            allEffects[effectIndex].previewGifPath = res.path;
                            saveEffects(allEffects);
                            (0, _uiJs.showToast)("\u9884\u89C8\u5DF2\u4E0E\u6548\u679C\u5173\u8054!", 'success');
                        }
                    } else (0, _uiJs.showToast)(res.message || "\u9884\u6E32\u67D3\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u65E5\u5FD7\u3002", 'error');
                } catch (e) {
                    (0, _uiJs.showToast)("GIF\u8F6C\u6362\u811A\u672C\u6267\u884C\u5931\u8D25: " + result, 'error');
                }
            });
        }
        if (!projectFolder) csInterface.evalScript('selectProjectFolder()', (selectedFolder)=>{
            if (selectedFolder && selectedFolder !== 'canceled') {
                localStorage.setItem((0, _constantsJs.PROJECT_FOLDER_KEY), selectedFolder);
                startProcess(selectedFolder);
            } else (0, _uiJs.showToast)("\u60A8\u53D6\u6D88\u4E86\u9009\u62E9\uFF0C\u64CD\u4F5C\u4E2D\u6B62\u3002", 'info');
        });
        else startProcess(projectFolder);
    }
    function saveEffectSettings() {
        if (!currentEffectId) return;
        const effects = getEffects();
        const index = effects.findIndex((e)=>e.id === currentEffectId);
        if (index === -1) return;
        effects[index].name = effectNameInput.value.trim() || "\u672A\u547D\u540D\u6548\u679C";
        effects[index].description = effectDescInput.value.trim();
        saveEffects(effects);
        renderEffectList();
        (0, _uiJs.showToast)("\u6548\u679C\u8BBE\u7F6E\u5DF2\u66F4\u65B0", 'success');
        (0, _uiJs.closeModal)(effectSettingsModal, effectSettingsModalContent);
    }
    function toggleFavorite(id) {
        const effects = getEffects();
        const index = effects.findIndex((e)=>e.id === id);
        if (index !== -1) {
            effects[index].isFavorite = !effects[index].isFavorite;
            saveEffects(effects);
            renderEffectList();
            (0, _uiJs.showToast)(effects[index].isFavorite ? "\u5DF2\u6DFB\u52A0\u5230\u6536\u85CF" : "\u5DF2\u53D6\u6D88\u6536\u85CF", 'info');
        }
    }
    function showDeleteConfirm(id) {
        (0, _uiJs.showCustomPrompt)({
            title: "\u786E\u8BA4\u5220\u9664\u6548\u679C",
            body: "<p>\u4F60\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u6548\u679C\u5417\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002</p>",
            confirmText: "\u5220\u9664",
            confirmClass: 'btn-danger'
        }).then(()=>{
            let effects = getEffects().filter((e)=>e.id !== id);
            saveEffects(effects);
            if (currentEffectId === id) {
                currentEffectId = null;
                previewContainer.className = 'bg-dark-500 rounded-lg p-6 h-64 flex items-center justify-center';
                previewContainer.innerHTML = `<p class="text-white font-bold text-xl">\u{9884}\u{89C8}\u{5143}\u{7D20}</p>`;
            }
            renderEffectList();
            (0, _uiJs.showToast)("\u6548\u679C\u5DF2\u5220\u9664", 'info');
        }).catch(()=>{});
    }
    function importFfxFile() {
        csInterface.evalScript('importFFXFile()', (result)=>{
            if (result && result !== 'canceled' && result.trim().startsWith('[')) try {
                const ffxDataArray = JSON.parse(result);
                if (ffxDataArray.length === 0) return;
                const effects = getEffects();
                ffxDataArray.forEach((ffxData)=>{
                    effects.push({
                        id: (0, _uiJs.generateId)(),
                        name: ffxData.name || "\u5BFC\u5165\u7684FFX\u6548\u679C",
                        description: '',
                        iconIndex: 0,
                        customIcon: null,
                        ffxPath: ffxData.path,
                        isFavorite: false,
                        previewGifPath: null
                    });
                });
                saveEffects(effects);
                renderEffectList();
                (0, _uiJs.showToast)(`${ffxDataArray.length} \u{4E2A}FFX\u{6587}\u{4EF6}\u{5BFC}\u{5165}\u{6210}\u{529F}`, 'success');
            } catch (e) {
                (0, _uiJs.showToast)("FFX\u6587\u4EF6\u5217\u8868\u89E3\u6790\u5931\u8D25", 'error');
            }
            else if (result && result !== 'canceled') (0, _uiJs.showToast)("\u5BFC\u5165\u5931\u8D25: " + result, 'error');
        });
    }
    function saveCurrentEffectAsFfx() {
        csInterface.evalScript('saveCurrentEffectAsFfx()', (result)=>{
            if (result && result !== 'canceled' && result.indexOf('{') === 0) try {
                const ffxData = JSON.parse(result);
                const effects = getEffects();
                const newEffectId = (0, _uiJs.generateId)();
                effects.push({
                    id: newEffectId,
                    name: ffxData.name || "\u65B0\u4FDD\u5B58\u7684\u6548\u679C",
                    description: '',
                    iconIndex: 0,
                    customIcon: null,
                    ffxPath: ffxData.path,
                    isFavorite: false,
                    previewGifPath: null
                });
                saveEffects(effects);
                renderEffectList();
                selectEffect(newEffectId);
                (0, _uiJs.showToast)("\u6548\u679C\u5DF2\u4FDD\u5B58\u5E76\u6DFB\u52A0\u5230\u5217\u8868", 'success');
            } catch (e) {
                (0, _uiJs.showToast)("\u4FDD\u5B58FFX\u540E\u6DFB\u52A0\u81F3\u5217\u8868\u5931\u8D25", 'error');
            }
            else if (result && result !== 'canceled') (0, _uiJs.showToast)(result, 'error');
        });
    }
    function applyEffectToLayer(effectId) {
        const effect = getEffects().find((e)=>e.id === effectId);
        if (!effect || !effect.ffxPath) {
            (0, _uiJs.showToast)("\u6548\u679C\u6570\u636E\u6216\u8DEF\u5F84\u65E0\u6548", 'error');
            return;
        }
        const sanitizedPath = effect.ffxPath.replace(/\\/g, '/');
        csInterface.evalScript('checkSelectedLayers()', (hasSelected)=>{
            if (hasSelected === 'true') {
                const script = `applyFFXEffect(${JSON.stringify(sanitizedPath)})`;
                csInterface.evalScript(script, (applyResult)=>{
                    if (applyResult && applyResult.includes("\u6210\u529F")) (0, _uiJs.showToast)("\u6548\u679C\u5DF2\u5E94\u7528\u5230\u9009\u4E2D\u56FE\u5C42", 'success');
                    else (0, _uiJs.showToast)("\u5E94\u7528\u6548\u679C\u5931\u8D25: " + applyResult, 'error');
                });
            } else (0, _uiJs.showToast)("\u8BF7\u5148\u9009\u62E9\u4E00\u4E2A\u56FE\u5C42", 'error');
        });
    }
    function handleCustomIconUpload(file) {
        if (!currentEffectId) {
            (0, _uiJs.showToast)("\u8BF7\u5148\u5728\u5DE6\u4FA7\u5217\u8868\u4E2D\u9009\u62E9\u4E00\u4E2A\u8981\u8BBE\u7F6E\u56FE\u6807\u7684\u6548\u679C", 'error');
            return;
        }
        if (!file.type.match('image.*')) {
            (0, _uiJs.showToast)("\u8BF7\u4E0A\u4F20\u56FE\u7247\u6587\u4EF6", 'error');
            return;
        }
        const sourcePath = file.path;
        if (!sourcePath) {
            (0, _uiJs.showToast)("\u65E0\u6CD5\u83B7\u53D6\u6587\u4EF6\u8DEF\u5F84\uFF0C\u6D4F\u89C8\u5668\u53EF\u80FD\u4E0D\u652F\u6301", 'error');
            return;
        }
        const extensionPath = csInterface.getSystemPath('extension');
        const newFileName = `custom_icon_${currentEffectId}.${file.name.split('.').pop()}`;
        const script = `copyFileToExtensionAssetFolder(${JSON.stringify(sourcePath)}, ${JSON.stringify(extensionPath)}, "ICON", ${JSON.stringify(newFileName)})`;
        csInterface.evalScript(script, (newRelativePath)=>{
            if (newRelativePath && !newRelativePath.startsWith('ERROR')) {
                const effects = getEffects();
                const index = effects.findIndex((e)=>e.id === currentEffectId);
                if (index !== -1) {
                    effects[index].customIcon = newRelativePath;
                    saveEffects(effects);
                    showSettingsPanel(currentEffectId);
                    renderEffectList();
                    (0, _uiJs.showToast)("\u81EA\u5B9A\u4E49\u56FE\u6807\u5DF2\u4FDD\u5B58", 'success');
                }
            } else (0, _uiJs.showToast)("\u4FDD\u5B58\u81EA\u5B9A\u4E49\u56FE\u6807\u5931\u8D25: " + newRelativePath, 'error');
        });
    }
    function initIconSelection() {
        const iconElements = document.querySelectorAll('#iconSelection > div');
        iconElements.forEach((el, index)=>{
            el.addEventListener('click', ()=>{
                if (!currentEffectId) {
                    (0, _uiJs.showToast)("\u8BF7\u5148\u9009\u62E9\u4E00\u4E2A\u6548\u679C", 'error');
                    return;
                }
                iconElements.forEach((e)=>e.classList.remove('icon-selected'));
                el.classList.add('icon-selected');
                const effects = getEffects();
                const effectIndex = effects.findIndex((e)=>e.id === currentEffectId);
                if (effectIndex !== -1) {
                    effects[effectIndex].iconIndex = index;
                    effects[effectIndex].customIcon = null; // 清除自定义图标
                    saveEffects(effects);
                    showSettingsPanel(currentEffectId);
                    renderEffectList();
                }
            });
        });
    }
    function openProjectFolder(isAlt) {
        if (isAlt) csInterface.evalScript('selectProjectFolder()', (selectedFolder)=>{
            if (selectedFolder && selectedFolder !== 'canceled') {
                localStorage.setItem((0, _constantsJs.PROJECT_FOLDER_KEY), selectedFolder);
                (0, _uiJs.showToast)("\u5DE5\u7A0B\u6587\u4EF6\u5939\u4F4D\u7F6E\u5DF2\u66F4\u65B0\uFF01", 'success');
            }
        });
        else {
            const projectFolder = localStorage.getItem((0, _constantsJs.PROJECT_FOLDER_KEY));
            if (projectFolder) csInterface.evalScript(`openFolder(${JSON.stringify(projectFolder)})`, (result)=>{
                if (!result || result.includes("\u5931\u8D25")) (0, _uiJs.showToast)("\u6253\u5F00\u6587\u4EF6\u5939\u5931\u8D25\u3002", 'error');
            });
            else (0, _uiJs.showToast)("\u8BF7\u5148\u70B9\u51FB\u4E00\u6B21\u201C\u9884\u6E32\u67D3\u201D\u6765\u8BBE\u7F6E\u5DE5\u7A0B\u6587\u4EF6\u5939\u3002", 'error');
        }
    }
    // --- 事件监听器 ---
    importFfxBtnBottom.addEventListener('click', importFfxFile);
    saveFfxBtnBottom.addEventListener('click', saveCurrentEffectAsFfx);
    favoriteToggle.addEventListener('click', ()=>{
        showOnlyFavorites = !showOnlyFavorites;
        favoriteToggle.innerHTML = showOnlyFavorites ? '<i class="fa fa-star mr-2"></i>\u663E\u793A\u5168\u90E8' : '<i class="fa fa-star-o mr-2"></i>\u53EA\u770B\u6536\u85CF';
        if (showOnlyFavorites) favoriteToggle.classList.add('text-yellow-400');
        else favoriteToggle.classList.remove('text-yellow-400');
        renderEffectList();
    });
    effectSearchInput.addEventListener('input', renderEffectList);
    saveEffectSettingsBtn.addEventListener('click', saveEffectSettings);
    preRenderBtn.addEventListener('click', ()=>{
        if (!currentEffectId) {
            (0, _uiJs.showToast)("\u8BF7\u5148\u5728\u5DE6\u4FA7\u9009\u62E9\u4E00\u4E2A\u6548\u679C\u6765\u4E3A\u5176\u521B\u5EFA\u9884\u89C8", 'error');
            return;
        }
        preRenderCurrentComposition();
    });
    openProjectBtn.addEventListener('click', (e)=>openProjectFolder(e.altKey));
    closeSettingsModalBtn.addEventListener('click', ()=>(0, _uiJs.closeModal)(effectSettingsModal, effectSettingsModalContent));
    effectSettingsModal.addEventListener('click', (e)=>{
        if (e.target === effectSettingsModal) (0, _uiJs.closeModal)(effectSettingsModal, effectSettingsModalContent);
    });
    // 自定义图标拖放事件
    customIconDropzone.addEventListener('click', ()=>{
        if (!currentEffectId) {
            (0, _uiJs.showToast)("\u8BF7\u5148\u9009\u62E9\u4E00\u4E2A\u6548\u679C", 'error');
            return;
        }
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.onchange = (e)=>{
            if (e.target.files && e.target.files[0]) handleCustomIconUpload(e.target.files[0]);
        };
        fileInput.click();
    });
    [
        'dragenter',
        'dragover',
        'dragleave',
        'drop'
    ].forEach((eventName)=>{
        customIconDropzone.addEventListener(eventName, (e)=>{
            e.preventDefault();
            e.stopPropagation();
        }, false);
    });
    [
        'dragenter',
        'dragover'
    ].forEach((eventName)=>{
        customIconDropzone.addEventListener(eventName, ()=>customIconDropzone.classList.add('border-primary'), false);
    });
    [
        'dragleave',
        'drop'
    ].forEach((eventName)=>{
        customIconDropzone.addEventListener(eventName, ()=>customIconDropzone.classList.remove('border-primary'), false);
    });
    customIconDropzone.addEventListener('drop', (e)=>{
        if (!currentEffectId) {
            (0, _uiJs.showToast)("\u8BF7\u5148\u9009\u62E9\u4E00\u4E2A\u6548\u679C", 'error');
            return;
        }
        if (e.dataTransfer.files && e.dataTransfer.files[0]) handleCustomIconUpload(e.dataTransfer.files[0]);
    }, false);
    // --- 模块初始化调用 ---
    renderEffectList();
    initIconSelection();
}

},{"../shared/ui.js":"iqy1d","../shared/constants.js":"hsqHL","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"24vK1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * 初始化表达式助手页面 (Page 6) 的所有功能和事件监听。
 * @param {CSInterface} csInterface - CSInterface 的实例，用于与 AE 通信。
 */ parcelHelpers.export(exports, "initializePage6", ()=>initializePage6);
var _uiJs = require("../shared/ui.js");
var _constantsJs = require("../shared/constants.js");
var _apiJs = require("../shared/api.js");
// 模块级别的状态变量
let showOnlyExpressionFavorites = false;
let expressionConversations = [];
let activeExpressionConversationId = null;
function initializePage6(csInterface) {
    // --- DOM 元素获取 ---
    // 表达式管理
    const expressionSearchInput = document.getElementById('expressionSearchInput');
    const addExpressionBtn = document.getElementById('addExpressionBtn');
    const expressionFavoriteToggle = document.getElementById('expressionFavoriteToggle');
    const expressionListContainer = document.getElementById('expressionListContainer');
    const expressionFavoritesBar = document.getElementById('expressionFavoritesBar');
    // AI 表达式助手
    const aiExpressionSetupView = document.getElementById('aiExpressionSetupView');
    const aiExpressionMainView = document.getElementById('aiExpressionMainView');
    const aiExpressionApiKeyInput = document.getElementById('aiExpressionApiKeyInput');
    const toggleExpressionApiKeyVisibilityBtn = document.getElementById('toggleExpressionApiKeyVisibilityBtn');
    const expressionApiKeyError = document.getElementById('expressionApiKeyError');
    const aiSaveExpressionApiKeyBtn = document.getElementById('aiSaveExpressionApiKeyBtn');
    const aiExpressionNewChatBtn = document.getElementById('aiExpressionNewChatBtn');
    const aiExpressionSettingsBtn = document.getElementById('aiExpressionSettingsBtn');
    const aiExpressionConversationList = document.getElementById('aiExpressionConversationList');
    const aiExpressionChatLog = document.getElementById('aiExpressionChatLog');
    const aiExpressionPromptInput = document.getElementById('aiExpressionPromptInput');
    const aiExpressionSendBtn = document.getElementById('aiExpressionSendBtn');
    // =============================================================================
    // --- 表达式管理模块 (Expression Management Module) ---
    // =============================================================================
    function getExpressions() {
        try {
            return JSON.parse(localStorage.getItem((0, _constantsJs.EXPRESSIONS_KEY)) || '[]');
        } catch (e) {
            return [];
        }
    }
    function saveExpressions(expressions) {
        localStorage.setItem((0, _constantsJs.EXPRESSIONS_KEY), JSON.stringify(expressions));
    }
    function applyExpression(expressionText) {
        if (!expressionText) return;
        csInterface.evalScript(`applyExpressionToSelectedProperties(${JSON.stringify(expressionText)})`, (result)=>{
            if (result === 'success') (0, _uiJs.showToast)("\u8868\u8FBE\u5F0F\u5DF2\u6210\u529F\u5E94\u7528", 'success');
            else (0, _uiJs.showToast)(result, 'error');
        });
    }
    function toggleExpressionFavorite(id) {
        const expressions = getExpressions();
        const index = expressions.findIndex((e)=>e.id === id);
        if (index !== -1) {
            expressions[index].isFavorite = !expressions[index].isFavorite;
            saveExpressions(expressions);
            renderExpressionUI();
        }
    }
    function deleteExpression(id) {
        (0, _uiJs.showCustomPrompt)({
            title: "\u786E\u8BA4\u5220\u9664",
            body: "\u60A8\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u8868\u8FBE\u5F0F\u5417\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002",
            confirmText: "\u5220\u9664",
            confirmClass: 'btn-danger'
        }).then(()=>{
            let expressions = getExpressions();
            expressions = expressions.filter((e)=>e.id !== id);
            saveExpressions(expressions);
            renderExpressionUI();
            (0, _uiJs.showToast)("\u8868\u8FBE\u5F0F\u5DF2\u5220\u9664", 'success');
        }).catch(()=>{});
    }
    function renderExpressionUI() {
        let expressions = getExpressions();
        const searchTerm = expressionSearchInput.value.toLowerCase();
        if (showOnlyExpressionFavorites) expressions = expressions.filter((e)=>e.isFavorite);
        if (searchTerm) expressions = expressions.filter((e)=>e.name.toLowerCase().includes(searchTerm) || e.description && e.description.toLowerCase().includes(searchTerm));
        expressionListContainer.innerHTML = '';
        if (expressions.length === 0) expressionListContainer.innerHTML = `<div class="text-center py-8 text-gray-500"><p>\u{5217}\u{8868}\u{4E3A}\u{7A7A}</p><p class="text-xs mt-1">\u{70B9}\u{51FB}\u{53F3}\u{4E0A}\u{89D2}\u{201C}\u{6DFB}\u{52A0}\u{8868}\u{8FBE}\u{5F0F}\u{201D}\u{6765}\u{521B}\u{5EFA}</p></div>`;
        else expressions.forEach((exp)=>{
            const item = document.createElement('div');
            item.className = 'expression-list-item';
            item.dataset.id = exp.id;
            item.innerHTML = `
                    <div class="flex justify-between items-start">
                        <div class="flex-1 overflow-hidden">
                            <p class="font-semibold text-white truncate">${exp.name}</p>
                            <p class="text-xs text-gray-400 mt-1 truncate">${exp.description || "\u65E0\u63CF\u8FF0"}</p>
                        </div>
                        <div class="flex items-center space-x-2 ml-2 flex-shrink-0">
                            <button class="action-btn favorite-btn ${exp.isFavorite ? 'text-yellow-400' : ''}" title="\u{6536}\u{85CF}">
                                <i class="fa ${exp.isFavorite ? 'fa-star' : 'fa-star-o'}"></i>
                            </button>
                            <button class="action-btn delete-btn" title="\u{5220}\u{9664}">
                                <i class="fa fa-trash-o"></i>
                            </button>
                        </div>
                    </div>
                `;
            item.addEventListener('dblclick', ()=>applyExpression(exp.code));
            item.querySelector('.favorite-btn').addEventListener('click', (e)=>{
                e.stopPropagation();
                toggleExpressionFavorite(exp.id);
            });
            item.querySelector('.delete-btn').addEventListener('click', (e)=>{
                e.stopPropagation();
                deleteExpression(exp.id);
            });
            expressionListContainer.appendChild(item);
        });
        expressionFavoritesBar.innerHTML = '';
        const favorites = getExpressions().filter((e)=>e.isFavorite);
        if (favorites.length === 0) expressionFavoritesBar.innerHTML = `<span class="text-gray-500 text-sm">\u{70B9}\u{51FB}\u{5DE6}\u{4FA7}\u{5217}\u{8868}\u{4E2D}\u{7684}<i class="fa fa-star-o mx-1"></i>\u{53EF}\u{6DFB}\u{52A0}\u{81F3}\u{6B64}</span>`;
        else favorites.forEach((exp)=>{
            const btn = document.createElement('button');
            btn.className = 'favorite-expression-item';
            btn.textContent = exp.name;
            btn.title = exp.description || exp.name;
            btn.onclick = ()=>applyExpression(exp.code);
            expressionFavoritesBar.appendChild(btn);
        });
    }
    // =============================================================================
    // --- AI 表达式助手模块 (AI Expression Helper Module) ---
    // =============================================================================
    function toggleAiExpressionView() {
        const apiKey = localStorage.getItem((0, _constantsJs.AI_EXPRESSION_API_KEY));
        if (apiKey) {
            aiExpressionMainView.style.display = 'flex';
            aiExpressionSetupView.style.display = 'none';
        } else {
            aiExpressionMainView.style.display = 'none';
            aiExpressionSetupView.style.display = 'flex';
        }
    }
    function loadExpressionConversations() {
        try {
            expressionConversations = JSON.parse(localStorage.getItem((0, _constantsJs.AI_EXPRESSION_CONVERSATIONS_KEY))) || [];
        } catch (e) {
            expressionConversations = [];
        }
    }
    function saveExpressionConversations() {
        localStorage.setItem((0, _constantsJs.AI_EXPRESSION_CONVERSATIONS_KEY), JSON.stringify(expressionConversations));
    }
    function setActiveExpressionConversation(id) {
        activeExpressionConversationId = id;
        renderExpressionConversationList();
        renderExpressionChatLog();
    }
    function createNewExpressionConversation() {
        const newId = (0, _uiJs.generateId)();
        const newConversation = {
            id: newId,
            title: `\u{8868}\u{8FBE}\u{5F0F}\u{5BF9}\u{8BDD} ${expressionConversations.length + 1}`,
            history: [
                {
                    "role": "system",
                    "content": "You are an expert AI assistant specializing in Adobe After Effects expressions. Your goal is to provide users with accurate, efficient, and well-explained expressions. When a user asks for an expression, first provide a concise explanation of how it works and what parameters can be adjusted. Then, present the complete, executable expression code inside a formatted javascript markdown block. Be friendly, helpful, and focus solely on After Effects expressions."
                }
            ]
        };
        expressionConversations.unshift(newConversation);
        setActiveExpressionConversation(newId);
        saveExpressionConversations();
    }
    function renderExpressionConversationList() {
        aiExpressionConversationList.innerHTML = '';
        expressionConversations.forEach((conv)=>{
            const item = document.createElement('div');
            item.className = `p-2 rounded-lg cursor-pointer text-sm truncate flex justify-between items-center group ${conv.id === activeExpressionConversationId ? 'bg-primary/20 text-white' : 'hover:bg-dark-300'}`;
            item.dataset.id = conv.id;
            item.title = conv.title;
            item.innerHTML = `
                <span class="flex-1 truncate">${conv.title}</span>
                <button class="w-5 h-5 items-center justify-center text-gray-500 hover:text-white hidden group-hover:flex flex-shrink-0 delete-conv-btn">
                    <i class="fa fa-trash-o"></i>
                </button>
            `;
            item.addEventListener('click', ()=>setActiveExpressionConversation(conv.id));
            item.querySelector('.delete-conv-btn').addEventListener('click', (e)=>{
                e.stopPropagation();
                (0, _uiJs.showCustomPrompt)({
                    title: "\u786E\u8BA4\u5220\u9664\u5BF9\u8BDD",
                    body: `\u{786E}\u{5B9A}\u{8981}\u{5220}\u{9664}\u{5BF9}\u{8BDD} "${conv.title}" \u{5417}\u{FF1F}`,
                    confirmText: "\u5220\u9664",
                    confirmClass: 'btn-danger'
                }).then(()=>{
                    expressionConversations = expressionConversations.filter((c)=>c.id !== conv.id);
                    saveExpressionConversations();
                    if (activeExpressionConversationId === conv.id) {
                        if (expressionConversations.length > 0) setActiveExpressionConversation(expressionConversations[0].id);
                        else createNewExpressionConversation();
                    } else renderExpressionConversationList();
                }).catch(()=>{});
            });
            aiExpressionConversationList.appendChild(item);
        });
    }
    function renderExpressionChatLog() {
        aiExpressionChatLog.innerHTML = '';
        const activeConv = expressionConversations.find((c)=>c.id === activeExpressionConversationId);
        if (activeConv) activeConv.history.forEach((message)=>{
            if (message.role !== 'system') (0, _uiJs.addMessageToLog)(aiExpressionChatLog, message.content, message.role);
        });
    }
    function initializeAiExpressionChat() {
        toggleAiExpressionView();
        loadExpressionConversations();
        if (expressionConversations.length === 0) createNewExpressionConversation();
        else setActiveExpressionConversation(expressionConversations[0].id);
    }
    /**
     * 主初始化函数，用于设置事件监听器和初始UI状态。
     */ function initializeExpressionModule() {
        renderExpressionUI();
        initializeAiExpressionChat();
        expressionSearchInput.addEventListener('input', renderExpressionUI);
        expressionFavoriteToggle.addEventListener('click', ()=>{
            showOnlyExpressionFavorites = !showOnlyExpressionFavorites;
            expressionFavoriteToggle.innerHTML = showOnlyExpressionFavorites ? '<i class="fa fa-star mr-2"></i>\u663E\u793A\u5168\u90E8' : '<i class="fa fa-star-o mr-2"></i>\u53EA\u770B\u6536\u85CF';
            if (showOnlyExpressionFavorites) expressionFavoriteToggle.classList.add('text-yellow-400');
            else expressionFavoriteToggle.classList.remove('text-yellow-400');
            renderExpressionUI();
        });
        addExpressionBtn.addEventListener('click', ()=>{
            (0, _uiJs.showCustomPrompt)({
                title: "\u6DFB\u52A0\u65B0\u8868\u8FBE\u5F0F",
                body: `
                    <div class="space-y-4 text-left">
                        <div>
                            <label class="block text-sm font-medium text-gray-300 mb-1.5">\u{540D}\u{79F0}</label>
                            <input id="prompt_exp_name" class="input-field w-full" placeholder="\u{4F8B}\u{5982}: \u{6296}\u{52A8}\u{6548}\u{679C}">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-300 mb-1.5">\u{63CF}\u{8FF0} (\u{53EF}\u{9009})</label>
                            <input id="prompt_exp_desc" class="input-field w-full" placeholder="\u{4F8B}\u{5982}: \u{5E94}\u{7528}\u{4E8E}\u{4F4D}\u{7F6E}\u{6216}\u{65CB}\u{8F6C}\u{5C5E}\u{6027}">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-300 mb-1.5">\u{8868}\u{8FBE}\u{5F0F}\u{4EE3}\u{7801}</label>
                            <textarea id="prompt_exp_code" class="w-full bg-dark-500 text-gray-200 font-mono p-2 rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-primary/50" rows="5" placeholder="wiggle(5, 10)"></textarea>
                        </div>
                    </div>
                `,
                confirmText: "\u4FDD\u5B58"
            }).then(()=>{
                const name = document.getElementById('prompt_exp_name').value.trim();
                const desc = document.getElementById('prompt_exp_desc').value.trim();
                const code = document.getElementById('prompt_exp_code').value.trim();
                if (!name || !code) {
                    (0, _uiJs.showToast)("\u540D\u79F0\u548C\u4EE3\u7801\u4E0D\u80FD\u4E3A\u7A7A", 'error');
                    return;
                }
                const expressions = getExpressions();
                expressions.unshift({
                    id: (0, _uiJs.generateId)(),
                    name: name,
                    description: desc,
                    code: code,
                    isFavorite: false
                });
                saveExpressions(expressions);
                renderExpressionUI();
                (0, _uiJs.showToast)("\u8868\u8FBE\u5F0F\u5DF2\u4FDD\u5B58", 'success');
            }).catch(()=>{});
        });
        // AI 助手事件监听
        aiExpressionSendBtn.addEventListener('click', async ()=>{
            const prompt = aiExpressionPromptInput.value.trim();
            if (!prompt) return;
            const apiKey = localStorage.getItem((0, _constantsJs.AI_EXPRESSION_API_KEY));
            if (!apiKey) {
                (0, _uiJs.showToast)("\u8BF7\u5148\u4E3A\u8868\u8FBE\u5F0F\u52A9\u624B\u8BBE\u7F6EAPI Key", 'error');
                toggleAiExpressionView();
                return;
            }
            const activeConv = expressionConversations.find((c)=>c.id === activeExpressionConversationId);
            if (!activeConv) return;
            (0, _uiJs.addMessageToLog)(aiExpressionChatLog, prompt, 'user');
            aiExpressionPromptInput.value = '';
            activeConv.history.push({
                role: 'user',
                content: prompt
            });
            saveExpressionConversations();
            const thinkingBubble = document.createElement('div');
            thinkingBubble.className = 'w-full flex justify-start ai-thinking';
            thinkingBubble.innerHTML = `<div class="bg-dark-300 rounded-lg p-3 max-w-[90%]"><i class="fa fa-spinner fa-spin"></i></div>`;
            aiExpressionChatLog.appendChild(thinkingBubble);
            aiExpressionChatLog.scrollTop = aiExpressionChatLog.scrollHeight;
            aiExpressionSendBtn.disabled = true;
            try {
                const data = await (0, _apiJs.callDeepSeekAPI)(apiKey, activeConv.history);
                const responseContent = data.choices[0].message.content;
                activeConv.history.push({
                    role: 'assistant',
                    content: responseContent
                });
                saveExpressionConversations();
                aiExpressionChatLog.removeChild(thinkingBubble);
                (0, _uiJs.addMessageToLog)(aiExpressionChatLog, responseContent, 'assistant');
            } catch (error) {
                aiExpressionChatLog.removeChild(thinkingBubble);
                const errorMessage = "AI\u54CD\u5E94\u5931\u8D25: " + error.message;
                (0, _uiJs.addMessageToLog)(aiExpressionChatLog, errorMessage, 'assistant');
                (0, _uiJs.showToast)(errorMessage, 'error');
            } finally{
                aiExpressionSendBtn.disabled = false;
            }
        });
        aiExpressionPromptInput.addEventListener('keydown', (event)=>{
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                aiExpressionSendBtn.click();
            }
        });
        aiExpressionSettingsBtn.addEventListener('click', ()=>{
            const apiKey = localStorage.getItem((0, _constantsJs.AI_EXPRESSION_API_KEY));
            if (apiKey) aiExpressionApiKeyInput.value = apiKey;
            toggleAiExpressionView();
        });
        aiSaveExpressionApiKeyBtn.addEventListener('click', async ()=>{
            expressionApiKeyError.textContent = '';
            const newApiKey = aiExpressionApiKeyInput.value.trim();
            if (!newApiKey) {
                expressionApiKeyError.textContent = "API Key \u4E0D\u80FD\u4E3A\u7A7A\u3002";
                return;
            }
            const originalText = aiSaveExpressionApiKeyBtn.textContent;
            aiSaveExpressionApiKeyBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> \u6B63\u5728\u9A8C\u8BC1...';
            aiSaveExpressionApiKeyBtn.disabled = true;
            try {
                await (0, _apiJs.callDeepSeekAPI)(newApiKey, [
                    {
                        role: 'user',
                        content: 'Hi'
                    }
                ]);
                localStorage.setItem((0, _constantsJs.AI_EXPRESSION_API_KEY), newApiKey);
                (0, _uiJs.showToast)("API Key \u9A8C\u8BC1\u6210\u529F\u5E76\u5DF2\u4FDD\u5B58!", 'success');
                toggleAiExpressionView();
                initializeAiExpressionChat();
            } catch (error) {
                expressionApiKeyError.textContent = "API Key \u65E0\u6548\u6216\u7F51\u7EDC\u8FDE\u63A5\u5931\u8D25\u3002";
            } finally{
                aiSaveExpressionApiKeyBtn.innerHTML = originalText;
                aiSaveExpressionApiKeyBtn.disabled = false;
            }
        });
        toggleExpressionApiKeyVisibilityBtn.addEventListener('click', ()=>{
            const icon = toggleExpressionApiKeyVisibilityBtn.querySelector('i');
            if (aiExpressionApiKeyInput.type === 'password') {
                aiExpressionApiKeyInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                aiExpressionApiKeyInput.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
        aiExpressionNewChatBtn.addEventListener('click', createNewExpressionConversation);
    }
    // --- 模块初始化调用 ---
    initializeExpressionModule();
}

},{"../shared/ui.js":"iqy1d","../shared/constants.js":"hsqHL","../shared/api.js":"gPB96","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7Hxt1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * 初始化学习参考页面 (Page 7) 的所有功能和事件监听。
 * @param {CSInterface} csInterface - CSInterface 的实例，用于与 AE 通信。
 */ parcelHelpers.export(exports, "initializePage7", ()=>initializePage7);
var _uiJs = require("../shared/ui.js");
function initializePage7(csInterface) {
    const page7Node = document.getElementById('page7');
    if (!page7Node) return;
    // --- DOM 元素获取 ---
    const p7Wrap = page7Node.querySelector('.p7-wrap');
    const p7ImageGrid = document.getElementById('p7ImageGrid');
    const p7VideoGrid = document.getElementById('p7VideoGrid');
    const p7Zoom = document.getElementById('p7Zoom');
    const p7Btn = document.getElementById('p7Btn');
    const p7Menu = document.getElementById('p7Menu');
    const p7File = document.getElementById('p7File');
    const p7Modal = document.getElementById('p7Modal');
    const p7ModalContent = document.getElementById('p7ModalContent');
    const p7Close = document.getElementById('p7Close');
    const p7Count = document.getElementById('p7Count');
    const p7Apply = document.getElementById('p7Apply');
    const p7InputModal = document.getElementById('p7InputModal');
    const p7InputModalContent = document.getElementById('p7InputModalContent');
    const p7InputModalField = document.getElementById('p7InputModalField');
    const p7GetLinkBtn = document.getElementById('p7GetLinkBtn');
    const p7InputModalOk = document.getElementById('p7InputModalOk');
    const p7InputModalCancel = document.getElementById('p7InputModalCancel');
    if (!p7ImageGrid || !p7VideoGrid || !p7Wrap) {
        console.error("Page 7 UI elements could not be initialized.");
        return;
    }
    // --- 状态管理 ---
    const LS_KEY = 'p7_state_v6';
    let state = {
        items: [],
        zoom: 180
    };
    try {
        const saved = JSON.parse(localStorage.getItem(LS_KEY) || 'null');
        if (saved) {
            state = Object.assign(state, saved);
            state.items.forEach((it)=>{
                if (typeof it.view === 'undefined') it.view = 'image';
            });
        }
    } catch (e) {
        console.error("\u65E0\u6CD5\u89E3\u6790Page 7 state", e);
    }
    if (!Array.isArray(state.items) || state.items.length === 0) state.items = new Array(20).fill(0).map(()=>({
            type: 'empty',
            imagePath: null,
            videoUrl: null,
            view: 'image'
        }));
    function saveState() {
        localStorage.setItem(LS_KEY, JSON.stringify(state));
    }
    // --- 渲染与UI更新 ---
    function renderGrids() {
        p7ImageGrid.innerHTML = '';
        p7VideoGrid.innerHTML = '';
        const sizeStyle = state.zoom + 'px';
        p7ImageGrid.style.setProperty('--p7-size', sizeStyle);
        p7VideoGrid.style.setProperty('--p7-size', sizeStyle);
        state.items.forEach((it, idx)=>{
            // 1. 创建上层 (Image) 网格单元
            const imageCell = document.createElement('div');
            imageCell.className = 'p7-cell';
            imageCell.dataset.index = idx;
            imageCell.style.opacity = it.view === 'image' ? '1' : '0';
            imageCell.style.pointerEvents = it.view === 'image' ? 'auto' : 'none';
            const cover = document.createElement('div');
            cover.className = 'p7-cover';
            if (it.imagePath) {
                const imgElement = document.createElement('img');
                const extensionPath = csInterface.getSystemPath('extension').replace(/\\/g, '/');
                imgElement.src = 'file:///' + extensionPath + '/' + it.imagePath + '?t=' + new Date().getTime();
                cover.innerHTML = '';
                cover.appendChild(imgElement);
            } else cover.textContent = "\u4F2A\u88C5\u56FE\u7247";
            imageCell.appendChild(cover);
            if (it.type !== 'empty') {
                const overlay = document.createElement('div');
                overlay.className = 'p7-cell-overlay';
                overlay.innerHTML = `
                    <button class="p7-cell-btn" data-action="reset" title="\u{91CD}\u{7F6E}"><i class="fa fa-undo pointer-events-none"></i></button>
                    <button class="p7-cell-btn" data-action="settings" title="\u{8BBE}\u{7F6E}"><i class="fa fa-cog pointer-events-none"></i></button>
                `;
                imageCell.appendChild(overlay);
            }
            p7ImageGrid.appendChild(imageCell);
            // 2. 创建下层 (Video) 网格单元
            const videoCell = document.createElement('div');
            videoCell.className = 'p7-cell';
            videoCell.dataset.index = idx;
            if (it.videoUrl) {
                const mediaElement = document.createElement('iframe');
                mediaElement.className = 'p7-media';
                mediaElement.setAttribute('allow', 'fullscreen; autoplay; encrypted-media; picture-in-picture');
                mediaElement.setAttribute('allowfullscreen', '');
                mediaElement.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-popups allow-presentation allow-modals');
                mediaElement.src = it.videoUrl;
                videoCell.appendChild(mediaElement);
            }
            p7VideoGrid.appendChild(videoCell);
        });
    }
    function updateGridViews() {
        const imageCells = p7ImageGrid.querySelectorAll('.p7-cell');
        imageCells.forEach((cell)=>{
            const idx = parseInt(cell.dataset.index, 10);
            const item = state.items[idx];
            if (item) {
                cell.style.opacity = item.view === 'image' ? '1' : '0';
                cell.style.pointerEvents = item.view === 'image' ? 'auto' : 'none';
            }
        });
    }
    function showMenuForCell(e, cell, idx) {
        p7Menu.style.display = 'block';
        const page7Rect = page7Node.getBoundingClientRect();
        const top = e.clientY - page7Rect.top;
        const left = e.clientX - page7Rect.left;
        p7Menu.style.top = top + 'px';
        p7Menu.style.left = left + 'px';
        p7Menu.dataset.target = idx;
    }
    function openInputModal(index) {
        return new Promise((resolve, reject)=>{
            const item = state.items[index] || {};
            p7InputModalField.value = item.videoUrl || '';
            (0, _uiJs.openModal)(p7InputModal, p7InputModalContent);
            p7InputModalField.focus();
            const handleOk = ()=>{
                cleanup();
                resolve(p7InputModalField.value);
            };
            const handleCancel = ()=>{
                cleanup();
                reject();
            };
            const handleKeydown = (e)=>{
                if (e.key === 'Enter') {
                    e.preventDefault();
                    handleOk();
                }
                if (e.key === 'Escape') handleCancel();
            };
            const handleGetLink = ()=>{
                csInterface.openURLInDefaultBrowser('https://xbeibeix.com/api/bilibili/');
            };
            const modalBgClick = (e)=>{
                if (e.target === p7InputModal) handleCancel();
            };
            function cleanup() {
                p7InputModalOk.removeEventListener('click', handleOk);
                p7InputModalCancel.removeEventListener('click', handleCancel);
                p7GetLinkBtn.removeEventListener('click', handleGetLink);
                p7InputModal.removeEventListener('click', modalBgClick);
                p7InputModalField.removeEventListener('keydown', handleKeydown);
                (0, _uiJs.closeModal)(p7InputModal, p7InputModalContent);
            }
            p7InputModalOk.addEventListener('click', handleOk, {
                once: true
            });
            p7InputModalCancel.addEventListener('click', handleCancel, {
                once: true
            });
            p7GetLinkBtn.addEventListener('click', handleGetLink, {
                once: true
            });
            p7InputModal.addEventListener('click', modalBgClick, {
                once: true
            });
            p7InputModalField.addEventListener('keydown', handleKeydown);
        });
    }
    // --- 事件监听器 ---
    p7Wrap.addEventListener('mousedown', (e)=>{
        if (e.ctrlKey && e.button === 0) {
            if (e.target.closest('.p7-toolbar, .p7-zoombox, #p7Menu, #p7Modal, #p7InputModal')) return;
            e.preventDefault();
            e.stopPropagation();
            state.items.forEach((it)=>{
                if (it.imagePath && it.videoUrl) it.view = it.view === 'image' ? 'video' : 'image';
            });
            saveState();
            updateGridViews();
        }
    }, true);
    p7ImageGrid.addEventListener('click', (e)=>{
        if (e.ctrlKey) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        const cell = e.target.closest('.p7-cell');
        if (!cell) return;
        const idx = parseInt(cell.dataset.index, 10);
        const actionBtn = e.target.closest('[data-action]');
        if (actionBtn) {
            e.stopPropagation();
            const action = actionBtn.dataset.action;
            if (action === 'reset') {
                state.items[idx] = {
                    type: 'empty',
                    imagePath: null,
                    videoUrl: null,
                    view: 'image'
                };
                saveState();
                renderGrids();
            } else if (action === 'settings') showMenuForCell(e, cell, idx);
        } else if (state.items[idx]) showMenuForCell(e, cell, idx);
    });
    p7Zoom.addEventListener('input', ()=>{
        state.zoom = parseInt(p7Zoom.value, 10);
        const sizeStyle = state.zoom + 'px';
        p7ImageGrid.style.setProperty('--p7-size', sizeStyle);
        p7VideoGrid.style.setProperty('--p7-size', sizeStyle);
    });
    p7Zoom.addEventListener('change', saveState);
    p7Zoom.value = state.zoom;
    document.addEventListener('click', (e)=>{
        if (p7Menu && !p7Menu.contains(e.target) && !e.target.closest('.p7-cell')) p7Menu.style.display = 'none';
    });
    p7Menu.addEventListener('click', async (e)=>{
        const cmdBtn = e.target.closest('button[data-cmd]');
        if (!cmdBtn) return;
        const idx = parseInt(p7Menu.dataset.target, 10);
        const cmd = cmdBtn.getAttribute('data-cmd');
        p7Menu.style.display = 'none';
        if (state.items[idx].type === 'empty') state.items[idx].type = 'media';
        if (cmd === 'url') try {
            const url = await openInputModal(idx);
            if (url && url.trim()) {
                state.items[idx].videoUrl = url.trim();
                saveState();
                renderGrids();
                (0, _uiJs.showToast)("\u89C6\u9891\u94FE\u63A5\u5DF2\u66F4\u65B0", 'success');
            }
        } catch (err) {}
        else if (cmd === 'img') {
            p7File.onchange = ()=>{
                const file = p7File.files[0];
                if (!file) return;
                const sourcePath = file.path;
                if (!sourcePath) {
                    (0, _uiJs.showToast)("\u65E0\u6CD5\u83B7\u53D6\u6587\u4EF6\u8DEF\u5F84", 'error');
                    return;
                }
                const newName = "\u4F2A\u56FE\u7247_" + (0, _uiJs.generateId)() + "_" + file.name;
                const extensionPath = csInterface.getSystemPath('extension');
                const script = `copyFileToExtensionAssetFolder(${JSON.stringify(sourcePath)}, ${JSON.stringify(extensionPath)}, "ICON", ${JSON.stringify(newName)})`;
                csInterface.evalScript(script, (result)=>{
                    if (result && !result.startsWith('ERROR:')) {
                        state.items[idx].imagePath = result;
                        saveState();
                        renderGrids();
                        (0, _uiJs.showToast)("\u56FE\u7247\u5DF2\u4FDD\u5B58", 'success');
                    } else (0, _uiJs.showToast)("\u4FDD\u5B58\u56FE\u7247\u5931\u8D25: " + result, 'error');
                    p7File.value = '';
                });
            };
            p7File.click();
        }
    });
    p7Btn.addEventListener('click', ()=>{
        p7Count.value = state.items.length;
        (0, _uiJs.openModal)(p7Modal, p7ModalContent);
    });
    p7Close.addEventListener('click', ()=>(0, _uiJs.closeModal)(p7Modal, p7ModalContent));
    p7Modal.addEventListener('click', (e)=>{
        if (e.target === p7Modal) (0, _uiJs.closeModal)(p7Modal, p7ModalContent);
    });
    p7Apply.addEventListener('click', ()=>{
        const n = Math.max(1, Math.min(60, parseInt(p7Count.value, 10) || state.items.length));
        const cur = state.items.length;
        if (n > cur) for(let i = 0; i < n - cur; i++)state.items.push({
            type: 'empty',
            imagePath: null,
            videoUrl: null,
            view: 'image'
        });
        else if (n < cur) state.items.splice(n);
        saveState();
        renderGrids();
        (0, _uiJs.closeModal)(p7Modal, p7ModalContent);
    });
    // --- 模块初始化调用 ---
    renderGrids();
}

},{"../shared/ui.js":"iqy1d","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["93v64","lhpGb"], "lhpGb", "parcelRequiref53a", {})

//# sourceMappingURL=niuma-accelerator.b828852a.js.map
