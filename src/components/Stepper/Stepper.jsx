import React from 'react'

import './style.scss';

function Stepper(props) {
  return (
    <div className='stepperWrapper'>
      <div className="sliderOuter">
        <div className="sliderInner" ref={props.sliderRef} />
      </div>
      <ul className="steps">
        <li className='stepOne' ref={props.stepOneRef}>1</li>
        <li className='stepTwo' ref={props.stepTwoRef}>2</li>
        <li className='stepThree' ref={props.stepThreeRef}>3</li>
        <li className='stepFour' ref={props.stepFourRef}>4</li>
      </ul>
    </div>
  )
}

export default Stepper;