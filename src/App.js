import './public/css/app.css';
import Provider from './lib/provider';

function App() {
  return (
    <div className="App">
      {/* Application Provider. Provides a Global Array of State */}
      <Provider></Provider>
    </div>
  );
}

export default App;
