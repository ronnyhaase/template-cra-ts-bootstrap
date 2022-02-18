import React from 'react';
import { Button, Container } from 'react-bootstrap'

import logo from './logo.svg';

function App() {
  return (
    <main className="h-100 d-flex align-items-center">
      <Container className="text-center">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div className="p-3 rounded-3 bg-dark">
          <Button
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Button>
        </div>
      </Container>
    </main>
  );
}

export default App;
