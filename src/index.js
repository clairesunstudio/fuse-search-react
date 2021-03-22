import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import Fuse from 'fuse.js';
import { orgs } from './data.json';


const options = {
  // isCaseSensitive: false,
  shouldSort: true,
  includeScore: true,
  // includeMatches: false,
  // findAllMatches: false,
  minMatchCharLength: 1,
  // location: 0,
  // threshold: 0.6,
  // distance: 100,
  useExtendedSearch: true,
  ignoreLocation: true,
  ignoreFieldNorm: true,
  keys: [
    "text"
  ]
};


const fuse = new Fuse(orgs, options);


const SearchDemo = () => {
  const [value, setValue] = useState('');
  return (
    <>
    <input value={value} onChange={e => setValue(e.target.value)} />
    <ul>{
      fuse.search(value).map(el => (
        <li key={el.item.value}>{el.item.text} <mark>{el.score}</mark></li>
      ))
    }</ul>
    </>
  )
}



ReactDOM.render(
  <SearchDemo />,
  document.getElementById('root')
);
