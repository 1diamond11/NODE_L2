const os = require('os');
require('dotenv').config();

function getOSInfo() {
    console.log("Платформа:", os.platform());
    console.log("Свободная память (MB):", os.freemem() / 1024 / 1024);
    console.log("Главная директория:", os.homedir());
    console.log("Имя ПК:", os.hostname());
    console.log("Сетевые интерфейсы:", os.networkInterfaces());
}

function checkMemory() {
    return os.freemem() > 4 * 1024 * 1024 * 1024; 
}

function main() {
    if (process.env.MODE === "admin") {
        getOSInfo();
        console.log("Достаточно ли памяти:", checkMemory());
    } else {
        console.log("Доступ запрещен. Измени MODE в .env на 'admin'.");
    }
}

main();
