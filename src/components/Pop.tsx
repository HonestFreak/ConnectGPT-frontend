import { useState } from 'react';

const FloatingButton = (props) => {
  const [isDivVisible, setDivVisibility] = useState(false);

  const handleButtonClick = () => {
    setDivVisibility(!isDivVisible);
  };

  let greetings = ""
  if (props.greetings) {
    greetings = props.greetings
  }

  return (
    <div>
      <button
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: props.bgcolor,
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

         { <img src={props.icon}/>}
    
      </button>
      {(
        <div
          style={{
            display: isDivVisible ? 'block' : 'none',
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
            src={`https://connectgpt.tech/ui/${props.uitype}?bot_id=${props.currentbot}&title=${props.title}${greetings}`}
            style={{ border: 'none', color: '#ffffff' }}
            name="myiFrame"
            height="100%"
            width="100%"
          />
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
