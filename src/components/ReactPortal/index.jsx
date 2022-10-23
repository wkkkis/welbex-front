import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

const ReactPortal = ({ children, wrapperId = "modal-root" }) => {
    const [wrapperElement, setWrapperElement] = useState(null);
  
    useLayoutEffect(() => {
      let element = document.getElementById(wrapperId);

      setWrapperElement(element);
    }, [wrapperId]);
  
    if (wrapperElement === null) return null;
  
    return createPortal(children, wrapperElement);
}

export default ReactPortal;