<template>
  <div class="layout">
    <!-- <Layout class="headerHome1">
      <Header>
        <m-tab :titleText="titleText" :moveTitle="moveDiv"/>
      </Header>
      <Content class="contentHome1">
        <m-content/>
      </Content>
      <Footer class="footerHome1">
        <m-footer/>
      </Footer>
    </Layout>-->
    <Layout>
      <Header>
        <m-tab :titleText="titleText" :moveTitle="moveDiv" :mdata="1" @cccc="cccc"/>
      </Header>
      <Layout>
        <Sider class="siderStyle" hide-trigger>
          <m-sider :num="111" :num1="112" :num2="113"/>
        </Sider>
        <Content @click="aaaa">
          <m-slot v-on="$listeners">
            <!-- {{slotText}} -->
            <!-- <span slot="header">hello world-1</span> -->
            <!-- <span>aaaa</span>
            <span class="aaa" slot="main">hello world-2</span>-->
            <span slot="footer">hello world-3</span>
            <template slot-scope="props">
              <li>{{props.value}}</li>
            </template>
          </m-slot>
          <!-- <m-slot></m-slot> -->
          <button @click="changeSlot">改变slot</button>
          <button @click="aaaa">aaa</button>
        </Content>
      </Layout>
      <Footer class="layout-footer-center">{{moveDiv?"AAAA":"BBBB"}}</Footer>
    </Layout>
  </div>
</template>

<script>
import MContent from "~/components/Content.vue";
import MFooter from "~/components/Footer.vue";
import MTab from "~/components/Tab.vue";
import MSider from "~/components/Sider.vue";
import Mslot from "~/components/Mslot.vue";

export default {
  async asyncData({ $axios }) {
    // let { data } = await $axios.$post(`http://127.0.0.1:8080/AllArticle`, {
    //   page: 1
    // });
    // return { myData: data };
  },
  data: () => {
    return {
      bbb: "bbb",
      titleText: "home1值",
      moveDiv: false,
      slotText: "这是外边slot值"
    };
  },
  components: {
    "m-footer": MFooter,
    "m-tab": MTab,
    "m-content": MContent,
    "m-sider": MSider,
    "m-slot": Mslot
  },
  mounted() {
    console.log(this.myData, this.$listeners, "----myData--home1-");
  },
  methods: {
    changeSlot() {
      this.slotText = "";
    },
    aaaa() {
      console.log("aaaa");
    },
    cccc() {
      console.log("cccc");
    }
  }
};
</script>

<style lang="scss" scoped>
.aaa {
  color: red;
}
.siderStyle {
  background: white;
}
.contentHome1 {
  width: 1200px;
  height: 500px;
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

.footerHome1 {
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
.layout-footer-center {
  text-align: center;
}
//固定底部
.layout-footer-center {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: red;
}
</style>