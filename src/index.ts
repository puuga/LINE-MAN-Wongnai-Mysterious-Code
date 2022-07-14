import { decodeBase64 } from "./util"

function main () {
  console.log('Hello')
  console.log('I want to do something with "aWFuZ25vVzpOQU06RU5JTDp0YTpzdTpuaW9K".')
  console.log('Hint is: base64.StdEncoding.DecodeString(secret)')

  const secret = 'aWFuZ25vVzpOQU06RU5JTDp0YTpzdTpuaW9K'
  const decodedString = decodeBase64(secret)
  console.log('So, I got this:', decodedString)
  console.log('And maybe I need to reverse it.')
  const reversedDecodedString = decodedString.split('').reverse().join('')
  console.log('Yeah!, I got this:', reversedDecodedString)
}

main()