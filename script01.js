// Задание 1
// Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать.Каждая итерация должна возвращать следующий альбом из коллекции.

// Создайте объект musicCollection, который содержит массив альбомов и имеет свойство - символ Symbol.iterator.

// Каждый альбом имеет следующую структуру:

// {
//     title: "Название альбома",
//         artist: "Исполнитель",
//             year: "Год выпуска"
// }
// Реализуйте кастомный итератор для объекта musicCollection.Итератор должен перебирать альбомы по порядку.

// Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате:

// Название альбома - Исполнитель(Год выпуска)

const musicCollection = [
    {
        title: "Энергия",
        artist: "Группа Алиса",
        year: "1985"
    },
    {
        title: "Through the Never",
        artist: "Metallica",
        year: "2013"
    },
    {
        title: "Let it be",
        artist: "Группа The Beatles",
        year: "1970"
    }
];


musicCollection[Symbol.iterator] = function () {
    return {
        current: 0,
        last: this.length,
        next() {
            return this.current < this.last
                ? { done: false, value: musicCollection[this.current++] }
                : { done: true }
        }
    }
}

for (let element of musicCollection) { 
    console.log(`${element.title} - ${element.artist}(${element.year})`);
}





