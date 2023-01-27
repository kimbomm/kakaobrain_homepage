import Vue from 'vue'

function changeNumFont(number) {
  let returnFont = []
  // let returnFont = ''
  let toStringNumber = String(number)
  for (let i = 0; i < toStringNumber.length; i++) {
    let str = ''
    switch (toStringNumber.substring(i, i + 1)) {
      case '1':
        str = '➀'
        break
      case '2':
        str = '➁'
        break
      case '3':
        str = '➂'
        break
      case '4':
        str = '➃'
        break
      case '5':
        str = '➄'
        break
      case '6':
        str = '➅'
        break
      case '7':
        str = '➆'
        break
      case '8':
        str = '➇'
        break
      case '9':
        str = '➈'
        break
      case '0':
        str = '⓪'
        break
    }
    returnFont.push(str)
  }
  return returnFont.join('')
}

function setParameters(payload) {
  let createdParam = ''
  let i = ''
  for (const key in payload) {
    const value = payload[key]
    createdParam += `${key}=${value}`
    i++
    if (i !== Object.keys(payload).length) {
      createdParam += '&'
    }
  }
  return createdParam
}

function changeCategory2(category2) {
  let category = category2
  switch (category) {
    case 'datasets':
      category = 'dataset'
      break
    case 'brain_cloud':
      category = 'brain'
      break
    case 'large_scale':
      category = 'large'
      break
    case 'digital_human':
      category = 'digital'
      break
  }

  return category
}

/**
 * 
 * @param { string } dataUrl  image 미리보기 url
 * @param { string } fileName 이미지 파일 이름
 * @returns new File()
 */
const dataUrlToFile = (dataUrl, fileName) => {
  const arr = dataUrl.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n);
      
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }
  
  return new File([u8arr], fileName, {type:mime});
}

/**
 * 
 * @param { number } targetWidth 리사이즈 기준 이미지 width
 * @param { number } targetHeight 리사이즈 기준 이미지 height
 * @param { object } imageSize 기존 이미지 사이즈
 * @param { object } imageSize.width 이미지 width
 * @param { object } imageSize.height 이미지 height
 * @returns { object } resizeImageSize
 */
const imageResize = (targetWidth, targetHeight, imageSize) => {
  let nw = '',
      nh = ''
  if (imageSize.width > imageSize.height) {
    nw = targetWidth
    nh = Math.floor(targetWidth * imageSize.height / imageSize.width)
  } else {
    nw = Math.floor(targetHeight * imageSize.width / imageSize.height)
    nh = targetHeight
  }

  return {
    width: nw,
    height: nh
  }
}

export default {
  changeNumFont,
  setParameters,
  changeCategory2,
  dataUrlToFile,
  imageResize
}
