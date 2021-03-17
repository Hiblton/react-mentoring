import PropTypes from "prop-types";

import styles from "./DeleteMovieModal.module.scss";

import { Modal } from "../../layout";

const DeleteMovieModal = ({ id, onClose }) => {
  const close = (e) => onClose && onClose(e);

  return (
    <Modal title="DELETE MOVIE" onClose={() => close()}>
      <div>Are you sure you want to delete this movie?</div>
      <button type="button" className={styles.primaryButton}>
        CONFIRM
      </button>
    </Modal>
  );
};

export { DeleteMovieModal };

DeleteMovieModal.propTypes = {
  id: PropTypes.number.isRequired,
  onClose: PropTypes.func,
};
