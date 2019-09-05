import React, { useState } from 'react';
import './App.css';
import { useSpeechSynthesis } from "react-speech-kit";
import { Button, Container, Jumbotron, Navbar, Row, Col } from 'react-bootstrap';


function App() {
  const [text, setText] = useState('我是粵語學習機');
  const [voiceIndex, setVoiceIndex] = useState(null);
  
  const onEnd = () => {
    // You could do something here after speaking has finished
  };
  const {
    speak,
    cancel,
    speaking,
    supported,
    voices
  } = useSpeechSynthesis({ onEnd });

  const voice = voices[voiceIndex] || voices[35];

  return (
    <>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">粵語學習機</Navbar.Brand>
      </Navbar>
      <Jumbotron>
      <Container>

      <form>
        <h2>普通話轉粵語</h2>
        { !supported && (
          <p>Oh no, it looks like your browser doesn&#39;t support Speech Synthesis.</p>
          )}
        {supported && (
          <React.Fragment>
            

            <label htmlFor="voice">
              選擇zh-HK 
            </label>
            
            <select
              id="voice"
              name="voice"
              value={voiceIndex || ''}
              onChange={(event) => { setVoiceIndex(event.target.value); }}
              native 
              >
               
              <option value="">zh-HK</option>
              {voices.map((option, index) => (
                <option key={option.voiceURI} value={index}>
                  {`${option.lang} - ${option.name}`}
                </option>
              ))}
            </select>
            <p></p>
            <label htmlFor="message">
              輸入文字
            </label>
            <p></p>
            <Row>
            <Col>

            <textarea
              id="message"
              name="message"
              rows={10}
              value={text}
              onChange={(event) => { setText(event.target.value); }}
              />
              </Col>
              <Col>
              <p>{`${text}`}</p>
              
              </Col>
              </Row>
            { speaking
              ? (
                <Button type="button" onClick={cancel}>
                  Stop
                </Button>
              ) : (
                <Button type="button" onClick={() => speak({ text, voice })}>
                  Speak
                </Button>
              )
            }
          </React.Fragment>
        )}
      </form>
      
        </Container>
      </Jumbotron>
    </>
  );
}

export default App;
