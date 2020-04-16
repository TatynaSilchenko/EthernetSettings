  export const ipCorrect=(value)=>{
const reg=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
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