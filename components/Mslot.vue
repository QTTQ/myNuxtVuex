<template>
  <div class="mslot">
    <!-- <slot name="header">这是拥有命名的slot的默认内容</slot>
    <slot name="main">这是拥有命名的slot的默认内容</slot>-->
    <slot name="footer">这是拥有命名的slot的默认内容</slot>
    <ul>
      <slot v-for="value in list" :value="value">//使用slot占位</slot>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data: () => ({ value: "这是默认slot值", list: [1, 2, 3, 4] }),
  computed: {
    ...mapGetters("homePage", ["numType"])
  },
  mounted() {
    this.$emit("aaaa");
  }
};
</script>

<style lang="scss" scoped>
.VueToNuxtLogo {
}
</style>
