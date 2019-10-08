import React, {Component} from 'react';
import { Button, Card } from 'react-bootstrap';

class Star extends Component {
    
        render(){

            return (
            <>

                <Card >
                   <Card.Body>
                        <Card.Title>{this.props.color} Star</Card.Title>
                        <Card.Text>
                        <h1 style={{color:this.props.color}}>Star</h1>
                        </Card.Text>
                        <Button variant="primary">+1</Button>
                    </Card.Body>
                </Card>
           
            </>
            );
        }
    
}

export default Star;