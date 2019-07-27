import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import styled from 'styled-components'
import Swal from 'sweetalert2'

const Form = styled.form`
  background: #97d1ff;
  margin: 10px auto;
  align-items: center;
  padding: 14px;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  border: 7px solid #2e87e7;
  max-width: 600px;
`
const Title = styled.h2`
  margin-bottom: 1rem;
`
const Input = styled.input`
  padding: 10px 1rem !important;
  border-color: #939393 !important;
`
const Button = styled.button`
  margin: 15px 0;
  margin-top: 26px;
  background: #fad257;
  border: 0;
  border-radius: 3px;
  padding: 10px 32px;
  transition: 0.2s;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 0 2px 0px gray;
  &:hover {
    background: #fad257;
    box-shadow: 0 0 4px 0px gray;
  }
`
const SubscribeForm = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(email)
      .then(data => {
        // console.log(data)
        // alert(data.result + '  ' + data.msg)
        Swal.fire({
          type: data.result,
          title: data.result === 'success' ? 'Success' : 'Error',
          html: data.msg,
          confirmButtonClass: 'Btn',
          cancelButtonClass: 'Btn',
          onClose: () => {
            if (data.result === 'success') setEmail('')
          }
        })
      })
      .catch(error => {
        // Errors in here are client side
        // Mailchimp always returns a 200
      })
  }

  const handleEmailChange = event => {
    setEmail(event.currentTarget.value)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Subscribe to my email list!</Title>
      <Input placeholder="Email address" name="email" value={email} type="text" onChange={handleEmailChange} />
      <Button type="submit">Subscribe</Button>
    </Form>
  )
}

export default SubscribeForm
