

//---------------NodeJS İle Consol da Argüman Tanimi(process,npm yargs paketi)-------------------
console.log('Uygulamamiz basliyor...');
const yargs =require('yargs');
const argv = yargs.argv;

//console.log(process.argv);
//console.log(argv);

var komut = process.argv[2];
console.log('komut :' + komut);
console.log('İcerik :' + argv.icerik);

if(komut === 'sil'){
    console.log('bu dosya siliniyor.');
}else if(komut==='kaydet'){
    console.log('dosyaniz kaydedildi.');
}else{
    console.log('komut bulunamadi.');
}



/*

const fs =require('fs');
const os =require('os');
const test =require('./test.js');
const_ = require('lodash');


var donenDeger = test.testFonksiyonu();
console.log(donenDeger);  


console.log(_isString(true));
console.log(_isString(os.userİnfo()));
console.log(_isString(ugur));

var sonHal = _.uniq(['test', 1 , 'test',2, 'test',3]);



var user= os.userInfo();
console.log(user.username); 

fs.appendFileSync('yeniTest.txt', 'Sistem kullanicisinin adi:'+ user.username);

fs.appendFileSync(`yeniTest.txt','Sistem kullanicisinin adi:${user.username}`)
fs.appendFile('test.txt', 'bu bir test dosyasidir.', function(err){
    if(err){
        console.log(err);
    }
    
});
*/