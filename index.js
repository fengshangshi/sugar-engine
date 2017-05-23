/**
 * sugar2.0框架的模板渲染引擎类
 * ss.feng
 */
'use strict'

const fs = require('fs');

// 模板引擎
const ejs = require('ejs');
const hbs = require('handlebars');

// sha1编码
const sha1 = require('sha1');

// 缓存
const cache = require('sugar-utils').cache;

exports.ejs = function(source, data) {
	let template = ejs.compile(source);
	return template(data);
};

exports.hbs = function(source, data) {
	let template = hbs.compile(source);
	return template(data);
};

exports.render = function(engine) {
	return exports[engine];
};

exports.template = function(file, isCache) {
	if (fs.existsSync(file) === false) {
		return false;
	}

	let sign = sha1(file);

	if (cache.has(sign)) {
		return cache.get(sign);
	}

	let template = fs.readFileSync(file, {
		encoding: 'utf8',
	});

	return isCache ? cache.set(sign, template).get(sign) : template;
};

exports.html = function(file, data, opts) {
	let template = exports.template(file, opts.isCache);
	let render = exports.render(opts.engine);

	return render(template, data);
};
