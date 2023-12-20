import { app } from "../firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage(app);

interface uploadFileProps {
  file: File;
  IsArtistOrSong: "artistImage" | "songImage" | "songFile";
}

// 'file' comes from the Blob or File API
export const uploadFile = async ({ file, IsArtistOrSong }: uploadFileProps) => {
  const storageRef = ref(
    storage,
    IsArtistOrSong === "artistImage"
      ? `images/artists/${file.name}`
      : IsArtistOrSong === "songImage"
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
