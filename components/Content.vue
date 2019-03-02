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
    <div class="btnBox1">
      <div class="btnBox">
        <div class="btn" @click="ADDNUM(1)">点击啊</div>
        <div>点击啊mapState值:{{homeData}}</div>
        <div>mapGetters值:{{numType}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  async mounted() {
    this.$bus.$on("todo", e => {
      console.log(e, "----e------");
    });
    // let { data } = await this.$axios.$post(`http://127.0.0.1:8080/AllArticle`,{page:1});
    // console.log(data, "----data---");
  },
  data: () => {
    return {
      active: 1,
      items: [
        {
          title: "11111",
          url:
            "http://zhwimg.zuhaowan.com/images/game_data_img/2019-01-30/5c51233543815.png",
          url1:
            "http://zhwimg.zuhaowan.com/images/game_data_img/2019-01-30/5c512337f0e96.png"
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
            "http://zhwimg.zuhaowan.com/images/game_data_img/2019-01-30/5c5123c1c842c.png",
          url1:
            "http://zhwimg.zuhaowan.com/images/game_data_img/2019-01-30/5c5123c444e26.png"
        },
        {
          title: "444444",
          url:
            "http://zhwimg.zuhaowan.com/images/game_data_img/2019-01-30/5c512451cf3f1.png",
          url1:
            "http://zhwimg.zuhaowan.com/images/game_data_img/2019-01-30/5c51245476ea3.png"
        }
      ]
    };
  },

  methods: {
    ...mapActions("homePage", ["ADDNUM"]),
    addActive(e) {
      this.active = e;
    }
  },
  watch: {},
  computed: {
    ...mapState("homePage", ["homeData"]),
    ...mapGetters("homePage", ["numType"])
  }
};
</script>

<style lang="scss" scoped>
.VueToNuxtContent {
  display: block;
  /* border: 2px solid yellowgreen; */
  ul {
    height: 200px;
  }
  .btnBox1 {
    margin: 0 auto;
    width: 200px;
    height: 100px;
    .btnBox {
      width: 200px;
      height: 100px;
      background: yellowgreen;
      text-align: center;
      display: table-cell;
      vertical-align: middle;
      margin: 0 auto;
    }
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
    scale: (1);
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
}
.VueToNuxtContent::after {
  content: "";
  clear: both;
}

/* 
    @keyframes turn {
      100% {
        transform: rotateX(0deg);
      }
    }
    @keyframes godown {
      100% {
        top: 180px;
      }
    }
    @keyframes goright {
      100% {
        left: 70px;
      }
    } */
</style>
