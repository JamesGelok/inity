"use strict";
function InitFuncOrClass(FuncOrClass, DefaultObj = {}) {
  return (...args) =>
    new Proxy(DefaultObj, {
      get: (target, name) => {
        if (target.hasOwnProperty(name)) return target[name];
        try {
          return FuncOrClass(...args);
        } catch (e) {
          return new FuncOrClass(...args);
        }
      }
    });
}
function InitPrim(Prim, DefaultObj = {}) {
  console.log("InitPrim");
  return new Proxy(DefaultObj, {
    get: (target, name) => (target.hasOwnProperty(name) ? target[name] : Prim)
  });
}
function Init(Thing, DefaultObj = {}) {
  return typeof Thing === "function"
    ? InitFuncOrClass(Thing)
    : InitPrim(Thing, DefaultObj);
}
function InitClass(Class, DefaultObj = {}) {
  return (...args) =>
    new Proxy(DefaultObj, {
      get: (target, name) =>
        target.hasOwnProperty(name) ? target[name] : new Class(...args)
    });
}
function InitFunc(Func, DefaultObj = {}) {
  return (...args) =>
    new Proxy(DefaultObj, {
      get: (target, name) =>
        target.hasOwnProperty(name) ? target[name] : Func(...args)
    });
}
export default Init;
export { InitClass, InitFunc, InitPrim };
