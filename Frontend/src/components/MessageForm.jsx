import React from 'react'
import { useState } from 'react'


const MessageForm = () => {
  const handleMessage =(e)=>{
    e.preventDefault();
  }
  return (
    <div className='container from-component message-form'>
      <h2>Send Us A Message</h2>
      <form onSubmit={handleMessage}>
        <div>
          <input type="text" placeholder='First Name' value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
        </div>
      </form>
    </div>
  )
}

export default MessageForm
