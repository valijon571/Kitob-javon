const CryptoJS = require("crypto-js");

function md5(input) {
  return CryptoJS.MD5(input).toString();
}
export const genereteSign = (method, url, body, secret) => {
  const s = `${method}${url}${body}${secret}`;
  console.log("s===>", s);
  return md5(s);
};
