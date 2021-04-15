import "./App.css";
import styled from "styled-components";
import Wilder from './Wilder';
import { useState } from "react";

const Container = styled.div `
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
`;

const CardRow = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 32%);
  justify-content: space-between;
`;

function App() {
  const [wilder, setWilder] = useState([]);
  return (
    <div>
      <header>
      <Container>
        <h1>Wilders Book</h1>
      </Container>
      </header>
      <Container>
        <h2>Wilders</h2>
        <CardRow>
          {wilder.map(item => (
            <Wilder />
          ))}
          <Wilder 
            name="Jane Doe" 
            resume="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat."
          />
          <Wilder 
            name="Lisa Doe" 
            resume="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat."
          />
          <Wilder 
            name="John Doe" 
            resume="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat."
          />

        </CardRow>
      </Container>
      <footer>
        <Container>
          <p>&copy; 2020 Wild Code School</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
