import React from 'react'
import Directory from '../../components/directory'
import { HomePageContainer } from './homepage.styles'



const HomePage = (props) => {
  // console.log(props)
    return (
      <HomePageContainer className="homepage">
        <Directory />
        
      </HomePageContainer>
    );
}

export default HomePage
