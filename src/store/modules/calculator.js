
// Время по дистанции
function timeByDistance(distance) {
    if (distance < 100) return 24;
    if (distance < 500) return 48;
    return 96;
}

// Цена по дистанции и времени
function priceByDistanceTime(distance, time) {
    return distance * time;
}

export default {
    namespaced: true,
    actions: {
        // Запрашиваю цену (возвращает {result: {distance, time, price}, err: ""})
        calculate(_, {from, to}) {
            return new Promise(resolve => {
                if (from === to) resolve({err: "Вы выбрали одинаковые города"});
                // Типа запрос
                const distances = require("@/config/distances.json");
                const distanceItem = distances.find(distanceItem =>
                    (distanceItem.from === from && distanceItem.to === to) ||
                    (distanceItem.from === to && distanceItem.to === from)
                );
                if (!distanceItem) resolve({err: "Расстояние не найдено"})

                // Если все норм то отдаю результат
                const time = timeByDistance(distanceItem.value);
                const price = priceByDistanceTime(distanceItem.value, time);
                resolve({result: {distance: distanceItem.value, time, price}});
            })
        },
    }
}