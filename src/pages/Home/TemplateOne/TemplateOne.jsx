import React from 'react';

function TemplateOne(props) {
  function handleChange(e) {
    props.setName(e.target.value)
  }

  return (
    <div className='template templateOne'>
      <h1>Welcome! First things first...</h1>
      <p>You can always change them later.</p>
      <div className='inputBox'>
        <h5>Full Name</h5>
        <input type="text" placeholder='Akshay Vats' />
      </div>
      <div className='inputBox'>
        <h5>Display Name</h5>
        <input type="text" placeholder='Akshay' onChange={handleChange} />
      </div>
    </div>
  )
}

export default TemplateOne