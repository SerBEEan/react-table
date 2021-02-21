# Тестовое задание на React
Приложение для вывода, полученных по запросу данных, в таблицу:

## Запуск
Клонировать репозиторий
```
git clone https://github.com/SerBEEan/react-task.git
```
\
Без использования Docker:
```
npm install && npm run start
```
\
С использованием Docker:
```
docker-compose build && docker-compose up
```
\
\
Открыть на `localhost:3000`

## Описание
При запуске приложения, появляются кнопки выбора размера данных.

![Две кнопки](http://najivka.mati.su/www/cash/react-task-images/1.PNG)

После выбора размера данных, открывается таблица:

![Пример таблицы](http://najivka.mati.su/www/cash/react-task-images/2.PNG)

__Возможности:__

- Добавить строку

![Пример формы добавления](http://najivka.mati.su/www/cash/react-task-images/3.PNG)

При правильном вводе:\
![Пример успешной валидации полей](http://najivka.mati.su/www/cash/react-task-images/4.PNG) \
Иначе, неправильно заполненные поля формы, выделяются красным. При клике на кнопку "Добавить" и пустой форме, все пустые поля также выделяются красным.

__Валидация полей формы__
\
_id_ --- только числа (дает писать только числа) \
_firstName_, _lastName_ --- только буквы \
_email_ --- буквы, числа и символы "@" "_" "-" "." \
_phone_ --- только в формате `(555)555-5555`

- Поиск

![Пример поиска](http://najivka.mati.su/www/cash/react-task-images/5.PNG)

- Переход по страницам (максимум на странице 50 строк)

![Пример кнопок перехода по страницам](http://najivka.mati.su/www/cash/react-task-images/6.PNG)

- Вывод подробной информации (при клике на строку)

![Пример вывода](http://najivka.mati.su/www/cash/react-task-images/7.PNG)

## Технологии
- ReactJS (create-react-app)
- axios
