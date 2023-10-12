import { keyframes, styled }  from "styled-components";
const Cv = ()=>{

    const cvinfo = {
       nøkkelkvalifikasjoner :  [
        "Jeg er nyutdannet front-end utvikler fra Kodehodet og har vært i praksis hos Medretur as, hvor jeg og en annen lagde en app for retur av medisiner. Nå er jeg klar for nye utfordringer!",
        ["html/css","Javascript og React","Database (Sql, Mongodb, Firebase)"],
        "Jeg liker utfordringer, særlig problemer hvor jeg må tenke ut nye framgangsmåter. (Nå driver jeg med et prosjekt hvor jeg lager en handleliste-app ved hjelp av React-native)"
        
    ], 
    arbeidserfaring : [
        {
            date: "08.2016 – 12.2016",
            type: "CNC-operatør",
            bedrift: "Haugaland industri",
            beskrivelse: "Jobbet med finjusteringer i ferdige programmer, men fant ut at dette ikke var noe for meg."
        },
        {
            date: "08.2012 – 05.2013",
            type: "Logistikkmedarbeider",
            bedrift: "Brødrene Dahl",
            beskrivelse: "Lageropptelling og la inn antall på datasystemet. Dette var praksisplass når jeg gikk på transport og logistikk."
        },
        {
            date: "10.2021- 10.2022",
            type: "programering",
            bedrift: "Jobloop",
            beskrivelse: "kodehode, Lærte HTML/CSS Javascript, react og litt Python. Har også lært database(Firebase,sql og mongodb). og hadde praksis hos medretur."
        },
    ],
    utdanning : [
        {
            date: "07.2020 – 06.2021",
            type: "Forkurs til Ingeniør",
            instutisjon: "Høgskolen på Vestlandet",
            beskrivelse: "Avbrutt pga. Covid."
        },
        {
            date: "02.2018 – 12.2019",
            type: "Påbygging",
            instutisjon: "Karmsund vgs",
            beskrivelse: "Tok opp igjen de allmenne fagene siden jeg ville ta videre utdanning.."
        },
        {
            date: "07.2012 – 06.2013",
            type: "Vg2 Industriteknologi",
            instutisjon: "Haugaland vgs",
            beskrivelse: "Var i praksis hos FMC Biopolimar og Stensvik production"
        },
        {
            date: "07.2011 – 01.2012",
            type: "Vg1 Studiespesialiserende",
            instutisjon: "Kopervik videregående skole",
            beskrivelse: "Ble avsluttet tidlig pga lang reise og mageproblemer (ibs)."
        },
        {
            date: "07.2010 – 06.2011",
            type: "Vg2 Kjemi og Prosess",
            instutisjon: "Dalane videregående skole",
            beskrivelse: "Drev med kjemi og satt i prosess ingeniør simulator."
        },
        {
            date: "07.2011 – 01.2012",
            type: "Vg2 Transport og logistikk",
            instutisjon: "Haugaland vgs",
            beskrivelse: "Var i praksis hos Brødrene Dahl."
        },
        {
            date: "07.2011 – 01.2012",
            type: "GK Mekaniske fag",
            instutisjon: "Haugaland vgs",
            beskrivelse: "Grunnkurs"
        },
    ],
    kurs : [
        {
            date: "12.2022 - 01.2023",
            type: "digitalt jobsøkerkurs",
            instutisjon: "falck",
            beskrivelse: "kurs for jobsøking"
        },        {
            date: "12.2022 - 01.2023",
            type: "kodehode",
            instutisjon: "jobloop",
            beskrivelse: "1årig programerings kurs 50% kurs 50% praksis"
        },
    ]

    }

    
      const Nøkkelkval= ()=>{

        const nøkkelkvalifikasjoner = cvinfo.nøkkelkvalifikasjoner
        return(
            <TextContainer>
                <CVTitle>{Object.keys(cvinfo)[0]}</CVTitle>
                <CVText>{nøkkelkvalifikasjoner[0]}</CVText>
                    <ul>
                        {nøkkelkvalifikasjoner[1].map((e, index)=>{
                            return <li key={index}><CVText>{e}</CVText></li>
                        })}
                    </ul>

                <CVText>{nøkkelkvalifikasjoner[2]}</CVText>

            </TextContainer>
        )
    }

        const Arbeidserf = ()=>{
            const arbeidserfaring = cvinfo.arbeidserfaring

            return(
                <TextContainer>
                <CVTitle>{Object.keys(cvinfo)[1]}</CVTitle>

                {arbeidserfaring.map((e, index)=>{
                    return(

                        <ItemContainer key={index}>
                        <ItemTop>
                            <ItemDato>{e.date}</ItemDato>
                            <Itemtype>{e.type}</Itemtype>
                            <ItemBedrift>{e.bedrift}</ItemBedrift>
                        </ItemTop>
                        <ItemText>{e.beskrivelse}</ItemText>
                    </ItemContainer>
                        )
                })}



            </TextContainer>
            )
        
        }

        const Utdanning = ()=>{
            const utdanning = cvinfo.utdanning

            return(
                <TextContainer>
                <CVTitle>{Object.keys(cvinfo)[2]}</CVTitle>

                {utdanning.map((e, index)=>{
                    return(

                        <ItemContainer key={index}>
                        <ItemTop>
                            <ItemDato>{e.date}</ItemDato>
                            <Itemtype>{e.type}</Itemtype>
                            <ItemBedrift>{e.instutisjon}</ItemBedrift>
                        </ItemTop>
                        <ItemText>{e.beskrivelse}</ItemText>
                    </ItemContainer>
                        )
                })}



            </TextContainer>
            )
        
        }

        const Kurs = ()=>{
            const kurs = cvinfo.kurs

            return(
                <TextContainer>
                <CVTitle>{Object.keys(cvinfo)[3]}</CVTitle>

                {kurs.map((e, index)=>{
                    return(

                        <ItemContainer key={index}>
                        <ItemTop>
                            <ItemDato>{e.date}</ItemDato>
                            <Itemtype>{e.type}</Itemtype>
                            <ItemBedrift>{e.instutisjon}</ItemBedrift>
                        </ItemTop>
                        <ItemText>{e.beskrivelse}</ItemText>
                    </ItemContainer>
                        )
                })}



            </TextContainer>
            )
        
        }


    return(
        <Container>
            <Nøkkelkval/>
            <Arbeidserf/>
            <Utdanning/>
            <Kurs/>
        </Container>
        )
}

const TitleColor = keyframes`
0% {color: #000000}
50% {color: #0527f5}
100% {color: #000000}
`

const ItemContainer = styled.div`
padding: 0 1rem 1rem;
box-shadow: 0 0 10px #2c4761;
display:flex;
flex-direction: column;

font-size: 1.22rem;

`
const ItemTop = styled.div`
width: 100%;
display:flex;

justify-content: space-between;
`

const ItemText = styled.p`
margin-top: 1rem;
text-align: center;
`
const ItemDato = styled.p`

width: 10rem;
`
const Itemtype = styled.p`
text-align: center;
position: relative;
width: 12rem;
`
const ItemBedrift = styled.p`
position: relative;
width: 12rem;
text-align: end;
`

const Container =  styled.div`
margin-top: 4rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:1.5rem;
@media (max-width: 800px) {
    gap: 1rem;
    }
`

const TextContainer = styled.div`
width: 60rem;
padding: .65rem;
display:flex;
flex-direction: column;
gap:.5rem;
box-shadow: 0 0 10px #2c4761;
@media (max-width: 1000px) {
    width: 40rem;
    }
    @media (max-width: 800px) {
    width: 30rem;

    }
    @media (max-width: 500px) {
        width: 20rem;

        }
    
    `
const CVTitle = styled.h1`
text-transform: capitalize;
text-align: center;
animation-name: ${TitleColor};
animation-duration: 8s;
animation-iteration-count: infinite;  
`

const CVText =  styled.p`

font-size: 1.22rem;
`

export default Cv