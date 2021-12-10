import {Link} from 'react-router-dom';
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import forumpic from '../imgs/forumpic.png'
import koala from '../imgs/ProfileImgs/koala.png'
import dino from '../imgs/ProfileImgs/dino.png'
import elephant from '../imgs/ProfileImgs/elephant.png'
import panda from '../imgs/ProfileImgs/panda.png'

export function Forum(){
    return(
        <Container>
            <h1>Forum</h1>
                <Row lg={2}><Button className="btn-style" variant="secondary">+ New Post</Button></Row>
            <Row>
                <Col className= "col-no-padding" xs={12} sm={12} md={12} lg={8}>
                    <PostBox />
                </Col>
                <Col xs={12} sm={12} md={12} lg={4}>
                    <ImgBox />
                    <TopUsers />
                    <HotQuestions />
                </Col>
            </Row>
        </Container>
    );
}




export function PostBox(){
    return(
        <div class="postBox">
            <Post profile= {elephant} postContent="My son keeps getting bullied on social media" tagContent={["#bullied", "#school", "#social media"]} firstPost = {true}/>
            <Post profile= {koala} postContent="Why is online bullying such a toxic environment?" tagContent={["#gaming", "#onlinegaming", "#toxic"]} />
            <Post profile= {dino} postContent="Am I the only person that feels uncomfortable when people send me sexual messages?" tagContent={["#sexualharassment", "#dms"]} />
            <Post profile= {panda} postContent="There are always going to be people who try to bring you down. Ignore them. " tagContent={["#staypositive", "#hatersgonnahate"]} />
        </div>);
}

export function Post({profile, postContent, tagContent, firstPost}){
    let postClass = '';
    if(firstPost == true){
        postClass = '';
    }
    else{
        postClass = 'post-border';
    }
    tagContent = genTags(tagContent);
    let onePost = (
        <Container fluid>
            <Row className={"px-2 py-3 " + postClass}>
                <Col lg={3} md={3} sm ={3}>
                    <div class="prof-img-holder">
                        <Image className="profileImage" src={profile} roundedCircle fluid></Image>
                    </div>
                </Col>
                <Col sm={8}>
                    <div class="post">{postContent}</div>
                    <div class="tags flex-container">{tagContent}</div>
                </Col>
            </Row>
        </Container>
    );
    return onePost;
}


function genTags(tags){
    return tags.map((currentValue) => {return <div class="tag">{currentValue}</div>})

}



export function ImgBox(){
    return(
        <div class = "topUsersBox">
            <Image src={forumpic} fluid></Image>
        </div>
    );
}


export function TopUsers(){
    return(
        <div class = "topUsersBox">
                <h3 class="box-title">Top Users of the Week  🎉</h3>
                <Post profile= {koala} postContent="Anonymous Koala" tagContent={["Since 2002", "🥇"]} firstPost={true}/>
                <Post profile= {dino} postContent="Anonymous Dino" tagContent={["Since 2002", "🥈"]}/>
                <Post profile= {panda} postContent="Anonymous Panda" tagContent={["Since 2002", "🥉"]}/>

        </div>
    )
}


export function HotQuestions(){
    return(
        <div class="topUsersBox">
            <h3 class="box-title">Hot Questions 🔥</h3>
            <p class = "hotQuestions">Will the Metaverse increase online harassment?</p>
            <p class = "greyed hotQuestions">2300 views</p>
        </div>
    );
}
