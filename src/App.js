import './App.css';

import TwopiRest from 'twopi-rest';

import { sample_requests } from './backend/sample-requests';

function App() {
  return (
    <div className="App">
      <TwopiRest preset={sample_requests} />
    </div>
  );
}

export default App;
