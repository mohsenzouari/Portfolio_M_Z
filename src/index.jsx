import { hydrate, render } from 'react-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';

const root = document.getElementById('root');
if (root.hasChildNodes()) {
  hydrate(<App />, root);
}
else {
  render(<App />, root);
}


reportWebVitals();
