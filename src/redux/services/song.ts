import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Song {
  artist_name: string;
  genre: string;
  id: number;
  image_url: string;
  likes: number;
  listened: number;
  lyric?: any;
  song_url: string;
  title: string;
}

interface Artist {
  id: string;
  image_url: string;
  name: string;
  number_of_songs: number;
}

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
  useCreateArtistsMutation,
} = songsApi;
