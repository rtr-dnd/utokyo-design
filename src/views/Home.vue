<template>
  <div class="home">
    <div class="title-section">
      <h2>1. おもいやる</h2>
      <h1>デザイン年齢診断</h1>
    </div>
    <div class="home-desc">
      実はあなたもターゲットになっているのです。<br>
      これに答えてそれを確かめましょう。
      <router-link to="/check">
        <div class="next-button">
          やってみる
        </div>
      </router-link>
    </div>
    
    <div class="footer">
      ©東京大学 グラフィックデザイン概論 「伝える」を考える
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
  .home {
    padding: 120px;
  }
  .title-section {
    position: absolute;
    top: 20vh;
    width: 100%;
    left: 0;
  }
  h2 {
    font-size: 1.3em;
    color: #EE7B50;
  }
  h1 {
    margin-top: 24px;
  }
  .home-desc {
    position: absolute;
    line-height: 1.8em;
    top: 43vh;
    width: 100%;
    left: 0;
  }
  a {
    display: block;
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
