import React, { useState } from 'react';
import { useSpeechSynthesis } from "react-speech-kit";
import { Button, Container, Jumbotron} from 'react-bootstrap';

function Translate() {
    const text =  '我係粵語學習機';
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
                  
                    <p>{`${text}`}</p>
                    
                    
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


export default Translate;