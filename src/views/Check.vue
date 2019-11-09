<template>
  <div>
    <Select
      question="行きたい旅行はどれ？"
      img1="logo.png"
      img2="logo.png"
      img3="logo.png"
      img4="logo.png"
      :values="[[65,0.7,50],[25,0.8,90],[40,0.5,50],[20,0.7,50]]"
      :step="1"
      v-show="currentStep == 1"
      :stepCount="this.steps"
      v-on:select-clicked="selectClicked"
    ></Select>
    <Select
      question="ほしい車はどれ？"
      img1="logo.png"
      img2="logo.png"
      img3="logo.png"
      img4="logo.png"
      :values="[[50,0.8,10],[30,0.6,10],[20,0.8,90],[40,0.4,80]]"
      :step="2"
      v-show="currentStep == 2"
      :stepCount="this.steps"
      v-on:select-clicked="selectClicked"
    ></Select>
    <Select
      question="食べたいのはどれ？"
      img1="logo.png"
      img2="logo.png"
      img3="logo.png"
      img4="logo.png"
      :values="[[15,0.5,50],[20,0.3,90],[40,0.5,20],[50,0.5,70]]"
      :step="3"
      v-show="currentStep == 3"
      :stepCount="this.steps"
      v-on:select-clicked="selectClicked"
    ></Select>
    <Select
      question="通いたい習い事はどれ？"
      img1="logo.png"
      img2="logo.png"
      img3="logo.png"
      img4="logo.png"
      :values="[[50,0.5,30],[10,0.9,10],[25,0.7,90],[40,0.7,10]]"
      :step="4"
      v-show="currentStep == 4"
      :stepCount="this.steps"
      v-on:select-clicked="selectClicked"
    ></Select>
    <Select
      question="飲みたいのはどれ？"
      img1="logo.png"
      img2="logo.png"
      img3="logo.png"
      img4="logo.png"
      :values="[[17,0.9,40],[50,0.5,20],[15,0.9,90],[45,0.5,10]]"
      :step="5"
      v-show="currentStep == 5"
      :stepCount="this.steps"
      v-on:select-clicked="selectClicked"
    ></Select>
    <section class="select-view result" v-show="currentStep == steps + 1">
      あなたの結果は {{ Math.round(age) }} 歳 <br />
      確信度 {{ confidence }} <br />
      女性的度 {{ feminine }} % <br />
      次は、お題に沿って回答してみましょう。
      <router-link to="/try">
        <div class="next-button">
          次へ
        </div>
      </router-link>
    </section>
    <div id="nav" v-show="currentStep != steps + 1">
      <router-link to="/">最初からやりなおす</router-link>
    </div>
    <div class="footer" v-show="currentStep == steps + 1">
      ©東京大学 グラフィックデザイン概論 「伝える」を考える
    </div>
  </div>
</template>

<script>
// 渡すprops: [target, weight, feminine]
import Select from "@/components/Select.vue";
export default {
  name: "Check",
  components: {
    Select
  },
  data: function() {
    return {
      age: 30,
      confidence: 0,
      feminine: [],
      steps: 5,
      currentStep: 1
    };
  },
  methods: {
    selectClicked: function(e) {
      // confidence
      this.confidence += Math.abs(e[0] - this.age);
      
      // age （修正後の年齢）=（修正前の年齢）+【［（修正前の年齢）-（ターゲット年齢）］×（重み）】
      this.age += (e[0] - this.age) * e[1];

      // feminineness
      if (this.currentStep == this.steps) {
        var feminineSum = 0;
        this.feminine.forEach(function(element) {
          feminineSum += element;
        });
        this.feminine = feminineSum / this.feminine.length;
        this.currentStep += 1;
      } else {
        this.feminine.push(e[2]);
        this.currentStep += 1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.select-view {
  box-sizing: border-box;
  padding: 32px;
  height: 100vh;
}
  .next-button {
    background-color: #EE7B50;
    display: inline-block;
    border-radius: 4px;
    color: #fff;
    padding: 16px 32px;
    margin: 72px;
    font-size: 1.3em;
  }
  a {
    display: block;
  }
  .footer {
    position: absolute;
    bottom: 0;
    padding: 32px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    left: 0;
    right: 0;
  }
</style>