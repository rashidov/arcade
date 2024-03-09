import { dataURLtoFile } from './dataURLtoFile'
import { AxiosResponse } from 'axios'

export function formatToFile(response: AxiosResponse, name: string) {
  const blob = new Uint8Array(response.data as any)
  const bytes = blob.length
  let binary = ''
  for (let i = 0; i < bytes; i++) {
    binary += String.fromCharCode(blob[i])
  }
  return dataURLtoFile(`data:${response.headers['content-type']};base64, ${window.btoa(binary)}`, name)
}
