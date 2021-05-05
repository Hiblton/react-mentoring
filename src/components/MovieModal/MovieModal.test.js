import { render, screen, fireEvent } from "@testing-library/react";
import { MovieModal } from "./MovieModal";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("MovieModal", () => {
  const initialState = {};
  const mockStore = configureStore();

  it("should render modal with correct title", () => {
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <MovieModal modalTitle="ADD MOVIE" onClose={() => {}} />
      </Provider>
    );

    expect(screen.getByText("ADD MOVIE")).toBeDefined();
  });

  it("should fire onClose callback by clicking close button", async () => {
    const onClose = jest.fn();
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <MovieModal modalTitle="ADD MOVIE" onClose={onClose} />
      </Provider>
    );

    fireEvent.click(screen.getByTestId("close-modal-button"));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
