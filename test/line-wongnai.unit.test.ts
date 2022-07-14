import { encodeBase64, decodeBase64 } from "../src/util"

const testCases = [
  'Join:us:at:LINE:MAN:Wongnai',
  'I:just:want:500:voucher'
]

for (const testCase of testCases) {
  it(`test string "${testCase}" => encode and decode`, async () => {
    const eString = encodeBase64(testCase)
    const dString = decodeBase64(eString)
    
    expect(dString).toBe(testCase)
  })
}