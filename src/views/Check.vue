<template>
  <div>
    診断ページです
    <Select
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
      あなたの結果は {{ age }} 歳 <br />
      確信度 {{ confidence }} <br />
      女性的度 {{ feminine }} % <br />
      次は、お題に沿って回答してみましょう。
      <router-link to="/try">Try</router-link>
    </section>
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
      this.confidence += Math.abs(this.age - e[0]);
      
      // age （修正後の年齢）=（修正前の年齢）+【［（修正前の年齢）-（ターゲット年齢）］×（重み）】
      this.age += (this.age - e[0]) * e[1];

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