import React from 'react';
import fruits from './foods';
import {choice,remove} from './helpers';
import ReactDOM from 'react-dom';

const chosen = choice(fruits);
ReactDOM.render(<div>
    <p>I'd like one {chosen}, please</p>

    <p>Here you go: {remove(fruits,chosen)}</p>

    <p>Delicious! May I have another?</p>

    <p>I'm sorry, we're all out. We have {fruits.length} other foods left.</p>
</div>, document.querySelector("#root"));
