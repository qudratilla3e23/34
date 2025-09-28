function hisobla(nomi,narxi){
const nechta=+prompt(nomi+" nechta zakaz qilmoqchisiz! ");
const javob=confirm(nechta +" ta " + nomi +" jami narxi :" +nechta*narxi+ " so'm bo'ladi \n Zakaz qilasizmi");
if(javob==true){
    alert("Zakaz qabul qilindi")
}else{
    alert("Zakz bekor qilindi")
}
}