// 1.引入express
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    response.send('HELLO Ajax');
});
// 可以接收任意类型的请求
app.all('/server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 响应头可以自定义请求头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    response.send('HELLO Ajax POST');
});

app.all('/json-server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 响应头可以自定义请求头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 响应一个数据
    const data = {
        name: 'abc'
    };
    // 对对象进行字符串转换
    let str = JSON.stringify(data);
    // 设置响应体
    response.send(str);
});

app.get('/ie', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    response.send('HELLO IE');
});
// 延时响应
app.get('/delay', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    setTimeout(() => {
        response.send('延时响应');
    }, 3000)

});
// jQuery服务
app.all('/jquery-server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    const data = { name: '尚硅谷' };
    response.send(JSON.stringify(data));

});
// axios服务
app.all('/axios-server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 响应头可以自定义请求头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    const data = { name: '尚硅谷' };
    response.send(JSON.stringify(data));

});

// fetch服务
app.all('/fetch-server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 响应头可以自定义请求头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    const data = { name: '尚硅谷' };
    response.send(JSON.stringify(data));

});

// jsonp服务
app.all('/jsonp-server', (request, response) => {
    // 设置响应体
    const data = { name: '尚硅谷' };
    // 将数据转换为字符串
    let str = JSON.stringify(data);
    // 返回结果
    response.end(`handle(${str})`);
});
// 用户名检测是否存在
app.all('/check-username', (request, response) => {
    // 设置响应体
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    };
    // 将数据转换为字符串
    let str = JSON.stringify(data);
    // 返回结果
    response.end(`handle(${str})`);
});
// jQuery-jsonp服务
app.all('/jquery-jsonp-server', (request, response) => {
    // 设置响应体
    const data = {
        name: '尚硅谷',
        city: ['北京', '上海', '深圳']
    };
    // 将数据转换为字符串
    let str = JSON.stringify(data);
    // 接受callback参数
    let cb = request.query.callback;
    // 返回结果
    response.end(`${cb}(${str})`);
});

// CORS服务
app.all('/cors-server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('Hello CORS')
})
// 4.监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中...');
})