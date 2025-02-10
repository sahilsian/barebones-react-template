import '../styles/globals.css';
import Provider from '../src/utils/provider';

function App({ Component, pageProps }) {
  return (
    <Provider>
    <div className="App">
      <Component {...pageProps} />
    </div>
    </Provider>
  );
}

export default App;
