import {  styled }  from "styled-components";
const Home = ()=>{
    return(
        <Container>
            <HomeText>Jeg er en mann på 32 år, jeg har altid vært en gamer så interessen min for data startet før jeg begynte på skolen.</HomeText>
            <HomeText>Jeg kom først borti koding og programmering da jeg begynte å spille Skyrim. I Skyrim begynte jeg å lage mods, og senere kom jeg også borti ingame koding i Space Engineers.</HomeText>
            <HomeText>Jeg har vært deltaker på IT-Amo kurset “Kodehode”, hvor jeg har lært HTML/CSS, JavaScript og Python. Jeg har også vært heldig med å få arbeide med databaser som Firebase,mongosb of sql, noe jeg syns er veldig spennende.</HomeText>
        <   HomeText>Jeg synes koding og programmering i seg selv er veldig spennende, samtidig også utfordrende og givende.</HomeText>
            <HomeText>Koding får meg til å fokusere på en helt ny måte, og jeg går “all in” for å sette meg inn i nye utfordringer.</HomeText> 
    </Container>    
    )

}


export default Home

const Container =  styled.div`
height: 80vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:.5rem;
`

const HomeText =  styled.p`
width: 60rem;
font-size: 1.22rem;

`