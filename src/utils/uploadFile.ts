import { app } from "../firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage(app);

interface uploadFileProps {
  file: File;
  IsArtistOrSong: "artist image" | "song image" | "song file";
}

// 'file' comes from the Blob or File API
export const uploadFile = async ({ file, IsArtistOrSong }: uploadFileProps) => {
  const storageRef = ref(
    storage,
    IsArtistOrSong === "artist image"
      ? `images/artists/${file.name}`
      : IsArtistOrSong === "song image"
      ? `images/songs/${file.name}`
      : `songs/${file.name}`
  );
  try {
    const response = await uploadBytes(storageRef, file);
    console.log("Uploaded a blob or file!");
    const url = await getDownloadURL(response.ref);
    return url;
  } catch {
    console.log("Something went wrong");
  }
};
