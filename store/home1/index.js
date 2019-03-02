import { ADDNUM1 } from "../constants/index"
// const state = {
	// data: {}
// }
const state=() => ({
	dataHome: {}
})
const add = async (e) => {
    console.log(e, "--add---")
    return e
}
const actions = {
   async actionsAdd({ commit }, e) {
        commit(ADDNUM1, await add(e))
    }
}
const mutations = {
    [ADDNUM1](state, e) {
        state.dataHome = null
        state.dataHome = e
    }
}

export default {
    actions, state, mutations
}