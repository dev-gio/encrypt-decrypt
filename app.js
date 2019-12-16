const key = CryptoJS.enc.Utf8.parse("93wj660t8fok9jws");
const iv = CryptoJS.enc.Utf8.parse("r0yy7e67p49ee4d7");

const encryptInput = document.querySelector('#encrypt');
const decryptInput = document.querySelector('#decrypt');

const encrypt = (plainText) => {
    return CryptoJS.AES.encrypt(plainText, key, {
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    }).ciphertext.toString(CryptoJS.enc.Base64);
}

const decrypt = (encryptedText) => {
    let cipherParams = CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Base64.parse(encryptedText)
    });
    return CryptoJS.AES.decrypt(cipherParams, key, {
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    }).toString(CryptoJS.enc.Utf8);
}

const textAreaAdjust = (o) => {
    o.style.height = "1px";
    o.style.height = (25 + o.scrollHeight) + "px";
}

document.addEventListener("DOMContentLoaded", () => {
    // Input fields auto adjust
    encryptInput.addEventListener('input', () => textAreaAdjust(encryptInput));
    decryptInput.addEventListener('input', () => textAreaAdjust(decryptInput));

    // Encrypt click event
    document.getElementById("goEncrypt").addEventListener('click', () => {
        let result = document.getElementById('encryptResult');
        result.value = encrypt(encryptInput.value);
        textAreaAdjust(result);
    });

    // Decrypt click event
    document.getElementById("goDecrypt").addEventListener('click', () => {
        let result = document.getElementById('result');
        result.value = decrypt(decryptInput.value);
        textAreaAdjust(result);
    });
});