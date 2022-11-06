# registration--comments--spam-filter
week17 tasks 1,2
1. Сделайте интерфейс преобразования ФИО на три поля (input). Учтите, пожалуйста, все нюансы - лишние пробелы, отсутствие больших букв в именах и пр. Результат должен получиться идеальным. Например, было введено пользователем *"   Цветкова алиса АлександровНА  "*, а стало три поля: 
    
    Имя: *Алиса*, Фамилия: *Цветкова*, Отчество: *Александровна*
    
2. Сделайте интерфейс для анонимных комментариев со спамфильтром. Пример:
    
    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/484fad46-f76e-44ff-9fe0-5af1dcec1600/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/484fad46-f76e-44ff-9fe0-5af1dcec1600/Untitled.png)
    
    Необходимо реализовать отображение и добавление сообщений, а также функцию `checkSpam(str)`, заменяющую `'viagra'` или `'XXX'` на `***`
    
    Функция должна быть нечувствительна к регистру:
    
    ```jsx
    let comment1 = checkSpam('buy ViAgRA now'); //результат buy *** now
    let comment2 = checkSpam('free xxx'); //результат free ***
    let comment3 = checkSpam("innocent rabbit") ; //результат innocent rabbit
    ```
    
    *Подсказка: используйте пример с todo листом из групповой встречи видео* [https://youtu.be/twnaPPJbBLc?t=2667](https://youtu.be/twnaPPJbBLc?t=2667)