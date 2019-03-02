import { ADDNUM } from "../constants/index"
const add = async (e) => {
    console.log(e, "--add---")
    return e
}
export default {
    async [ADDNUM]({ commit }, e) {
        commit(ADDNUM, await add(e))
    }
}