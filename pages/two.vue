<template>
  <div class="layout">
    <Layout class="headerIndex">
      <Header>
        <m-tab aaa="params"/>
      </Header>
      <Content class="contentIndex">
        <m-content-two/>
      </Content>
      <Footer class="footerIndex">
        <m-footer/>
      </Footer>
    </Layout>
  </div>
</template>

<script>
import MContentTwo from "~/components/ContentTwo.vue";
import MFooter from "~/components/Footer.vue";
import MTab from "~/components/Tab.vue";
export default {
  components: {
    "m-footer": MFooter,
    "m-tab": MTab,
    "m-content-two": MContentTwo
  },
  props: ["params"]
};
</script>

<style lang="scss" scoped>
.headerIndex {
  .contentIndex {
    width: 1200px;
    margin: 0 auto;
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
    font-family: "Quicksand", "Source Sans Pro", -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
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
}
</style>