import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const SubscribeForm = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(email)
      .then(data => {
        alert(data.result)
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
    <form onSubmit={handleSubmit}>
      <h2>Subscribe to my email list!</h2>
      <div>
        <input placeholder="Email address" name="email" type="text" onChange={handleEmailChange} />
        <button type="submit">Subscribe</button>
      </div>
    </form>
  )
}

export default SubscribeForm
