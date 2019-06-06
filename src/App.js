import React from 'react';
import './App.css';
import scenario from './scenario.json';
import Chance from 'chance';

class App extends React.Component{

    constructor(props){
        super(props);
        this.state={
            current: "q1"
        }
    }

    loadNext(next){
        let chance = new Chance();
        let nextQuestion =  chance.weighted(next.questions, next.probabilities);
        this.setState({
            current: nextQuestion //next.questions[0]
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
