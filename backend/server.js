// sk_test_51HvZ2zINIKSgLYmqzQ5EY3KRZ3mcrw6KPMEqxjbePUyod20G3NXnnW1trfVG8Mg7DF5XH5frRxLAFPVMOQQJCF1Z00h7sifen2
// coffee: price_1LubD6INIKSgLYmqo1m8t4AK

const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51HvZ2zINIKSgLYmqzQ5EY3KRZ3mcrw6KPMEqxjbePUyod20G3NXnnW1trfVG8Mg7DF5XH5frRxLAFPVMOQQJCF1Z00h7sifen2')

const app = express()
app.use(cors())
app.use(express.static("public"))
app.use(express.json())

app.post("/checkout", async(req, res) => {
  const items = req.body.items
  let lineItems = []
  items.forEach(item => {
    lineItems.push(
      {
        price: item.id,
        quantity: item.quantity
      }
    )
  })

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  })

  res.send(JSON.stringify({
    url: session.url
  }))
})

app.listen(4000, () => console.log("Listening on port 4000"))
