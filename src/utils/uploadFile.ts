import { app } from "../firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage(app);

interface uploadFileProps {
  file: File;
  imageArtistOrSong: "artist" | "song";
}

// 'file' comes from the Blob or File API
export const uploadFile = async ({ file, imageArtistOrSong }: uploadFileProps) => {
  const storageRef = ref(
    storage,
    imageArtistOrSong === "artist" ? `images/artists/${file.name}` : `images/songs/${file.name}`
  );
  try {
    const response = await uploadBytes(storageRef, file);
    console.log("Uploaded a blob or file!");
    const url = await getDownloadURL(response.ref)
    return url;
  } catch {
    console.log("Something went wrong");
  }
};
