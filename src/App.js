import React from 'react';
import './App.css';
import scenario from './scenario.json';

class App extends React.Component{

    constructor(props){
        super(props);
        this.state={
            current: "q1"
        }
    }

    loadNext(q){
        this.setState({
            current: q
        })
    }

    render(){
        return (
            <div className="App">
                <div className="page-content">
                    <div className="question">{scenario[this.state.current].question}</div>
                    {scenario[this.state.current].answers.map((a,k) => <div key={k} onClick={() => this.loadNext(a.next)} className="answer">{a.text}</div>)}
                </div>
            </div>
        );
    }
}

export default App;
