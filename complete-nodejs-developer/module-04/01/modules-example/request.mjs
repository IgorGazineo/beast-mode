function encrypt(data) {
  return "encrypted data";
}

export const send = function (url, data) {
  const encryptedData = encrypt(data);

  console.log(`sending ${encryptedData} to ${url}`);
};
