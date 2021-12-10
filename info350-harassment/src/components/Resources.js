import {Link, NavLink} from 'react-router-dom';
import {Container, Row, Col, Image} from 'react-bootstrap';
import hatecrimes from '../imgs/hatecrimes.png';
import stopbullying from '../imgs/stopbullying.png'
import cyberhelpline from '../imgs/cyberhelpline.png'

export function Resources(){
    return(

        <Container>
            <Row className="my-2">
                <Col sm='12' md='6' lg='8'>
                    <h2>Books</h2>
                    <h3>Books About Online Harassment</h3>
                    <ul>
                        <li>Hate Crimes in Cyberspace by Danielle Keats Citron </li>
                        <li>Viral Hate: Containing Its Spread on the Internet by Abraham H. Foxman</li>
                        <li>The Internet of Garbage by Sarah Jeong</li>
                    </ul>
                    <h3>Books for Victims of Online Harassment</h3>
                    <ul>
                        <li>Bullying: Online Harassment Guide for Prevention, Detection and Helping Victims to Recover from cyberbullying</li>
                        <li>How To Overcome Cyberbullying and Online Harassment: A Complete Guide for Prevention, Detection and Helping Victims to Recover</li>
                    </ul>
                </Col>
                <Col className='float-right' sm= 'auto' md= 'auto' lg='auto'>
                    <img src= {hatecrimes} />
                </Col>
            </Row>
            <Row className="my-2">
                <Col sm='12' md='6' lg='8'>
                    <h2>Hotlines</h2>
                    <ul>
                        <li><a href="https://gameshotline.org">Games Hotline</a></li>
                        <li><a href="https://www.thecyberhelpline.com/guides/online-harassment">Cyber Helpline</a></li>
                        <li><a href="https://tiltify.com/feminist-frequency">Tiltify</a></li>
                    </ul>
                </Col>
                <Col sm= '12' md= '4' lg='4'>
                        <Image src= {cyberhelpline} fluid/>
                </Col>
            </Row>
            <Row className="my-2">
                <Col sm='12' md='6' lg='8'>
                    <h2>Resource Pages</h2>
                    <ul>
                        <li><a href="https://www.stopbullying.gov">StopBullying.gov</a></li>
                        <li><a href="https://onlineharassmentfieldmanual.pen.org/additional-online-harassment-resources/">Online Harassment Field Manual</a></li>
                        <li><a href="https://womensmediacenter.com/speech-project/tools-resources">Women Media Center</a></li>
                    </ul>
                </Col>
                <Col sm= '12' md= '4' lg='4'>
                        <Image src= {stopbullying} fluid/>
                </Col>
            </Row>
        </Container>


    );
}
