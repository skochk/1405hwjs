console.log('Список резюме кандидатов:');
console.log("номер кандидата, имя, возраст, наличие высшего образования, наличие опыта, о себе");
var arr = [
[1,'Hena', 23, false, false, 'хочу работать'],
[2,'Vitalii Albertovich', 54, true, false,'я дедушка'],
[3, 'Stasik', 11, false, true, 'я виталик из 5б'],
[4, 'Petro', 19, false, true,'Возьмите на работу'],
[5, 'Boris', 29, true, true, 'Я борис']
];

for(let i = 0; i < arr.length; i++){
    for(let j= 0; j < arr.length; j++){
        document.write(arr[i][j] + " ");
    }
    document.write("<br>");
}

document.write('Отбор кандидатов кампутаром: <br>')

for(let k = 0; k < arr.length; k++){

    if(arr[k][2] > 30){
        document.write('Кандидат <strong>' + arr[k][1] + '</strong> Очень старый <br>');
    }else{
        if(arr[k][2] < 18){
            document.write('Кандидат <strong>' + arr[k][1] + '</strong> Очень молод <br>');
        }else{
            if(arr[k][3] == false){
                document.write('Кандидат <strong>' + arr[k][1] + '</strong> Не имеет высшего образования <br>');
            }
            else{
                if(arr[k][4] == false){
                    document.write('Кандидат <strong>' + arr[k][1] + '</strong> Не имеет опыта работы <br>');
                }
                else{
                    document.write('<br><br> <strong> Кандидат на работу найден: </strong> ' + arr[k][1] + '<br> Инфорормация о нем из поля  "О себе:": ' + arr[k][5]);
                }
            }
        }
    }
    
    


}                                                 