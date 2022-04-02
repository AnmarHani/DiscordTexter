import React from 'react'

import { useLocation } from 'react-router';

const Message = () => {
  let location = useLocation()
  
  const message = location.state

  return (
    <div class="d-flex flex-row mt-5 pt-5">
        <div class="d-flex flex-column align-items-center me-5 pe-5">
            <h1 class="display-3">Message:</h1>
            <h1 class="text-secondary display-6">{message.body}</h1>
        </div>

        <div class="d-flex flex-column align-items-center ms-5 ps-5">
          <h1 class="display-3">Responses:</h1>
          {
              message.response.length > 0 && message.response.map((response, i) => {
                  return (
                    <div key={i}>
                        <h1 class="text-secondary display-6">{response}</h1>
                    </div>
                  )
              })
          }
        </div>
    </div>
  )
}

export default Message