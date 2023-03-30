import { createStore } from 'vuex';

import cities from "@/store/modules/cities";
import calculator from "@/store/modules/calculator";

export default createStore({
    modules: {cities, calculator}
})