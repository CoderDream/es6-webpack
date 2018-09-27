## es6-webpack

### 安装

首先下载源码

```shell
git clone https://github.com/CoderDream/es6-webpack.git
```

然后安装

```shell
npm i
npm i webpack -g
npm i webpack-dev-server -g
```

如果出现问题：
[npm install "Unexpected end of JSON input while parsing near"问题](https://www.cnblogs.com/jianxuanbing/p/9158830.html)

### 运行

```shell
npm start
```

----------

## ES6快速入门 ##
 
快乐动起来呀

Web前端工程师 难度初级 时长 1小时25分 学习人数38905 综合评分9.4 收藏   

[课程地址](https://www.imooc.com/learn/955)

###  简介： ###

ES6增加了很多新的语法，很多同学学习起来感觉很别扭，有时候也不理解新增加的语法有什么用，对ES6的学习也没有兴趣进而动力不足、学习效率不高。本课程通过ES3、ES5、ES6的对比去实现同一个问题，学员可以非常容易的理解和掌握ES6的强大并产生学习的兴趣。

### 课程须知 ###
了解JS基础知识

## 第1章 课程介绍 ##
对课程整体进行介绍
### 1-1 课程介绍 (06:13) ###

1、通过对比知道为什么要学习ES6
2、快速入门ES6的学习
3、掌握ES3、ES5、ES6的联系和区别
4、学会快速构建ES6的编译环境

### 1-2 环境搭建 (10:16) ###

入口文件 index.js
```javascript
// demo 01
import test from "./src/test"
test();

// demo0201 const
// import "./src/const"

// demo0202 作用域
// import "./src/scope";

// demo0203 箭头函数
// import "./src/arrow-function";

// demo0204 默认参数
// import "./src/parameter";

// demo0205 对象代理
//import "./src/proxy";
```

test.js
```javascript
/**
 * [description]
 * @returns {[type]} [description]
 */
export default function() {
    window.console.log("b")
}
```
在浏览器中打开


![](https://github.com/CoderDream/es6-webpack/blob/master/snapshot/ES6_0101.png)

## 第2章 ES6基础 ###

通过对比的方式讲解常量、作用域、箭头函数、默认参数、对象代理等知识点

### 2-1 常量 (06:29) ### 


```javascript
// ES5 中常量的写法
Object.defineProperty(window, "PI2", {
    value: 3.1415926,
    writable: false,
});

console.log(window.PI2);

// ES6 的常量写法
const PI = 3.1415926;
console.log(PI);

// PI = 4; // 编译出错
```
运行结果：


![](https://github.com/CoderDream/es6-webpack/blob/master/snapshot/ES6_0201.png)

### 2-2 作用域 (14:27) ### 


```javascript
// ES5 中作用域
const callbacks = [];
for (var i = 0; i <= 2; i++) {
    callbacks[i] = function () {
        return i * 2;
    }
}

// 6,6,6
console.table([
    callbacks[0](),
    callbacks[1](),
    callbacks[2](),
]);

// ES6 中作用域
const callbacks2 = [];
for (let j = 0; j <= 2; j++) {
    callbacks2[j] = function () {
        return j * 2
    }
}

// 0,2,4
console.table([
    callbacks2[0](),
    callbacks2[1](),
    callbacks2[2](),
]);

// ES5 块作用域
((function () {
    const foo = function () {
        return 1;
    };
    console.log("foo()===1", foo() === 1);
    ((function () {
        const foo = function () {
            return 2;
        };
        console.log("foo()===2", foo() === 2);
    })());
})());

// ES6
// 花括号指定块作用域
{
    function foo() {
        return 1;
    }

    console.log("foo()===1", foo() === 1);
    // 新作用域
    {
        function foo() {
            return 2;
        }

        console.log("foo()===2", foo() === 2);
    }
    // 原作用域
    console.log("foo()===1", foo() === 1);
}
```

运行结果：

![](https://github.com/CoderDream/es6-webpack/blob/master/snapshot/ES6_0202.png)

### 2-3 箭头函数 (11:19) ### 


```javascript
/* eslint-disable */

console.log('ES3,ES5');
{
    // ES3,ES5
    var evens = [1, 2, 3, 4, 5];
    var odds = evens.map(function (v) {
        return v + 1;
    });
    console.log(evens, odds);
}
console.log('ES6');
{
    // ES6
    let evens = [1, 2, 3, 4, 5];
    // () => { }
    // 括号用于传递参数，如果只有一个参数，括号可以省略；
    // 如果花括号中只是返回某个表达式，则花括号可以省略
    // 不省略的表达式为 events.map((v) => { return v + 1; }

    // 方式1：省略方式
    //let odds = evens.map(v => v + 1);
    // 方式2：完整方式
    let odds = evens.map((v) => { return v + 2; });
    console.log(evens, odds);
}

console.log('ES3,ES5');
{
    // this的指向是该函数被调用的指向
    // ES3,ES5
    var factory = function () {
        this.a = 'a';
        this.b = 'b';
        this.c = {
            a: 'a+',
            b: function () {
                return this.a;
            }
        }
    };

    console.log(new factory().c.b());
}

console.log('ES6');
{
    var factory = function () {
        this.a = 'a';
        this.b = 'b';
        this.c = {
            a: 'a+',
            b: () => {
                // 箭头函数中this的指向是定义时this的指向
                return this.a;
            }
        }
    };
    console.log(new factory().c.b());
}
```

运行结果：

![](https://github.com/CoderDream/es6-webpack/blob/master/snapshot/ES6_0203.png)

### 2-4 默认参数 (17:00) ### 


```javascript
/* eslint-disable */
console.log('ES3、ES5');
{
    // ES5\ES3 默认参数的写法
    function f(x, y, z) {
        if (y === undefined) {
            y = 7;
        }
        if (z === undefined) {
            z = 42
        }
        return x + y + z
    }

    console.log(f(1, 3));
}
console.log('ES6');
{
    // ES6 默认参数
    function f(x, y = 7, z = 42) {
        return x + y + z
    }

    console.log(f(1, 3));
}

{
    function checkParameter() {
        throw new Error('can\'t be empty');
    }

    function f(x = checkParameter(), y = 7, z = 42) {
        return x + y + z;
    }

    console.log(f(1));
    try {
        f();
    } catch (e) {
        console.log(e);
    } finally {
    }
}
{
    // ES3,ES5 可变参数
    function f() {
        var a = Array.prototype.slice.call(arguments);
        var sum = 0;
        a.forEach(function (item) {
            sum += item * 1;
        });
        return sum;
    }

    console.log(f(1, 2, 3, 6));
}
{
    // ES6 可变参数
    function f(...a) {
        var sum = 0;
        a.forEach(item => {
            sum += item * 1
        });
        return sum;
    }

    console.log(f(1, 2, 3, 6));
}

console.log('ES5 合并数组');
{
    // ES5 合并数组
    var params = ['hello', true, 7];
    var other = [1, 2].concat(params);
    console.log(other);
}
console.log('ES6 利用扩展运算符合并数组');
{
    // ES6 利用扩展运算符合并数组
    var params = ['hello', true, 7];
    var other = [
        1, 2, ...params
    ];
    console.log(other);
}

```
运行结果：

![](https://github.com/CoderDream/es6-webpack/blob/master/snapshot/ES6_0204.png)

### 2-5 对象代理 (18:52) ### 


```javascript
/* eslint-disable */
{
    // ES3,ES5 数据保护
    var Person = function () {
        var data = {
            name: 'es3',
            sex: 'male',
            age: 15
        };
        this.get = function (key) {
            return data[key];
        };
        this.set = function (key, value) {
            if (key !== 'sex') {
                data[key] = value;
            }
        };
    };

    // 声明一个实例
    var person = new Person();
    console.log('读取name');
    // 读取
    console.table({name: person.get('name'), sex: person.get('sex'), age: person.get('age')});
    console.log('修改name');
    // 修改
    person.set('name', 'es3-cname');
    console.table({name: person.get('name'), sex: person.get('sex'), age: person.get('age')});
    console.log('修改sex(修改失败)');
    person.set('sex', 'female');
    console.table({name: person.get('name'), sex: person.get('sex'), age: person.get('age')});
}
{
    // ES5
    var Person = {
        name: 'es5',
        age: 15
    };

    Object.defineProperty(Person, 'sex', {
        writable: false,
        value: 'male'
    });

    console.table({name: Person.name, age: Person.age, sex: Person.sex});
    Person.name = 'es5-cname';
    console.table({name: Person.name, age: Person.age, sex: Person.sex});
    try {
        Person.sex = 'female'; // 报错
        console.table({name: Person.name, age: Person.age, sex: Person.sex});
    } catch (e) {
        console.log(e);
    }
}
{
    // ES6
    let Person = {
        name: 'es6',
        sex: 'male',
        age: 15
    };

    let person = new Proxy(Person, {
        get(target, key) {
            return target[key]
        },
        set(target, key, value) {
            // sex不能修改
            if (key !== 'sex') {
                target[key] = value;
            }
        }
    });

    console.table({
        name: person.name,
        sex: person.sex,
        age: person.age
    });

    try {
        person.sex = 'female';
    } catch (e) {
        console.log(e);
    } finally {

    }

}

```


运行结果：

![](https://github.com/CoderDream/es6-webpack/blob/master/snapshot/ES6_0205.png)

![](https://github.com/CoderDream/es6-webpack/blob/master/snapshot/ES6_0205.png)


