  export const ipCorrect=(value)=>{
const reg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/
  return reg.test(value)?undefined:'Enter the correct value'
}
export const required = (value) => {
  if (!value) return 'Field is required'
  return undefined
}
export const dnsServer=(value)=>{
  const reg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/
  return reg.test(value)?undefined:'Enter the correct value'
}