<template>
    <div>
        診断ページです
        <Select></Select>
        <button v-on:click="add">年齢</button>
        <section class="result">
            あなたの結果は {{ age }} 歳
            女性的度 {{ feminine }} %
        </section>
        <section class="to-try">
            次は、お題に沿って回答してみましょう。
            <router-link to="/try">Try</router-link>
        </section>
    </div>
</template>

<script>
import Select from '@/components/Select.vue'
export default {
    name: 'Check',
    components: {
        Select
    },
    data: function(){
        return {
            age: 30,
            feminine: 50
        }
    },
    methods: {
        add: function() {
            this.age += 10;
        }
    }
}
</script>