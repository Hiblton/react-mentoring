import * as Yup from "yup";

const ERROR_MESSAGES = {
  REQUIRED: "This field is required",
  STRING: "This field should be a string",
  NUMBER: "This field should be a number",
  DATE: "Please select a valid date",
  URL: "Please select a valid URL",
  POSITIVE: "This number must has a positive number",
  INTEGER: "This field must be a simple number",
};

export default Yup.object({
  title: Yup.string(ERROR_MESSAGES.STRING).required(ERROR_MESSAGES.REQUIRED),
  releaseDate: Yup.date(ERROR_MESSAGES.DATE).notRequired(),
  movieUrl: Yup.string(ERROR_MESSAGES.STRING)
    .url(ERROR_MESSAGES.URL)
    .required(ERROR_MESSAGES.REQUIRED),
  genre: Yup.string(ERROR_MESSAGES.STRING).required(ERROR_MESSAGES.REQUIRED),
  overview: Yup.string(ERROR_MESSAGES.STRING).required(ERROR_MESSAGES.REQUIRED),
  runtime: Yup.number(ERROR_MESSAGES.NUMBER)
    .positive(ERROR_MESSAGES.POSITIVE)
    .integer(ERROR_MESSAGES.INTEGER)
    .required(ERROR_MESSAGES.REQUIRED),
});
