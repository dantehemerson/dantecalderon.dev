import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import styled from 'styled-components'
import Swal from 'sweetalert2'
import bg from '../assets/images/footer-bg2.png'
import { media } from '../styles'

const Form = styled.form`
  background-color: #0e0e0e;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 10px auto;
  align-items: center;
  padding: 44px 12px;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
`
const Title = styled.h2`
  margin-bottom: 1.3em;
  color: white;
  text-align: center;
  font-size: 24px;
  ${media.sm`
    font-size: 35px;
  `}
`
const Input = styled.input`
  padding: 10px 1rem !important;
  max-width: 500px;
  font-weight: 600 !important;
  color: white !important;
  background: transparent !important;
  border-color: white !important;
`
const Button = styled.button`
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
