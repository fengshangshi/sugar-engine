/**
 * sugar2.0框架的模板渲染引擎类
 * ss.feng
 */
'use strict'

const ejs = require('ejs');
const hbs = require('handlebars');

class Engine {
    constructor() {
        this.engines = {
            'ejs': this.ejsRender,
            'hbs': this.hbsRender,
        }
    }

    ejsRender(source, data) {
        let template = ejs.compile(source);
        return template(data);
    }

    hbsRender(source, data) {
        let template = hbs.compile(source);
        return template(data);
    }

    engine2render(engine) {
        return this.engines[engine] || this.engines['ejs'];
    }
}

module.exports = Engine;
