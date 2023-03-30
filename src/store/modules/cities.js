export default {
    namespaced: true,
    state:() => ({
        // Список городов
        cities: null,
    }),
    getters: {
        // Список городов
        getCities: state => state.cities || [],
    },
    mutations: {
        set(state, [namespace, value]) {
            state[namespace] = value;
        }
    },
    actions: {
        // Запрашиваю спиосок городов
        fetchCitiesList({ commit }) {
            // Типа запрос
            const cities = require("@/config/cities.json");
            console.log(cities);
            commit("set", ["cities", cities]);
        },
    }
}