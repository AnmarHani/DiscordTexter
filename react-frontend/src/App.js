import * as React from "react";

import { Routes, Route } from "react-router-dom";

import { gql } from "graphql-request";

import { useQuery } from "react-query";

import axios from "axios";

import { useDispatch } from 'react-redux'

import { allMessages } from './slices/messageSlice'

import CreateMessage from "./components/CreateMessage";
import Message from "./components/Message";
import Messages from "./components/Messages";
import Home from "./components/Home";

const MESSAGES_QUERY = gql`
  query MessagesIndex {
    messagesIndex {
      id
      body
      response
    }
  }
`

function App() {  

  const dispatch = useDispatch()

  const { isLoading } = useQuery("launches", async() => {
    const response = await axios({
      url: "https://discord-texter-backend.herokuapp.com/graphql/",
      method: "POST",
      data: {
        query: MESSAGES_QUERY
      }
    }).then(response => response.data.data).catch(error => error)

    dispatch(allMessages(response))

    return response
  });

    return (
        <div class="container w-100 m-auto d-flex justify-content-center">
          {
            !isLoading 
            ? 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="create-message" element={<CreateMessage />} />
              <Route path="messages" element={<Messages />} />
              <Route path="message/:id" element={<Message />} />
            </Routes>
            :
            <h1>Loading...</h1>
          }
        </div>
      )
  
}

export default App;
