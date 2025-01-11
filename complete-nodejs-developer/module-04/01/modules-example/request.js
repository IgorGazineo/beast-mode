function encrypt(data) {
  return "encrypted data";
}

exports.send = function (url, data) {
  const encryptedData = encrypt(data);

  console.log(`sending ${encryptedData} to ${url}`);
};
