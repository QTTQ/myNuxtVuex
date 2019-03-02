<template>
 <div>
      <div>{{$attrs}}</div>
  <attrs1  v-on="$listeners"></attrs1>
 </div>
</template>
<script>
import Attrs1 from "./attrs1.vue";
export default {
  components: {
    Attrs1
  },
  mounted() {
    console.log(this.$attrs, this.$listeners, "---attrs|listeners页面");
  }
};
</script>
