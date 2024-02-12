import { launchImageLibrary } from 'react-native-image-picker';

export async function uploadPhoto(): Promise<FormData | null> {
  let file = null;

  await launchImageLibrary({ 
    maxWidth: 300,
    maxHeight: 300,
    mediaType: 'photo'
   }, response => {
    if (response.errorCode || !response.assets) return;

    const data = new FormData();
    data.append('name', 'avatar');
    data.append('fileData', {
      uri: response.assets[0].uri,
      type: response.assets[0].type,
      name: response.assets[0].fileName
    });

    file = data;
  });

  return file;
}