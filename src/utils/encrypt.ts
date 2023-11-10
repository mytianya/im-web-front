import {JSEncrypt} from 'jsencrypt'
export  function encrypt(publickey:string,data:string):string|false{
    let encryptor = new JSEncrypt();
    console.log(encryptor)
    encryptor.setPublicKey(publickey);
    return encryptor.encrypt(data)
}