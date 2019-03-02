<template>
  <div class="VueToNuxtContent">
    <ul>
      <li
        v-for="item,i in items"
        :style="{background: `url(${item.url}) no-repeat`}"
        :class="active===(1+i)?'contentDetail active':'contentDetail'"
        @mouseenter="addActive(i+1)"
      >
        <nuxt-link :to="{name:'two',params:{title:'two'},query:{id:i}}">
          <div class="contentDetailSmallImg" :style="{background: `url(${item.url1}) no-repeat`}"></div>
          <div class="contentDetailDiv">{{item.title}}</div>
        </nuxt-link>
      </li>
    </ul>
    <div>aaaa{{title}}aaaa</div>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    // let { data } = await $axios.get(`/index.html`);
    // return { title: "data" };
  },
  // async asyncData({ req, res }) {
  //   // 请检查您是否在服务器端
  //   // 使用 req 和 res
  //   console.log(req,"---------req--");
  //   if (process.server) {
  //     return { host: req.headers.host };
  //   }
  //   return { host: "bbbbb" };
  // },
  data: () => {
    return {
      active: 1,
      // host:"1111",
      items: [
        {
          title: "11111",
          url:
            "http://zhwimg.zuhaowan.com/images/game_data_img/2019-01-30/5c51233543815.png",
          url1:
            "http://zhwimg.zuhaowan.com/images/game_data_img/2019-01-30/5c51238a4d4c1.png"
        },
        {
          title: "22222",
          url:
            "http://zhwimg.zuhaowan.com/images/game_data_img/2019-01-30/5c512387715fc.png",
          url1:
            "http://zhwimg.zuhaowan.com/images/game_data_img/2019-01-30/5c51238a4d4c1.png"
        },
        {
          title: "33333",
          url:
            "http://zhwimg.zuhaowan.com/images/game_data_img/2019-01-30/5c512387715fc.png",
          url1:
            "http://zhwimg.zuhaowan.com/images/game_data_img/2019-01-30/5c51238a4d4c1.png"
        },
        {
          title: "444444",
          url:
            "http://zhwimg.zuhaowan.com/images/game_data_img/2019-01-30/5c512387715fc.png",
          url1:
            "http://zhwimg.zuhaowan.com/images/game_data_img/2019-01-30/5c51238a4d4c1.png"
        }
      ]
    };
  },
  methods: {
    addActive(e) {
      this.active = e;
    }
  }
};
</script>

<style lang="scss" scoped>
.VueToNuxtContent {
  display: block;
  /* border: 2px solid yellowgreen; */
}
.contentDetail.active {
  float: left;
  width: 450px;
  height: 200px;
  box-shadow: none;
  overflow: visible;
}
.contentDetail.active .contentDetailSmallImg {
  position: absolute;
  right: 0;
  overflow: hidden;
  width: 298px;
  height: 200px;
}
.contentDetail {
  width: 250px;
  height: 200px;
  float: left;
  position: relative;
  transition: all 0.6s ease-out;
  overflow: hidden;
  list-style: none;
}
.contentDetailSmallImg {
  /* background: url("http://zhwimg.zuhaowan.com/images/game_data_img/2019-01-30/5c51238a4d4c1.png")
    no-repeat; */
  height: 100px;
  scale: (0.5);
  position: absolute;
  right: 20px;
  bottom: 0;
  width: 400px;
  transition: all 0.6s ease-out;
}
.contentDetail.active .contentDetailDiv {
  height: 40px;
}
.contentDetailDiv {
  height: 0px;
  position: absolute;
  width: 100%;
  bottom: 0;
  background: #ccc;
}
</style>
