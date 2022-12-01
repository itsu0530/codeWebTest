const display = document.getElementById('display');

// フォーム取得
let form = document.forms.my; 
 // 要素取得
let names = form.elements.name;
let number = form.elements.number;
let atribute = form.elements.atribute;
let info_type = form.elements.info_type;
let content = form.elements.introduce;
let name_ary = [];
let num_ary = [];
let atr_ary = [];
let info_ary = [];
let cont_ary = [];


name_old =localStorage.getItem('name');
num_old = localStorage.getItem('num');
atr_old = localStorage.getItem('atr');
info_old =localStorage.getItem('info');
cont_old =localStorage.getItem('cont');
if(name_old){
let name_old_ary = name_old.split(',');
let num_old_ary = num_old.split(',');
let atr_old_ary = atr_old.split(',');
let info_old_ary = info_old.split(',');
let cont_old_ary = cont_old.split(',');

name_ary.push(name_old_ary);
num_ary.push(num_old_ary);
atr_ary.push(atr_old_ary);
info_ary.push(info_old_ary);
cont_ary.push(cont_old_ary);

console.log(name_old_ary[0]);
for(let i=0;i<name_old_ary.length;i++){
    let keiji_pre = document.createElement('div');
    display.appendChild(keiji_pre);
    keiji_pre.innerHTML =`
    <h3><span>名前:${name_old_ary[i]}</span>
    <span>学生番号:${num_old_ary[i]}</span></h3>
    <h3>現在私はこのグループに${atr_old_ary[i]}です</h3>
    <h3>形式:${info_old_ary[i]}</h3>
    <h4>内容</h4>
    <p>${cont_old_ary[i]}</p>
    `; 
    console.log('動いてる');
}



console.log(name_old_ary);
console.log(num_old_ary);
console.log(atr_old_ary);
console.log(info_old_ary);
console.log(cont_old_ary);

}


const send = document.getElementById('send');
send.addEventListener('click',()=>{
    /*
    data.push({ nam: names.value,num:number.value,atr:atribute.value,inf:info_type.value,cont:content.value});
    console.log(data);
    data_json = JSON.stringify(data);
    console.log(data_json);
    item_num++;
    localStorage.setItem('item_num',item_num);
    console.log(item_num);
    localStorage.setItem('test'+item_num,data_json);
    */
    name_new = names.value;
    number_new = number.value;
    atr_new = atribute.value;
    info_new = info_type.value;
    cont_new = content.value;
    let keiji = document.createElement('div');
    display.appendChild(keiji);

        keiji.innerHTML = `
        <h3><span>名前:${name_new}</span>
        <span>学生番号:${number_new}</span></h3>
        <h3>私は今このグループに${atr_new}です</h3>
        <h3>形式:${info_new}</h3>
        <h4>内容</h4>
        <span><p>${cont_new}</p></span>
        `;



    name_ary.push(name_new);
    num_ary.push(number_new);
    atr_ary.push(atr_new);
    info_ary.push(info_new);
    cont_ary.push(cont_new);
    
    localStorage.setItem('name',name_ary);
    localStorage.setItem('num',num_ary);
    localStorage.setItem('atr',atr_ary);
    localStorage.setItem('info',info_ary);
    localStorage.setItem('cont',cont_ary);

    console.log(name_ary);
    console.log(num_ary);
    console.log(atr_ary);
    console.log(info_ary);
    console.log(cont_ary);


});




