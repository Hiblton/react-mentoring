import { render, screen, fireEvent } from "@testing-library/react";
import { MovieModal } from "./MovieModal";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("MovieModal", () => {
  const initialState = {};
  const mockStore = configureStore();
  const onClose = jest.fn();

  beforeEach(() => {
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <MovieModal modalTitle="ADD MOVIE" onClose={onClose} />
      </Provider>
    );
  });

  it("should render modal with correct title", () => {
    expect(screen.getByText("ADD MOVIE")).toBeDefined();
  });

  it("should fire onClose callback by clicking close button", () => {
    fireEvent.click(screen.getByTestId("close-modal-button"));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should set movie to formikRef", () => {
    // TODO
  });

  it("should dispatch correct action by clicking submit button", () => {
    // TODO
  });
});
