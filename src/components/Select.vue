<template>
  <div>
    {{head}}
    <div class="select-flex-row">
      <div class="select-container"
        v-on:click="selectThis(1)"
        v-bind:class="{ active: selected == 1 }">
        <h3>1</h3>
        <img :src="'/select-img/'+img1" alt="">
      </div>
      <div class="select-container"
        v-on:click="selectThis(2)"
        v-bind:class="{ active: selected == 2 }">
        <h3>2</h3>
        <img :src="'/select-img/'+img2" alt="">
      </div>
    </div>
    <div class="select-flex-row">
      <div class="select-container"
        v-on:click="selectThis(3)"
        v-bind:class="{ active: selected == 3 }">
        <h3>3</h3>
        <img :src="'/select-img/'+img3" alt="">
      </div>
      <div class="select-container"
        v-on:click="selectThis(4)"
        v-bind:class="{ active: selected == 4 }">
        <h3>4</h3>
        <img :src="'/select-img/'+img4" alt="">
      </div>
    </div>
    <button v-show="selected != 0" v-on:click="$emit('select-clicked', selectedValue)">{{ this.buttonText }}</button>
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
    stepCount: Number
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
.select-flex-row {
  display: flex;
  justify-content: center;
  align-items: center;
}
.select-container {
  height: 100%;
  padding: 24px;
  h3 {
    text-align: center;
    font-size: 20px;
  }
  img {
    align-items: center;
    display: inline-block;
    border-radius: 4px;
  }
}
.active {
  background-color: rgba(0, 255, 0, 0.2);
}
</style>
