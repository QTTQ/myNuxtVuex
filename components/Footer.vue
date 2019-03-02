<template>
  <div class="VueToNuxtLogo">{{numType}}</div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  computed:{
    ...mapGetters("homePage",["numType"])
  }
}
</script>

<style lang="scss" scoped>
.VueToNuxtLogo {
}
</style>
