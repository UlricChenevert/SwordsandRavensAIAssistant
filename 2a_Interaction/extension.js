"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/knockout/build/output/knockout-latest.js
  var require_knockout_latest = __commonJS({
    "node_modules/knockout/build/output/knockout-latest.js"(exports, module) {
      (function() {
        (function(p) {
          var z2 = this || globalThis, v2 = z2.document, R = z2.navigator, w2 = z2.jQuery, G2 = z2.JSON;
          w2 || "undefined" === typeof jQuery || (w2 = jQuery);
          (function(p2) {
            "function" === typeof define && define.amd ? define(["exports", "require"], p2) : "object" === typeof exports && "object" === typeof module ? p2(module.exports || exports) : p2(z2.ko = {});
          })(function(S, T2) {
            function K2(a2, c) {
              return null === a2 || typeof a2 in X2 ? a2 === c : false;
            }
            function Y(b2, c) {
              var d;
              return function() {
                d || (d = a.a.setTimeout(function() {
                  d = p;
                  b2();
                }, c));
              };
            }
            function Z(b2, c) {
              var d;
              return function() {
                clearTimeout(d);
                d = a.a.setTimeout(b2, c);
              };
            }
            function aa(a2, c) {
              c && "change" !== c ? "beforeChange" === c ? this.pc(a2) : this.ib(a2, c) : this.qc(a2);
            }
            function ba(a2, c) {
              null !== c && c.s && c.s();
            }
            function ca(a2, c) {
              var d = this.qd, e = d[t];
              e.ta || (this.Rb && this.ob[c] ? (d.uc(c, a2, this.ob[c]), this.ob[c] = null, --this.Rb) : e.I[c] || d.uc(c, a2, e.K ? { da: a2 } : d.$c(a2)), a2.La && a2.gd());
            }
            var a = "undefined" !== typeof S ? S : {};
            a.b = function(b2, c) {
              for (var d = b2.split("."), e = a, f = 0; f < d.length - 1; f++) e = e[d[f]];
              e[d[d.length - 1]] = c;
            };
            a.L = function(a2, c, d) {
              a2[c] = d;
            };
            a.version = "3.5.3";
            a.b(
              "version",
              a.version
            );
            a.options = { deferUpdates: false, useOnlyNativeEvents: false, foreachHidesDestroyed: false };
            var H2;
            if ("undefined" !== typeof trustedTypes) try {
              H2 = trustedTypes.createPolicy("knockout", { createHTML: function(a2) {
                return a2;
              }, createScript: function(a2) {
                return a2;
              } });
            } catch (fa) {
            }
            a.a = (function() {
              function b2(a2, b3) {
                for (var c2 in a2) f.call(a2, c2) && b3(c2, a2[c2]);
              }
              function c(a2, b3) {
                if (b3) for (var c2 in b3) f.call(b3, c2) && (a2[c2] = b3[c2]);
                return a2;
              }
              function d(a2, b3) {
                a2.__proto__ = b3;
                return a2;
              }
              function e(b3, c2, e2, d2) {
                var l2 = b3[c2].match(n) || [];
                a.a.D(e2.match(n), function(b4) {
                  a.a.Pa(
                    l2,
                    b4,
                    d2
                  );
                });
                b3[c2] = l2.join(" ");
              }
              var f = Object.prototype.hasOwnProperty, g2 = { __proto__: [] } instanceof Array, h = "function" === typeof Symbol, m2 = {}, k2 = {};
              m2[R && /Firefox\/2/i.test(R.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];
              m2.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
              b2(m2, function(a2, b3) {
                if (b3.length) for (var c2 = 0, e2 = b3.length; c2 < e2; c2++) k2[b3[c2]] = a2;
              });
              var l = { propertychange: true }, q2;
              H2 || (q2 = v2 && (function() {
                for (var a2 = 3, b3 = v2.createElement("div"), c2 = b3.getElementsByTagName("i"); b3.innerHTML = "<!--[if gt IE " + ++a2 + "]><i></i><![endif]-->", c2[0]; ) ;
                return 4 < a2 ? a2 : p;
              })());
              var n = /\S+/g, r;
              return {
                Jc: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                D: function(a2, b3, c2) {
                  for (var e2 = 0, d2 = a2.length; e2 < d2; e2++) b3.call(c2, a2[e2], e2, a2);
                },
                A: "function" == typeof Array.prototype.indexOf ? function(a2, b3) {
                  return Array.prototype.indexOf.call(a2, b3);
                } : function(a2, b3) {
                  for (var c2 = 0, e2 = a2.length; c2 < e2; c2++) if (a2[c2] === b3) return c2;
                  return -1;
                },
                Mb: function(a2, b3, c2) {
                  for (var e2 = 0, d2 = a2.length; e2 < d2; e2++) if (b3.call(
                    c2,
                    a2[e2],
                    e2,
                    a2
                  )) return a2[e2];
                  return p;
                },
                Ra: function(b3, c2) {
                  var e2 = a.a.A(b3, c2);
                  0 < e2 ? b3.splice(e2, 1) : 0 === e2 && b3.shift();
                },
                wc: function(b3) {
                  var c2 = [];
                  b3 && a.a.D(b3, function(b4) {
                    0 > a.a.A(c2, b4) && c2.push(b4);
                  });
                  return c2;
                },
                Nb: function(a2, b3, c2) {
                  var e2 = [];
                  if (a2) for (var d2 = 0, l2 = a2.length; d2 < l2; d2++) e2.push(b3.call(c2, a2[d2], d2));
                  return e2;
                },
                lb: function(a2, b3, c2) {
                  var e2 = [];
                  if (a2) for (var d2 = 0, l2 = a2.length; d2 < l2; d2++) b3.call(c2, a2[d2], d2) && e2.push(a2[d2]);
                  return e2;
                },
                Ob: function(a2, b3) {
                  if (b3 instanceof Array) a2.push.apply(a2, b3);
                  else for (var c2 = 0, e2 = b3.length; c2 < e2; c2++) a2.push(b3[c2]);
                  return a2;
                },
                Pa: function(b3, c2, e2) {
                  var d2 = a.a.A(a.a.bc(b3), c2);
                  0 > d2 ? e2 && b3.push(c2) : e2 || b3.splice(d2, 1);
                },
                Ca: g2,
                extend: c,
                setPrototypeOf: d,
                Bb: g2 ? d : c,
                P: b2,
                Ia: function(a2, b3, c2) {
                  if (!a2) return a2;
                  var e2 = {}, d2;
                  for (d2 in a2) f.call(a2, d2) && (e2[d2] = b3.call(c2, a2[d2], d2, a2));
                  return e2;
                },
                Ub: function(b3) {
                  for (; b3.firstChild; ) a.removeNode(b3.firstChild);
                },
                Zb: function(b3) {
                  b3 = a.a.la(b3);
                  for (var c2 = (b3[0] && b3[0].ownerDocument || v2).createElement("div"), e2 = 0, d2 = b3.length; e2 < d2; e2++) c2.appendChild(a.pa(b3[e2]));
                  return c2;
                },
                Da: function(b3, c2) {
                  for (var e2 = 0, d2 = b3.length, l2 = []; e2 < d2; e2++) {
                    var k3 = b3[e2].cloneNode(true);
                    l2.push(c2 ? a.pa(k3) : k3);
                  }
                  return l2;
                },
                xa: function(b3, c2) {
                  a.a.Ub(b3);
                  if (c2) for (var e2 = 0, d2 = c2.length; e2 < d2; e2++) b3.appendChild(c2[e2]);
                },
                Xc: function(b3, c2) {
                  var e2 = b3.nodeType ? [b3] : b3;
                  if (0 < e2.length) {
                    for (var d2 = e2[0], l2 = d2.parentNode, k3 = 0, f2 = c2.length; k3 < f2; k3++) l2.insertBefore(c2[k3], d2);
                    k3 = 0;
                    for (f2 = e2.length; k3 < f2; k3++) a.removeNode(e2[k3]);
                  }
                },
                Wa: function(a2, b3) {
                  if (a2.length) {
                    for (b3 = 8 === b3.nodeType && b3.parentNode || b3; a2.length && a2[0].parentNode !== b3; ) a2.splice(0, 1);
                    for (; 1 < a2.length && a2[a2.length - 1].parentNode !== b3; ) a2.length--;
                    if (1 < a2.length) {
                      var c2 = a2[0], e2 = a2[a2.length - 1];
                      for (a2.length = 0; c2 !== e2; ) a2.push(c2), c2 = c2.nextSibling;
                      a2.push(e2);
                    }
                  }
                  return a2;
                },
                Zc: function(a2, b3) {
                  7 > q2 ? a2.setAttribute("selected", b3) : a2.selected = b3;
                },
                Eb: function(a2) {
                  return null === a2 || a2 === p ? "" : a2.trim ? a2.trim() : a2.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
                },
                Ud: function(a2, b3) {
                  a2 = a2 || "";
                  return b3.length > a2.length ? false : a2.substring(0, b3.length) === b3;
                },
                vd: function(a2, b3) {
                  if (a2 === b3) return true;
                  if (11 === a2.nodeType) return false;
                  if (b3.contains) return b3.contains(1 !== a2.nodeType ? a2.parentNode : a2);
                  if (b3.compareDocumentPosition) return 16 == (b3.compareDocumentPosition(a2) & 16);
                  for (; a2 && a2 != b3; ) a2 = a2.parentNode;
                  return !!a2;
                },
                Tb: function(b3) {
                  return a.a.vd(b3, b3.ownerDocument.documentElement);
                },
                kd: function(b3) {
                  return !!a.a.Mb(b3, a.a.Tb);
                },
                R: function(a2) {
                  return a2 && a2.tagName && a2.tagName.toLowerCase();
                },
                Ac: function(b3) {
                  return a.onError ? function() {
                    try {
                      return b3.apply(this, arguments);
                    } catch (c2) {
                      throw a.onError && a.onError(c2), c2;
                    }
                  } : b3;
                },
                setTimeout: function(b3, c2) {
                  return setTimeout(a.a.Ac(b3), c2);
                },
                Gc: function(b3) {
                  setTimeout(function() {
                    a.onError && a.onError(b3);
                    throw b3;
                  }, 0);
                },
                B: function(b3, c2, e2) {
                  var d2 = a.a.Ac(e2);
                  e2 = l[c2];
                  if (!a.options.useOnlyNativeEvents && !e2 && w2) r || (r = "function" == typeof w2(b3).on ? "on" : "bind"), w2(b3)[r](c2, d2);
                  else if (!e2 && "function" == typeof b3.addEventListener) b3.addEventListener(c2, d2, false), a.a.J.oa(b3, function() {
                    b3.removeEventListener(c2, d2);
                  });
                  else if ("undefined" != typeof b3.attachEvent) {
                    var k3 = function(a2) {
                      d2.call(b3, a2);
                    }, f2 = "on" + c2;
                    b3.attachEvent(f2, k3);
                    a.a.J.oa(b3, function() {
                      b3.detachEvent(f2, k3);
                    });
                  }
                },
                Gb: function(b3, c2) {
                  if (!b3 || !b3.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
                  var e2;
                  "input" === a.a.R(b3) && b3.type && "click" == c2.toLowerCase() ? (e2 = b3.type, e2 = "checkbox" == e2 || "radio" == e2) : e2 = false;
                  if (a.options.useOnlyNativeEvents || !w2 || e2) if ("function" == typeof v2.createEvent) if ("function" == typeof b3.dispatchEvent) e2 = v2.createEvent(k2[c2] || "HTMLEvents"), e2.initEvent(c2, true, true, z2, 0, 0, 0, 0, 0, false, false, false, false, 0, b3), b3.dispatchEvent(e2);
                  else throw Error("The supplied element doesn't support dispatchEvent");
                  else if (e2 && b3.click) b3.click();
                  else if ("undefined" != typeof b3.fireEvent) b3.fireEvent("on" + c2);
                  else throw Error("Browser doesn't support triggering events");
                  else w2(b3).trigger(c2);
                },
                f: function(b3) {
                  return a.O(b3) ? b3() : b3;
                },
                bc: function(b3) {
                  return a.O(b3) ? b3.v() : b3;
                },
                Fb: function(b3, c2, d2) {
                  var l2;
                  c2 && ("object" === typeof b3.classList ? (l2 = b3.classList[d2 ? "add" : "remove"], a.a.D(c2.match(n), function(a2) {
                    l2.call(b3.classList, a2);
                  })) : "string" === typeof b3.className.baseVal ? e(b3.className, "baseVal", c2, d2) : e(b3, "className", c2, d2));
                },
                Cb: function(b3, c2) {
                  var e2 = a.a.f(c2);
                  if (null === e2 || e2 === p) e2 = "";
                  var d2 = a.h.firstChild(b3);
                  !d2 || 3 != d2.nodeType || a.h.nextSibling(d2) ? a.h.xa(b3, [b3.ownerDocument.createTextNode(e2)]) : d2.data = e2;
                  a.a.Ad(b3);
                },
                Yc: function(a2, b3) {
                  a2.name = b3;
                  if (7 >= q2) try {
                    var c2 = a2.name.replace(/[&<>'"]/g, function(a3) {
                      return "&#" + a3.charCodeAt(0) + ";";
                    });
                    a2.mergeAttributes(v2.createElement("<input name='" + c2 + "'/>"), false);
                  } catch (e2) {
                  }
                },
                Ad: function(a2) {
                  9 <= q2 && (a2 = 1 == a2.nodeType ? a2 : a2.parentNode, a2.style && (a2.style.zoom = a2.style.zoom));
                },
                wd: function(a2) {
                  if (q2) {
                    var b3 = a2.style.width;
                    a2.style.width = 0;
                    a2.style.width = b3;
                  }
                },
                Pd: function(b3, c2) {
                  b3 = a.a.f(b3);
                  c2 = a.a.f(c2);
                  for (var e2 = [], d2 = b3; d2 <= c2; d2++) e2.push(d2);
                  return e2;
                },
                la: function(a2) {
                  for (var b3 = [], c2 = 0, e2 = a2.length; c2 < e2; c2++) b3.push(a2[c2]);
                  return b3;
                },
                Ea: function(a2) {
                  return h ? Symbol(a2) : a2;
                },
                Zd: 6 === q2,
                $d: 7 === q2,
                W: q2,
                Lc: function(b3, c2) {
                  for (var e2 = a.a.la(b3.getElementsByTagName("input")).concat(a.a.la(b3.getElementsByTagName("textarea"))), d2 = "string" == typeof c2 ? function(a2) {
                    return a2.name === c2;
                  } : function(a2) {
                    return c2.test(a2.name);
                  }, l2 = [], k3 = e2.length - 1; 0 <= k3; k3--) d2(e2[k3]) && l2.push(e2[k3]);
                  return l2;
                },
                Nd: function(b3) {
                  return "string" == typeof b3 && (b3 = a.a.Eb(b3)) ? G2 && G2.parse ? G2.parse(b3) : new Function("return " + b3)() : null;
                },
                hc: function(b3, c2, e2) {
                  if (!G2 || !G2.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                  return G2.stringify(a.a.f(b3), c2, e2);
                },
                Od: function(c2, e2, d2) {
                  d2 = d2 || {};
                  var l2 = d2.params || {}, k3 = d2.includeFields || this.Jc, f2 = c2;
                  if ("object" == typeof c2 && "form" === a.a.R(c2)) for (var f2 = c2.action, h2 = k3.length - 1; 0 <= h2; h2--) for (var g3 = a.a.Lc(c2, k3[h2]), m3 = g3.length - 1; 0 <= m3; m3--) l2[g3[m3].name] = g3[m3].value;
                  e2 = a.a.f(e2);
                  var n2 = v2.createElement("form");
                  n2.style.display = "none";
                  n2.action = f2;
                  n2.method = "post";
                  for (var q3 in e2) c2 = v2.createElement("input"), c2.type = "hidden", c2.name = q3, c2.value = a.a.hc(a.a.f(e2[q3])), n2.appendChild(c2);
                  b2(l2, function(a2, b3) {
                    var c3 = v2.createElement("input");
                    c3.type = "hidden";
                    c3.name = a2;
                    c3.value = b3;
                    n2.appendChild(c3);
                  });
                  v2.body.appendChild(n2);
                  d2.submitter ? d2.submitter(n2) : n2.submit();
                  setTimeout(function() {
                    n2.parentNode.removeChild(n2);
                  }, 0);
                }
              };
            })();
            a.b("utils", a.a);
            a.b("utils.arrayForEach", a.a.D);
            a.b("utils.arrayFirst", a.a.Mb);
            a.b("utils.arrayFilter", a.a.lb);
            a.b("utils.arrayGetDistinctValues", a.a.wc);
            a.b("utils.arrayIndexOf", a.a.A);
            a.b("utils.arrayMap", a.a.Nb);
            a.b("utils.arrayPushAll", a.a.Ob);
            a.b("utils.arrayRemoveItem", a.a.Ra);
            a.b("utils.cloneNodes", a.a.Da);
            a.b(
              "utils.createSymbolOrString",
              a.a.Ea
            );
            a.b("utils.extend", a.a.extend);
            a.b("utils.fieldsIncludedWithJsonPost", a.a.Jc);
            a.b("utils.getFormFields", a.a.Lc);
            a.b("utils.objectMap", a.a.Ia);
            a.b("utils.peekObservable", a.a.bc);
            a.b("utils.postJson", a.a.Od);
            a.b("utils.parseJson", a.a.Nd);
            a.b("utils.registerEventHandler", a.a.B);
            a.b("utils.stringifyJson", a.a.hc);
            a.b("utils.range", a.a.Pd);
            a.b("utils.toggleDomNodeCssClass", a.a.Fb);
            a.b("utils.triggerEvent", a.a.Gb);
            a.b("utils.unwrapObservable", a.a.f);
            a.b("utils.objectForEach", a.a.P);
            a.b(
              "utils.addOrRemoveItem",
              a.a.Pa
            );
            a.b("utils.setTextContent", a.a.Cb);
            a.b("unwrap", a.a.f);
            Function.prototype.bind || (Function.prototype.bind = function(a2) {
              var c = this;
              if (1 === arguments.length) return function() {
                return c.apply(a2, arguments);
              };
              var d = Array.prototype.slice.call(arguments, 1);
              return function() {
                var e = d.slice(0);
                e.push.apply(e, arguments);
                return c.apply(a2, e);
              };
            });
            a.a.g = new function() {
              var b2 = 0, c = "__ko__" + (/* @__PURE__ */ new Date()).getTime(), d = {}, e, f;
              a.a.W ? (e = function(a2, e2) {
                var f2 = a2[c];
                if (!f2 || "null" === f2 || !d[f2]) {
                  if (!e2) return p;
                  f2 = a2[c] = "ko" + b2++;
                  d[f2] = {};
                }
                return d[f2];
              }, f = function(a2) {
                var b3 = a2[c];
                return b3 ? (delete d[b3], a2[c] = null, true) : false;
              }) : (e = function(a2, b3) {
                var e2 = a2[c];
                !e2 && b3 && (e2 = a2[c] = {});
                return e2;
              }, f = function(a2) {
                return a2[c] ? (delete a2[c], true) : false;
              });
              return { get: function(a2, b3) {
                var c2 = e(a2, false);
                return c2 && c2[b3];
              }, set: function(a2, b3, c2) {
                (a2 = e(a2, c2 !== p)) && (a2[b3] = c2);
              }, Vb: function(a2, b3, c2) {
                a2 = e(a2, true);
                return a2[b3] || (a2[b3] = c2);
              }, clear: f, Z: function() {
                return b2++ + c;
              } };
            }();
            a.b("utils.domData", a.a.g);
            a.b("utils.domData.clear", a.a.g.clear);
            a.a.J = new function() {
              function b2(b3, c2) {
                var d2 = a.a.g.get(b3, e);
                d2 === p && c2 && (d2 = [], a.a.g.set(b3, e, d2));
                return d2;
              }
              function c(c2) {
                var e2 = b2(c2, false);
                if (e2) for (var e2 = e2.slice(0), k2 = 0; k2 < e2.length; k2++) e2[k2](c2);
                a.a.g.clear(c2);
                a.a.J.cleanExternalData(c2);
                g2[c2.nodeType] && d(c2.childNodes, true);
              }
              function d(b3, e2) {
                for (var d2 = [], l, f2 = 0; f2 < b3.length; f2++) if (!e2 || 8 === b3[f2].nodeType) {
                  if (c(d2[d2.length] = l = b3[f2]), b3[f2] !== l) for (; f2-- && -1 == a.a.A(d2, b3[f2]); ) ;
                }
              }
              var e = a.a.g.Z(), f = { 1: true, 8: true, 9: true }, g2 = { 1: true, 9: true };
              return { oa: function(a2, c2) {
                if ("function" != typeof c2) throw Error("Callback must be a function");
                b2(a2, true).push(c2);
              }, zb: function(c2, d2) {
                var f2 = b2(c2, false);
                f2 && (a.a.Ra(f2, d2), 0 == f2.length && a.a.g.set(c2, e, p));
              }, pa: function(b3) {
                a.u.G(function() {
                  f[b3.nodeType] && (c(b3), g2[b3.nodeType] && d(b3.getElementsByTagName("*")));
                });
                return b3;
              }, removeNode: function(b3) {
                a.pa(b3);
                b3.parentNode && b3.parentNode.removeChild(b3);
              }, cleanExternalData: function(a2) {
                w2 && "function" == typeof w2.cleanData && w2.cleanData([a2]);
              } };
            }();
            a.pa = a.a.J.pa;
            a.removeNode = a.a.J.removeNode;
            a.b("cleanNode", a.pa);
            a.b("removeNode", a.removeNode);
            a.b("utils.domNodeDisposal", a.a.J);
            a.b(
              "utils.domNodeDisposal.addDisposeCallback",
              a.a.J.oa
            );
            a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.J.zb);
            (function() {
              var b2 = [0, "", ""], c = [1, "<table>", "</table>"], d = [3, "<table><tbody><tr>", "</tr></tbody></table>"], e = [1, "<select multiple='multiple'>", "</select>"], f = { thead: c, tbody: c, tfoot: c, tr: [2, "<table><tbody>", "</tbody></table>"], td: d, th: d, option: e, optgroup: e }, g2 = 8 >= a.a.W;
              a.a.wa = function(c2, e2) {
                var d2;
                if (w2) if (w2.parseHTML) d2 = w2.parseHTML(c2, e2) || [];
                else {
                  if ((d2 = w2.clean([c2], e2)) && d2[0]) {
                    for (var l = d2[0]; l.parentNode && 11 !== l.parentNode.nodeType; ) l = l.parentNode;
                    l.parentNode && l.parentNode.removeChild(l);
                  }
                }
                else {
                  (d2 = e2) || (d2 = v2);
                  var l = d2.parentWindow || d2.defaultView || z2, q2 = a.a.Eb(c2).toLowerCase(), n = d2.createElement("div"), r;
                  r = (q2 = q2.match(/^(?:\x3c!--.*?--\x3e\s*?)*?<([a-z]+)[\s>]/)) && f[q2[1]] || b2;
                  q2 = r[0];
                  r = "ignored<div>" + r[1] + c2 + r[2] + "</div>";
                  "function" == typeof l.innerShiv ? n.appendChild(l.innerShiv(r)) : (g2 && d2.body.appendChild(n), n.innerHTML = H2 ? H2.createHTML(r) : r, g2 && n.parentNode.removeChild(n));
                  for (; q2--; ) n = n.lastChild;
                  d2 = a.a.la(n.lastChild.childNodes);
                }
                return d2;
              };
              a.a.Md = function(b3, c2) {
                var e2 = a.a.wa(b3, c2);
                return e2.length && e2[0].parentElement || a.a.Zb(e2);
              };
              a.a.fc = function(b3, c2) {
                a.a.Ub(b3);
                c2 = a.a.f(c2);
                if (null !== c2 && c2 !== p) {
                  if ("string" != typeof c2) {
                    if ("undefined" !== typeof trustedTypes && trustedTypes.isHTML(c2)) {
                      b3.innerHTML = c2;
                      return;
                    }
                    c2 = c2.toString();
                  }
                  if (w2) w2(b3).html(c2);
                  else for (var e2 = a.a.wa(c2, b3.ownerDocument), d2 = 0; d2 < e2.length; d2++) b3.appendChild(e2[d2]);
                }
              };
            })();
            a.b("utils.parseHtmlFragment", a.a.wa);
            a.b("utils.setHtml", a.a.fc);
            a.aa = /* @__PURE__ */ (function() {
              function b2(c2, e) {
                if (c2) {
                  if (8 == c2.nodeType) {
                    var f = a.aa.Uc(c2.nodeValue);
                    null != f && e.push({ ud: c2, Kd: f });
                  } else if (1 == c2.nodeType) for (var f = 0, g2 = c2.childNodes, h = g2.length; f < h; f++) b2(g2[f], e);
                }
              }
              var c = {};
              return { Yb: function(a2) {
                if ("function" != typeof a2) throw Error("You can only pass a function to ko.memoization.memoize()");
                var b3 = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                c[b3] = a2;
                return "<!--[ko_memo:" + b3 + "]-->";
              }, bd: function(a2, b3) {
                var f = c[a2];
                if (f === p) throw Error("Couldn't find any memo with ID " + a2 + ". Perhaps it's already been unmemoized.");
                try {
                  return f.apply(null, b3 || []), true;
                } finally {
                  delete c[a2];
                }
              }, cd: function(c2, e) {
                var f = [];
                b2(c2, f);
                for (var g2 = 0, h = f.length; g2 < h; g2++) {
                  var m2 = f[g2].ud, k2 = [m2];
                  e && a.a.Ob(k2, e);
                  a.aa.bd(f[g2].Kd, k2);
                  m2.nodeValue = "";
                  m2.parentNode && m2.parentNode.removeChild(m2);
                }
              }, Uc: function(a2) {
                return (a2 = a2.match(/^\[ko_memo\:(.*?)\]$/)) ? a2[1] : null;
              } };
            })();
            a.b("memoization", a.aa);
            a.b("memoization.memoize", a.aa.Yb);
            a.b("memoization.unmemoize", a.aa.bd);
            a.b("memoization.parseMemoText", a.aa.Uc);
            a.b("memoization.unmemoizeDomNodeAndDescendants", a.aa.cd);
            a.na = (function() {
              function b2() {
                if (f) {
                  for (var b3 = f, c2 = 0, d2; h < f; ) if (d2 = e[h++]) {
                    if (h > b3) {
                      if (5e3 <= ++c2) {
                        h = f;
                        a.a.Gc(Error("'Too much recursion' after processing " + c2 + " task groups."));
                        break;
                      }
                      b3 = f;
                    }
                    try {
                      d2();
                    } catch (g3) {
                      a.a.Gc(g3);
                    }
                  }
                }
              }
              function c() {
                b2();
                h = f = e.length = 0;
              }
              var d, e = [], f = 0, g2 = 1, h = 0;
              z2.MutationObserver ? d = (function(a2) {
                var b3 = v2.createElement("div");
                new MutationObserver(a2).observe(b3, { attributes: true });
                return function() {
                  b3.classList.toggle("foo");
                };
              })(c) : d = v2 && "onreadystatechange" in v2.createElement("script") ? function(a2) {
                var b3 = v2.createElement("script");
                b3.onreadystatechange = function() {
                  b3.onreadystatechange = null;
                  v2.documentElement.removeChild(b3);
                  b3 = null;
                  a2();
                };
                v2.documentElement.appendChild(b3);
              } : function(a2) {
                setTimeout(a2, 0);
              };
              return { scheduler: d, Ab: function(b3) {
                f || a.na.scheduler(c);
                e[f++] = b3;
                return g2++;
              }, cancel: function(a2) {
                a2 = a2 - (g2 - f);
                a2 >= h && a2 < f && (e[a2] = null);
              }, resetForTesting: function() {
                var a2 = f - h;
                h = f = e.length = 0;
                return a2;
              }, Sd: b2 };
            })();
            a.b("tasks", a.na);
            a.b("tasks.schedule", a.na.Ab);
            a.b("tasks.runEarly", a.na.Sd);
            a.Va = { throttle: function(b2, c) {
              b2.throttleEvaluation = c;
              var d = null;
              return a.$({ read: b2, write: function(e) {
                clearTimeout(d);
                d = a.a.setTimeout(function() {
                  b2(e);
                }, c);
              } });
            }, rateLimit: function(a2, c) {
              var d, e, f;
              "number" == typeof c ? d = c : (d = c.timeout, e = c.method);
              a2.Ib = false;
              f = "function" == typeof e ? e : "notifyWhenChangesStop" == e ? Z : Y;
              a2.ub(function(a3) {
                return f(a3, d, c);
              });
            }, deferred: function(b2, c) {
              if (true !== c) throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");
              b2.Ib || (b2.Ib = true, b2.ub(function(c2) {
                var e, f = false;
                return function() {
                  if (!f) {
                    a.na.cancel(e);
                    e = a.na.Ab(c2);
                    try {
                      f = true, b2.notifySubscribers(p, "dirty");
                    } finally {
                      f = false;
                    }
                  }
                };
              }));
            }, notify: function(a2, c) {
              a2.equalityComparer = "always" == c ? null : K2;
            } };
            var X2 = { undefined: 1, "boolean": 1, number: 1, string: 1 };
            a.b("extenders", a.Va);
            a.ic = function(b2, c, d) {
              this.da = b2;
              this.lc = c;
              this.mc = d;
              this.Jb = false;
              this.hb = this.Kb = null;
              a.L(this, "dispose", this.s);
              a.L(this, "disposeWhenNodeIsRemoved", this.l);
            };
            a.ic.prototype.s = function() {
              this.Jb || (this.hb && a.a.J.zb(this.Kb, this.hb), this.Jb = true, this.mc(), this.da = this.lc = this.mc = this.Kb = this.hb = null);
            };
            a.ic.prototype.l = function(b2) {
              this.Kb = b2;
              a.a.J.oa(b2, this.hb = this.s.bind(this));
            };
            a.T = function() {
              a.a.Bb(this, D2);
              D2.rb(this);
            };
            var D2 = { rb: function(a2) {
              a2.U = { change: [] };
              a2.sc = 1;
            }, subscribe: function(b2, c, d) {
              var e = this;
              d = d || "change";
              var f = new a.ic(e, c ? b2.bind(c) : b2, function() {
                a.a.Ra(e.U[d], f);
                e.jb && e.jb(d);
              });
              e.Sa && e.Sa(d);
              e.U[d] || (e.U[d] = []);
              e.U[d].push(f);
              return f;
            }, notifySubscribers: function(b2, c) {
              c = c || "change";
              "change" === c && this.Hb();
              if (this.Ya(c)) {
                var d = "change" === c && this.ed || this.U[c].slice(0);
                try {
                  a.u.xc();
                  for (var e = 0, f; f = d[e]; ++e) f.Jb || f.lc(b2);
                } finally {
                  a.u.end();
                }
              }
            }, qb: function() {
              return this.sc;
            }, Dd: function(a2) {
              return this.qb() !== a2;
            }, Hb: function() {
              ++this.sc;
            }, ub: function(b2) {
              var c = this, d = a.O(c), e, f, g2, h, m2;
              c.ib || (c.ib = c.notifySubscribers, c.notifySubscribers = aa);
              var k2 = b2(function() {
                c.La = false;
                d && h === c && (h = c.nc ? c.nc() : c());
                var a2 = f || m2 && c.sb(g2, h);
                m2 = f = e = false;
                a2 && c.ib(g2 = h);
              });
              c.qc = function(a2, b3) {
                b3 && c.La || (m2 = !b3);
                c.ed = c.U.change.slice(0);
                c.La = e = true;
                h = a2;
                k2();
              };
              c.pc = function(a2) {
                e || (g2 = a2, c.ib(a2, "beforeChange"));
              };
              c.rc = function() {
                m2 = true;
              };
              c.gd = function() {
                c.sb(g2, c.v(true)) && (f = true);
              };
            }, Ya: function(a2) {
              return this.U[a2] && this.U[a2].length;
            }, Bd: function(b2) {
              if (b2) return this.U[b2] && this.U[b2].length || 0;
              var c = 0;
              a.a.P(this.U, function(a2, b3) {
                "dirty" !== a2 && (c += b3.length);
              });
              return c;
            }, sb: function(a2, c) {
              return !this.equalityComparer || !this.equalityComparer(a2, c);
            }, toString: function() {
              return "[object Object]";
            }, extend: function(b2) {
              var c = this;
              b2 && a.a.P(b2, function(b3, e) {
                var f = a.Va[b3];
                "function" == typeof f && (c = f(c, e) || c);
              });
              return c;
            } };
            a.L(D2, "init", D2.rb);
            a.L(D2, "subscribe", D2.subscribe);
            a.L(D2, "extend", D2.extend);
            a.L(D2, "getSubscriptionsCount", D2.Bd);
            a.a.Ca && a.a.setPrototypeOf(D2, Function.prototype);
            a.T.fn = D2;
            a.Qc = function(a2) {
              return null != a2 && "function" == typeof a2.subscribe && "function" == typeof a2.notifySubscribers;
            };
            a.b("subscribable", a.T);
            a.b("isSubscribable", a.Qc);
            a.S = a.u = /* @__PURE__ */ (function() {
              function b2(a2) {
                d.push(e);
                e = a2;
              }
              function c() {
                e = d.pop();
              }
              var d = [], e, f = 0;
              return { xc: b2, end: c, cc: function(b3) {
                if (e) {
                  if (!a.Qc(b3)) throw Error("Only subscribable things can act as dependencies");
                  e.od.call(e.pd, b3, b3.fd || (b3.fd = ++f));
                }
              }, G: function(a2, e2, d2) {
                try {
                  return b2(), a2.apply(e2, d2 || []);
                } finally {
                  c();
                }
              }, ra: function() {
                if (e) return e.o.ra();
              }, Xa: function() {
                if (e) return e.o.Xa();
              }, $a: function() {
                if (e) return e.$a;
              }, o: function() {
                if (e) return e.o;
              } };
            })();
            a.b("computedContext", a.S);
            a.b("computedContext.getDependenciesCount", a.S.ra);
            a.b("computedContext.getDependencies", a.S.Xa);
            a.b("computedContext.isInitial", a.S.$a);
            a.b("computedContext.registerDependency", a.S.cc);
            a.b("ignoreDependencies", a.Yd = a.u.G);
            var I2 = a.a.Ea("_latestValue");
            a.va = function(b2) {
              function c() {
                if (0 < arguments.length) return c.sb(c[I2], arguments[0]) && (c.Aa(), c[I2] = arguments[0], c.za()), this;
                a.u.cc(c);
                return c[I2];
              }
              c[I2] = b2;
              a.a.Ca || a.a.extend(c, a.T.fn);
              a.T.fn.rb(c);
              a.a.Bb(c, E2);
              a.options.deferUpdates && a.Va.deferred(c, true);
              return c;
            };
            var E2 = { equalityComparer: K2, v: function() {
              return this[I2];
            }, za: function() {
              this.notifySubscribers(this[I2], "spectate");
              this.notifySubscribers(this[I2]);
            }, Aa: function() {
              this.notifySubscribers(this[I2], "beforeChange");
            } };
            a.a.Ca && a.a.setPrototypeOf(E2, a.T.fn);
            var J2 = a.va.Oa = "__ko_proto__";
            E2[J2] = a.va;
            a.O = function(b2) {
              if ((b2 = "function" == typeof b2 && b2[J2]) && b2 !== E2[J2] && b2 !== a.o.fn[J2]) throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");
              return !!b2;
            };
            a.ab = function(b2) {
              return "function" == typeof b2 && (b2[J2] === E2[J2] || b2[J2] === a.o.fn[J2] && b2.Nc);
            };
            a.b("observable", a.va);
            a.b("isObservable", a.O);
            a.b("isWriteableObservable", a.ab);
            a.b("isWritableObservable", a.ab);
            a.b("observable.fn", E2);
            a.L(E2, "peek", E2.v);
            a.L(E2, "valueHasMutated", E2.za);
            a.L(E2, "valueWillMutate", E2.Aa);
            a.Ja = function(b2) {
              b2 = b2 || [];
              if ("object" != typeof b2 || !("length" in b2)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
              b2 = a.va(b2);
              a.a.Bb(b2, a.Ja.fn);
              return b2.extend({ trackArrayChanges: true });
            };
            a.Ja.fn = { remove: function(b2) {
              for (var c = this.v(), d = [], e = "function" != typeof b2 || a.O(b2) ? function(a2) {
                return a2 === b2;
              } : b2, f = 0; f < c.length; f++) {
                var g2 = c[f];
                if (e(g2)) {
                  0 === d.length && this.Aa();
                  if (c[f] !== g2) throw Error("Array modified during remove; cannot remove item");
                  d.push(g2);
                  c.splice(f, 1);
                  f--;
                }
              }
              d.length && this.za();
              return d;
            }, removeAll: function(b2) {
              if (b2 === p) {
                var c = this.v(), d = c.slice(0);
                this.Aa();
                c.splice(0, c.length);
                this.za();
                return d;
              }
              return b2 ? this.remove(function(c2) {
                return 0 <= a.a.A(b2, c2);
              }) : [];
            }, destroy: function(b2) {
              var c = this.v(), d = "function" != typeof b2 || a.O(b2) ? function(a2) {
                return a2 === b2;
              } : b2;
              this.Aa();
              for (var e = c.length - 1; 0 <= e; e--) {
                var f = c[e];
                d(f) && (f._destroy = true);
              }
              this.za();
            }, destroyAll: function(b2) {
              return b2 === p ? this.destroy(function() {
                return true;
              }) : b2 ? this.destroy(function(c) {
                return 0 <= a.a.A(b2, c);
              }) : [];
            }, indexOf: function(b2) {
              var c = this();
              return a.a.A(c, b2);
            }, replace: function(a2, c) {
              var d = this.indexOf(a2);
              0 <= d && (this.Aa(), this.v()[d] = c, this.za());
            }, sorted: function(a2) {
              var c = this().slice(0);
              return a2 ? c.sort(a2) : c.sort();
            }, reversed: function() {
              return this().slice(0).reverse();
            } };
            a.a.Ca && a.a.setPrototypeOf(a.Ja.fn, a.va.fn);
            a.a.D("pop push reverse shift sort splice unshift".split(" "), function(b2) {
              a.Ja.fn[b2] = function() {
                var a2 = this.v();
                this.Aa();
                this.zc(a2, b2, arguments);
                var d = a2[b2].apply(a2, arguments);
                this.za();
                return d === a2 ? this : d;
              };
            });
            a.a.D(["slice"], function(b2) {
              a.Ja.fn[b2] = function() {
                var a2 = this();
                return a2[b2].apply(a2, arguments);
              };
            });
            a.Pc = function(b2) {
              return a.O(b2) && "function" == typeof b2.remove && "function" == typeof b2.push;
            };
            a.b("observableArray", a.Ja);
            a.b("isObservableArray", a.Pc);
            a.Va.trackArrayChanges = function(b2, c) {
              function d() {
                function c2() {
                  if (m2) {
                    var e2 = [].concat(b2.v() || []), d2;
                    if (b2.Ya("arrayChange")) {
                      if (!f || 1 < m2) f = a.a.Qb(k2, e2, b2.Pb);
                      d2 = f;
                    }
                    k2 = e2;
                    f = null;
                    m2 = 0;
                    d2 && d2.length && b2.notifySubscribers(d2, "arrayChange");
                  }
                }
                e ? c2() : (e = true, h = b2.subscribe(
                  function() {
                    ++m2;
                  },
                  null,
                  "spectate"
                ), k2 = [].concat(b2.v() || []), f = null, g2 = b2.subscribe(c2));
              }
              b2.Pb = {};
              c && "object" == typeof c && a.a.extend(b2.Pb, c);
              b2.Pb.sparse = true;
              if (!b2.zc) {
                var e = false, f = null, g2, h, m2 = 0, k2, l = b2.Sa, q2 = b2.jb;
                b2.Sa = function(a2) {
                  l && l.call(b2, a2);
                  "arrayChange" === a2 && d();
                };
                b2.jb = function(a2) {
                  q2 && q2.call(b2, a2);
                  "arrayChange" !== a2 || b2.Ya("arrayChange") || (g2 && g2.s(), h && h.s(), h = g2 = null, e = false, k2 = p);
                };
                b2.zc = function(b3, c2, d2) {
                  function l2(a2, b4, c3) {
                    return k3[k3.length] = { status: a2, value: b4, index: c3 };
                  }
                  if (e && !m2) {
                    var k3 = [], g3 = b3.length, q3 = d2.length, h2 = 0;
                    switch (c2) {
                      case "push":
                        h2 = g3;
                      case "unshift":
                        for (c2 = 0; c2 < q3; c2++) l2("added", d2[c2], h2 + c2);
                        break;
                      case "pop":
                        h2 = g3 - 1;
                      case "shift":
                        g3 && l2("deleted", b3[h2], h2);
                        break;
                      case "splice":
                        c2 = Math.min(Math.max(0, 0 > d2[0] ? g3 + d2[0] : d2[0]), g3);
                        for (var g3 = 1 === q3 ? g3 : Math.min(c2 + (d2[1] || 0), g3), q3 = c2 + q3 - 2, h2 = Math.max(g3, q3), U2 = [], V2 = [], p2 = 2; c2 < h2; ++c2, ++p2) c2 < g3 && V2.push(l2("deleted", b3[c2], c2)), c2 < q3 && U2.push(l2("added", d2[p2], c2));
                        a.a.Kc(V2, U2);
                        break;
                      default:
                        return;
                    }
                    f = k3;
                  }
                };
              }
            };
            var t = a.a.Ea("_state");
            a.o = a.$ = function(b2, c, d) {
              function e() {
                if (0 < arguments.length) {
                  if ("function" === typeof f) f.apply(g2.pb, arguments);
                  else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                  return this;
                }
                g2.ta || a.u.cc(e);
                (g2.ka || g2.K && e.Za()) && e.ha();
                return g2.X;
              }
              "object" === typeof b2 ? d = b2 : (d = d || {}, b2 && (d.read = b2));
              if ("function" != typeof d.read) throw Error("Pass a function that returns the value of the ko.computed");
              var f = d.write, g2 = {
                X: p,
                ua: true,
                ka: true,
                sa: false,
                jc: false,
                ta: false,
                xb: false,
                K: false,
                Wc: d.read,
                pb: c || d.owner,
                l: d.disposeWhenNodeIsRemoved || d.l || null,
                Ua: d.disposeWhen || d.Ua,
                Sb: null,
                I: {},
                V: 0,
                Ic: null
              };
              e[t] = g2;
              e.Nc = "function" === typeof f;
              a.a.Ca || a.a.extend(e, a.T.fn);
              a.T.fn.rb(e);
              a.a.Bb(e, B2);
              d.pure ? (g2.xb = true, g2.K = true, a.a.extend(e, da)) : d.deferEvaluation && a.a.extend(e, ea);
              a.options.deferUpdates && a.Va.deferred(e, true);
              g2.l && (g2.jc = true, g2.l.nodeType || (g2.l = null));
              g2.K || d.deferEvaluation || e.ha();
              g2.l && e.ja() && a.a.J.oa(g2.l, g2.Sb = function() {
                e.s();
              });
              return e;
            };
            var B2 = { equalityComparer: K2, ra: function() {
              return this[t].V;
            }, Xa: function() {
              var b2 = [];
              a.a.P(this[t].I, function(a2, d) {
                b2[d.Ma] = d.da;
              });
              return b2;
            }, Wb: function(b2) {
              if (!this[t].V) return false;
              var c = this.Xa();
              return -1 !== a.a.A(c, b2) ? true : !!a.a.Mb(c, function(a2) {
                return a2.Wb && a2.Wb(b2);
              });
            }, uc: function(a2, c, d) {
              if (this[t].xb && c === this) throw Error("A 'pure' computed must not be called recursively");
              this[t].I[a2] = d;
              d.Ma = this[t].V++;
              d.Na = c.qb();
            }, Za: function() {
              var a2 = this[t];
              if (a2.sa) return false;
              a2.sa = true;
              try {
                var c, d, e = a2.I;
                for (c in e) if (Object.prototype.hasOwnProperty.call(e, c) && (d = e[c], this.Ka && d.da.La || d.da.Dd(d.Na))) return true;
              } finally {
                a2.sa = false;
              }
            }, Jd: function() {
              this.Ka && !this[t].sa && this.Ka(false);
            }, ja: function() {
              var a2 = this[t];
              return a2.ka || 0 < a2.V;
            }, Rd: function() {
              this.La ? this[t].ka && (this[t].ua = true) : this.Hc();
            }, $c: function(a2) {
              if (a2.Ib) {
                var c = a2.subscribe(this.Jd, this, "dirty"), d = a2.subscribe(this.Rd, this);
                return { da: a2, s: function() {
                  c.s();
                  d.s();
                } };
              }
              return a2.subscribe(this.Hc, this);
            }, Hc: function() {
              var b2 = this, c = b2.throttleEvaluation;
              c && 0 <= c ? (clearTimeout(this[t].Ic), this[t].Ic = a.a.setTimeout(function() {
                b2.ha(true);
              }, c)) : b2.Ka ? b2.Ka(true) : b2.ha(true);
            }, ha: function(b2) {
              var c = this[t], d = c.Ua, e = false;
              if (!c.sa && !c.ta) {
                if (c.l && !a.a.Tb(c.l) || d && d()) {
                  if (!c.jc) {
                    this.s();
                    return;
                  }
                } else c.jc = false;
                c.sa = true;
                try {
                  e = this.zd(b2);
                } finally {
                  c.sa = false;
                }
                return e;
              }
            }, zd: function(b2) {
              var c = this[t], d = false, e = c.xb ? p : !c.V, d = { qd: this, ob: c.I, Rb: c.V };
              a.u.xc({ pd: d, od: ca, o: this, $a: e });
              c.I = {};
              c.V = 0;
              var f = this.yd(c, d);
              c.V ? d = this.sb(c.X, f) : (this.s(), d = true);
              d && (c.K ? this.Hb() : this.notifySubscribers(c.X, "beforeChange"), c.X = f, this.notifySubscribers(c.X, "spectate"), !c.K && b2 && this.notifySubscribers(c.X), this.rc && this.rc());
              e && this.notifySubscribers(c.X, "awake");
              return d;
            }, yd: function(b2, c) {
              try {
                var d = b2.Wc;
                return b2.pb ? d.call(b2.pb) : d();
              } finally {
                a.u.end(), c.Rb && !b2.K && a.a.P(c.ob, ba), b2.ua = b2.ka = false;
              }
            }, v: function(a2) {
              var c = this[t];
              (c.ka && (a2 || !c.V) || c.K && this.Za()) && this.ha();
              return c.X;
            }, ub: function(b2) {
              a.T.fn.ub.call(this, b2);
              this.nc = function() {
                this[t].K || (this[t].ua ? this.ha() : this[t].ka = false);
                return this[t].X;
              };
              this.Ka = function(a2) {
                this.pc(this[t].X);
                this[t].ka = true;
                a2 && (this[t].ua = true);
                this.qc(this, !a2);
              };
            }, s: function() {
              var b2 = this[t];
              !b2.K && b2.I && a.a.P(b2.I, function(a2, b3) {
                b3.s && b3.s();
              });
              b2.l && b2.Sb && a.a.J.zb(b2.l, b2.Sb);
              b2.I = p;
              b2.V = 0;
              b2.ta = true;
              b2.ua = false;
              b2.ka = false;
              b2.K = false;
              b2.l = p;
              b2.Ua = p;
              b2.Wc = p;
              this.Nc || (b2.pb = p);
            } }, da = { Sa: function(b2) {
              var c = this, d = c[t];
              if (!d.ta && d.K && "change" == b2) {
                d.K = false;
                if (d.ua || c.Za()) d.I = null, d.V = 0, c.ha() && c.Hb();
                else {
                  var e = [];
                  a.a.P(d.I, function(a2, b3) {
                    e[b3.Ma] = a2;
                  });
                  a.a.D(e, function(a2, b3) {
                    var e2 = d.I[a2], m2 = c.$c(e2.da);
                    m2.Ma = b3;
                    m2.Na = e2.Na;
                    d.I[a2] = m2;
                  });
                  c.Za() && c.ha() && c.Hb();
                }
                d.ta || c.notifySubscribers(d.X, "awake");
              }
            }, jb: function(b2) {
              var c = this[t];
              c.ta || "change" != b2 || this.Ya("change") || (a.a.P(c.I, function(a2, b3) {
                b3.s && (c.I[a2] = { da: b3.da, Ma: b3.Ma, Na: b3.Na }, b3.s());
              }), c.K = true, this.notifySubscribers(p, "asleep"));
            }, qb: function() {
              var b2 = this[t];
              b2.K && (b2.ua || this.Za()) && this.ha();
              return a.T.fn.qb.call(this);
            } }, ea = { Sa: function(a2) {
              "change" != a2 && "beforeChange" != a2 || this.v();
            } };
            a.a.Ca && a.a.setPrototypeOf(B2, a.T.fn);
            var O2 = a.va.Oa;
            B2[O2] = a.o;
            a.Oc = function(a2) {
              return "function" == typeof a2 && a2[O2] === B2[O2];
            };
            a.Fd = function(b2) {
              return a.Oc(b2) && b2[t] && b2[t].xb;
            };
            a.b("computed", a.o);
            a.b("dependentObservable", a.o);
            a.b("isComputed", a.Oc);
            a.b(
              "isPureComputed",
              a.Fd
            );
            a.b("computed.fn", B2);
            a.L(B2, "peek", B2.v);
            a.L(B2, "dispose", B2.s);
            a.L(B2, "isActive", B2.ja);
            a.L(B2, "getDependenciesCount", B2.ra);
            a.L(B2, "getDependencies", B2.Xa);
            a.yb = function(b2, c) {
              if ("function" === typeof b2) return a.o(b2, c, { pure: true });
              b2 = a.a.extend({}, b2);
              b2.pure = true;
              return a.o(b2, c);
            };
            a.b("pureComputed", a.yb);
            (function() {
              function b2(a2, f, g2) {
                g2 = g2 || new d();
                a2 = f(a2);
                if ("object" != typeof a2 || null === a2 || a2 === p || a2 instanceof RegExp || a2 instanceof Date || a2 instanceof String || a2 instanceof Number || a2 instanceof Boolean) return a2;
                var h = a2 instanceof Array ? [] : {};
                g2.save(a2, h);
                c(a2, function(c2) {
                  var d2 = f(a2[c2]);
                  switch (typeof d2) {
                    case "boolean":
                    case "number":
                    case "string":
                    case "bigint":
                    case "symbol":
                    case "function":
                      h[c2] = d2;
                      break;
                    case "object":
                    case "undefined":
                      var l = g2.get(d2);
                      h[c2] = l !== p ? l : b2(d2, f, g2);
                  }
                });
                return h;
              }
              function c(a2, b3) {
                if (a2 instanceof Array) {
                  for (var c2 = 0; c2 < a2.length; c2++) b3(c2);
                  "function" == typeof a2.toJSON && b3("toJSON");
                } else for (c2 in a2) b3(c2);
              }
              function d() {
                this.keys = [];
                this.values = [];
              }
              a.ad = function(c2) {
                if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");
                return b2(c2, function(b3) {
                  for (var c3 = 0; a.O(b3) && 10 > c3; c3++) b3 = b3();
                  return b3;
                });
              };
              a.toJSON = function(b3, c2, d2) {
                b3 = a.ad(b3);
                return a.a.hc(b3, c2, d2);
              };
              d.prototype = { constructor: d, save: function(b3, c2) {
                var d2 = a.a.A(this.keys, b3);
                0 <= d2 ? this.values[d2] = c2 : (this.keys.push(b3), this.values.push(c2));
              }, get: function(b3) {
                b3 = a.a.A(this.keys, b3);
                return 0 <= b3 ? this.values[b3] : p;
              } };
            })();
            a.b("toJS", a.ad);
            a.b("toJSON", a.toJSON);
            a.Wd = function(b2, c, d) {
              function e(c2) {
                var e2 = a.yb(b2, d).extend({ ma: "always" }), h = e2.subscribe(function(a2) {
                  a2 && (h.s(), c2(a2));
                });
                e2.notifySubscribers(e2.v());
                return h;
              }
              return "function" !== typeof Promise || c ? e(c.bind(d)) : new Promise(e);
            };
            a.b("when", a.Wd);
            (function() {
              a.w = { M: function(b2) {
                switch (a.a.R(b2)) {
                  case "option":
                    return true === b2.__ko__hasDomDataOptionValue__ ? a.a.g.get(b2, a.c.options.$b) : 7 >= a.a.W ? b2.getAttributeNode("value") && b2.getAttributeNode("value").specified ? b2.value : b2.text : b2.value;
                  case "select":
                    return 0 <= b2.selectedIndex ? a.w.M(b2.options[b2.selectedIndex]) : p;
                  default:
                    return b2.value;
                }
              }, fb: function(b2, c, d) {
                switch (a.a.R(b2)) {
                  case "option":
                    "string" === typeof c ? (a.a.g.set(
                      b2,
                      a.c.options.$b,
                      p
                    ), "__ko__hasDomDataOptionValue__" in b2 && delete b2.__ko__hasDomDataOptionValue__, b2.value = c) : (a.a.g.set(b2, a.c.options.$b, c), b2.__ko__hasDomDataOptionValue__ = true, b2.value = "number" === typeof c ? c : "");
                    break;
                  case "select":
                    if ("" === c || null === c) c = p;
                    for (var e = -1, f = 0, g2 = b2.options.length, h; f < g2; ++f) if (h = a.w.M(b2.options[f]), h == c || "" === h && c === p) {
                      e = f;
                      break;
                    }
                    if (d || 0 <= e || c === p && 1 < b2.size) b2.selectedIndex = e, 6 === a.a.W && a.a.setTimeout(function() {
                      b2.selectedIndex = e;
                    }, 0);
                    break;
                  default:
                    if (null === c || c === p) c = "";
                    b2.value = c;
                }
              } };
            })();
            a.b("selectExtensions", a.w);
            a.b("selectExtensions.readValue", a.w.M);
            a.b("selectExtensions.writeValue", a.w.fb);
            a.m = (function() {
              function b2(b3) {
                b3 = a.a.Eb(b3);
                123 === b3.charCodeAt(0) && (b3 = b3.slice(1, -1));
                b3 += "\n,";
                var c2 = [], d2 = b3.match(e), q2, n = [], h2 = 0;
                if (1 < d2.length) {
                  for (var y2 = 0, C2; C2 = d2[y2]; ++y2) {
                    var u3 = C2.charCodeAt(0);
                    if (44 === u3) {
                      if (0 >= h2) {
                        c2.push(q2 && n.length ? { key: q2, value: n.join("") } : { unknown: q2 || n.join("") });
                        q2 = h2 = 0;
                        n = [];
                        continue;
                      }
                    } else if (58 === u3) {
                      if (!h2 && !q2 && 1 === n.length) {
                        q2 = n.pop();
                        continue;
                      }
                    } else if (47 === u3 && 1 < C2.length && (47 === C2.charCodeAt(1) || 42 === C2.charCodeAt(1))) continue;
                    else 47 === u3 && y2 && 1 < C2.length ? (u3 = d2[y2 - 1].match(f)) && !g2[u3[0]] && (b3 = b3.substr(b3.indexOf(C2) + 1), d2 = b3.match(e), y2 = -1, C2 = "/") : 40 === u3 || 123 === u3 || 91 === u3 ? ++h2 : 41 === u3 || 125 === u3 || 93 === u3 ? --h2 : q2 || n.length || 34 !== u3 && 39 !== u3 || (C2 = C2.slice(1, -1));
                    n.push(C2);
                  }
                  if (0 < h2) throw Error("Unbalanced parentheses, braces, or brackets");
                }
                return c2;
              }
              var c = ["true", "false", "null", "undefined"], d = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i, e = RegExp(
                "\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]",
                "g"
              ), f = /[\])"'A-Za-z0-9_$]+$/, g2 = { "in": 1, "return": 1, "typeof": 1 }, h = {};
              return { Ta: [], ya: h, ac: b2, wb: function(e2, f2) {
                function l(b3, e3) {
                  var f3;
                  if (!y2) {
                    var k2 = a.getBindingHandler(b3);
                    if (k2 && k2.preprocess && !(e3 = k2.preprocess(e3, b3, l))) return;
                    if (k2 = h[b3]) f3 = e3, 0 <= a.a.A(c, f3) ? f3 = false : (k2 = f3.match(d), f3 = null === k2 ? false : k2[1] ? "Object(" + k2[1] + ")" + k2[2] : f3), k2 = f3;
                    k2 && n.push("'" + ("string" == typeof h[b3] ? h[b3] : b3) + "':function(_z){" + f3 + "=_z}");
                  }
                  g3 && (e3 = "function(){return " + e3 + " }");
                  q2.push("'" + b3 + "':" + e3);
                }
                f2 = f2 || {};
                var q2 = [], n = [], g3 = f2.valueAccessors, y2 = f2.bindingParams, C2 = "string" === typeof e2 ? b2(e2) : e2;
                a.a.D(C2, function(a2) {
                  l(a2.key || a2.unknown, a2.value);
                });
                n.length && l("_ko_property_writers", "{" + n.join(",") + " }");
                return q2.join(",");
              }, Id: function(a2, b3) {
                for (var c2 = 0; c2 < a2.length; c2++) if (a2[c2].key == b3) return true;
                return false;
              }, gb: function(b3, c2, e2, d2, f2) {
                if (b3 && a.O(b3)) !a.ab(b3) || f2 && b3.v() === d2 || b3(d2);
                else if ((b3 = c2.get("_ko_property_writers")) && b3[e2]) b3[e2](d2);
              } };
            })();
            a.b("expressionRewriting", a.m);
            a.b("expressionRewriting.bindingRewriteValidators", a.m.Ta);
            a.b("expressionRewriting.parseObjectLiteral", a.m.ac);
            a.b("expressionRewriting.preProcessBindings", a.m.wb);
            a.b("expressionRewriting._twoWayBindings", a.m.ya);
            a.b("jsonExpressionRewriting", a.m);
            a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", a.m.wb);
            (function() {
              function b2(a2) {
                return 8 == a2.nodeType && g2.test(f ? a2.text : a2.nodeValue);
              }
              function c(a2) {
                return 8 == a2.nodeType && h.test(f ? a2.text : a2.nodeValue);
              }
              function d(e2, d2) {
                for (var f2 = e2, h2 = 1, g3 = []; f2 = f2.nextSibling; ) {
                  if (c(f2) && (a.a.g.set(f2, k2, true), h2--, 0 === h2)) return g3;
                  g3.push(f2);
                  b2(f2) && h2++;
                }
                if (!d2) throw Error("Cannot find closing comment tag to match: " + e2.nodeValue);
                return null;
              }
              function e(a2, b3) {
                var c2 = d(a2, b3);
                return c2 ? 0 < c2.length ? c2[c2.length - 1].nextSibling : a2.nextSibling : null;
              }
              var f = v2 && "<!--test-->" === v2.createComment("test").text, g2 = f ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/, h = f ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/, m2 = { ul: true, ol: true }, k2 = "__ko_matchedEndComment__";
              a.h = {
                ea: {},
                childNodes: function(a2) {
                  return b2(a2) ? d(a2) : a2.childNodes;
                },
                Fa: function(c2) {
                  if (b2(c2)) {
                    c2 = a.h.childNodes(c2);
                    for (var e2 = 0, d2 = c2.length; e2 < d2; e2++) a.removeNode(c2[e2]);
                  } else a.a.Ub(c2);
                },
                xa: function(c2, e2) {
                  if (b2(c2)) {
                    a.h.Fa(c2);
                    for (var d2 = c2.nextSibling, f2 = 0, k3 = e2.length; f2 < k3; f2++) d2.parentNode.insertBefore(e2[f2], d2);
                  } else a.a.xa(c2, e2);
                },
                Vc: function(a2, c2) {
                  var e2;
                  b2(a2) ? (e2 = a2.nextSibling, a2 = a2.parentNode) : e2 = a2.firstChild;
                  e2 ? c2 !== e2 && a2.insertBefore(c2, e2) : a2.appendChild(c2);
                },
                Xb: function(c2, e2, d2) {
                  d2 ? (d2 = d2.nextSibling, b2(c2) && (c2 = c2.parentNode), d2 ? e2 !== d2 && c2.insertBefore(e2, d2) : c2.appendChild(e2)) : a.h.Vc(c2, e2);
                },
                firstChild: function(a2) {
                  return b2(a2) ? !a2.nextSibling || c(a2.nextSibling) ? null : a2.nextSibling : a2.firstChild && c(a2.firstChild) ? a2.firstChild.nextSibling : a2.firstChild;
                },
                nextSibling: function(d2) {
                  b2(d2) && (d2 = e(d2));
                  return d2.nextSibling && c(d2.nextSibling) ? (d2 = d2.nextSibling, c(d2) && a.a.g.get(d2, k2), null) : d2.nextSibling;
                },
                Cd: b2,
                Vd: function(a2) {
                  return (a2 = (f ? a2.text : a2.nodeValue).match(g2)) ? a2[1] : null;
                },
                Sc: function(d2) {
                  if (m2[a.a.R(d2)]) {
                    var f2 = d2.firstChild;
                    if (f2) {
                      do
                        if (1 === f2.nodeType) {
                          var k3;
                          k3 = f2.firstChild;
                          var h2 = null;
                          if (k3) {
                            do
                              if (h2) h2.push(k3);
                              else if (b2(k3)) {
                                var g3 = e(k3, true);
                                g3 ? k3 = g3 : h2 = [k3];
                              } else c(k3) && (h2 = [k3]);
                            while (k3 = k3.nextSibling);
                          }
                          if (k3 = h2) for (h2 = f2.nextSibling, g3 = 0; g3 < k3.length; g3++) h2 ? d2.insertBefore(
                            k3[g3],
                            h2
                          ) : d2.appendChild(k3[g3]);
                        }
                      while (f2 = f2.nextSibling);
                    }
                  }
                }
              };
            })();
            a.b("virtualElements", a.h);
            a.b("virtualElements.allowedBindings", a.h.ea);
            a.b("virtualElements.emptyNode", a.h.Fa);
            a.b("virtualElements.insertAfter", a.h.Xb);
            a.b("virtualElements.prepend", a.h.Vc);
            a.b("virtualElements.setDomNodeChildren", a.h.xa);
            (function() {
              function b2(b3, d) {
                var e = "with($context){with($data||{}){return{" + a.m.wb(b3, d) + "}}}";
                return H2 ? (0, eval)(H2.createScript("(function($context,$element){" + e + "})")) : new Function("$context", "$element", e);
              }
              a.ga = function() {
                this.nd = {};
              };
              a.a.extend(a.ga.prototype, {
                nodeHasBindings: function(b3) {
                  switch (b3.nodeType) {
                    case 1:
                      return null != b3.getAttribute("data-bind") || a.j.getComponentNameForNode(b3);
                    case 8:
                      return a.h.Cd(b3);
                    default:
                      return false;
                  }
                },
                getBindings: function(b3, d) {
                  var e = this.getBindingsString(b3, d), e = e ? this.parseBindingsString(e, d, b3) : null;
                  return a.j.tc(e, b3, d, false);
                },
                getBindingAccessors: function(b3, d) {
                  var e = this.getBindingsString(b3, d), e = e ? this.parseBindingsString(e, d, b3, { valueAccessors: true }) : null;
                  return a.j.tc(e, b3, d, true);
                },
                getBindingsString: function(b3) {
                  switch (b3.nodeType) {
                    case 1:
                      return b3.getAttribute("data-bind");
                    case 8:
                      return a.h.Vd(b3);
                    default:
                      return null;
                  }
                },
                parseBindingsString: function(a2, d, e, f) {
                  try {
                    var g2 = this.nd, h = a2 + (f && f.valueAccessors || "");
                    return (g2[h] || (g2[h] = b2(a2, f)))(d, e);
                  } catch (m2) {
                    throw m2.message = "Unable to parse bindings.\nBindings value: " + a2 + "\nMessage: " + m2.message, m2;
                  }
                }
              });
              a.ga.instance = new a.ga();
            })();
            a.b("bindingProvider", a.ga);
            (function() {
              function b2(b3) {
                var c2 = (b3 = a.a.g.get(b3, A)) && b3.N;
                c2 && (b3.N = null, c2.Tc());
              }
              function c(c2, d2, e2) {
                this.node = c2;
                this.yc = d2;
                this.mb = [];
                this.H = false;
                d2.N || a.a.J.oa(c2, b2);
                e2 && e2.N && (e2.N.mb.push(c2), this.Lb = e2);
              }
              function d(a2) {
                return function() {
                  return a2;
                };
              }
              function e(a2) {
                return a2();
              }
              function f(b3) {
                return a.a.Ia(a.u.G(b3), function(a2, c2) {
                  return function() {
                    return b3()[c2];
                  };
                });
              }
              function g2(b3, c2, e2) {
                return "function" === typeof b3 ? f(b3.bind(null, c2, e2)) : a.a.Ia(b3, d);
              }
              function h(a2, b3) {
                return f(this.getBindings.bind(this, a2, b3));
              }
              function m2(b3, c2) {
                var e2 = a.h.firstChild(c2);
                if (e2) {
                  var d2, f2 = a.ga.instance, l2 = f2.preprocessNode;
                  if (l2) {
                    for (; d2 = e2; ) e2 = a.h.nextSibling(d2), l2.call(f2, d2);
                    e2 = a.h.firstChild(c2);
                  }
                  for (; d2 = e2; ) e2 = a.h.nextSibling(d2), k2(b3, d2);
                }
                a.i.ma(c2, a.i.H);
              }
              function k2(b3, c2) {
                var e2 = b3, d2 = 1 === c2.nodeType;
                d2 && a.h.Sc(c2);
                if (d2 || a.ga.instance.nodeHasBindings(c2)) e2 = q2(c2, null, b3).bindingContextForDescendants;
                e2 && !u3[a.a.R(c2)] && m2(e2, c2);
              }
              function l(b3) {
                var c2 = [], e2 = {}, d2 = [];
                a.a.P(b3, function x2(f2) {
                  if (!e2[f2]) {
                    var k3 = a.getBindingHandler(f2);
                    k3 && (k3.after && (d2.push(f2), a.a.D(k3.after, function(c3) {
                      if (b3[c3]) {
                        if (-1 !== a.a.A(d2, c3)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + d2.join(", "));
                        x2(c3);
                      }
                    }), d2.length--), c2.push({ key: f2, Mc: k3 }));
                    e2[f2] = true;
                  }
                });
                return c2;
              }
              function q2(b3, c2, d2) {
                var f2 = a.a.g.Vb(b3, A, {}), k3 = f2.hd;
                if (!c2) {
                  if (k3) throw Error("You cannot apply bindings multiple times to the same element.");
                  f2.hd = true;
                }
                k3 || (f2.context = d2);
                f2.vb || (f2.vb = {});
                var g3;
                if (c2 && "function" !== typeof c2) g3 = c2;
                else {
                  var q3 = a.ga.instance, n2 = q3.getBindingAccessors || h, m3 = a.$(function() {
                    if (g3 = c2 ? c2(d2, b3) : n2.call(q3, b3, d2)) {
                      if (d2[r]) d2[r]();
                      if (d2[C2]) d2[C2]();
                    }
                    return g3;
                  }, null, { l: b3 });
                  g3 && m3.ja() || (m3 = null);
                }
                var y3 = d2, u4;
                if (g3) {
                  var L3 = m3 ? function(a2) {
                    return function() {
                      return e(m3()[a2]);
                    };
                  } : function(a2) {
                    return g3[a2];
                  }, t2 = function() {
                    return a.a.Ia(m3 ? m3() : g3, e);
                  };
                  t2.get = function(a2) {
                    return g3[a2] && e(L3(a2));
                  };
                  t2.has = function(a2) {
                    return a2 in g3;
                  };
                  a.i.H in g3 && a.i.subscribe(b3, a.i.H, function() {
                    var c3 = (0, g3[a.i.H])();
                    if (c3) {
                      var d3 = a.h.childNodes(b3);
                      d3.length && c3(d3, a.Ec(d3[0]));
                    }
                  });
                  a.i.qa in g3 && (y3 = a.i.Db(b3, d2), a.i.subscribe(b3, a.i.qa, function() {
                    var c3 = (0, g3[a.i.qa])();
                    c3 && a.h.firstChild(b3) && c3(b3);
                  }));
                  f2 = l(g3);
                  a.a.D(f2, function(c3) {
                    var d3 = c3.Mc.init, e2 = c3.Mc.update, f3 = c3.key;
                    if (8 === b3.nodeType && !a.h.ea[f3]) throw Error("The binding '" + f3 + "' cannot be used with virtual elements");
                    try {
                      "function" == typeof d3 && a.u.G(function() {
                        var a2 = d3(b3, L3(f3), t2, y3.$data, y3);
                        if (a2 && a2.controlsDescendantBindings) {
                          if (u4 !== p) throw Error("Multiple bindings (" + u4 + " and " + f3 + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                          u4 = f3;
                        }
                      }), "function" == typeof e2 && a.$(function() {
                        e2(b3, L3(f3), t2, y3.$data, y3);
                      }, null, { l: b3 });
                    } catch (k4) {
                      throw k4.message = 'Unable to process binding "' + f3 + ": " + g3[f3] + '"\nMessage: ' + k4.message, k4;
                    }
                  });
                }
                f2 = u4 === p;
                return { shouldBindDescendants: f2, bindingContextForDescendants: f2 && y3 };
              }
              function n(b3, c2) {
                return b3 && b3 instanceof a.fa ? b3 : new a.fa(b3, p, p, c2);
              }
              var r = a.a.Ea("_subscribable"), y2 = a.a.Ea("_ancestorBindingInfo"), C2 = a.a.Ea("_dataDependency");
              a.c = {};
              var u3 = { script: true, textarea: true, template: true };
              a.getBindingHandler = function(b3) {
                return a.c[b3];
              };
              var L2 = {};
              a.fa = function(b3, c2, d2, e2, f2) {
                function k3() {
                  var b4 = q3 ? h2() : h2, f3 = a.a.f(b4);
                  c2 ? (a.a.extend(l2, c2), y2 in c2 && (l2[y2] = c2[y2])) : (l2.$parents = [], l2.$root = f3, l2.ko = a);
                  l2[r] = n2;
                  g3 ? f3 = l2.$data : (l2.$rawData = b4, l2.$data = f3);
                  d2 && (l2[d2] = f3);
                  e2 && e2(l2, c2, f3);
                  if (c2 && c2[r] && !a.S.o().Wb(c2[r])) c2[r]();
                  m3 && (l2[C2] = m3);
                  return l2.$data;
                }
                var l2 = this, g3 = b3 === L2, h2 = g3 ? p : b3, q3 = "function" == typeof h2 && !a.O(h2), n2, m3 = f2 && f2.dataDependency;
                f2 && f2.exportDependencies ? k3() : (n2 = a.yb(k3), n2.v(), n2.ja() ? n2.equalityComparer = null : l2[r] = p);
              };
              a.fa.prototype.createChildContext = function(b3, c2, d2, e2) {
                !e2 && c2 && "object" == typeof c2 && (e2 = c2, c2 = e2.as, d2 = e2.extend);
                if (c2 && e2 && e2.noChildContext) {
                  var f2 = "function" == typeof b3 && !a.O(b3);
                  return new a.fa(L2, this, null, function(a2) {
                    d2 && d2(a2);
                    a2[c2] = f2 ? b3() : b3;
                  }, e2);
                }
                return new a.fa(
                  b3,
                  this,
                  c2,
                  function(a2, b4) {
                    a2.$parentContext = b4;
                    a2.$parent = b4.$data;
                    a2.$parents = (b4.$parents || []).slice(0);
                    a2.$parents.unshift(a2.$parent);
                    d2 && d2(a2);
                  },
                  e2
                );
              };
              a.fa.prototype.extend = function(b3, c2) {
                return new a.fa(L2, this, null, function(c3) {
                  a.a.extend(c3, "function" == typeof b3 ? b3(c3) : b3);
                }, c2);
              };
              var A = a.a.g.Z();
              c.prototype.Tc = function() {
                this.Lb && this.Lb.N && this.Lb.N.sd(this.node);
              };
              c.prototype.sd = function(b3) {
                a.a.Ra(this.mb, b3);
                !this.mb.length && this.H && this.Cc();
              };
              c.prototype.Cc = function() {
                this.H = true;
                this.yc.N && !this.mb.length && (this.yc.N = null, a.a.J.zb(this.node, b2), a.i.ma(this.node, a.i.qa), this.Tc());
              };
              a.i = { H: "childrenComplete", qa: "descendantsComplete", subscribe: function(b3, c2, d2, e2, f2) {
                var k3 = a.a.g.Vb(b3, A, {});
                k3.Ga || (k3.Ga = new a.T());
                f2 && f2.notifyImmediately && k3.vb && k3.vb[c2] && a.u.G(d2, e2, [b3]);
                return k3.Ga.subscribe(d2, e2, c2);
              }, ma: function(b3, c2) {
                var d2 = a.a.g.get(b3, A);
                if (d2 && (d2.vb[c2] = true, d2.Ga && d2.Ga.notifySubscribers(b3, c2), c2 == a.i.H)) {
                  if (d2.N) d2.N.Cc();
                  else if (d2.N === p && d2.Ga && d2.Ga.Ya(a.i.qa)) throw Error("descendantsComplete event not supported for bindings on this node");
                }
              }, Db: function(b3, d2) {
                var e2 = a.a.g.Vb(b3, A, {});
                e2.N || (e2.N = new c(b3, e2, d2[y2]));
                return d2[y2] == e2 ? d2 : d2.extend(function(a2) {
                  a2[y2] = e2;
                });
              } };
              a.Td = function(b3) {
                return (b3 = a.a.g.get(b3, A)) && b3.context;
              };
              a.kb = function(b3, c2, d2) {
                1 === b3.nodeType && a.h.Sc(b3);
                return q2(b3, c2, n(d2));
              };
              a.ld = function(b3, c2, d2) {
                d2 = n(d2);
                return a.kb(b3, g2(c2, d2, b3), d2);
              };
              a.Qa = function(a2, b3) {
                1 !== b3.nodeType && 8 !== b3.nodeType || m2(n(a2), b3);
              };
              a.vc = function(a2, b3, c2) {
                !w2 && z2.jQuery && (w2 = z2.jQuery);
                if (2 > arguments.length) {
                  if (b3 = v2.body, !b3) throw Error("ko.applyBindings: could not find document.body; has the document been loaded?");
                } else if (!b3 || 1 !== b3.nodeType && 8 !== b3.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                k2(n(a2, c2), b3);
              };
              a.Dc = function(b3) {
                return !b3 || 1 !== b3.nodeType && 8 !== b3.nodeType ? p : a.Td(b3);
              };
              a.Ec = function(b3) {
                return (b3 = a.Dc(b3)) ? b3.$data : p;
              };
              a.b("bindingHandlers", a.c);
              a.b("bindingEvent", a.i);
              a.b("bindingEvent.subscribe", a.i.subscribe);
              a.b("bindingEvent.startPossiblyAsyncContentBinding", a.i.Db);
              a.b("applyBindings", a.vc);
              a.b("applyBindingsToDescendants", a.Qa);
              a.b("applyBindingAccessorsToNode", a.kb);
              a.b("applyBindingsToNode", a.ld);
              a.b("contextFor", a.Dc);
              a.b("dataFor", a.Ec);
            })();
            (function(b2) {
              function c(c2, e2) {
                var k2 = Object.prototype.hasOwnProperty.call(f, c2) ? f[c2] : b2, l;
                k2 ? k2.subscribe(e2) : (k2 = f[c2] = new a.T(), k2.subscribe(e2), d(c2, function(b3, d2) {
                  var e3 = !(!d2 || !d2.synchronous);
                  g2[c2] = { definition: b3, Gd: e3 };
                  delete f[c2];
                  l || e3 ? k2.notifySubscribers(b3) : a.na.Ab(function() {
                    k2.notifySubscribers(b3);
                  });
                }), l = true);
              }
              function d(a2, b3) {
                e("getConfig", [a2], function(c2) {
                  c2 ? e("loadComponent", [a2, c2], function(a3) {
                    b3(
                      a3,
                      c2
                    );
                  }) : b3(null, null);
                });
              }
              function e(c2, d2, f2, l) {
                l || (l = a.j.loaders.slice(0));
                var g3 = l.shift();
                if (g3) {
                  var n = g3[c2];
                  if (n) {
                    var r = false;
                    if (n.apply(g3, d2.concat(function(a2) {
                      r ? f2(null) : null !== a2 ? f2(a2) : e(c2, d2, f2, l);
                    })) !== b2 && (r = true, !g3.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
                  } else e(c2, d2, f2, l);
                } else f2(null);
              }
              var f = {}, g2 = {};
              a.j = { get: function(d2, e2) {
                var f2 = Object.prototype.hasOwnProperty.call(g2, d2) ? g2[d2] : b2;
                f2 ? f2.Gd ? a.u.G(function() {
                  e2(f2.definition);
                }) : a.na.Ab(function() {
                  e2(f2.definition);
                }) : c(d2, e2);
              }, Bc: function(a2) {
                delete g2[a2];
              }, oc: e };
              a.j.loaders = [];
              a.b("components", a.j);
              a.b("components.get", a.j.get);
              a.b("components.clearCachedDefinition", a.j.Bc);
            })();
            (function() {
              function b2(b3, c2, d2, e2) {
                function g3() {
                  0 === --C2 && e2(h2);
                }
                var h2 = {}, C2 = 2, u3 = d2.template;
                d2 = d2.viewModel;
                u3 ? f(c2, u3, function(c3) {
                  a.j.oc("loadTemplate", [b3, c3], function(a2) {
                    h2.template = a2;
                    g3();
                  });
                }) : g3();
                d2 ? f(c2, d2, function(c3) {
                  a.j.oc("loadViewModel", [b3, c3], function(a2) {
                    h2[m2] = a2;
                    g3();
                  });
                }) : g3();
              }
              function c(a2, b3, d2) {
                if ("function" === typeof b3) d2(function(a3) {
                  return new b3(a3);
                });
                else if ("function" === typeof b3[m2]) d2(b3[m2]);
                else if ("instance" in b3) {
                  var e2 = b3.instance;
                  d2(function() {
                    return e2;
                  });
                } else "viewModel" in b3 ? c(a2, b3.viewModel, d2) : a2("Unknown viewModel value: " + b3);
              }
              function d(b3) {
                switch (a.a.R(b3)) {
                  case "script":
                    return a.a.wa(b3.text);
                  case "textarea":
                    return a.a.wa(b3.value);
                  case "template":
                    if (e(b3.content)) return a.a.Da(b3.content.childNodes);
                }
                return a.a.Da(b3.childNodes);
              }
              function e(a2) {
                return z2.DocumentFragment ? a2 instanceof DocumentFragment : a2 && 11 === a2.nodeType;
              }
              function f(a2, b3, c2) {
                "string" === typeof b3.require ? T2 || z2.require ? (T2 || z2.require)([b3.require], function(a3) {
                  a3 && "object" === typeof a3 && a3.Xd && a3["default"] && (a3 = a3["default"]);
                  c2(a3);
                }) : a2("Uses require, but no AMD loader is present") : c2(b3);
              }
              function g2(a2) {
                return function(b3) {
                  throw Error("Component '" + a2 + "': " + b3);
                };
              }
              var h = {};
              a.j.register = function(b3, c2) {
                if (!c2) throw Error("Invalid configuration for " + b3);
                if (a.j.tb(b3)) throw Error("Component " + b3 + " is already registered");
                h[b3] = c2;
              };
              a.j.tb = function(a2) {
                return Object.prototype.hasOwnProperty.call(h, a2);
              };
              a.j.unregister = function(b3) {
                delete h[b3];
                a.j.Bc(b3);
              };
              a.j.Fc = { getConfig: function(b3, c2) {
                c2(a.j.tb(b3) ? h[b3] : null);
              }, loadComponent: function(a2, c2, d2) {
                var e2 = g2(a2);
                f(e2, c2, function(c3) {
                  b2(a2, e2, c3, d2);
                });
              }, loadTemplate: function(b3, c2, f2) {
                b3 = g2(b3);
                if ("string" === typeof c2) f2(a.a.wa(c2));
                else if (c2 instanceof Array) f2(c2);
                else if (e(c2)) f2(a.a.la(c2.childNodes));
                else if (c2.element) if (c2 = c2.element, z2.HTMLElement ? c2 instanceof HTMLElement : c2 && c2.tagName && 1 === c2.nodeType) f2(d(c2));
                else if ("string" === typeof c2) {
                  var h2 = v2.getElementById(c2);
                  h2 ? f2(d(h2)) : b3("Cannot find element with ID " + c2);
                } else b3("Unknown element type: " + c2);
                else b3("Unknown template value: " + c2);
              }, loadViewModel: function(a2, b3, d2) {
                c(g2(a2), b3, d2);
              } };
              var m2 = "createViewModel";
              a.b("components.register", a.j.register);
              a.b("components.isRegistered", a.j.tb);
              a.b("components.unregister", a.j.unregister);
              a.b("components.defaultLoader", a.j.Fc);
              a.j.loaders.push(a.j.Fc);
              a.j.dd = h;
            })();
            (function() {
              function b2(b3, e) {
                var f = b3.getAttribute("params");
                if (f) {
                  var f = c.parseBindingsString(f, e, b3, { valueAccessors: true, bindingParams: true }), f = a.a.Ia(f, function(c2) {
                    return a.o(c2, null, { l: b3 });
                  }), g2 = a.a.Ia(
                    f,
                    function(c2) {
                      var e2 = c2.v();
                      return c2.ja() ? a.o({ read: function() {
                        return a.a.f(c2());
                      }, write: a.ab(e2) && function(a2) {
                        c2()(a2);
                      }, l: b3 }) : e2;
                    }
                  );
                  Object.prototype.hasOwnProperty.call(g2, "$raw") || (g2.$raw = f);
                  return g2;
                }
                return { $raw: {} };
              }
              a.j.getComponentNameForNode = function(b3) {
                var c2 = a.a.R(b3);
                if (a.j.tb(c2) && (-1 != c2.indexOf("-") || "[object HTMLUnknownElement]" == "" + b3 || 8 >= a.a.W && b3.tagName === c2)) return c2;
              };
              a.j.tc = function(c2, e, f, g2) {
                if (1 === e.nodeType) {
                  var h = a.j.getComponentNameForNode(e);
                  if (h) {
                    c2 = c2 || {};
                    if (c2.component) throw Error('Cannot use the "component" binding on a custom element matching a component');
                    var m2 = { name: h, params: b2(e, f) };
                    c2.component = g2 ? function() {
                      return m2;
                    } : m2;
                  }
                }
                return c2;
              };
              var c = new a.ga();
              9 > a.a.W && (a.j.register = /* @__PURE__ */ (function(a2) {
                return function(b3) {
                  return a2.apply(this, arguments);
                };
              })(a.j.register), v2.createDocumentFragment = /* @__PURE__ */ (function(b3) {
                return function() {
                  var c2 = b3(), f = a.j.dd, g2;
                  for (g2 in f) ;
                  return c2;
                };
              })(v2.createDocumentFragment));
            })();
            (function() {
              function b2(b3, c2, d2) {
                c2 = c2.template;
                if (!c2) throw Error("Component '" + b3 + "' has no template");
                b3 = a.a.Da(c2);
                a.h.xa(d2, b3);
              }
              function c(a2, b3, c2) {
                var d2 = a2.createViewModel;
                return d2 ? d2.call(
                  a2,
                  b3,
                  c2
                ) : b3;
              }
              var d = 0;
              a.c.component = { init: function(e, f, g2, h, m2) {
                function k2() {
                  var a2 = l && l.dispose;
                  "function" === typeof a2 && a2.call(l);
                  n && n.s();
                  q2 = l = n = null;
                }
                var l, q2, n, r = a.a.la(a.h.childNodes(e));
                a.h.Fa(e);
                a.a.J.oa(e, k2);
                a.o(function() {
                  var g3 = a.a.f(f()), h2, u3;
                  "string" === typeof g3 ? h2 = g3 : (h2 = a.a.f(g3.name), u3 = a.a.f(g3.params));
                  if (!h2) throw Error("No component name specified");
                  var p2 = a.i.Db(e, m2), A = q2 = ++d;
                  a.j.get(h2, function(d2) {
                    if (q2 === A) {
                      k2();
                      if (!d2) throw Error("Unknown component '" + h2 + "'");
                      b2(h2, d2, e);
                      var f2 = c(d2, u3, { element: e, templateNodes: r });
                      d2 = p2.createChildContext(f2, { extend: function(a2) {
                        a2.$component = f2;
                        a2.$componentTemplateNodes = r;
                      } });
                      f2 && f2.koDescendantsComplete && (n = a.i.subscribe(e, a.i.qa, f2.koDescendantsComplete, f2));
                      l = f2;
                      a.Qa(d2, e);
                    }
                  });
                }, null, { l: e });
                return { controlsDescendantBindings: true };
              } };
              a.h.ea.component = true;
            })();
            var W2 = { "class": "className", "for": "htmlFor" };
            a.c.attr = { update: function(b2, c) {
              var d = a.a.f(c()) || {};
              a.a.P(d, function(c2, d2) {
                d2 = a.a.f(d2);
                var g2 = c2.indexOf(":"), g2 = "lookupNamespaceURI" in b2 && 0 < g2 && b2.lookupNamespaceURI(c2.substr(0, g2)), h = false === d2 || null === d2 || d2 === p;
                h ? g2 ? b2.removeAttributeNS(g2, c2) : b2.removeAttribute(c2) : d2 = d2.toString();
                8 >= a.a.W && c2 in W2 ? (c2 = W2[c2], h ? b2.removeAttribute(c2) : b2[c2] = d2) : h || (g2 ? b2.setAttributeNS(g2, c2, d2) : b2.setAttribute(c2, d2));
                "name" === c2 && a.a.Yc(b2, h ? "" : d2);
              });
            } };
            (function() {
              a.c.checked = { after: ["value", "attr"], init: function(b2, c, d) {
                function e() {
                  var e2 = b2.checked, f2 = g2();
                  if (!a.S.$a() && (e2 || !m2 && !a.S.ra())) {
                    var k3 = a.u.G(c);
                    if (l) {
                      var n2 = q2 ? k3.v() : k3, A = r;
                      r = f2;
                      A !== f2 ? e2 && (a.a.Pa(n2, f2, true), a.a.Pa(n2, A, false)) : a.a.Pa(n2, f2, e2);
                      q2 && a.ab(k3) && k3(n2);
                    } else h && (f2 === p ? f2 = e2 : e2 || (f2 = p)), a.m.gb(
                      k3,
                      d,
                      "checked",
                      f2,
                      true
                    );
                  }
                }
                function f() {
                  var d2 = a.a.f(c()), e2 = g2();
                  l ? (b2.checked = null != d2 && 0 <= a.a.A(d2, e2), r = e2) : b2.checked = h && e2 === p ? !!d2 : g2() === d2;
                }
                var g2 = a.yb(function() {
                  if (d.has("checkedValue")) return a.a.f(d.get("checkedValue"));
                  if (n) return d.has("value") ? a.a.f(d.get("value")) : b2.value;
                }), h = "checkbox" == b2.type, m2 = "radio" == b2.type;
                if (h || m2) {
                  var k2 = c(), l = h && a.a.f(k2) instanceof Array, q2 = !(l && k2.push && k2.splice), n = m2 || l, r = l ? g2() : p;
                  m2 && !b2.name && a.c.uniqueName.init(b2, function() {
                    return true;
                  });
                  a.o(e, null, { l: b2 });
                  a.a.B(b2, "click", e);
                  a.o(
                    f,
                    null,
                    { l: b2 }
                  );
                  k2 = p;
                }
              } };
              a.m.ya.checked = true;
              a.c.checkedValue = { update: function(b2, c) {
                b2.value = a.a.f(c());
              } };
            })();
            a.c["class"] = { update: function(b2, c) {
              var d = a.a.Eb(a.a.f(c()));
              a.a.Fb(b2, b2.__ko__cssValue, false);
              b2.__ko__cssValue = d;
              a.a.Fb(b2, d, true);
            } };
            a.c.css = { update: function(b2, c) {
              var d = a.a.f(c());
              null !== d && "object" == typeof d ? a.a.P(d, function(c2, d2) {
                d2 = a.a.f(d2);
                a.a.Fb(b2, c2, d2);
              }) : a.c["class"].update(b2, c);
            } };
            a.c.enable = { update: function(b2, c) {
              var d = a.a.f(c());
              d && b2.disabled ? b2.removeAttribute("disabled") : d || b2.disabled || (b2.disabled = true);
            } };
            a.c.disable = { update: function(b2, c) {
              a.c.enable.update(b2, function() {
                return !a.a.f(c());
              });
            } };
            a.c.event = { init: function(b2, c, d, e, f) {
              var g2 = c() || {};
              a.a.P(g2, function(g3) {
                "string" == typeof g3 && a.a.B(b2, g3, function(b3) {
                  var k2, l = c()[g3];
                  if (l) {
                    try {
                      var q2 = a.a.la(arguments);
                      e = f.$data;
                      q2.unshift(e);
                      k2 = l.apply(e, q2);
                    } finally {
                      true !== k2 && (b3.preventDefault ? b3.preventDefault() : b3.returnValue = false);
                    }
                    false === d.get(g3 + "Bubble") && (b3.cancelBubble = true, b3.stopPropagation && b3.stopPropagation());
                  }
                });
              });
            } };
            a.c.foreach = { Rc: function(b2) {
              return function() {
                var c = b2(), d = a.a.bc(c);
                if (!d || "number" == typeof d.length) return { foreach: c, templateEngine: a.ba.Oa };
                a.a.f(c);
                return { foreach: d.data, as: d.as, noChildContext: d.noChildContext, includeDestroyed: d.includeDestroyed, afterAdd: d.afterAdd, beforeRemove: d.beforeRemove, afterRender: d.afterRender, beforeMove: d.beforeMove, afterMove: d.afterMove, templateEngine: a.ba.Oa };
              };
            }, init: function(b2, c) {
              return a.c.template.init(b2, a.c.foreach.Rc(c));
            }, update: function(b2, c, d, e, f) {
              return a.c.template.update(b2, a.c.foreach.Rc(c), d, e, f);
            } };
            a.m.Ta.foreach = false;
            a.h.ea.foreach = true;
            a.c.hasfocus = { init: function(b2, c, d) {
              function e(e2) {
                b2.__ko_hasfocusUpdating = true;
                var f2 = b2.ownerDocument;
                if ("activeElement" in f2) {
                  var g3;
                  try {
                    g3 = f2.activeElement;
                  } catch (l) {
                    g3 = f2.body;
                  }
                  e2 = g3 === b2;
                }
                f2 = c();
                a.m.gb(f2, d, "hasfocus", e2, true);
                b2.__ko_hasfocusLastValue = e2;
                b2.__ko_hasfocusUpdating = false;
              }
              var f = e.bind(null, true), g2 = e.bind(null, false);
              a.a.B(b2, "focus", f);
              a.a.B(b2, "focusin", f);
              a.a.B(b2, "blur", g2);
              a.a.B(b2, "focusout", g2);
              b2.__ko_hasfocusLastValue = false;
            }, update: function(b2, c) {
              var d = !!a.a.f(c());
              b2.__ko_hasfocusUpdating || b2.__ko_hasfocusLastValue === d || (d ? b2.focus() : b2.blur(), !d && b2.__ko_hasfocusLastValue && b2.ownerDocument.body.focus(), a.u.G(a.a.Gb, null, [b2, d ? "focusin" : "focusout"]));
            } };
            a.m.ya.hasfocus = true;
            a.c.hasFocus = a.c.hasfocus;
            a.m.ya.hasFocus = "hasfocus";
            a.c.html = { init: function() {
              return { controlsDescendantBindings: true };
            }, update: function(b2, c) {
              a.a.fc(b2, c());
            } };
            (function() {
              function b2(b3, d, e) {
                a.c[b3] = { init: function(b4, c, h, m2, k2) {
                  var l, q2, n = {}, r, y2, p2;
                  if (d) {
                    m2 = h.get("as");
                    var u3 = h.get("noChildContext");
                    p2 = !(m2 && u3);
                    n = { as: m2, noChildContext: u3, exportDependencies: p2 };
                  }
                  y2 = (r = "render" == h.get("completeOn")) || h.has(a.i.qa);
                  a.o(function() {
                    var h2 = a.a.f(c()), m3 = !e !== !h2, u4 = !q2, t2;
                    if (p2 || m3 !== l) {
                      y2 && (k2 = a.i.Db(b4, k2));
                      if (m3) {
                        if (!d || p2) n.dataDependency = a.S.o();
                        t2 = d ? k2.createChildContext("function" == typeof h2 ? h2 : c, n) : a.S.ra() ? k2.extend(null, n) : k2;
                      }
                      u4 && a.S.ra() && (q2 = a.a.Da(a.h.childNodes(b4), true));
                      m3 ? (u4 || a.h.xa(b4, a.a.Da(q2)), a.Qa(t2, b4)) : (a.h.Fa(b4), r || a.i.ma(b4, a.i.H));
                      l = m3;
                    }
                  }, null, { l: b4 });
                  return { controlsDescendantBindings: true };
                } };
                a.m.Ta[b3] = false;
                a.h.ea[b3] = true;
              }
              b2("if");
              b2("ifnot", false, true);
              b2("with", true);
            })();
            a.c.let = { init: function(b2, c, d, e, f) {
              c = f.extend(c);
              a.Qa(c, b2);
              return { controlsDescendantBindings: true };
            } };
            a.h.ea.let = true;
            var Q2 = {};
            a.c.options = { init: function(b2) {
              if ("select" !== a.a.R(b2)) throw Error("options binding applies only to SELECT elements");
              for (; 0 < b2.length; ) b2.remove(0);
              return { controlsDescendantBindings: true };
            }, update: function(b2, c, d) {
              function e() {
                return a.a.lb(b2.options, function(a2) {
                  return a2.selected;
                });
              }
              function f(a2, b3, c2) {
                var d2 = typeof b3;
                return "function" == d2 ? b3(a2) : "string" == d2 ? a2[b3] : c2;
              }
              function g2(c2, d2) {
                if (y2 && l) a.i.ma(b2, a.i.H);
                else if (r.length) {
                  var e2 = 0 <= a.a.A(r, a.w.M(d2[0]));
                  a.a.Zc(d2[0], e2);
                  y2 && !e2 && a.u.G(a.a.Gb, null, [b2, "change"]);
                }
              }
              var h = b2.multiple, m2 = 0 != b2.length && h ? b2.scrollTop : null, k2 = a.a.f(c()), l = d.get("valueAllowUnset") && d.has("value"), q2 = d.get("optionsIncludeDestroyed");
              c = {};
              var n, r = [];
              l || (h ? r = a.a.Nb(e(), a.w.M) : 0 <= b2.selectedIndex && r.push(a.w.M(b2.options[b2.selectedIndex])));
              k2 && ("undefined" == typeof k2.length && (k2 = [k2]), n = a.a.lb(k2, function(b3) {
                return q2 || b3 === p || null === b3 || !a.a.f(b3._destroy);
              }), d.has("optionsCaption") && (k2 = a.a.f(d.get("optionsCaption")), null !== k2 && k2 !== p && n.unshift(Q2)));
              var y2 = false;
              c.beforeRemove = function(a2) {
                b2.removeChild(a2);
              };
              k2 = g2;
              d.has("optionsAfterRender") && "function" == typeof d.get("optionsAfterRender") && (k2 = function(b3, c2) {
                g2(0, c2);
                a.u.G(d.get("optionsAfterRender"), null, [c2[0], b3 !== Q2 ? b3 : p]);
              });
              a.a.ec(b2, n, function(c2, e2, g3) {
                g3.length && (r = !l && g3[0].selected ? [a.w.M(g3[0])] : [], y2 = true);
                e2 = b2.ownerDocument.createElement("option");
                c2 === Q2 ? (a.a.Cb(e2, d.get("optionsCaption")), a.w.fb(e2, p)) : (g3 = f(c2, d.get("optionsValue"), c2), a.w.fb(e2, a.a.f(g3)), c2 = f(c2, d.get("optionsText"), g3), a.a.Cb(e2, c2));
                return [e2];
              }, c, k2);
              if (!l) {
                var C2;
                h ? C2 = r.length && e().length < r.length : C2 = r.length && 0 <= b2.selectedIndex ? a.w.M(b2.options[b2.selectedIndex]) !== r[0] : r.length || 0 <= b2.selectedIndex;
                C2 && a.u.G(a.a.Gb, null, [b2, "change"]);
              }
              (l || a.S.$a()) && a.i.ma(b2, a.i.H);
              a.a.wd(b2);
              m2 && 20 < Math.abs(m2 - b2.scrollTop) && (b2.scrollTop = m2);
            } };
            a.c.options.$b = a.a.g.Z();
            a.c.selectedOptions = { init: function(b2, c, d) {
              function e() {
                var e2 = c(), f2 = [];
                a.a.D(b2.getElementsByTagName("option"), function(b3) {
                  b3.selected && f2.push(a.w.M(b3));
                });
                a.m.gb(
                  e2,
                  d,
                  "selectedOptions",
                  f2
                );
              }
              function f() {
                var d2 = a.a.f(c()), e2 = b2.scrollTop;
                d2 && "number" == typeof d2.length && a.a.D(b2.getElementsByTagName("option"), function(b3) {
                  var c2 = 0 <= a.a.A(d2, a.w.M(b3));
                  b3.selected != c2 && a.a.Zc(b3, c2);
                });
                b2.scrollTop = e2;
              }
              if ("select" != a.a.R(b2)) throw Error("selectedOptions binding applies only to SELECT elements");
              var g2;
              a.i.subscribe(b2, a.i.H, function() {
                g2 ? e() : (a.a.B(b2, "change", e), g2 = a.o(f, null, { l: b2 }));
              }, null, { notifyImmediately: true });
            }, update: function() {
            } };
            a.m.ya.selectedOptions = true;
            a.c.style = { update: function(b2, c) {
              var d = a.a.f(c() || {});
              a.a.P(d, function(c2, d2) {
                d2 = a.a.f(d2);
                if (null === d2 || d2 === p || false === d2) d2 = "";
                if (w2) w2(b2).css(c2, d2);
                else if (/^--/.test(c2)) b2.style.setProperty(c2, d2);
                else {
                  c2 = c2.replace(/-(\w)/g, function(a2, b3) {
                    return b3.toUpperCase();
                  });
                  var g2 = b2.style[c2];
                  b2.style[c2] = d2;
                  d2 === g2 || b2.style[c2] != g2 || isNaN(d2) || (b2.style[c2] = d2 + "px");
                }
              });
            } };
            a.c.submit = { init: function(b2, c, d, e, f) {
              if ("function" != typeof c()) throw Error("The value for a submit binding must be a function");
              a.a.B(b2, "submit", function(a2) {
                var d2, e2 = c();
                try {
                  d2 = e2.call(f.$data, b2);
                } finally {
                  true !== d2 && (a2.preventDefault ? a2.preventDefault() : a2.returnValue = false);
                }
              });
            } };
            a.c.text = { init: function() {
              return { controlsDescendantBindings: true };
            }, update: function(b2, c) {
              a.a.Cb(b2, c());
            } };
            a.h.ea.text = true;
            (function() {
              if (z2 && z2.navigator) {
                var b2 = function(a2) {
                  if (a2) return parseFloat(a2[1]);
                }, c = z2.navigator.userAgent, d, e, f, g2, h;
                (d = z2.opera && z2.opera.version && parseInt(z2.opera.version())) || (h = b2(c.match(/Edge\/([^ ]+)$/))) || b2(c.match(/Chrome\/([^ ]+)/)) || (e = b2(c.match(/Version\/([^ ]+) Safari/))) || (f = b2(c.match(/Firefox\/([^ ]+)/))) || (g2 = a.a.W || b2(c.match(/MSIE ([^ ]+)/))) || (g2 = b2(c.match(/rv:([^ )]+)/)));
              }
              if (8 <= g2 && 10 > g2) var m2 = a.a.g.Z(), k2 = a.a.g.Z(), l = function(b3) {
                var c2 = this.activeElement;
                (c2 = c2 && a.a.g.get(c2, k2)) && c2(b3);
              }, q2 = function(b3, c2) {
                var d2 = b3.ownerDocument;
                a.a.g.get(d2, m2) || (a.a.g.set(d2, m2, true), a.a.B(d2, "selectionchange", l));
                a.a.g.set(b3, k2, c2);
              };
              a.c.textInput = { init: function(b3, c2, k3) {
                function l2(c3, d2) {
                  a.a.B(b3, c3, d2);
                }
                function m3() {
                  var d2 = a.a.f(c2());
                  if (null === d2 || d2 === p) d2 = "";
                  z3 !== p && d2 === z3 ? a.a.setTimeout(m3, 4) : b3.value !== d2 && (D3 = true, b3.value = d2, D3 = false, w3 = b3.value);
                }
                function t2() {
                  v3 || (z3 = b3.value, v3 = a.a.setTimeout(
                    A,
                    4
                  ));
                }
                function A() {
                  clearTimeout(v3);
                  z3 = v3 = p;
                  var d2 = b3.value;
                  w3 !== d2 && (w3 = d2, a.m.gb(c2(), k3, "textInput", d2));
                }
                var w3 = b3.value, v3, z3, B3 = 9 == a.a.W ? t2 : A, D3 = false;
                g2 && l2("keypress", A);
                11 > g2 && l2("propertychange", function(a2) {
                  D3 || "value" !== a2.propertyName || B3(a2);
                });
                8 == g2 && (l2("keyup", A), l2("keydown", A));
                q2 && (q2(b3, B3), l2("dragend", t2));
                (!g2 || 9 <= g2) && l2("input", B3);
                5 > e && "textarea" === a.a.R(b3) ? (l2("keydown", t2), l2("paste", t2), l2("cut", t2)) : 11 > d ? l2("keydown", t2) : 4 > f ? (l2("DOMAutoComplete", A), l2("dragdrop", A), l2("drop", A)) : h && "number" === b3.type && l2("keydown", t2);
                l2(
                  "change",
                  A
                );
                l2("blur", A);
                a.o(m3, null, { l: b3 });
              } };
              a.m.ya.textInput = true;
              a.c.textinput = { preprocess: function(a2, b3, c2) {
                c2("textInput", a2);
              } };
            })();
            a.c.uniqueName = { init: function(b2, c) {
              if (c()) {
                var d = "ko_unique_" + ++a.c.uniqueName.rd;
                a.a.Yc(b2, d);
              }
            } };
            a.c.uniqueName.rd = 0;
            a.c.using = { init: function(b2, c, d, e, f) {
              var g2;
              d.has("as") && (g2 = { as: d.get("as"), noChildContext: d.get("noChildContext") });
              c = f.createChildContext(c, g2);
              a.Qa(c, b2);
              return { controlsDescendantBindings: true };
            } };
            a.h.ea.using = true;
            a.c.value = { init: function(b2, c, d) {
              var e = a.a.R(b2), f = "input" == e;
              if (!f || "checkbox" != b2.type && "radio" != b2.type) {
                var g2 = [], h = d.get("valueUpdate"), m2 = false, k2 = null;
                h && ("string" == typeof h ? g2 = [h] : g2 = a.a.wc(h), a.a.Ra(g2, "change"));
                var l = function() {
                  k2 = null;
                  m2 = false;
                  var e2 = c(), f2 = a.w.M(b2);
                  a.m.gb(e2, d, "value", f2);
                };
                !a.a.W || !f || "text" != b2.type || "off" == b2.autocomplete || b2.form && "off" == b2.form.autocomplete || -1 != a.a.A(g2, "propertychange") || (a.a.B(b2, "propertychange", function() {
                  m2 = true;
                }), a.a.B(b2, "focus", function() {
                  m2 = false;
                }), a.a.B(b2, "blur", function() {
                  m2 && l();
                }));
                a.a.D(g2, function(c2) {
                  var d2 = l;
                  a.a.Ud(c2, "after") && (d2 = function() {
                    k2 = a.w.M(b2);
                    a.a.setTimeout(l, 0);
                  }, c2 = c2.substring(5));
                  a.a.B(b2, c2, d2);
                });
                var q2;
                q2 = f && "file" == b2.type ? function() {
                  var d2 = a.a.f(c());
                  null === d2 || d2 === p || "" === d2 ? b2.value = "" : a.u.G(l);
                } : function() {
                  var f2 = a.a.f(c()), g3 = a.w.M(b2);
                  if (null !== k2 && f2 === k2) a.a.setTimeout(q2, 0);
                  else if (f2 !== g3 || g3 === p) "select" === e ? (g3 = d.get("valueAllowUnset"), a.w.fb(b2, f2, g3), g3 || f2 === a.w.M(b2) || a.u.G(l)) : a.w.fb(b2, f2);
                };
                if ("select" === e) {
                  var n;
                  a.a.B(b2, "change", function() {
                    n && l();
                  });
                  a.i.subscribe(b2, a.i.H, function() {
                    n ? d.get("valueAllowUnset") ? q2() : l() : n = a.o(q2, null, { l: b2 });
                  }, null, { notifyImmediately: true });
                } else a.a.B(b2, "change", l), a.o(q2, null, { l: b2 });
              } else a.kb(b2, { checkedValue: c });
            }, update: function() {
            } };
            a.m.ya.value = true;
            a.c.visible = { update: function(b2, c) {
              var d = a.a.f(c()), e = "none" != b2.style.display;
              d && !e ? b2.style.display = "" : !d && e && (b2.style.display = "none");
            } };
            a.c.hidden = { update: function(b2, c) {
              a.c.visible.update(b2, function() {
                return !a.a.f(c());
              });
            } };
            (function(b2) {
              a.c[b2] = { init: function(c, d, e, f, g2) {
                return a.c.event.init.call(
                  this,
                  c,
                  function() {
                    var a2 = {};
                    a2[b2] = d();
                    return a2;
                  },
                  e,
                  f,
                  g2
                );
              } };
            })("click");
            a.ca = function() {
            };
            a.ca.prototype.renderTemplateSource = function() {
              throw Error("Override renderTemplateSource");
            };
            a.ca.prototype.createJavaScriptEvaluatorBlock = function() {
              throw Error("Override createJavaScriptEvaluatorBlock");
            };
            a.ca.prototype.makeTemplateSource = function(b2, c) {
              if ("string" == typeof b2) {
                c = c || v2;
                var d = c.getElementById(b2);
                if (!d) throw Error("Cannot find template with ID " + b2);
                return new a.C.F(d);
              }
              if (1 == b2.nodeType || 8 == b2.nodeType) return new a.C.ia(b2);
              throw Error("Unknown template type: " + b2);
            };
            a.ca.prototype.renderTemplate = function(a2, c, d, e) {
              a2 = this.makeTemplateSource(a2, e);
              return this.renderTemplateSource(a2, c, d, e);
            };
            a.ca.prototype.isTemplateRewritten = function(a2, c) {
              return false === this.allowTemplateRewriting ? true : this.makeTemplateSource(a2, c).data("isRewritten");
            };
            a.ca.prototype.rewriteTemplate = function(a2, c, d) {
              a2 = this.makeTemplateSource(a2, d);
              c = c(a2.text());
              a2.text(c);
              a2.data("isRewritten", true);
            };
            a.b("templateEngine", a.ca);
            a.kc = /* @__PURE__ */ (function() {
              function b2(b3, c2, d2, h) {
                b3 = a.m.ac(b3);
                for (var m2 = a.m.Ta, k2 = 0; k2 < b3.length; k2++) {
                  var l = b3[k2].key;
                  if (Object.prototype.hasOwnProperty.call(m2, l)) {
                    var q2 = m2[l];
                    if ("function" === typeof q2) {
                      if (l = q2(b3[k2].value)) throw Error(l);
                    } else if (!q2) throw Error("This template engine does not support the '" + l + "' binding within its templates");
                  }
                }
                d2 = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.m.wb(b3, { valueAccessors: true }) + " } })()},'" + d2.toLowerCase() + "')";
                return h.createJavaScriptEvaluatorBlock(d2) + c2;
              }
              var c = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi, d = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
              return { xd: function(b3, c2, d2) {
                c2.isTemplateRewritten(b3, d2) || c2.rewriteTemplate(b3, function(b4) {
                  return a.kc.Ld(b4, c2);
                }, d2);
              }, Ld: function(a2, f) {
                return a2.replace(c, function(a3, c2, d2, e, l) {
                  return b2(l, c2, d2, f);
                }).replace(d, function(a3, c2) {
                  return b2(c2, "<!-- ko -->", "#comment", f);
                });
              }, md: function(b3, c2) {
                return a.aa.Yb(function(d2, h) {
                  var m2 = d2.nextSibling;
                  m2 && m2.nodeName.toLowerCase() === c2 && a.kb(m2, b3, h);
                });
              } };
            })();
            a.b("__tr_ambtns", a.kc.md);
            (function() {
              a.C = {};
              a.C.F = function(b3) {
                if (this.F = b3) {
                  var c2 = a.a.R(b3);
                  this.cb = "script" === c2 ? 1 : "textarea" === c2 ? 2 : "template" == c2 && b3.content && 11 === b3.content.nodeType ? 3 : 4;
                }
              };
              a.C.F.prototype.text = function() {
                var b3 = 1 === this.cb ? "text" : 2 === this.cb ? "value" : "innerHTML";
                if (0 == arguments.length) return this.F[b3];
                var c2 = arguments[0];
                "innerHTML" === b3 ? a.a.fc(this.F, c2) : this.F[b3] = c2;
              };
              var b2 = a.a.g.Z() + "_";
              a.C.F.prototype.data = function(c2) {
                if (1 === arguments.length) return a.a.g.get(this.F, b2 + c2);
                a.a.g.set(this.F, b2 + c2, arguments[1]);
              };
              var c = a.a.g.Z();
              a.C.F.prototype.nodes = function() {
                var b3 = this.F;
                if (0 == arguments.length) {
                  var e = a.a.g.get(b3, c) || {}, f = e.nb || (3 === this.cb ? b3.content : 4 === this.cb ? b3 : p);
                  if (!f || e.jd) {
                    var g2 = this.text();
                    g2 && g2 !== e.eb && (f = a.a.Md(g2, b3.ownerDocument), a.a.g.set(b3, c, { nb: f, eb: g2, jd: true }));
                  }
                  return f;
                }
                e = arguments[0];
                this.cb !== p && this.text("");
                a.a.g.set(b3, c, { nb: e });
              };
              a.C.ia = function(a2) {
                this.F = a2;
              };
              a.C.ia.prototype = new a.C.F();
              a.C.ia.prototype.constructor = a.C.ia;
              a.C.ia.prototype.text = function() {
                if (0 == arguments.length) {
                  var b3 = a.a.g.get(this.F, c) || {};
                  b3.eb === p && b3.nb && (b3.eb = b3.nb.innerHTML);
                  return b3.eb;
                }
                a.a.g.set(
                  this.F,
                  c,
                  { eb: arguments[0] }
                );
              };
              a.b("templateSources", a.C);
              a.b("templateSources.domElement", a.C.F);
              a.b("templateSources.anonymousTemplate", a.C.ia);
            })();
            (function() {
              function b2(b3, c2, d2) {
                var e2;
                for (c2 = a.h.nextSibling(c2); b3 && (e2 = b3) !== c2; ) b3 = a.h.nextSibling(e2), d2(e2, b3);
              }
              function c(c2, d2) {
                if (c2.length) {
                  var e2 = c2[0], f2 = c2[c2.length - 1], g3 = e2.parentNode, h2 = a.ga.instance, m3 = h2.preprocessNode;
                  if (m3) {
                    b2(e2, f2, function(a2, b3) {
                      var c3 = a2.previousSibling, d3 = m3.call(h2, a2);
                      d3 && (a2 === e2 && (e2 = d3[0] || b3), a2 === f2 && (f2 = d3[d3.length - 1] || c3));
                    });
                    c2.length = 0;
                    if (!e2) return;
                    e2 === f2 ? c2.push(e2) : (c2.push(e2, f2), a.a.Wa(c2, g3));
                  }
                  b2(e2, f2, function(b3) {
                    1 !== b3.nodeType && 8 !== b3.nodeType || a.vc(d2, b3);
                  });
                  b2(e2, f2, function(b3) {
                    1 !== b3.nodeType && 8 !== b3.nodeType || a.aa.cd(b3, [d2]);
                  });
                  a.a.Wa(c2, g3);
                }
              }
              function d(a2) {
                return a2.nodeType ? a2 : 0 < a2.length ? a2[0] : null;
              }
              function e(b3, e2, f2, h2, m3) {
                m3 = m3 || {};
                var p2 = (b3 && d(b3) || f2 || {}).ownerDocument, C2 = m3.templateEngine || g2;
                a.kc.xd(f2, C2, p2);
                f2 = C2.renderTemplate(f2, h2, m3, p2);
                if ("number" != typeof f2.length || 0 < f2.length && "number" != typeof f2[0].nodeType) throw Error("Template engine must return an array of DOM nodes");
                p2 = false;
                switch (e2) {
                  case "replaceChildren":
                    a.h.xa(
                      b3,
                      f2
                    );
                    p2 = true;
                    break;
                  case "replaceNode":
                    a.a.Xc(b3, f2);
                    p2 = true;
                    break;
                  case "ignoreTargetNode":
                    break;
                  default:
                    throw Error("Unknown renderMode: " + e2);
                }
                p2 && (c(f2, h2), m3.afterRender && a.u.G(m3.afterRender, null, [f2, h2[m3.as || "$data"]]), "replaceChildren" == e2 && a.i.ma(b3, a.i.H));
                return f2;
              }
              function f(b3, c2, d2) {
                return a.O(b3) ? b3() : "function" === typeof b3 ? b3(c2, d2) : b3;
              }
              var g2;
              a.gc = function(b3) {
                if (b3 != p && !(b3 instanceof a.ca)) throw Error("templateEngine must inherit from ko.templateEngine");
                g2 = b3;
              };
              a.dc = function(b3, c2, h2, n, m3) {
                h2 = h2 || {};
                if ((h2.templateEngine || g2) == p) throw Error("Set a template engine before calling renderTemplate");
                m3 = m3 || "replaceChildren";
                if (n) {
                  var y2 = d(n);
                  return a.$(function() {
                    var g3 = c2 && c2 instanceof a.fa ? c2 : new a.fa(c2, null, null, null, { exportDependencies: true }), p2 = f(b3, g3.$data, g3), g3 = e(n, m3, p2, g3, h2);
                    "replaceNode" == m3 && (n = g3, y2 = d(n));
                  }, null, { Ua: function() {
                    return !y2 || !a.a.Tb(y2);
                  }, l: y2 && "replaceNode" == m3 ? y2.parentNode : y2 });
                }
                return a.aa.Yb(function(d2) {
                  a.dc(b3, c2, h2, d2, "replaceNode");
                });
              };
              a.Qd = function(b3, d2, g3, h2, m3) {
                function y2(a2) {
                  B3.push(a2);
                  if (!D3) {
                    D3 = true;
                    try {
                      for (; B3.length; ) try {
                        t2(
                          d2.v(),
                          B3[0]
                        );
                      } finally {
                        B3.shift();
                      }
                    } finally {
                      D3 = false;
                    }
                  }
                }
                function t2(b4, c2) {
                  a.u.G(a.a.ec, null, [h2, b4, w3, g3, u3, c2]);
                  a.i.ma(h2, a.i.H);
                }
                function u3(a2, b4) {
                  c(b4, A);
                  g3.afterRender && g3.afterRender(b4, a2);
                  A = null;
                }
                function w3(a2, c2) {
                  A = m3.createChildContext(a2, { as: v3, noChildContext: g3.noChildContext, extend: function(a3) {
                    a3.$index = c2;
                    v3 && (a3[v3 + "Index"] = c2);
                  } });
                  var d3 = f(b3, a2, A);
                  return e(h2, "ignoreTargetNode", d3, A, g3);
                }
                var A, v3 = g3.as, z3 = false === g3.includeDestroyed || a.options.foreachHidesDestroyed && !g3.includeDestroyed;
                if (z3 || g3.beforeRemove || !a.Pc(d2)) return a.$(function() {
                  var b4 = a.a.f(d2) || [];
                  "undefined" == typeof b4.length && (b4 = [b4]);
                  z3 && (b4 = a.a.lb(b4, function(b5) {
                    return b5 === p || null === b5 || !a.a.f(b5._destroy);
                  }));
                  t2(b4);
                }, null, { l: h2 });
                var B3 = [], D3 = false, E3 = d2.subscribe(y2, null, "arrayChange");
                E3.l(h2);
                y2();
                return E3;
              };
              var h = a.a.g.Z(), m2 = a.a.g.Z();
              a.c.template = { init: function(b3, c2) {
                var d2 = a.a.f(c2());
                if ("string" == typeof d2 || "name" in d2) a.h.Fa(b3);
                else if ("nodes" in d2) {
                  d2 = d2.nodes || [];
                  if (a.O(d2)) throw Error('The "nodes" option must be a plain, non-observable array.');
                  var e2 = d2[0] && d2[0].parentNode;
                  e2 && a.a.g.get(e2, m2) || (e2 = a.a.Zb(d2), a.a.g.set(e2, m2, true));
                  new a.C.ia(b3).nodes(e2);
                } else if (d2 = a.h.childNodes(b3), 0 < d2.length) e2 = a.a.Zb(d2), new a.C.ia(b3).nodes(e2);
                else throw Error("Anonymous template defined, but no template content was provided");
                return { controlsDescendantBindings: true };
              }, update: function(b3, c2, d2, e2, f2) {
                var g3 = c2();
                c2 = a.a.f(g3);
                d2 = true;
                e2 = null;
                "string" == typeof c2 ? c2 = {} : (g3 = "name" in c2 ? c2.name : b3, "if" in c2 && (d2 = a.a.f(c2["if"])), d2 && "ifnot" in c2 && (d2 = !a.a.f(c2.ifnot)));
                d2 && !g3 && (d2 = false);
                var m3 = a.a.g.get(b3, h);
                m3 && "function" == typeof m3.s && m3.s();
                "foreach" in c2 ? e2 = a.Qd(g3, d2 && c2.foreach || [], c2, b3, f2) : d2 ? (d2 = f2, "data" in c2 && (d2 = f2.createChildContext(c2.data, { as: c2.as, noChildContext: c2.noChildContext, exportDependencies: true })), e2 = a.dc(g3, d2, c2, b3)) : a.h.Fa(b3);
                a.a.g.set(b3, h, !e2 || e2.ja && !e2.ja() ? p : e2);
              } };
              a.m.Ta.template = function(b3) {
                b3 = a.m.ac(b3);
                return 1 == b3.length && b3[0].unknown || a.m.Id(b3, "name") ? null : "This template engine does not support anonymous templates nested within its templates";
              };
              a.h.ea.template = true;
            })();
            a.b("setTemplateEngine", a.gc);
            a.b("renderTemplate", a.dc);
            a.a.Kc = function(a2, c, d) {
              if (a2.length && c.length) {
                var e, f, g2, h, m2;
                for (e = f = 0; (!d || e < d) && (h = a2[f]); ++f) {
                  for (g2 = 0; m2 = c[g2]; ++g2) if (h.value === m2.value) {
                    h.moved = m2.index;
                    m2.moved = h.index;
                    c.splice(g2, 1);
                    e = g2 = 0;
                    break;
                  }
                  e += g2;
                }
              }
            };
            a.a.Qb = /* @__PURE__ */ (function() {
              function b2(b3, d, e, f, g2) {
                var h = Math.min, m2 = Math.max, k2 = [], l, p2 = b3.length, n, r = d.length, t2 = r - p2 || 1, C2 = p2 + r + 1, u3, v3, w3;
                for (l = 0; l <= p2; l++) for (v3 = u3, k2.push(u3 = []), w3 = h(r, l + t2), n = m2(0, l - 1); n <= w3; n++) u3[n] = n ? l ? b3[l - 1] === d[n - 1] ? v3[n - 1] : h(v3[n] || C2, u3[n - 1] || C2) + 1 : n + 1 : l + 1;
                h = [];
                m2 = [];
                t2 = [];
                l = p2;
                for (n = r; l || n; ) r = k2[l][n] - 1, n && r === k2[l][n - 1] ? m2.push(h[h.length] = { status: e, value: d[--n], index: n }) : l && r === k2[l - 1][n] ? t2.push(h[h.length] = { status: f, value: b3[--l], index: l }) : (--n, --l, g2.sparse || h.push({ status: "retained", value: d[n] }));
                a.a.Kc(t2, m2, !g2.dontLimitMoves && 10 * p2);
                return h.reverse();
              }
              return function(a2, d, e) {
                e = "boolean" === typeof e ? { dontLimitMoves: e } : e || {};
                a2 = a2 || [];
                d = d || [];
                return a2.length < d.length ? b2(a2, d, "added", "deleted", e) : b2(d, a2, "deleted", "added", e);
              };
            })();
            a.b("utils.compareArrays", a.a.Qb);
            (function() {
              function b2(b3, c2, d2, h, m2) {
                var k2 = [], l = a.$(function() {
                  var l2 = c2(d2, m2, a.a.Wa(
                    k2,
                    b3
                  )) || [];
                  0 < k2.length && (a.a.Xc(k2, l2), h && a.u.G(h, null, [d2, l2, m2]));
                  k2.length = 0;
                  a.a.Ob(k2, l2);
                }, null, { l: b3, Ua: function() {
                  return !a.a.kd(k2);
                } });
                return { Y: k2, $: l.ja() ? l : p };
              }
              var c = a.a.g.Z(), d = a.a.g.Z();
              a.a.ec = function(e, f, g2, h, m2, k2) {
                function l(b3) {
                  x2 = { Ba: b3, Ha: a.va(w3++) };
                  v3.push(x2);
                  t2 || (I3[w3 - 1] = x2);
                }
                function q2(b3) {
                  x2 = r[b3];
                  w3 !== x2.Ha.v() && (D3[x2.Ha.v()] = x2, E3[w3] = x2);
                  x2.Ha(w3++);
                  a.a.Wa(x2.Y, e);
                  v3.push(x2);
                }
                function n(b3, c2) {
                  if (b3) for (var d2 = 0, e2 = c2.length; d2 < e2; d2++) c2[d2] && a.a.D(c2[d2].Y, function(a2) {
                    b3(a2, d2, c2[d2].Ba);
                  });
                }
                f = f || [];
                "undefined" == typeof f.length && (f = [f]);
                h = h || {};
                var r = a.a.g.get(e, c), t2 = !r, v3 = [], u3 = 0, w3 = 0, A = [], z3 = [], B3 = [], D3 = [], E3 = [], I3 = [], x2, J3 = 0;
                if (t2) a.a.D(f, l);
                else {
                  if (!k2 || r && r._countWaitingForRemove) {
                    var F2 = a.a.Nb(r, function(a2) {
                      return a2.Ba;
                    });
                    k2 = a.a.Qb(F2, f, { dontLimitMoves: h.dontLimitMoves, sparse: true });
                  }
                  for (var F2 = 0, G3, H3, K3; G3 = k2[F2]; F2++) switch (H3 = G3.moved, K3 = G3.index, G3.status) {
                    case "deleted":
                      for (; u3 < K3; ) q2(u3++);
                      H3 === p && (x2 = r[u3], x2.$ && (x2.$.s(), x2.$ = p), a.a.Wa(x2.Y, e).length && (h.beforeRemove && (v3.push(x2), J3++, x2.Ba === d ? x2 = null : B3[x2.Ha.v()] = x2), x2 && A.push.apply(A, x2.Y)));
                      u3++;
                      break;
                    case "added":
                      for (; w3 < K3; ) q2(u3++);
                      H3 !== p ? (z3.push(v3.length), q2(H3)) : l(G3.value);
                  }
                  for (; w3 < f.length; ) q2(u3++);
                  v3._countWaitingForRemove = J3;
                }
                a.a.g.set(e, c, v3);
                n(h.beforeMove, D3);
                a.a.D(A, h.beforeRemove ? a.pa : a.removeNode);
                var M2, P2, N2;
                try {
                  N2 = e.ownerDocument.activeElement;
                } catch (O3) {
                }
                if (z3.length) for (; (F2 = z3.shift()) != p; ) {
                  x2 = v3[F2];
                  for (M2 = p; F2; ) if ((P2 = v3[--F2].Y) && P2.length) {
                    M2 = P2[P2.length - 1];
                    break;
                  }
                  for (f = 0; u3 = x2.Y[f]; M2 = u3, f++) a.h.Xb(e, u3, M2);
                }
                for (F2 = 0; x2 = v3[F2]; F2++) {
                  x2.Y || a.a.extend(x2, b2(e, g2, x2.Ba, m2, x2.Ha));
                  for (f = 0; u3 = x2.Y[f]; M2 = u3, f++) a.h.Xb(e, u3, M2);
                  !x2.Ed && m2 && (m2(x2.Ba, x2.Y, x2.Ha), x2.Ed = true, M2 = x2.Y[x2.Y.length - 1]);
                }
                N2 && e.ownerDocument.activeElement != N2 && "function" === typeof N2.focus && N2.focus();
                n(h.beforeRemove, B3);
                for (F2 = 0; F2 < B3.length; ++F2) B3[F2] && (B3[F2].Ba = d);
                n(h.afterMove, E3);
                n(h.afterAdd, I3);
              };
            })();
            a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.ec);
            a.ba = function() {
              this.allowTemplateRewriting = false;
            };
            a.ba.prototype = new a.ca();
            a.ba.prototype.constructor = a.ba;
            a.ba.prototype.renderTemplateSource = function(b2, c, d, e) {
              if (c = (9 > a.a.W ? 0 : b2.nodes) ? b2.nodes() : null) return a.a.la(c.cloneNode(true).childNodes);
              b2 = b2.text();
              return a.a.wa(b2, e);
            };
            a.ba.Oa = new a.ba();
            a.gc(a.ba.Oa);
            a.b("nativeTemplateEngine", a.ba);
            (function() {
              a.bb = function() {
                var a2 = this.Hd = (function() {
                  if (!w2 || !w2.tmpl) return 0;
                  try {
                    if (0 <= w2.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2;
                  } catch (a3) {
                  }
                  return 1;
                })();
                this.renderTemplateSource = function(b3, e, f, g2) {
                  g2 = g2 || v2;
                  f = f || {};
                  if (2 > a2) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                  var h = b3.data("precompiled");
                  h || (h = b3.text() || "", h = w2.template(null, "{{ko_with $item.koBindingContext}}" + h + "{{/ko_with}}"), b3.data("precompiled", h));
                  b3 = [e.$data];
                  e = w2.extend({ koBindingContext: e }, f.templateOptions);
                  e = w2.tmpl(h, b3, e);
                  e.appendTo(g2.createElement("div"));
                  w2.fragments = {};
                  return e;
                };
                this.createJavaScriptEvaluatorBlock = function(a3) {
                  return "{{ko_code ((function() { return " + a3 + " })()) }}";
                };
                this.addTemplate = function(a3, b3) {
                  v2.write("<script type='text/html' id='" + a3 + "'>" + b3 + "<\/script>");
                };
                0 < a2 && (w2.tmpl.tag.ko_code = { open: "__.push($1 || '');" }, w2.tmpl.tag.ko_with = { open: "with($1) {", close: "} " });
              };
              a.bb.prototype = new a.ca();
              a.bb.prototype.constructor = a.bb;
              var b2 = new a.bb();
              0 < b2.Hd && a.gc(b2);
              a.b("jqueryTmplTemplateEngine", a.bb);
            })();
          });
        })();
      })();
    }
  });

  // node_modules/knockout-secure-binding/dist/knockout-secure-binding.js
  var require_knockout_secure_binding = __commonJS({
    "node_modules/knockout-secure-binding/dist/knockout-secure-binding.js"(exports, module) {
      (function(factory) {
        if (typeof define === "function" && define.amd) {
          define(["knockout", "exports"], factory);
        } else if (typeof module === "object" && module.exports) {
          module.exports = factory(require_knockout_latest());
        } else {
          factory(ko);
        }
      })(function(ko4, exports2, undefined2) {
        var Identifier, Expression, Parser, Node;
        function value_of(item) {
          if (item instanceof Identifier || item instanceof Expression) {
            return item.get_value();
          }
          return item;
        }
        var originalBindingProviderInstance = new ko4.bindingProvider();
        function _object_map(source, mapping) {
          if (!source) {
            return source;
          }
          var target = {};
          for (var prop in source) {
            if (source.hasOwnProperty(prop)) {
              target[prop] = mapping(source[prop], prop, source);
            }
          }
          return target;
        }
        var commentNodesHaveTextProperty = document && document.createComment("test").text === "<!--test-->";
        var startCommentRegex = commentNodesHaveTextProperty ? /^<!--\s*ko(?:\s+([\s\S]+))?\s*-->$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/;
        function _virtualNodeBindingValue(node) {
          var regexMatch = (commentNodesHaveTextProperty ? node.text : node.nodeValue).match(startCommentRegex);
          return regexMatch ? regexMatch[1] : null;
        }
        Identifier = (function() {
          function Identifier2(parser, token, dereferences) {
            this.token = token;
            this.dereferences = dereferences;
            this.parser = parser;
          }
          Identifier2.prototype.lookup_value = function(parent) {
            var token = this.token, parser = this.parser, $context = parser.context, $data = $context.$data || {}, globals = parser.globals || {};
            if (parent) {
              return value_of(parent)[token];
            }
            switch (token) {
              case "$element":
                return parser.node;
              case "$context":
                return $context;
              case "$data":
                return $data;
              default:
            }
            return $data[token] || $context[token] || globals[token];
          };
          Identifier2.prototype.dereference = function(value) {
            var member, refs = this.dereferences || [], parser = this.parser, $context = parser.context || {}, $data = $context.$data || {}, self = {
              // top-level `this` in function calls
              $context,
              $data,
              globals: parser.globals || {},
              $element: parser.node
            }, last_value, i, n;
            for (i = 0, n = refs.length; i < n; ++i) {
              member = refs[i];
              if (member === true) {
                value = value.call(last_value || self);
                last_value = value;
              } else {
                last_value = value;
                value = value[value_of(member)];
              }
            }
            return value;
          };
          Identifier2.prototype.get_value = function(parent) {
            return this.dereference(this.lookup_value(parent));
          };
          Identifier2.prototype.set_value = function(new_value) {
            var parser = this.parser, $context = parser.context, $data = $context.$data || {}, globals = parser.globals || {}, refs = this.dereferences || [], leaf = this.token, i, n, root;
            if (Object.hasOwnProperty.call($data, leaf)) {
              root = $data;
            } else if (Object.hasOwnProperty.call($context, leaf)) {
              root = $context;
            } else if (Object.hasOwnProperty.call(globals, leaf)) {
              root = globals;
            } else {
              throw new Error("Identifier::set_value -- The property '" + leaf + "' does not exist on the $data, $context, or globals.");
            }
            n = refs.length;
            if (n === 0) {
              root[leaf] = new_value;
            }
            root = root[leaf];
            for (i = 0; i < n - 1; ++i) {
              leaf = refs[i];
              if (leaf === true) {
                root = root();
              } else {
                root = root[value_of(leaf)];
              }
            }
            if (refs[i] === true) {
              throw new Error("Cannot assign a value to a function.");
            }
            root[value_of(refs[i])] = new_value;
          };
          return Identifier2;
        })();
        function is_identifier_char(ch) {
          return ch >= "A" && ch <= "Z" || ch >= "a" && ch <= "z" || ch >= "0" && ch <= 9 || ch === "_" || ch === "$";
        }
        Node = (function() {
          function Node2(lhs, op, rhs) {
            this.lhs = lhs;
            this.op = op;
            this.rhs = rhs;
          }
          var operators = {
            // unary
            "!": function not(a, b2) {
              return !b2;
            },
            "!!": function notnot(a, b2) {
              return !!b2;
            },
            // mul/div
            "*": function mul(a, b2) {
              return a * b2;
            },
            "/": function div(a, b2) {
              return a / b2;
            },
            "%": function mod(a, b2) {
              return a % b2;
            },
            // sub/add
            "+": function add(a, b2) {
              return a + b2;
            },
            "-": function sub(a, b2) {
              return a - b2;
            },
            // relational
            "<": function lt(a, b2) {
              return a < b2;
            },
            "<=": function le2(a, b2) {
              return a <= b2;
            },
            ">": function gt(a, b2) {
              return a > b2;
            },
            ">=": function ge2(a, b2) {
              return a >= b2;
            },
            //    TODO: 'in': function (a, b) { return a in b; },
            //    TODO: 'instanceof': function (a, b) { return a instanceof b; },
            // equality
            "==": function equal(a, b2) {
              return a === b2;
            },
            "!=": function ne2(a, b2) {
              return a !== b2;
            },
            "===": function sequal(a, b2) {
              return a === b2;
            },
            "!==": function sne(a, b2) {
              return a !== b2;
            },
            // bitwise
            "&": function bit_and(a, b2) {
              return a & b2;
            },
            "^": function xor(a, b2) {
              return a ^ b2;
            },
            "|": function bit_or(a, b2) {
              return a | b2;
            },
            // logic
            "&&": function logic_and(a, b2) {
              return a && b2;
            },
            "||": function logic_or(a, b2) {
              return a || b2;
            }
          };
          operators["!"].precedence = 4;
          operators["!!"].precedence = 4;
          operators["*"].precedence = 5;
          operators["/"].precedence = 5;
          operators["%"].precedence = 5;
          operators["+"].precedence = 6;
          operators["-"].precedence = 6;
          operators["<"].precedence = 8;
          operators["<="].precedence = 8;
          operators[">"].precedence = 8;
          operators[">="].precedence = 8;
          operators["=="].precedence = 9;
          operators["!="].precedence = 9;
          operators["==="].precedence = 9;
          operators["!=="].precedence = 9;
          operators["&"].precedence = 10;
          operators["^"].precedence = 11;
          operators["|"].precedence = 12;
          operators["&&"].precedence = 13;
          operators["||"].precedence = 14;
          Node2.operators = operators;
          Node2.prototype.get_leaf_value = function(leaf, member_of) {
            if (typeof leaf === "function") {
              return ko4.unwrap(leaf());
            }
            if (typeof leaf !== "object") {
              return member_of ? member_of[leaf] : leaf;
            }
            if (leaf instanceof Identifier || leaf instanceof Expression) {
              return ko4.unwrap(leaf.get_value(member_of));
            }
            if (leaf instanceof Node2) {
              return leaf.get_node_value(member_of);
            }
            throw new Error("Invalid type of leaf node: " + leaf);
          };
          Node2.prototype.get_node_value = function() {
            return this.op(
              this.get_leaf_value(this.lhs),
              this.get_leaf_value(this.rhs)
            );
          };
          return Node2;
        })();
        Expression = (function() {
          function Expression2(nodes) {
            this.nodes = nodes;
            this.root = this.build_tree(nodes);
          }
          Expression2.operators = Node.operators;
          Expression2.Node = Node;
          Expression2.prototype.build_tree = function(nodes) {
            var root, leaf, op, value;
            leaf = root = new Node(nodes.shift(), nodes.shift(), nodes.shift());
            while (nodes) {
              op = nodes.shift();
              value = nodes.shift();
              if (!op) {
                break;
              }
              if (op.precedence > root.op.precedence) {
                root = new Node(root, op, value);
                leaf = root;
              } else {
                leaf.rhs = new Node(leaf.rhs, op, value);
                leaf = leaf.rhs;
              }
            }
            return root;
          };
          Expression2.prototype.get_value = function() {
            if (!this.root) {
              this.root = this.build_tree(this.nodes);
            }
            return this.root.get_node_value();
          };
          return Expression2;
        })();
        Parser = (function() {
          var escapee = {
            "'": "'",
            '"': '"',
            "\\": "\\",
            "/": "/",
            b: "\b",
            f: "\f",
            n: "\n",
            r: "\r",
            t: "	"
          }, operators = Expression.operators;
          function Parser2(node, context, globals) {
            this.node = node;
            this.context = context;
            this.globals = globals || {};
          }
          Parser2.Expression = Expression;
          Parser2.Identifier = Identifier;
          Parser2.Node = Node;
          Parser2.prototype.white = function() {
            var ch = this.ch;
            while (ch && ch <= " ") {
              ch = this.next();
            }
            return ch;
          };
          Parser2.prototype.next = function(c) {
            if (c && c !== this.ch) {
              this.error("Expected '" + c + "' but got '" + this.ch + "'");
            }
            this.ch = this.text.charAt(this.at);
            this.at += 1;
            return this.ch;
          };
          Parser2.prototype.error = function(m2) {
            throw {
              name: "SyntaxError",
              message: m2,
              at: this.at,
              text: this.text
            };
          };
          Parser2.prototype.name = function() {
            var name = "";
            this.white();
            var ch = this.ch;
            while (ch) {
              if (ch === ":" || ch <= " " || ch === ",") {
                return name;
              }
              name += ch;
              ch = this.next();
            }
            return name;
          };
          Parser2.prototype.number = function() {
            var number, string = "", ch = this.ch;
            if (ch === "-") {
              string = "-";
              ch = this.next("-");
            }
            while (ch >= "0" && ch <= "9") {
              string += ch;
              ch = this.next();
            }
            if (ch === ".") {
              string += ".";
              ch = this.next();
              while (ch && ch >= "0" && ch <= "9") {
                string += ch;
                ch = this.next();
              }
            }
            if (ch === "e" || ch === "E") {
              string += ch;
              ch = this.next();
              if (ch === "-" || ch === "+") {
                string += ch;
                ch = this.next();
              }
              while (ch >= "0" && ch <= "9") {
                string += ch;
                ch = this.next();
              }
            }
            number = +string;
            if (!isFinite(number)) {
              error("Bad number");
            } else {
              return number;
            }
          };
          Parser2.prototype.object_add_value = function(object, key, value) {
            if (value instanceof Identifier || value instanceof Expression) {
              Object.defineProperty(object, key, {
                get: function() {
                  return value.get_value();
                },
                enumerable: true
              });
            } else {
              object[key] = value;
            }
          };
          Parser2.prototype.object = function() {
            var key, object = {}, ch = this.ch;
            if (ch === "{") {
              this.next("{");
              ch = this.white();
              if (ch === "}") {
                ch = this.next("}");
                return object;
              }
              while (ch) {
                if (ch === '"' || ch === "'") {
                  key = this.string();
                } else {
                  key = this.name();
                }
                this.white();
                ch = this.next(":");
                if (Object.hasOwnProperty.call(object, key)) {
                  this.error('Duplicate key "' + key + '"');
                }
                this.object_add_value(object, key, this.expression());
                ch = this.white();
                if (ch === "}") {
                  ch = this.next("}");
                  return object;
                }
                this.next(",");
                ch = this.white();
              }
            }
            this.error("Bad object");
          };
          Parser2.prototype.read_string = function(delim) {
            var string = "", hex, i, uffff, ch = this.next();
            while (ch) {
              if (ch === delim) {
                ch = this.next();
                return string;
              }
              if (ch === "\\") {
                ch = this.next();
                if (ch === "u") {
                  uffff = 0;
                  for (i = 0; i < 4; i += 1) {
                    hex = parseInt(ch = this.next(), 16);
                    if (!isFinite(hex)) {
                      break;
                    }
                    uffff = uffff * 16 + hex;
                  }
                  string += String.fromCharCode(uffff);
                } else if (typeof escapee[ch] === "string") {
                  string += escapee[ch];
                } else {
                  break;
                }
              } else {
                string += ch;
              }
              ch = this.next();
            }
            this.error("Bad string");
          };
          Parser2.prototype.string = function() {
            var ch = this.ch;
            if (ch === '"') {
              return this.read_string('"');
            } else if (ch === "'") {
              return this.read_string("'");
            }
            this.error("Bad string");
          };
          Parser2.prototype.array = function() {
            var array = [], ch = this.ch;
            if (ch === "[") {
              ch = this.next("[");
              this.white();
              if (ch === "]") {
                ch = this.next("]");
                return array;
              }
              while (ch) {
                array.push(this.expression());
                ch = this.white();
                if (ch === "]") {
                  ch = this.next("]");
                  return array;
                }
                this.next(",");
                ch = this.white();
              }
            }
            this.error("Bad array");
          };
          Parser2.prototype.value = function() {
            var ch;
            this.white();
            ch = this.ch;
            switch (ch) {
              case "{":
                return this.object();
              case "[":
                return this.array();
              case '"':
              case "'":
                return this.string();
              case "-":
                return this.number();
              default:
                return ch >= "0" && ch <= "9" ? this.number() : this.identifier();
            }
          };
          Parser2.prototype.operator = function() {
            var op = "", op_fn, ch = this.white();
            while (ch) {
              if (is_identifier_char(ch) || ch <= " " || ch === "" || ch === '"' || ch === "'" || ch === "{" || ch === "[" || ch === "(") {
                break;
              }
              op += ch;
              ch = this.next();
            }
            if (op !== "") {
              op_fn = operators[op];
              if (!op_fn) {
                this.error("Bad operator: '" + op + "'.");
              }
            }
            return op_fn;
          };
          Parser2.prototype.expression = function() {
            var root, op, nodes = [], node_value, ch = this.white();
            while (ch) {
              op = this.operator();
              if (op) {
                nodes.push(undefined2);
                nodes.push(op);
              }
              if (ch === "(") {
                this.next();
                nodes.push(this.expression());
                this.next(")");
              } else {
                node_value = this.value();
                nodes.push(node_value);
              }
              ch = this.white();
              if (ch === ":" || ch === "}" || ch === "," || ch === "]" || ch === ")" || ch === "") {
                break;
              }
              op = this.operator();
              if (op) {
                nodes.push(op);
              }
              ch = this.white();
            }
            if (nodes.length === 0) {
              return undefined2;
            }
            if (nodes.length === 1) {
              return nodes[0];
            }
            return new Expression(nodes);
          };
          Parser2.prototype.dereference = function() {
            var member, ch = this.white();
            while (ch) {
              if (ch === "(") {
                this.next("(");
                this.white();
                this.next(")");
                return true;
              } else if (ch === "[") {
                this.next("[");
                member = this.expression();
                this.white();
                this.next("]");
                return member;
              } else if (ch === ".") {
                member = "";
                this.next(".");
                ch = this.white();
                while (ch) {
                  if (!is_identifier_char(ch)) {
                    break;
                  }
                  member += ch;
                  ch = this.next();
                }
                return member;
              } else {
                break;
              }
              ch = this.white();
            }
            return;
          };
          Parser2.prototype.identifier = function() {
            var token = "", ch, deref, dereferences = [];
            ch = this.white();
            while (ch) {
              if (!is_identifier_char(ch)) {
                break;
              }
              token += ch;
              ch = this.next();
            }
            switch (token) {
              case "true":
                return true;
              case "false":
                return false;
              case "null":
                return null;
              // we use `void 0` because `undefined` can be redefined.
              case "undefined":
                return void 0;
              default:
            }
            while (ch) {
              deref = this.dereference();
              if (deref !== undefined2) {
                dereferences.push(deref);
              } else {
                break;
              }
            }
            return new Identifier(this, token, dereferences);
          };
          Parser2.prototype.bindings = function() {
            var key, bindings = {}, sep, ch = this.ch;
            while (ch) {
              key = this.name();
              sep = this.white();
              if (!sep || sep === ",") {
                if (sep) {
                  ch = this.next(",");
                } else {
                  ch = "";
                }
                bindings[key] = null;
              } else {
                ch = this.next(":");
                bindings[key] = this.expression();
                this.white();
                if (this.ch) {
                  ch = this.next(",");
                } else {
                  ch = "";
                }
              }
            }
            return bindings;
          };
          Parser2.prototype.convert_to_accessors = function(result) {
            var propertyWriters = {};
            ko4.utils.objectForEach(result, function(name, value) {
              if (value instanceof Identifier) {
                result[name] = function() {
                  return value.get_value();
                };
                if (ko4.expressionRewriting._twoWayBindings[name]) {
                  propertyWriters[name] = function(new_value) {
                    value.set_value(new_value);
                  };
                }
              } else if (value instanceof Expression) {
                result[name] = function expressionAccessor() {
                  return value.get_value();
                };
              } else if (typeof value != "function") {
                result[name] = function constAccessor() {
                  return value;
                };
              }
            });
            if (Object.keys(propertyWriters).length > 0) {
              result._ko_property_writers = function() {
                return propertyWriters;
              };
            }
            return result;
          };
          Parser2.prototype.parse = function(source) {
            this.text = (source || "").trim();
            this.at = 0;
            this.ch = " ";
            if (!this.text) {
              return null;
            }
            var result = this.bindings();
            this.white();
            if (this.ch) {
              this.error("Syntax Error");
            }
            return this.convert_to_accessors(result);
          };
          return Parser2;
        })();
        function secureBindingsProvider(options) {
          var existingProvider = new ko4.bindingProvider();
          options = options || {};
          this.attribute = options.attribute || "data-sbind";
          this.noVirtualElements = options.noVirtualElements || false;
          this.globals = options.globals || {};
          this.bindings = options.bindings || ko4.bindingHandlers;
        }
        function registerBindings(newBindings) {
          ko4.utils.extend(this.bindings, newBindings);
        }
        function nodeHasBindings(node) {
          var value;
          if (node.nodeType === node.ELEMENT_NODE) {
            return node.getAttribute(this.attribute) || ko4.components && ko4.components.getComponentNameForNode(node);
          } else if (node.nodeType === node.COMMENT_NODE) {
            if (this.noVirtualElements) {
              return false;
            }
            value = ("" + node.nodeValue || node.text).trim();
            return value.indexOf("ko ") === 0;
          }
        }
        function getBindingsString(node) {
          switch (node.nodeType) {
            case node.ELEMENT_NODE:
              return node.getAttribute(this.attribute);
            case node.COMMENT_NODE:
              return _virtualNodeBindingValue(node);
            default:
              return null;
          }
        }
        function nodeParamsToObject(node, parser) {
          var accessors = parser.parse(node.getAttribute("params"));
          if (!accessors || Object.keys(accessors).length === 0) {
            return { $raw: {} };
          }
          var rawParamComputedValues = _object_map(
            accessors,
            function(paramValue, paramName) {
              return ko4.computed(
                paramValue,
                null,
                { disposeWhenNodeIsRemoved: node }
              );
            }
          );
          var params = _object_map(
            rawParamComputedValues,
            function(paramValueComputed, paramName) {
              var paramValue = paramValueComputed.peek();
              if (!paramValueComputed.isActive()) {
                return paramValue;
              } else {
                return ko4.computed({
                  read: function() {
                    return ko4.unwrap(paramValueComputed());
                  },
                  write: ko4.isWriteableObservable(paramValue) && function(value) {
                    paramValueComputed()(value);
                  },
                  disposeWhenNodeIsRemoved: node
                });
              }
            }
          );
          if (!params.hasOwnProperty("$raw")) {
            params.$raw = rawParamComputedValues;
          }
          return params;
        }
        function getBindingAccessors(node, context) {
          var bindings = {}, component_name, parser = new Parser(node, context, this.globals), sbind_string = this.getBindingsString(node);
          if (node.nodeType === node.ELEMENT_NODE && ko4.components) {
            component_name = ko4.components.getComponentNameForNode(node);
          }
          if (sbind_string) {
            bindings = parser.parse(sbind_string || "");
          }
          if (component_name) {
            if (bindings.component) {
              throw new Error("Cannot use a component binding on custom elements");
            }
            var componentBindingValue = {
              "name": component_name,
              "params": nodeParamsToObject(node, parser)
            };
            bindings.component = function() {
              return componentBindingValue;
            };
          }
          return bindings;
        }
        ko4.utils.extend(secureBindingsProvider.prototype, {
          registerBindings,
          nodeHasBindings,
          getBindingAccessors,
          getBindingsString,
          nodeParamsToObject,
          Parser
        });
        if (!exports2) {
          ko4.secureBindingsProvider = secureBindingsProvider;
        }
        return secureBindingsProvider;
      });
    }
  });

  // 2a_Interaction/Config/General.js
  var SERVER_URL = "http://127.0.0.1:5002/";

  // 2a_Interaction/Contracts/ExtensionModel.js
  var import_knockout = __toESM(require_knockout_latest(), 1);
  var GeminiModel = {
    "Flash 2.0 (free)": "gemini-2.0-flash",
    "Pro 2.5": "gemini-2.5-pro"
  };
  var ExtensionModel = class {
    GeminiKey;
    Prompt;
    PromptType;
    RawMode;
    RawJSON;
    ErrorMessage;
    Context;
    Response;
    Model;
    isLoading;
    AdvancedMode;
    constructor(GeminiKey, Prompt, PromptType, RawMode, RawJSON, ErrorMessage, Context, Response, Model) {
      this.GeminiKey = GeminiKey;
      this.Prompt = Prompt;
      this.PromptType = PromptType;
      this.RawMode = RawMode;
      this.RawJSON = RawJSON;
      this.ErrorMessage = ErrorMessage;
      this.Context = Context;
      this.Response = Response;
      this.Model = Model;
      this.isLoading = import_knockout.default.observable(false);
      this.AdvancedMode = import_knockout.default.observable(false);
      this.RawMode.subscribe((isRawMode) => {
        if (!isRawMode)
          return;
        this.RawJSON(this.convertToJSON());
      });
      this.AdvancedMode.subscribe((isAdvancedMode) => {
        if (isAdvancedMode)
          return;
        this.RawMode(false);
      });
    }
    sentPromptToServer() {
      if (this.RawMode())
        throw "Unimplemented";
      if (!this.GeminiKey()) {
        this.ErrorMessage("Gemini key is empty! No data can be extracted!");
        return;
      }
      if (!this.Prompt()) {
        this.ErrorMessage("prompt is empty! No data can be extracted!");
        return;
      }
      const options = {
        method: "POST",
        headers: {
          Accept: "*/*",
          // 'Accept-Encoding': 'gzip, deflate, br',
          // Connection: 'keep-alive',
          "Content-Type": "application/json"
        },
        body: this.convertToJSON()
      };
      this.ErrorMessage(void 0);
      this.Response(void 0);
      this.isLoading(true);
      fetch(SERVER_URL, options).then((response) => response.json()).then((response) => {
        if (response.metadata?.InError)
          throw response.metadata.errorMessage ?? "Server returned an error.";
        return this.Response(response.body?.reply);
      }).catch((err) => this.ErrorMessage(String(err))).finally(() => {
        this.isLoading(false);
      });
    }
    downloadGameData() {
      this.ErrorMessage("Unimplemented");
    }
    convertToJSON() {
      return JSON.stringify({
        "geminiKey": this.GeminiKey() ?? "",
        "prompt": this.Prompt() ?? "",
        "context": this.Context() ?? "",
        "aiRetrievalType": "rag",
        "adviseRetrievalType": this.PromptType() ?? "other",
        "model": this.Model()
      });
    }
  };

  // 2a_Interaction/extensionSource.ts
  var import_knockout2 = __toESM(require_knockout_latest(), 1);
  var import_knockout_secure_binding = __toESM(require_knockout_secure_binding(), 1);

  // node_modules/marked/lib/marked.esm.js
  function M() {
    return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
  }
  var O = M();
  function G(u3) {
    O = u3;
  }
  var _ = { exec: () => null };
  function k(u3, e = "") {
    let t = typeof u3 == "string" ? u3 : u3.source, n = { replace: (r, i) => {
      let s = typeof i == "string" ? i : i.source;
      return s = s.replace(m.caret, "$1"), t = t.replace(r, s), n;
    }, getRegex: () => new RegExp(t, e) };
    return n;
  }
  var be = (() => {
    try {
      return !!new RegExp("(?<=1)(?<!1)");
    } catch {
      return false;
    }
  })();
  var m = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (u3) => new RegExp(`^( {0,3}${u3})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (u3) => new RegExp(`^ {0,${Math.min(3, u3 - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (u3) => new RegExp(`^ {0,${Math.min(3, u3 - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (u3) => new RegExp(`^ {0,${Math.min(3, u3 - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (u3) => new RegExp(`^ {0,${Math.min(3, u3 - 1)}}#`), htmlBeginRegex: (u3) => new RegExp(`^ {0,${Math.min(3, u3 - 1)}}<(?:[a-z].*>|!--)`, "i"), blockquoteBeginRegex: (u3) => new RegExp(`^ {0,${Math.min(3, u3 - 1)}}>`) };
  var Re = /^(?:[ \t]*(?:\n|$))+/;
  var Oe = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
  var Te = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
  var C = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
  var we = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
  var Q = / {0,3}(?:[*+-]|\d{1,9}[.)])/;
  var se = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
  var ie = k(se).replace(/bull/g, Q).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
  var ye = k(se).replace(/bull/g, Q).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
  var j = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
  var Pe = /^[^\n]+/;
  var F = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/;
  var Se = k(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", F).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
  var $e = k(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Q).getRegex();
  var v = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
  var U = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
  var _e = k("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", U).replace("tag", v).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
  var oe = k(j).replace("hr", C).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex();
  var Le = k(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", oe).getRegex();
  var K = { blockquote: Le, code: Oe, def: Se, fences: Te, heading: we, hr: C, html: _e, lheading: ie, list: $e, newline: Re, paragraph: oe, table: _, text: Pe };
  var ne = k("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", C).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex();
  var Me = { ...K, lheading: ye, table: ne, paragraph: k(j).replace("hr", C).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ne).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex() };
  var ze = { ...K, html: k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", U).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: _, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: k(j).replace("hr", C).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ie).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() };
  var Ee = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
  var Ie = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
  var ae = /^( {2,}|\\)\n(?!\s*$)/;
  var Ae = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
  var z = /[\p{P}\p{S}]/u;
  var H = /[\s\p{P}\p{S}]/u;
  var W = /[^\s\p{P}\p{S}]/u;
  var Ce = k(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, H).getRegex();
  var le = /(?!~)[\p{P}\p{S}]/u;
  var Be = /(?!~)[\s\p{P}\p{S}]/u;
  var De = /(?:[^\s\p{P}\p{S}]|~)/u;
  var qe = k(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", be ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex();
  var ue = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/;
  var ve = k(ue, "u").replace(/punct/g, z).getRegex();
  var He = k(ue, "u").replace(/punct/g, le).getRegex();
  var pe = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
  var Ze = k(pe, "gu").replace(/notPunctSpace/g, W).replace(/punctSpace/g, H).replace(/punct/g, z).getRegex();
  var Ge = k(pe, "gu").replace(/notPunctSpace/g, De).replace(/punctSpace/g, Be).replace(/punct/g, le).getRegex();
  var Ne = k("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, W).replace(/punctSpace/g, H).replace(/punct/g, z).getRegex();
  var Qe = k(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, z).getRegex();
  var je = "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)";
  var Fe = k(je, "gu").replace(/notPunctSpace/g, W).replace(/punctSpace/g, H).replace(/punct/g, z).getRegex();
  var Ue = k(/\\(punct)/, "gu").replace(/punct/g, z).getRegex();
  var Ke = k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
  var We = k(U).replace("(?:-->|$)", "-->").getRegex();
  var Xe = k("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", We).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
  var q = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/;
  var Je = k(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", q).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
  var ce = k(/^!?\[(label)\]\[(ref)\]/).replace("label", q).replace("ref", F).getRegex();
  var he = k(/^!?\[(ref)\](?:\[\])?/).replace("ref", F).getRegex();
  var Ve = k("reflink|nolink(?!\\()", "g").replace("reflink", ce).replace("nolink", he).getRegex();
  var re = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/;
  var X = { _backpedal: _, anyPunctuation: Ue, autolink: Ke, blockSkip: qe, br: ae, code: Ie, del: _, delLDelim: _, delRDelim: _, emStrongLDelim: ve, emStrongRDelimAst: Ze, emStrongRDelimUnd: Ne, escape: Ee, link: Je, nolink: he, punctuation: Ce, reflink: ce, reflinkSearch: Ve, tag: Xe, text: Ae, url: _ };
  var Ye = { ...X, link: k(/^!?\[(label)\]\((.*?)\)/).replace("label", q).getRegex(), reflink: k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", q).getRegex() };
  var N = { ...X, emStrongRDelimAst: Ge, emStrongLDelim: He, delLDelim: Qe, delRDelim: Fe, url: k(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", re).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: k(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", re).getRegex() };
  var et = { ...N, br: k(ae).replace("{2,}", "*").getRegex(), text: k(N.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() };
  var B = { normal: K, gfm: Me, pedantic: ze };
  var E = { normal: X, gfm: N, breaks: et, pedantic: Ye };
  var tt = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  var ke = (u3) => tt[u3];
  function T(u3, e) {
    if (e) {
      if (m.escapeTest.test(u3)) return u3.replace(m.escapeReplace, ke);
    } else if (m.escapeTestNoEncode.test(u3)) return u3.replace(m.escapeReplaceNoEncode, ke);
    return u3;
  }
  function J(u3) {
    try {
      u3 = encodeURI(u3).replace(m.percentDecode, "%");
    } catch {
      return null;
    }
    return u3;
  }
  function V(u3, e) {
    let t = u3.replace(m.findPipe, (i, s, a) => {
      let o = false, l = s;
      for (; --l >= 0 && a[l] === "\\"; ) o = !o;
      return o ? "|" : " |";
    }), n = t.split(m.splitPipe), r = 0;
    if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e) if (n.length > e) n.splice(e);
    else for (; n.length < e; ) n.push("");
    for (; r < n.length; r++) n[r] = n[r].trim().replace(m.slashPipe, "|");
    return n;
  }
  function I(u3, e, t) {
    let n = u3.length;
    if (n === 0) return "";
    let r = 0;
    for (; r < n; ) {
      let i = u3.charAt(n - r - 1);
      if (i === e && !t) r++;
      else if (i !== e && t) r++;
      else break;
    }
    return u3.slice(0, n - r);
  }
  function de(u3, e) {
    if (u3.indexOf(e[1]) === -1) return -1;
    let t = 0;
    for (let n = 0; n < u3.length; n++) if (u3[n] === "\\") n++;
    else if (u3[n] === e[0]) t++;
    else if (u3[n] === e[1] && (t--, t < 0)) return n;
    return t > 0 ? -2 : -1;
  }
  function ge(u3, e = 0) {
    let t = e, n = "";
    for (let r of u3) if (r === "	") {
      let i = 4 - t % 4;
      n += " ".repeat(i), t += i;
    } else n += r, t++;
    return n;
  }
  function fe(u3, e, t, n, r) {
    let i = e.href, s = e.title || null, a = u3[1].replace(r.other.outputLinkReplace, "$1");
    n.state.inLink = true;
    let o = { type: u3[0].charAt(0) === "!" ? "image" : "link", raw: t, href: i, title: s, text: a, tokens: n.inlineTokens(a) };
    return n.state.inLink = false, o;
  }
  function nt(u3, e, t) {
    let n = u3.match(t.other.indentCodeCompensation);
    if (n === null) return e;
    let r = n[1];
    return e.split(`
`).map((i) => {
      let s = i.match(t.other.beginningSpace);
      if (s === null) return i;
      let [a] = s;
      return a.length >= r.length ? i.slice(r.length) : i;
    }).join(`
`);
  }
  var w = class {
    options;
    rules;
    lexer;
    constructor(e) {
      this.options = e || O;
    }
    space(e) {
      let t = this.rules.block.newline.exec(e);
      if (t && t[0].length > 0) return { type: "space", raw: t[0] };
    }
    code(e) {
      let t = this.rules.block.code.exec(e);
      if (t) {
        let n = t[0].replace(this.rules.other.codeRemoveIndent, "");
        return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : I(n, `
`) };
      }
    }
    fences(e) {
      let t = this.rules.block.fences.exec(e);
      if (t) {
        let n = t[0], r = nt(n, t[3] || "", this.rules);
        return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: r };
      }
    }
    heading(e) {
      let t = this.rules.block.heading.exec(e);
      if (t) {
        let n = t[2].trim();
        if (this.rules.other.endingHash.test(n)) {
          let r = I(n, "#");
          (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = r.trim());
        }
        return { type: "heading", raw: t[0], depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
      }
    }
    hr(e) {
      let t = this.rules.block.hr.exec(e);
      if (t) return { type: "hr", raw: I(t[0], `
`) };
    }
    blockquote(e) {
      let t = this.rules.block.blockquote.exec(e);
      if (t) {
        let n = I(t[0], `
`).split(`
`), r = "", i = "", s = [];
        for (; n.length > 0; ) {
          let a = false, o = [], l;
          for (l = 0; l < n.length; l++) if (this.rules.other.blockquoteStart.test(n[l])) o.push(n[l]), a = true;
          else if (!a) o.push(n[l]);
          else break;
          n = n.slice(l);
          let p = o.join(`
`), c = p.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
          r = r ? `${r}
${p}` : p, i = i ? `${i}
${c}` : c;
          let d = this.lexer.state.top;
          if (this.lexer.state.top = true, this.lexer.blockTokens(c, s, true), this.lexer.state.top = d, n.length === 0) break;
          let h = s.at(-1);
          if (h?.type === "code") break;
          if (h?.type === "blockquote") {
            let R = h, f = R.raw + `
` + n.join(`
`), S = this.blockquote(f);
            s[s.length - 1] = S, r = r.substring(0, r.length - R.raw.length) + S.raw, i = i.substring(0, i.length - R.text.length) + S.text;
            break;
          } else if (h?.type === "list") {
            let R = h, f = R.raw + `
` + n.join(`
`), S = this.list(f);
            s[s.length - 1] = S, r = r.substring(0, r.length - h.raw.length) + S.raw, i = i.substring(0, i.length - R.raw.length) + S.raw, n = f.substring(s.at(-1).raw.length).split(`
`);
            continue;
          }
        }
        return { type: "blockquote", raw: r, tokens: s, text: i };
      }
    }
    list(e) {
      let t = this.rules.block.list.exec(e);
      if (t) {
        let n = t[1].trim(), r = n.length > 1, i = { type: "list", raw: "", ordered: r, start: r ? +n.slice(0, -1) : "", loose: false, items: [] };
        n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = r ? n : "[*+-]");
        let s = this.rules.other.listItemRegex(n), a = false;
        for (; e; ) {
          let l = false, p = "", c = "";
          if (!(t = s.exec(e)) || this.rules.block.hr.test(e)) break;
          p = t[0], e = e.substring(p.length);
          let d = ge(t[2].split(`
`, 1)[0], t[1].length), h = e.split(`
`, 1)[0], R = !d.trim(), f = 0;
          if (this.options.pedantic ? (f = 2, c = d.trimStart()) : R ? f = t[1].length + 1 : (f = d.search(this.rules.other.nonSpaceChar), f = f > 4 ? 1 : f, c = d.slice(f), f += t[1].length), R && this.rules.other.blankLine.test(h) && (p += h + `
`, e = e.substring(h.length + 1), l = true), !l) {
            let S = this.rules.other.nextBulletRegex(f), Y = this.rules.other.hrRegex(f), ee = this.rules.other.fencesBeginRegex(f), te = this.rules.other.headingBeginRegex(f), me = this.rules.other.htmlBeginRegex(f), xe = this.rules.other.blockquoteBeginRegex(f);
            for (; e; ) {
              let Z = e.split(`
`, 1)[0], A;
              if (h = Z, this.options.pedantic ? (h = h.replace(this.rules.other.listReplaceNesting, "  "), A = h) : A = h.replace(this.rules.other.tabCharGlobal, "    "), ee.test(h) || te.test(h) || me.test(h) || xe.test(h) || S.test(h) || Y.test(h)) break;
              if (A.search(this.rules.other.nonSpaceChar) >= f || !h.trim()) c += `
` + A.slice(f);
              else {
                if (R || d.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || ee.test(d) || te.test(d) || Y.test(d)) break;
                c += `
` + h;
              }
              R = !h.trim(), p += Z + `
`, e = e.substring(Z.length + 1), d = A.slice(f);
            }
          }
          i.loose || (a ? i.loose = true : this.rules.other.doubleBlankLine.test(p) && (a = true)), i.items.push({ type: "list_item", raw: p, task: !!this.options.gfm && this.rules.other.listIsTask.test(c), loose: false, text: c, tokens: [] }), i.raw += p;
        }
        let o = i.items.at(-1);
        if (o) o.raw = o.raw.trimEnd(), o.text = o.text.trimEnd();
        else return;
        i.raw = i.raw.trimEnd();
        for (let l of i.items) {
          if (this.lexer.state.top = false, l.tokens = this.lexer.blockTokens(l.text, []), l.task) {
            if (l.text = l.text.replace(this.rules.other.listReplaceTask, ""), l.tokens[0]?.type === "text" || l.tokens[0]?.type === "paragraph") {
              l.tokens[0].raw = l.tokens[0].raw.replace(this.rules.other.listReplaceTask, ""), l.tokens[0].text = l.tokens[0].text.replace(this.rules.other.listReplaceTask, "");
              for (let c = this.lexer.inlineQueue.length - 1; c >= 0; c--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[c].src)) {
                this.lexer.inlineQueue[c].src = this.lexer.inlineQueue[c].src.replace(this.rules.other.listReplaceTask, "");
                break;
              }
            }
            let p = this.rules.other.listTaskCheckbox.exec(l.raw);
            if (p) {
              let c = { type: "checkbox", raw: p[0] + " ", checked: p[0] !== "[ ]" };
              l.checked = c.checked, i.loose ? l.tokens[0] && ["paragraph", "text"].includes(l.tokens[0].type) && "tokens" in l.tokens[0] && l.tokens[0].tokens ? (l.tokens[0].raw = c.raw + l.tokens[0].raw, l.tokens[0].text = c.raw + l.tokens[0].text, l.tokens[0].tokens.unshift(c)) : l.tokens.unshift({ type: "paragraph", raw: c.raw, text: c.raw, tokens: [c] }) : l.tokens.unshift(c);
            }
          }
          if (!i.loose) {
            let p = l.tokens.filter((d) => d.type === "space"), c = p.length > 0 && p.some((d) => this.rules.other.anyLine.test(d.raw));
            i.loose = c;
          }
        }
        if (i.loose) for (let l of i.items) {
          l.loose = true;
          for (let p of l.tokens) p.type === "text" && (p.type = "paragraph");
        }
        return i;
      }
    }
    html(e) {
      let t = this.rules.block.html.exec(e);
      if (t) return { type: "html", block: true, raw: t[0], pre: t[1] === "pre" || t[1] === "script" || t[1] === "style", text: t[0] };
    }
    def(e) {
      let t = this.rules.block.def.exec(e);
      if (t) {
        let n = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
        return { type: "def", tag: n, raw: t[0], href: r, title: i };
      }
    }
    table(e) {
      let t = this.rules.block.table.exec(e);
      if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
      let n = V(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = { type: "table", raw: t[0], header: [], align: [], rows: [] };
      if (n.length === r.length) {
        for (let a of r) this.rules.other.tableAlignRight.test(a) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? s.align.push("left") : s.align.push(null);
        for (let a = 0; a < n.length; a++) s.header.push({ text: n[a], tokens: this.lexer.inline(n[a]), header: true, align: s.align[a] });
        for (let a of i) s.rows.push(V(a, s.header.length).map((o, l) => ({ text: o, tokens: this.lexer.inline(o), header: false, align: s.align[l] })));
        return s;
      }
    }
    lheading(e) {
      let t = this.rules.block.lheading.exec(e);
      if (t) {
        let n = t[1].trim();
        return { type: "heading", raw: t[0], depth: t[2].charAt(0) === "=" ? 1 : 2, text: n, tokens: this.lexer.inline(n) };
      }
    }
    paragraph(e) {
      let t = this.rules.block.paragraph.exec(e);
      if (t) {
        let n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
        return { type: "paragraph", raw: t[0], text: n, tokens: this.lexer.inline(n) };
      }
    }
    text(e) {
      let t = this.rules.block.text.exec(e);
      if (t) return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) };
    }
    escape(e) {
      let t = this.rules.inline.escape.exec(e);
      if (t) return { type: "escape", raw: t[0], text: t[1] };
    }
    tag(e) {
      let t = this.rules.inline.tag.exec(e);
      if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: t[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: t[0] };
    }
    link(e) {
      let t = this.rules.inline.link.exec(e);
      if (t) {
        let n = t[2].trim();
        if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
          if (!this.rules.other.endAngleBracket.test(n)) return;
          let s = I(n.slice(0, -1), "\\");
          if ((n.length - s.length) % 2 === 0) return;
        } else {
          let s = de(t[2], "()");
          if (s === -2) return;
          if (s > -1) {
            let o = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + s;
            t[2] = t[2].substring(0, s), t[0] = t[0].substring(0, o).trim(), t[3] = "";
          }
        }
        let r = t[2], i = "";
        if (this.options.pedantic) {
          let s = this.rules.other.pedanticHrefTitle.exec(r);
          s && (r = s[1], i = s[3]);
        } else i = t[3] ? t[3].slice(1, -1) : "";
        return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = r.slice(1) : r = r.slice(1, -1)), fe(t, { href: r && r.replace(this.rules.inline.anyPunctuation, "$1"), title: i && i.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
      }
    }
    reflink(e, t) {
      let n;
      if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
        let r = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = t[r.toLowerCase()];
        if (!i) {
          let s = n[0].charAt(0);
          return { type: "text", raw: s, text: s };
        }
        return fe(n, i, n[0], this.lexer, this.rules);
      }
    }
    emStrong(e, t, n = "") {
      let r = this.rules.inline.emStrongLDelim.exec(e);
      if (!r || !r[1] && !r[2] && !r[3] && !r[4] || r[4] && n.match(this.rules.other.unicodeAlphaNumeric)) return;
      if (!(r[1] || r[3] || "") || !n || this.rules.inline.punctuation.exec(n)) {
        let s = [...r[0]].length - 1, a, o, l = s, p = 0, c = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
        for (c.lastIndex = 0, t = t.slice(-1 * e.length + s); (r = c.exec(t)) !== null; ) {
          if (a = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !a) continue;
          if (o = [...a].length, r[3] || r[4]) {
            l += o;
            continue;
          } else if ((r[5] || r[6]) && s % 3 && !((s + o) % 3)) {
            p += o;
            continue;
          }
          if (l -= o, l > 0) continue;
          o = Math.min(o, o + l + p);
          let d = [...r[0]][0].length, h = e.slice(0, s + r.index + d + o);
          if (Math.min(s, o) % 2) {
            let f = h.slice(1, -1);
            return { type: "em", raw: h, text: f, tokens: this.lexer.inlineTokens(f) };
          }
          let R = h.slice(2, -2);
          return { type: "strong", raw: h, text: R, tokens: this.lexer.inlineTokens(R) };
        }
      }
    }
    codespan(e) {
      let t = this.rules.inline.code.exec(e);
      if (t) {
        let n = t[2].replace(this.rules.other.newLineCharGlobal, " "), r = this.rules.other.nonSpaceChar.test(n), i = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
        return r && i && (n = n.substring(1, n.length - 1)), { type: "codespan", raw: t[0], text: n };
      }
    }
    br(e) {
      let t = this.rules.inline.br.exec(e);
      if (t) return { type: "br", raw: t[0] };
    }
    del(e, t, n = "") {
      let r = this.rules.inline.delLDelim.exec(e);
      if (!r) return;
      if (!(r[1] || "") || !n || this.rules.inline.punctuation.exec(n)) {
        let s = [...r[0]].length - 1, a, o, l = s, p = this.rules.inline.delRDelim;
        for (p.lastIndex = 0, t = t.slice(-1 * e.length + s); (r = p.exec(t)) !== null; ) {
          if (a = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !a || (o = [...a].length, o !== s)) continue;
          if (r[3] || r[4]) {
            l += o;
            continue;
          }
          if (l -= o, l > 0) continue;
          o = Math.min(o, o + l);
          let c = [...r[0]][0].length, d = e.slice(0, s + r.index + c + o), h = d.slice(s, -s);
          return { type: "del", raw: d, text: h, tokens: this.lexer.inlineTokens(h) };
        }
      }
    }
    autolink(e) {
      let t = this.rules.inline.autolink.exec(e);
      if (t) {
        let n, r;
        return t[2] === "@" ? (n = t[1], r = "mailto:" + n) : (n = t[1], r = n), { type: "link", raw: t[0], text: n, href: r, tokens: [{ type: "text", raw: n, text: n }] };
      }
    }
    url(e) {
      let t;
      if (t = this.rules.inline.url.exec(e)) {
        let n, r;
        if (t[2] === "@") n = t[0], r = "mailto:" + n;
        else {
          let i;
          do
            i = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
          while (i !== t[0]);
          n = t[0], t[1] === "www." ? r = "http://" + t[0] : r = t[0];
        }
        return { type: "link", raw: t[0], text: n, href: r, tokens: [{ type: "text", raw: n, text: n }] };
      }
    }
    inlineText(e) {
      let t = this.rules.inline.text.exec(e);
      if (t) {
        let n = this.lexer.state.inRawBlock;
        return { type: "text", raw: t[0], text: t[0], escaped: n };
      }
    }
  };
  var x = class u {
    tokens;
    options;
    state;
    inlineQueue;
    tokenizer;
    constructor(e) {
      this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || O, this.options.tokenizer = this.options.tokenizer || new w(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
      let t = { other: m, block: B.normal, inline: E.normal };
      this.options.pedantic ? (t.block = B.pedantic, t.inline = E.pedantic) : this.options.gfm && (t.block = B.gfm, this.options.breaks ? t.inline = E.breaks : t.inline = E.gfm), this.tokenizer.rules = t;
    }
    static get rules() {
      return { block: B, inline: E };
    }
    static lex(e, t) {
      return new u(t).lex(e);
    }
    static lexInline(e, t) {
      return new u(t).inlineTokens(e);
    }
    lex(e) {
      e = e.replace(m.carriageReturn, `
`), this.blockTokens(e, this.tokens);
      for (let t = 0; t < this.inlineQueue.length; t++) {
        let n = this.inlineQueue[t];
        this.inlineTokens(n.src, n.tokens);
      }
      return this.inlineQueue = [], this.tokens;
    }
    blockTokens(e, t = [], n = false) {
      for (this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(m.tabCharGlobal, "    ").replace(m.spaceLine, "")); e; ) {
        let r;
        if (this.options.extensions?.block?.some((s) => (r = s.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), true) : false)) continue;
        if (r = this.tokenizer.space(e)) {
          e = e.substring(r.raw.length);
          let s = t.at(-1);
          r.raw.length === 1 && s !== void 0 ? s.raw += `
` : t.push(r);
          continue;
        }
        if (r = this.tokenizer.code(e)) {
          e = e.substring(r.raw.length);
          let s = t.at(-1);
          s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.at(-1).src = s.text) : t.push(r);
          continue;
        }
        if (r = this.tokenizer.fences(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.heading(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.hr(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.blockquote(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.list(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.html(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.def(e)) {
          e = e.substring(r.raw.length);
          let s = t.at(-1);
          s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.raw, this.inlineQueue.at(-1).src = s.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = { href: r.href, title: r.title }, t.push(r));
          continue;
        }
        if (r = this.tokenizer.table(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.lheading(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        let i = e;
        if (this.options.extensions?.startBlock) {
          let s = 1 / 0, a = e.slice(1), o;
          this.options.extensions.startBlock.forEach((l) => {
            o = l.call({ lexer: this }, a), typeof o == "number" && o >= 0 && (s = Math.min(s, o));
          }), s < 1 / 0 && s >= 0 && (i = e.substring(0, s + 1));
        }
        if (this.state.top && (r = this.tokenizer.paragraph(i))) {
          let s = t.at(-1);
          n && s?.type === "paragraph" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : t.push(r), n = i.length !== e.length, e = e.substring(r.raw.length);
          continue;
        }
        if (r = this.tokenizer.text(e)) {
          e = e.substring(r.raw.length);
          let s = t.at(-1);
          s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : t.push(r);
          continue;
        }
        if (e) {
          let s = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(s);
            break;
          } else throw new Error(s);
        }
      }
      return this.state.top = true, t;
    }
    inline(e, t = []) {
      return this.inlineQueue.push({ src: e, tokens: t }), t;
    }
    inlineTokens(e, t = []) {
      this.tokenizer.lexer = this;
      let n = e, r = null;
      if (this.tokens.links) {
        let o = Object.keys(this.tokens.links);
        if (o.length > 0) for (; (r = this.tokenizer.rules.inline.reflinkSearch.exec(n)) !== null; ) o.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
      }
      for (; (r = this.tokenizer.rules.inline.anyPunctuation.exec(n)) !== null; ) n = n.slice(0, r.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
      let i;
      for (; (r = this.tokenizer.rules.inline.blockSkip.exec(n)) !== null; ) i = r[2] ? r[2].length : 0, n = n.slice(0, r.index + i) + "[" + "a".repeat(r[0].length - i - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
      let s = false, a = "";
      for (; e; ) {
        s || (a = ""), s = false;
        let o;
        if (this.options.extensions?.inline?.some((p) => (o = p.call({ lexer: this }, e, t)) ? (e = e.substring(o.raw.length), t.push(o), true) : false)) continue;
        if (o = this.tokenizer.escape(e)) {
          e = e.substring(o.raw.length), t.push(o);
          continue;
        }
        if (o = this.tokenizer.tag(e)) {
          e = e.substring(o.raw.length), t.push(o);
          continue;
        }
        if (o = this.tokenizer.link(e)) {
          e = e.substring(o.raw.length), t.push(o);
          continue;
        }
        if (o = this.tokenizer.reflink(e, this.tokens.links)) {
          e = e.substring(o.raw.length);
          let p = t.at(-1);
          o.type === "text" && p?.type === "text" ? (p.raw += o.raw, p.text += o.text) : t.push(o);
          continue;
        }
        if (o = this.tokenizer.emStrong(e, n, a)) {
          e = e.substring(o.raw.length), t.push(o);
          continue;
        }
        if (o = this.tokenizer.codespan(e)) {
          e = e.substring(o.raw.length), t.push(o);
          continue;
        }
        if (o = this.tokenizer.br(e)) {
          e = e.substring(o.raw.length), t.push(o);
          continue;
        }
        if (o = this.tokenizer.del(e, n, a)) {
          e = e.substring(o.raw.length), t.push(o);
          continue;
        }
        if (o = this.tokenizer.autolink(e)) {
          e = e.substring(o.raw.length), t.push(o);
          continue;
        }
        if (!this.state.inLink && (o = this.tokenizer.url(e))) {
          e = e.substring(o.raw.length), t.push(o);
          continue;
        }
        let l = e;
        if (this.options.extensions?.startInline) {
          let p = 1 / 0, c = e.slice(1), d;
          this.options.extensions.startInline.forEach((h) => {
            d = h.call({ lexer: this }, c), typeof d == "number" && d >= 0 && (p = Math.min(p, d));
          }), p < 1 / 0 && p >= 0 && (l = e.substring(0, p + 1));
        }
        if (o = this.tokenizer.inlineText(l)) {
          e = e.substring(o.raw.length), o.raw.slice(-1) !== "_" && (a = o.raw.slice(-1)), s = true;
          let p = t.at(-1);
          p?.type === "text" ? (p.raw += o.raw, p.text += o.text) : t.push(o);
          continue;
        }
        if (e) {
          let p = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(p);
            break;
          } else throw new Error(p);
        }
      }
      return t;
    }
  };
  var y = class {
    options;
    parser;
    constructor(e) {
      this.options = e || O;
    }
    space(e) {
      return "";
    }
    code({ text: e, lang: t, escaped: n }) {
      let r = (t || "").match(m.notSpaceStart)?.[0], i = e.replace(m.endingNewline, "") + `
`;
      return r ? '<pre><code class="language-' + T(r) + '">' + (n ? i : T(i, true)) + `</code></pre>
` : "<pre><code>" + (n ? i : T(i, true)) + `</code></pre>
`;
    }
    blockquote({ tokens: e }) {
      return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
    }
    html({ text: e }) {
      return e;
    }
    def(e) {
      return "";
    }
    heading({ tokens: e, depth: t }) {
      return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
    }
    hr(e) {
      return `<hr>
`;
    }
    list(e) {
      let t = e.ordered, n = e.start, r = "";
      for (let a = 0; a < e.items.length; a++) {
        let o = e.items[a];
        r += this.listitem(o);
      }
      let i = t ? "ol" : "ul", s = t && n !== 1 ? ' start="' + n + '"' : "";
      return "<" + i + s + `>
` + r + "</" + i + `>
`;
    }
    listitem(e) {
      return `<li>${this.parser.parse(e.tokens)}</li>
`;
    }
    checkbox({ checked: e }) {
      return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"> ';
    }
    paragraph({ tokens: e }) {
      return `<p>${this.parser.parseInline(e)}</p>
`;
    }
    table(e) {
      let t = "", n = "";
      for (let i = 0; i < e.header.length; i++) n += this.tablecell(e.header[i]);
      t += this.tablerow({ text: n });
      let r = "";
      for (let i = 0; i < e.rows.length; i++) {
        let s = e.rows[i];
        n = "";
        for (let a = 0; a < s.length; a++) n += this.tablecell(s[a]);
        r += this.tablerow({ text: n });
      }
      return r && (r = `<tbody>${r}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + r + `</table>
`;
    }
    tablerow({ text: e }) {
      return `<tr>
${e}</tr>
`;
    }
    tablecell(e) {
      let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
      return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
    }
    strong({ tokens: e }) {
      return `<strong>${this.parser.parseInline(e)}</strong>`;
    }
    em({ tokens: e }) {
      return `<em>${this.parser.parseInline(e)}</em>`;
    }
    codespan({ text: e }) {
      return `<code>${T(e, true)}</code>`;
    }
    br(e) {
      return "<br>";
    }
    del({ tokens: e }) {
      return `<del>${this.parser.parseInline(e)}</del>`;
    }
    link({ href: e, title: t, tokens: n }) {
      let r = this.parser.parseInline(n), i = J(e);
      if (i === null) return r;
      e = i;
      let s = '<a href="' + e + '"';
      return t && (s += ' title="' + T(t) + '"'), s += ">" + r + "</a>", s;
    }
    image({ href: e, title: t, text: n, tokens: r }) {
      r && (n = this.parser.parseInline(r, this.parser.textRenderer));
      let i = J(e);
      if (i === null) return T(n);
      e = i;
      let s = `<img src="${e}" alt="${T(n)}"`;
      return t && (s += ` title="${T(t)}"`), s += ">", s;
    }
    text(e) {
      return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : T(e.text);
    }
  };
  var $ = class {
    strong({ text: e }) {
      return e;
    }
    em({ text: e }) {
      return e;
    }
    codespan({ text: e }) {
      return e;
    }
    del({ text: e }) {
      return e;
    }
    html({ text: e }) {
      return e;
    }
    text({ text: e }) {
      return e;
    }
    link({ text: e }) {
      return "" + e;
    }
    image({ text: e }) {
      return "" + e;
    }
    br() {
      return "";
    }
    checkbox({ raw: e }) {
      return e;
    }
  };
  var b = class u2 {
    options;
    renderer;
    textRenderer;
    constructor(e) {
      this.options = e || O, this.options.renderer = this.options.renderer || new y(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new $();
    }
    static parse(e, t) {
      return new u2(t).parse(e);
    }
    static parseInline(e, t) {
      return new u2(t).parseInline(e);
    }
    parse(e) {
      this.renderer.parser = this;
      let t = "";
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (this.options.extensions?.renderers?.[r.type]) {
          let s = r, a = this.options.extensions.renderers[s.type].call({ parser: this }, s);
          if (a !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(s.type)) {
            t += a || "";
            continue;
          }
        }
        let i = r;
        switch (i.type) {
          case "space": {
            t += this.renderer.space(i);
            break;
          }
          case "hr": {
            t += this.renderer.hr(i);
            break;
          }
          case "heading": {
            t += this.renderer.heading(i);
            break;
          }
          case "code": {
            t += this.renderer.code(i);
            break;
          }
          case "table": {
            t += this.renderer.table(i);
            break;
          }
          case "blockquote": {
            t += this.renderer.blockquote(i);
            break;
          }
          case "list": {
            t += this.renderer.list(i);
            break;
          }
          case "checkbox": {
            t += this.renderer.checkbox(i);
            break;
          }
          case "html": {
            t += this.renderer.html(i);
            break;
          }
          case "def": {
            t += this.renderer.def(i);
            break;
          }
          case "paragraph": {
            t += this.renderer.paragraph(i);
            break;
          }
          case "text": {
            t += this.renderer.text(i);
            break;
          }
          default: {
            let s = 'Token with "' + i.type + '" type was not found.';
            if (this.options.silent) return console.error(s), "";
            throw new Error(s);
          }
        }
      }
      return t;
    }
    parseInline(e, t = this.renderer) {
      this.renderer.parser = this;
      let n = "";
      for (let r = 0; r < e.length; r++) {
        let i = e[r];
        if (this.options.extensions?.renderers?.[i.type]) {
          let a = this.options.extensions.renderers[i.type].call({ parser: this }, i);
          if (a !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type)) {
            n += a || "";
            continue;
          }
        }
        let s = i;
        switch (s.type) {
          case "escape": {
            n += t.text(s);
            break;
          }
          case "html": {
            n += t.html(s);
            break;
          }
          case "link": {
            n += t.link(s);
            break;
          }
          case "image": {
            n += t.image(s);
            break;
          }
          case "checkbox": {
            n += t.checkbox(s);
            break;
          }
          case "strong": {
            n += t.strong(s);
            break;
          }
          case "em": {
            n += t.em(s);
            break;
          }
          case "codespan": {
            n += t.codespan(s);
            break;
          }
          case "br": {
            n += t.br(s);
            break;
          }
          case "del": {
            n += t.del(s);
            break;
          }
          case "text": {
            n += t.text(s);
            break;
          }
          default: {
            let a = 'Token with "' + s.type + '" type was not found.';
            if (this.options.silent) return console.error(a), "";
            throw new Error(a);
          }
        }
      }
      return n;
    }
  };
  var P = class {
    options;
    block;
    constructor(e) {
      this.options = e || O;
    }
    static passThroughHooks = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"]);
    static passThroughHooksRespectAsync = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]);
    preprocess(e) {
      return e;
    }
    postprocess(e) {
      return e;
    }
    processAllTokens(e) {
      return e;
    }
    emStrongMask(e) {
      return e;
    }
    provideLexer(e = this.block) {
      return e ? x.lex : x.lexInline;
    }
    provideParser(e = this.block) {
      return e ? b.parse : b.parseInline;
    }
  };
  var D = class {
    defaults = M();
    options = this.setOptions;
    parse = this.parseMarkdown(true);
    parseInline = this.parseMarkdown(false);
    Parser = b;
    Renderer = y;
    TextRenderer = $;
    Lexer = x;
    Tokenizer = w;
    Hooks = P;
    constructor(...e) {
      this.use(...e);
    }
    walkTokens(e, t) {
      let n = [];
      for (let r of e) switch (n = n.concat(t.call(this, r)), r.type) {
        case "table": {
          let i = r;
          for (let s of i.header) n = n.concat(this.walkTokens(s.tokens, t));
          for (let s of i.rows) for (let a of s) n = n.concat(this.walkTokens(a.tokens, t));
          break;
        }
        case "list": {
          let i = r;
          n = n.concat(this.walkTokens(i.items, t));
          break;
        }
        default: {
          let i = r;
          this.defaults.extensions?.childTokens?.[i.type] ? this.defaults.extensions.childTokens[i.type].forEach((s) => {
            let a = i[s].flat(1 / 0);
            n = n.concat(this.walkTokens(a, t));
          }) : i.tokens && (n = n.concat(this.walkTokens(i.tokens, t)));
        }
      }
      return n;
    }
    use(...e) {
      let t = this.defaults.extensions || { renderers: {}, childTokens: {} };
      return e.forEach((n) => {
        let r = { ...n };
        if (r.async = this.defaults.async || r.async || false, n.extensions && (n.extensions.forEach((i) => {
          if (!i.name) throw new Error("extension name required");
          if ("renderer" in i) {
            let s = t.renderers[i.name];
            s ? t.renderers[i.name] = function(...a) {
              let o = i.renderer.apply(this, a);
              return o === false && (o = s.apply(this, a)), o;
            } : t.renderers[i.name] = i.renderer;
          }
          if ("tokenizer" in i) {
            if (!i.level || i.level !== "block" && i.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
            let s = t[i.level];
            s ? s.unshift(i.tokenizer) : t[i.level] = [i.tokenizer], i.start && (i.level === "block" ? t.startBlock ? t.startBlock.push(i.start) : t.startBlock = [i.start] : i.level === "inline" && (t.startInline ? t.startInline.push(i.start) : t.startInline = [i.start]));
          }
          "childTokens" in i && i.childTokens && (t.childTokens[i.name] = i.childTokens);
        }), r.extensions = t), n.renderer) {
          let i = this.defaults.renderer || new y(this.defaults);
          for (let s in n.renderer) {
            if (!(s in i)) throw new Error(`renderer '${s}' does not exist`);
            if (["options", "parser"].includes(s)) continue;
            let a = s, o = n.renderer[a], l = i[a];
            i[a] = (...p) => {
              let c = o.apply(i, p);
              return c === false && (c = l.apply(i, p)), c || "";
            };
          }
          r.renderer = i;
        }
        if (n.tokenizer) {
          let i = this.defaults.tokenizer || new w(this.defaults);
          for (let s in n.tokenizer) {
            if (!(s in i)) throw new Error(`tokenizer '${s}' does not exist`);
            if (["options", "rules", "lexer"].includes(s)) continue;
            let a = s, o = n.tokenizer[a], l = i[a];
            i[a] = (...p) => {
              let c = o.apply(i, p);
              return c === false && (c = l.apply(i, p)), c;
            };
          }
          r.tokenizer = i;
        }
        if (n.hooks) {
          let i = this.defaults.hooks || new P();
          for (let s in n.hooks) {
            if (!(s in i)) throw new Error(`hook '${s}' does not exist`);
            if (["options", "block"].includes(s)) continue;
            let a = s, o = n.hooks[a], l = i[a];
            P.passThroughHooks.has(s) ? i[a] = (p) => {
              if (this.defaults.async && P.passThroughHooksRespectAsync.has(s)) return (async () => {
                let d = await o.call(i, p);
                return l.call(i, d);
              })();
              let c = o.call(i, p);
              return l.call(i, c);
            } : i[a] = (...p) => {
              if (this.defaults.async) return (async () => {
                let d = await o.apply(i, p);
                return d === false && (d = await l.apply(i, p)), d;
              })();
              let c = o.apply(i, p);
              return c === false && (c = l.apply(i, p)), c;
            };
          }
          r.hooks = i;
        }
        if (n.walkTokens) {
          let i = this.defaults.walkTokens, s = n.walkTokens;
          r.walkTokens = function(a) {
            let o = [];
            return o.push(s.call(this, a)), i && (o = o.concat(i.call(this, a))), o;
          };
        }
        this.defaults = { ...this.defaults, ...r };
      }), this;
    }
    setOptions(e) {
      return this.defaults = { ...this.defaults, ...e }, this;
    }
    lexer(e, t) {
      return x.lex(e, t ?? this.defaults);
    }
    parser(e, t) {
      return b.parse(e, t ?? this.defaults);
    }
    parseMarkdown(e) {
      return (n, r) => {
        let i = { ...r }, s = { ...this.defaults, ...i }, a = this.onError(!!s.silent, !!s.async);
        if (this.defaults.async === true && i.async === false) return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
        if (typeof n > "u" || n === null) return a(new Error("marked(): input parameter is undefined or null"));
        if (typeof n != "string") return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
        if (s.hooks && (s.hooks.options = s, s.hooks.block = e), s.async) return (async () => {
          let o = s.hooks ? await s.hooks.preprocess(n) : n, p = await (s.hooks ? await s.hooks.provideLexer(e) : e ? x.lex : x.lexInline)(o, s), c = s.hooks ? await s.hooks.processAllTokens(p) : p;
          s.walkTokens && await Promise.all(this.walkTokens(c, s.walkTokens));
          let h = await (s.hooks ? await s.hooks.provideParser(e) : e ? b.parse : b.parseInline)(c, s);
          return s.hooks ? await s.hooks.postprocess(h) : h;
        })().catch(a);
        try {
          s.hooks && (n = s.hooks.preprocess(n));
          let l = (s.hooks ? s.hooks.provideLexer(e) : e ? x.lex : x.lexInline)(n, s);
          s.hooks && (l = s.hooks.processAllTokens(l)), s.walkTokens && this.walkTokens(l, s.walkTokens);
          let c = (s.hooks ? s.hooks.provideParser(e) : e ? b.parse : b.parseInline)(l, s);
          return s.hooks && (c = s.hooks.postprocess(c)), c;
        } catch (o) {
          return a(o);
        }
      };
    }
    onError(e, t) {
      return (n) => {
        if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
          let r = "<p>An error occurred:</p><pre>" + T(n.message + "", true) + "</pre>";
          return t ? Promise.resolve(r) : r;
        }
        if (t) return Promise.reject(n);
        throw n;
      };
    }
  };
  var L = new D();
  function g(u3, e) {
    return L.parse(u3, e);
  }
  g.options = g.setOptions = function(u3) {
    return L.setOptions(u3), g.defaults = L.defaults, G(g.defaults), g;
  };
  g.getDefaults = M;
  g.defaults = O;
  g.use = function(...u3) {
    return L.use(...u3), g.defaults = L.defaults, G(g.defaults), g;
  };
  g.walkTokens = function(u3, e) {
    return L.walkTokens(u3, e);
  };
  g.parseInline = L.parseInline;
  g.Parser = b;
  g.parser = b.parse;
  g.Renderer = y;
  g.TextRenderer = $;
  g.Lexer = x;
  g.lexer = x.lex;
  g.Tokenizer = w;
  g.Hooks = P;
  g.parse = g;
  var Qt = g.options;
  var jt = g.setOptions;
  var Ft = g.use;
  var Ut = g.walkTokens;
  var Kt = g.parseInline;
  var Xt = b.parse;
  var Jt = x.lex;

  // node_modules/dompurify/dist/purify.es.mjs
  var {
    entries,
    setPrototypeOf,
    isFrozen,
    getPrototypeOf,
    getOwnPropertyDescriptor
  } = Object;
  var {
    freeze,
    seal,
    create
  } = Object;
  var {
    apply,
    construct
  } = typeof Reflect !== "undefined" && Reflect;
  if (!freeze) {
    freeze = function freeze2(x2) {
      return x2;
    };
  }
  if (!seal) {
    seal = function seal2(x2) {
      return x2;
    };
  }
  if (!apply) {
    apply = function apply2(func, thisArg) {
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }
      return func.apply(thisArg, args);
    };
  }
  if (!construct) {
    construct = function construct2(Func) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      return new Func(...args);
    };
  }
  var arrayForEach = unapply(Array.prototype.forEach);
  var arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
  var arrayPop = unapply(Array.prototype.pop);
  var arrayPush = unapply(Array.prototype.push);
  var arraySplice = unapply(Array.prototype.splice);
  var stringToLowerCase = unapply(String.prototype.toLowerCase);
  var stringToString = unapply(String.prototype.toString);
  var stringMatch = unapply(String.prototype.match);
  var stringReplace = unapply(String.prototype.replace);
  var stringIndexOf = unapply(String.prototype.indexOf);
  var stringTrim = unapply(String.prototype.trim);
  var objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
  var regExpTest = unapply(RegExp.prototype.test);
  var typeErrorCreate = unconstruct(TypeError);
  function unapply(func) {
    return function(thisArg) {
      if (thisArg instanceof RegExp) {
        thisArg.lastIndex = 0;
      }
      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }
      return apply(func, thisArg, args);
    };
  }
  function unconstruct(Func) {
    return function() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return construct(Func, args);
    };
  }
  function addToSet(set, array) {
    let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
    if (setPrototypeOf) {
      setPrototypeOf(set, null);
    }
    let l = array.length;
    while (l--) {
      let element = array[l];
      if (typeof element === "string") {
        const lcElement = transformCaseFunc(element);
        if (lcElement !== element) {
          if (!isFrozen(array)) {
            array[l] = lcElement;
          }
          element = lcElement;
        }
      }
      set[element] = true;
    }
    return set;
  }
  function cleanArray(array) {
    for (let index = 0; index < array.length; index++) {
      const isPropertyExist = objectHasOwnProperty(array, index);
      if (!isPropertyExist) {
        array[index] = null;
      }
    }
    return array;
  }
  function clone(object) {
    const newObject = create(null);
    for (const [property, value] of entries(object)) {
      const isPropertyExist = objectHasOwnProperty(object, property);
      if (isPropertyExist) {
        if (Array.isArray(value)) {
          newObject[property] = cleanArray(value);
        } else if (value && typeof value === "object" && value.constructor === Object) {
          newObject[property] = clone(value);
        } else {
          newObject[property] = value;
        }
      }
    }
    return newObject;
  }
  function lookupGetter(object, prop) {
    while (object !== null) {
      const desc = getOwnPropertyDescriptor(object, prop);
      if (desc) {
        if (desc.get) {
          return unapply(desc.get);
        }
        if (typeof desc.value === "function") {
          return unapply(desc.value);
        }
      }
      object = getPrototypeOf(object);
    }
    function fallbackValue() {
      return null;
    }
    return fallbackValue;
  }
  var html$1 = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
  var svg$1 = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
  var svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
  var svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
  var mathMl$1 = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
  var mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
  var text = freeze(["#text"]);
  var html = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]);
  var svg = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
  var mathMl = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
  var xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
  var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
  var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
  var TMPLIT_EXPR = seal(/\$\{[\w\W]*/gm);
  var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/);
  var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
  var IS_ALLOWED_URI = seal(
    /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
    // eslint-disable-line no-useless-escape
  );
  var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
  var ATTR_WHITESPACE = seal(
    /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
    // eslint-disable-line no-control-regex
  );
  var DOCTYPE_NAME = seal(/^html$/i);
  var CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
  var EXPRESSIONS = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    ARIA_ATTR,
    ATTR_WHITESPACE,
    CUSTOM_ELEMENT,
    DATA_ATTR,
    DOCTYPE_NAME,
    ERB_EXPR,
    IS_ALLOWED_URI,
    IS_SCRIPT_OR_DATA,
    MUSTACHE_EXPR,
    TMPLIT_EXPR
  });
  var NODE_TYPE = {
    element: 1,
    attribute: 2,
    text: 3,
    cdataSection: 4,
    entityReference: 5,
    // Deprecated
    entityNode: 6,
    // Deprecated
    progressingInstruction: 7,
    comment: 8,
    document: 9,
    documentType: 10,
    documentFragment: 11,
    notation: 12
    // Deprecated
  };
  var getGlobal = function getGlobal2() {
    return typeof window === "undefined" ? null : window;
  };
  var _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes2, purifyHostElement) {
    if (typeof trustedTypes2 !== "object" || typeof trustedTypes2.createPolicy !== "function") {
      return null;
    }
    let suffix = null;
    const ATTR_NAME = "data-tt-policy-suffix";
    if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
      suffix = purifyHostElement.getAttribute(ATTR_NAME);
    }
    const policyName = "dompurify" + (suffix ? "#" + suffix : "");
    try {
      return trustedTypes2.createPolicy(policyName, {
        createHTML(html2) {
          return html2;
        },
        createScriptURL(scriptUrl) {
          return scriptUrl;
        }
      });
    } catch (_2) {
      console.warn("TrustedTypes policy " + policyName + " could not be created.");
      return null;
    }
  };
  var _createHooksMap = function _createHooksMap2() {
    return {
      afterSanitizeAttributes: [],
      afterSanitizeElements: [],
      afterSanitizeShadowDOM: [],
      beforeSanitizeAttributes: [],
      beforeSanitizeElements: [],
      beforeSanitizeShadowDOM: [],
      uponSanitizeAttribute: [],
      uponSanitizeElement: [],
      uponSanitizeShadowNode: []
    };
  };
  function createDOMPurify() {
    let window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
    const DOMPurify = (root) => createDOMPurify(root);
    DOMPurify.version = "3.3.3";
    DOMPurify.removed = [];
    if (!window2 || !window2.document || window2.document.nodeType !== NODE_TYPE.document || !window2.Element) {
      DOMPurify.isSupported = false;
      return DOMPurify;
    }
    let {
      document: document2
    } = window2;
    const originalDocument = document2;
    const currentScript = originalDocument.currentScript;
    const {
      DocumentFragment: DocumentFragment2,
      HTMLTemplateElement,
      Node,
      Element,
      NodeFilter,
      NamedNodeMap = window2.NamedNodeMap || window2.MozNamedAttrMap,
      HTMLFormElement,
      DOMParser,
      trustedTypes: trustedTypes2
    } = window2;
    const ElementPrototype = Element.prototype;
    const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
    const remove = lookupGetter(ElementPrototype, "remove");
    const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
    const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
    const getParentNode = lookupGetter(ElementPrototype, "parentNode");
    if (typeof HTMLTemplateElement === "function") {
      const template = document2.createElement("template");
      if (template.content && template.content.ownerDocument) {
        document2 = template.content.ownerDocument;
      }
    }
    let trustedTypesPolicy;
    let emptyHTML = "";
    const {
      implementation,
      createNodeIterator,
      createDocumentFragment,
      getElementsByTagName
    } = document2;
    const {
      importNode
    } = originalDocument;
    let hooks = _createHooksMap();
    DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
    const {
      MUSTACHE_EXPR: MUSTACHE_EXPR2,
      ERB_EXPR: ERB_EXPR2,
      TMPLIT_EXPR: TMPLIT_EXPR2,
      DATA_ATTR: DATA_ATTR2,
      ARIA_ATTR: ARIA_ATTR2,
      IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA2,
      ATTR_WHITESPACE: ATTR_WHITESPACE2,
      CUSTOM_ELEMENT: CUSTOM_ELEMENT2
    } = EXPRESSIONS;
    let {
      IS_ALLOWED_URI: IS_ALLOWED_URI$1
    } = EXPRESSIONS;
    let ALLOWED_TAGS = null;
    const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);
    let ALLOWED_ATTR = null;
    const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html, ...svg, ...mathMl, ...xml]);
    let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
      tagNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: false
      }
    }));
    let FORBID_TAGS = null;
    let FORBID_ATTR = null;
    const EXTRA_ELEMENT_HANDLING = Object.seal(create(null, {
      tagCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      }
    }));
    let ALLOW_ARIA_ATTR = true;
    let ALLOW_DATA_ATTR = true;
    let ALLOW_UNKNOWN_PROTOCOLS = false;
    let ALLOW_SELF_CLOSE_IN_ATTR = true;
    let SAFE_FOR_TEMPLATES = false;
    let SAFE_FOR_XML = true;
    let WHOLE_DOCUMENT = false;
    let SET_CONFIG = false;
    let FORCE_BODY = false;
    let RETURN_DOM = false;
    let RETURN_DOM_FRAGMENT = false;
    let RETURN_TRUSTED_TYPE = false;
    let SANITIZE_DOM = true;
    let SANITIZE_NAMED_PROPS = false;
    const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
    let KEEP_CONTENT = true;
    let IN_PLACE = false;
    let USE_PROFILES = {};
    let FORBID_CONTENTS = null;
    const DEFAULT_FORBID_CONTENTS = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
    let DATA_URI_TAGS = null;
    const DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
    let URI_SAFE_ATTRIBUTES = null;
    const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
    const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
    const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
    const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
    let NAMESPACE = HTML_NAMESPACE;
    let IS_EMPTY_INPUT = false;
    let ALLOWED_NAMESPACES = null;
    const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
    let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
    let HTML_INTEGRATION_POINTS = addToSet({}, ["annotation-xml"]);
    const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ["title", "style", "font", "a", "script"]);
    let PARSER_MEDIA_TYPE = null;
    const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
    const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
    let transformCaseFunc = null;
    let CONFIG = null;
    const formElement = document2.createElement("form");
    const isRegexOrFunction = function isRegexOrFunction2(testValue) {
      return testValue instanceof RegExp || testValue instanceof Function;
    };
    const _parseConfig = function _parseConfig2() {
      let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (CONFIG && CONFIG === cfg) {
        return;
      }
      if (!cfg || typeof cfg !== "object") {
        cfg = {};
      }
      cfg = clone(cfg);
      PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
      SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
      transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
      ALLOWED_TAGS = objectHasOwnProperty(cfg, "ALLOWED_TAGS") ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
      ALLOWED_ATTR = objectHasOwnProperty(cfg, "ALLOWED_ATTR") ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
      ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, "ALLOWED_NAMESPACES") ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
      URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, "ADD_URI_SAFE_ATTR") ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR, transformCaseFunc) : DEFAULT_URI_SAFE_ATTRIBUTES;
      DATA_URI_TAGS = objectHasOwnProperty(cfg, "ADD_DATA_URI_TAGS") ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS, transformCaseFunc) : DEFAULT_DATA_URI_TAGS;
      FORBID_CONTENTS = objectHasOwnProperty(cfg, "FORBID_CONTENTS") ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
      FORBID_TAGS = objectHasOwnProperty(cfg, "FORBID_TAGS") ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : clone({});
      FORBID_ATTR = objectHasOwnProperty(cfg, "FORBID_ATTR") ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : clone({});
      USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES : false;
      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
      ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
      SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
      RETURN_DOM = cfg.RETURN_DOM || false;
      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
      RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
      FORCE_BODY = cfg.FORCE_BODY || false;
      SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
      SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
      KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
      IN_PLACE = cfg.IN_PLACE || false;
      IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
      NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
      MATHML_TEXT_INTEGRATION_POINTS = cfg.MATHML_TEXT_INTEGRATION_POINTS || MATHML_TEXT_INTEGRATION_POINTS;
      HTML_INTEGRATION_POINTS = cfg.HTML_INTEGRATION_POINTS || HTML_INTEGRATION_POINTS;
      CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
      }
      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
      }
      if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") {
        CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
      }
      if (SAFE_FOR_TEMPLATES) {
        ALLOW_DATA_ATTR = false;
      }
      if (RETURN_DOM_FRAGMENT) {
        RETURN_DOM = true;
      }
      if (USE_PROFILES) {
        ALLOWED_TAGS = addToSet({}, text);
        ALLOWED_ATTR = create(null);
        if (USE_PROFILES.html === true) {
          addToSet(ALLOWED_TAGS, html$1);
          addToSet(ALLOWED_ATTR, html);
        }
        if (USE_PROFILES.svg === true) {
          addToSet(ALLOWED_TAGS, svg$1);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }
        if (USE_PROFILES.svgFilters === true) {
          addToSet(ALLOWED_TAGS, svgFilters);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }
        if (USE_PROFILES.mathMl === true) {
          addToSet(ALLOWED_TAGS, mathMl$1);
          addToSet(ALLOWED_ATTR, mathMl);
          addToSet(ALLOWED_ATTR, xml);
        }
      }
      if (!objectHasOwnProperty(cfg, "ADD_TAGS")) {
        EXTRA_ELEMENT_HANDLING.tagCheck = null;
      }
      if (!objectHasOwnProperty(cfg, "ADD_ATTR")) {
        EXTRA_ELEMENT_HANDLING.attributeCheck = null;
      }
      if (cfg.ADD_TAGS) {
        if (typeof cfg.ADD_TAGS === "function") {
          EXTRA_ELEMENT_HANDLING.tagCheck = cfg.ADD_TAGS;
        } else {
          if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
            ALLOWED_TAGS = clone(ALLOWED_TAGS);
          }
          addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
        }
      }
      if (cfg.ADD_ATTR) {
        if (typeof cfg.ADD_ATTR === "function") {
          EXTRA_ELEMENT_HANDLING.attributeCheck = cfg.ADD_ATTR;
        } else {
          if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
            ALLOWED_ATTR = clone(ALLOWED_ATTR);
          }
          addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
        }
      }
      if (cfg.ADD_URI_SAFE_ATTR) {
        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
      }
      if (cfg.FORBID_CONTENTS) {
        if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
          FORBID_CONTENTS = clone(FORBID_CONTENTS);
        }
        addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
      }
      if (cfg.ADD_FORBID_CONTENTS) {
        if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
          FORBID_CONTENTS = clone(FORBID_CONTENTS);
        }
        addToSet(FORBID_CONTENTS, cfg.ADD_FORBID_CONTENTS, transformCaseFunc);
      }
      if (KEEP_CONTENT) {
        ALLOWED_TAGS["#text"] = true;
      }
      if (WHOLE_DOCUMENT) {
        addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
      }
      if (ALLOWED_TAGS.table) {
        addToSet(ALLOWED_TAGS, ["tbody"]);
        delete FORBID_TAGS.tbody;
      }
      if (cfg.TRUSTED_TYPES_POLICY) {
        if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") {
          throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        }
        if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") {
          throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        }
        trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
        emptyHTML = trustedTypesPolicy.createHTML("");
      } else {
        if (trustedTypesPolicy === void 0) {
          trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes2, currentScript);
        }
        if (trustedTypesPolicy !== null && typeof emptyHTML === "string") {
          emptyHTML = trustedTypesPolicy.createHTML("");
        }
      }
      if (freeze) {
        freeze(cfg);
      }
      CONFIG = cfg;
    };
    const ALL_SVG_TAGS = addToSet({}, [...svg$1, ...svgFilters, ...svgDisallowed]);
    const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
    const _checkValidNamespace = function _checkValidNamespace2(element) {
      let parent = getParentNode(element);
      if (!parent || !parent.tagName) {
        parent = {
          namespaceURI: NAMESPACE,
          tagName: "template"
        };
      }
      const tagName = stringToLowerCase(element.tagName);
      const parentTagName = stringToLowerCase(parent.tagName);
      if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
        return false;
      }
      if (element.namespaceURI === SVG_NAMESPACE) {
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === "svg";
        }
        if (parent.namespaceURI === MATHML_NAMESPACE) {
          return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
        }
        return Boolean(ALL_SVG_TAGS[tagName]);
      }
      if (element.namespaceURI === MATHML_NAMESPACE) {
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === "math";
        }
        if (parent.namespaceURI === SVG_NAMESPACE) {
          return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
        }
        return Boolean(ALL_MATHML_TAGS[tagName]);
      }
      if (element.namespaceURI === HTML_NAMESPACE) {
        if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }
        if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }
        return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
      }
      if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) {
        return true;
      }
      return false;
    };
    const _forceRemove = function _forceRemove2(node) {
      arrayPush(DOMPurify.removed, {
        element: node
      });
      try {
        getParentNode(node).removeChild(node);
      } catch (_2) {
        remove(node);
      }
    };
    const _removeAttribute = function _removeAttribute2(name, element) {
      try {
        arrayPush(DOMPurify.removed, {
          attribute: element.getAttributeNode(name),
          from: element
        });
      } catch (_2) {
        arrayPush(DOMPurify.removed, {
          attribute: null,
          from: element
        });
      }
      element.removeAttribute(name);
      if (name === "is") {
        if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
          try {
            _forceRemove(element);
          } catch (_2) {
          }
        } else {
          try {
            element.setAttribute(name, "");
          } catch (_2) {
          }
        }
      }
    };
    const _initDocument = function _initDocument2(dirty) {
      let doc = null;
      let leadingWhitespace = null;
      if (FORCE_BODY) {
        dirty = "<remove></remove>" + dirty;
      } else {
        const matches = stringMatch(dirty, /^[\r\n\t ]+/);
        leadingWhitespace = matches && matches[0];
      }
      if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) {
        dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
      }
      const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      if (NAMESPACE === HTML_NAMESPACE) {
        try {
          doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
        } catch (_2) {
        }
      }
      if (!doc || !doc.documentElement) {
        doc = implementation.createDocument(NAMESPACE, "template", null);
        try {
          doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
        } catch (_2) {
        }
      }
      const body = doc.body || doc.documentElement;
      if (dirty && leadingWhitespace) {
        body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
      }
      if (NAMESPACE === HTML_NAMESPACE) {
        return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
      }
      return WHOLE_DOCUMENT ? doc.documentElement : body;
    };
    const _createNodeIterator = function _createNodeIterator2(root) {
      return createNodeIterator.call(
        root.ownerDocument || root,
        root,
        // eslint-disable-next-line no-bitwise
        NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION,
        null
      );
    };
    const _isClobbered = function _isClobbered2(element) {
      return element instanceof HTMLFormElement && (typeof element.nodeName !== "string" || typeof element.textContent !== "string" || typeof element.removeChild !== "function" || !(element.attributes instanceof NamedNodeMap) || typeof element.removeAttribute !== "function" || typeof element.setAttribute !== "function" || typeof element.namespaceURI !== "string" || typeof element.insertBefore !== "function" || typeof element.hasChildNodes !== "function");
    };
    const _isNode = function _isNode2(value) {
      return typeof Node === "function" && value instanceof Node;
    };
    function _executeHooks(hooks2, currentNode, data) {
      arrayForEach(hooks2, (hook) => {
        hook.call(DOMPurify, currentNode, data, CONFIG);
      });
    }
    const _sanitizeElements = function _sanitizeElements2(currentNode) {
      let content = null;
      _executeHooks(hooks.beforeSanitizeElements, currentNode, null);
      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }
      const tagName = transformCaseFunc(currentNode.nodeName);
      _executeHooks(hooks.uponSanitizeElement, currentNode, {
        tagName,
        allowedTags: ALLOWED_TAGS
      });
      if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w!]/g, currentNode.innerHTML) && regExpTest(/<[/\w!]/g, currentNode.textContent)) {
        _forceRemove(currentNode);
        return true;
      }
      if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
        _forceRemove(currentNode);
        return true;
      }
      if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
        _forceRemove(currentNode);
        return true;
      }
      if (!(EXTRA_ELEMENT_HANDLING.tagCheck instanceof Function && EXTRA_ELEMENT_HANDLING.tagCheck(tagName)) && (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName])) {
        if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) {
            return false;
          }
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) {
            return false;
          }
        }
        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
          const parentNode = getParentNode(currentNode) || currentNode.parentNode;
          const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
          if (childNodes && parentNode) {
            const childCount = childNodes.length;
            for (let i = childCount - 1; i >= 0; --i) {
              const childClone = cloneNode(childNodes[i], true);
              childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
              parentNode.insertBefore(childClone, getNextSibling(currentNode));
            }
          }
        }
        _forceRemove(currentNode);
        return true;
      }
      if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }
      if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);
        return true;
      }
      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
        content = currentNode.textContent;
        arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
          content = stringReplace(content, expr, " ");
        });
        if (currentNode.textContent !== content) {
          arrayPush(DOMPurify.removed, {
            element: currentNode.cloneNode()
          });
          currentNode.textContent = content;
        }
      }
      _executeHooks(hooks.afterSanitizeElements, currentNode, null);
      return false;
    };
    const _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
      if (FORBID_ATTR[lcName]) {
        return false;
      }
      if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) {
        return false;
      }
      if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR2, lcName)) ;
      else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR2, lcName)) ;
      else if (EXTRA_ELEMENT_HANDLING.attributeCheck instanceof Function && EXTRA_ELEMENT_HANDLING.attributeCheck(lcName, lcTag)) ;
      else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName, lcTag)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))
        ) ;
        else {
          return false;
        }
      } else if (URI_SAFE_ATTRIBUTES[lcName]) ;
      else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE2, ""))) ;
      else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]) ;
      else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA2, stringReplace(value, ATTR_WHITESPACE2, ""))) ;
      else if (value) {
        return false;
      } else ;
      return true;
    };
    const _isBasicCustomElement = function _isBasicCustomElement2(tagName) {
      return tagName !== "annotation-xml" && stringMatch(tagName, CUSTOM_ELEMENT2);
    };
    const _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
      _executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
      const {
        attributes
      } = currentNode;
      if (!attributes || _isClobbered(currentNode)) {
        return;
      }
      const hookEvent = {
        attrName: "",
        attrValue: "",
        keepAttr: true,
        allowedAttributes: ALLOWED_ATTR,
        forceKeepAttr: void 0
      };
      let l = attributes.length;
      while (l--) {
        const attr = attributes[l];
        const {
          name,
          namespaceURI,
          value: attrValue
        } = attr;
        const lcName = transformCaseFunc(name);
        const initValue = attrValue;
        let value = name === "value" ? initValue : stringTrim(initValue);
        hookEvent.attrName = lcName;
        hookEvent.attrValue = value;
        hookEvent.keepAttr = true;
        hookEvent.forceKeepAttr = void 0;
        _executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
        value = hookEvent.attrValue;
        if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
          _removeAttribute(name, currentNode);
          value = SANITIZE_NAMED_PROPS_PREFIX + value;
        }
        if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }
        if (lcName === "attributename" && stringMatch(value, "href")) {
          _removeAttribute(name, currentNode);
          continue;
        }
        if (hookEvent.forceKeepAttr) {
          continue;
        }
        if (!hookEvent.keepAttr) {
          _removeAttribute(name, currentNode);
          continue;
        }
        if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }
        if (SAFE_FOR_TEMPLATES) {
          arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
            value = stringReplace(value, expr, " ");
          });
        }
        const lcTag = transformCaseFunc(currentNode.nodeName);
        if (!_isValidAttribute(lcTag, lcName, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }
        if (trustedTypesPolicy && typeof trustedTypes2 === "object" && typeof trustedTypes2.getAttributeType === "function") {
          if (namespaceURI) ;
          else {
            switch (trustedTypes2.getAttributeType(lcTag, lcName)) {
              case "TrustedHTML": {
                value = trustedTypesPolicy.createHTML(value);
                break;
              }
              case "TrustedScriptURL": {
                value = trustedTypesPolicy.createScriptURL(value);
                break;
              }
            }
          }
        }
        if (value !== initValue) {
          try {
            if (namespaceURI) {
              currentNode.setAttributeNS(namespaceURI, name, value);
            } else {
              currentNode.setAttribute(name, value);
            }
            if (_isClobbered(currentNode)) {
              _forceRemove(currentNode);
            } else {
              arrayPop(DOMPurify.removed);
            }
          } catch (_2) {
            _removeAttribute(name, currentNode);
          }
        }
      }
      _executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
    };
    const _sanitizeShadowDOM = function _sanitizeShadowDOM2(fragment) {
      let shadowNode = null;
      const shadowIterator = _createNodeIterator(fragment);
      _executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
      while (shadowNode = shadowIterator.nextNode()) {
        _executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
        _sanitizeElements(shadowNode);
        _sanitizeAttributes(shadowNode);
        if (shadowNode.content instanceof DocumentFragment2) {
          _sanitizeShadowDOM2(shadowNode.content);
        }
      }
      _executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
    };
    DOMPurify.sanitize = function(dirty) {
      let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      let body = null;
      let importedNode = null;
      let currentNode = null;
      let returnNode = null;
      IS_EMPTY_INPUT = !dirty;
      if (IS_EMPTY_INPUT) {
        dirty = "<!-->";
      }
      if (typeof dirty !== "string" && !_isNode(dirty)) {
        if (typeof dirty.toString === "function") {
          dirty = dirty.toString();
          if (typeof dirty !== "string") {
            throw typeErrorCreate("dirty is not a string, aborting");
          }
        } else {
          throw typeErrorCreate("toString is not a function");
        }
      }
      if (!DOMPurify.isSupported) {
        return dirty;
      }
      if (!SET_CONFIG) {
        _parseConfig(cfg);
      }
      DOMPurify.removed = [];
      if (typeof dirty === "string") {
        IN_PLACE = false;
      }
      if (IN_PLACE) {
        if (dirty.nodeName) {
          const tagName = transformCaseFunc(dirty.nodeName);
          if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
            throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
          }
        }
      } else if (dirty instanceof Node) {
        body = _initDocument("<!---->");
        importedNode = body.ownerDocument.importNode(dirty, true);
        if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") {
          body = importedNode;
        } else if (importedNode.nodeName === "HTML") {
          body = importedNode;
        } else {
          body.appendChild(importedNode);
        }
      } else {
        if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
        dirty.indexOf("<") === -1) {
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }
        body = _initDocument(dirty);
        if (!body) {
          return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
        }
      }
      if (body && FORCE_BODY) {
        _forceRemove(body.firstChild);
      }
      const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
      while (currentNode = nodeIterator.nextNode()) {
        _sanitizeElements(currentNode);
        _sanitizeAttributes(currentNode);
        if (currentNode.content instanceof DocumentFragment2) {
          _sanitizeShadowDOM(currentNode.content);
        }
      }
      if (IN_PLACE) {
        return dirty;
      }
      if (RETURN_DOM) {
        if (RETURN_DOM_FRAGMENT) {
          returnNode = createDocumentFragment.call(body.ownerDocument);
          while (body.firstChild) {
            returnNode.appendChild(body.firstChild);
          }
        } else {
          returnNode = body;
        }
        if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
          returnNode = importNode.call(originalDocument, returnNode, true);
        }
        return returnNode;
      }
      let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
      if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
        serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
      }
      if (SAFE_FOR_TEMPLATES) {
        arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
          serializedHTML = stringReplace(serializedHTML, expr, " ");
        });
      }
      return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };
    DOMPurify.setConfig = function() {
      let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _parseConfig(cfg);
      SET_CONFIG = true;
    };
    DOMPurify.clearConfig = function() {
      CONFIG = null;
      SET_CONFIG = false;
    };
    DOMPurify.isValidAttribute = function(tag, attr, value) {
      if (!CONFIG) {
        _parseConfig({});
      }
      const lcTag = transformCaseFunc(tag);
      const lcName = transformCaseFunc(attr);
      return _isValidAttribute(lcTag, lcName, value);
    };
    DOMPurify.addHook = function(entryPoint, hookFunction) {
      if (typeof hookFunction !== "function") {
        return;
      }
      arrayPush(hooks[entryPoint], hookFunction);
    };
    DOMPurify.removeHook = function(entryPoint, hookFunction) {
      if (hookFunction !== void 0) {
        const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
        return index === -1 ? void 0 : arraySplice(hooks[entryPoint], index, 1)[0];
      }
      return arrayPop(hooks[entryPoint]);
    };
    DOMPurify.removeHooks = function(entryPoint) {
      hooks[entryPoint] = [];
    };
    DOMPurify.removeAllHooks = function() {
      hooks = _createHooksMap();
    };
    return DOMPurify;
  }
  var purify = createDOMPurify();

  // 2a_Interaction/extensionSource.ts
  import_knockout2.default.bindingHandlers["safeMarkdown"] = {
    update(element, valueAccessor) {
      const value = import_knockout2.default.unwrap(valueAccessor());
      if (!value) {
        element.innerHTML = "";
        return;
      }
      const rawHtml = g.parse(value, { async: false });
      element.innerHTML = purify.sanitize(rawHtml, { USE_PROFILES: { html: true } });
    }
  };
  function initialization() {
    import_knockout2.default.bindingProvider.instance = new import_knockout_secure_binding.default({ attribute: "data-bind" });
    import_knockout2.default.applyBindings(new ExtensionModel(
      import_knockout2.default.observable(),
      import_knockout2.default.observable(),
      import_knockout2.default.observable(),
      import_knockout2.default.observable(),
      import_knockout2.default.observable(),
      import_knockout2.default.observable(),
      import_knockout2.default.observable(),
      import_knockout2.default.observable(),
      import_knockout2.default.observable(GeminiModel["Flash 2.0 (free)"])
    ));
  }
  document.addEventListener("DOMContentLoaded", initialization);
})();
/*! Bundled license information:

knockout/build/output/knockout-latest.js:
  (*!
   * Knockout JavaScript library v3.5.3
   * (c) The Knockout.js team - http://knockoutjs.com/
   * License: MIT (http://www.opensource.org/licenses/mit-license.php)
   *)

knockout-secure-binding/dist/knockout-secure-binding.js:
  (*! knockout-secure-binding - v0.5.5 - 2016-04-03
   *  https://github.com/brianmhunt/knockout-secure-binding
   *  Copyright (c) 2013 - 2016 Brian M Hunt; License: MIT *)

dompurify/dist/purify.es.mjs:
  (*! @license DOMPurify 3.3.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.3/LICENSE *)
*/
