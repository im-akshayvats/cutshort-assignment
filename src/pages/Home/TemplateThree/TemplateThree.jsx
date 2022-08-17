import React, { useState, useEffect, useRef } from 'react';

import './style.scss';

import User from '../../../assets/user.png';
import Users from '../../../assets/users.png';

function TemplateThree() {
  const [selectedCard, setSelectedCard] = useState(null);

  const forMyselfRef = useRef(null);
  const withMyTeamRef = useRef(null);

  function handleClick(e) {
    if (e.target.parentNode.className === "card-forMyself" || e.target.parentNode.className === "card-withMyTeam") {
      setSelectedCard(e.target.parentNode.className)
    } else {
      setSelectedCard(e.target.className)
    }
  }

  useEffect(() => {
    if (selectedCard === "card-forMyself") {
      forMyselfRef.current.style.borderColor = '#664de5';
      withMyTeamRef.current.style.borderColor = '#f6f7fa'
    } else if (selectedCard === "card-withMyTeam") {
      forMyselfRef.current.style.borderColor = '#f6f7fa';
      withMyTeamRef.current.style.borderColor = '#664de5'
    } else {
      forMyselfRef.current.style.borderColor = '#f6f7fa';
      withMyTeamRef.current.style.borderColor = '#f6f7fa'
    }
  })

  return (
    <div className='template templateThree'>
      <h1>How are you planning to use Eden?</h1>
      <p>We'll streamline your setup experience accordingly.</p>
      <div className="cardsWrapper">
        <div className="card-forMyself" onClick={handleClick} ref={forMyselfRef}>
          <img src={User} alt="User" />
          <h4>For Myself</h4>
          <p>Write better. Think more clearly. Stay organized.</p>
        </div>
        <div className="card-withMyTeam" onClick={handleClick} ref={withMyTeamRef}>
          <img src={Users} alt="Users" />
          <h4>With my team</h4>
          <p>Wikis, docs, tasks, all in one place.</p>
        </div>
      </div>
    </div>
  )
}

export default TemplateThree