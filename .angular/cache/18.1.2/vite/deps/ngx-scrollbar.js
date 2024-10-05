import {
  DOCUMENT,
  isPlatformBrowser
} from "./chunk-5KV5DZWS.js";
import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
  RuntimeError,
  ViewChild,
  assertInInjectionContext,
  assertNotInReactiveContext,
  booleanAttribute,
  computed,
  createComponent,
  effect,
  inject,
  input,
  numberAttribute,
  runInInjectionContext,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-SGYLE3HE.js";
import {
  animationFrameScheduler,
  fromEvent,
  merge
} from "./chunk-FTB5UYSU.js";
import "./chunk-PJLO3BQF.js";
import {
  EMPTY,
  Observable,
  Subject,
  delay,
  finalize,
  fromPromise,
  interval,
  map,
  of,
  startWith,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap,
  throttleTime
} from "./chunk-WDHRTQJ7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// node_modules/@angular/cdk/fesm2022/platform.mjs
var hasV8BreakIterator;
try {
  hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
var _Platform = class _Platform {
  constructor(_platformId) {
    this._platformId = _platformId;
    this.isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
    this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    this.BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
    this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
    this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
    this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
    this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  }
};
_Platform.ɵfac = function Platform_Factory(t) {
  return new (t || _Platform)(ɵɵinject(PLATFORM_ID));
};
_Platform.ɵprov = ɵɵdefineInjectable({
  token: _Platform,
  factory: _Platform.ɵfac,
  providedIn: "root"
});
var Platform = _Platform;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Platform, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var _PlatformModule = class _PlatformModule {
};
_PlatformModule.ɵfac = function PlatformModule_Factory(t) {
  return new (t || _PlatformModule)();
};
_PlatformModule.ɵmod = ɵɵdefineNgModule({
  type: _PlatformModule
});
_PlatformModule.ɵinj = ɵɵdefineInjector({});
var PlatformModule = _PlatformModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var RtlScrollAxisType;
(function(RtlScrollAxisType2) {
  RtlScrollAxisType2[RtlScrollAxisType2["NORMAL"] = 0] = "NORMAL";
  RtlScrollAxisType2[RtlScrollAxisType2["NEGATED"] = 1] = "NEGATED";
  RtlScrollAxisType2[RtlScrollAxisType2["INVERTED"] = 2] = "INVERTED";
})(RtlScrollAxisType || (RtlScrollAxisType = {}));

// node_modules/@angular/cdk/fesm2022/bidi.mjs
var DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
  providedIn: "root",
  factory: DIR_DOCUMENT_FACTORY
});
function DIR_DOCUMENT_FACTORY() {
  return inject(DOCUMENT);
}
var RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || "";
  if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
  }
  return value === "rtl" ? "rtl" : "ltr";
}
var _Directionality = class _Directionality {
  constructor(_document) {
    this.value = "ltr";
    this.change = new EventEmitter();
    if (_document) {
      const bodyDir = _document.body ? _document.body.dir : null;
      const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      this.value = _resolveDirectionality(bodyDir || htmlDir || "ltr");
    }
  }
  ngOnDestroy() {
    this.change.complete();
  }
};
_Directionality.ɵfac = function Directionality_Factory(t) {
  return new (t || _Directionality)(ɵɵinject(DIR_DOCUMENT, 8));
};
_Directionality.ɵprov = ɵɵdefineInjectable({
  token: _Directionality,
  factory: _Directionality.ɵfac,
  providedIn: "root"
});
var Directionality = _Directionality;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Directionality, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DIR_DOCUMENT]
    }]
  }], null);
})();
var _Dir = class _Dir {
  constructor() {
    this._dir = "ltr";
    this._isInitialized = false;
    this.change = new EventEmitter();
  }
  /** @docs-private */
  get dir() {
    return this._dir;
  }
  set dir(value) {
    const previousValue = this._dir;
    this._dir = _resolveDirectionality(value);
    this._rawDir = value;
    if (previousValue !== this._dir && this._isInitialized) {
      this.change.emit(this._dir);
    }
  }
  /** Current layout direction of the element. */
  get value() {
    return this.dir;
  }
  /** Initialize once default value has been set. */
  ngAfterContentInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    this.change.complete();
  }
};
_Dir.ɵfac = function Dir_Factory(t) {
  return new (t || _Dir)();
};
_Dir.ɵdir = ɵɵdefineDirective({
  type: _Dir,
  selectors: [["", "dir", ""]],
  hostVars: 1,
  hostBindings: function Dir_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx._rawDir);
    }
  },
  inputs: {
    dir: "dir"
  },
  outputs: {
    change: "dirChange"
  },
  exportAs: ["dir"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: Directionality,
    useExisting: _Dir
  }])]
});
var Dir = _Dir;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dir, [{
    type: Directive,
    args: [{
      selector: "[dir]",
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        "[attr.dir]": "_rawDir"
      },
      exportAs: "dir",
      standalone: true
    }]
  }], null, {
    change: [{
      type: Output,
      args: ["dirChange"]
    }],
    dir: [{
      type: Input
    }]
  });
})();
var _BidiModule = class _BidiModule {
};
_BidiModule.ɵfac = function BidiModule_Factory(t) {
  return new (t || _BidiModule)();
};
_BidiModule.ɵmod = ɵɵdefineNgModule({
  type: _BidiModule,
  imports: [Dir],
  exports: [Dir]
});
_BidiModule.ɵinj = ɵɵdefineInjector({});
var BidiModule = _BidiModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BidiModule, [{
    type: NgModule,
    args: [{
      imports: [Dir],
      exports: [Dir]
    }]
  }], null, null);
})();

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function toSignal(source, options) {
  ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !options?.manualCleanup;
  requiresCleanup && !options?.injector && assertInInjectionContext(toSignal);
  const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
  const equal = makeToSignalEqual(options?.equal);
  let state;
  if (options?.requireSync) {
    state = signal({
      kind: 0
      /* StateKind.NoValue */
    }, {
      equal
    });
  } else {
    state = signal({
      kind: 1,
      value: options?.initialValue
    }, {
      equal
    });
  }
  const sub = source.subscribe({
    next: (value) => state.set({
      kind: 1,
      value
    }),
    error: (error) => {
      if (options?.rejectErrors) {
        throw error;
      }
      state.set({
        kind: 2,
        error
      });
    }
    // Completion of the Observable is meaningless to the signal. Signals don't have a concept of
    // "complete".
  });
  if (options?.requireSync && state().kind === 0) {
    throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
  }
  cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  return computed(() => {
    const current = state();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  }, {
    equal: options?.equal
  });
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 && b.kind === 1 && userEquality(a.value, b.value);
}

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

// node_modules/ngx-scrollbar/fesm2022/ngx-scrollbar-smooth-scroll.mjs
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 1e-3;
var SUBDIVISION_PRECISION = 1e-7;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
var float32ArraySupported = typeof Float32Array === "function";
function A(aA1, aA2) {
  return 1 - 3 * aA2 + 3 * aA1;
}
function B(aA1, aA2) {
  return 3 * aA2 - 6 * aA1;
}
function C(aA1) {
  return 3 * aA1;
}
function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}
function getSlope(aT, aA1, aA2) {
  return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
}
function binarySubdivide(aX, aA, aB, mX1, mX2) {
  let currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (let i = 0; i < NEWTON_ITERATIONS; ++i) {
    const currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0) {
      return aGuessT;
    }
    const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
function LinearEasing(x) {
  return x;
}
function bezier(mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error("bezier x values must be in [0, 1] range");
  }
  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }
  const sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (let i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }
  function getTForX(aX) {
    let intervalStart = 0;
    let currentSample = 1;
    const lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    const guessForT = intervalStart + dist * kSampleStepSize;
    const initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }
  return function BezierEasing(x) {
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
}
var SMOOTH_SCROLL_OPTIONS = new InjectionToken("SMOOTH_SCROLL_OPTIONS");
var _SmoothScrollManager = class _SmoothScrollManager {
  constructor() {
    this.document = inject(DOCUMENT);
    this.zone = inject(NgZone);
    this._defaultOptions = __spreadValues({
      duration: 468,
      easing: {
        x1: 0.42,
        y1: 0,
        x2: 0.58,
        y2: 1
      }
    }, inject(SMOOTH_SCROLL_OPTIONS, {
      optional: true
    }));
    this.onGoingScrolls = /* @__PURE__ */ new Map();
  }
  /**
   * Timing method
   */
  get now() {
    return this.document.defaultView.performance?.now?.bind(this.document.defaultView.performance) || Date.now;
  }
  /**
   * changes scroll position inside an element
   */
  scrollElement(el, x, y) {
    el.scrollLeft = x;
    el.scrollTop = y;
  }
  /**
   * Handles a given parameter of type HTMLElement, ElementRef or selector
   */
  getElement(el, parent) {
    if (typeof el === "string") {
      return (parent || this.document).querySelector(el);
    }
    return coerceElement(el);
  }
  /**
   * Initializes a destroyer stream, re-initializes it if the element is already being scrolled
   */
  getScrollDestroyerRef(el) {
    if (this.onGoingScrolls.has(el)) {
      this.onGoingScrolls.get(el).next();
    }
    return this.onGoingScrolls.set(el, new Subject()).get(el);
  }
  /**
   * A function called recursively that, given a context, steps through scrolling
   */
  step(context) {
    return new Observable((subscriber) => {
      let elapsed = (this.now() - context.startTime) / context.duration;
      elapsed = elapsed > 1 ? 1 : elapsed;
      const value = context.easing(elapsed);
      context.currentX = context.startX + (context.x - context.startX) * value;
      context.currentY = context.startY + (context.y - context.startY) * value;
      this.scrollElement(context.scrollable, context.currentX, context.currentY);
      requestAnimationFrame(() => {
        subscriber.next();
        subscriber.complete();
      });
    });
  }
  /**
   * Checks if smooth scroll has reached, cleans up the smooth scroll stream
   */
  isReached(context, destroyed) {
    if (context.currentX === context.x && context.currentY === context.y) {
      destroyed.next();
      return true;
    }
    return false;
  }
  /**
   * Scroll recursively until coordinates are reached
   * @param context
   * @param destroyed
   */
  scrolling(context, destroyed) {
    return this.step(context).pipe(
      // Continue while target coordinates hasn't reached yet
      takeWhile(() => !this.isReached(context, destroyed)),
      switchMap(() => this.scrolling(context, destroyed))
    );
  }
  /**
   * Deletes the destroyer function, runs if the smooth scroll has finished or interrupted
   */
  onScrollReached(el, resolve, destroyed) {
    destroyed.complete();
    this.onGoingScrolls.delete(el);
    this.zone.run(() => resolve());
  }
  /**
   * Terminates an ongoing smooth scroll
   */
  interrupted(el, destroyed) {
    return merge(fromEvent(el, "wheel", {
      passive: true,
      capture: true
    }), fromEvent(el, "touchmove", {
      passive: true,
      capture: true
    }), destroyed).pipe(take(1));
  }
  applyScrollToOptions(el, options) {
    if (!options.duration) {
      this.scrollElement(el, options.left, options.top);
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      this.zone.runOutsideAngular(() => {
        const destroyed = this.getScrollDestroyerRef(el);
        const context = {
          scrollable: el,
          startTime: this.now(),
          startX: el.scrollLeft,
          startY: el.scrollTop,
          x: options.left == null ? el.scrollLeft : ~~options.left,
          y: options.top == null ? el.scrollTop : ~~options.top,
          duration: options.duration,
          easing: bezier(options.easing.x1, options.easing.y1, options.easing.x2, options.easing.y2)
        };
        this.scrolling(context, destroyed).pipe(
          // Continue until interrupted by another scroll (new smooth scroll / wheel / touchmove)
          takeUntil(this.interrupted(el, destroyed)),
          // Once finished, clean up the destroyer stream and resolve the promise
          finalize(() => this.onScrollReached(el, resolve, destroyed))
        ).subscribe();
      });
    });
  }
  /**
   * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
   * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param scrollable element
   * @param customOptions specified the offsets to scroll to.
   */
  scrollTo(scrollable, customOptions) {
    const el = this.getElement(scrollable);
    const isRtl = getComputedStyle(el).direction === "rtl";
    const options = __spreadValues(__spreadValues(__spreadValues({}, this._defaultOptions), customOptions), {
      // Rewrite start & end offsets as right or left offsets.
      left: customOptions.left == null ? isRtl ? customOptions.end : customOptions.start : customOptions.left,
      right: customOptions.right == null ? isRtl ? customOptions.start : customOptions.end : customOptions.right
    });
    if (options.bottom != null) {
      options.top = el.scrollHeight - el.clientHeight - options.bottom;
    }
    if (isRtl) {
      if (options.left != null) {
        options.right = el.scrollWidth - el.clientWidth - options.left;
      }
      options.left = options.right ? -options.right : options.right;
    } else {
      if (options.right != null) {
        options.left = el.scrollWidth - el.clientWidth - options.right;
      }
    }
    return this.applyScrollToOptions(el, options);
  }
  /**
   * Scroll to element by reference or selector
   */
  scrollToElement(scrollable, target, customOptions = {}) {
    const scrollableEl = this.getElement(scrollable);
    const targetEl = this.getElement(target, scrollableEl);
    if (targetEl && scrollableEl) {
      const scrollableRect = scrollableEl.getBoundingClientRect();
      const targetRect = targetEl.getBoundingClientRect();
      const options = __spreadProps(__spreadValues({}, customOptions), {
        left: targetRect.left + scrollableEl.scrollLeft - scrollableRect.left + (customOptions.left || 0),
        top: targetRect.top + scrollableEl.scrollTop - scrollableRect.top + (customOptions.top || 0)
      });
      return this.scrollTo(scrollableEl, options);
    }
    return Promise.resolve();
  }
};
_SmoothScrollManager.ɵfac = function SmoothScrollManager_Factory(t) {
  return new (t || _SmoothScrollManager)();
};
_SmoothScrollManager.ɵprov = ɵɵdefineInjectable({
  token: _SmoothScrollManager,
  factory: _SmoothScrollManager.ɵfac,
  providedIn: "root"
});
var SmoothScrollManager = _SmoothScrollManager;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmoothScrollManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _SmoothScroll = class _SmoothScroll {
  constructor() {
    this.smoothScroll = inject(SmoothScrollManager);
    this.element = inject(ElementRef);
  }
  scrollTo(options) {
    return this.smoothScroll.scrollTo(this.element, options);
  }
  scrollToElement(target, options) {
    return this.smoothScroll.scrollToElement(this.element, target, options);
  }
};
_SmoothScroll.ɵfac = function SmoothScroll_Factory(t) {
  return new (t || _SmoothScroll)();
};
_SmoothScroll.ɵdir = ɵɵdefineDirective({
  type: _SmoothScroll,
  selectors: [["", "smoothScroll", ""]],
  exportAs: ["smoothScroll"],
  standalone: true
});
var SmoothScroll = _SmoothScroll;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmoothScroll, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[smoothScroll]",
      exportAs: "smoothScroll"
    }]
  }], null, null);
})();

// node_modules/ngx-scrollbar/fesm2022/ngx-scrollbar.mjs
var _c0 = ["scrollbarButton", ""];
function ScrollbarY_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "button", 4)(1, "button", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("ng-scrollbar-button ", ctx_r0.cmp.buttonClass, "");
    ɵɵadvance();
    ɵɵclassMapInterpolate1("ng-scrollbar-button ", ctx_r0.cmp.buttonClass, "");
  }
}
function ScrollbarX_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "button", 4)(1, "button", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("ng-scrollbar-button ", ctx_r0.cmp.buttonClass, "");
    ɵɵadvance();
    ɵɵclassMapInterpolate1("ng-scrollbar-button ", ctx_r0.cmp.buttonClass, "");
  }
}
var _c1 = "[_nghost-%COMP%]{position:absolute;inset:0;pointer-events:none;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}.ng-scrollbar-sticky[_ngcontent-%COMP%]{top:calc(var(--_scrollbar-wrapper-top) * 1px);left:calc(var(--_scrollbar-wrapper-left) * 1px);right:calc(var(--_scrollbar-wrapper-right) * 1px);height:calc(var(--_scrollbar-wrapper-height) * 1px);width:calc(var(--_scrollbar-wrapper-width) * 1px);position:sticky;z-index:100;opacity:var(--_scrollbar-hover-opacity);transition:var(--_scrollbar-opacity-transition);pointer-events:var(--_scrollbar-pointer-events)}.ng-scrollbar-track-wrapper[_ngcontent-%COMP%]{touch-action:none;-webkit-user-select:none;user-select:none;top:var(--_scrollbar-track-top);bottom:var(--_scrollbar-track-bottom);right:var(--_scrollbar-track-right);left:var(--_scrollbar-track-left);transition:var(--INTERNAL-scrollbar-track-wrapper-transition);position:absolute;overflow:hidden;display:flex;place-items:center}.ng-scrollbar-track[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;background-color:var(--INTERNAL-scrollbar-track-color);border-radius:var(--INTERNAL-scrollbar-border-radius);cursor:default;z-index:1;order:2}.ng-scrollbar-thumb[_ngcontent-%COMP%]{box-sizing:border-box;position:absolute;transition:var(--INTERNAL-scrollbar-thumb-transition);border-radius:var(--INTERNAL-scrollbar-border-radius);height:var(--_thumb-height);width:var(--_thumb-width);animation-name:_ngcontent-%COMP%_scrollbarThumbAnimation;animation-duration:1ms;animation-timing-function:linear}@keyframes _ngcontent-%COMP%_scrollbarThumbAnimation{0%{translate:var(--_scrollbar-thumb-transform-from)}to{translate:var(--_scrollbar-thumb-transform-to)}}";
function Scrollbars_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "scrollbar-y");
  }
}
function Scrollbars_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "scrollbar-x");
  }
}
var _c2 = ["contentWrapper"];
var _c3 = ["*"];
var _c4 = ["externalViewport", ""];
var _c5 = "[_nghost-%COMP%]{display:block;position:relative;max-height:100%;max-width:100%;--INTERNAL-scrollbar-border-radius: var(--scrollbar-border-radius, 0px);--INTERNAL-scrollbar-thickness: var(--scrollbar-thickness, 5);--INTERNAL-scrollbar-offset: var(--scrollbar-offset, 0);--INTERNAL-scrollbar-track-wrapper-transition: var(--scrollbar-track-wrapper-transition, width 60ms linear, height 60ms linear);--INTERNAL-scrollbar-track-color: var(--scrollbar-track-color, transparent);--INTERNAL-scrollbar-thumb-color: var(--scrollbar-thumb-color, rgb(0 0 0 / 20%));--INTERNAL-scrollbar-thumb-hover-color: var(--scrollbar-thumb-hover-color, var(--INTERNAL-scrollbar-thumb-color));--INTERNAL-scrollbar-hover-thickness: var(--scrollbar-hover-thickness, var(--INTERNAL-scrollbar-thickness));--INTERNAL-scrollbar-thumb-transition: var(--scrollbar-thumb-transition, none);--INTERNAL-scrollbar-thumb-min-size: var(--scrollbar-thumb-min-size, 20);--INTERNAL-scrollbar-button-color: var(--scrollbar-button-color, var(--INTERNAL-scrollbar-thumb-color));--INTERNAL-scrollbar-button-hover-color: var(--scrollbar-button-hover-color, var(--INTERNAL-scrollbar-button-color));--INTERNAL-scrollbar-button-active-color: var(--scrollbar-button-active-color, var(--INTERNAL-scrollbar-button-hover-color));--INTERNAL-scrollbar-button-fill: var(--scrollbar-button-fill, white);--INTERNAL-scrollbar-button-hover-fill: var(--scrollbar-button-hover-fill, var(--INTERNAL-scrollbar-button-fill));--INTERNAL-scrollbar-button-active-fill: var(--scrollbar-button-active-fill, var(--INTERNAL-scrollbar-button-hover-fill));--INTERNAL-scrollbar-hover-opacity-transition-enter-duration: var(--scrollbar-hover-opacity-transition-enter-duration, 0);--INTERNAL-scrollbar-hover-opacity-transition-leave-duration: var(--scrollbar-hover-opacity-transition-leave-duration, .4s);--INTERNAL-scrollbar-hover-opacity-transition-leave-delay: var(--scrollbar-hover-opacity-transition-leave-delay, 1s);--INTERNAL-scrollbar-overscroll-behavior: var(--scrollbar-overscroll-behavior, initial);--INTERNAL-scrollbar-mobile-overscroll-behavior: var(--scrollbar-mobile-overscroll-behavior, none);--_scrollbar-thickness: calc(var(--INTERNAL-scrollbar-thickness) + var(--INTERNAL-scrollbar-offset) * 2);--_scrollbar-pointer-events: auto;--_scrollbar-offset-px: calc(var(--INTERNAL-scrollbar-offset) * 1px);--_scrollbar-thickness-px: calc(var(--INTERNAL-scrollbar-thickness) * 1px);--_scrollbar-hover-thickness-px: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_viewport-padding-top: 0;--_viewport-padding-bottom: 0;--_viewport-padding-left: 0;--_viewport-padding-right: 0;--_horizontal-thumb-display: block;--_vertical-thumb-display: block;--_viewport-overflow: auto;--_thumb-x-color: var(--INTERNAL-scrollbar-thumb-color);--_thumb-y-color: var(--INTERNAL-scrollbar-thumb-color);--_track-y-thickness: var(--_scrollbar-thickness-px);--_track-x-thickness: var(--_scrollbar-thickness-px);--_viewport-overscroll-behavior: var(--INTERNAL-scrollbar-overscroll-behavior);--_scrollbar-content-width: fit-content}[_nghost-%COMP%]{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-offset-px);--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-offset-px);--_horizontal-top: initial;--_horizontal-bottom: var(--_scrollbar-offset-px);--_scrollbar-wrapper-x-top: calc(var(--viewport-height) - var(--_scrollbar-thickness));--reached-offset: 1px;--reached-offset-top: var(--reached-offset);--reached-offset-bottom: var(--reached-offset);--reached-offset-start: var(--reached-offset);--reached-offset-end: var(--reached-offset);--dropped-offset: 1px;--dropped-offset-top: var(--dropped-offset);--dropped-offset-bottom: var(--dropped-offset);--dropped-offset-start: var(--dropped-offset);--dropped-offset-end: var(--dropped-offset);--_viewport_scroll-timeline: unset;--_animation-timeline-y: unset;--_scrollbar-y-thumb-transform-to-value: unset;--_scrollbar-x-thumb-transform-to-value: unset;--_scrollbar-thumb-transform-from: unset;--_scrollbar-thumb-transform-to: unset}.ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport{min-height:100%;min-width:100%;height:100%;max-height:100%;max-width:100%}.ng-scroll-viewport[_nghost-%COMP%], .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport{position:relative;overflow:var(--_viewport-overflow);scroll-timeline:var(--_viewport_scroll-timeline);box-sizing:border-box!important;-webkit-overflow-scrolling:touch;will-change:scroll-position;-webkit-user-select:var(--_viewport-user-select);user-select:var(--_viewport-user-select);overscroll-behavior:var(--_viewport-overscroll-behavior)}.ng-scroll-viewport[_nghost-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport>.ng-scroll-content{width:var(--_scrollbar-content-width);z-index:1;min-width:100%;min-height:100%;contain:content;padding:var(--_viewport-padding-top, 0) var(--_viewport-padding-right, 0) var(--_viewport-padding-bottom, 0) var(--_viewport-padding-left, 0)}.ng-scroll-viewport[_nghost-%COMP%], .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport{scrollbar-width:none!important}.ng-scroll-viewport[_nghost-%COMP%]::-webkit-scrollbar, .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport::-webkit-scrollbar{display:none!important}[position=invertX][_nghost-%COMP%], [position=invertAll][_nghost-%COMP%]{--_horizontal-top: var(--_scrollbar-offset-px);--_horizontal-bottom: initial;--_scrollbar-wrapper-x-top: 0}[dir=ltr][_nghost-%COMP%]{--_scrollbar-wrapper-y-right: initial;--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-left: calc(var(--viewport-width) - var(--_scrollbar-thickness))}[dir=ltr][position=invertY][_nghost-%COMP%], [dir=ltr][position=invertAll][_nghost-%COMP%]{--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-left: 0}[dir=rtl][_nghost-%COMP%]{--_scrollbar-wrapper-y-left: initial;--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-right: calc(var(--viewport-width) - var(--_scrollbar-thickness))}[dir=rtl][position=invertY][_nghost-%COMP%], [dir=rtl][position=invertAll][_nghost-%COMP%]{--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-right: 0}[verticalUsed=true][horizontalUsed=true][_nghost-%COMP%]{--_scrollbar-thickness-margin: calc(var(--INTERNAL-scrollbar-thickness) + var(--INTERNAL-scrollbar-offset) * 3);--_scrollbar-thickness-margin-px: calc(var(--_scrollbar-thickness-margin) * 1px)}[horizontalUsed=true][_nghost-%COMP%]{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-thickness-margin-px)}[horizontalUsed=true][position=invertX][_nghost-%COMP%], [horizontalUsed=true][position=invertAll][_nghost-%COMP%]{--_vertical-top: var(--_scrollbar-thickness-margin-px);--_vertical-bottom: var(--_scrollbar-offset-px)}[verticalUsed=true][dir=ltr][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}[verticalUsed=true][dir=rtl][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}[verticalUsed=true][position=invertY][dir=ltr][_nghost-%COMP%], [verticalUsed=true][position=invertAll][dir=ltr][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}[verticalUsed=true][position=invertY][dir=rtl][_nghost-%COMP%], [verticalUsed=true][position=invertAll][dir=rtl][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}[appearance=native][verticalUsed=true][dir=ltr][_nghost-%COMP%]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}[appearance=native][verticalUsed=true][dir=rtl][_nghost-%COMP%]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}[appearance=native][verticalUsed=true][position=invertY][dir=ltr][_nghost-%COMP%], [appearance=native][verticalUsed=true][position=invertAll][dir=ltr][_nghost-%COMP%]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}[appearance=native][verticalUsed=true][position=invertY][dir=rtl][_nghost-%COMP%], [appearance=native][verticalUsed=true][position=invertAll][dir=rtl][_nghost-%COMP%]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}[appearance=native][horizontalUsed=true][_nghost-%COMP%]{--_viewport-padding-top: 0;--_viewport-padding-bottom: calc(var(--_scrollbar-thickness) * 1px)}[appearance=native][horizontalUsed=true][position=invertX][_nghost-%COMP%], [appearance=native][horizontalUsed=true][position=invertAll][_nghost-%COMP%]{--_viewport-padding-top: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-bottom: 0}[visibility=hover][_nghost-%COMP%]{--_scrollbar-hover-opacity: 0;--_scrollbar-opacity-transition: opacity var(--INTERNAL-scrollbar-hover-opacity-transition-leave-duration) var(--INTERNAL-scrollbar-hover-opacity-transition-leave-delay)}[visibility=hover][_nghost-%COMP%]:hover, [visibility=hover][_nghost-%COMP%]:active, [visibility=hover][_nghost-%COMP%]:focus{--_scrollbar-hover-opacity: 1;--_scrollbar-opacity-transition: opacity var(--INTERNAL-scrollbar-hover-opacity-transition-enter-duration)}[dir=ltr][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start], [dir=ltr][_nghost-%COMP%]     .scroll-dropped-trigger-element[trigger=start]{left:0;right:unset}[dir=ltr][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end], [dir=ltr][_nghost-%COMP%]     .scroll-dropped-trigger-element[trigger=end]{right:0;left:unset}[dir=rtl][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start], [dir=rtl][_nghost-%COMP%]     .scroll-dropped-trigger-element[trigger=start]{right:0;left:unset}[dir=rtl][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end], [dir=rtl][_nghost-%COMP%]     .scroll-dropped-trigger-element[trigger=end]{left:0;right:unset}[_nghost-%COMP%]     .ng-scroll-reached-wrapper, [_nghost-%COMP%]     .ng-scroll-dropped-wrapper, [_nghost-%COMP%]     .scroll-reached-trigger-element, [_nghost-%COMP%]     .scroll-dropped-trigger-element{position:absolute;-webkit-user-select:none;user-select:none;pointer-events:none;z-index:-9999}[_nghost-%COMP%]     .ng-scroll-reached-wrapper, [_nghost-%COMP%]     .ng-scroll-dropped-wrapper{visibility:hidden;inset:0;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}[_nghost-%COMP%]     [isHorizontallyScrollable=false] .scroll-reached-trigger-element[trigger=end], [_nghost-%COMP%]     [isHorizontallyScrollable=false] .scroll-dropped-trigger-element[trigger=end]{display:none}[_nghost-%COMP%]     [isVerticallyScrollable=false] .scroll-reached-trigger-element[trigger=bottom], [_nghost-%COMP%]     [isVerticallyScrollable=false] .scroll-dropped-trigger-element[trigger=bottom]{display:none}[_nghost-%COMP%]     .scroll-reached-trigger-element{background:red}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=top], [_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=bottom]{left:0;right:0}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start], [_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end]{top:0;bottom:0}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=top]{top:0;height:var(--reached-offset-top)}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=bottom]{bottom:0;height:var(--reached-offset-bottom)}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start]{width:var(--reached-offset-start)}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end]{width:var(--reached-offset-end)}[_nghost-%COMP%]   .scroll-dropped-trigger-element[_ngcontent-%COMP%]{background:#00f}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=top][_ngcontent-%COMP%], [_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=bottom][_ngcontent-%COMP%]{left:0;right:0}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=start][_ngcontent-%COMP%], [_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=end][_ngcontent-%COMP%]{top:0;bottom:0}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=top][_ngcontent-%COMP%]{top:0;height:var(--dropped-offset-top)}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=bottom][_ngcontent-%COMP%]{bottom:0;height:var(--dropped-offset-bottom)}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=start][_ngcontent-%COMP%]{width:var(--dropped-offset-start)}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=end][_ngcontent-%COMP%]{width:var(--dropped-offset-end)}[verticalUsed=true][_nghost-%COMP%]{--_timeline-scope: --scrollerY;--_animation-timeline-y: --scrollerY;--_viewport_scroll-timeline: --scrollerY y;--_scrollbar-y-thumb-transform-to-value: calc(var(--track-y-length) - var(--thumb-y-length))}[horizontalUsed=true][_nghost-%COMP%]{--_timeline-scope: --scrollerX;--_animation-timeline-x: --scrollerX;--_viewport_scroll-timeline: --scrollerX x;--_scrollbar-x-thumb-transform-to-value: calc(var(--track-x-length) - var(--thumb-x-length))}[verticalUsed=true][horizontalUsed=true][_nghost-%COMP%]{--_timeline-scope: --scrollerX, --scrollerY;--_viewport_scroll-timeline: --scrollerX x, --scrollerY y}[orientation=vertical][_nghost-%COMP%]{--_viewport-overflow: hidden auto;--_scrollbar-content-width: unset}[orientation=horizontal][_nghost-%COMP%]{--_viewport-overflow: auto hidden}[disableInteraction=true][_nghost-%COMP%]{--_scrollbar-pointer-events: none}[isVerticallyScrollable=false][_nghost-%COMP%]{--_vertical-thumb-display: none}[isHorizontallyScrollable=false][_nghost-%COMP%]{--_horizontal-thumb-display: none}[dragging=x][_nghost-%COMP%], [dragging=y][_nghost-%COMP%]{--_viewport-user-select: none}[horizontalUsed=true][_nghost-%COMP%]{--thumb-x-length: max(calc(var(--viewport-width) * var(--track-x-length) / var(--content-width)), var(--INTERNAL-scrollbar-thumb-min-size))}[verticalUsed=true][_nghost-%COMP%]{--thumb-y-length: max(calc(var(--viewport-height) * var(--track-y-length) / var(--content-height)), var(--INTERNAL-scrollbar-thumb-min-size))}[dragging=x][_nghost-%COMP%]{--_track-x-thickness: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_thumb-x-color: var(var(--INTERNAL-scrollbar-thumb-min-size))}[dragging=y][_nghost-%COMP%]{--_track-y-thickness: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_thumb-y-color: var(var(--INTERNAL-scrollbar-thumb-min-size))}[mobile=true][_nghost-%COMP%]{--_viewport-overscroll-behavior: var(--INTERNAL-scrollbar-mobile-overscroll-behavior)}";
var _ScrollViewport = class _ScrollViewport {
  constructor() {
    this.nativeElement = inject(ElementRef).nativeElement;
  }
};
_ScrollViewport.ɵfac = function ScrollViewport_Factory(t) {
  return new (t || _ScrollViewport)();
};
_ScrollViewport.ɵdir = ɵɵdefineDirective({
  type: _ScrollViewport,
  selectors: [["", "scrollViewport", ""]],
  standalone: true
});
var ScrollViewport = _ScrollViewport;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollViewport, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[scrollViewport]"
    }]
  }], null, null);
})();
var ScrollbarUpdateReason;
(function(ScrollbarUpdateReason2) {
  ScrollbarUpdateReason2["AfterInit"] = "AfterInit";
  ScrollbarUpdateReason2["Resized"] = "ResizeObserver";
})(ScrollbarUpdateReason || (ScrollbarUpdateReason = {}));
var NG_SCROLLBAR_OPTIONS = new InjectionToken("NG_SCROLLBAR_OPTIONS");
var NG_SCROLLBAR_POLYFILL = new InjectionToken("NG_SCROLLBAR_POLYFILL");
function resizeObserver({
  element,
  contentWrapper,
  throttleDuration
}) {
  let reason = ScrollbarUpdateReason.AfterInit;
  let resizeObserver2;
  const stream = new Observable((observer) => {
    resizeObserver2 = new ResizeObserver(() => {
      observer.next(reason);
      reason = ScrollbarUpdateReason.Resized;
    });
    resizeObserver2.observe(element);
    if (contentWrapper) {
      resizeObserver2.observe(contentWrapper);
    }
    return () => {
      resizeObserver2?.disconnect();
    };
  });
  return throttleDuration ? stream.pipe(throttleTime(throttleDuration, null, {
    leading: true,
    trailing: true
  })) : stream;
}
function mutationObserver(element, throttleDuration) {
  let mutationObserver2;
  const stream = new Observable((observer) => {
    mutationObserver2 = new MutationObserver(() => {
      observer.next();
    });
    mutationObserver2.observe(element, {
      childList: true,
      subtree: true
    });
    return () => {
      mutationObserver2?.disconnect();
    };
  });
  return stream.pipe(throttleTime(throttleDuration, null, {
    leading: true,
    trailing: true
  }));
}
function preventSelection(doc) {
  return tap(() => doc.onselectstart = () => false);
}
function enableSelection(doc) {
  return tap(() => doc.onselectstart = null);
}
function stopPropagation() {
  return tap((e) => {
    e.preventDefault();
    e.stopPropagation();
  });
}
var ViewportClasses;
(function(ViewportClasses2) {
  ViewportClasses2["Viewport"] = "ng-scroll-viewport";
  ViewportClasses2["Content"] = "ng-scroll-content";
})(ViewportClasses || (ViewportClasses = {}));
var ViewportAdapter = class {
  constructor() {
    this.initialized = signal(false);
  }
  /** Viewport clientHeight */
  get offsetHeight() {
    return this.nativeElement.offsetHeight;
  }
  /** Viewport clientWidth */
  get offsetWidth() {
    return this.nativeElement.offsetWidth;
  }
  /** Viewport scrollTop */
  get scrollTop() {
    return this.nativeElement.scrollTop;
  }
  /** Viewport scrollLeft */
  get scrollLeft() {
    return this.nativeElement.scrollLeft;
  }
  /** Content height */
  get contentHeight() {
    return this.contentWrapperElement.offsetHeight;
  }
  /** Content width */
  get contentWidth() {
    return this.contentWrapperElement.offsetWidth;
  }
  /** The remaining vertical scrollable distance. */
  get scrollMaxX() {
    return this.contentWidth - this.offsetWidth;
  }
  /** The vertical remaining scrollable distance */
  get scrollMaxY() {
    return this.contentHeight - this.offsetHeight;
  }
  /**
   * Initialize viewport
   */
  init(viewportElement, contentElement, spacerElement) {
    viewportElement.classList.add(ViewportClasses.Viewport);
    this.nativeElement = viewportElement;
    contentElement.classList.add(ViewportClasses.Content);
    if (spacerElement) {
      spacerElement.style.position = "relative";
      this.contentWrapperElement = spacerElement;
    } else {
      this.contentWrapperElement = contentElement;
    }
    this.initialized.set(true);
  }
  /**
   * Scrolls the viewport vertically to the specified value.
   */
  scrollYTo(value) {
    this.nativeElement.scrollTop = value;
  }
  /**
   * Scrolls the viewport horizontally to the specified value.
   */
  scrollXTo(value) {
    this.nativeElement.scrollLeft = value;
  }
};
var NG_SCROLLBAR = new InjectionToken("NG_SCROLLBAR");
var defaultOptions = {
  trackClass: "",
  thumbClass: "",
  buttonClass: "",
  orientation: "auto",
  appearance: "native",
  visibility: "native",
  position: "native",
  trackScrollDuration: 50,
  sensorThrottleTime: 0,
  disableSensor: false,
  disableInteraction: false,
  buttons: false,
  hoverOffset: false
};
var _NgScrollbarCore = class _NgScrollbarCore {
  constructor() {
    this.injectedOptions = inject(NG_SCROLLBAR_OPTIONS, {
      optional: true
    });
    this.options = this.injectedOptions ? __spreadValues(__spreadValues({}, defaultOptions), this.injectedOptions) : defaultOptions;
    this.zone = inject(NgZone);
    this.platform = inject(Platform);
    this.injector = inject(Injector);
    this.isMobile = this.platform.IOS || this.platform.ANDROID;
    this.dir = inject(Directionality);
    this.smoothScroll = inject(SmoothScrollManager);
    this.nativeElement = inject(ElementRef).nativeElement;
    this.dragging = signal("none");
    this.orientation = input(this.options.orientation);
    this.visibility = input(this.options.visibility);
    this.buttons = input(this.options.buttons, {
      transform: booleanAttribute
    });
    this.disableInteraction = input(this.options.disableInteraction, {
      transform: booleanAttribute
    });
    this.disableSensor = input(this.options.disableSensor, {
      transform: booleanAttribute
    });
    this.sensorThrottleTime = input(this.options.sensorThrottleTime, {
      transform: numberAttribute
    });
    this.hoverOffset = input(this.options.hoverOffset, {
      transform: booleanAttribute
    });
    this.viewportDimension = signal({
      contentHeight: 0,
      contentWidth: 0,
      offsetHeight: 0,
      offsetWidth: 0
    });
    this.state = computed(() => {
      let verticalUsed = false;
      let horizontalUsed = false;
      let isVerticallyScrollable = false;
      let isHorizontallyScrollable = false;
      const orientation = this.orientation();
      const visibility = this.visibility();
      const viewport = this.viewportDimension();
      if (orientation === "auto" || orientation === "vertical") {
        isVerticallyScrollable = viewport.contentHeight > viewport.offsetHeight;
        verticalUsed = visibility === "visible" || isVerticallyScrollable;
      }
      if (orientation === "auto" || orientation === "horizontal") {
        isHorizontallyScrollable = viewport.contentWidth > viewport.offsetWidth;
        horizontalUsed = visibility === "visible" || isHorizontallyScrollable;
      }
      return {
        verticalUsed,
        horizontalUsed,
        isVerticallyScrollable,
        isHorizontallyScrollable
      };
    });
    this.isVerticallyScrollable = computed(() => this.state().isVerticallyScrollable);
    this.isHorizontallyScrollable = computed(() => this.state().isHorizontallyScrollable);
    this.verticalUsed = computed(() => this.state().verticalUsed);
    this.horizontalUsed = computed(() => this.state().horizontalUsed);
    this.trackScrollDuration = this.options.trackScrollDuration;
    this.appearance = this.options.appearance;
    this.position = this.options.position;
    this.trackClass = this.options.trackClass;
    this.thumbClass = this.options.thumbClass;
    this.buttonClass = this.options.thumbClass;
    this.afterInit = new EventEmitter();
    this.afterUpdate = new EventEmitter();
    this.viewport = new ViewportAdapter();
  }
  ngOnInit() {
    runInInjectionContext(this.injector, () => {
      this.direction = toSignal(this.dir.change.pipe(map(() => this.dir.value)), {
        initialValue: this.dir.value
      });
      effect((onCleanup) => {
        if (this.disableSensor()) {
          this.sizeChangeSub?.unsubscribe();
        } else {
          if (this.platform.isBrowser && this.viewport.initialized()) {
            this.sizeChangeSub?.unsubscribe();
            this.zone.runOutsideAngular(() => {
              this.sizeChangeSub = resizeObserver({
                element: this.viewport.nativeElement,
                contentWrapper: this.viewport.contentWrapperElement,
                throttleDuration: this.sensorThrottleTime()
              }).pipe(tap((reason) => this.update(reason))).subscribe();
            });
          }
        }
        onCleanup(() => this.sizeChangeSub?.unsubscribe());
      });
    });
  }
  ngAfterViewInit() {
    if (this.platform.isBrowser && this.disableSensor()) {
      requestAnimationFrame(() => {
        this.update(ScrollbarUpdateReason.AfterInit);
      });
    }
  }
  /**
   * Update local state and the internal scrollbar controls
   */
  update(reason) {
    this.updateCSSVariables();
    this.zone.run(() => {
      this.viewportDimension.set({
        contentHeight: this.viewport.contentHeight,
        contentWidth: this.viewport.contentWidth,
        offsetHeight: this.viewport.offsetHeight,
        offsetWidth: this.viewport.offsetWidth
      });
      if (reason === ScrollbarUpdateReason.AfterInit) {
        this.afterInit.emit();
      } else {
        this.afterUpdate.emit();
      }
    });
  }
  /**
   * Smooth scroll functions
   */
  scrollTo(options) {
    return this.smoothScroll.scrollTo(this.viewport.nativeElement, options);
  }
  /**
   * Scroll to element by reference or selector
   */
  scrollToElement(target, options) {
    return this.smoothScroll.scrollToElement(this.viewport.nativeElement, target, options);
  }
  /**
   * Update Essential CSS variables
   */
  updateCSSVariables() {
    this.nativeElement.style.setProperty("--content-height", `${this.viewport.contentHeight}`);
    this.nativeElement.style.setProperty("--content-width", `${this.viewport.contentWidth}`);
    this.nativeElement.style.setProperty("--viewport-height", `${this.viewport.offsetHeight}`);
    this.nativeElement.style.setProperty("--viewport-width", `${this.viewport.offsetWidth}`);
  }
};
_NgScrollbarCore.ɵfac = function NgScrollbarCore_Factory(t) {
  return new (t || _NgScrollbarCore)();
};
_NgScrollbarCore.ɵdir = ɵɵdefineDirective({
  type: _NgScrollbarCore,
  hostVars: 14,
  hostBindings: function NgScrollbarCore_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("verticalUsed", ctx.verticalUsed())("horizontalUsed", ctx.horizontalUsed())("isVerticallyScrollable", ctx.isVerticallyScrollable())("isHorizontallyScrollable", ctx.isHorizontallyScrollable())("mobile", ctx.isMobile)("dir", ctx.direction())("position", ctx.position)("dragging", ctx.dragging())("appearance", ctx.appearance)("visibility", ctx.visibility())("orientation", ctx.orientation())("disableInteraction", ctx.disableInteraction());
      ɵɵclassProp("ng-scrollbar", true);
    }
  },
  inputs: {
    orientation: [1, "orientation"],
    visibility: [1, "visibility"],
    buttons: [1, "buttons"],
    disableInteraction: [1, "disableInteraction"],
    disableSensor: [1, "disableSensor"],
    sensorThrottleTime: [1, "sensorThrottleTime"],
    hoverOffset: [1, "hoverOffset"],
    trackScrollDuration: [2, "trackScrollDuration", "trackScrollDuration", numberAttribute],
    appearance: "appearance",
    position: "position",
    trackClass: "trackClass",
    thumbClass: "thumbClass",
    buttonClass: "buttonClass"
  },
  outputs: {
    afterInit: "afterInit",
    afterUpdate: "afterUpdate"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_SCROLLBAR,
    useExisting: _NgScrollbarCore
  }]), ɵɵInputTransformsFeature]
});
var NgScrollbarCore = _NgScrollbarCore;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgScrollbarCore, [{
    type: Directive,
    args: [{
      host: {
        "[class.ng-scrollbar]": "true",
        "[attr.verticalUsed]": "verticalUsed()",
        "[attr.horizontalUsed]": "horizontalUsed()",
        "[attr.isVerticallyScrollable]": "isVerticallyScrollable()",
        "[attr.isHorizontallyScrollable]": "isHorizontallyScrollable()",
        "[attr.mobile]": "isMobile",
        "[attr.dir]": "direction()",
        "[attr.position]": "position",
        "[attr.dragging]": "dragging()",
        "[attr.appearance]": "appearance",
        "[attr.visibility]": "visibility()",
        "[attr.orientation]": "orientation()",
        "[attr.disableInteraction]": "disableInteraction()"
      },
      providers: [{
        provide: NG_SCROLLBAR,
        useExisting: NgScrollbarCore
      }]
    }]
  }], null, {
    trackScrollDuration: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    appearance: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    trackClass: [{
      type: Input
    }],
    thumbClass: [{
      type: Input
    }],
    buttonClass: [{
      type: Input
    }],
    afterInit: [{
      type: Output
    }],
    afterUpdate: [{
      type: Output
    }]
  });
})();
var scrollTimelinePolyfillUrl = "https://cdn.statically.io/gist/MurhafSousli/c852b6a672069396953f06ddd4b64620/raw/ef55db72e2abb7bc002ed79f4ad4cf408bfdb72f/scroll-timeline-lite.js";
var _ScrollbarManager = class _ScrollbarManager {
  constructor() {
    this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    this._polyfillUrl = inject(NG_SCROLLBAR_POLYFILL, {
      optional: true
    }) || scrollTimelinePolyfillUrl;
    this.document = inject(DOCUMENT);
    this.window = this.document.defaultView;
    this.scrollTimelinePolyfill = signal(null);
    if (this.isBrowser && (!this.window["ScrollTimeline"] || !CSS.supports("animation-timeline", "scroll()"))) {
      this.initPolyfill();
    }
  }
  initPolyfill() {
    return __async(this, null, function* () {
      try {
        const script = this.document.createElement("script");
        script.src = this._polyfillUrl;
        yield new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
          this.document.head.appendChild(script);
        });
        if (this.window["ScrollTimeline"]) {
          this.scrollTimelinePolyfill.set(this.window["ScrollTimeline"]);
        } else {
          console.error("[NgScrollbar]: ScrollTimeline is not attached to the window object.");
        }
      } catch (error) {
        console.error("[NgScrollbar]: Error loading ScrollTimeline script:", error);
      }
    });
  }
};
_ScrollbarManager.ɵfac = function ScrollbarManager_Factory(t) {
  return new (t || _ScrollbarManager)();
};
_ScrollbarManager.ɵprov = ɵɵdefineInjectable({
  token: _ScrollbarManager,
  factory: _ScrollbarManager.ɵfac,
  providedIn: "root"
});
var ScrollbarManager = _ScrollbarManager;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var SCROLLBAR_CONTROL = new InjectionToken("SCROLLBAR_CONTROL");
var _ScrollbarAdapter = class _ScrollbarAdapter {
  constructor() {
    this.cmp = inject(NG_SCROLLBAR);
  }
};
_ScrollbarAdapter.ɵfac = function ScrollbarAdapter_Factory(t) {
  return new (t || _ScrollbarAdapter)();
};
_ScrollbarAdapter.ɵdir = ɵɵdefineDirective({
  type: _ScrollbarAdapter
});
var ScrollbarAdapter = _ScrollbarAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarAdapter, [{
    type: Directive
  }], null, null);
})();
var _PointerEventsAdapter = class _PointerEventsAdapter {
  constructor() {
    this.cmp = inject(NG_SCROLLBAR);
    this.control = inject(SCROLLBAR_CONTROL);
    this.document = inject(DOCUMENT);
    this.zone = inject(NgZone);
    this.nativeElement = inject(ElementRef).nativeElement;
    effect((onCleanup) => {
      if (this.cmp.disableInteraction()) {
        this._pointerEventsSub?.unsubscribe();
      } else {
        this.zone.runOutsideAngular(() => {
          this._pointerEventsSub = this.pointerEvents.subscribe();
        });
      }
      onCleanup(() => this._pointerEventsSub?.unsubscribe());
    });
  }
};
_PointerEventsAdapter.ɵfac = function PointerEventsAdapter_Factory(t) {
  return new (t || _PointerEventsAdapter)();
};
_PointerEventsAdapter.ɵdir = ɵɵdefineDirective({
  type: _PointerEventsAdapter
});
var PointerEventsAdapter = _PointerEventsAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PointerEventsAdapter, [{
    type: Directive
  }], () => [], null);
})();
var _ThumbAdapter = class _ThumbAdapter extends PointerEventsAdapter {
  // Returns thumb size
  get size() {
    return this.nativeElement[this.control.sizeProperty];
  }
  // The maximum space available for scrolling.
  get trackMax() {
    return this.track.size - this.size;
  }
  /**
   * Stream that emits the 'scrollTo' position when a scrollbar thumb element is dragged
   * This function is called by thumb drag event using viewport or scrollbar pointer events
   */
  get pointerEvents() {
    return fromEvent(this.nativeElement, "pointerdown").pipe(stopPropagation(), preventSelection(this.document), switchMap((e) => {
      let startTrackMax;
      let startScrollMax;
      const dragStart = of(e).pipe(tap(() => {
        startTrackMax = this.trackMax;
        startScrollMax = this.control.viewportScrollMax;
        this.setDragging(this.control.axis);
      }));
      const dragging = fromEvent(this.document, "pointermove").pipe(stopPropagation());
      const dragEnd = fromEvent(this.document, "pointerup", {
        capture: true
      }).pipe(stopPropagation(), enableSelection(this.document), tap(() => this.setDragging("none")));
      return dragStart.pipe(map((startEvent) => startEvent[this.control.offsetProperty]), switchMap((startOffset) => dragging.pipe(
        map((moveEvent) => moveEvent[this.control.clientProperty]),
        // Calculate how far the pointer is from the top/left of the scrollbar (minus the dragOffset).
        map((moveClient) => moveClient - this.track.offset),
        map((trackRelativeOffset) => startScrollMax * (trackRelativeOffset - startOffset) / startTrackMax),
        tap((scrollPosition) => this.control.instantScrollTo(scrollPosition, startScrollMax)),
        takeUntil(dragEnd)
      )));
    }));
  }
  constructor() {
    effect(() => {
      const script = this.manager.scrollTimelinePolyfill();
      if (script && !this._animation) {
        this._animation = startPolyfill(script, this.nativeElement, this.cmp.viewport.nativeElement, this.control.axis);
      }
    });
    super();
    this.manager = inject(ScrollbarManager);
    this.track = inject(TrackAdapter);
  }
  setDragging(value) {
    this.zone.run(() => this.cmp.dragging.set(value));
  }
};
_ThumbAdapter.ɵfac = function ThumbAdapter_Factory(t) {
  return new (t || _ThumbAdapter)();
};
_ThumbAdapter.ɵdir = ɵɵdefineDirective({
  type: _ThumbAdapter,
  features: [ɵɵInheritDefinitionFeature]
});
var ThumbAdapter = _ThumbAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThumbAdapter, [{
    type: Directive
  }], () => [], null);
})();
function startPolyfill(ScrollTimeline, element, source, axis) {
  return element.animate({
    translate: ["var(--_scrollbar-thumb-transform-from)", "var(--_scrollbar-thumb-transform-to)"]
  }, {
    fill: "both",
    easing: "linear",
    timeline: new ScrollTimeline({
      source,
      axis
    })
  });
}
var _TrackAdapter = class _TrackAdapter extends PointerEventsAdapter {
  // Returns viewport client size
  get viewportSize() {
    return this.cmp.viewport[this.control.sizeProperty];
  }
  // Get track client rect
  get clientRect() {
    return this.nativeElement.getBoundingClientRect();
  }
  // Scrollbar track offset
  get offset() {
    return this.clientRect[this.control.clientRectProperty];
  }
  // Scrollbar track length
  get size() {
    return this.nativeElement[this.control.sizeProperty];
  }
  // Observable for track dragging events
  get pointerEvents() {
    const pointerDown$ = fromEvent(this.nativeElement, "pointerdown").pipe(stopPropagation(), preventSelection(this.document));
    const pointerUp$ = fromEvent(this.document, "pointerup", {
      passive: true
    }).pipe(enableSelection(this.document));
    const pointerEnter$ = fromEvent(this.nativeElement, "pointerover", {
      passive: true
    }).pipe(
      // When mouse is out and enters again, must set the current position first
      tap((e) => this.currMousePosition = e[this.control.offsetProperty]),
      map(() => true)
    );
    const pointerLeave$ = fromEvent(this.nativeElement, "pointerout", {
      passive: true
    }).pipe(map(() => false));
    const pointerOver$ = merge(pointerEnter$, pointerLeave$).pipe(startWith(true));
    const pointerMove$ = fromEvent(this.nativeElement, "pointermove", {
      passive: true
    }).pipe(tap((e) => this.currMousePosition = e[this.control.offsetProperty]));
    return pointerDown$.pipe(switchMap((startEvent) => {
      pointerMove$.pipe(takeUntil(pointerUp$)).subscribe();
      return this.onTrackFirstClick(startEvent).pipe(delay(200), switchMap(() => {
        return pointerOver$.pipe(switchMap((over) => {
          const currDirection = this.getScrollDirection(this.currMousePosition);
          const sameDirection = this.scrollDirection === currDirection;
          return over && sameDirection ? this.onTrackOngoingMousedown() : EMPTY;
        }));
      }), takeUntil(pointerUp$));
    }));
  }
  constructor() {
    effect((onCleanup) => {
      if (this.cmp.disableSensor()) {
        this.update();
        this.sizeChangeSub?.unsubscribe();
      } else {
        this.zone.runOutsideAngular(() => {
          this.sizeChangeSub = resizeObserver({
            element: this.nativeElement,
            throttleDuration: this.cmp.sensorThrottleTime()
          }).pipe(tap(() => this.update())).subscribe();
        });
      }
      onCleanup(() => this.sizeChangeSub?.unsubscribe());
    });
    super();
  }
  update() {
    this.cmp.nativeElement.style.setProperty(this.cssLengthProperty, `${this.size}`);
  }
  /**
   *  Callback when mouse is first clicked on the track
   */
  onTrackFirstClick(e) {
    this.currMousePosition = e[this.control.offsetProperty];
    this.scrollDirection = this.getScrollDirection(this.currMousePosition);
    this.scrollMax = this.control.viewportScrollMax;
    return this.scrollTo(this.nextStep());
  }
  nextStep() {
    if (this.scrollDirection === "forward") {
      const scrollForwardIncrement = this.getScrollForwardStep();
      if (scrollForwardIncrement >= this.scrollMax) {
        return this.scrollMax;
      }
      return scrollForwardIncrement;
    }
    const scrollBackwardIncrement = this.getScrollBackwardStep();
    if (scrollBackwardIncrement <= 0) {
      return 0;
    }
    return scrollBackwardIncrement;
  }
  /**
   * Callback when mouse is still down on the track
   * Incrementally scrolls towards target position until reached
   */
  onTrackOngoingMousedown() {
    const position = this.nextStep();
    return this.scrollTo(position).pipe(takeWhile(() => !this.isReached(position)), switchMap(() => this.onTrackOngoingMousedown()));
  }
  /**
   * Returns a flag that determines whether the scroll from the given position is the final step or not
   */
  isReached(position) {
    if (this.scrollDirection === "forward") {
      return position >= this.scrollMax;
    }
    return position <= 0;
  }
};
_TrackAdapter.ɵfac = function TrackAdapter_Factory(t) {
  return new (t || _TrackAdapter)();
};
_TrackAdapter.ɵdir = ɵɵdefineDirective({
  type: _TrackAdapter,
  contentQueries: function TrackAdapter_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ThumbAdapter, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.thumb = _t.first);
    }
  },
  features: [ɵɵInheritDefinitionFeature]
});
var TrackAdapter = _TrackAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrackAdapter, [{
    type: Directive
  }], () => [], {
    thumb: [{
      type: ContentChild,
      args: [ThumbAdapter]
    }]
  });
})();
var _TrackXDirective = class _TrackXDirective extends TrackAdapter {
  get viewportScrollSize() {
    return this.cmp.viewport.contentWidth;
  }
  constructor() {
    effect(() => {
      if (this.cmp.direction() === "rtl") {
        this.getCurrPosition = () => {
          const offset = this.viewportScrollSize - this.viewportSize - this.control.viewportScrollOffset;
          return offset * this.size / this.viewportScrollSize;
        };
        this.getScrollDirection = (position) => {
          return position < this.getCurrPosition() ? "forward" : "backward";
        };
      } else {
        this.getCurrPosition = () => {
          return this.control.viewportScrollOffset * this.size / this.viewportScrollSize;
        };
        this.getScrollDirection = (position) => {
          return position > this.getCurrPosition() ? "forward" : "backward";
        };
      }
    });
    super();
    this.cssLengthProperty = "--track-x-length";
  }
  scrollTo(start) {
    return fromPromise(this.cmp.scrollTo({
      start,
      duration: this.cmp.trackScrollDuration
    }));
  }
  getScrollForwardStep() {
    return this.control.viewportScrollOffset + this.viewportSize;
  }
  getScrollBackwardStep() {
    return this.control.viewportScrollOffset - this.viewportSize;
  }
};
_TrackXDirective.ɵfac = function TrackXDirective_Factory(t) {
  return new (t || _TrackXDirective)();
};
_TrackXDirective.ɵdir = ɵɵdefineDirective({
  type: _TrackXDirective,
  selectors: [["", "scrollbarTrackX", ""]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: TrackAdapter,
    useExisting: _TrackXDirective
  }]), ɵɵInheritDefinitionFeature]
});
var TrackXDirective = _TrackXDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrackXDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[scrollbarTrackX]",
      providers: [{
        provide: TrackAdapter,
        useExisting: TrackXDirective
      }]
    }]
  }], () => [], null);
})();
var _TrackYDirective = class _TrackYDirective extends TrackAdapter {
  constructor() {
    super(...arguments);
    this.cssLengthProperty = "--track-y-length";
  }
  get viewportScrollSize() {
    return this.cmp.viewport.contentHeight;
  }
  getCurrPosition() {
    return this.control.viewportScrollOffset * this.size / this.viewportScrollSize;
  }
  getScrollDirection(position) {
    return position > this.getCurrPosition() ? "forward" : "backward";
  }
  scrollTo(top) {
    return fromPromise(this.cmp.scrollTo({
      top,
      duration: this.cmp.trackScrollDuration
    }));
  }
  getScrollForwardStep() {
    return this.control.viewportScrollOffset + this.viewportSize;
  }
  getScrollBackwardStep() {
    return this.control.viewportScrollOffset - this.viewportSize;
  }
};
_TrackYDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵTrackYDirective_BaseFactory;
  return function TrackYDirective_Factory(t) {
    return (ɵTrackYDirective_BaseFactory || (ɵTrackYDirective_BaseFactory = ɵɵgetInheritedFactory(_TrackYDirective)))(t || _TrackYDirective);
  };
})();
_TrackYDirective.ɵdir = ɵɵdefineDirective({
  type: _TrackYDirective,
  selectors: [["", "scrollbarTrackY", ""]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: TrackAdapter,
    useExisting: _TrackYDirective
  }]), ɵɵInheritDefinitionFeature]
});
var TrackYDirective = _TrackYDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrackYDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[scrollbarTrackY]",
      providers: [{
        provide: TrackAdapter,
        useExisting: TrackYDirective
      }]
    }]
  }], null, null);
})();
var _ThumbXDirective = class _ThumbXDirective extends ThumbAdapter {
};
_ThumbXDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵThumbXDirective_BaseFactory;
  return function ThumbXDirective_Factory(t) {
    return (ɵThumbXDirective_BaseFactory || (ɵThumbXDirective_BaseFactory = ɵɵgetInheritedFactory(_ThumbXDirective)))(t || _ThumbXDirective);
  };
})();
_ThumbXDirective.ɵdir = ɵɵdefineDirective({
  type: _ThumbXDirective,
  selectors: [["", "scrollbarThumbX", ""]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: ThumbAdapter,
    useExisting: _ThumbXDirective
  }]), ɵɵInheritDefinitionFeature]
});
var ThumbXDirective = _ThumbXDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThumbXDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[scrollbarThumbX]",
      providers: [{
        provide: ThumbAdapter,
        useExisting: ThumbXDirective
      }]
    }]
  }], null, null);
})();
var _ThumbYDirective = class _ThumbYDirective extends ThumbAdapter {
};
_ThumbYDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵThumbYDirective_BaseFactory;
  return function ThumbYDirective_Factory(t) {
    return (ɵThumbYDirective_BaseFactory || (ɵThumbYDirective_BaseFactory = ɵɵgetInheritedFactory(_ThumbYDirective)))(t || _ThumbYDirective);
  };
})();
_ThumbYDirective.ɵdir = ɵɵdefineDirective({
  type: _ThumbYDirective,
  selectors: [["", "scrollbarThumbY", ""]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: ThumbAdapter,
    useExisting: _ThumbYDirective
  }]), ɵɵInheritDefinitionFeature]
});
var ThumbYDirective = _ThumbYDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThumbYDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[scrollbarThumbY]",
      providers: [{
        provide: ThumbAdapter,
        useExisting: ThumbYDirective
      }]
    }]
  }], null, null);
})();
var _ScrollbarButton = class _ScrollbarButton extends PointerEventsAdapter {
  constructor() {
    super(...arguments);
    this.injector = inject(Injector);
    this.afterFirstClickDelay = 120;
    this.firstClickDuration = 100;
    this.scrollBy = 50;
    this.onGoingScrollBy = 12;
    this.canScrollFunc = {
      forward: (scrollOffset, scrollMax) => scrollOffset < scrollMax,
      backward: (scrollOffset) => scrollOffset > 0
    };
    this.scrollStepFunc = {
      forward: (scrollBy, offset) => offset + scrollBy,
      backward: (scrollBy, offset) => offset - scrollBy
    };
    this.horizontalScrollStepFunc = {
      rtl: {
        forward: (scrollBy, offset, scrollMax) => scrollMax - offset - scrollBy,
        backward: (scrollBy, offset, scrollMax) => scrollMax - offset + scrollBy
      },
      ltr: this.scrollStepFunc
    };
  }
  get pointerEvents() {
    const pointerDown$ = fromEvent(this.nativeElement, "pointerdown").pipe(stopPropagation(), preventSelection(this.document));
    const pointerUp$ = fromEvent(this.document, "pointerup", {
      passive: true
    }).pipe(enableSelection(this.document));
    const pointerLeave$ = fromEvent(this.nativeElement, "pointerleave", {
      passive: true
    });
    const pointerUpOrLeave$ = merge(pointerUp$, pointerLeave$);
    return pointerDown$.pipe(switchMap(() => this.firstScrollStep().pipe(delay(this.afterFirstClickDelay), switchMap(() => this.onOngoingPointerdown()), takeUntil(pointerUpOrLeave$))));
  }
  ngOnInit() {
    this.canScroll = this.canScrollFunc[this.scrollDirection];
    if (this.control.axis === "x") {
      runInInjectionContext(this.injector, () => {
        effect(() => {
          const dir = this.cmp.direction();
          this.nextStep = this.horizontalScrollStepFunc[dir][this.scrollDirection];
        });
      });
    } else {
      this.nextStep = this.scrollStepFunc[this.scrollDirection];
    }
  }
  firstScrollStep() {
    const value = this.nextStep(this.scrollBy, this.control.viewportScrollOffset, this.control.viewportScrollMax);
    return this.control.scrollTo(value, this.firstClickDuration);
  }
  onGoingScrollStep() {
    const scrollMax = this.control.viewportScrollMax;
    const value = this.nextStep(this.onGoingScrollBy, this.control.viewportScrollOffset, scrollMax);
    this.control.instantScrollTo(value, scrollMax);
  }
  onOngoingPointerdown() {
    return interval(0, animationFrameScheduler).pipe(takeWhile(() => this.canScroll(this.control.viewportScrollOffset, this.control.viewportScrollMax)), tap(() => this.onGoingScrollStep()));
  }
};
_ScrollbarButton.ɵfac = /* @__PURE__ */ (() => {
  let ɵScrollbarButton_BaseFactory;
  return function ScrollbarButton_Factory(t) {
    return (ɵScrollbarButton_BaseFactory || (ɵScrollbarButton_BaseFactory = ɵɵgetInheritedFactory(_ScrollbarButton)))(t || _ScrollbarButton);
  };
})();
_ScrollbarButton.ɵcmp = ɵɵdefineComponent({
  type: _ScrollbarButton,
  selectors: [["button", "scrollbarButton", ""]],
  inputs: {
    scrollbarButton: "scrollbarButton",
    scrollDirection: "scrollDirection"
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  attrs: _c0,
  decls: 3,
  vars: 0,
  consts: [[1, "ng-scrollbar-button-icon"], ["viewBox", "0 0 512 512", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M413.1,327.3l-1.8-2.1l-136-156.5c-4.6-5.3-11.5-8.6-19.2-8.6c-7.7,0-14.6,3.4-19.2,8.6L101,324.9l-2.3,2.6  C97,330,96,333,96,336.2c0,8.7,7.4,15.8,16.6,15.8v0h286.8v0c9.2,0,16.6-7.1,16.6-15.8C416,332.9,414.9,329.8,413.1,327.3z"]],
  template: function ScrollbarButton_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "svg", 1);
      ɵɵelement(2, "path", 2);
      ɵɵelementEnd()();
    }
  },
  styles: ["[_nghost-%COMP%]{--scrollbar-button-size: 20px;position:relative;border:none;margin:0;padding:0;border-radius:0;appearance:none;background-color:var(--INTERNAL-scrollbar-button-color)}[_nghost-%COMP%]   svg[_ngcontent-%COMP%]{fill:var(--INTERNAL-scrollbar-button-fill)}[_nghost-%COMP%]:hover{background:var(--INTERNAL-scrollbar-button-hover-color)}[_nghost-%COMP%]:hover   svg[_ngcontent-%COMP%]{fill:var(--INTERNAL-scrollbar-button-hover-fill)}[_nghost-%COMP%]:active{background:var(--INTERNAL-scrollbar-button-active-color)}[_nghost-%COMP%]:active   svg[_ngcontent-%COMP%]{fill:var(--INTERNAL-scrollbar-button-active-fill)}[scrollbarButton=top][_nghost-%COMP%], [scrollbarButton=start][_nghost-%COMP%]{order:1}[scrollbarButton=bottom][_nghost-%COMP%], [scrollbarButton=end][_nghost-%COMP%]{order:3}[scrollbarButton=top][_nghost-%COMP%], [scrollbarButton=bottom][_nghost-%COMP%]{width:100%;height:var(--scrollbar-button-size)}[scrollbarButton=start][_nghost-%COMP%], [scrollbarButton=end][_nghost-%COMP%]{width:var(--scrollbar-button-size);height:100%}[scrollbarButton=bottom][_nghost-%COMP%]{--_button-rotate: 180deg}[scrollbarButton=start][_nghost-%COMP%]{--_button-rotate: -90deg}[scrollbarButton=start][_nghost-%COMP%]   .ng-scrollbar-button-icon[_ngcontent-%COMP%]{writing-mode:vertical-lr}[scrollbarButton=end][_nghost-%COMP%]{--_button-rotate: 90deg}[scrollbarButton=end][_nghost-%COMP%]   .ng-scrollbar-button-icon[_ngcontent-%COMP%]{writing-mode:vertical-rl}.ng-scrollbar-button-icon[_ngcontent-%COMP%]{rotate:var(--_button-rotate);display:flex;place-content:center;place-items:center;width:100%;height:100%}"],
  changeDetection: 0
});
var ScrollbarButton = _ScrollbarButton;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarButton, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "button[scrollbarButton]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div class="ng-scrollbar-button-icon">\r\n  <svg viewBox="0 0 512 512"\r\n       xmlns="http://www.w3.org/2000/svg">\r\n    <path\r\n      d="M413.1,327.3l-1.8-2.1l-136-156.5c-4.6-5.3-11.5-8.6-19.2-8.6c-7.7,0-14.6,3.4-19.2,8.6L101,324.9l-2.3,2.6  C97,330,96,333,96,336.2c0,8.7,7.4,15.8,16.6,15.8v0h286.8v0c9.2,0,16.6-7.1,16.6-15.8C416,332.9,414.9,329.8,413.1,327.3z"/>\r\n  </svg>\r\n</div>\r\n',
      styles: [":host{--scrollbar-button-size: 20px;position:relative;border:none;margin:0;padding:0;border-radius:0;appearance:none;background-color:var(--INTERNAL-scrollbar-button-color)}:host svg{fill:var(--INTERNAL-scrollbar-button-fill)}:host:hover{background:var(--INTERNAL-scrollbar-button-hover-color)}:host:hover svg{fill:var(--INTERNAL-scrollbar-button-hover-fill)}:host:active{background:var(--INTERNAL-scrollbar-button-active-color)}:host:active svg{fill:var(--INTERNAL-scrollbar-button-active-fill)}:host[scrollbarButton=top],:host[scrollbarButton=start]{order:1}:host[scrollbarButton=bottom],:host[scrollbarButton=end]{order:3}:host[scrollbarButton=top],:host[scrollbarButton=bottom]{width:100%;height:var(--scrollbar-button-size)}:host[scrollbarButton=start],:host[scrollbarButton=end]{width:var(--scrollbar-button-size);height:100%}:host[scrollbarButton=bottom]{--_button-rotate: 180deg}:host[scrollbarButton=start]{--_button-rotate: -90deg}:host[scrollbarButton=start] .ng-scrollbar-button-icon{writing-mode:vertical-lr}:host[scrollbarButton=end]{--_button-rotate: 90deg}:host[scrollbarButton=end] .ng-scrollbar-button-icon{writing-mode:vertical-rl}.ng-scrollbar-button-icon{rotate:var(--_button-rotate);display:flex;place-content:center;place-items:center;width:100%;height:100%}\n"]
    }]
  }], null, {
    scrollbarButton: [{
      type: Input,
      args: [{
        required: true
      }]
    }],
    scrollDirection: [{
      type: Input,
      args: [{
        required: true
      }]
    }]
  });
})();
var _ScrollbarY = class _ScrollbarY extends ScrollbarAdapter {
  constructor() {
    super(...arguments);
    this.clientRectProperty = "top";
    this.sizeProperty = "offsetHeight";
    this.clientProperty = "clientY";
    this.offsetProperty = "offsetY";
    this.axis = "y";
  }
  get viewportScrollMax() {
    return this.cmp.viewport.scrollMaxY;
  }
  get viewportScrollOffset() {
    return this.cmp.viewport.scrollTop;
  }
  scrollTo(top, duration) {
    return fromPromise(this.cmp.scrollTo({
      top,
      duration
    }));
  }
  instantScrollTo(value) {
    this.cmp.viewport.scrollYTo(value);
  }
};
_ScrollbarY.ɵfac = /* @__PURE__ */ (() => {
  let ɵScrollbarY_BaseFactory;
  return function ScrollbarY_Factory(t) {
    return (ɵScrollbarY_BaseFactory || (ɵScrollbarY_BaseFactory = ɵɵgetInheritedFactory(_ScrollbarY)))(t || _ScrollbarY);
  };
})();
_ScrollbarY.ɵcmp = ɵɵdefineComponent({
  type: _ScrollbarY,
  selectors: [["scrollbar-y"]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: SCROLLBAR_CONTROL,
    useExisting: _ScrollbarY
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 5,
  vars: 11,
  consts: [[1, "ng-scrollbar-sticky"], [1, "ng-scrollbar-track-wrapper"], ["scrollbarTrackY", ""], ["scrollbarThumbY", ""], ["scrollbarButton", "top", "scrollDirection", "backward"], ["scrollbarButton", "bottom", "scrollDirection", "forward"]],
  template: function ScrollbarY_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      ɵɵelement(3, "div", 3);
      ɵɵelementEnd();
      ɵɵtemplate(4, ScrollbarY_Conditional_4_Template, 2, 6);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵclassProp("ng-scrollbar-hover", ctx.cmp.hoverOffset());
      ɵɵadvance();
      ɵɵclassProp("ng-scrollbar-hover", !ctx.cmp.hoverOffset());
      ɵɵadvance();
      ɵɵclassMapInterpolate1("ng-scrollbar-track ", ctx.cmp.trackClass, "");
      ɵɵadvance();
      ɵɵclassMapInterpolate1("ng-scrollbar-thumb ", ctx.cmp.thumbClass, "");
      ɵɵadvance();
      ɵɵconditional(ctx.cmp.buttons() ? 4 : -1);
    }
  },
  dependencies: [TrackYDirective, ThumbYDirective, ScrollbarButton],
  styles: ["[_nghost-%COMP%]{position:absolute;inset:0;pointer-events:none;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}.ng-scrollbar-sticky[_ngcontent-%COMP%]{top:calc(var(--_scrollbar-wrapper-top) * 1px);left:calc(var(--_scrollbar-wrapper-left) * 1px);right:calc(var(--_scrollbar-wrapper-right) * 1px);height:calc(var(--_scrollbar-wrapper-height) * 1px);width:calc(var(--_scrollbar-wrapper-width) * 1px);position:sticky;z-index:100;opacity:var(--_scrollbar-hover-opacity);transition:var(--_scrollbar-opacity-transition);pointer-events:var(--_scrollbar-pointer-events)}.ng-scrollbar-track-wrapper[_ngcontent-%COMP%]{touch-action:none;-webkit-user-select:none;user-select:none;top:var(--_scrollbar-track-top);bottom:var(--_scrollbar-track-bottom);right:var(--_scrollbar-track-right);left:var(--_scrollbar-track-left);transition:var(--INTERNAL-scrollbar-track-wrapper-transition);position:absolute;overflow:hidden;display:flex;place-items:center}.ng-scrollbar-track[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;background-color:var(--INTERNAL-scrollbar-track-color);border-radius:var(--INTERNAL-scrollbar-border-radius);cursor:default;z-index:1;order:2}.ng-scrollbar-thumb[_ngcontent-%COMP%]{box-sizing:border-box;position:absolute;transition:var(--INTERNAL-scrollbar-thumb-transition);border-radius:var(--INTERNAL-scrollbar-border-radius);height:var(--_thumb-height);width:var(--_thumb-width);animation-name:_ngcontent-%COMP%_scrollbarThumbAnimation;animation-duration:1ms;animation-timing-function:linear}@keyframes _ngcontent-%COMP%_scrollbarThumbAnimation{0%{translate:var(--_scrollbar-thumb-transform-from)}to{translate:var(--_scrollbar-thumb-transform-to)}}", "[_nghost-%COMP%]{--_scrollbar-wrapper-top: 0;--_scrollbar-wrapper-left: var(--_scrollbar-wrapper-y-left);--_scrollbar-wrapper-right: var(--_scrollbar-wrapper-y-right);--_scrollbar-wrapper-height: var(--viewport-height);--_scrollbar-wrapper-width: var(--_scrollbar-thickness);--_scrollbar-track-top: var(--_vertical-top);--_scrollbar-track-bottom: var(--_vertical-bottom);--_scrollbar-track-right: var(--_vertical-right);--_scrollbar-track-left: var(--_vertical-left);--_thumb-height: calc(var(--thumb-y-length) * 1px);--_thumb-width: 100%;--_scrollbar-thumb-transform-from: 0 0;--_scrollbar-thumb-transform-to: 0 calc(var(--_scrollbar-y-thumb-transform-to-value) * 1px)}.ng-scrollbar-track-wrapper[_ngcontent-%COMP%]{width:var(--_track-y-thickness);flex-direction:column}.ng-scrollbar-hover[_ngcontent-%COMP%]:hover{--_track-y-thickness: var(--_scrollbar-hover-thickness-px);--_thumb-y-color: var(--INTERNAL-scrollbar-thumb-hover-color)}.ng-scrollbar-thumb[_ngcontent-%COMP%]{animation-timeline:var(--_animation-timeline-y);min-height:calc(var(--INTERNAL-scrollbar-thumb-min-size) * 1px);display:var(--_vertical-thumb-display);background-color:var(--_thumb-y-color)}"],
  changeDetection: 0
});
var ScrollbarY = _ScrollbarY;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarY, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "scrollbar-y",
      template: `
    <div class="ng-scrollbar-sticky"
         [class.ng-scrollbar-hover]="cmp.hoverOffset()">
      <div class="ng-scrollbar-track-wrapper"
           [class.ng-scrollbar-hover]="!cmp.hoverOffset()">
        <div scrollbarTrackY class="ng-scrollbar-track {{ cmp.trackClass }}">
          <div scrollbarThumbY class="ng-scrollbar-thumb {{ cmp.thumbClass }}"></div>
        </div>
        @if (cmp.buttons()) {
          <button class="ng-scrollbar-button {{ cmp.buttonClass }}"
                  scrollbarButton="top"
                  scrollDirection="backward"></button>
          <button class="ng-scrollbar-button {{ cmp.buttonClass }}"
                  scrollbarButton="bottom"
                  scrollDirection="forward"></button>
        }
      </div>
    </div>
  `,
      imports: [TrackYDirective, ThumbYDirective, ScrollbarButton],
      providers: [{
        provide: SCROLLBAR_CONTROL,
        useExisting: ScrollbarY
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [":host{position:absolute;inset:0;pointer-events:none;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}.ng-scrollbar-sticky{top:calc(var(--_scrollbar-wrapper-top) * 1px);left:calc(var(--_scrollbar-wrapper-left) * 1px);right:calc(var(--_scrollbar-wrapper-right) * 1px);height:calc(var(--_scrollbar-wrapper-height) * 1px);width:calc(var(--_scrollbar-wrapper-width) * 1px);position:sticky;z-index:100;opacity:var(--_scrollbar-hover-opacity);transition:var(--_scrollbar-opacity-transition);pointer-events:var(--_scrollbar-pointer-events)}.ng-scrollbar-track-wrapper{touch-action:none;-webkit-user-select:none;user-select:none;top:var(--_scrollbar-track-top);bottom:var(--_scrollbar-track-bottom);right:var(--_scrollbar-track-right);left:var(--_scrollbar-track-left);transition:var(--INTERNAL-scrollbar-track-wrapper-transition);position:absolute;overflow:hidden;display:flex;place-items:center}.ng-scrollbar-track{position:relative;width:100%;height:100%;background-color:var(--INTERNAL-scrollbar-track-color);border-radius:var(--INTERNAL-scrollbar-border-radius);cursor:default;z-index:1;order:2}.ng-scrollbar-thumb{box-sizing:border-box;position:absolute;transition:var(--INTERNAL-scrollbar-thumb-transition);border-radius:var(--INTERNAL-scrollbar-border-radius);height:var(--_thumb-height);width:var(--_thumb-width);animation-name:scrollbarThumbAnimation;animation-duration:1ms;animation-timing-function:linear}@keyframes scrollbarThumbAnimation{0%{translate:var(--_scrollbar-thumb-transform-from)}to{translate:var(--_scrollbar-thumb-transform-to)}}\n", ":host{--_scrollbar-wrapper-top: 0;--_scrollbar-wrapper-left: var(--_scrollbar-wrapper-y-left);--_scrollbar-wrapper-right: var(--_scrollbar-wrapper-y-right);--_scrollbar-wrapper-height: var(--viewport-height);--_scrollbar-wrapper-width: var(--_scrollbar-thickness);--_scrollbar-track-top: var(--_vertical-top);--_scrollbar-track-bottom: var(--_vertical-bottom);--_scrollbar-track-right: var(--_vertical-right);--_scrollbar-track-left: var(--_vertical-left);--_thumb-height: calc(var(--thumb-y-length) * 1px);--_thumb-width: 100%;--_scrollbar-thumb-transform-from: 0 0;--_scrollbar-thumb-transform-to: 0 calc(var(--_scrollbar-y-thumb-transform-to-value) * 1px)}.ng-scrollbar-track-wrapper{width:var(--_track-y-thickness);flex-direction:column}.ng-scrollbar-hover:hover{--_track-y-thickness: var(--_scrollbar-hover-thickness-px);--_thumb-y-color: var(--INTERNAL-scrollbar-thumb-hover-color)}.ng-scrollbar-thumb{animation-timeline:var(--_animation-timeline-y);min-height:calc(var(--INTERNAL-scrollbar-thumb-min-size) * 1px);display:var(--_vertical-thumb-display);background-color:var(--_thumb-y-color)}\n"]
    }]
  }], null, null);
})();
var _ScrollbarX = class _ScrollbarX extends ScrollbarAdapter {
  get viewportScrollMax() {
    return this.cmp.viewport.scrollMaxX;
  }
  get viewportScrollOffset() {
    return Math.abs(this.cmp.viewport.scrollLeft);
  }
  constructor() {
    effect(() => {
      if (this.cmp.direction() === "rtl") {
        this.handlePosition = (position, scrollMax) => -(scrollMax - position);
      } else {
        this.handlePosition = (position) => position;
      }
    });
    super();
    this.manager = inject(ScrollbarManager);
    this.clientRectProperty = "left";
    this.sizeProperty = "offsetWidth";
    this.clientProperty = "clientX";
    this.offsetProperty = "offsetX";
    this.axis = "x";
  }
  scrollTo(left, duration) {
    return fromPromise(this.cmp.scrollTo({
      left,
      duration
    }));
  }
  instantScrollTo(value, scrollMax) {
    this.cmp.viewport.scrollXTo(this.handlePosition(value, scrollMax));
  }
};
_ScrollbarX.ɵfac = function ScrollbarX_Factory(t) {
  return new (t || _ScrollbarX)();
};
_ScrollbarX.ɵcmp = ɵɵdefineComponent({
  type: _ScrollbarX,
  selectors: [["scrollbar-x"]],
  hostVars: 1,
  hostBindings: function ScrollbarX_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.cmp.direction());
    }
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: SCROLLBAR_CONTROL,
    useExisting: _ScrollbarX
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 5,
  vars: 11,
  consts: [[1, "ng-scrollbar-sticky"], [1, "ng-scrollbar-track-wrapper"], ["scrollbarTrackX", ""], ["scrollbarThumbX", ""], ["scrollbarButton", "start", "scrollDirection", "backward"], ["scrollbarButton", "end", "scrollDirection", "forward"]],
  template: function ScrollbarX_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      ɵɵelement(3, "div", 3);
      ɵɵelementEnd();
      ɵɵtemplate(4, ScrollbarX_Conditional_4_Template, 2, 6);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵclassProp("ng-scrollbar-hover", ctx.cmp.hoverOffset());
      ɵɵadvance();
      ɵɵclassProp("ng-scrollbar-hover", !ctx.cmp.hoverOffset());
      ɵɵadvance();
      ɵɵclassMapInterpolate1("ng-scrollbar-track ", ctx.cmp.trackClass, "");
      ɵɵadvance();
      ɵɵclassMapInterpolate1("ng-scrollbar-thumb ", ctx.cmp.thumbClass, "");
      ɵɵadvance();
      ɵɵconditional(ctx.cmp.buttons() ? 4 : -1);
    }
  },
  dependencies: [TrackXDirective, ThumbXDirective, ScrollbarButton],
  styles: [_c1, "[_nghost-%COMP%]{--_scrollbar-wrapper-top: var(--_scrollbar-wrapper-x-top);--_scrollbar-wrapper-left: 0;--_scrollbar-wrapper-right: 0;--_scrollbar-wrapper-height: var(--_scrollbar-thickness);--_scrollbar-wrapper-width: var(--viewport-width);--_scrollbar-track-top: var(--_horizontal-top);--_scrollbar-track-bottom: var(--_horizontal-bottom);--_scrollbar-track-right: var(--_horizontal-right);--_scrollbar-track-left: var(--_horizontal-left);--_thumb-height: 100%;--_thumb-width: calc(var(--thumb-x-length) * 1px);--_scrollbar-thumb-transform-from: 0;--_scrollbar-thumb-transform-to: calc(var(--_scrollbar-x-thumb-transform-to-value) * 1px)}[_nghost-%COMP%]   .ng-scrollbar-button[scrollbarButton=start][_ngcontent-%COMP%]{_--button-rotate:90}[_nghost-%COMP%]   .ng-scrollbar-button[scrollbarButton=end][_ngcontent-%COMP%]{_--button-rotate:-90}[dir=rtl][_nghost-%COMP%]   .ng-scrollbar-thumb[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_scrollbarThumbRTLAnimation;will-change:right;--_scrollbar-thumb-transform-to: calc(var(--_scrollbar-x-thumb-transform-to-value) * -1px)}[dir=rtl][_nghost-%COMP%]   .ng-scrollbar-button[scrollbarButton=start][_ngcontent-%COMP%]{--_button-rotate: 90deg}[dir=rtl][_nghost-%COMP%]   .ng-scrollbar-button[scrollbarButton=end][_ngcontent-%COMP%]{--_button-rotate: -90deg}.ng-scrollbar-track-wrapper[_ngcontent-%COMP%]{height:var(--_track-x-thickness);flex-direction:row}.ng-scrollbar-hover[_ngcontent-%COMP%]:hover{--_track-x-thickness: var(--_scrollbar-hover-thickness-px);--_thumb-x-color: var(--INTERNAL-scrollbar-thumb-hover-color)}.ng-scrollbar-thumb[_ngcontent-%COMP%]{animation-timeline:var(--_animation-timeline-x);min-width:calc(var(--INTERNAL-scrollbar-thumb-min-size) * 1px);display:var(--_horizontal-thumb-display);background-color:var(--_thumb-x-color)}@keyframes _ngcontent-%COMP%_scrollbarThumbRTLAnimation{0%{right:var(--_scrollbar-thumb-transform-from)}to{right:calc(var(--_scrollbar-thumb-transform-to) * -1)}}"],
  changeDetection: 0
});
var ScrollbarX = _ScrollbarX;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarX, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "scrollbar-x",
      host: {
        "[attr.dir]": "cmp.direction()"
      },
      template: `
    <div class="ng-scrollbar-sticky"
         [class.ng-scrollbar-hover]="cmp.hoverOffset()">
      <div class="ng-scrollbar-track-wrapper"
           [class.ng-scrollbar-hover]="!cmp.hoverOffset()">
        <div scrollbarTrackX class="ng-scrollbar-track {{ cmp.trackClass }}">
          <div scrollbarThumbX class="ng-scrollbar-thumb {{ cmp.thumbClass }}"></div>
        </div>
        @if (cmp.buttons()) {
          <button class="ng-scrollbar-button {{ cmp.buttonClass }}"
                  scrollbarButton="start"
                  scrollDirection="backward"></button>
          <button class="ng-scrollbar-button {{ cmp.buttonClass }}"
                  scrollbarButton="end"
                  scrollDirection="forward"></button>
        }
      </div>
    </div>
  `,
      imports: [TrackXDirective, ThumbXDirective, ScrollbarButton],
      providers: [{
        provide: SCROLLBAR_CONTROL,
        useExisting: ScrollbarX
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [":host{position:absolute;inset:0;pointer-events:none;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}.ng-scrollbar-sticky{top:calc(var(--_scrollbar-wrapper-top) * 1px);left:calc(var(--_scrollbar-wrapper-left) * 1px);right:calc(var(--_scrollbar-wrapper-right) * 1px);height:calc(var(--_scrollbar-wrapper-height) * 1px);width:calc(var(--_scrollbar-wrapper-width) * 1px);position:sticky;z-index:100;opacity:var(--_scrollbar-hover-opacity);transition:var(--_scrollbar-opacity-transition);pointer-events:var(--_scrollbar-pointer-events)}.ng-scrollbar-track-wrapper{touch-action:none;-webkit-user-select:none;user-select:none;top:var(--_scrollbar-track-top);bottom:var(--_scrollbar-track-bottom);right:var(--_scrollbar-track-right);left:var(--_scrollbar-track-left);transition:var(--INTERNAL-scrollbar-track-wrapper-transition);position:absolute;overflow:hidden;display:flex;place-items:center}.ng-scrollbar-track{position:relative;width:100%;height:100%;background-color:var(--INTERNAL-scrollbar-track-color);border-radius:var(--INTERNAL-scrollbar-border-radius);cursor:default;z-index:1;order:2}.ng-scrollbar-thumb{box-sizing:border-box;position:absolute;transition:var(--INTERNAL-scrollbar-thumb-transition);border-radius:var(--INTERNAL-scrollbar-border-radius);height:var(--_thumb-height);width:var(--_thumb-width);animation-name:scrollbarThumbAnimation;animation-duration:1ms;animation-timing-function:linear}@keyframes scrollbarThumbAnimation{0%{translate:var(--_scrollbar-thumb-transform-from)}to{translate:var(--_scrollbar-thumb-transform-to)}}\n", ":host{--_scrollbar-wrapper-top: var(--_scrollbar-wrapper-x-top);--_scrollbar-wrapper-left: 0;--_scrollbar-wrapper-right: 0;--_scrollbar-wrapper-height: var(--_scrollbar-thickness);--_scrollbar-wrapper-width: var(--viewport-width);--_scrollbar-track-top: var(--_horizontal-top);--_scrollbar-track-bottom: var(--_horizontal-bottom);--_scrollbar-track-right: var(--_horizontal-right);--_scrollbar-track-left: var(--_horizontal-left);--_thumb-height: 100%;--_thumb-width: calc(var(--thumb-x-length) * 1px);--_scrollbar-thumb-transform-from: 0;--_scrollbar-thumb-transform-to: calc(var(--_scrollbar-x-thumb-transform-to-value) * 1px)}:host .ng-scrollbar-button[scrollbarButton=start]{_--button-rotate:90}:host .ng-scrollbar-button[scrollbarButton=end]{_--button-rotate:-90}:host[dir=rtl] .ng-scrollbar-thumb{animation-name:scrollbarThumbRTLAnimation;will-change:right;--_scrollbar-thumb-transform-to: calc(var(--_scrollbar-x-thumb-transform-to-value) * -1px)}:host[dir=rtl] .ng-scrollbar-button[scrollbarButton=start]{--_button-rotate: 90deg}:host[dir=rtl] .ng-scrollbar-button[scrollbarButton=end]{--_button-rotate: -90deg}.ng-scrollbar-track-wrapper{height:var(--_track-x-thickness);flex-direction:row}.ng-scrollbar-hover:hover{--_track-x-thickness: var(--_scrollbar-hover-thickness-px);--_thumb-x-color: var(--INTERNAL-scrollbar-thumb-hover-color)}.ng-scrollbar-thumb{animation-timeline:var(--_animation-timeline-x);min-width:calc(var(--INTERNAL-scrollbar-thumb-min-size) * 1px);display:var(--_horizontal-thumb-display);background-color:var(--_thumb-x-color)}@keyframes scrollbarThumbRTLAnimation{0%{right:var(--_scrollbar-thumb-transform-from)}to{right:calc(var(--_scrollbar-thumb-transform-to) * -1)}}\n"]
    }]
  }], () => [], null);
})();
var _Scrollbars = class _Scrollbars {
  constructor() {
    this.cmp = inject(NG_SCROLLBAR);
  }
};
_Scrollbars.ɵfac = function Scrollbars_Factory(t) {
  return new (t || _Scrollbars)();
};
_Scrollbars.ɵcmp = ɵɵdefineComponent({
  type: _Scrollbars,
  selectors: [["scrollbars"]],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 2,
  vars: 2,
  template: function Scrollbars_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, Scrollbars_Conditional_0_Template, 1, 0, "scrollbar-y")(1, Scrollbars_Conditional_1_Template, 1, 0, "scrollbar-x");
    }
    if (rf & 2) {
      ɵɵconditional(ctx.cmp.verticalUsed() ? 0 : -1);
      ɵɵadvance();
      ɵɵconditional(ctx.cmp.horizontalUsed() ? 1 : -1);
    }
  },
  dependencies: [ScrollbarX, ScrollbarY],
  styles: ["[_nghost-%COMP%]{display:contents}"],
  changeDetection: 0
});
var Scrollbars = _Scrollbars;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Scrollbars, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "scrollbars",
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [ScrollbarX, ScrollbarY],
      template: `
    @if (cmp.verticalUsed()) {
      <scrollbar-y/>
    }
    @if (cmp.horizontalUsed()) {
      <scrollbar-x/>
    }
  `,
      styles: [":host{display:contents}\n"]
    }]
  }], null, null);
})();
var _NgScrollbar = class _NgScrollbar extends NgScrollbarCore {
  ngOnInit() {
    this.viewport.init(this.nativeElement, this.contentWrapper.nativeElement);
    super.ngOnInit();
  }
};
_NgScrollbar.ɵfac = /* @__PURE__ */ (() => {
  let ɵNgScrollbar_BaseFactory;
  return function NgScrollbar_Factory(t) {
    return (ɵNgScrollbar_BaseFactory || (ɵNgScrollbar_BaseFactory = ɵɵgetInheritedFactory(_NgScrollbar)))(t || _NgScrollbar);
  };
})();
_NgScrollbar.ɵcmp = ɵɵdefineComponent({
  type: _NgScrollbar,
  selectors: [["ng-scrollbar", 3, "externalViewport", ""]],
  viewQuery: function NgScrollbar_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c2, 7);
      ɵɵviewQuery(Scrollbars, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentWrapper = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._scrollbars = _t.first);
    }
  },
  exportAs: ["ngScrollbar"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NG_SCROLLBAR,
    useExisting: _NgScrollbar
  }]), ɵɵHostDirectivesFeature([ScrollViewport]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c3,
  decls: 4,
  vars: 0,
  consts: [["contentWrapper", ""]],
  template: function NgScrollbar_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", null, 0);
      ɵɵprojection(2);
      ɵɵelement(3, "scrollbars");
      ɵɵelementEnd();
    }
  },
  dependencies: [Scrollbars],
  styles: ["[_nghost-%COMP%]{display:block;position:relative;max-height:100%;max-width:100%;--INTERNAL-scrollbar-border-radius: var(--scrollbar-border-radius, 0px);--INTERNAL-scrollbar-thickness: var(--scrollbar-thickness, 5);--INTERNAL-scrollbar-offset: var(--scrollbar-offset, 0);--INTERNAL-scrollbar-track-wrapper-transition: var(--scrollbar-track-wrapper-transition, width 60ms linear, height 60ms linear);--INTERNAL-scrollbar-track-color: var(--scrollbar-track-color, transparent);--INTERNAL-scrollbar-thumb-color: var(--scrollbar-thumb-color, rgb(0 0 0 / 20%));--INTERNAL-scrollbar-thumb-hover-color: var(--scrollbar-thumb-hover-color, var(--INTERNAL-scrollbar-thumb-color));--INTERNAL-scrollbar-hover-thickness: var(--scrollbar-hover-thickness, var(--INTERNAL-scrollbar-thickness));--INTERNAL-scrollbar-thumb-transition: var(--scrollbar-thumb-transition, none);--INTERNAL-scrollbar-thumb-min-size: var(--scrollbar-thumb-min-size, 20);--INTERNAL-scrollbar-button-color: var(--scrollbar-button-color, var(--INTERNAL-scrollbar-thumb-color));--INTERNAL-scrollbar-button-hover-color: var(--scrollbar-button-hover-color, var(--INTERNAL-scrollbar-button-color));--INTERNAL-scrollbar-button-active-color: var(--scrollbar-button-active-color, var(--INTERNAL-scrollbar-button-hover-color));--INTERNAL-scrollbar-button-fill: var(--scrollbar-button-fill, white);--INTERNAL-scrollbar-button-hover-fill: var(--scrollbar-button-hover-fill, var(--INTERNAL-scrollbar-button-fill));--INTERNAL-scrollbar-button-active-fill: var(--scrollbar-button-active-fill, var(--INTERNAL-scrollbar-button-hover-fill));--INTERNAL-scrollbar-hover-opacity-transition-enter-duration: var(--scrollbar-hover-opacity-transition-enter-duration, 0);--INTERNAL-scrollbar-hover-opacity-transition-leave-duration: var(--scrollbar-hover-opacity-transition-leave-duration, .4s);--INTERNAL-scrollbar-hover-opacity-transition-leave-delay: var(--scrollbar-hover-opacity-transition-leave-delay, 1s);--INTERNAL-scrollbar-overscroll-behavior: var(--scrollbar-overscroll-behavior, initial);--INTERNAL-scrollbar-mobile-overscroll-behavior: var(--scrollbar-mobile-overscroll-behavior, none);--_scrollbar-thickness: calc(var(--INTERNAL-scrollbar-thickness) + var(--INTERNAL-scrollbar-offset) * 2);--_scrollbar-pointer-events: auto;--_scrollbar-offset-px: calc(var(--INTERNAL-scrollbar-offset) * 1px);--_scrollbar-thickness-px: calc(var(--INTERNAL-scrollbar-thickness) * 1px);--_scrollbar-hover-thickness-px: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_viewport-padding-top: 0;--_viewport-padding-bottom: 0;--_viewport-padding-left: 0;--_viewport-padding-right: 0;--_horizontal-thumb-display: block;--_vertical-thumb-display: block;--_viewport-overflow: auto;--_thumb-x-color: var(--INTERNAL-scrollbar-thumb-color);--_thumb-y-color: var(--INTERNAL-scrollbar-thumb-color);--_track-y-thickness: var(--_scrollbar-thickness-px);--_track-x-thickness: var(--_scrollbar-thickness-px);--_viewport-overscroll-behavior: var(--INTERNAL-scrollbar-overscroll-behavior);--_scrollbar-content-width: fit-content}[_nghost-%COMP%]{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-offset-px);--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-offset-px);--_horizontal-top: initial;--_horizontal-bottom: var(--_scrollbar-offset-px);--_scrollbar-wrapper-x-top: calc(var(--viewport-height) - var(--_scrollbar-thickness));--reached-offset: 1px;--reached-offset-top: var(--reached-offset);--reached-offset-bottom: var(--reached-offset);--reached-offset-start: var(--reached-offset);--reached-offset-end: var(--reached-offset);--dropped-offset: 1px;--dropped-offset-top: var(--dropped-offset);--dropped-offset-bottom: var(--dropped-offset);--dropped-offset-start: var(--dropped-offset);--dropped-offset-end: var(--dropped-offset);--_viewport_scroll-timeline: unset;--_animation-timeline-y: unset;--_scrollbar-y-thumb-transform-to-value: unset;--_scrollbar-x-thumb-transform-to-value: unset;--_scrollbar-thumb-transform-from: unset;--_scrollbar-thumb-transform-to: unset}.ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport{min-height:100%;min-width:100%;height:100%;max-height:100%;max-width:100%}.ng-scroll-viewport[_nghost-%COMP%], .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport{position:relative;overflow:var(--_viewport-overflow);scroll-timeline:var(--_viewport_scroll-timeline);box-sizing:border-box!important;-webkit-overflow-scrolling:touch;will-change:scroll-position;-webkit-user-select:var(--_viewport-user-select);user-select:var(--_viewport-user-select);overscroll-behavior:var(--_viewport-overscroll-behavior)}.ng-scroll-viewport[_nghost-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport>.ng-scroll-content{width:var(--_scrollbar-content-width);z-index:1;min-width:100%;min-height:100%;contain:content;padding:var(--_viewport-padding-top, 0) var(--_viewport-padding-right, 0) var(--_viewport-padding-bottom, 0) var(--_viewport-padding-left, 0)}.ng-scroll-viewport[_nghost-%COMP%], .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport{scrollbar-width:none!important}.ng-scroll-viewport[_nghost-%COMP%]::-webkit-scrollbar, .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport::-webkit-scrollbar{display:none!important}[position=invertX][_nghost-%COMP%], [position=invertAll][_nghost-%COMP%]{--_horizontal-top: var(--_scrollbar-offset-px);--_horizontal-bottom: initial;--_scrollbar-wrapper-x-top: 0}[dir=ltr][_nghost-%COMP%]{--_scrollbar-wrapper-y-right: initial;--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-left: calc(var(--viewport-width) - var(--_scrollbar-thickness))}[dir=ltr][position=invertY][_nghost-%COMP%], [dir=ltr][position=invertAll][_nghost-%COMP%]{--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-left: 0}[dir=rtl][_nghost-%COMP%]{--_scrollbar-wrapper-y-left: initial;--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-right: calc(var(--viewport-width) - var(--_scrollbar-thickness))}[dir=rtl][position=invertY][_nghost-%COMP%], [dir=rtl][position=invertAll][_nghost-%COMP%]{--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-right: 0}[verticalUsed=true][horizontalUsed=true][_nghost-%COMP%]{--_scrollbar-thickness-margin: calc(var(--INTERNAL-scrollbar-thickness) + var(--INTERNAL-scrollbar-offset) * 3);--_scrollbar-thickness-margin-px: calc(var(--_scrollbar-thickness-margin) * 1px)}[horizontalUsed=true][_nghost-%COMP%]{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-thickness-margin-px)}[horizontalUsed=true][position=invertX][_nghost-%COMP%], [horizontalUsed=true][position=invertAll][_nghost-%COMP%]{--_vertical-top: var(--_scrollbar-thickness-margin-px);--_vertical-bottom: var(--_scrollbar-offset-px)}[verticalUsed=true][dir=ltr][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}[verticalUsed=true][dir=rtl][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}[verticalUsed=true][position=invertY][dir=ltr][_nghost-%COMP%], [verticalUsed=true][position=invertAll][dir=ltr][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}[verticalUsed=true][position=invertY][dir=rtl][_nghost-%COMP%], [verticalUsed=true][position=invertAll][dir=rtl][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}[appearance=native][verticalUsed=true][dir=ltr][_nghost-%COMP%]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}[appearance=native][verticalUsed=true][dir=rtl][_nghost-%COMP%]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}[appearance=native][verticalUsed=true][position=invertY][dir=ltr][_nghost-%COMP%], [appearance=native][verticalUsed=true][position=invertAll][dir=ltr][_nghost-%COMP%]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}[appearance=native][verticalUsed=true][position=invertY][dir=rtl][_nghost-%COMP%], [appearance=native][verticalUsed=true][position=invertAll][dir=rtl][_nghost-%COMP%]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}[appearance=native][horizontalUsed=true][_nghost-%COMP%]{--_viewport-padding-top: 0;--_viewport-padding-bottom: calc(var(--_scrollbar-thickness) * 1px)}[appearance=native][horizontalUsed=true][position=invertX][_nghost-%COMP%], [appearance=native][horizontalUsed=true][position=invertAll][_nghost-%COMP%]{--_viewport-padding-top: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-bottom: 0}[visibility=hover][_nghost-%COMP%]{--_scrollbar-hover-opacity: 0;--_scrollbar-opacity-transition: opacity var(--INTERNAL-scrollbar-hover-opacity-transition-leave-duration) var(--INTERNAL-scrollbar-hover-opacity-transition-leave-delay)}[visibility=hover][_nghost-%COMP%]:hover, [visibility=hover][_nghost-%COMP%]:active, [visibility=hover][_nghost-%COMP%]:focus{--_scrollbar-hover-opacity: 1;--_scrollbar-opacity-transition: opacity var(--INTERNAL-scrollbar-hover-opacity-transition-enter-duration)}[dir=ltr][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start], [dir=ltr][_nghost-%COMP%]     .scroll-dropped-trigger-element[trigger=start]{left:0;right:unset}[dir=ltr][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end], [dir=ltr][_nghost-%COMP%]     .scroll-dropped-trigger-element[trigger=end]{right:0;left:unset}[dir=rtl][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start], [dir=rtl][_nghost-%COMP%]     .scroll-dropped-trigger-element[trigger=start]{right:0;left:unset}[dir=rtl][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end], [dir=rtl][_nghost-%COMP%]     .scroll-dropped-trigger-element[trigger=end]{left:0;right:unset}[_nghost-%COMP%]     .ng-scroll-reached-wrapper, [_nghost-%COMP%]     .ng-scroll-dropped-wrapper, [_nghost-%COMP%]     .scroll-reached-trigger-element, [_nghost-%COMP%]     .scroll-dropped-trigger-element{position:absolute;-webkit-user-select:none;user-select:none;pointer-events:none;z-index:-9999}[_nghost-%COMP%]     .ng-scroll-reached-wrapper, [_nghost-%COMP%]     .ng-scroll-dropped-wrapper{visibility:hidden;inset:0;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}[_nghost-%COMP%]     [isHorizontallyScrollable=false] .scroll-reached-trigger-element[trigger=end], [_nghost-%COMP%]     [isHorizontallyScrollable=false] .scroll-dropped-trigger-element[trigger=end]{display:none}[_nghost-%COMP%]     [isVerticallyScrollable=false] .scroll-reached-trigger-element[trigger=bottom], [_nghost-%COMP%]     [isVerticallyScrollable=false] .scroll-dropped-trigger-element[trigger=bottom]{display:none}[_nghost-%COMP%]     .scroll-reached-trigger-element{background:red}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=top], [_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=bottom]{left:0;right:0}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start], [_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end]{top:0;bottom:0}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=top]{top:0;height:var(--reached-offset-top)}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=bottom]{bottom:0;height:var(--reached-offset-bottom)}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start]{width:var(--reached-offset-start)}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end]{width:var(--reached-offset-end)}[_nghost-%COMP%]   .scroll-dropped-trigger-element[_ngcontent-%COMP%]{background:#00f}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=top][_ngcontent-%COMP%], [_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=bottom][_ngcontent-%COMP%]{left:0;right:0}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=start][_ngcontent-%COMP%], [_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=end][_ngcontent-%COMP%]{top:0;bottom:0}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=top][_ngcontent-%COMP%]{top:0;height:var(--dropped-offset-top)}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=bottom][_ngcontent-%COMP%]{bottom:0;height:var(--dropped-offset-bottom)}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=start][_ngcontent-%COMP%]{width:var(--dropped-offset-start)}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=end][_ngcontent-%COMP%]{width:var(--dropped-offset-end)}[verticalUsed=true][_nghost-%COMP%]{--_timeline-scope: --scrollerY;--_animation-timeline-y: --scrollerY;--_viewport_scroll-timeline: --scrollerY y;--_scrollbar-y-thumb-transform-to-value: calc(var(--track-y-length) - var(--thumb-y-length))}[horizontalUsed=true][_nghost-%COMP%]{--_timeline-scope: --scrollerX;--_animation-timeline-x: --scrollerX;--_viewport_scroll-timeline: --scrollerX x;--_scrollbar-x-thumb-transform-to-value: calc(var(--track-x-length) - var(--thumb-x-length))}[verticalUsed=true][horizontalUsed=true][_nghost-%COMP%]{--_timeline-scope: --scrollerX, --scrollerY;--_viewport_scroll-timeline: --scrollerX x, --scrollerY y}[orientation=vertical][_nghost-%COMP%]{--_viewport-overflow: hidden auto;--_scrollbar-content-width: unset}[orientation=horizontal][_nghost-%COMP%]{--_viewport-overflow: auto hidden}[disableInteraction=true][_nghost-%COMP%]{--_scrollbar-pointer-events: none}[isVerticallyScrollable=false][_nghost-%COMP%]{--_vertical-thumb-display: none}[isHorizontallyScrollable=false][_nghost-%COMP%]{--_horizontal-thumb-display: none}[dragging=x][_nghost-%COMP%], [dragging=y][_nghost-%COMP%]{--_viewport-user-select: none}[horizontalUsed=true][_nghost-%COMP%]{--thumb-x-length: max(calc(var(--viewport-width) * var(--track-x-length) / var(--content-width)), var(--INTERNAL-scrollbar-thumb-min-size))}[verticalUsed=true][_nghost-%COMP%]{--thumb-y-length: max(calc(var(--viewport-height) * var(--track-y-length) / var(--content-height)), var(--INTERNAL-scrollbar-thumb-min-size))}[dragging=x][_nghost-%COMP%]{--_track-x-thickness: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_thumb-x-color: var(var(--INTERNAL-scrollbar-thumb-min-size))}[dragging=y][_nghost-%COMP%]{--_track-y-thickness: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_thumb-y-color: var(var(--INTERNAL-scrollbar-thumb-min-size))}[mobile=true][_nghost-%COMP%]{--_viewport-overscroll-behavior: var(--INTERNAL-scrollbar-mobile-overscroll-behavior)}"],
  changeDetection: 0
});
var NgScrollbar = _NgScrollbar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgScrollbar, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "ng-scrollbar:not([externalViewport])",
      exportAs: "ngScrollbar",
      imports: [Scrollbars],
      hostDirectives: [ScrollViewport],
      template: `
    <div #contentWrapper>
      <ng-content/>
      <scrollbars/>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: NG_SCROLLBAR,
        useExisting: NgScrollbar
      }],
      styles: [":host{display:block;position:relative;max-height:100%;max-width:100%;--INTERNAL-scrollbar-border-radius: var(--scrollbar-border-radius, 0px);--INTERNAL-scrollbar-thickness: var(--scrollbar-thickness, 5);--INTERNAL-scrollbar-offset: var(--scrollbar-offset, 0);--INTERNAL-scrollbar-track-wrapper-transition: var(--scrollbar-track-wrapper-transition, width 60ms linear, height 60ms linear);--INTERNAL-scrollbar-track-color: var(--scrollbar-track-color, transparent);--INTERNAL-scrollbar-thumb-color: var(--scrollbar-thumb-color, rgb(0 0 0 / 20%));--INTERNAL-scrollbar-thumb-hover-color: var(--scrollbar-thumb-hover-color, var(--INTERNAL-scrollbar-thumb-color));--INTERNAL-scrollbar-hover-thickness: var(--scrollbar-hover-thickness, var(--INTERNAL-scrollbar-thickness));--INTERNAL-scrollbar-thumb-transition: var(--scrollbar-thumb-transition, none);--INTERNAL-scrollbar-thumb-min-size: var(--scrollbar-thumb-min-size, 20);--INTERNAL-scrollbar-button-color: var(--scrollbar-button-color, var(--INTERNAL-scrollbar-thumb-color));--INTERNAL-scrollbar-button-hover-color: var(--scrollbar-button-hover-color, var(--INTERNAL-scrollbar-button-color));--INTERNAL-scrollbar-button-active-color: var(--scrollbar-button-active-color, var(--INTERNAL-scrollbar-button-hover-color));--INTERNAL-scrollbar-button-fill: var(--scrollbar-button-fill, white);--INTERNAL-scrollbar-button-hover-fill: var(--scrollbar-button-hover-fill, var(--INTERNAL-scrollbar-button-fill));--INTERNAL-scrollbar-button-active-fill: var(--scrollbar-button-active-fill, var(--INTERNAL-scrollbar-button-hover-fill));--INTERNAL-scrollbar-hover-opacity-transition-enter-duration: var(--scrollbar-hover-opacity-transition-enter-duration, 0);--INTERNAL-scrollbar-hover-opacity-transition-leave-duration: var(--scrollbar-hover-opacity-transition-leave-duration, .4s);--INTERNAL-scrollbar-hover-opacity-transition-leave-delay: var(--scrollbar-hover-opacity-transition-leave-delay, 1s);--INTERNAL-scrollbar-overscroll-behavior: var(--scrollbar-overscroll-behavior, initial);--INTERNAL-scrollbar-mobile-overscroll-behavior: var(--scrollbar-mobile-overscroll-behavior, none);--_scrollbar-thickness: calc(var(--INTERNAL-scrollbar-thickness) + var(--INTERNAL-scrollbar-offset) * 2);--_scrollbar-pointer-events: auto;--_scrollbar-offset-px: calc(var(--INTERNAL-scrollbar-offset) * 1px);--_scrollbar-thickness-px: calc(var(--INTERNAL-scrollbar-thickness) * 1px);--_scrollbar-hover-thickness-px: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_viewport-padding-top: 0;--_viewport-padding-bottom: 0;--_viewport-padding-left: 0;--_viewport-padding-right: 0;--_horizontal-thumb-display: block;--_vertical-thumb-display: block;--_viewport-overflow: auto;--_thumb-x-color: var(--INTERNAL-scrollbar-thumb-color);--_thumb-y-color: var(--INTERNAL-scrollbar-thumb-color);--_track-y-thickness: var(--_scrollbar-thickness-px);--_track-x-thickness: var(--_scrollbar-thickness-px);--_viewport-overscroll-behavior: var(--INTERNAL-scrollbar-overscroll-behavior);--_scrollbar-content-width: fit-content}:host{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-offset-px);--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-offset-px);--_horizontal-top: initial;--_horizontal-bottom: var(--_scrollbar-offset-px);--_scrollbar-wrapper-x-top: calc(var(--viewport-height) - var(--_scrollbar-thickness));--reached-offset: 1px;--reached-offset-top: var(--reached-offset);--reached-offset-bottom: var(--reached-offset);--reached-offset-start: var(--reached-offset);--reached-offset-end: var(--reached-offset);--dropped-offset: 1px;--dropped-offset-top: var(--dropped-offset);--dropped-offset-bottom: var(--dropped-offset);--dropped-offset-start: var(--dropped-offset);--dropped-offset-end: var(--dropped-offset);--_viewport_scroll-timeline: unset;--_animation-timeline-y: unset;--_scrollbar-y-thumb-transform-to-value: unset;--_scrollbar-x-thumb-transform-to-value: unset;--_scrollbar-thumb-transform-from: unset;--_scrollbar-thumb-transform-to: unset}:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{min-height:100%;min-width:100%;height:100%;max-height:100%;max-width:100%}:host.ng-scroll-viewport,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{position:relative;overflow:var(--_viewport-overflow);scroll-timeline:var(--_viewport_scroll-timeline);box-sizing:border-box!important;-webkit-overflow-scrolling:touch;will-change:scroll-position;-webkit-user-select:var(--_viewport-user-select);user-select:var(--_viewport-user-select);overscroll-behavior:var(--_viewport-overscroll-behavior)}:host.ng-scroll-viewport>.ng-scroll-content,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport>.ng-scroll-content{width:var(--_scrollbar-content-width);z-index:1;min-width:100%;min-height:100%;contain:content;padding:var(--_viewport-padding-top, 0) var(--_viewport-padding-right, 0) var(--_viewport-padding-bottom, 0) var(--_viewport-padding-left, 0)}:host.ng-scroll-viewport,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{scrollbar-width:none!important}:host.ng-scroll-viewport::-webkit-scrollbar,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport::-webkit-scrollbar{display:none!important}:host[position=invertX],:host[position=invertAll]{--_horizontal-top: var(--_scrollbar-offset-px);--_horizontal-bottom: initial;--_scrollbar-wrapper-x-top: 0}:host[dir=ltr]{--_scrollbar-wrapper-y-right: initial;--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-left: calc(var(--viewport-width) - var(--_scrollbar-thickness))}:host[dir=ltr][position=invertY],:host[dir=ltr][position=invertAll]{--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-left: 0}:host[dir=rtl]{--_scrollbar-wrapper-y-left: initial;--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-right: calc(var(--viewport-width) - var(--_scrollbar-thickness))}:host[dir=rtl][position=invertY],:host[dir=rtl][position=invertAll]{--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-right: 0}:host[verticalUsed=true][horizontalUsed=true]{--_scrollbar-thickness-margin: calc(var(--INTERNAL-scrollbar-thickness) + var(--INTERNAL-scrollbar-offset) * 3);--_scrollbar-thickness-margin-px: calc(var(--_scrollbar-thickness-margin) * 1px)}:host[horizontalUsed=true]{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-thickness-margin-px)}:host[horizontalUsed=true][position=invertX],:host[horizontalUsed=true][position=invertAll]{--_vertical-top: var(--_scrollbar-thickness-margin-px);--_vertical-bottom: var(--_scrollbar-offset-px)}:host[verticalUsed=true][dir=ltr]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}:host[verticalUsed=true][dir=rtl]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}:host[verticalUsed=true][position=invertY][dir=ltr],:host[verticalUsed=true][position=invertAll][dir=ltr]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}:host[verticalUsed=true][position=invertY][dir=rtl],:host[verticalUsed=true][position=invertAll][dir=rtl]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}:host[appearance=native][verticalUsed=true][dir=ltr]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=native][verticalUsed=true][dir=rtl]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}:host[appearance=native][verticalUsed=true][position=invertY][dir=ltr],:host[appearance=native][verticalUsed=true][position=invertAll][dir=ltr]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}:host[appearance=native][verticalUsed=true][position=invertY][dir=rtl],:host[appearance=native][verticalUsed=true][position=invertAll][dir=rtl]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=native][horizontalUsed=true]{--_viewport-padding-top: 0;--_viewport-padding-bottom: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=native][horizontalUsed=true][position=invertX],:host[appearance=native][horizontalUsed=true][position=invertAll]{--_viewport-padding-top: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-bottom: 0}:host[visibility=hover]{--_scrollbar-hover-opacity: 0;--_scrollbar-opacity-transition: opacity var(--INTERNAL-scrollbar-hover-opacity-transition-leave-duration) var(--INTERNAL-scrollbar-hover-opacity-transition-leave-delay)}:host[visibility=hover]:hover,:host[visibility=hover]:active,:host[visibility=hover]:focus{--_scrollbar-hover-opacity: 1;--_scrollbar-opacity-transition: opacity var(--INTERNAL-scrollbar-hover-opacity-transition-enter-duration)}:host[dir=ltr] ::ng-deep .scroll-reached-trigger-element[trigger=start],:host[dir=ltr] ::ng-deep .scroll-dropped-trigger-element[trigger=start]{left:0;right:unset}:host[dir=ltr] ::ng-deep .scroll-reached-trigger-element[trigger=end],:host[dir=ltr] ::ng-deep .scroll-dropped-trigger-element[trigger=end]{right:0;left:unset}:host[dir=rtl] ::ng-deep .scroll-reached-trigger-element[trigger=start],:host[dir=rtl] ::ng-deep .scroll-dropped-trigger-element[trigger=start]{right:0;left:unset}:host[dir=rtl] ::ng-deep .scroll-reached-trigger-element[trigger=end],:host[dir=rtl] ::ng-deep .scroll-dropped-trigger-element[trigger=end]{left:0;right:unset}:host ::ng-deep .ng-scroll-reached-wrapper,:host ::ng-deep .ng-scroll-dropped-wrapper,:host ::ng-deep .scroll-reached-trigger-element,:host ::ng-deep .scroll-dropped-trigger-element{position:absolute;-webkit-user-select:none;user-select:none;pointer-events:none;z-index:-9999}:host ::ng-deep .ng-scroll-reached-wrapper,:host ::ng-deep .ng-scroll-dropped-wrapper{visibility:hidden;inset:0;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}:host ::ng-deep [isHorizontallyScrollable=false] .scroll-reached-trigger-element[trigger=end],:host ::ng-deep [isHorizontallyScrollable=false] .scroll-dropped-trigger-element[trigger=end]{display:none}:host ::ng-deep [isVerticallyScrollable=false] .scroll-reached-trigger-element[trigger=bottom],:host ::ng-deep [isVerticallyScrollable=false] .scroll-dropped-trigger-element[trigger=bottom]{display:none}:host ::ng-deep .scroll-reached-trigger-element{background:red}:host ::ng-deep .scroll-reached-trigger-element[trigger=top],:host ::ng-deep .scroll-reached-trigger-element[trigger=bottom]{left:0;right:0}:host ::ng-deep .scroll-reached-trigger-element[trigger=start],:host ::ng-deep .scroll-reached-trigger-element[trigger=end]{top:0;bottom:0}:host ::ng-deep .scroll-reached-trigger-element[trigger=top]{top:0;height:var(--reached-offset-top)}:host ::ng-deep .scroll-reached-trigger-element[trigger=bottom]{bottom:0;height:var(--reached-offset-bottom)}:host ::ng-deep .scroll-reached-trigger-element[trigger=start]{width:var(--reached-offset-start)}:host ::ng-deep .scroll-reached-trigger-element[trigger=end]{width:var(--reached-offset-end)}:host .scroll-dropped-trigger-element{background:#00f}:host .scroll-dropped-trigger-element[trigger=top],:host .scroll-dropped-trigger-element[trigger=bottom]{left:0;right:0}:host .scroll-dropped-trigger-element[trigger=start],:host .scroll-dropped-trigger-element[trigger=end]{top:0;bottom:0}:host .scroll-dropped-trigger-element[trigger=top]{top:0;height:var(--dropped-offset-top)}:host .scroll-dropped-trigger-element[trigger=bottom]{bottom:0;height:var(--dropped-offset-bottom)}:host .scroll-dropped-trigger-element[trigger=start]{width:var(--dropped-offset-start)}:host .scroll-dropped-trigger-element[trigger=end]{width:var(--dropped-offset-end)}:host[verticalUsed=true]{--_timeline-scope: --scrollerY;--_animation-timeline-y: --scrollerY;--_viewport_scroll-timeline: --scrollerY y;--_scrollbar-y-thumb-transform-to-value: calc(var(--track-y-length) - var(--thumb-y-length))}:host[horizontalUsed=true]{--_timeline-scope: --scrollerX;--_animation-timeline-x: --scrollerX;--_viewport_scroll-timeline: --scrollerX x;--_scrollbar-x-thumb-transform-to-value: calc(var(--track-x-length) - var(--thumb-x-length))}:host[verticalUsed=true][horizontalUsed=true]{--_timeline-scope: --scrollerX, --scrollerY;--_viewport_scroll-timeline: --scrollerX x, --scrollerY y}:host[orientation=vertical]{--_viewport-overflow: hidden auto;--_scrollbar-content-width: unset}:host[orientation=horizontal]{--_viewport-overflow: auto hidden}:host[disableInteraction=true]{--_scrollbar-pointer-events: none}:host[isVerticallyScrollable=false]{--_vertical-thumb-display: none}:host[isHorizontallyScrollable=false]{--_horizontal-thumb-display: none}:host[dragging=x],:host[dragging=y]{--_viewport-user-select: none}:host[horizontalUsed=true]{--thumb-x-length: max(calc(var(--viewport-width) * var(--track-x-length) / var(--content-width)), var(--INTERNAL-scrollbar-thumb-min-size))}:host[verticalUsed=true]{--thumb-y-length: max(calc(var(--viewport-height) * var(--track-y-length) / var(--content-height)), var(--INTERNAL-scrollbar-thumb-min-size))}:host[dragging=x]{--_track-x-thickness: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_thumb-x-color: var(var(--INTERNAL-scrollbar-thumb-min-size))}:host[dragging=y]{--_track-y-thickness: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_thumb-y-color: var(var(--INTERNAL-scrollbar-thumb-min-size))}:host[mobile=true]{--_viewport-overscroll-behavior: var(--INTERNAL-scrollbar-mobile-overscroll-behavior)}\n"]
    }]
  }], null, {
    contentWrapper: [{
      type: ViewChild,
      args: ["contentWrapper", {
        static: true
      }]
    }],
    _scrollbars: [{
      type: ViewChild,
      args: [Scrollbars, {
        static: true
      }]
    }]
  });
})();
var _NgScrollbarExt = class _NgScrollbarExt extends NgScrollbarCore {
  constructor() {
    super(...arguments);
    this.renderer = inject(Renderer2);
    this.appRef = inject(ApplicationRef);
  }
  ngOnInit() {
    if (!this.skipInit) {
      this.detectExternalSelectors();
    }
    super.ngOnInit();
  }
  detectExternalSelectors() {
    let viewportElement;
    if (this.customViewport) {
      viewportElement = this.customViewport.nativeElement;
    } else {
      if (this.externalViewport) {
        viewportElement = this.nativeElement.querySelector(this.externalViewport);
      }
      if (!viewportElement) {
        console.error(`[NgScrollbar]: Could not find the viewport element for the provided selector "${this.externalViewport}"`);
        return;
      }
    }
    let spacerElement;
    if (this.externalSpacer) {
      spacerElement = this.nativeElement.querySelector(this.externalSpacer);
      if (!spacerElement) {
        console.error(`[NgScrollbar]: Spacer element not found for the provided selector "${this.externalSpacer}"`);
        return;
      }
    }
    let contentWrapperElement;
    if (this.externalContentWrapper && !this.skipInit) {
      contentWrapperElement = this.nativeElement.querySelector(this.externalContentWrapper);
      if (!contentWrapperElement) {
        console.error(`[NgScrollbar]: Content wrapper element not found for the provided selector "${this.externalContentWrapper}"`);
        return;
      }
    }
    if (viewportElement) {
      if (!this.externalSpacer && !this.externalContentWrapper) {
        contentWrapperElement = this.renderer.createElement("div");
        const childNodes = Array.from(viewportElement.childNodes);
        childNodes.forEach((node) => this.renderer.appendChild(contentWrapperElement, node));
        this.renderer.appendChild(viewportElement, contentWrapperElement);
      }
      if (contentWrapperElement) {
        this.viewport.init(viewportElement, contentWrapperElement, spacerElement);
        this.attachScrollbars();
      }
    }
  }
  attachScrollbars() {
    const scrollbarsRef = createComponent(Scrollbars, {
      environmentInjector: this.appRef.injector,
      elementInjector: Injector.create({
        providers: [{
          provide: NG_SCROLLBAR,
          useValue: this
        }]
      })
    });
    this.viewport.contentWrapperElement.appendChild(scrollbarsRef.location.nativeElement);
    this.appRef.attachView(scrollbarsRef.hostView);
    this._scrollbars = scrollbarsRef.instance;
  }
};
_NgScrollbarExt.ɵfac = /* @__PURE__ */ (() => {
  let ɵNgScrollbarExt_BaseFactory;
  return function NgScrollbarExt_Factory(t) {
    return (ɵNgScrollbarExt_BaseFactory || (ɵNgScrollbarExt_BaseFactory = ɵɵgetInheritedFactory(_NgScrollbarExt)))(t || _NgScrollbarExt);
  };
})();
_NgScrollbarExt.ɵcmp = ɵɵdefineComponent({
  type: _NgScrollbarExt,
  selectors: [["ng-scrollbar", "externalViewport", ""]],
  contentQueries: function NgScrollbarExt_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ScrollViewport, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.customViewport = _t.first);
    }
  },
  hostAttrs: ["ngSkipHydration", "true"],
  hostVars: 2,
  hostBindings: function NgScrollbarExt_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ng-scrollbar-external-viewport", true);
    }
  },
  inputs: {
    externalViewport: "externalViewport",
    externalContentWrapper: "externalContentWrapper",
    externalSpacer: "externalSpacer",
    skipInit: [2, "skipInit", "skipInit", booleanAttribute]
  },
  exportAs: ["ngScrollbar"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NG_SCROLLBAR,
    useExisting: _NgScrollbarExt
  }, {
    provide: NgScrollbarCore,
    useExisting: NgScrollbar
  }]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  attrs: _c4,
  ngContentSelectors: _c3,
  decls: 1,
  vars: 0,
  template: function NgScrollbarExt_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: [_c5],
  changeDetection: 0
});
var NgScrollbarExt = _NgScrollbarExt;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgScrollbarExt, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "ng-scrollbar[externalViewport]",
      exportAs: "ngScrollbar",
      template: "<ng-content/>",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        // This component appends a content wrapper element to the viewport
        // A hydration mismatch error will be thrown (NG0500) during DOM manipulation.
        // To avoid this error, the 'ngSkipHydration' attribute is added to skip hydration.
        ngSkipHydration: "true",
        "[class.ng-scrollbar-external-viewport]": "true"
      },
      providers: [{
        provide: NG_SCROLLBAR,
        useExisting: NgScrollbarExt
      }, {
        provide: NgScrollbarCore,
        useExisting: NgScrollbar
      }],
      styles: [":host{display:block;position:relative;max-height:100%;max-width:100%;--INTERNAL-scrollbar-border-radius: var(--scrollbar-border-radius, 0px);--INTERNAL-scrollbar-thickness: var(--scrollbar-thickness, 5);--INTERNAL-scrollbar-offset: var(--scrollbar-offset, 0);--INTERNAL-scrollbar-track-wrapper-transition: var(--scrollbar-track-wrapper-transition, width 60ms linear, height 60ms linear);--INTERNAL-scrollbar-track-color: var(--scrollbar-track-color, transparent);--INTERNAL-scrollbar-thumb-color: var(--scrollbar-thumb-color, rgb(0 0 0 / 20%));--INTERNAL-scrollbar-thumb-hover-color: var(--scrollbar-thumb-hover-color, var(--INTERNAL-scrollbar-thumb-color));--INTERNAL-scrollbar-hover-thickness: var(--scrollbar-hover-thickness, var(--INTERNAL-scrollbar-thickness));--INTERNAL-scrollbar-thumb-transition: var(--scrollbar-thumb-transition, none);--INTERNAL-scrollbar-thumb-min-size: var(--scrollbar-thumb-min-size, 20);--INTERNAL-scrollbar-button-color: var(--scrollbar-button-color, var(--INTERNAL-scrollbar-thumb-color));--INTERNAL-scrollbar-button-hover-color: var(--scrollbar-button-hover-color, var(--INTERNAL-scrollbar-button-color));--INTERNAL-scrollbar-button-active-color: var(--scrollbar-button-active-color, var(--INTERNAL-scrollbar-button-hover-color));--INTERNAL-scrollbar-button-fill: var(--scrollbar-button-fill, white);--INTERNAL-scrollbar-button-hover-fill: var(--scrollbar-button-hover-fill, var(--INTERNAL-scrollbar-button-fill));--INTERNAL-scrollbar-button-active-fill: var(--scrollbar-button-active-fill, var(--INTERNAL-scrollbar-button-hover-fill));--INTERNAL-scrollbar-hover-opacity-transition-enter-duration: var(--scrollbar-hover-opacity-transition-enter-duration, 0);--INTERNAL-scrollbar-hover-opacity-transition-leave-duration: var(--scrollbar-hover-opacity-transition-leave-duration, .4s);--INTERNAL-scrollbar-hover-opacity-transition-leave-delay: var(--scrollbar-hover-opacity-transition-leave-delay, 1s);--INTERNAL-scrollbar-overscroll-behavior: var(--scrollbar-overscroll-behavior, initial);--INTERNAL-scrollbar-mobile-overscroll-behavior: var(--scrollbar-mobile-overscroll-behavior, none);--_scrollbar-thickness: calc(var(--INTERNAL-scrollbar-thickness) + var(--INTERNAL-scrollbar-offset) * 2);--_scrollbar-pointer-events: auto;--_scrollbar-offset-px: calc(var(--INTERNAL-scrollbar-offset) * 1px);--_scrollbar-thickness-px: calc(var(--INTERNAL-scrollbar-thickness) * 1px);--_scrollbar-hover-thickness-px: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_viewport-padding-top: 0;--_viewport-padding-bottom: 0;--_viewport-padding-left: 0;--_viewport-padding-right: 0;--_horizontal-thumb-display: block;--_vertical-thumb-display: block;--_viewport-overflow: auto;--_thumb-x-color: var(--INTERNAL-scrollbar-thumb-color);--_thumb-y-color: var(--INTERNAL-scrollbar-thumb-color);--_track-y-thickness: var(--_scrollbar-thickness-px);--_track-x-thickness: var(--_scrollbar-thickness-px);--_viewport-overscroll-behavior: var(--INTERNAL-scrollbar-overscroll-behavior);--_scrollbar-content-width: fit-content}:host{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-offset-px);--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-offset-px);--_horizontal-top: initial;--_horizontal-bottom: var(--_scrollbar-offset-px);--_scrollbar-wrapper-x-top: calc(var(--viewport-height) - var(--_scrollbar-thickness));--reached-offset: 1px;--reached-offset-top: var(--reached-offset);--reached-offset-bottom: var(--reached-offset);--reached-offset-start: var(--reached-offset);--reached-offset-end: var(--reached-offset);--dropped-offset: 1px;--dropped-offset-top: var(--dropped-offset);--dropped-offset-bottom: var(--dropped-offset);--dropped-offset-start: var(--dropped-offset);--dropped-offset-end: var(--dropped-offset);--_viewport_scroll-timeline: unset;--_animation-timeline-y: unset;--_scrollbar-y-thumb-transform-to-value: unset;--_scrollbar-x-thumb-transform-to-value: unset;--_scrollbar-thumb-transform-from: unset;--_scrollbar-thumb-transform-to: unset}:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{min-height:100%;min-width:100%;height:100%;max-height:100%;max-width:100%}:host.ng-scroll-viewport,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{position:relative;overflow:var(--_viewport-overflow);scroll-timeline:var(--_viewport_scroll-timeline);box-sizing:border-box!important;-webkit-overflow-scrolling:touch;will-change:scroll-position;-webkit-user-select:var(--_viewport-user-select);user-select:var(--_viewport-user-select);overscroll-behavior:var(--_viewport-overscroll-behavior)}:host.ng-scroll-viewport>.ng-scroll-content,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport>.ng-scroll-content{width:var(--_scrollbar-content-width);z-index:1;min-width:100%;min-height:100%;contain:content;padding:var(--_viewport-padding-top, 0) var(--_viewport-padding-right, 0) var(--_viewport-padding-bottom, 0) var(--_viewport-padding-left, 0)}:host.ng-scroll-viewport,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{scrollbar-width:none!important}:host.ng-scroll-viewport::-webkit-scrollbar,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport::-webkit-scrollbar{display:none!important}:host[position=invertX],:host[position=invertAll]{--_horizontal-top: var(--_scrollbar-offset-px);--_horizontal-bottom: initial;--_scrollbar-wrapper-x-top: 0}:host[dir=ltr]{--_scrollbar-wrapper-y-right: initial;--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-left: calc(var(--viewport-width) - var(--_scrollbar-thickness))}:host[dir=ltr][position=invertY],:host[dir=ltr][position=invertAll]{--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-left: 0}:host[dir=rtl]{--_scrollbar-wrapper-y-left: initial;--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-right: calc(var(--viewport-width) - var(--_scrollbar-thickness))}:host[dir=rtl][position=invertY],:host[dir=rtl][position=invertAll]{--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-right: 0}:host[verticalUsed=true][horizontalUsed=true]{--_scrollbar-thickness-margin: calc(var(--INTERNAL-scrollbar-thickness) + var(--INTERNAL-scrollbar-offset) * 3);--_scrollbar-thickness-margin-px: calc(var(--_scrollbar-thickness-margin) * 1px)}:host[horizontalUsed=true]{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-thickness-margin-px)}:host[horizontalUsed=true][position=invertX],:host[horizontalUsed=true][position=invertAll]{--_vertical-top: var(--_scrollbar-thickness-margin-px);--_vertical-bottom: var(--_scrollbar-offset-px)}:host[verticalUsed=true][dir=ltr]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}:host[verticalUsed=true][dir=rtl]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}:host[verticalUsed=true][position=invertY][dir=ltr],:host[verticalUsed=true][position=invertAll][dir=ltr]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}:host[verticalUsed=true][position=invertY][dir=rtl],:host[verticalUsed=true][position=invertAll][dir=rtl]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}:host[appearance=native][verticalUsed=true][dir=ltr]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=native][verticalUsed=true][dir=rtl]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}:host[appearance=native][verticalUsed=true][position=invertY][dir=ltr],:host[appearance=native][verticalUsed=true][position=invertAll][dir=ltr]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}:host[appearance=native][verticalUsed=true][position=invertY][dir=rtl],:host[appearance=native][verticalUsed=true][position=invertAll][dir=rtl]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=native][horizontalUsed=true]{--_viewport-padding-top: 0;--_viewport-padding-bottom: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=native][horizontalUsed=true][position=invertX],:host[appearance=native][horizontalUsed=true][position=invertAll]{--_viewport-padding-top: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-bottom: 0}:host[visibility=hover]{--_scrollbar-hover-opacity: 0;--_scrollbar-opacity-transition: opacity var(--INTERNAL-scrollbar-hover-opacity-transition-leave-duration) var(--INTERNAL-scrollbar-hover-opacity-transition-leave-delay)}:host[visibility=hover]:hover,:host[visibility=hover]:active,:host[visibility=hover]:focus{--_scrollbar-hover-opacity: 1;--_scrollbar-opacity-transition: opacity var(--INTERNAL-scrollbar-hover-opacity-transition-enter-duration)}:host[dir=ltr] ::ng-deep .scroll-reached-trigger-element[trigger=start],:host[dir=ltr] ::ng-deep .scroll-dropped-trigger-element[trigger=start]{left:0;right:unset}:host[dir=ltr] ::ng-deep .scroll-reached-trigger-element[trigger=end],:host[dir=ltr] ::ng-deep .scroll-dropped-trigger-element[trigger=end]{right:0;left:unset}:host[dir=rtl] ::ng-deep .scroll-reached-trigger-element[trigger=start],:host[dir=rtl] ::ng-deep .scroll-dropped-trigger-element[trigger=start]{right:0;left:unset}:host[dir=rtl] ::ng-deep .scroll-reached-trigger-element[trigger=end],:host[dir=rtl] ::ng-deep .scroll-dropped-trigger-element[trigger=end]{left:0;right:unset}:host ::ng-deep .ng-scroll-reached-wrapper,:host ::ng-deep .ng-scroll-dropped-wrapper,:host ::ng-deep .scroll-reached-trigger-element,:host ::ng-deep .scroll-dropped-trigger-element{position:absolute;-webkit-user-select:none;user-select:none;pointer-events:none;z-index:-9999}:host ::ng-deep .ng-scroll-reached-wrapper,:host ::ng-deep .ng-scroll-dropped-wrapper{visibility:hidden;inset:0;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}:host ::ng-deep [isHorizontallyScrollable=false] .scroll-reached-trigger-element[trigger=end],:host ::ng-deep [isHorizontallyScrollable=false] .scroll-dropped-trigger-element[trigger=end]{display:none}:host ::ng-deep [isVerticallyScrollable=false] .scroll-reached-trigger-element[trigger=bottom],:host ::ng-deep [isVerticallyScrollable=false] .scroll-dropped-trigger-element[trigger=bottom]{display:none}:host ::ng-deep .scroll-reached-trigger-element{background:red}:host ::ng-deep .scroll-reached-trigger-element[trigger=top],:host ::ng-deep .scroll-reached-trigger-element[trigger=bottom]{left:0;right:0}:host ::ng-deep .scroll-reached-trigger-element[trigger=start],:host ::ng-deep .scroll-reached-trigger-element[trigger=end]{top:0;bottom:0}:host ::ng-deep .scroll-reached-trigger-element[trigger=top]{top:0;height:var(--reached-offset-top)}:host ::ng-deep .scroll-reached-trigger-element[trigger=bottom]{bottom:0;height:var(--reached-offset-bottom)}:host ::ng-deep .scroll-reached-trigger-element[trigger=start]{width:var(--reached-offset-start)}:host ::ng-deep .scroll-reached-trigger-element[trigger=end]{width:var(--reached-offset-end)}:host .scroll-dropped-trigger-element{background:#00f}:host .scroll-dropped-trigger-element[trigger=top],:host .scroll-dropped-trigger-element[trigger=bottom]{left:0;right:0}:host .scroll-dropped-trigger-element[trigger=start],:host .scroll-dropped-trigger-element[trigger=end]{top:0;bottom:0}:host .scroll-dropped-trigger-element[trigger=top]{top:0;height:var(--dropped-offset-top)}:host .scroll-dropped-trigger-element[trigger=bottom]{bottom:0;height:var(--dropped-offset-bottom)}:host .scroll-dropped-trigger-element[trigger=start]{width:var(--dropped-offset-start)}:host .scroll-dropped-trigger-element[trigger=end]{width:var(--dropped-offset-end)}:host[verticalUsed=true]{--_timeline-scope: --scrollerY;--_animation-timeline-y: --scrollerY;--_viewport_scroll-timeline: --scrollerY y;--_scrollbar-y-thumb-transform-to-value: calc(var(--track-y-length) - var(--thumb-y-length))}:host[horizontalUsed=true]{--_timeline-scope: --scrollerX;--_animation-timeline-x: --scrollerX;--_viewport_scroll-timeline: --scrollerX x;--_scrollbar-x-thumb-transform-to-value: calc(var(--track-x-length) - var(--thumb-x-length))}:host[verticalUsed=true][horizontalUsed=true]{--_timeline-scope: --scrollerX, --scrollerY;--_viewport_scroll-timeline: --scrollerX x, --scrollerY y}:host[orientation=vertical]{--_viewport-overflow: hidden auto;--_scrollbar-content-width: unset}:host[orientation=horizontal]{--_viewport-overflow: auto hidden}:host[disableInteraction=true]{--_scrollbar-pointer-events: none}:host[isVerticallyScrollable=false]{--_vertical-thumb-display: none}:host[isHorizontallyScrollable=false]{--_horizontal-thumb-display: none}:host[dragging=x],:host[dragging=y]{--_viewport-user-select: none}:host[horizontalUsed=true]{--thumb-x-length: max(calc(var(--viewport-width) * var(--track-x-length) / var(--content-width)), var(--INTERNAL-scrollbar-thumb-min-size))}:host[verticalUsed=true]{--thumb-y-length: max(calc(var(--viewport-height) * var(--track-y-length) / var(--content-height)), var(--INTERNAL-scrollbar-thumb-min-size))}:host[dragging=x]{--_track-x-thickness: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_thumb-x-color: var(var(--INTERNAL-scrollbar-thumb-min-size))}:host[dragging=y]{--_track-y-thickness: calc(var(--INTERNAL-scrollbar-hover-thickness) * 1px);--_thumb-y-color: var(var(--INTERNAL-scrollbar-thumb-min-size))}:host[mobile=true]{--_viewport-overscroll-behavior: var(--INTERNAL-scrollbar-mobile-overscroll-behavior)}\n"]
    }]
  }], null, {
    externalViewport: [{
      type: Input
    }],
    externalContentWrapper: [{
      type: Input
    }],
    externalSpacer: [{
      type: Input
    }],
    skipInit: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    customViewport: [{
      type: ContentChild,
      args: [ScrollViewport, {
        static: true
      }]
    }]
  });
})();
var _AsyncDetection = class _AsyncDetection {
  constructor() {
    this.scrollbar = inject(NgScrollbarExt);
    this.zone = inject(NgZone);
    this.scrollbar.skipInit = true;
  }
  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.subscription = mutationObserver(this.scrollbar.nativeElement, 100).subscribe(() => {
        if (!this.scrollbar.viewport.initialized()) {
          const viewportElement = this.scrollbar.nativeElement.querySelector(this.scrollbar.externalViewport);
          const contentWrapperElement = this.scrollbar.nativeElement.querySelector(this.scrollbar.externalContentWrapper);
          if (viewportElement && contentWrapperElement) {
            let spacerElement;
            if (this.scrollbar.externalSpacer) {
              spacerElement = this.scrollbar.nativeElement.querySelector(this.scrollbar.externalSpacer);
            }
            this.scrollbar.viewport.init(viewportElement, contentWrapperElement, spacerElement);
            this.scrollbar.attachScrollbars();
            if (!this.asyncDetection) {
              this.subscription.unsubscribe();
            }
          }
        } else {
          const viewportElement = this.scrollbar.nativeElement.querySelector(this.scrollbar.externalViewport);
          const contentWrapperElement = this.scrollbar.nativeElement.querySelector(this.scrollbar.externalContentWrapper);
          if (!viewportElement || !contentWrapperElement) {
            this.scrollbar.viewport.nativeElement = null;
            this.scrollbar.viewport.contentWrapperElement = null;
            this.scrollbar.viewport.initialized.set(false);
          }
        }
      });
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
};
_AsyncDetection.ɵfac = function AsyncDetection_Factory(t) {
  return new (t || _AsyncDetection)();
};
_AsyncDetection.ɵdir = ɵɵdefineDirective({
  type: _AsyncDetection,
  selectors: [["ng-scrollbar", "externalViewport", "", "asyncDetection", ""]],
  inputs: {
    asyncDetection: "asyncDetection"
  },
  standalone: true
});
var AsyncDetection = _AsyncDetection;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncDetection, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-scrollbar[externalViewport][asyncDetection]"
    }]
  }], () => [], {
    asyncDetection: [{
      type: Input
    }]
  });
})();
var _NgScrollbarModule = class _NgScrollbarModule {
};
_NgScrollbarModule.ɵfac = function NgScrollbarModule_Factory(t) {
  return new (t || _NgScrollbarModule)();
};
_NgScrollbarModule.ɵmod = ɵɵdefineNgModule({
  type: _NgScrollbarModule,
  imports: [NgScrollbar, ScrollViewport, NgScrollbarExt, AsyncDetection],
  exports: [NgScrollbar, ScrollViewport, NgScrollbarExt, AsyncDetection]
});
_NgScrollbarModule.ɵinj = ɵɵdefineInjector({});
var NgScrollbarModule = _NgScrollbarModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgScrollbarModule, [{
    type: NgModule,
    args: [{
      imports: [NgScrollbar, ScrollViewport, NgScrollbarExt, AsyncDetection],
      exports: [NgScrollbar, ScrollViewport, NgScrollbarExt, AsyncDetection]
    }]
  }], null, null);
})();
function provideScrollbarOptions(options) {
  return [{
    provide: NG_SCROLLBAR_OPTIONS,
    useValue: options
  }];
}
function provideScrollbarPolyfill(url) {
  return [{
    provide: NG_SCROLLBAR_POLYFILL,
    useValue: url
  }];
}
export {
  AsyncDetection,
  NG_SCROLLBAR,
  NG_SCROLLBAR_OPTIONS,
  NG_SCROLLBAR_POLYFILL,
  NgScrollbar,
  NgScrollbarExt,
  NgScrollbarModule,
  ScrollViewport,
  ScrollbarUpdateReason,
  provideScrollbarOptions,
  provideScrollbarPolyfill
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v18.1.2
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=ngx-scrollbar.js.map
