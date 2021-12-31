import { useState, useEffect } from 'react'
import Message from '../components/Message'

interface MessagesInterface {
  messages: any;
}

const Messages = (props: MessagesInterface) => {

  const renderMessages = () => {
    return props.messages.map((message: any, i: number) => {
      return <Message key={i} name={message.from.name} text={ message.message } />
    })
  }

  return (
    <>
      { renderMessages() }
    </>
  )
}

export default Messages