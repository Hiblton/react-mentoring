import PropTypes from "prop-types";

import styles from "./Modal.module.scss";

import { Portal } from "../";
import { Title } from "../../components";

const Modal = ({ title, onClose, children }) => {
  close = (e) => onClose && onClose(e);

  return (
    <Portal>
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <button className={styles.closeIcon} onClick={close}>
            x
          </button>
          <Title title={title} />
          {children}
        </div>
      </div>
    </Portal>
  );
};

export { Modal };

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
