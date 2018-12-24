import React,{Component} from 'react'
import ApiComponent from './ApiComponent';

class App extends Component{

    constructor(){
        super();

    }
    HomeWorldCheck(HWName,id){
        // console.log(HomeWorld1,HomeWorld2)
        console.log(HWName,id)
    }
    
    render(){
        return(
            <div>
                <ApiComponent 
                id = "1" 
                HWCheck = {this.HomeWorldCheck}
                />
                <ApiComponent 
                id = "2"
                HWCheck = {this.HomeWorldCheck}
                />
            </div>
        )
    }

}
export default App