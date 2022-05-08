import React from 'react';
import ReactDOM from 'react-dom';

import Contact from './components/Contact';

const title = 'Is it working? hot module replacement...';

ReactDOM.render(
    <Contact />,
    document.getElementById('root')
);

module.hot.accept();
