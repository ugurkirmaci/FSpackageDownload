console.log('Burasi test.js dosyasidir.');
/*
module.exports.testFonksiyonu = function () {
    console.log('test fonksiyonu icerisindeyim.');
    return 'cok guzel oldu.';
}
*/

//ES6- thiskeyword'ü kullanılamıyor onunda yontemi var. 
//ile gelen bir errovfunction ok fonksiyonu var...ex:  =>{} parametre
//degeri

module.exports.testFonksiyonu =() =>{
    console.log('test fonksiyonu icerisindeyim.');
    return 'cok guzel oldu';
}