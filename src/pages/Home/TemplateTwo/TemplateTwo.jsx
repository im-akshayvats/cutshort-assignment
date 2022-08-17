import React from 'react'

function TemplateTwo() {
  return (
    <div className='template templateTwo'>
      <h1>Let's set up a home for all your work</h1>
      <p>You can always create another workspace later.</p>
      <div className='inputBox'>
        <h5>Workspace Name</h5>
        <input type="text" placeholder='Akshay' />
      </div>
      <div className='inputBox'>
        <h5>Workspace URL <span>(optional)</span></h5>
        <div className="workspaceWrapper">
          <input type="text" value='www.eden.com' disabled/>
          <input type="text" placeholder='Akshay' />
        </div>
      </div>
    </div>
  )
}

export default TemplateTwo