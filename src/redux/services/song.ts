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

export const songsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret": import.meta.env.VITE_API_KEY,
    },
  }),
  endpoints: (build) => ({
    getSongs: build.query<Song[], any>({
      query: () => `songs`,
      transformResponse: (rawResult: { songs: Song[] }) => {
        return rawResult.songs;
      },
    }),
  }),
});

export const { useGetSongsQuery } = songsApi;
