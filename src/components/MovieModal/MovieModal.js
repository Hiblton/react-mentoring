import PropTypes from "prop-types";
import { Formik, Field, Form, ErrorMessage } from "formik";

import styles from "./MovieModal.module.scss";

import { Modal } from "../../layout";
import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addMovieAction, updateMovieAction } from "../../features/Movies";
import validationSchema from "./MovieValidation";

const GENRE_OPTIONS = ["DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];

const MovieModal = ({ modalTitle, movie, onClose }) => {
  const formikRef = useRef();
  const dispatch = useDispatch();

  const [id, setId] = useState();

  useEffect(() => {
    if (!movie || !formikRef.current) return;

    setId(movie?.id);

    formikRef.current.setFieldValue("title", movie?.title);
    formikRef.current.setFieldValue("releaseDate", movie?.releaseDate);
    formikRef.current.setFieldValue("movieUrl", movie?.movieUrl);
    formikRef.current.setFieldValue("genre", movie?.genre);
    formikRef.current.setFieldValue("overview", movie?.overview);
    formikRef.current.setFieldValue("runtime", movie?.runtime);
  }, [movie]);

  const initialValues = {
    title: "",
    releaseDate: "",
    movieUrl: "",
    genre: "",
    overview: "",
    runtime: "",
  };

  const handleSubmit = (
    {
      title,
      releaseDate: release_date,
      movieUrl: poster_path,
      genre,
      overview,
      runtime,
    },
    { setSubmitting }
  ) => {
    const movie = {
      id,
      title,
      release_date,
      poster_path,
      genres: [genre],
      overview,
      runtime,
    };
    dispatch(id ? updateMovieAction(movie) : addMovieAction(movie));
    setSubmitting(false);
    close();
  };

  const close = (e) => onClose && onClose(e);

  return (
    <Modal title={modalTitle} onClose={() => close()}>
      <Formik
        innerRef={formikRef}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          {id && (
            <div className={styles.formField}>
              <label>MOVIE ID</label>
              <span>{id}</span>
            </div>
          )}

          <div className={styles.formField}>
            <label htmlFor="title">TITLE</label>
            <Field name="title" type="text" placeholder="Title here" />
            <ErrorMessage name="title" />
          </div>

          <div className={styles.formField}>
            <label htmlFor="releaseDate">RELEASE DATE</label>
            <Field name="releaseDate" type="date" placeholder="Select Date" />
            <ErrorMessage name="releaseDate" />
          </div>

          <div className={styles.formField}>
            <label htmlFor="movieUrl">MOVIE URL</label>
            <Field name="movieUrl" type="url" placeholder="Movie URL here" />
            <ErrorMessage name="movieUrl" />
          </div>

          <div className={styles.formField}>
            <label htmlFor="genre">GENRE</label>
            <Field name="genre" as="select">
              <option value="">Select Genre</option>
              {GENRE_OPTIONS.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </Field>
            <ErrorMessage name="genre" />
          </div>

          <div className={styles.formField}>
            <label htmlFor="overview">OVERVIEW</label>
            <Field name="overview" type="text" placeholder="Overview here" />
            <ErrorMessage name="overview" />
          </div>

          <div className={styles.formField}>
            <label htmlFor="runtime">RUNTIME</label>
            <Field name="runtime" type="number" placeholder="Runtime here" />
            <ErrorMessage name="runtime" />
          </div>

          <div className={styles.formActions}>
            <button type="reset" className={styles.secondaryButton}>
              RESET
            </button>
            <button type="submit" className={styles.primaryButton}>
              SAVE
            </button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

export { MovieModal };

MovieModal.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    movieUrl: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
  }),
  onClose: PropTypes.func,
};
