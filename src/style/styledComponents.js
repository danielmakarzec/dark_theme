import styled from 'styled-components'

export const Main = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.backgroundColor.main};
  `

export const Container = styled.div`
  margin: 0 auto;
  width: 900px;
  `

export const Nav = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.color};
  border-bottom: 1px solid ${props => props.theme.borderColor};
  form{
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }
`

export const NavLink = styled.div`
  margin: 0 12px;
`

export const Button = styled.button`
  background-color: ${props => props.theme.backgroundColor.button};
  color: ${props => props.theme.color};
  border: none;
  border-radius: 6px;
  padding: 6px 16px;
  cursor: pointer;
  `

export const NavInput = styled.input`
  width: 80%;
  padding: 6px 16px;
  border-radius: 6px;
  border-color: ${props => props.theme.borderColor};
  border: none;
`

export const Card = styled.div`
position: relative;
width: 500px;
margin: 80px 0 0 0;
padding: 2em 4em;
background: #fff;
z-index: 0;
`

export const CardImg = styled.img`
width: 50%;
`
