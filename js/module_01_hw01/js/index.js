const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = '1';

let loginLog = null;
let loginPass = null;
let cancelAutorization = 'Відхилено користувачем';
let accessDenied = 'Доступ заборонено!';
let accessGranted = 'Доброго дня!';

let login = prompt('Введіть логін:');
switch(login) {
    case null:
        alert(cancelAutorization);
        loginLog = cancelAutorization;
        break;
    case ADMIN_LOGIN:
        let password = prompt('Введіть пароль');
        switch (password) {
            case null:
                alert(cancelAutorization);
                loginPass = cancelAutorization;
                break;
            case ADMIN_PASSWORD:
                alert(accessGranted);
                loginPass = 'True';
                break;
            default:
                alert(accessDenied);
                loginPass = accessDenied;
                break;
        }
        loginLog = 'True';
        break;
    default:
        alert(accessDenied);
        loginLog = accessDenied;
        break;
}
console.log(`Логін: ${loginLog}; Пароль: ${loginPass};`);