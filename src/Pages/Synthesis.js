import React, { useState } from 'react';
import { useSpeechSynthesis } from "react-speech-kit";
import { Button, Container, Jumbotron, Navbar, Row, Col } from 'react-bootstrap';

function Synthesis() {
    const [text, setText] = useState('我係粵語學習機');
    const [voiceIndex, setVoiceIndex] = useState(null);
    const onEnd = () => {
    // You could do something here after speaking has finished
    };
    const {
        speak,
        cancel,
        speaking,
        supported,
        voices,
    } = useSpeechSynthesis({ onEnd });
    
    const voice = voices[voiceIndex] || voices[35];
    
    
        return (
            <>
            <p></p>
            <Container>
            <h2>粵語發音區（自定義）</h2>
            </Container>
            <Jumbotron>
              <Container>
            <form>
              
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


export default Synthesis;