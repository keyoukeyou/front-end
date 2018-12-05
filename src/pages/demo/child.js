import React,{Component} from 'react';

export default  class Child extends Component {



    componentWillMount(){
        console.log("will mount")
    }
    componentDidMount(){
        console.log("did mount")
    }
    componentWillReceiveProps(newProps){//接收父组件传过来的属性
        console.log("will receive props"+"  接收的属性:"+newProps.name)
    }
    shouldComponentUpdate(){//组件更新之前被执行（即对父组件使用了setState()方法）
        console.log("should update")
        return true;//返回true后面会被执行，返回false后面就不执行
    }
    componentWillUpdate(){
        console.log("will update")
    }
    componentDidUpdate(){
        console.log("did update")
    }
    componentWillUnmount(){
        console.log("will unmount")
    }

    render(){
        return (
            <div>
                <p>这里是子组件</p>
                <p>{this.props.name}</p>
            </div>
        )
    }

}