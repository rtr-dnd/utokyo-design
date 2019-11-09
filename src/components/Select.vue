<template>
  <div class="select-view">
    <div class="select-flex-wrapper">
      <div class="select-flex-row">
        <div class="select-container"
          v-on:click="selectThis(1)"
          v-bind:class="{ active: selected == 1 }">
          <!-- <h3>1</h3>  -->
          <img :src="'/select-img/'+img1" alt="">
        </div>
        <div class="select-container"
          v-on:click="selectThis(2)"
          v-bind:class="{ active: selected == 2 }">
          <!-- <h3>2</h3>  -->
          <img :src="'/select-img/'+img2" alt="">
        </div>
      </div>
      <div class="select-flex-row">
        <div class="select-container"
          v-on:click="selectThis(3)"
          v-bind:class="{ active: selected == 3 }">
          <!-- <h3>1</h3>  -->
          <img :src="'/select-img/'+img3" alt="">
        </div>
        <div class="select-container"
          v-on:click="selectThis(4)"
          v-bind:class="{ active: selected == 4 }">
          <!-- <h3>1</h3>  -->
          <img :src="'/select-img/'+img4" alt="">
        </div>
      </div>
    </div>
    <div class="header">
      <div class="flex-expand"></div>
      {{head}}
      <h3>{{question}}</h3>
      <div class="next-button" v-bind:class="{btnactive: selected != 0}" v-on:click="$emit('select-clicked', selectedValue)">{{ this.buttonText }}</div>
      <div class="flex-expand"></div>
      <div class="footer">
        ©東京大学 グラフィックデザイン概論 「伝える」を考える
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    img1: String,
    img2: String,
    img3: String,
    img4: String,
    values: Array,
    step: Number,
    stepCount: Number,
    question: String
  },
  data: function() {
    return {
      selected: 0,
      selectedValue: []
    }
  },
  methods: {
    selectThis: function(i) {
      this.selected = i;
      this.selectedValue = this.values[i-1];
    }
  },
  computed: {
    buttonText: function() {
      if(this.step == this.stepCount) {
        return "診断結果を表示";
      } else {
        return "次へ";
      }
    },
    head: function() {
      if(this.step == this.stepCount) {
        return "最後のステップ";
      } else {
        return "ステップ" + this.step + "/" + this.stepCount;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.select-view {
  display: flex;
}
.select-flex-row {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
}
.select-flex-wrapper {
  flex-grow: 1;
}
.select-container {
  box-sizing: border-box;
  height: 100%;
  padding: 16px;
  border-radius: 8px;
  width: 50%;
  h3 {
    text-align: center;
    font-size: 20px;
    margin: 4px 0;
  }
  img {
    align-items: center;
    display: inline-block;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.header {
  width: calc(30vw - 64px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 32px;
}
.flex-expand {
  flex-grow: 1;
}
.active {
  background-color: rgba(238,123,80, 0.2);
  border: 2px solid;
  border-color: rgba(238,123,80, 1);
}

.next-button {
  background-color: rgba(238,123,80, 0.3);
  display: block;
  border-radius: 4px;
  color: #fff;
  padding: 16px 32px;
  margin-top: 24px;
  font-size: 1.3em;
  width: 200px;
}
.btnactive {
  background-color: #EE7B50;
}
.footer {
  padding: 32px 0;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  left: 0;
  right: 0;
}
</style>
