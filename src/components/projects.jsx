import {  keyframes, styled }  from "styled-components";
const Projects = (props)=>{
    const data = props.data



    const Card = ()=>{
        return(

            data.map((data)=>{
                return(
                    <CardContainer key={data.id}>
                        <CardContent>
                            <CardTitle>{data.title}</CardTitle>
                            <CardLanguage>{data.language.map((language,index)=><Languageicon key={index}><LanguageText>{language}</LanguageText></Languageicon>)}</CardLanguage>  
                        </CardContent>

                        <CardContent2>
                            <CardText>{data.info}</CardText>
                            <LinkContainer>
                            <Link1  href={data.git} target="_blank">git</Link1>
                            <Link2 href={data.link} target="_blank">link</Link2>
                            </LinkContainer>

                        </CardContent2>

  
                    </CardContainer>
                )
            })
        )
    }

    return(

        <Container>
             <h1>Projects</h1>
        <Card/>   
        </Container>

        )
}

const TitleColor = keyframes`
0% {color: #000000}
50% {color: #0527f5}
100% {color: #000000}
`

const Container =  styled.div`
margin-top: 4rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:2rem;

@media (max-width: 800px) {
    gap: 1rem;
    }
`
const CardContainer = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
justify-content: space-between;
align-items: center;
padding: 0 .5rem;
box-shadow: 0 0 10px #2c4761;
width: 70vw;
height: 7rem;

`

const CardTitle = styled.h1`
animation-name: ${TitleColor};
animation-duration: 8s;
animation-iteration-count: infinite;  
`

const CardContent =  styled.div`
display: flex;

`
const CardContent2 =  styled.div`
display: flex;
flex-direction: column;
// gap: 1rem;

`

const CardLanguage = styled.div`
margin-top: .7rem;
position: absolute;
right: 15vw;
display:flex;
flex-direction: column;
gap: .5rem;
`

const Languageicon = styled.div`
box-shadow: 0 0 10px #0527f5;
height: 1.5rem;
width: 3rem;
border-radius: 2rem;
display: flex;
justify-content: center;
align-items: center;

`
const LanguageText =  styled.p`
font-size: 1rem;
font-weight: 800;
text-align: center;
color: black;
`

const CardText = styled.p`
text-align: center;
// margin-bottom: 1rem;
`

const LinkContainer = styled.div`
background: #0527f5;
gap:.1rem;
display: flex;
width: 25rem;
height: 2rem;
box-shadow: 0 0 10px #0527f5;
justify-content: space-between;
// align-items: center;
border-radius: 2rem 2rem 0 0 ; 
@media (max-width: 800px) {
    width: 12rem;
    }
`
const Link1 = styled.a`
background: white;
width: 100%;
text-align: center;
border-radius: 2rem 0 0 0 ; 
// border-right: 1px solid #0527f5;
display: flex;
justify-content: center;
align-items: center;
&:hover{
    background-color: #0527f5;
    color: white;
}
`
const Link2 = styled.a`
background: white;
width: 100%;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
border-radius: 0 2rem 0 0 ; 
// border-left: 1px solid #0527f5;

&:hover{
    background-color:#0527f5;
    color: white;
}
`

export default Projects