import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { lalal as lalalala } from '@/service/ui/teste';

import { lalal } from './service/ui/teste';


const App = () => {
  const [ blaBla, setBlaBla ] = useState('');

  useEffect(() => {
    setBlaBla('aeiou');
    console.log(lalalala)
    console.log(lalal)
  });

  return (
    <div>
      <h1>Dynamic System Host</h1>
      <h2>App 3</h2>
      {lalalala()}
      {lalal()}
      <Button onClick={(e) => console.log(e)}>
        {blaBla}
      </Button>
    </div>
    )
};

const Button = styled.button``

export default App;
