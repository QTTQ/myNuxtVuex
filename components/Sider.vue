<template>
  <Tree :data="data1" v-bind="$attrs"></Tree>
</template>
<script>
export default {
  props: ["num"],
  inheritAttrs: false,
  data() {
    return {
      data1: [
        {
          title: "parent 1",
          expand: true,
          children: [
            {
              title: "parent 1-1",
              expand: true,
              children: [
                {
                  title: "leaf 1-1-1"
                },
                {
                  title: "leaf 1-1-2"
                }
              ]
            },
            {
              title: "parent 1-2",
              expand: true,
              children: [
                {
                  title: "leaf 1-2-1"
                },
                {
                  title: "leaf 1-2-1"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  mounted() {
    console.log(this.$attrs, "aaaaa");
  }
};
</script>
