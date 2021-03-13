// В поле Ответ укажите URL HTTP-запроса, удовлетворяющего условию задания.
// Задание: Используя документацию к oData https://www.odata.org/documentation/odata-version-2-0/,
// составьте запрос к сервису https://services.odata.org/V2/Northwind/Northwind.svc/,
// который выводит в формате json всех клиентов (Customer) из Берлина и их заказы (Orders).
// Выводить нужно только поля CustomerID, CompanyName и City для клиента и OrderId, OrderDate для заказа.
const OData = require('qeti/simple-podata');
const Query = 'https://services.odata.org/V2/Northwind/Northwind.svc/api1/sampledb/collections/CustomerID/CompanyName/City(Berlin)';
OData.read(Query, success, error);
