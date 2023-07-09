Створення проекту:
1. npm init -y (створює в порожній папці проекту package.json)
2. npm i nodemon(пакет для "гарячого перезавантаження") -D (--save dev) - встановлення пакетів для розробки("devDependencies") та продакшену("Dependencies")
3. створення .gitignor (node_modules/ .idea .vscode .env .env.local)
4. прописати script (всі скрипти крім test & start запускаються --> npm run....)

5. підключення модулів CommonJS працює без додаткових налаштувань;
5.1 для підключення модулів згідно стандарту ECMAScript, у файлі package.json --> "type": "module";
5.1.1 !!!при імпорті треба дописувати розширення, vscode не дописує;


