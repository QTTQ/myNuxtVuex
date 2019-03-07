import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key:"myTest",
      storage:window.sessionStorage
    })(store)
  })
}





// import createPersistedState from 'vuex-persistedstate'

// export default ({store}) => {
//   window.onNuxtReady(() => {
//     createPersistedState({
      
//       // storage: {
//       //   getItem: key => Cookies.get(key),
//       //   // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
//       //   setItem: (key, value) =>
//       //     Cookies.set(key, value, { expires: 3, secure: true }),
//       //   removeItem: key => Cookies.remove(key),
//       // },
//     })(store)
//   })
// }
