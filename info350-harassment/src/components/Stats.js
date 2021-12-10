import {Link} from 'react-router-dom';
import {Container, Col, Row} from 'react-bootstrap';
import React, { useState } from 'react';

export function Stats(){
    return(
        <Container>
            <UserStatCard />
        </Container>
    )
}


export function UserStatCard(){
    const [age, ageSetter ] = useState(25);
    return(
        <Container>
            <Row><h1>STATISTICS</h1></Row>
            <Row className="topUsersBox statBox" >
                <AgeInput setter={ageSetter} />

                <HarassmentStat personAge={age} />

                <HTypesContainer personAge={age} />
            </Row>
            <Row><p class="big-bold">All data from <a href="https://www.pewresearch.org/internet/2021/01/13/personal-experiences-with-online-harassment/">Pew Research</a></p></Row>
        </Container>

    );
}



export function UserCircleCard(){

}



export function AgeInput({setter}){
    const inputBox  = <input placeholder = {25} type='text' onChange={changeEvent => setter(changeEvent.target.value)}></input>;
    const inputText = <p class= "big-bold">Enter your age (we won't save it): {inputBox}</p>;
    return [inputText, <p>&nbsp;</p> ];
}


export function HarassmentStat({personAge}){
    let under30Text = <p></p>;
    if(personAge < 30){
        under30Text = [<p class="big-bold">However, <span>64%</span> of Americans under 30 (like you) report harassment.</p>, <p>&nbsp;</p>]
    }
    const infoText = [<p class="big-bold"><span>41%</span> of Americans report being harassed online.</p>, under30Text]
    return infoText;
}






export function RenderHTypes({htypes, colors}){
    return htypes.map((currentValue, index) => {
        return <div class= {"htypes big-bold " + colors[index]}>{currentValue}</div>
    });
}



export function CommonHtypes({personAge}){
    let htypesContainer = <div class = "tags"></div>
    let htypes = "";
    if(personAge < 29){
        htypes = <RenderHTypes
                htypes = {["Namecalling (51%)", "Purposeful Embarassment (40%)"]}
                colors = {["htypes-blue", "htypes-purple"]} />;
    }
    else if(personAge > 30 && personAge < 49){
        htypes = <RenderHTypes
                htypes = {["Namecalling (37%)", "Purposeful Embarassment (33%)"]}
                colors = {["htypes-blue", "htypes-purple"]} />
    }
    else{
        htypes = <RenderHTypes
                htypes = {["Namecalling (18%)", "Purposeful Embarassment (16%)"]}
                colors = {["htypes-blue", "htypes-purple"]} />
    }
    return <div class ="tags">{htypes}</div>;

    }



export function MoreCommon({personAge}){
    let htypes = "";
    if(personAge < 29){
        htypes = <RenderHTypes
                htypes = {["Stalking (21%)", "Sustained Harassment (20%)", "Sexual Harassment (25%)"]}
                colors = {["htypes-green", "htypes-orange", "htypes-red"]} />;
    }
    else if(personAge > 30 && personAge < 49){
        htypes = <RenderHTypes
                htypes = {["Stalking (16%)", "Sustained Harassment (13%)", "Sexual Harassment (14%)"]}
                colors = {["htypes-green", "htypes-orange", "htypes-red"]} />
    }
    else{
        htypes = <RenderHTypes
                htypes = {["Stalking (4%)", "Sustained Harassment (5%)", "Sexual Harassment (4%)"]}
                colors = {["htypes-green", "htypes-orange", "htypes-red"]} />
    }

    return <div class ="tags">{htypes}</div>;
}


export function HTypesContainer({personAge}){
    let moreless = "more";
    if(personAge > 49){
        moreless = "less";
    }
    return(
        <Container>
            <p class="big-bold">The most common forms of harassment experienced by your age group are:</p>
            <CommonHtypes personAge={personAge} />
            <p>&nbsp;</p>
            <p class="big-bold">Your age group experienced these types of harassment <span>{moreless}</span> than other age groups. </p>
            <MoreCommon personAge={personAge} />
        </Container>
    );
}
