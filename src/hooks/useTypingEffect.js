// Lib Imports
import * as React from 'react';

const defaultAr = ['This is a typing effect'];

const useTypingEffect = props => {
  const { selector, speed = 150, arr = defaultAr } = props;

  React.useLayoutEffect(() => {
    let timer, removeTimer;
    function typingEffect(element, speed, counter = 0) {
      let text = arr[counter];
      element.innerHTML = '';
      var i = 0;
      var timer = setInterval(function () {
        if (i < text.length) {
          element.append(text.charAt(i));
          i++;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            let i = text.length - 1;
            let removeTimer = setInterval(function () {
              if (i >= 0) {
                element.innerHTML = text.slice(0, i--);
              } else {
                clearInterval(removeTimer);
                setTimeout(() => {
                  typingEffect(element, speed, counter === arr.length - 1 ? 0 : counter + 1);
                }, speed * 6);
              }
            }, speed - 50);
          }, speed * 15);
        }
      }, speed);
    }

    let element = document.querySelector(selector);
    if (element) typingEffect(element, speed);

    return () => {
      if (timer) clearInterval(timer);
      if (removeTimer) clearInterval(removeTimer);
    };
  }, [selector, speed]);
};

export default useTypingEffect;
