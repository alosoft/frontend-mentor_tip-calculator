import { useState } from 'react';
import './App.css';
import BillInput from './components/BIllInput/BillInput';
import TipPercentage from './components/TipPercentage/TipPercentage';
import Dollar from './images/icon-dollar.svg';
import Person from './images/icon-person.svg';

function App() {

  const [percentage, setPercentage] = useState(0);
  const [people, setPeople] = useState(undefined);
  const [bill, setBill] = useState(undefined);

  function reset() {
    setPercentage(0);
    setPeople(0);
    setBill(0);
    // setPeople(undefined);
    // setBill(undefined);
  }

  function updatePercentage(prev, value) {
    if (prev === value) return 0;
    return value;
  }

  function calculateTip() {
    if (bill === 0 || people === 0 || people === '') return 0;
    let amount = bill * (percentage / 100);
    let results = 0;
    if (people === undefined)
      results = amount
    results = amount / people
    return isNaN(results) ? 0 : results;
  }

  function calculateIndividualAmount() {
    if (bill === 0 || people === 0 || people === '') return 0;
    let results = (bill / people) + calculateTip();
    return isNaN(results) ? 0 : results;
  }

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return (
    <div className="section">
      <h2 className="section__title">
        spli<br />tter
      </h2>
      <div className="section__container">
        <div className="section__container-left">
          <div className="section__container-left__item">
            <BillInput key={'bill'} setValue={setBill} value={bill} title='Bill' icon={Dollar} />
          </div>
          <div className="section__container-left__item">
            <p>Select Tip %</p>
            <ul className="section__container-left__percentages">
              <TipPercentage selected={percentage === 5} click={() => setPercentage(prevPercentage => updatePercentage(prevPercentage, 5))} key={1} percentage={5} />
              <TipPercentage selected={percentage === 10} click={() => setPercentage(prevPercentage => updatePercentage(prevPercentage, 10))} key={2} percentage={10} />
              <TipPercentage selected={percentage === 15} click={() => setPercentage(prevPercentage => updatePercentage(prevPercentage, 15))} key={3} percentage={15} />
              <TipPercentage selected={percentage === 25} click={() => setPercentage(prevPercentage => updatePercentage(prevPercentage, 25))} key={4} percentage={25} />
              <TipPercentage selected={percentage === 50} click={() => setPercentage(prevPercentage => updatePercentage(prevPercentage, 50))} key={5} percentage={50} />
              <BillInput key={'tip'} percentage={percentage} setValue={setPercentage} placeholder='Custom' />
            </ul>
          </div>
          <div className="section__container-left__item">
            <BillInput
              key={'people'} 
              setValue={setPeople} 
              value={people} 
              title='Number of  People' 
              icon={Person} />
          </div>
        </div>
        <div className="section__container-right">
          <div>
            <div className="section__container-right__item">
              <p>Tip Amount <br /> <span>/ person</span> </p>
              <h2>{formatter.format(calculateTip()) ?? '$0.00'}</h2>
            </div>
            <div className="section__container-right__item">
              <p>Total <br /> <span>/ person</span> </p>
              <h2>{formatter.format(calculateIndividualAmount())}</h2>
            </div>
          </div>
          <button onClick={() => reset()} className="section__container-right__button">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
