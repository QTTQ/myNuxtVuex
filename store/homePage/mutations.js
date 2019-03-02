import { ADDNUM } from "../constants/index"

export default {
    [ADDNUM](state, v) {
        console.log("mutations的接收值：：：",state.homeData,v)
        state.homeData += v
    }
}