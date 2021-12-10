import {Link} from 'react-router-dom';
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import {Post} from './Forum.js';
import elephant from '../imgs/ProfileImgs/elephant.png';
import hand from '../imgs/hand.png';


export function Welcome(){
    return(
        <Container>
            <Row><Container className="text-center"><h1>Welcome to End Online Harassment!</h1></Container></Row>
            <Row>
                <Col lg={4} md={4} sm={12} xs = {12}>
                    <Row className="welcomeBox">
                        <h4>What is <span className="blueText">Harassment</span>?</h4>
                        <p><span class="blueText">Harassment</span> is defined as “aggressive pressure or intimidation.” </p>
                        <p><span class="blueText">Online Harassment</span> is defined as the use of the Internet to bully, harass, threaten, or maliciously embarrass.</p>
                    </Row>
                    <Row className="welcomeBox">
                        <h4>Featured Forum Discussion</h4>
                        <Post profile= {elephant} postContent="My son keeps getting bullied on social media" tagContent={["#bullied", "#school"]} firstPost = {true}/>
                    </Row>
                </Col>
                <Col lg={4} md={4} sm={12} xs= {12}>
                    <Row className="welcomeBox">
                        <h4 className="text-center">Online Harassment During the Pandemic</h4>
                        <p>Online Harassment has risen during the pandemic, especially against women. See more on our <a href='./Stats'>Statistics page</a>.</p>
                    </Row>
                    <Row className="welcomeBox">
                        <Image src={hand} fluid></Image>
                    </Row>
                </Col>

                <Col lg={4} md={4} sm={12} xs= {12}>
                    <Row className="welcomeBox">
                        <h4 class="text-center">Learn About Upcoming Events</h4>
                        <h3 class="text-center"><span className="blueText">Week of Action</span></h3>
                        <p class="text-center"> Apr 3-9, 2022</p>

                        <h3 class="text-center"><span className="blueText">Virtual or In Person Training</span></h3>
                        <p class="text-center">Anytime</p>

                        <h3 class="text-center"><span className="blueText">Donation Drive</span></h3>
                        <p class="text-center">Entire Month of April</p>

                        <h3 class="text-center"><span className="blueText">In Person Harassment Lecture</span></h3>
                        <p class="text-center"> Apr 10, 2022</p>

                    </Row>
                </Col>

            </Row>

        </Container>
    );

}
