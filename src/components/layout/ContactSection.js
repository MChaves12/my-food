import React from 'react'
import SectionHeaders from './SectionHeaders'

const ContactSection = () => {
  return (
    <section className="text-center">
    <SectionHeaders 
      subHeader={'Dont hesitate'}
      mainHeader={'Contact Us'}
    />
    <h1 className="text-gray-500 text-4xl my-4">
      +55 83 98888 7777
    </h1>
  </section>
  )
}

export default ContactSection