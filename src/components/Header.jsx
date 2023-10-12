import { keyframes, styled }  from "styled-components";
import { NavLink } from "react-router-dom";



const Header = ()=>{
    return(
        <HeaderContainer>
        <Icon>
        <Titlecontainer>
          <Titlesub>Christian's</Titlesub>
          <Title>portfolio</Title>
        </Titlecontainer>
        </Icon>
        <MenuContainer>

        <NavLink to="/" style={({isActive})=>{return {color: isActive ? "#9ea832" : "white"}}}> 
        <Menubtn>Home</Menubtn> 
        </NavLink> 
        <NavLink to="/projects" style={({isActive})=>{return {color: isActive ? "#9ea832" : "white"}}}> 
        <Menubtn> Projects</Menubtn>
        </NavLink> 
        <NavLink to="/cv" style={({isActive})=>{return {color: isActive ? "#9ea832" : "white"}}}> 
        <Menubtn> CV</Menubtn>
        </NavLink> 
        </MenuContainer>

      </HeaderContainer>
    )
}




export default Header

const MenuContainer = styled.div`
display: flex;
gap: 3rem;
position: relative;
top: 3rem;
left: 7rem;
@media (max-width: 710px) {
  left: 0;
  top: 1.4rem;
  }
  @media (max-width: 500px){
    left: 0;
    top: 1.4rem;
    gap: 2rem;
  }
`

const Menubtn = styled.p`
width: 5rem;
height: 1rem;
padding: .5rem 0;
text-align: center;
background-color: #000000;
border-radius: 1rem;
box-shadow: 0 0 10px #2c4761;
&:hover{
background-color: #4a4949;
box-shadow: 0 0 16px #4a4949;

`

const TitleColor = keyframes`
0% {color: #e8e3ba}
50% {color: #bad2e8}
100% {color: #e8e3ba}
`
// const IconShape = keyframes`
// 0% {border-radius: 2rem 50%;}
// 50% {border-radius: 50% 2rem }
// 100% {border-radius: 2rem 50%;}
// `

const IconShape = keyframes`
0% {border-radius: 2rem 50%;}
25% {border-radius: 2rem 2rem 50% 50%;}
50% {border-radius: 50% 2rem; }
75% {border-radius: 50% 50% 2rem 2rem ;}
100% {border-radius: 2rem 50%;}
`

const HeaderContainer =  styled.div`
width: 100vw;
height: 9rem;
background-color: #ebe39d;
box-shadow: 0 3px 6px #454330;
display: flex;
@media (max-width: 710px) {
  flex-direction: column;
  height:10rem;
  align-items: center;
  }
`

const Titlecontainer = styled.div`
position: relative;
top: .3rem;
display: flex;
flex-direction: column;
justify-content: center;
font-size: 20px;

animation-name: ${TitleColor};
animation-duration: 8s;
animation-iteration-count: infinite;
`

const Title = styled.h1`
text-align: center;
user-select: none
`

const Titlesub = styled.p`
position: relative;
left: 2.2rem;
top: 1rem;
user-select: none
// font-size: 1rem;

`

const Icon = styled.div`
width: 16rem;
height: 6rem;
background: radial-gradient(#000, #2c4761);
box-shadow: 0 0 10px #2c4761;
position: relative;
top: .75rem;
left: .75rem;
animation-name: ${IconShape};
animation-duration: 12s;
animation-iteration-count: infinite;
@media (max-width: 710px) {
  left: 0;
  }
`