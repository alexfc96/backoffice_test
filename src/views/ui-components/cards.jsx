import React, { Component } from 'react';
import axios from 'axios';
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardColumns,
    CardGroup,
    CardDeck,
    CardLink,
    CardHeader,
    CardFooter,
    Button,
    Row,
    Col
} from 'reactstrap';


import img3 from '../../assets/images/big/img3.jpg';
import img4 from '../../assets/images/big/img4.jpg';
import img5 from '../../assets/images/big/img5.jpg';
import img6 from '../../assets/images/big/img6.jpg';

class Cards extends Component {

    state={
      pendingUsers: undefined
    }

    organiseUsers(){
      const {pendingUsers} = this.state;
      console.log("LOS CREATED:",pendingUsers.created)
      return (
            <div>
                {pendingUsers.created && 
                    <div>
                        <h5 className="mb-3">Users created</h5>
                        <Row>
                            {/* {pendingUsers.created.map((user)=>{ */}
                                {/* return ( */}
                                    <Col xs="12" md="4">
                                        {/* --------------------------------------------------------------------------------*/}
                                        {/* Card-1*/}
                                        {/* --------------------------------------------------------------------------------*/}
                                        <Card>
                                            <CardBody>
                                                {/* <CardTitle>{user.firstname}</CardTitle> */}
                                                <CardTitle>{pendingUsers.created.firstname}</CardTitle>
                                                <CardSubtitle>{pendingUsers.created.lastname}</CardSubtitle>
                                                <CardSubtitle style={{color: "blue"}}>{pendingUsers.created.email}</CardSubtitle>
                                            </CardBody>
                                            <img width="100%" src={img4} alt="" />
                                            <CardBody>
                                                <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                                                <CardLink href="#">Card Link</CardLink>
                                                <CardLink href="#">Another Link</CardLink>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                {/* ) */}
                            {/* })} */}
                        
                        </Row>
                    </div>
                    
                }
                <h5 className="mb-3">Cards Content Types</h5>
                <Row>
                    <Col xs="12" md="4">
                        {/* --------------------------------------------------------------------------------*/}
                        {/* Card-1*/}
                        {/* --------------------------------------------------------------------------------*/}
                        <Card>
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                            </CardBody>
                            <img width="100%" src={img4} alt="" />
                            <CardBody>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                                <CardLink href="#">Card Link</CardLink>
                                <CardLink href="#">Another Link</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" md="4">
                        <Card>
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                            </CardBody>
                            <img width="100%" src={img5} alt="" />
                            <CardBody>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                                <CardLink href="#">Card Link</CardLink>
                                <CardLink href="#">Another Link</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" md="4">
                        <Card>
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                            </CardBody>
                            <img width="100%" src={img6} alt="" />
                            <CardBody>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                                <CardLink href="#">Card Link</CardLink>
                                <CardLink href="#">Another Link</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
      )
    }

    componentDidMount(){
      axios
      .get('https://mguusers.duckdns.org/v1/user/pending')
      .then(({data:users})=>{
        console.log("Pending users:",users)
        this.setState({
          pendingUsers: users
        })
      })
    }

    render(){
      const {pendingUsers} = this.state;
      if(pendingUsers){
      }
        return (
            <div>
                {!pendingUsers && 
                    <h5 className="mb-3">No users for control</h5>
                }
                {pendingUsers && this.organiseUsers()}
            </div>
        );
    }
}

export default Cards;