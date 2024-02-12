import { axios } from "@/api/axios";
import { uploadPhoto } from "@/utils/getImageFromPhone";
import { useMutation } from "@tanstack/react-query";
import { Platform } from "react-native";

async function uploadFile(file: FormData) {
  const fileParts = file.getParts();
  const data = {
    uri: fileParts[1].uri,
    type: fileParts[1].type,
    fileName: fileParts[1].fieldName
  };

  try {
    const uri = Platform.OS === 'ios' ? data.uri?.replace('file://', '') : data.uri;

    if (!uri || !data.type) throw Error('File uri or type missing');

    const res = await axios({
      method: "PUT",
      headers: {
        "Content-Type": data.type
      },
      url: "/files/upload/images",
      data: {
        uri: uri,
        type: data.type,
        name: data.fileName,
      }
    });

    return res;

  } catch (e) {
    console.log(e)
    throw (e);
  }
}

export function useFileUpload() {
  const { mutate, isPending } = useMutation({
    mutationFn: uploadFile
  });

  async function handleSubmitPhoto() {
    const photo = await uploadPhoto();
    if (!photo) return;

    mutate(photo);
  }

  return {
    isLoading: isPending,
    handleSubmitPhoto
  }
}