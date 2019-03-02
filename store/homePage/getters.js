
export default {
    numType(state, v) {
        console.log(state.homeData % 2 == 0 ? '偶数' : '奇数');
        return state.homeData % 2 == 0 ? '偶数' : '奇数'
    }
}
