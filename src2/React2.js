/**
 * Created by melissa on 16-10-2.
 */
//React State (状态)

var LikeButton = React.createClass({
    getInitialState:function(){
        return{ liked:false};
    },
    handleClick:function (event) {
        this.setState({liked: !this.state.liked});
    },
    render:function(){
        var text = this.state.liked ? '喜欢' : '不喜欢';
        return(
            <p onClick={this.handleClick}>
                你<b>{text}</b>我。点我切换状态。
            </p>
        );
    }
});

ReactDOM.render(
    <LikeButton/>,
    document.getElementById('example1')
);

//React Props

//使用props,通过getDefaultProps()方法为props设置默认值

var HelloMessage = React.createClass({
    render:function () {
        return <h1>Hello {this.props.name}</h1>
    }
});

ReactDOM.render(
    <HelloMessage name="Runoob"/>,
    document.getElementById('example2')
);

//默认Props


var HelloMessage2=React.createClass({
    getDefaultProps: function () {
        return{
            name:'Runoob2'
        };
    },
    render:function () {
        return<h1>Hello {this.props.name}</h1>
    }
});

ReactDOM.render(
    <HelloMessage2/>,
    document.getElementById('example3')
);

//State 和 Props组合使用

var WebSite=React.createClass({
    getInitialState:function () {
        return{
            name:'菜鸟教程',
            site:"http://www.runoob.com"
        };
    },

    render:function () {
        return (
            <div>
                <Name name={this.state.name}/>
                <Link site={this.state.site}/>
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

var Link= React.createClass({
    render:function () {
        return(
          <a href={this.props.site}>
              {this.props.site}
          </a>
        );
    }
});

ReactDOM.render(
    <WebSite/>,
    document.getElementById('example4')
);


//Props验证,使用propTypes

var title='菜鸟教程';
//var title=123;
var MyTitle = React.createClass({
    propTypes:{
        title: React.PropTypes.string.isRequired,
    },
    render:function () {
        return<h1>{this.props.title}</h1>
    }
});

ReactDOM.render(
    <MyTitle title={title}/>,
    document.getElementById('example5')
);

//更多验证器
/*
* React.createClass({
 propTypes: {
 // 可以声明 prop 为指定的 JS 基本数据类型，默认情况，这些数据是可选的
 optionalArray: React.PropTypes.array,
 optionalBool: React.PropTypes.bool,
 optionalFunc: React.PropTypes.func,
 optionalNumber: React.PropTypes.number,
 optionalObject: React.PropTypes.object,
 optionalString: React.PropTypes.string,

 // 可以被渲染的对象 numbers, strings, elements 或 array
 optionalNode: React.PropTypes.node,

 //  React 元素
 optionalElement: React.PropTypes.element,

 // 用 JS 的 instanceof 操作符声明 prop 为类的实例。
 optionalMessage: React.PropTypes.instanceOf(Message),

 // 用 enum 来限制 prop 只接受指定的值。
 optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

 // 可以是多个对象类型中的一个
 optionalUnion: React.PropTypes.oneOfType([
 React.PropTypes.string,
 React.PropTypes.number,
 React.PropTypes.instanceOf(Message)
 ]),

 // 指定类型组成的数组
 optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

 // 指定类型的属性构成的对象
 optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

 // 特定 shape 参数的对象
 optionalObjectWithShape: React.PropTypes.shape({
 color: React.PropTypes.string,
 fontSize: React.PropTypes.number
 }),

 // 任意类型加上 `isRequired` 来使 prop 不可空。
 requiredFunc: React.PropTypes.func.isRequired,

 // 不可空的任意类型
 requiredAny: React.PropTypes.any.isRequired,

 // 自定义验证器。如果验证失败需要返回一个 Error 对象。不要直接使用 `console.warn` 或抛异常，因为这样 `oneOfType` 会失效。
 customProp: function(props, propName, componentName) {
 if (!/matchme/.test(props[propName])) {
 return new Error('Validation failed!');
             }
        }
    },
 });
*/

//React 组件 API
//参考网址http://www.runoob.com/react/react-component-api.html

//设置状态setState

var Counter = React.createClass({
    getInitialState:function () {
        return {clickCount:0};
    },
    handleClick:function () {
        this.setState(function (state) {
            return{clickCount:state.clickCount +1};
        });
    },
    render:function () {
        return (<h2 onClick={this.handleClick}>点我！点击
            次数为：{this.state.clickCount}</h2>);
    }
});

ReactDOM.render(
    <Counter/>,
    document.getElementById('example6')
);


//还有很多API等你发现：http://itbilu.com/


//React组件生命周期

var Hello = React.createClass({
    getInitialState:function () {
        return{
            opacity:1.0
        };
    },
    componentDidMount:function () {
        this.timer = setInterval(function () {
            var opavity = this.state.opacity;
            opavity -= .05;
            if(opavity <0.1){
                opavity=1.0;
            }
            this.setState({
                opacity:opavity
            });
        }.bind(this),100);
    },
    render:function () {
        return(
            <div style={{opacity:this.state.opacity}}>
                Hello{this.props.name}
            </div>
        );
    }
});

ReactDOM.render(
    <Hello name="world"/>,
    document.getElementById('example7')
);


/*
*
 组件的生命周期可分成三个状态：
 Mounting：已插入真实 DOM
 Updating：正在被重新渲染
 Unmounting：已移出真实 DOM
 生命周期的方法有：
 componentWillMount 在渲染前调用,在客户端也在服务端。
 componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。
 componentWillReceiveProps 在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用。
 shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
 可以在你确认不需要更新组件时使用。
 componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
 componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。
 componentWillUnmount在组件从 DOM 中移除的时候立刻被调用。
 */


//React AJAX
var Button = React.createClass({
    getInitialState:function () {
        return{
            data:0
        };
    },
    setNewNumber:function () {
        this.setState({data:this.state.data+1})
    },
   render:function () {
       return (
           <div>
               <button onClick={this.setNewNumber}>INCREMENT</button>
               <Content myNumber={this.state.data}></Content>
           </div>
       );
   }
})

var Content = React.createClass({
    componentWillMount:function () {
        console.log('Component WILL MOUNT!')
    },
    componentDidMount:function () {
        console.log('Component DID MOUNT!')
    },
    componentWillReceiveProps:function (newProps) {
        console.log('Component WILL RECIEVE PROPS!')
    },
    shouldComponentUpdate:function (newProps,nextState) {
        return true;
    },
    componentWillUpdate:function (nextProps,nextState) {
        console.log('Component WILL UPDATE!')
    },
    componentDidUpdate:function (prevProps,prevState) {
        console.log('Component DID UPDATE!')
    },
    componentWillMount:function () {
        console.log('Component WILL UNMOUNT!')
    },

    render :function () {
        return(
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <Button/>
    </div>,
    document.getElementById('example8')
)

var UserGist=React.createClass({
    getInitialState:function () {
      return{
        username:'',
          lastGistUrl:''
      };
    },
    componentDidMount:function () {
        this.serverRequest = $.get(this.props.source,function (result) {
            var lastGist = result[0];
            this.setState({
                username:lastGist.owner.login,
                lastGistUrl:lastGist.html_url
            });
        }.bind(this));
    },
    componentWillUnmount:function () {
        this.serverRequest.about();
    },
    render:function () {
        return(
            <div>
                {this.state.username}用户最新的Gist共享地址：
                <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
            </div>
        );
    }
});

ReactDOM.render(
    <UserGist source="https://api.github.com/users/octocat/gists"/>,
    document.getElementById('example8')
);



//React 表单与事件 同步实现！！
//下面的代码将渲染出一个值为 Hello Runoob!
// 的 input 元素，并通过 onChange
// 事件响应更新用户输入的值。

var HelloMessage3=React.createClass({
    getInitialState:function () {
        return{value:'Hello Runoob！'};
    },
    handleChange:function (event) {
        this.setState({value: event.target.value});
    },
    render:function () {
        var value = this.state.value;
        return <div>
            <input type="text" value={value} onChange={this.handleChange}/>
            <h4>{value}</h4>
        </div>;
    }
});

ReactDOM.render(
    <HelloMessage3/>,
    document.getElementById('example9')
);


//实例２
var Content2 = React.createClass({
    render:function () {
        return <div>
            <input type="text" value={this.props.myDataProp}
                   onChange={this.props.updateStateProp}/>
            <h4>{this.props.myDateProp}</h4>
        </div>;
    }
});

var HelloMessage4 = React.createClass({
    getInitialState:function () {
        return {value: 'Hello Runoooob!'};
    },
    handleChange:function (event) {
        this.setState({value:event.target.value});
    },
    render:function () {
        var value = this.state.value;
        return<div>
            <Content2 myDataProp = {value}
            updateStateProp = {this.handleChange}></Content2>
        </div>;
    }
});

ReactDOM.render(
    <HelloMessage4/>,
    document.getElementById('example10')
);


//React事件
// 以下实例演示通过 onClick 事件来修改数据：

var HelloMessage5 = React.createClass({
    getInitialState:function () {
        return{value:'Hello Runoob!'};
    },
    handleChange:function (event) {
        this.setState({value:'菜鸟教程'})
    },
    render:function () {
        var value = this.state.value;
        return <div>
            <button onClick={this.handleChange}>点我</button>
            <h4>{value}</h4>
        </div>;
    }
});

ReactDOM.render(
    <HelloMessage5/>,
    document.getElementById('example11')
);

//当你需要从子组件中更新父组件的 state 时，
// 你需要在父组件通过创建事件句柄 (handleChange) ，
// 并作为 prop (updateStateProp)
// 传递到你的子组件上。实例如下：


var Content3 = React.createClass({
    render:function () {
        return <div>
            <button onClick={this.props.updateStateProp}>点我</button>
            <h4>{this.props.myDateProp}</h4>
        </div>
    }
});

var HelloMessage6 = React.createClass({
    getInitialState:function () {
        return {value:'Hello Runoob!'};
    },
    handleChange:function (event) {
        this.setState({value:'菜鸟教程'})
    },
    render:function () {
        var value = this.state.value;
        return <div>
            <Content3 myDateProp = {value}
            updateStateProp = {this.handleChange}></Content3>
        </div>;
    }
});

ReactDOM.render(
    <HelloMessage6/>,
    document.getElementById('example12')
)

var MyComponent = React.createClass({
    handleClick:function () {
        //使用原生的　DOM API获取焦点
        this.refs.myInput.focus();
    },
    render:function () {
        //当组件插入到DOM后，ref属性添加一个组件的引用于到this.refs
        return(
            <div>
                <input type="text" ref="myInput" />
                <input
                    type="button"
                    value="点我输入框获取焦点"
                    onClick={this.handleClick}/>
            </div>
        );
    }
});

ReactDOM.render(
    <MyComponent/>,
    document.getElementById('example13')
);














