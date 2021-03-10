import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Portal = ({ children, className = "root-portal", element = "div" }) => {
  const [container] = useState(document.createElement(element));

  container.classList.add(className);

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};

export { Portal };

Portal.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  element: PropTypes.string,
};
