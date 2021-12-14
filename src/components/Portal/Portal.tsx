import { useEffect, useRef, PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

const Portal = (props: PropsWithChildren<unknown>) => {
  const rootElemRef = useRef(document.createElement('div'));

  useEffect(() => {
    const parentElem = document.querySelector(`#root`);

    if (parentElem?.appendChild) {
      parentElem.appendChild(rootElemRef.current);
    }

    return () => {
      rootElemRef.current.remove();
    };
  }, []);

  return ReactDOM.createPortal(props.children, rootElemRef.current);
};

export default Portal;
