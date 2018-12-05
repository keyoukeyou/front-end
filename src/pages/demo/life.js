import React,{Component} from 'react';
import Child from './child';//引用子组件

class Life extends Component{

    // constructor(props){
    //     super(props);
    //     this.state={
    //         count:0
    //     }
    // }

    state={
        count:0
    }


    render(){
        return (
            <div style={{padding:50}}>
                <p>React的生命周期</p>
                <button onClick={this.handleUpdateCount.bind(this)}>点击一下</button>
                <button onClick={this.handleAdd}>点击一下（no bind）</button>
                <p>{this.state.count}</p>
                <Child name='keyou' name={this.state.count}/>  {/*传一个属性值给子组件*/}
            </div>
        )
    }

    handleUpdateCount(){
        this.setState({//调用此方法修改state中的属性
            count:this.state.count+1
        })

    }
    handleAdd=()=>{
        this.setState({
            count:this.state.count+2
        })
    }
}

export  default Life;