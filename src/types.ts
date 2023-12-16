export type Artist = {
  id: string;
  image_url: string;
  name: string;
  number_of_songs: number;
}

export type Song = {
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