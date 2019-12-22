"use strict";
const is_constructor = f => {
	try {
		Reflect.construct(String, [], f);
	} catch (e) {
		return false;
	}
	return true;
};

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
function InitPrim(Prim, DefaultObj = {}) {
	return new Proxy(DefaultObj, {
		get: (target, name) => (target.hasOwnProperty(name) ? target[name] : Prim)
	});
}

function Init(Thing, DefaultObj = {}) {
	return typeof Thing === "function"
		? is_constructor(Thing)
			? InitClass(Thing, DefaultObj)
			: InitFunc(Thing, DefaultObj)
		: InitPrim(Thing, DefaultObj);
}
export default Init;
export { InitClass, InitFunc, InitPrim };
