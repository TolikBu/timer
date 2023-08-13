import './Buttons.css';

function Buttons({ start, stop, reset }) {
  return (
    <div className="buttons">
      <button
        className="buttons__item start"
        onClick={() => {
          start();
        }}
      >
        Start
      </button>
      <button
        className="buttons__item stop"
        onClick={() => {
          stop();
        }}
      >
        Stop
      </button>
      <button
        className="buttons__item reset"
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Buttons;
