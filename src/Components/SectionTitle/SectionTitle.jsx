import React from 'react'

const SectionTitle = ({title, mb}) => {

  const margin = mb || 'mb-0';


  return (
    <div className="w-full flex items-center justify-start">
      <h3
        className={`text-3xl text-[#272343] font-semibold font-inter capitalize ${margin}`}
      >
        {title}
      </h3>
    </div>
  )
}

export default SectionTitle
