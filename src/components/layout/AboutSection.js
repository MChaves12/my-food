import React from 'react'
import SectionHeaders from './SectionHeaders'

const AboutSection = () => {
  return (
    <section className="text-center my-16">
      <SectionHeaders 
        subHeader={'Our Story'}
        mainHeader={'About us'}
      />
      <p className="text-gray-500 max-w-2xl mx-auto mt-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing 
      elit. Sed dapibus eros eget lectus bibendum suscipit. 
      Suspendisse potenti. Integer sagittis ipsum at sapien 
      gravida, eu convallis neque pulvinar. Vestibulum tincidunt
      scelerisque ullamcorper. Cras ut leo neque. Mauris ac ex
      et quam suscipit mollis.
      </p>
    </section>
  )
}

export default AboutSection