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
