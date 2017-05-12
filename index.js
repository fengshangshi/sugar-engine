/**
 * sugar2.0框架的模板渲染引擎类
 * ss.feng
 */
'use strict'

const Engine = require('./libs/Engine');
const e = new Engine;

module.exports = function(engine) {
	return e.engine2render(engine);
};
