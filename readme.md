
Инструменты:

На начальном этапе рекомендую Sublime Text в качестве редактора и Chrome Developer Tools в качестве отладчика.


Задачи:

1. Директива поля для ввода географических координат.
    https://www.maptools.com/tutorials/lat_lon/formats
   Проверку делать через regex (если поискать -наверняка уже подобное есть)

   Подумать как будет выглядеть контрол  - одно поле для ввода или 6 текстбоксов (отдельно для минут, секунд..)

2. Расширение Leaflet.Path до рисования через great-circle
   (за основу брать плагин https://github.com/henrythasler/Leaflet.Geodesic)