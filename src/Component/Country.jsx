import React from 'react'

const Country = () => {
  return (
    <div className='flex gap-2'>
        <div>
           <img src="data:image/png;base64,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" height="30px"
           width="25px"/>
        </div>
        <div className='italic'>
           <h2>IN/EN</h2>
        </div>
    </div>
  )
}

export default Country

