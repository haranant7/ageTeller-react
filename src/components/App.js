import React , { Component } from 'react';
import { Form, FormControl, Button} from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats';

class App extends Component {
    constructor() {
        super();

        this.state = {
            newDate: '',
            birthday : '2019-01-29',
            showStats: false
        }
    }

    changeBirthday(){
        this.setState({birthday: this.state.newDate,showStats: true});
        console.log(this.state);
    }
    render() {
        return (
            <div className= 'App'>
                <Form inline>
                    <h2>Input your birthday!</h2>
                    <FormControl type="date" onChange={event => this.setState({newDate:event.target.value})}>
                    </FormControl>
                    <Button onClick={()=>this.changeBirthday()}>
                        Submit
                    </Button>
                    {
                        this.state.showStats ? 
                        <div className="fade age-stats">
                            <AgeStats date={this.state.birthday} /> 
                        </div>
                        : 
                        <div></div>
                    }                    
                </Form>
            </div>
        )
    }
}

export default App;