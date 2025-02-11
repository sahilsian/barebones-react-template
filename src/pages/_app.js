import '../styles/globals.css';
import Provider from '../utils/provider';
import { Analytics } from "@vercel/analytics/react"

function App({ Component, pageProps }) {
  return (
    <Provider>
    <div className="App">
      <Component {...pageProps} />
      <Analytics></Analytics>
    </div>
    </Provider>
  );
}

export default App;
