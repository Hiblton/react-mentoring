import {
  moviesReducer,
  clearSelectedMovieAction,
  setActiveFilterAction,
  setActiveSortingAction,
  setSearchStringAction,
  fetchMoviesAction,
  selectMovieAction,
} from "./Movies";

const initialState = {
  movies: [],
  meta: {
    filter: "",
    search: "",
    searchBy: "title",
    sortBy: "",
    sortOrder: "ASC",
    totalAmount: 0,
  },
  selectedMovie: null,
};

describe("moviesSlice", () => {
  describe("reducers", () => {
    it("returns initial state", () => {
      const nextState = moviesReducer(undefined, {});

      expect(nextState).toStrictEqual(initialState);
    });

    it("clearSelectedMovieAction", () => {
      const nextState = moviesReducer(
        { ...initialState, selectedMovie: {} },
        clearSelectedMovieAction()
      );

      expect(nextState.selectedMovie).toBe(null);
    });

    it("setActiveFilterAction", () => {
      const nextState = moviesReducer(
        initialState,
        setActiveFilterAction({ filter: "filter" })
      );

      expect(nextState.meta.filter).toBe("filter");
    });

    it("setActiveSortingAction", () => {
      const nextState = moviesReducer(
        initialState,
        setActiveSortingAction({ sortBy: "sortBy" })
      );

      expect(nextState.meta.sortBy).toBe("sortBy");
    });

    it("setSearchStringAction", () => {
      const nextState = moviesReducer(
        initialState,
        setSearchStringAction("search")
      );

      expect(nextState.meta.search).toBe("search");
    });
  });

  describe("extra reducers", () => {
    it("fetchMoviesAction.fulfilled", () => {
      const mockAsyncPayload = {
        data: [{ id: 1 }],
        limit: 10,
        offset: "1",
        totalAmount: 1000,
      };
      const nextState = moviesReducer(
        initialState,
        fetchMoviesAction.fulfilled(mockAsyncPayload)
      );

      expect(nextState.movies).toStrictEqual([{ id: 1 }]);
      expect(nextState.meta.limit).toBe(10);
      expect(nextState.meta.offset).toBe("1");
      expect(nextState.meta.totalAmount).toBe(1000);
    });

    it("selectMovieAction.fulfilled", () => {
      const mockAsyncPayload = { id: 1 };
      const nextState = moviesReducer(
        initialState,
        selectMovieAction.fulfilled(mockAsyncPayload)
      );

      expect(nextState.selectedMovie).toStrictEqual({ id: 1 });
    });
  });
});
