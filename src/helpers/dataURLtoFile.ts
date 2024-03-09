export function dataURLtoFile(dataURL: string, filename: string) {
  const arr = dataURL.split(',')
  // @ts-ignore
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)

  while (n) {
    n -= 1
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new File([u8arr], filename, { type: mime })
}
