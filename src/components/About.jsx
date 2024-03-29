import React from 'react';
import Header from './Header';
import Address from './homepage/Address';
import Compb from './aboutpage/Compb';

export default function About() {
  return (
    <div>
    <Header/>
    <Compb/>
      <Address/>
    </div>
  )
}
