import * as React from 'react';
import ReactDOM from 'react-dom';

import useTypingEffect from '../hooks/useTypingEffect';

const App = () => {
  useTypingEffect({ selector: 'div#text', speed: 150 });
  return <div id="text"></div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
