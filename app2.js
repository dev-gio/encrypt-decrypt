/*-----------------------------------------------
| Unused - updated js file is on app.js
| Optimized and removed the use of jQuery
|----------------------------------------------*/

$(document).ready(function () {
  $('#goEncrypt').on('click', function () {
    var toBeEncrypted = $('#encrypt').val();
    var encrypted = encrypt(toBeEncrypted);
    $('#encryptResult').val(encrypted);
    var o = document.getElementById('encryptResult');
    textAreaAdjust(o);
  });

  $('#goDecrypt').on('click', function () {
    var toBeDecrypted = $('#decrypt').val();
    var decrypted = decrypt(toBeDecrypted);
    $('#result').val(decrypted);
    var o = document.getElementById('result');
    textAreaAdjust(o);
  });

  $('#encrypt').on('change keyup keydown paste cut', function () {
    textAreaAdjust(this);
  });

  $('#decrypt').on('change keyup keydown paste cut', function () {
    textAreaAdjust(this);
  });
});

function textAreaAdjust(o) {
  o.style.height = "1px";
  o.style.height = (25 + o.scrollHeight) + "px";
}

var key = CryptoJS.enc.Utf8.parse("93wj660t8fok9jws");
var iv = CryptoJS.enc.Utf8.parse("r0yy7e67p49ee4d7");

function encrypt(plainText) {
  return CryptoJS.AES.encrypt(plainText, key, {
    iv: iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
  }).ciphertext.toString(CryptoJS.enc.Base64);
}

function decrypt(encryptedText) {
  var cipherParams = CryptoJS.lib.CipherParams.create({
    ciphertext: CryptoJS.enc.Base64.parse(encryptedText)
  });
  return CryptoJS.AES.decrypt(cipherParams, key, {
    iv: iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
  }).toString(CryptoJS.enc.Utf8);
}