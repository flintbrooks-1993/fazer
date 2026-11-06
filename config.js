// Конфигурация режима работы программы.
// Этот файл — единственное, что отличает офлайн-версию от онлайн.
//
//   Офлайн (с диска):  оставить адрес пустым ('') — база из Excel-файлов/кэша.
//
//   Онлайн, тип бэкенда определяется по адресу автоматически:
//     • Google Apps Script — ссылка вида …/exec (общая база без входа,
//       см. online/КАК_ПОДКЛЮЧИТЬ_ОНЛАЙН.txt):
//         window.EC_API = 'https://script.google.com/macros/s/XXXX/exec';
//     • PHP-API — папка 'api' на своём хостинге (личные базы со входом):
//         window.EC_API = 'api';
//
// Сам index.html при этом НЕ меняется — он один и тот же для всех вариантов.
// Альтернатива без правки файла: открыть программу со ссылкой ?api=ВАШ_URL

window.EC_API = 'https://script.google.com/macros/s/AKfycbwCEMhIl4IglfjFeRlSfLcLu_sJCZzWMLkaZKHIyHiciiDuLgf5QEBYqg0XuDB4aE1z1g/exec';
