import React from 'react';

import Check from '../../../assets/check.png';

function TemplateFour(props) {
  return (
    <div className="template templateFour">
      <img src={Check} alt="Done" style={{marginTop: '3em'}} />
      <h1>Congratulations, {props.name}!</h1>
      <p>You have completed onboarding, you can start using Eden!</p>
    </div>
  )
}

export default TemplateFour