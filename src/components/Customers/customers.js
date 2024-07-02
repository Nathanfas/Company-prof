import React from 'react'
import './customers.css'

// Import your customer logos
import logo1 from '../../assets/image/customers/aarti.jpg'
import logo2 from '../../assets/image/customers/ccecc.png'
import logo3 from '../../assets/image/customers/rixos.jpg'
// Import other logos similarly

const customers = [
  { id: 1, src: logo1, alt: 'Customer 1' },
  { id: 2, src: logo2, alt: 'Customer 2' },
  { id: 3, src: logo3, alt: 'Customer 3' },
  { id: 4, src: logo1, alt: 'Customer 4' },
  { id: 5, src: logo2, alt: 'Customer 5' },
  { id: 6, src: logo3, alt: 'Customer 6' },
  { id: 7, src: logo1, alt: 'Customer 7' },
  { id: 8, src: logo2, alt: 'Customer 8' },
  { id: 9, src: logo3, alt: 'Customer 9' },
  { id: 10, src: logo1, alt: 'Customer 10' },
  { id: 11, src: logo2, alt: 'Customer 11' },
  { id: 12, src: logo3, alt: 'Customer 12' },
  { id: 13, src: logo1, alt: 'Customer 13' },
  { id: 14, src: logo2, alt: 'Customer 14' },
  { id: 15, src: logo3, alt: 'Customer 15' },
]

const Customers = () => {
  return (
    <div className="customers" id="customers">
      <h2 className='customer-heading'>Some of our customers...</h2>
      <div className="customers-grid">
        {customers.map((customer) => (
          <div key={customer.id} className="customer-card">
            <img
              src={customer.src}
              alt={customer.alt}
              className="customer-logo"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Customers
