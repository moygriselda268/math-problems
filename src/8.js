  import crypto from 'crypto';
  const secretKey = 'mysecretkey';
  function encrypt(text) {
    const cipher = crypto.createCipher('aes-256-cbc', secretKey);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return encrypted.toString('hex');
  }
  
  function decrypt(text) {
    const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
    let decrypted = decipher.update(text, 'hex', 'utf8');
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  }
  
  const encryptedText = encrypt('Hello World!');
  console.log(encryptedText);
  const decryptedText = decrypt(encryptedText);
  console.log(decryptedText);