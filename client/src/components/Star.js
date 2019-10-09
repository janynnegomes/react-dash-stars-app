import React, {Component} from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Star extends Component {

    state = {
        list: null
    }

    componentDidMount(){
       
    }
    
    render(){

        return (
        <>                            
                        
            <Button variant="default" style={{color:this.props.color}}><FontAwesomeIcon icon="star"/></Button>               
        </>
        );
    }
    
}

export default Star;