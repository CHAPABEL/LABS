export const array = [
  {
    num: "",
    title:
      " Сделайте файл с вашей первой программой. Выведите в ней на экран какой-нибудь текст.",
    action: () => alert("Текст выведен на экран"),
    code: "alert('Текст выведен на экран')",
  },
  {
    num: " ",
    title:
      " Создайте файл со скриптом. Подключите его к вашему HTML файлу. Проверьте его работу.",
    action: () => alert("Скрипт создан"),
    code: "<script src='script.js'> \nalert('Скрипт создан) \n<script>",
  },
  {
    num: " ",
    title:
      "Создайте три файла со скриптами. Подключите их к вашему HTML файлу. Проверьте их работу.",
    action: () => alert("Созданы скрипты"),
    code: "<script src='script.js'> <script> \n<script src='script.js'> <script> \n<script src='script.js'> <script>",
  },
  {
    num: " ",
    title:
      " Исправьте подключение вашего файла так, чтобы после имени файла следовал номер его версии",
    action: () => alert("Ошибка исправлена"),
    code: "<script src='script1.js'> <script> \n<script src='script2.js'> <script> \n<script src='script3.js'> <script>",
  },
  {
    num: " ",
    title:
      " Создайте переменную num и присвойте ей значение 123. Выведите значение этой переменной на экран с помощью функции alert.",
    action: () => alert("123"),
    code: "const a = 123; \nalert(a);",
  },
  {
    num: " ",
    title:
      "Создайте переменную a. Запишите в нее значение 10, выведите его на экран. Затем запишите в нее значение 20, выведите его на экран.",
    action: () => alert("10") & alert("20"),
    code: "let a = 10; \nalert('a'); \nlet a = 20; \nalert('a')",
  },
  {
    num: " ",
    title:
      "Создайте переменную a. Запишите в нее сумму чисел 1, 2 и 3. С помощью функции alert выведите на экран содержимое переменной a.",
    action: () => alert("6"),
    code: "let a = 1 + 2 + 3; \nalert('a');",
  },
  {
    num: " ",
    title:
      " Создайте переменную a со значением 10 и переменную b со значением 2. Выведите на экран их сумму, разность, произведение и частное",
    action: () => alert("12") & alert("8") & alert("5"),
    code: "let a = 10; \nlet b = 2; \nlet sum = a + b; \nlet dif = a - b; \nlet prod = a * b; \nlet quotient = a / b; \nalert(sum); \nalert(dif) \nalert(prod) \nalert(quotient)",
  },
  {
    num: " ",
    title:
      " Создайте переменную c со значением 10 и переменную d со значением 5. Просуммируйте их, а результат присвойте переменной result. Выведите на экран значение переменной result.",
    action: () => alert("15"),
    code: "let c = 10; \nlet d = 5; \nlet res = c + d \balert('res')",
  },
  {
    num: " ",
    title:
      " Создайте переменную a со значением 10 и переменную b со значением 5. Отнимите от a переменную b и результат присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result.",
    action: () => alert("12"),
    code: "let a = 10; \nb = 5; \nlet c = a -b; \nlet res = c + d; \nalert(res)",
  },
  {
    num: " ",
    title:
      " Создайте переменную a со значением -100. Выведите это значение на экран.",
    action: () => alert("-100"),
    code: "let a = -100; \nalert(a);",
  },
  {
    num: " ",
    title:
      " Создайте файл со скриптом. Подключите его к вашему HTML файлу. Проверьте его работу.",
    action: () => alert("Скрипт создан"),
    code: "<script src='script.js'> \nalert('Скрипт создан) \n<script>",
  },
  {
    num: " ",
    title:
      " Создайте переменную a, запишите в нее какое-нибудь положительное или отрицательное число. Выведите на экран это число с обратным знаком.",
    action: () => alert("25"),
    code: "let a = -25; \nalert(-a);",
  },
  {
    num: " ",
    title: " Возведите число 2 в 10-ю степень. Выведите результат на экран.",
    action: () => alert("1024"),
    code: "let res = Math.pow(2,10) \nalert(res);",
  },
  {
    num: " ",
    title:
      " Создайте строку с вашем именем и строку с вашей фамилией. Выведите эти данные на экран.",
    action: () => alert("nik bel"),
    code: "let string = 'nik bel'; ",
  },
  {
    num: " ",
    title:
      " Создайте переменную str и присвойте ей строку '!!!'. Выведите значение этой переменной на экран.",
    action: () => alert("!!!!"),
    code: "let string = '!!!!'; \nalert(string);",
  },
  {
    num: " ",
    title:
      " Создайте переменную с текстом 'java' и переменную с текстом 'script'. С помощью этих переменных и операции сложения строк выведите на экран строку 'javascript'.",
    action: () => alert("javascript"),
    code: "let firstStr = 'java'; \nlet secondStr = 'script'; \nlet sum = firstStr + secondStr; \nalert(sum);",
  },
  {
    num: " ",
    title:
      "Создайте переменную с текстом 'hello' и переменную с текстом 'world'. С помощью этих переменных и операции сложения строк выведите на экран строку 'hello world'",
    action: () => alert("hello world"),
    code: "let firstStr = 'hello'; \nlet secondStr = ' world'; \nlet sum = firstStr + secondStr; \nalert(sum);",
  },
  {
    num: " ",
    title:
      " Запишите в переменную str строку, состоящую из символов 'a', 'b', 'c', причем после каждого символа, кроме последнего, должен стоять переносстроки.",
    action: () => alert("a\nb\nc"),
    code: "let str ='a\\nb\\nc'; \nalert('str');",
  },
];
