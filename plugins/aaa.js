import Vue from 'vue'

const bus = {
    install(Vue,options) {
        Vue.prototype.$bus = new Vue()
    }
}
export default () => {
    Vue.use(bus)
}