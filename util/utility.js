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

export default {
  changeNumFont
}
