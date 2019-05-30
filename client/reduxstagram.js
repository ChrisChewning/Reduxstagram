import React from 'react';
//if you don't say a path in front of it, it's coming from node_modules folder

import { render } from 'react-dom';
//allows us to render out to html. React will work with things like Canvas and Native, etc.
//the dom stuff is in this package.

import css from './styles/style.styl';
import Main from './components/Main';


render(<Main/>, document.getElementById('root'));
//renders two things:
//1. jsx
//2. mounting point: 'root' is coming from idnex.html div id="root"

//in the render part, you pass in the children here. 
