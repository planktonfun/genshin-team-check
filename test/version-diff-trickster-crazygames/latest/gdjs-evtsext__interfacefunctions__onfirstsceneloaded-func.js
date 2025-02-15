
if (typeof gdjs.evtsExt__InterfaceFunctions__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__InterfaceFunctions__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InterfaceFunctions__onFirstSceneLoaded = {};


gdjs.evtsExt__InterfaceFunctions__onFirstSceneLoaded.userFunc0x13cafc0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
class EquipmentManager
{
	constructor() {
		this.reset();
	}

	reset() {
		this.attributes={};
	}

	setItem(type, atts) {
		this.attributes[type] = atts;
	}

	applyAttributes(pointerObject) {
		for(var type in this.attributes) {
			for(var att in this.attributes[type]) {
				pointerObject[att] += this.attributes[type][att];
			}
		}
	}

	getAttributes() {
		var points = {};
		
		for(var type in this.attributes) {
			for(var att in this.attributes[type]) {
				if(!points[att]) points[att] = 0;

				points[att] += this.attributes[type][att];
			}
		}

		return points;
	}
}

window.equipmentManager = new EquipmentManager();
};
gdjs.evtsExt__InterfaceFunctions__onFirstSceneLoaded.userFunc0x13d2118 = function(runtimeScene, eventsFunctionContext) {
"use strict";
/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/obscenity@0.2.1/dist/index.mjs
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var t =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {},
  e = {},
  r = {},
  a = {};
function n(t) {
  return 48 <= t && t <= 57;
}
function s(t) {
  return d(t) || i(t);
}
function d(t) {
  return 97 <= t && t <= 122;
}
function i(t) {
  return 65 <= t && t <= 90;
}
Object.defineProperty(a, "__esModule", {
  value: !0
}),
  (a.getAndAssertSingleCodePoint =
    a.invertCaseOfAlphabeticChar =
    a.isUpperCase =
    a.isLowerCase =
    a.isAlphabetic =
    a.isDigit =
    a.isWordChar =
    a.convertSurrogatePairToCodePoint =
    a.isLowSurrogate =
    a.isHighSurrogate =
      void 0),
  (a.isHighSurrogate = function (t) {
    return 55296 <= t && t <= 56319;
  }),
  (a.isLowSurrogate = function (t) {
    return 56320 <= t && t <= 57343;
  }),
  (a.convertSurrogatePairToCodePoint = function (t, e) {
    return 1024 * (t - 55296) + e - 56320 + 65536;
  }),
  (a.isWordChar = function (t) {
    return n(t) || s(t);
  }),
  (a.isDigit = n),
  (a.isAlphabetic = s),
  (a.isLowerCase = d),
  (a.isUpperCase = i),
  (a.invertCaseOfAlphabeticChar = function (t) {
    return 32 ^ t;
  }),
  (a.getAndAssertSingleCodePoint = function (t) {
    if (1 !== [...t].length)
      throw new RangeError(
        "Expected the input string to be one code point in length."
      );
    return t.codePointAt(0);
  }),
  Object.defineProperty(r, "__esModule", {
    value: !0
  }),
  (r.randomCharFromSetCensorStrategy =
    r.fixedCharCensorStrategy =
    r.fixedPhraseCensorStrategy =
    r.grawlixCensorStrategy =
    r.asteriskCensorStrategy =
    r.keepEndCensorStrategy =
    r.keepStartCensorStrategy =
      void 0);
const o = a;
function l(t) {
  return (0, o.getAndAssertSingleCodePoint)(t), (e) => t.repeat(e.matchLength);
}
function h(t) {
  const e = [...t];
  if (0 === e.length)
    throw new Error("The character set passed must not be empty.");
  return (t) => {
    let r = "";
    for (let a = 0; a < t.matchLength; a++)
      r += e[Math.floor(Math.random() * e.length)];
    return r;
  };
}
(r.keepStartCensorStrategy = function (t) {
  return (e) => {
    if (e.overlapsAtStart) return t(e);
    return (
      String.fromCodePoint(e.input.codePointAt(e.startIndex)) +
      t({
        ...e,
        matchLength: e.matchLength - 1
      })
    );
  };
}),
  (r.keepEndCensorStrategy = function (t) {
    return (e) => {
      if (e.overlapsAtEnd) return t(e);
      const r = String.fromCodePoint(e.input.codePointAt(e.endIndex));
      return (
        t({
          ...e,
          matchLength: e.matchLength - 1
        }) + r
      );
    };
  }),
  (r.asteriskCensorStrategy = function () {
    return l("*");
  }),
  (r.grawlixCensorStrategy = function () {
    return h("%@$&*");
  }),
  (r.fixedPhraseCensorStrategy = function (t) {
    return () => t;
  }),
  (r.fixedCharCensorStrategy = l),
  (r.randomCharFromSetCensorStrategy = h);
var c = {},
  p = {},
  u = {};
Object.defineProperty(u, "__esModule", {
  value: !0
}),
  (u.compareIntervals = void 0),
  (u.compareIntervals = function (t, e, r, a) {
    return t < r ? -1 : r < t ? 1 : e < a ? -1 : a < e ? 1 : 0;
  }),
  Object.defineProperty(p, "__esModule", {
    value: !0
  }),
  (p.compareMatchByPositionAndId = void 0);
const g = u;
(p.compareMatchByPositionAndId = function (t, e) {
  const r = (0, g.compareIntervals)(
    t.startIndex,
    t.endIndex,
    e.startIndex,
    e.endIndex
  );
  return 0 !== r ? r : t.termId === e.termId ? 0 : t.termId < e.termId ? -1 : 1;
}),
  Object.defineProperty(c, "__esModule", {
    value: !0
  }),
  (c.TextCensor = void 0);
const f = p,
  m = r;
c.TextCensor = class {
  constructor() {
    this.strategy = (0, m.grawlixCensorStrategy)();
  }
  setStrategy(t) {
    return (this.strategy = t), this;
  }
  applyTo(t, e) {
    if (0 === e.length) return t;
    const r = [...e].sort(f.compareMatchByPositionAndId);
    let a = "",
      n = 0;
    for (let e = 0; e < r.length; e++) {
      const s = r[e];
      if (n > s.endIndex) continue;
      const d = s.startIndex < n;
      d || (a += t.slice(n, s.startIndex));
      const i = Math.max(n, s.startIndex),
        o =
          e < r.length - 1 &&
          s.endIndex >= r[e + 1].startIndex &&
          s.endIndex < r[e + 1].endIndex;
      (a += this.strategy({
        ...s,
        startIndex: i,
        input: t,
        overlapsAtStart: d,
        overlapsAtEnd: o
      })),
        (n = s.endIndex + 1);
    }
    return (a += t.slice(n)), a;
  }
};
var P = {},
  T = {};
Object.defineProperty(T, "__esModule", {
  value: !0
}),
  (T.assignIncrementingIds = void 0),
  (T.assignIncrementingIds = function (t) {
    let e = 0;
    return t.map((t) => ({
      id: e++,
      pattern: t
    }));
  }),
  Object.defineProperty(P, "__esModule", {
    value: !0
  }),
  (P.PhraseBuilder = P.DataSet = void 0);
const y = T;
P.DataSet = class {
  constructor() {
    (this.containers = []),
      (this.patternCount = 0),
      (this.patternIdToPhraseContainer = new Map());
  }
  addAll(t) {
    for (const e of t.containers) this.registerContainer(e);
    return this;
  }
  removePhrasesIf(t) {
    (this.patternCount = 0), this.patternIdToPhraseContainer.clear();
    const e = this.containers.splice(0);
    for (const r of e) {
      t(r) || this.registerContainer(r);
    }
    return this;
  }
  addPhrase(t) {
    const e = t(new W()).build();
    return this.registerContainer(e), this;
  }
  getPayloadWithPhraseMetadata(t) {
    const e = this.patternIdToPhraseContainer.get(t.termId);
    if (void 0 === e)
      throw new Error(
        `The pattern with ID ${t.termId} does not exist in this dataset.`
      );
    return {
      ...t,
      phraseMetadata: this.containers[e].metadata
    };
  }
  build() {
    return {
      blacklistedTerms: (0, y.assignIncrementingIds)(
        this.containers.flatMap((t) => t.patterns)
      ),
      whitelistedTerms: this.containers.flatMap((t) => t.whitelistedTerms)
    };
  }
  registerContainer(t) {
    const e = this.containers.push(t) - 1;
    for (let r = 0, a = this.patternCount; r < t.patterns.length; r++, a++)
      this.patternIdToPhraseContainer.set(a, e), this.patternCount++;
  }
};
class W {
  constructor() {
    (this.patterns = []), (this.whitelistedTerms = []);
  }
  addPattern(t) {
    return this.patterns.push(t), this;
  }
  addWhitelistedTerm(t) {
    return this.whitelistedTerms.push(t), this;
  }
  setMetadata(t) {
    return (this.metadata = t), this;
  }
  build() {
    return {
      patterns: this.patterns,
      whitelistedTerms: this.whitelistedTerms,
      metadata: this.metadata
    };
  }
}
P.PhraseBuilder = W;
var M,
  b = {},
  v = {},
  C = {};
Object.defineProperty(C, "__esModule", {
  value: !0
}),
  (C.SyntaxKind = void 0),
  (function (t) {
    (t[(t.Optional = 0)] = "Optional"),
      (t[(t.Wildcard = 1)] = "Wildcard"),
      (t[(t.Literal = 2)] = "Literal"),
      (t[(t.BoundaryAssertion = 3)] = "BoundaryAssertion");
  })(M || (C.SyntaxKind = M = {})),
  Object.defineProperty(v, "__esModule", {
    value: !0
  }),
  (v.groupByNodeType =
    v.computePatternMatchLength =
    v.getRegExpStringForNode =
    v.compilePatternToRegExp =
    v.potentiallyMatchesEmptyString =
      void 0);
const S = C;
(v.potentiallyMatchesEmptyString = function (t) {
  return t.nodes.every((t) => t.kind === S.SyntaxKind.Optional);
}),
  (v.compilePatternToRegExp = function (t) {
    let e = "";
    t.requireWordBoundaryAtStart && (e += "\\b");
    for (const r of t.nodes) e += w(r);
    return t.requireWordBoundaryAtEnd && (e += "\\b"), new RegExp(e, "gs");
  });
const k = [
  "[",
  ".",
  "*",
  "+",
  "?",
  "^",
  "$",
  "{",
  "}",
  "(",
  ")",
  "|",
  "[",
  "\\",
  "]"
].map((t) => t.charCodeAt(0));
function w(t) {
  switch (t.kind) {
    case S.SyntaxKind.Literal: {
      let e = "";
      for (const r of t.chars)
        k.includes(r) && (e += "\\"), (e += String.fromCodePoint(r));
      return e;
    }
    case S.SyntaxKind.Optional:
      return `(?:${w(t.childNode)})?`;
    case S.SyntaxKind.Wildcard:
      return ".";
  }
}
(v.getRegExpStringForNode = w),
  (v.computePatternMatchLength = function (t) {
    return t.reduce(
      (t, e) => t + (e.kind === S.SyntaxKind.Wildcard ? 1 : e.chars.length),
      0
    );
  }),
  (v.groupByNodeType = function (t) {
    let e = 0;
    const r = [];
    for (; e < t.length; ) {
      if (t[e].kind === S.SyntaxKind.Literal) {
        const a = [];
        for (; e < t.length && t[e].kind === S.SyntaxKind.Literal; )
          a.push(t[e++]);
        r.push({
          literals: a,
          isLiteralGroup: !0
        });
      } else {
        const a = e;
        for (; e < t.length && t[e].kind === S.SyntaxKind.Wildcard; ) e++;
        r.push({
          wildcardCount: e - a,
          isLiteralGroup: !1
        });
      }
    }
    return r;
  });
var x = {};
Object.defineProperty(x, "__esModule", {
  value: !0
}),
  (x.TransformerSet = void 0);
x.TransformerSet = class {
  constructor(t) {
    (this.transformers = t),
      (this.statefulTransformers = Array.from({
        length: this.transformers.length
      }));
    for (let t = 0; t < this.transformers.length; t++) {
      const e = this.transformers[t];
      1 === e.type && (this.statefulTransformers[t] = e.factory());
    }
  }
  applyTo(t) {
    let e = t;
    for (let t = 0; t < this.transformers.length && void 0 !== e; t++) {
      const r = this.transformers[t];
      e =
        0 === r.type
          ? r.transform(e)
          : this.statefulTransformers[t].transform(e);
    }
    return e;
  }
  resetAll() {
    for (let t = 0; t < this.transformers.length; t++)
      1 === this.transformers[t].type && this.statefulTransformers[t].reset();
  }
};
var _ = {};
Object.defineProperty(_, "__esModule", {
  value: !0
}),
  (_.CharacterIterator = void 0);
const I = a;
class A {
  constructor(t) {
    (this.lastPosition = -1),
      (this.currentPosition = 0),
      (this._lastWidth = 0),
      (this._input = t !== null && t !== void 0 ? t : "");
  }
  get input() {
    return this._input;
  }
  setInput(t) {
    return (this._input = t), this.reset(), this;
  }
  reset() {
    (this.lastPosition = -1), (this.currentPosition = 0), (this._lastWidth = 0);
  }
  next() {
    if (this.done)
      return {
        done: !0,
        value: void 0
      };
    this.lastPosition = this.currentPosition;
    const t = this._input.charCodeAt(this.currentPosition++);
    if (((this._lastWidth = 1), this.done || !(0, I.isHighSurrogate)(t)))
      return {
        done: !1,
        value: t
      };
    const e = this._input.charCodeAt(this.currentPosition);
    return (0, I.isLowSurrogate)(e)
      ? (this._lastWidth++,
        this.currentPosition++,
        {
          done: !1,
          value: (0, I.convertSurrogatePairToCodePoint)(t, e)
        })
      : {
          done: !1,
          value: t
        };
  }
  get position() {
    return this.lastPosition;
  }
  get lastWidth() {
    return this._lastWidth;
  }
  get done() {
    return this.currentPosition >= this._input.length;
  }
  [Symbol.iterator]() {
    return this;
  }
}
_.CharacterIterator = A;
var j = {};
Object.defineProperty(j, "__esModule", {
  value: !0
}),
  (j.IntervalCollection = void 0);
class O {
  constructor() {
    (this.dirty = !1), (this.intervals = []);
  }
  insert(t, e) {
    this.intervals.push([t, e]), (this.dirty = !0);
  }
  query(t, e) {
    if (0 === this.intervals.length) return !1;
    this.dirty &&
      ((this.dirty = !1),
      this.intervals.sort((t, e) => (t[0] < e[0] ? -1 : e[0] < t[0] ? 1 : 0)));
    for (const r of this.intervals) {
      if (r[0] > t) break;
      if (r[0] <= t && e <= r[1]) return !0;
    }
    return !1;
  }
  values() {
    return this.intervals.values();
  }
  [Symbol.iterator]() {
    return this.values();
  }
}
(j.IntervalCollection = O),
  Object.defineProperty(b, "__esModule", {
    value: !0
  }),
  (b.RegExpMatcher = void 0);
const E = v,
  L = x,
  B = a,
  R = _,
  D = j,
  K = p;
b.RegExpMatcher = class {
  constructor({
    blacklistedTerms: t,
    whitelistedTerms: e = [],
    blacklistMatcherTransformers: r = [],
    whitelistMatcherTransformers: a = []
  }) {
    (this.blacklistedTerms = this.compileTerms(t)),
      (this.whitelistedTerms = e),
      (this.blacklistMatcherTransformers = new L.TransformerSet(r)),
      (this.whitelistMatcherTransformers = new L.TransformerSet(a));
  }
  getAllMatches(t, e = !1) {
    const r = this.getWhitelistedIntervals(t),
      [a, n] = this.applyTransformers(t, this.blacklistMatcherTransformers),
      s = [];
    for (const t of this.blacklistedTerms)
      for (const e of n.matchAll(t.regExp)) {
        const d = [...e[0]].length,
          i = a[e.index];
        let o = a[e.index + d - 1];
        o < n.length - 1 &&
          (0, B.isHighSurrogate)(n.charCodeAt(o)) &&
          (0, B.isLowSurrogate)(n.charCodeAt(o + 1)) &&
          o++,
          r.query(i, o) ||
            s.push({
              termId: t.id,
              startIndex: i,
              endIndex: o,
              matchLength: d
            });
      }
    return e && s.sort(K.compareMatchByPositionAndId), s;
  }
  hasMatch(t) {
    const e = this.getWhitelistedIntervals(t),
      [r, a] = this.applyTransformers(t, this.blacklistMatcherTransformers);
    for (const t of this.blacklistedTerms)
      for (const n of a.matchAll(t.regExp)) {
        const t = [...n[0]].length,
          s = r[n.index];
        let d = r[n.index + t - 1];
        if (
          (d < a.length - 1 &&
            (0, B.isHighSurrogate)(a.charCodeAt(d)) &&
            (0, B.isLowSurrogate)(a.charCodeAt(d + 1)) &&
            d++,
          !e.query(s, d))
        )
          return !0;
      }
    return !1;
  }
  getWhitelistedIntervals(t) {
    const e = new D.IntervalCollection(),
      [r, a] = this.applyTransformers(t, this.whitelistMatcherTransformers);
    for (const t of this.whitelistedTerms) {
      const n = [...t].length;
      let s = 0;
      for (let d = a.indexOf(t, s); -1 !== d; d = a.indexOf(t, s)) {
        let t = r[d + n - 1];
        t < a.length - 1 &&
          (0, B.isHighSurrogate)(a.charCodeAt(t)) &&
          (0, B.isLowSurrogate)(a.charCodeAt(t + 1)) &&
          t++,
          e.insert(r[d], t),
          (s = t + 1);
      }
    }
    return e;
  }
  applyTransformers(t, e) {
    const r = [];
    let a = "";
    const n = new R.CharacterIterator(t);
    for (const t of n) {
      const s = e.applyTo(t);
      void 0 !== s && (r.push(n.position), (a += String.fromCodePoint(s)));
    }
    return e.resetAll(), [r, a];
  }
  compileTerms(t) {
    const e = [],
      r = new Set();
    for (const a of t) {
      if (r.has(a.id))
        throw new Error(`Duplicate blacklisted term ID ${a.id}.`);
      if ((0, E.potentiallyMatchesEmptyString)(a.pattern))
        throw new Error(
          `Pattern with ID ${a.id} potentially matches empty string; this is unsupported.`
        );
      e.push({
        id: a.id,
        regExp: (0, E.compilePatternToRegExp)(a.pattern)
      }),
        r.add(a.id);
    }
    return e;
  }
};
var N = {};
Object.defineProperty(N, "__esModule", {
  value: !0
});
var $ = {};
Object.defineProperty($, "__esModule", {
  value: !0
}),
  ($.ParserError = void 0);
class q extends Error {
  constructor(t, e, r) {
    super(`${e}:${r}: ${t}`),
      (this.name = "ParserError"),
      (this.line = e),
      (this.column = r);
  }
}
$.ParserError = q;
var U = {},
  H = {};
Object.defineProperty(H, "__esModule", {
  value: !0
}),
  (H.Parser = void 0);
const F = a,
  z = _,
  G = C,
  V = $,
  Y = [92, 91, 93, 63, 124],
  J = Y.map((t) => `'${String.fromCodePoint(t)}'`).join(", ");
(H.Parser = class {
  constructor() {
    (this.input = ""),
      (this.line = 1),
      (this.column = 1),
      (this.position = 0),
      (this.lastColumn = 1),
      (this.lastWidth = 0);
  }
  parse(t) {
    this.setInput(t);
    const e = [],
      r = this.nextNode(),
      a =
        (r === null || r === void 0 ? void 0 : r.kind) ===
        G.SyntaxKind.BoundaryAssertion;
    r && !a && e.push(r);
    let n = !1;
    for (; !this.done; ) {
      const t = this.mark(),
        r = this.nextNode();
      r.kind === G.SyntaxKind.BoundaryAssertion
        ? (this.done ||
            this.reportError(
              "Boundary assertions are not supported in this position; they are only allowed at the start / end of the pattern.",
              t
            ),
          (n = !0))
        : e.push(r);
    }
    return {
      requireWordBoundaryAtStart: a,
      requireWordBoundaryAtEnd: n,
      nodes: e
    };
  }
  setInput(t) {
    return (
      (this.input = t),
      (this.line = 1),
      (this.column = 1),
      (this.position = 0),
      (this.lastColumn = 1),
      (this.lastWidth = 0),
      this
    );
  }
  nextNode() {
    switch (this.peek()) {
      case -1:
        return;
      case 91:
        return this.parseOptional();
      case 93:
        this.reportError("Unexpected ']' with no corresponding '['.");
      case 63:
        return this.parseWildcard();
      case 124:
        return this.parseBoundaryAssertion();
      default:
        return this.parseLiteral();
    }
  }
  get done() {
    return this.position >= this.input.length;
  }
  parseOptional() {
    const t = this.mark();
    this.next();
    const e = this.mark();
    this.done && this.reportError("Unexpected unclosed '['.", t),
      this.accept("[") &&
        this.reportError("Unexpected nested optional node.", e);
    const r = this.nextNode();
    return (
      r.kind === G.SyntaxKind.BoundaryAssertion &&
        this.reportError(
          "Boundary assertions are not supported in this position; they are only allowed at the start / end of the pattern.",
          e
        ),
      this.accept("]") || this.reportError("Unexpected unclosed '['."),
      {
        kind: G.SyntaxKind.Optional,
        childNode: r
      }
    );
  }
  parseWildcard() {
    return (
      this.next(),
      {
        kind: G.SyntaxKind.Wildcard
      }
    );
  }
  parseBoundaryAssertion() {
    return (
      this.next(),
      {
        kind: G.SyntaxKind.BoundaryAssertion
      }
    );
  }
  parseLiteral() {
    const t = [];
    for (; !this.done; ) {
      if (this.accept("[]?|")) {
        this.backup();
        break;
      }
      const e = this.next();
      if (92 === e) {
        this.done &&
          (this.backup(), this.reportError("Unexpected trailing backslash."));
        const e = this.next();
        if (!Y.includes(e)) {
          const t = String.fromCodePoint(e);
          this.backup(),
            this.reportError(
              `Cannot escape character '${t}'; the only characters that can be escaped are the following: ${J}.`
            );
        }
        t.push(e);
      } else t.push(e);
    }
    return {
      kind: G.SyntaxKind.Literal,
      chars: t
    };
  }
  reportError(t, { line: e = this.line, column: r = this.column } = {}) {
    throw new V.ParserError(t, e, r);
  }
  mark() {
    return {
      line: this.line,
      column: this.column
    };
  }
  accept(t) {
    const e = this.next(),
      r = new z.CharacterIterator(t);
    for (const t of r) if (t === e) return !0;
    return this.backup(), !1;
  }
  peek() {
    const t = this.next();
    return this.backup(), t;
  }
  next() {
    if (this.done) return -1;
    const t = this.input.charCodeAt(this.position++);
    if (((this.lastWidth = 1), 10 === t))
      return (this.lastColumn = this.column), (this.column = 1), this.line++, t;
    if (
      ((this.lastColumn = this.column++),
      !(0, F.isHighSurrogate)(t) || this.done)
    )
      return t;
    const e = this.input.charCodeAt(this.position);
    return (0, F.isLowSurrogate)(e)
      ? (this.position++,
        this.lastWidth++,
        (0, F.convertSurrogatePairToCodePoint)(t, e))
      : t;
  }
  backup() {
    (this.position -= this.lastWidth),
      (this.column = this.lastColumn),
      1 === this.lastWidth &&
        10 === this.input.charCodeAt(this.position) &&
        this.line--;
  }
}),
  Object.defineProperty(U, "__esModule", {
    value: !0
  }),
  (U.parseRawPattern = U.pattern = void 0);
const Q = new H.Parser();
(U.pattern = function (t, ...e) {
  let r = t.raw[0];
  for (const [a, n] of e.entries()) (r += n), (r += t.raw[a + 1]);
  return Q.parse(r);
}),
  (U.parseRawPattern = function (t) {
    return Q.parse(t);
  });
var X = {},
  Z = {},
  tt = {};
Object.defineProperty(tt, "__esModule", {
  value: !0
}),
  (tt.createStatefulTransformer = tt.createSimpleTransformer = void 0),
  (tt.createSimpleTransformer = function (t) {
    return {
      type: 0,
      transform: t
    };
  }),
  (tt.createStatefulTransformer = function (t) {
    return {
      type: 1,
      factory: t
    };
  });
var et = {};
Object.defineProperty(et, "__esModule", {
  value: !0
}),
  (et.CollapseDuplicatesTransformer = void 0);
(et.CollapseDuplicatesTransformer = class {
  constructor({ defaultThreshold: t, customThresholds: e }) {
    (this.remaining = -1),
      (this.lastChar = -1),
      (this.defaultThreshold = t),
      (this.customThresholds = e);
  }
  transform(t) {
    var _this$customThreshold;
    if (t === this.lastChar) return this.remaining-- > 0 ? t : void 0;
    const e =
      (_this$customThreshold = this.customThresholds.get(t)) !== null &&
      _this$customThreshold !== void 0
        ? _this$customThreshold
        : this.defaultThreshold;
    return (this.remaining = e - 1), (this.lastChar = t), e > 0 ? t : void 0;
  }
  reset() {
    (this.remaining = -1), (this.lastChar = -1);
  }
}),
  Object.defineProperty(Z, "__esModule", {
    value: !0
  }),
  (Z.collapseDuplicatesTransformer = void 0);
const rt = a,
  at = tt,
  nt = et;
Z.collapseDuplicatesTransformer = function ({
  defaultThreshold: t = 1,
  customThresholds: e = new Map()
} = {}) {
  const r = (function (t) {
    const e = new Map();
    for (const [r, a] of t) {
      if (a < 0)
        throw new RangeError("Expected all thresholds to be non-negative.");
      const t = (0, rt.getAndAssertSingleCodePoint)(r);
      e.set(t, a);
    }
    return e;
  })(e);
  return (0, at.createStatefulTransformer)(
    () =>
      new nt.CollapseDuplicatesTransformer({
        defaultThreshold: t,
        customThresholds: r
      })
  );
};
var st = {},
  dt = {};
Object.defineProperty(dt, "__esModule", {
  value: !0
}),
  (dt.remapCharactersTransformer = void 0);
const it = a,
  ot = _,
  lt = tt;
dt.remapCharactersTransformer = function (t) {
  const e = (function (t) {
    const e = new Map(),
      r = t instanceof Map ? t.entries() : Object.entries(t);
    for (const [t, a] of r) {
      const r = (0, it.getAndAssertSingleCodePoint)(t),
        n = new ot.CharacterIterator(a);
      for (const t of n) e.set(t, r);
    }
    return e;
  })(t);
  return (0, lt.createSimpleTransformer)((t) => {
    var _e$get;
    return (_e$get = e.get(t)) !== null && _e$get !== void 0 ? _e$get : t;
  });
};
var ht = {};
Object.defineProperty(ht, "__esModule", {
  value: !0
}),
  (ht.confusables = void 0),
  /**
   * Maps confusable Unicode characters to their normalized equivalents.
   *
   * @copyright
   * The data here is taken from the
   * [confusables](https://github.com/gc/confusables) library.
   *
   * ```text
   * # The MIT License (MIT)
   *
   * Copyright © 2019 https://github.com/gc/
   *
   * Permission is hereby granted, free of charge, to any person
   * obtaining a copy of this software and associated documentation
   * files (the “Software”), to deal in the Software without
   * restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the
   * Software is furnished to do so, subject to the following
   * conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
   * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
   * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
   * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
   * OTHER DEALINGS IN THE SOFTWARE.
   * ```
   */
  (ht.confusables = new Map([
    [" ", " "],
    ["0", "⓿"],
    ["1", "⓵➊⑴¹𝟏𝟙１𝟷𝟣⒈𝟭1➀₁①❶⥠"],
    ["2", "⓶⒉⑵➋ƻ²ᒿ𝟚２𝟮𝟤ᒾ𝟸Ƨ𝟐②ᴤ₂➁❷ᘝƨ"],
    ["3", "³ⳌꞫ𝟑ℨ𝟛𝟯𝟥Ꝫ➌ЗȜ⓷ӠƷ３𝟹⑶⒊ʒʓǯǮƺ𝕴ᶾзᦡ➂③₃ᶚᴣᴟ❸ҘҙӬӡӭӟӞ"],
    ["4", "➍ҶᏎ𝟜ҷ⓸ҸҹӴӵᶣ４чㄩ⁴➃₄④❹Ӌ⑷⒋"],
    ["5", "𝟱⓹➎Ƽ𝟓𝟻𝟝𝟧５➄₅⑤⁵❺ƽ⑸⒌"],
    ["6", "ⳒᏮ𝟞𝟨𝟔➏⓺Ϭϭ⁶б６ᧈ⑥➅₆❻⑹⒍"],
    ["7", "⓻𐓒➐７⁷⑦₇❼➆⑺⒎"],
    ["8", "𐌚➑⓼８𝟠𝟪৪⁸₈𝟴➇⑧❽𝟾𝟖⑻⒏"],
    ["9", "ꝮⳊ⓽➒੧৭୨９𝟫𝟿𝟗⁹₉Գ➈⑨❾⑼⒐"],
    [
      "A",
      "🄰Ꭿ𐊠𝕬𝜜𝐴ꓮᎪ𝚨ꭺ𝝖🅐Å∀🇦₳🅰𝒜𝘈𝐀𝔸дǺᗅⒶＡΑᾋᗩĂÃÅǍȀȂĀȺĄʌΛλƛᴀᴬДАልÄₐᕱªǞӒΆẠẢẦẨẬẮẰẲẴẶᾸᾹᾺΆᾼᾈᾉᾊᾌᾍᾎᾏἈἉἊἋἌἍἎἏḀȦǠӐÀÁÂẤẪ𝛢𝓐𝙰𝘼"
    ],
    [
      "a",
      "∂⍺ⓐձǟᵃᶏ⒜аɒａαȃȁคǎმäɑāɐąᾄẚạảǡầẵḁȧӑӓãåάὰάăẩằẳặᾀᾁᾂᾃᾅᾆᾰᾱᾲᾳᾴᶐᾶᾷἀἁἂἃἄἅἆἇᾇậắàáâấẫǻⱥ𝐚𝑎𝒂𝒶𝓪𝔞𝕒𝖆𝖺𝗮𝘢𝙖𝚊𝛂𝛼𝜶𝝰𝞪⍶"
    ],
    [
      "B",
      "𐌁𝑩𝕭🄱𐊡𝖡𝘽ꓐ𝗕𝘉𝜝𐊂𝚩𝐁𝛣𝝗𝐵𝙱𝔹Ᏼᏼ𝞑Ꞵ𝔅🅑฿𝓑ᗿᗾᗽ🅱ⒷＢвϐᗷƁ乃ßცჩ๖βɮБՅ๒ᙖʙᴮᵇጌḄℬΒВẞḂḆɃദᗹᗸᵝᙞᙟᙝᛒᙗᙘᴃ🇧"
    ],
    ["b", "Ꮟ𝐛𝘣𝒷𝔟𝓫𝖇𝖻𝑏𝙗𝕓𝒃𝗯𝚋♭ᑳᒈｂᖚᕹᕺⓑḃḅҍъḇƃɓƅᖯƄЬᑲþƂ⒝ЪᶀᑿᒀᒂᒁᑾьƀҌѢѣᔎ"],
    ["C", "ᏟⲤ🄲ꓚ𐊢𐌂🅲𐐕🅒☾ČÇⒸＣↃƇᑕㄈ¢८↻ĈϾՇȻᙅᶜ⒞ĆҀĊ©टƆℂℭϹС匚ḈҪʗᑖᑡᑢᑣᑤᑥⅭ𝐂𝐶𝑪𝒞𝓒𝕮𝖢𝗖𝘊𝘾ᔍ"],
    ["c", "ⲥ𐐽ꮯĉｃⓒćčċçҁƈḉȼↄсርᴄϲҫ꒝ςɽϛ𝙲ᑦ᧚𝐜𝑐𝒄𝒸𝓬𝔠𝕔𝖈𝖼𝗰𝘤𝙘𝚌₵🇨ᥴᒼⅽ"],
    ["D", "Ꭰ🄳𝔡𝖉𝔻𝗗𝘋𝙳𝐷𝓓𝐃𝑫𝕯𝖣𝔇𝘿ꭰⅅ𝒟ꓓ🅳🅓ⒹＤƉᗪƊÐԺᴅᴰↁḊĐÞⅮᗞᑯĎḌḐḒḎᗫᗬᗟᗠᶛᴆ🇩"],
    ["d", "Ꮷꓒ𝓭ᵭ₫ԃⓓｄḋďḍḑḓḏđƌɖɗᵈ⒟ԁⅾᶁԀᑺᑻᑼᑽᒄᑰᑱᶑ𝕕𝖽𝑑𝘥𝒅𝙙𝐝𝗱𝚍ⅆ𝒹ʠժ"],
    [
      "E",
      "ꭼ🄴𝙀𝔼𐊆𝚬ꓰ𝝚𝞔𝓔𝑬𝗘🅴🅔ⒺΈＥƎἝᕮƐモЄᴇᴱᵉÉ乇ЁɆꂅ€ÈℰΕЕⴹᎬĒĔĖĘĚÊËԐỀẾỄỂẼḔḖẺȄȆẸỆȨḜḘḚἘἙἚἛἜῈΈӖὲέЀϵ🇪"
    ],
    [
      "e",
      "𝑒𝓮𝕖𝖊𝘦𝗲𝚎𝙚𝒆𝔢𝖾𝐞Ҿҿⓔｅ⒠èᧉéᶒêɘἔềếễ૯ǝєεēҽɛểẽḕḗĕėëẻěȅȇẹệȩɇₑęḝḙḛ℮еԑѐӗᥱёἐἑἒἓἕℯ"
    ],
    ["F", "🄵𐊇𝔉𝘍𐊥ꓝꞘ🅵🅕𝓕ⒻＦғҒᖴƑԲϝቻḞℱϜ₣🇫Ⅎ"],
    ["f", "𝐟𝖋ⓕｆƒḟʃբᶠ⒡ſꊰʄ∱ᶂ𝘧"],
    ["G", "ꓖᏳ🄶Ꮐᏻ𝔾𝓖𝑮𝕲ꮐ𝒢𝙂𝖦𝙶𝔊𝐺𝐆🅶🅖ⒼＧɢƓʛĢᘜᴳǴĠԌĜḠĞǦǤԍ₲🇬⅁"],
    ["g", "ⓖｇǵĝḡğġǧģց૭ǥɠﻭﻮᵍ⒢ℊɡᧁ𝐠𝑔𝒈𝓰𝔤𝕘𝖌𝗀𝗴𝘨𝙜𝚐"],
    [
      "H",
      "🄷𝜢ꓧ𝘏𝐻𝝜𝖧𐋏𝗛ꮋℍᎻℌⲎ𝑯𝞖🅷🅗ዞǶԋⒽＨĤᚺḢḦȞḤḨḪĦⱧҢңҤῊΉῌἨἩἪἫἭἮἯᾘᾙᾚᾛᾜᾝᾞᾟӉӈҥΉн卄♓𝓗ℋН𝐇𝙃𝙷ʜ𝛨Η𝚮ᕼӇᴴᵸ🇭"
    ],
    ["h", "Һ⒣ђⓗｈĥḣḧȟḥḩḫẖħⱨհһከኩኪካɦℎ𝐡𝒉𝒽𝓱𝔥𝕙𝖍𝗁𝗵𝘩𝙝𝚑իʰᑋᗁɧんɥ"],
    [
      "I",
      "🄸ЇꀤᏆ🅸🅘إﺇٳأﺃٲٵⒾＩ៸ÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗェエῘῙῚΊἸἹἺἻἼἽἾⅠΪΊɪᶦᑊᥣ𝛪𝐈𝙄𝙸𝓵𝙡𝐼ᴵ𝚰𝑰🇮"
    ],
    ["i", "ⓘｉìíîĩīĭïḯỉǐȉȋịḭῐῑῒΐῖῗἰἱἲⅰⅼ∣ⵏ￨׀ا١۱ߊᛁἳἴἵɨіὶίᶖ𝔦𝚒𝝸𝗂𝐢𝕚𝖎𝗶𝘪𝙞ίⁱᵢ𝓲⒤"],
    ["J", "🄹🅹🅙ⒿＪЈʝᒍנﾌĴʆวلյʖᴊᴶﻝጋɈⱼՂๅႱįᎫȷ丿ℐℑᒘᒙᒚᒛᒴᒵᒎᒏ🇯"],
    ["j", "ⓙｊϳʲ⒥ɉĵǰјڶᶨ𝒿𝘫𝗷𝑗𝙟𝔧𝒋𝗃𝓳𝕛𝚓𝖏𝐣"],
    ["K", "𝗞🄺𝜥𝘒ꓗ𝙆𝕂Ⲕ𝔎𝛫Ꮶ𝞙𝒦🅺🅚₭ⓀＫĸḰќƘкҠκқҟӄʞҚКҡᴋᴷᵏ⒦ᛕЌጕḲΚKҜҝҞĶḴǨⱩϗӃ🇰"],
    ["k", "ⓚｋḱǩḳķḵƙⱪᶄ𝐤𝘬𝗄𝕜𝜅𝜘𝜿𝝒𝝹𝞌𝞳𝙠𝚔𝑘𝒌ϰ𝛋𝛞𝟆𝗸𝓴𝓀"],
    ["L", "🄻𐐛Ⳑ𝑳𝙻𐑃𝓛ⳑꮮᏞꓡ🅻🅛ﺈ└ⓁւＬĿᒪ乚ՆʟꓶιԼᴸˡĹረḶₗΓլĻᄂⅬℒⱢᥧᥨᒻᒶᒷᶫﺎᒺᒹᒸᒫ⎳ㄥŁⱠﺄȽ🇱"],
    ["l", "ⓛｌŀĺľḷḹļӀℓḽḻłﾚɭƚɫⱡ|Ɩ⒧ʅǀוןΙІ｜ᶩӏ𝓘𝕀𝖨𝗜𝘐𝐥𝑙𝒍𝓁𝔩𝕝𝖑𝗅𝗹𝘭𝚕𝜤𝝞ı𝚤ɩι𝛊𝜄𝜾𝞲"],
    ["M", "🄼𐌑𐊰ꓟⲘᎷ🅼🅜ⓂＭмṂ൱ᗰ州ᘻო๓♏ʍᙏᴍᴹᵐ⒨ḾМṀ௱ⅯℳΜϺᛖӍӎ𝐌𝑀𝑴𝓜𝔐𝕄𝕸𝖬𝗠𝘔𝙈𝙼𝚳𝛭𝜧𝝡𝞛🇲"],
    ["m", "₥ᵯ𝖒𝐦𝗆𝔪𝕞𝓂ⓜｍനᙢ൩ḿṁⅿϻṃጠɱ៳ᶆ𝙢𝓶𝚖𝑚𝗺᧕᧗"],
    [
      "N",
      "🄽ℕꓠ𝛮𝝢𝙽𝚴𝑵𝑁Ⲛ𝐍𝒩𝞜𝗡𝘕𝜨𝓝𝖭🅽₦🅝ЙЍⓃҋ៷ＮᴎɴƝᑎ几иՈռИהЛπᴺᶰŃ刀ክṄⁿÑПΝᴨոϖǸŇṆŅṊṈทŊӢӣӤӥћѝйᥢҊᴻ🇳"
    ],
    [
      "n",
      "ח𝒏𝓷𝙣𝑛𝖓𝔫𝗇𝚗𝗻ᥒⓝήｎǹᴒńñᾗηṅňṇɲņṋṉղຖՌƞŋ⒩ภกɳпŉлԉȠἠἡῃդᾐᾑᾒᾓᾔᾕᾖῄῆῇῂἢἣἤἥἦἧὴήበቡቢባቤብቦȵ𝛈𝜂𝜼𝝶𝞰𝕟𝘯𝐧𝓃ᶇᵰᥥ∩"
    ],
    [
      "O",
      "ꄲ🄾𐊒𝟬ꓳⲞ𐐄𐊫𐓂𝞞🅞⍥◯ⵁ⊖０⊝𝝤Ѳϴ𝚶𝜪ѺӦӨӪΌʘ𝐎ǑÒŎÓÔÕȌȎㇿ❍ⓄＯὋロ❤૦⊕ØФԾΘƠᴼᵒ⒪ŐÖₒ¤◊Φ〇ΟОՕଠഠ௦סỒỐỖỔṌȬṎŌṐṒȮȰȪỎỜỚỠỞỢỌỘǪǬǾƟⵔ߀៰⍜⎔⎕⦰⦱⦲⦳⦴⦵⦶⦷⦸⦹⦺⦻⦼⦽⦾⦿⧀⧁⧂⧃ὈὉὊὌὍ"
    ],
    [
      "o",
      "𝚘𝛐𝗈𝞼ဝⲟ𝙤၀𐐬𝔬𐓪𝓸🇴⍤○ϙ🅾𝒪𝖮𝟢𝟶𝙾𝘰𝗼𝕠𝜊𝐨𝝾𝞸ᐤⓞѳ᧐ᥲðｏఠᦞՓòөӧóºōôǒȏŏồốȍỗổõσṍȭṏὄṑṓȯȫ๏ᴏőöѻоዐǭȱ০୦٥౦೦൦๐໐οօᴑ०੦ỏơờớỡởợọộǫøǿɵծὀὁόὸόὂὃὅ"
    ],
    ["P", "🄿ꓑ𝚸𝙿𝞠𝙋ꮲⲢ𝒫𝝦𝑃𝑷𝗣𝐏𐊕𝜬𝘗𝓟𝖯𝛲Ꮲ🅟Ҏ🅿ⓅＰƤᑭ尸Ṗրφքᴘᴾᵖ⒫ṔｱקРየᴩⱣℙΡῬᑸᑶᑷᑹᑬᑮ🇵₱"],
    ["p", "ҏ℗ⓟｐṕṗƥᵽῥρрƿǷῤ⍴𝓹𝓅𝐩𝑝𝒑𝔭𝕡𝖕𝗉𝗽𝘱𝙥𝚙𝛒𝝆𝞺𝜌𝞀"],
    ["Q", "🅀🆀🅠ⓆＱℚⵕԚ𝐐𝑄𝑸𝒬𝓠𝚀𝘘𝙌𝖰𝕼𝔔𝗤🇶"],
    ["q", "ⓠｑգ⒬۹զᑫɋɊԛ𝗊𝑞𝘲𝕢𝚚𝒒𝖖𝐪𝔮𝓺𝙦"],
    ["R", "℞℟ꭱᏒ𐒴ꮢᎡꓣ🆁🅡ⓇＲᴙȒʀᖇя尺ŔЯરƦᴿዪṚɌʁℛℜℝṘŘȐṜŖṞⱤ𝐑𝑅𝑹𝓡𝕽𝖱𝗥𝘙𝙍𝚁ᚱ🇷ᴚ"],
    ["r", "ⓡｒŕṙřȑȓṛṝŗгՐɾᥬṟɍʳ⒭ɼѓᴦᶉ𝐫𝑟𝒓𝓇𝓻𝔯𝕣𝖗𝗋𝗿𝘳𝙧ᵲґᵣ"],
    ["S", "🅂ꇙ𝓢𝗦Ꮪ𝒮Ꮥ𝚂𝐒ꓢ𝖲𝔖𝙎𐊖𝕾𐐠𝘚𝕊𝑆𝑺🆂🅢ⓈＳṨŞֆՏȘˢ⒮ЅṠŠŚṤŜṦṢടᔕᔖᔢᔡᔣᔤ"],
    ["s", "ⓢꜱ𐑈ꮪｓśṥŝṡšṧʂṣṩѕşșȿᶊక𝐬𝑠𝒔𝓈𝓼𝔰𝕤𝖘𝗌𝘀𝘴𝙨𝚜ގ🇸"],
    [
      "T",
      "🅃🆃𐌕𝚻𝛵𝕋𝕿𝑻𐊱𐊗𝖳𝙏🝨𝝩𝞣𝚃𝘛𝑇ꓔ⟙𝐓Ⲧ𝗧⊤𝔗Ꭲꭲ𝒯🅣⏇⏉ⓉＴтҬҭƬイŦԵτᴛᵀｲፕϮŤ⊥ƮΤТ下ṪṬȚŢṰṮ丅丁ᐪ𝛕𝜏𝝉𝞃𝞽𝓣ㄒ🇹ጥ"
    ],
    ["t", "ⓣｔṫẗťṭțȶ੮էʇ†ţṱṯƭŧᵗ⒯ʈեƫ𝐭𝑡𝒕𝓉𝓽𝔱𝕥𝖙𝗍𝘁𝘵𝙩𝚝ナ"],
    [
      "U",
      "🅄ꓴ𐓎꒤🆄🅤ŨŬŮᑗᑘǓǕǗǙⓊＵȖᑌ凵ƱմԱꓵЦŪՄƲᙀᵁᵘ⒰ŰપÜՍÙÚÛṸṺǛỦȔƯỪỨỮỬỰỤṲŲṶṴɄᥩᑧ∪ᘮ⋃𝐔𝑈𝑼𝒰𝓤𝔘𝕌𝖀𝖴𝗨𝘜𝙐𝚄🇺"
    ],
    [
      "u",
      "ὺύⓤｕùũūừṷṹŭǖữᥙǚǜὗυΰนսʊǘǔúůᴜűųยûṻцሁüᵾᵤµʋủȕȗưứửựụṳṵʉῠῡῢΰῦῧὐὑϋύὒὓὔὕὖᥔ𝐮𝑢𝒖𝓊𝓾𝔲𝕦𝖚𝗎ᶙ"
    ],
    ["V", "🅅ꓦ𝑽𝖵𝘝Ꮩ𝚅𝙑𝐕🆅🅥ⓋＶᐯѴᵛ⒱۷ṾⅴⅤṼ٧ⴸѶᐺᐻ🇻𝓥"],
    ["v", "ሀⓥｖ𝜐𝝊ṽṿ౮งѵעᴠνטᵥѷ៴ᘁ𝙫𝚟𝛎𝜈𝝂𝝼𝞶𝘷𝘃𝓿"],
    ["W", "🅆ᏔᎳ𝑾ꓪ𝒲𝘞🆆Ⓦ🅦ｗＷẂᾧᗯᥕ山ѠຟచաЩШώщฬшᙎᵂʷ⒲ฝሠẄԜẀŴẆẈധᘺѿᙡƜ₩🇼"],
    ["w", "ẁꮃẃⓦ⍵ŵẇẅẘẉⱳὼὠὡὢὣωὤὥὦὧῲῳῴῶῷⱲѡԝᴡώᾠᾡᾢᾣᾤᾥᾦɯ𝝕𝟉𝞏"],
    [
      "X",
      "🞨🞩🞪🅇🞫🞬𐌗Ⲭꓫ𝖃𝞦𝘟𐊐𝚾𝝬𝜲Ꭓ𐌢𝖷𝑋𝕏𝔛𐊴𝗫🆇🅧❌Ⓧ𝓧ＸẊ᙭χㄨ𝒳ӾჯӼҳЖΧҲᵡˣ⒳אሸẌꊼⅩХ╳᙮ᕁᕽⅹᚷⵝ𝙓𝚇乂𝐗🇽"
    ],
    ["x", "ⓧｘхẋ×ₓ⤫⤬⨯ẍᶍ𝙭ӽ𝘹𝐱𝚡⨰ﾒ𝔁"],
    ["Y", "Ⲩ𝚈𝑌𝗬𝐘ꓬ𝒀𝜰𐊲🆈🅨ⓎＹὛƳㄚʏ⅄ϔ￥¥ՎϓγץӲЧЎሃŸɎϤΥϒҮỲÝŶỸȲẎỶỴῨῩῪΎὙὝὟΫΎӮӰҰұ𝕐🇾"],
    ["y", "🅈ᎽᎩⓨｙỳýŷỹȳẏÿỷуყẙỵƴɏᵞɣʸᶌү⒴ӳӱӯўУʎ"],
    ["Z", "🅉ꓜ𝗭𝐙☡Ꮓ𝘡🆉🅩ⓏＺẔƵ乙ẐȤᶻ⒵ŹℤΖŻŽẒⱫ🇿"],
    ["z", "ꮓⓩｚźẑżžẓẕƶȥɀᴢጊʐⱬᶎʑᙆ"]
  ])),
  Object.defineProperty(st, "__esModule", {
    value: !0
  }),
  (st.resolveConfusablesTransformer = void 0);
const ct = dt,
  pt = ht;
st.resolveConfusablesTransformer = function () {
  return (0, ct.remapCharactersTransformer)(pt.confusables);
};
var ut = {},
  gt = {};
Object.defineProperty(gt, "__esModule", {
  value: !0
}),
  (gt.dictionary = void 0),
  (gt.dictionary = new Map([
    ["a", "@4"],
    ["c", "("],
    ["e", "3"],
    ["i", "1|"],
    ["o", "0"],
    ["s", "$"]
  ])),
  Object.defineProperty(ut, "__esModule", {
    value: !0
  }),
  (ut.resolveLeetSpeakTransformer = void 0);
const ft = dt,
  mt = gt;
ut.resolveLeetSpeakTransformer = function () {
  return (0, ft.remapCharactersTransformer)(mt.dictionary);
};
var Pt = {};
Object.defineProperty(Pt, "__esModule", {
  value: !0
}),
  (Pt.toAsciiLowerCaseTransformer = void 0);
const Tt = a,
  yt = tt;
(Pt.toAsciiLowerCaseTransformer = function () {
  return (0, yt.createSimpleTransformer)((t) =>
    (0, Tt.isUpperCase)(t) ? (0, Tt.invertCaseOfAlphabeticChar)(t) : t
  );
}),
  (function (t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      (t.englishDataset =
        t.englishRecommendedTransformers =
        t.englishRecommendedWhitelistMatcherTransformers =
        t.englishRecommendedBlacklistMatcherTransformers =
          void 0);
    const e = P,
      r = U,
      a = Z,
      n = st,
      s = ut,
      d = Pt;
    (t.englishRecommendedBlacklistMatcherTransformers = [
      (0, n.resolveConfusablesTransformer)(),
      (0, s.resolveLeetSpeakTransformer)(),
      (0, d.toAsciiLowerCaseTransformer)(),
      (0, a.collapseDuplicatesTransformer)({
        defaultThreshold: 1,
        customThresholds: new Map([
          ["b", 2],
          ["e", 2],
          ["o", 2],
          ["l", 2],
          ["s", 2],
          ["g", 2]
        ])
      })
    ]),
      (t.englishRecommendedWhitelistMatcherTransformers = [
        (0, d.toAsciiLowerCaseTransformer)(),
        (0, a.collapseDuplicatesTransformer)({
          defaultThreshold: Number.POSITIVE_INFINITY,
          customThresholds: new Map([[" ", 1]])
        })
      ]),
      (t.englishRecommendedTransformers = {
        blacklistMatcherTransformers:
          t.englishRecommendedBlacklistMatcherTransformers,
        whitelistMatcherTransformers:
          t.englishRecommendedWhitelistMatcherTransformers
      }),
      /**
       * A dataset of profane English words.
       *
       * @example
       * ```typescript
       * const matcher = new RegExpMatcher({
       * 	...englishDataset.build(),
       * 	...englishRecommendedTransformers,
       * });
       * ```
       * @example
       * ```typescript
       * // Extending the data-set by adding a new word and removing an existing one.
       * const myDataset = new DataSet()
       * 	.addAll(englishDataset)
       * 	.removePhrasesIf((phrase) => phrase.metadata.originalWord === 'vagina')
       * 	.addPhrase((phrase) => phrase.addPattern(pattern`|balls|`));
       * ```
       * @copyright
       * The words are taken from the [cuss](https://github.com/words/cuss) project,
       * with some modifications.
       *
       * ```text
       * (The MIT License)
       *
       * Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com>
       *
       * Permission is hereby granted, free of charge, to any person obtaining
       * a copy of this software and associated documentation files (the
       * 'Software'), to deal in the Software without restriction, including
       * without limitation the rights to use, copy, modify, merge, publish,
       * distribute, sublicense, and/or sell copies of the Software, and to
       * permit persons to whom the Software is furnished to do so, subject to
       * the following conditions:
       *
       * The above copyright notice and this permission notice shall be
       * included in all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
       * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
       * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
       * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
       * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
       * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
       * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
       * ```
       */
      (t.englishDataset = new e.DataSet()
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "abo"
            })
            .addPattern(r.pattern`|ab[b]o[s]|`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "abeed"
            })
            .addPattern(r.pattern`ab[b]eed`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "africoon"
            })
            .addPattern(r.pattern`africoon`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "anal"
            })
            .addPattern(r.pattern`|anal`)
            .addWhitelistedTerm("analabos")
            .addWhitelistedTerm("analagous")
            .addWhitelistedTerm("analav")
            .addWhitelistedTerm("analy")
            .addWhitelistedTerm("analog")
            .addWhitelistedTerm("an al")
            .addPattern(r.pattern`danal`)
            .addPattern(r.pattern`eanal`)
            .addPattern(r.pattern`fanal`)
            .addWhitelistedTerm("fan al")
            .addPattern(r.pattern`ganal`)
            .addWhitelistedTerm("gan al")
            .addPattern(r.pattern`ianal`)
            .addWhitelistedTerm("ian al")
            .addPattern(r.pattern`janal`)
            .addWhitelistedTerm("trojan al")
            .addPattern(r.pattern`kanal`)
            .addPattern(r.pattern`lanal`)
            .addWhitelistedTerm("lan al")
            .addPattern(r.pattern`lanal`)
            .addWhitelistedTerm("lan al")
            .addPattern(r.pattern`oanal|`)
            .addPattern(r.pattern`panal`)
            .addWhitelistedTerm("pan al")
            .addPattern(r.pattern`qanal`)
            .addPattern(r.pattern`ranal`)
            .addPattern(r.pattern`sanal`)
            .addPattern(r.pattern`tanal`)
            .addWhitelistedTerm("tan al")
            .addPattern(r.pattern`uanal`)
            .addWhitelistedTerm("uan al")
            .addPattern(r.pattern`vanal`)
            .addWhitelistedTerm("van al")
            .addPattern(r.pattern`wanal`)
            .addPattern(r.pattern`xanal`)
            .addWhitelistedTerm("texan al")
            .addPattern(r.pattern`yanal`)
            .addPattern(r.pattern`zanal`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "anus"
            })
            .addPattern(r.pattern`anus`)
            .addWhitelistedTerm("an us")
            .addWhitelistedTerm("tetanus")
            .addWhitelistedTerm("uranus")
            .addWhitelistedTerm("janus")
            .addWhitelistedTerm("manus")
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "arabush"
            })
            .addPattern(r.pattern`arab[b]ush`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "arse"
            })
            .addPattern(r.pattern`|ars[s]e`)
            .addWhitelistedTerm("arsen")
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "ass"
            })
            .addPattern(r.pattern`|ass`)
            .addWhitelistedTerm("assa")
            .addWhitelistedTerm("assem")
            .addWhitelistedTerm("assen")
            .addWhitelistedTerm("asser")
            .addWhitelistedTerm("asset")
            .addWhitelistedTerm("assev")
            .addWhitelistedTerm("assi")
            .addWhitelistedTerm("assoc")
            .addWhitelistedTerm("assoi")
            .addWhitelistedTerm("assu")
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "bastard"
            })
            .addPattern(r.pattern`bas[s]tard`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "bestiality"
            })
            .addPattern(r.pattern`be[e][a]s[s]tial`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "bitch"
            })
            .addPattern(r.pattern`bitch`)
            .addPattern(r.pattern`bich|`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "blowjob"
            })
            .addPattern(r.pattern`b[b]l[l][o]wj[o]b`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "bollocks"
            })
            .addPattern(r.pattern`bol[l]ock`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "boob"
            })
            .addPattern(r.pattern`boob`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "boonga"
            })
            .addPattern(r.pattern`boonga`)
            .addWhitelistedTerm("baboon ga")
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "buttplug"
            })
            .addPattern(r.pattern`buttplug`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "chingchong"
            })
            .addPattern(r.pattern`chingchong`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "chink"
            })
            .addPattern(r.pattern`chink`)
            .addWhitelistedTerm("chin k")
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "cock"
            })
            .addPattern(r.pattern`|cock|`)
            .addPattern(r.pattern`|cocks`)
            .addPattern(r.pattern`|cockp`)
            .addPattern(r.pattern`|cocke[e]|`)
            .addWhitelistedTerm("cockney")
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "cuck"
            })
            .addPattern(r.pattern`cuck`)
            .addWhitelistedTerm("cuckoo")
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "cum"
            })
            .addPattern(r.pattern`|cum`)
            .addWhitelistedTerm("cumu")
            .addWhitelistedTerm("cumb")
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "cunt"
            })
            .addPattern(r.pattern`|cunt`)
            .addPattern(r.pattern`cunt|`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "deepthroat"
            })
            .addPattern(r.pattern`deepthro[o]at`)
            .addPattern(r.pattern`deepthro[o]t`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "dick"
            })
            .addPattern(r.pattern`d?ck|`)
            .addPattern(r.pattern`d?cke[e]s|`)
            .addPattern(r.pattern`d?cks|`)
            .addPattern(r.pattern`|dck|`)
            .addPattern(r.pattern`dick`)
            .addWhitelistedTerm("benedick")
            .addWhitelistedTerm("dickens")
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "dildo"
            })
            .addPattern(r.pattern`dildo`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "doggystyle"
            })
            .addPattern(r.pattern`d[o]g[g]ys[s]t[y]l[l]`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "double penetration"
            })
            .addPattern(r.pattern`double penetra`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "dyke"
            })
            .addPattern(r.pattern`dyke`)
            .addWhitelistedTerm("van dyke")
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "ejaculate"
            })
            .addPattern(r.pattern`e[e]jacul`)
            .addPattern(r.pattern`e[e]jakul`)
            .addPattern(r.pattern`e[e]acul[l]ate`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "fag"
            })
            .addPattern(r.pattern`|fag`)
            .addPattern(r.pattern`fggot`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "felch"
            })
            .addPattern(r.pattern`fe[e]l[l]ch`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "fellatio"
            })
            .addPattern(r.pattern`f[e][e]llat`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "finger bang"
            })
            .addPattern(r.pattern`fingerbang`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "fisting"
            })
            .addPattern(r.pattern`fistin`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "fuck"
            })
            .addPattern(r.pattern`f[?]ck`)
            .addPattern(r.pattern`|fk`)
            .addPattern(r.pattern`|fu|`)
            .addPattern(r.pattern`|fuk`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "gangbang"
            })
            .addPattern(r.pattern`g[?]ngbang`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "handjob"
            })
            .addPattern(r.pattern`h[?]ndjob`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "hentai"
            })
            .addPattern(r.pattern`h[e][e]ntai`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "hooker"
            })
            .addPattern(r.pattern`hooker`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "incest"
            })
            .addPattern(r.pattern`incest`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "jerk off"
            })
            .addPattern(r.pattern`jerkoff`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "jizz"
            })
            .addPattern(r.pattern`jizz`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "kike"
            })
            .addPattern(r.pattern`kike`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "lubejob"
            })
            .addPattern(r.pattern`lubejob`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "masturbate"
            })
            .addPattern(r.pattern`m[?]sturbate`)
            .addPattern(r.pattern`masterbate`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "negro"
            })
            .addPattern(r.pattern`negro`)
            .addWhitelistedTerm("montenegro")
            .addWhitelistedTerm("negron")
            .addWhitelistedTerm("stoneground")
            .addWhitelistedTerm("winegrow")
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "nigger"
            })
            .addPattern(r.pattern`n[i]gger`)
            .addPattern(r.pattern`n[i]gga`)
            .addPattern(r.pattern`|nig|`)
            .addPattern(r.pattern`|nigs|`)
            .addWhitelistedTerm("snigger")
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "orgasm"
            })
            .addPattern(r.pattern`[or]gasm`)
            .addWhitelistedTerm("gasma")
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "orgy"
            })
            .addPattern(r.pattern`orgy`)
            .addPattern(r.pattern`orgies`)
            .addWhitelistedTerm("porgy")
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "penis"
            })
            .addPattern(r.pattern`pe[e]nis`)
            .addPattern(r.pattern`|pnis`)
            .addWhitelistedTerm("pen is")
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "piss"
            })
            .addPattern(r.pattern`|piss`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "porn"
            })
            .addPattern(r.pattern`|prn|`)
            .addPattern(r.pattern`porn`)
            .addWhitelistedTerm("p orna")
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "prick"
            })
            .addPattern(r.pattern`|prick[s]|`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "pussy"
            })
            .addPattern(r.pattern`p[u]ssy`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "rape"
            })
            .addPattern(r.pattern`|rape`)
            .addPattern(r.pattern`|rapis[s]t`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "retard"
            })
            .addPattern(r.pattern`retard`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "scat"
            })
            .addPattern(r.pattern`|s[s]cat|`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "semen"
            })
            .addPattern(r.pattern`|s[s]e[e]me[e]n`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "sex"
            })
            .addPattern(r.pattern`|s[s]e[e]x|`)
            .addPattern(r.pattern`|s[s]e[e]xy|`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "shit"
            })
            .addPattern(r.pattern`shit`)
            .addWhitelistedTerm("s hit")
            .addWhitelistedTerm("sh it")
            .addWhitelistedTerm("shi t")
            .addWhitelistedTerm("shitake")
            .addWhitelistedTerm("mishit")
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "slut"
            })
            .addPattern(r.pattern`s[s]lut`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "spastic"
            })
            .addPattern(r.pattern`|spastic`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "tit"
            })
            .addPattern(r.pattern`|tit|`)
            .addPattern(r.pattern`|tits|`)
            .addPattern(r.pattern`|titt`)
            .addPattern(r.pattern`|tiddies`)
            .addPattern(r.pattern`|tities`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "tranny"
            })
            .addPattern(r.pattern`tranny`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "turd"
            })
            .addPattern(r.pattern`|turd`)
            .addWhitelistedTerm("turducken")
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "twat"
            })
            .addPattern(r.pattern`|twat`)
            .addWhitelistedTerm("twattle")
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "vagina"
            })
            .addPattern(r.pattern`vagina`)
            .addPattern(r.pattern`|v[?]gina`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "wank"
            })
            .addPattern(r.pattern`|wank`)
        )
        .addPhrase((t) =>
          t
            .setMetadata({
              originalWord: "whore"
            })
            .addPattern(r.pattern`|wh[o]re|`)
            .addPattern(r.pattern`|who[o]res[s]|`)
            .addWhitelistedTerm("who're")
        ));
  })(X);
var Wt = {};
Object.defineProperty(Wt, "__esModule", {
  value: !0
}),
  (Wt.skipNonAlphabeticTransformer = void 0);
const Mt = a,
  bt = tt;
var vt, Ct, St;
(Wt.skipNonAlphabeticTransformer = function () {
  return (0, bt.createSimpleTransformer)((t) =>
    (0, Mt.isAlphabetic)(t) ? t : void 0
  );
}),
  (vt = e),
  (Ct =
    (t && t.__createBinding) ||
    (Object.create
      ? function (t, e, r, a) {
          void 0 === a && (a = r);
          var n = Object.getOwnPropertyDescriptor(e, r);
          (n && !("get" in n ? !e.__esModule : n.writable || n.configurable)) ||
            (n = {
              enumerable: !0,
              get: function () {
                return e[r];
              }
            }),
            Object.defineProperty(t, a, n);
        }
      : function (t, e, r, a) {
          void 0 === a && (a = r), (t[a] = e[r]);
        })),
  (St =
    (t && t.__exportStar) ||
    function (t, e) {
      for (var r in t)
        "default" === r ||
          Object.prototype.hasOwnProperty.call(e, r) ||
          Ct(e, t, r);
    }),
  Object.defineProperty(vt, "__esModule", {
    value: !0
  }),
  (vt.version = void 0),
  St(r, vt),
  St(c, vt),
  St(P, vt),
  St(b, vt),
  St(T, vt),
  St(p, vt),
  St(N, vt),
  St(C, vt),
  St($, vt),
  St(U, vt),
  St(X, vt),
  St(Z, vt),
  St(dt, vt),
  St(st, vt),
  St(ut, vt),
  St(Wt, vt),
  St(Pt, vt),
  (vt.version = "0.1.0");
const kt = e.DataSet,
  wt = e.ParserError,
  xt = e.PhraseBuilder,
  _t = e.RegExpMatcher,
  It = e.SyntaxKind,
  At = e.TextCensor,
  jt = e.assignIncrementingIds,
  Ot = e.asteriskCensorStrategy,
  Et = e.collapseDuplicatesTransformer,
  Lt = e.compareMatchByPositionAndId,
  Bt = e.englishDataset,
  Rt = e.englishRecommendedBlacklistMatcherTransformers,
  Dt = e.englishRecommendedTransformers,
  Kt = e.englishRecommendedWhitelistMatcherTransformers,
  Nt = e.fixedCharCensorStrategy,
  $t = e.fixedPhraseCensorStrategy,
  qt = e.grawlixCensorStrategy,
  Ut = e.keepEndCensorStrategy,
  Ht = e.keepStartCensorStrategy,
  Ft = e.parseRawPattern,
  zt = e.pattern,
  Gt = e.randomCharFromSetCensorStrategy,
  Vt = e.remapCharactersTransformer,
  Yt = e.resolveConfusablesTransformer,
  Jt = e.resolveLeetSpeakTransformer,
  Qt = e.skipNonAlphabeticTransformer,
  Xt = e.toAsciiLowerCaseTransformer,
  Zt = e.version;

const obscenity = e;


// Example Usage
const RegExpMatcher = obscenity.RegExpMatcher;
const TextCensor = obscenity.TextCensor;
const englishDataset = obscenity.englishDataset;
const englishRecommendedTransformers = obscenity.englishRecommendedTransformers;

const matcher = new RegExpMatcher({
    ...englishDataset.build(),
    ...englishRecommendedTransformers,
});

const asteriskStrategy = (ctx) => '*'.repeat(ctx.matchLength);
const censor = new TextCensor().setStrategy(asteriskStrategy);


function hasBadWords(input) {
    const matches = matcher.getAllMatches(input);

    return matches.length > 0;
}

function censorBadWords(input) {
    const matches = matcher.getAllMatches(input);
    return censor.applyTo(input, matches);
}

window.hasBadWords = hasBadWords;
window.censorBadWords = censorBadWords;




};
gdjs.evtsExt__InterfaceFunctions__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__InterfaceFunctions__onFirstSceneLoaded.userFunc0x13cafc0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__InterfaceFunctions__onFirstSceneLoaded.userFunc0x13d2118(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InterfaceFunctions__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__InterfaceFunctions__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__InterfaceFunctions__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__InterfaceFunctions__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__InterfaceFunctions__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__InterfaceFunctions__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__InterfaceFunctions__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
