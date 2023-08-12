import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import bells from '/sound/bells.mp3';

import Buttons from '../buttons/buttons';

import './Countdown.css';

function Countdown() {
  const [min, setMinutes] = useState(0);
  const [sec, setSeconds] = useState(0);
  const [paused, setPaused] = useState(false);
  const [over, setOver] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  console.log(min, sec);

  const tick = () => {
    if (paused || over) return;

    if (min === 0 && sec === 0) {
      setOver(true);
    } else if (sec === 0) {
      setMinutes(min - 1);
      setSeconds(59);
    } else {
      setMinutes(min);
      setSeconds(sec - 1);
    }
  };

  const start = (e) => {
    if (min < 60 && sec < 60) {
      setPaused(false);
      setOver(false);
    } else {
      alert('Введите циыфры от 1 до 59');
    }
    setIsDisabled(true);
  };

  const stop = () => {
    setPaused(true);
    setIsDisabled(false);
  };

  const reset = () => {
    setMinutes(0);
    setSeconds(0);
    setPaused(false);
    setOver(false);
    setIsDisabled(false);
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  useSound(bells);

  const onChangeMin = (e) => {
    let valueMin = e.target.value;
    setMinutes(parseInt(valueMin.substr(0, 2)) || 0);
  };
  const onChangeSec = (e) => {
    let valueSec = e.target.value;
    setSeconds(parseInt(valueSec.substr(0, 2)) || 0);
  };

  return (
    <div className="countdown">
      <div className="inputs">
        <input
          className="inputs__item minutes"
          type="text"
          name="minutes"
          id=""
          value={min}
          onChange={onChangeMin}
          onClick={() => setMinutes('')}
          disabled={isDisabled}
        />
        <input
          className="inputs__item hours"
          type="text"
          name="seconds"
          id=""
          value={sec}
          onChange={onChangeSec}
          onClick={() => setSeconds('')}
          disabled={isDisabled}
        />
      </div>
      <Buttons start={start} stop={stop} reset={reset} />
    </div>
  );
}

export default Countdown;
