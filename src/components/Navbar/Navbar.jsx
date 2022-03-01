import React, {useState, useEffect} from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  NavIcon, 
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink

} from './Navbar.elements'


const Navbar = () => {

  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false)
    } else{
      setButton(true)
    }
  }

useEffect(()=> {
  showButton()
},[])

window.addEventListener('resize', showButton )

  return (
    <>
      <IconContext.Provider value={{ color:'#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
              <NavIcon />
              ICONP
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/'>Início</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/Servicos'>Serviços</NavLinks>
              </NavItem>              
              <NavItem>
                <NavLinks to='/Produtos'>Produtos</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/Contato'>
                    <Button primary>Contato</Button>
                  </NavBtnLink>
              ) : (
                <NavBtnLink to='/Contato'>
                  <Button fontBig primary>Contato</Button>
                </NavBtnLink>
              )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar