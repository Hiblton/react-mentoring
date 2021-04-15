import {API_URL} from "../../config";
import {createDeleteRequest, createRequest} from "../API/APIService";

export const fetchMovies = async (params) =>
    await createRequest({url: `${API_URL}/movies`, params});

export const deleteMovie = async (id) => {
    if (!id) {
        throw new Error("there is no movie ID provided");
    }

    return await createDeleteRequest({
        url: `${API_URL}/movies/${id}`,
    });
};
