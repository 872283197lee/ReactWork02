ReactDOM.render(
    <h1>Hello,world!</h1>,
    document.getElementById('example1')
);


ReactDOM.render(
    <div>
        <h1>{1+1}</h1>
    </div>
    ,
    document.getElementById('example2')
);

//在 JSX 中不能使用 if else 语句，
// 单可以使用 conditional (三元运算) 表达式来替代。
// 以下实例中如果变量 i 等于 1 浏览器将输出 true,
// 如果修改 i 的值，则会输出 false.
var i=1;
ReactDOM.render(
    <div>
        <h1>{i ==1 ? 'True' : 'False'}</h1>
    </div>
    ,
    document.getElementById('example3')
);

//定义样式
var myStyle = {
    fontSize:100,
    color:'#FF0000'
};
ReactDOM.render(
    <h1 style = {myStyle}>菜鸟教程</h1>,
    document.getElementById('example4')
);

//注释
ReactDOM.render(
    <div>
        <h1>菜鸟教程</h1>
        {/*注释...*/}
    </div>,
    document.getElementById('example5')
);

//在模板中插入数组
var arr=[
    <h1>菜鸟教程</h1>,
    <h2>学的不仅是技术，更是梦想！</h2>,
];
ReactDOM.render(
    <div>{arr}</div>,
    document.getElementById('example6')
);

//React可以渲染HTML标签（strings）!!!!或 React组件（classes）
var myDivElement = <div className="foo"/>
ReactDOM.render(
    myDivElement,
    document.getElementById('example7')
);

//React可以渲染HTML标签（strings）或 React组件（classes）!!!!
// var MyComponent = React.createClass({/*...*/});
// var myElement = <MyComponent someProperty = {true}/>;
// ReactDOM.render(
//     myElement,
//     document.getElementById('example8')
// );

//注意，原生 HTML 元素名以小写字母开头，
// 而自定义的 React 类名以大写字母开头，
// 比如 HelloMessage 不能写成 helloMessage。
// 除此之外还需要注意组件类只能包含一个顶层标签，
// 否则也会报错。注意，原生 HTML 元素名以小写字母开头，
// 而自定义的 React 类名以大写字母开头，
// 比如 HelloMessage 不能写成 helloMessage。
// 除此之外还需要注意组件类只能包含一个顶层标签，否则也会报错。
var HelloMessage=React.createClass({
    render:function () {
        return <h1>用React封装一个组建！</h1>;
    }
});
ReactDOM.render(
    <HelloMessage/>,
    document.getElementById('example8')
);


//如果我们需要向组件传递参数，可以使用 this.props 对象,实例如下
var HelloMMessage2 = React.createClass({
    render:function () {
        return <h1>Hello {this.props.name}</h1>;
    }
});

ReactDOM.render(
    <HelloMMessage2 name="Runoob"/>,
    document.getElementById('example9')
);




//复合组件
//我们可以通过创建多个组件来合成一个组件，
// 即把组件的不同功能点进行分离。
//以下实例我们实现了输出网站名字和网址的组件：
var WebSite = React.createClass({
    render : function () {
        return(
            <div>
                <Name name={this.props.name}/>
                <Link site={this.props.site}/>
            </div>
        );
    }
});

var Name = React.createClass({
    render:function () {
        return(
          <h1>{this.props.name}</h1>
        );
    }
});

var Link = React.createClass({
    render:function () {
        return(
            <a href={this.props.site}>
                {this.props.site}
            </a>
        );
    }
});

ReactDOM.render(
    <WebSite name="菜鸟教程" site="http://www.runoob.com"/>,
    document.getElementById('example10')
);















































