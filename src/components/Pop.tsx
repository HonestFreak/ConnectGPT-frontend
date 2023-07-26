import React, { useState } from 'react';
import onesvg from '../images/svg/one.tsx';
import Onesvg from '../images/svg/one.tsx';
import Twosvg from '../images/svg/two.tsx';
import Threesvg from '../images/svg/three.tsx';
import Foursvg from '../images/svg/four.tsx';
import Fivesvg from '../images/svg/five.tsx';
import Sixsvg from '../images/svg/six.tsx';
const FloatingButton = (props) => {
  const [isDivVisible, setDivVisibility] = useState(false);

  const handleButtonClick = () => {
    setDivVisibility(!isDivVisible);
  };

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
         {props.icon == "1" ? <Onesvg /> : ''}
         {props.icon == "2" ? <Twosvg /> : ''}
         {props.icon == "3" ? <Threesvg /> : ''}
         {props.icon == "4" ? <Foursvg /> : ''}
         {props.icon == "5" ? <Fivesvg /> : ''}
         {props.icon == "6" ? <Sixsvg /> : ''}
       
      </button>
      {isDivVisible && (
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
            src={`http://localhost:5173/ui/${props.uitype}?bot_id=${props.currentbot}&title=${props.title}`}
            style={{ border: 'none', color: '#ffffff' }}
            name="myiFrame"
            height="100%"
            width="100%"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
