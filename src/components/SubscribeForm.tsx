import addToMailchimp from 'gatsby-plugin-mailchimp'
import React, { useState } from 'react'
import styled from 'styled-components'
import bg from '../assets/images/footer-bg2.png'
import { media } from '../styles'

const Form = styled.form`
  background-color: grey;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${bg});
  background-size: cover;
  margin: 10px auto;
  max-width: 770px;
  align-items: center;
  padding: 24px 12px 12px;
  border-radius: 4px;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
`
const Title = styled.h2`
  margin-bottom: 1em;
  color: white;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 24px;
  ${media.sm`
    font-size: 22px;
  `}
`
const Input = styled.input`
  padding: 10px 1rem !important;
  max-width: 460px;
  font-weight: 600 !important;
  color: white !important;
  background: transparent !important;
  border-color: white !important;
`
const Buttons = styled.button`
  margin: 15px 0;
  margin-top: 26px;
  background: #efc026;
  border: 0;
  border-radius: 3px;
  padding: 10px 32px;
  transition: 0.2s;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 0 2px 0px gray;
  &:hover {
    background: #e2b420;
  }
`
const SubscribeForm = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(email)
      .then(data => {
        // Swal.fire({
        //   type: data.result,
        //   title: data.result === 'success' ? 'Success' : 'Error',
        //   html: data.msg,
        //   confirmButtonClass: 'Btn',
        //   cancelButtonClass: 'Btn',
        //   onClose: () => {
        //     if (data.result === 'success') setEmail('')
        //   },
        // })
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
      <Title>Join the Newsletter</Title>
      <Input
        placeholder="Email  "
        name="email"
        value={email}
        type="text"
        onChange={handleEmailChange}
      />
      <Buttons size="small" type="primary">
        Subscribe
      </Buttons>
    </Form>
  )
}

export default SubscribeForm
