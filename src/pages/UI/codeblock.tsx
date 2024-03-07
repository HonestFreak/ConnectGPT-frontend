import React, { useRef } from 'react';
import { useState } from 'react';

const CodeBlock = (props) => {
  const codeRef = useRef(null);
  const [copied, setCopied] = useState(false);
  let greetings = "";
  if(props.greetings != "") {  greetings = props.greetings; }

  const handleCopyClick = () => {
    const codeElement = codeRef.current;
    const codeText = codeElement.innerText;

    navigator.clipboard.writeText(codeText)
      .then(() => {
        setCopied(true);
      })
      .catch((error) => {
        console.error('Failed to copy code to clipboard:', error);
        // You can show an error message or perform any other action here
      });
  };

  let icon = "one";
  if(props.icon == "1")  icon = "one";
  else if(props.icon == "2") icon = "two";
  else if(props.icon == "3") icon = "three";
  else if(props.icon == "4") icon = "four";
  else if(props.icon == "5") icon = "five";
  else if(props.icon == "6") icon = "six";

  const code = `
  // paste this code as a new tsx/jsx file and call the component in your page
  
  import React, { useState } from 'react';

  const FloatingButton = () => {
    const [isDivVisible, setDivVisibility] = useState(false);
  
    const handleButtonClick = () => {
      setDivVisibility(!isDivVisible);
    };
  
    return (
      <div>
        <button
          style={{
            display: isDivVisible ? 'block' : 'none',
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: ${props.bgcolor}},
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            textAlign: 'center',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.26)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={handleButtonClick}
        >
           {/* Your Icon Here */}
         <img src="https://connectgpt.tech/images/svg/${icon}.svg"/>
      
        </button>
          <div
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '100px',
              color: '#333333',
              width: '400px',
              height: '600px',
              borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.26)',
            }}
          >
            {/* iframe code */}
             <iframe
              src="https://connectgpt.tech/ui/1?id=` + props.botid + `&title=` + props.title + `${greetings}"
              style={{ border: 'none', color: '#ffffff' }}
              name="myiFrame"
              height="100%"
              width="100%"
            ></iframe>
          </div>
      </div>
    );
  };
  
  export default FloatingButton;  
  `;

  return (
    <div>
        <span className="flex items-center space-x-4">
        <button className='bg-success px-2 py-2 rounded-md text-white' onClick={handleCopyClick}>Copy</button>
      { copied && <p>Copied to clipboard</p>} </span>
      <pre style={{ padding: '10px', fontFamily: 'monospace' }}>
      <code ref={codeRef} style={{ wordBreak: "break-all", wordWrap: "break-word" }}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
