<template>
    <div id="app">
            <li v-for="item in datas">
                <game-grid :data="item" >
                </game-grid>
            </li>
    </div>
</template>

<script>
    import gameGrid from './components/GameGrid.vue'
    export default {
        data(){
            return{
                datas:[],
                api:"http://api.007kq.com:8080/game/list"
            }
        },
        components: {
            gameGrid
        },
        ready:function(){
            this.getGameList();
        },
        methods:{
            getGameList:function () {
                this.$http.jsonp(this.api).then((response)=>{
                    console.info(response.data.data);
                    this.$set('datas',response.data.data);
                 }).catch(function (response) {
                     console.error("=============");
                    console.error(response)
                 });
            },
            test:function () {
                var args = Array.prototype.slice.call(arguments);
                args.forEach((arg)=>{
                    console.log(arg);
                })
                console.log(arguments);
                let mid = (a,b) => (c,d)=>{
                    return a+b+c+d;
                };
                console.log(mid(1,2)(1,2));
            }
        }
    }
</script>
<style>
    @import url("./assets/app.css");
</style>
