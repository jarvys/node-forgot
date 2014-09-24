function isFunction(obj) {
	return toString.call(obj) === '[object Function]';
}

module.exports = function(fn) {
	if(!isFunction(fn)) return;
	try {return fn();} catch(e) {console.error(e);}
}
