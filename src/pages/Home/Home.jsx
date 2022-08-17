import React, { useState, useEffect, useRef } from 'react';

import Stepper from '../../components/Stepper/Stepper';
import TemplateOne from './TemplateOne/TemplateOne';
import TemplateTwo from './TemplateTwo/TemplateTwo';
import TemplateThree from './TemplateThree/TemplateThree';
import TemplateFour from './TemplateFour/TemplateFour';

import './style.scss';
import './template.scss';
import Logo from '../../assets/logo.png';

function Home() {
  const [stepCount, setStepCount] = useState(1);
  const [name, setName] = useState('Guest');
  const sliderRef = useRef(null);
  const stepOneRef = useRef(null);
  const stepTwoRef = useRef(null);
  const stepThreeRef = useRef(null);
  const stepFourRef = useRef(null);
  const btnRef = useRef(null);

  function handleClick() {
    if (stepCount < 4) {
      setStepCount(stepCount + 1)
    }
  }

  useEffect(() => {
    if (stepCount === 1) {
      sliderRef.current.style.width = '16.5%'

      stepOneRef.current.style.backgroundColor = '#664de5'
      stepOneRef.current.style.color = 'white'

    } else if (stepCount === 2) {
      sliderRef.current.style.width = '49.5%'

      stepOneRef.current.style.backgroundColor = '#664de5'
      stepOneRef.current.style.color = 'white'

      stepTwoRef.current.style.backgroundColor = '#664de5'
      stepTwoRef.current.style.color = 'white'

    } else if (stepCount === 3) {
      sliderRef.current.style.width = '82.5%'

      stepOneRef.current.style.backgroundColor = '#664de5'
      stepOneRef.current.style.color = 'white'

      stepTwoRef.current.style.backgroundColor = '#664de5'
      stepTwoRef.current.style.color = 'white'

      stepThreeRef.current.style.backgroundColor = '#664de5'
      stepThreeRef.current.style.color = 'white'

    } else if (stepCount === 4) {
      sliderRef.current.style.width = '100%'

      stepOneRef.current.style.backgroundColor = '#664de5'
      stepOneRef.current.style.color = 'white'

      stepTwoRef.current.style.backgroundColor = '#664de5'
      stepTwoRef.current.style.color = 'white'

      stepThreeRef.current.style.backgroundColor = '#664de5'
      stepThreeRef.current.style.color = 'white'

      stepFourRef.current.style.backgroundColor = '#664de5'
      stepFourRef.current.style.color = 'white'

      btnRef.current.innerText = 'Launch Eden'
    }
  })

  return (
    <section className='onboardingExploration'>
        <div className="header">
          <img src={Logo} alt='Logo' />
          <h1>Eden</h1>
        </div>
        <Stepper
          sliderRef = {sliderRef}
          stepOneRef = {stepOneRef}
          stepTwoRef = {stepTwoRef}
          stepThreeRef = {stepThreeRef}
          stepFourRef = {stepFourRef}
        />
        <div className="templateWrapper">
          {stepCount === 1 ? <TemplateOne setName = {setName} /> :
           stepCount === 2 ? <TemplateTwo /> :
           stepCount === 3 ? <TemplateThree /> : 
           <TemplateFour name={name} />}
        </div>
        <button className='btn' onClick={handleClick} ref={btnRef} >Create Workspace</button>
    </section>
  )
}

export default Home;