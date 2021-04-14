import PropTypes from "prop-types";

import styles from "./DeleteMovieModal.module.scss";
import { useDispatch } from "react-redux";
import { deleteMovieAction } from "../../features/Movies";

import { Modal } from "../../layout";

const DeleteMovieModal = ({ id, onClose }) => {
  const dispatch = useDispatch();

  const close = (e) => onClose && onClose(e);

  const confirm = () => {
    dispatch(deleteMovieAction(id));
    close();
  };

  return (
    <Modal title="DELETE MOVIE" onClose={() => close()}>
      <div>Are you sure you want to delete this movie?</div>
      <button
        type="button"
        className={styles.primaryButton}
        onClick={() => confirm()}
      >
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
