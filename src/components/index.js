import XButton from './button/button';

var comps = {
	XButton
};

const install = function(Vue, opts = {}) {
	if (install.installed) return;

	Object.keys(comps).forEach(key => {
		Vue.component(key, comps[key]);
	});
}

const API = {
	install
};

export default API;
