import React, {Component} from 'react';
import { Image, Card , Row, Col} from 'react-bootstrap';
import Star from './Star';
import axios from 'axios';

class Users extends Component {

    state = {
        list: null
    }

    componentDidMount(){
        axios.get('https://reqres.in/api/users?page=2')
        .then( (res)=> {
            this.setState({list: res.data.data}); console.log(res.data.data)})
        .catch(err => console.log(err));
    }
    
    render(){

        return (
        <>
            <Card >
                <Card.Body>   
                { this.state.list 
                    ? this.state.list.map( user =>
                        <Card className="b-0" key={user.id}>
                            <Card.Body> 
                            <Row >
                                <Col sm={1}>
                                    <Image src={user.avatar} style={{height:50}} roundedCircle />                    
                                </Col>
                                <Col sm={10}>
                                    <h4>{user.first_name} {user.last_name}</h4>
                                    <h6>{user.email}</h6>
                                </Col>
                                <Col sm={1}>
                                    <Star color="red"/>
                                </Col>
                            </Row>
                            </Card.Body>
                            </Card>
                            )
                            : <h6>Nothing here yet...</h6>
                          
                        }
                </Card.Body>
            </Card>        
        </>
        );
    }
    
}

export default Users;