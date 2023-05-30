import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);
  const [showRenewButton, setShowRenewButton] = useState(false);

  const renewList = () => {
    setPeople(data);
    setShowRenewButton(false);
  };

  const clearAll = () => {
    setPeople([]);
    setShowRenewButton(true);
  };

  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />
        {showRenewButton ? (
          <button onClick={renewList}>
            Renew
          </button>
        ) : (
          <button onClick={clearAll}>
            Clear all
          </button>
        )}
      </section>
    </main>
  );
}

export default App;
