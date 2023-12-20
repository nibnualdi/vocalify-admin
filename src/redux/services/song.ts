import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Artist, Genre, Song } from "../../types";

export const songsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret": import.meta.env.VITE_API_KEY,
    },
  }),
  endpoints: (build) => ({
    getSongs: build.query<Song[], void>({
      query: () => `songs`,
      transformResponse: (rawResult: { songs: Song[] }) => {
        return rawResult.songs;
      },
    }),
    getArtists: build.query<Artist[], void>({
      query: () => `artists`,
      transformResponse: (rawResult: { artists: Artist[] }) => {
        return rawResult.artists;
      },
    }),
    getArtistById: build.query<Artist, string>({
      query: (id) => `artist/${id}`,
      transformResponse: (rawResult: { artists: Artist[] }) => {
        return rawResult.artists[0];
      },
    }),
    getSongsByArtistName: build.query<Song[], string>({
      query: (name) => `songs/artist/${name}`,
      transformResponse: (rawResult: { songs: Song[] }) => {
        return rawResult.songs;
      },
    }),
    getGenres: build.query<Genre[], void>({
      query: () => `genres`,
      transformResponse: (rawResult: { genre: Genre[] }) => {
        return rawResult.genre;
      },
    }),
    createArtists: build.mutation<Artist[], Partial<Artist>>({
      query: ({ name, image_url }) => ({
        url: `create/artist`,
        method: "POST",
        body: {
          name,
          image_url,
        },
      }),
    }),
  }),
});

export const {
  useGetSongsQuery,
  useGetArtistsQuery,
  useGetArtistByIdQuery,
  useGetSongsByArtistNameQuery,
  useGetGenresQuery,
  useCreateArtistsMutation,
} = songsApi;
