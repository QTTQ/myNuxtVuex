<template>
  <div class="VueToNuxtTab">
    <!-- {{titleText}}{{$route.params.title||"index"}}页{{title}}面{{moveTitle?"点击了":"没点击"}} -->
    <attrs v-bind="$data"></attrs>
  </div>
  <!-- <div v-if="moveDiv">哈哈哈</div> -->
  <!-- <div class="VueToNuxtTab">{{title||"index"}}页面</div> -->
  <!-- <div class="VueToNuxtTab">
  {{$route.params.title||"index"}}页面
  </div>-->
</template>
<script>
import Attrs from "./attrs";
export default {
  // data: () => ({ title: "tab" }),
  // props: ["titleText", "moveTitle"],
  inheritAttrs: false,
  data() {
    return {
      aaaBa: {
        aaaa: 1
      }
    };
  },
  mounted() {
    console.log(this)
  },
  components: {
    Attrs
  },
  computed: {
    title() {
      return this.$route.params.title;
    },
    changeClick() {
      console.log(this.moveTitle, "----this.moveTitle----");
      return this.moveTitle;
    }
  }
};
</script>

<style>
.VueToNuxtTab {
  color: white;
  text-align: center;
}
</style>
