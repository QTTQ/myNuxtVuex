<template>
  <div class="layout">
    <Layout class="headerIndex">
      <Header>
        <m-tab :titleText="titleText" :moveTitle="moveDiv"/>
      </Header>
      <Content class="contentIndex">
        <m-content/>
        <div class="clickD" @click="changeDiv">点击变化tab</div>
        <div class="clickD" @click="changePage">跳转第二个主页面</div>
      </Content>
      <button @click="aaaaaaa">aaa{{dataHome.aaa}}</button>
      <Footer class="footerIndex">
        <m-footer/>
      </Footer>
    </Layout>
  </div>
</template>

<script>
import MContent from "~/components/Content.vue";
import MFooter from "~/components/Footer.vue";
import MTab from "~/components/Tab.vue";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  async asyncData({ $axios, store }) {
    // store.dispatch("home1",{"actionsAdd":1})
    store.dispatch("home1/actionsAdd",{aaa:"88888"})
    // let { data } = await $axios.$post(`http://127.0.0.1:8080/AllArticle`, {
    //   page: 1
    // });
    // return { myData: data };
  },
  data: () => {
    return {
      titleText: "index值",
      moveDiv: false
    };
  },
  components: {
    "m-footer": MFooter,
    "m-tab": MTab,
    "m-content": MContent
  },
  computed:{
    ...mapState("home1", ["dataHome"]),
  },
  mounted() {
    this.$bus.$emit("todo", 1);
    console.log(this.myData, "--myData--");
    console.log(this.$store.state.home1.dataHome, "------------da-da---");
  },
  methods: {
    ...mapActions("home1", ["actionsAdd"]),
    aaaaaaa() {
      // this.$store.dispatch("home1",{"actionsAdd":1})
      this.$store.dispatch("home1/actionsAdd", { aaa: "9999" });
      console.log(this.dataHome, "------------da-da---");
    },
    changeDiv() {
      this.moveDiv = !this.moveDiv;
    },
    changePage() {
      this.$router.push({ name: "home1", params: { id: "1" } });
    }
  }
};
</script>

<style lang="scss" scoped>
.contentIndex {
  width: 1200px;
  height: 200px;
  margin: 0 auto;
  .clickD {
    width: 200px;
    height: 100px;
    margin: 10px auto;
    border: 1px solid red;
    background: red;
    text-align: center;
    line-height: 100px;
    /* position: absolute; */
    z-index: 111111;
    display: block;
  }
}

.footerIndex {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: yellow;
  text-align: center;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>