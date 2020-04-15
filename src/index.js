import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));
// <App />과 같은 것은 component, react는 component와 함께 동작한다.
// component는 HTML을 반환하는 함수
// jsx는 javascript안의 HTML이다. 
// react application은 한 번에 하나의 component만 rendering할 수 있다.
// 따라서 모든 것은 application (App) 안에 들어가야 한다. 
// App안에서 많은 component를 넣을 수 있고, 이러한 component안에 더 많은 component를 import할 수 있다. 
