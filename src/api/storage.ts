import { axiosFilesInstance } from './requests'

export const storageApi = {
  getFileById: (id: string) => axiosFilesInstance.get(`/api/storage/files/id/${id}`),
  getFileByName: (name: string) => axiosFilesInstance.get(`/api/storage/files/name/${name}`),
}
