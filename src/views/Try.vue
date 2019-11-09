<template>
  <div>
    <div
        class="intro"
        v-show="currentStep == 0">
        次はこの目標に沿ってやってみましょう
        ○歳　女性
        <button v-on:click="currentStep += 1">開始</button>
    </div>
    <div
        class="game-status"
        v-show="currentStep != 0 && currentStep != steps + 1">
        目標：○歳　女性 <br>
        現在：{{Math.round(age)}} 歳 {{currentIsFeminine}}
    </div>
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
    <section class="result" v-show="currentStep == steps + 1">
      結果は {{ Math.round(age) }} 歳 <br />
      確信度 {{ confidence }} <br />
      女性的度 {{ feminineRes }} % <br />
      <router-link to="/">最初に戻る</router-link>
    </section>
    <div id="nav" v-show="currentStep != steps + 1">
      <router-link to="/">最初からやりなおす</router-link>
    </div>
  </div>
</template>

<script>
// 渡すprops: [target, weight, feminine]
import Select from "@/components/Select.vue";
export default {
  name: "Try",
  components: {
    Select
  },
  data: function() {
    return {
      age: 30,
      confidence: 0,
      feminine: [],
      steps: 5,
      currentStep: 0,
      feminineRes: 0
    };
  },
  computed: {
    currentIsFeminine: function() {
      var feminineSum = 0;
      this.feminine.forEach(function(element) {
        feminineSum += element;
      });
      if (feminineSum / this.currentStep > 50) {
        return '女性';
      } else {
        return '男性';
      }
    }
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
        this.feminineRes = feminineSum / this.feminine.length;
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
  .game-status {
    position: absolute;
    top: 20vh;
    right: 64px;
    width: calc(30vw - 64px);
  }
</style>