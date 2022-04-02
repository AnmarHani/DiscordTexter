import React from 'react'

import { Link } from "react-router-dom";

import { useSelector } from 'react-redux'

const Messages = (props) => {
  
  const messages = useSelector((state) => state.message.value)
  
    return (
      <div class="list-group mt-5 pt-5">
          <h1 class="display-3 mb-5">All Messages:</h1>
          {
              messages.messagesIndex.length > 0 && messages.messagesIndex.map((message, i) => {
                  return (
                    <Link class="list-group-item list-group-item-action" key={message.id} to={`/message/${i}`} state={message}>
                        <h3 class="display-6 text-dark">{message.body}</h3>
                    </Link>
                  )
              })
          }
      </div>
    )
}

export default Messages