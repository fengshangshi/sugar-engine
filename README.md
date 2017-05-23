# sugar-engine

渲染模板使用。当前提供两种模板引擎：ejs和handlebars。


## API
### 引入

```
const engine = require('sugar-engine');

```
### engine.html(file, data, options)
输入：模板文件、希望渲染的数据

返回：编译后的html字符串

* options.engine - 默认：ejs，指定模板渲染引擎
* options.isCache - 默认：ture，模板文件是否被缓存

```
let data = {
	username: 'sugar',
	password: '123456',
};

let html = engine.html('/path/to', data, {
	isCache: false,
	engine: 'ejs', // or 'hbs'
});
```

### engine.template(file, isCache)
输入：模板文件，是否被缓存开关

返回：模板字符串

```
let template = engine.template('/path/to', true);
```

### engine.render(engine)
输入：模板引擎

返回：模板渲染器
```
let render = engine.render('hbs');
```

### engine.ejs(source, data)
输入：模板字符串，希望渲染的数据

返回：按照ejs的规范编译后的字符串
```
let ejsHtml = engine.ejs('<h1><%=title%></h1>', {
	title: 'sugar'
});
```


### engine.hbs(source, data)
输入：模板字符串，希望渲染的数据

返回：按照handlebars的规范编译后的字符串
```
let hbsHtml = engine.ejs('<h1>{{title}}</h1>', {
	title: 'sugar'
});
```
