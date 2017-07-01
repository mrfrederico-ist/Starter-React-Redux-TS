import * as React from 'react'
import styled, { keyframes } from 'styled-components'

const logo = require('../res/logo.svg')

// Types ===================================
export interface AppProps {
  animationDuration: number
}

interface AppLogoProps extends AppProps {}
// Styles ==================================
const Row = styled.div`
  background-color: #222;
  padding: 20px;
`

const logoSpin = keyframes`
  from {
      transform: rotate(0deg);
  }
  to {
      transform: rotate(360deg);
  }
`

const AppLogo = styled.img`
  animation: ${logoSpin} ${(props: AppLogoProps) => props.animationDuration}s
    infinite linear;
  height: 80px;
`

const Welcome = styled.h4`
  font-weight: bold;
  color: white;
`

const Intro = styled.h5`color: white;`
// =========================================
const Header = ({ animationDuration }: AppProps) => {
  return (
    <div className="container-fluid text-center">
      <Row className="row">
        <div className="col-md-12">
          <AppLogo
            animationDuration={animationDuration}
            src={logo}
            alt="logo"
          />
          <Welcome>
            Welcome to React Redux with Styled Components and BootStrap 3
          </Welcome>
          <Intro>
            To get started, edit <code>src/components/App.tsx</code> and save to
            reload.
          </Intro>
        </div>
      </Row>
    </div>
  )
}

export default Header
