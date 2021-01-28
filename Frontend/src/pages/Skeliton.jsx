import React, { Component } from "react";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import About from '../components/About'
import './sk.css'
import avatar from './images/avatar.png';

class Skeliton extends Component {

    render() { 
        return ( 
            <>

                <Container fluid className="Cono">
                        <Row className="Rowo">
                            <Col sm={4} className="Colo">
                                <div className="profile_icon">
                                    <img src={avatar} alt="" />
                                </div> 
                                <div className=""> 
                                    <h3>Simo Edwin</h3>
                                </div> 
                                <div className="">
                                    <p>Pro Member</p>
                                </div>
                        {/* Lists */}
                                {/* <div class="link">
                                <img src={streams} alt="" />
                                <h2>Streams</h2>
                                </div>
                                <div class="link">
                                <img src={games} alt="" />
                                <h2>Games</h2>
                                </div>
                                <div class="link">
                                <img src={upcoming} alt="" />
                                <h2>New</h2>
                                </div>
                                <div class="link">
                                <img src={library} alt="" />
                                <h2>Library</h2>
                                </div> */}
                                <div >
                                 <ListGroup defaultActiveKey="#link1" className="links">
                                    <ListGroup.Item action href="/about">
                                        <Link to="/about" />
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link2">
                                        Link 2
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link3">
                                        Link 3
                                    </ListGroup.Item>
                            </ListGroup>
                            </div>
                            </Col>
                            <Col sm={8} className="Colo">
                                {About}
                            </Col>
                        </Row>
                </Container>
            </>
         );
    }
}
 
export default Skeliton;