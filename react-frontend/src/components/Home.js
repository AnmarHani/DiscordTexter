import React from 'react'

import { Link } from "react-router-dom";

import styled from 'styled-components'

const HomeWrapper = styled.div`
  padding-top: 15em;
  display:flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  margin: 3em;
`;

const Home = () => {

  return (
    <HomeWrapper>
        <h1 class="display-3"><strong class="text-primary">Discord Texter</strong>, Start Now!</h1>
        <ButtonsWrapper>
            <Link className="btn btn-primary btn-lg " to="/create-message">
              Create A Message
            </Link>
            <Link className="btn btn-outline-primary btn-lg ms-3" to="/messages">
              See All Messages
            </Link> 
        </ButtonsWrapper>
        <a href="https://discord.com/api/oauth2/authorize?client_id=958739647905812600&permissions=284004920320&scope=bot" target="_blank" rel="noopener noreferrer" class="btn btn-dark btn-lg mt-5">
          Invite Bot Now!
        </a>
    </HomeWrapper>
  )
}

export default Home