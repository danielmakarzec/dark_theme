import './style/gradient.css'
import { Main, Container, Nav, Button, NavLink, NavInput, Card, CardImg } from './style/styledComponents'
import Img from './logo.svg'

const Page = ({ darkModeOn, setDarkModeOn }) => {
  return (
    <Main>
      <Container className="container">
        <Nav>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Tags</NavLink>
          <NavLink href="#">Import</NavLink>
          <form action="#">
            <NavInput type="text" placeholder="Type a Tag, nationality.." />
          </form>
          <Button onClick={() => setDarkModeOn(!darkModeOn)}>Toggle</Button>
        </Nav>
        <Card className="gradient">
          <h1>Header</h1>
          <CardImg src={Img} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsa ea accusamus unde dolore! Repellat rerum dolor vitae, voluptates dolore consequatur ipsam eum alias rem facere odit soluta qui tempora?</p>
        </Card>
      </Container>
    </Main >
  )
}

export default Page
