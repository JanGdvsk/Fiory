
// Выполните задание на языке JavaScript или на любом другом языке программирования. 
// Программа должна получать на вход *.js-файл (пример файла
// https://github.com/SAP-samples/s4hana-ext-deploy-custom-ui/blob/master/webapp/controller/Detail.controller.js)
// На выбор предлагается одно из заданий – более сложное 2a, либо более простое 2b. Листинг программы укажите в поле ответ.
// 2a. Обработать входной файл и вывести на экран наименования функций, у которых есть оператор return. Не учитывать вложенные функции (определенные внутри тела функции в качестве переменных или callback-функций).
// 2b. Обработать входной файл и вывести на экран наименования только тех функций, у которых есть входные параметры, с указанием их количества. Не учитывать вложенные функции (определенные внутри тела функции в качестве переменных или callback-функций).
// Пример вывода для функции _deleteOneEntity: function (sPath, fnSuccess, fnFailed)    :
// _deleteOneEntity : 3

const fs = require('fs');
const fileContent = fs.readFileSync("inc.js", "utf8");
const tempContent = JSON.parse(JSON.stringify(fileContent));
const regular = /(^|\s)\S*?:\s*function\s*\([\sA-Za-z0-9_-]*,[,\sA-Za-z0-9_-]*\)/g;
const regularName = /(^|\s)\S*?:\s*/g;
let finalString = tempContent.match(regular);
finalString.forEach (item => {
   console.log(item.match(regularName) + '  ' +  item.split(',').length);
});
