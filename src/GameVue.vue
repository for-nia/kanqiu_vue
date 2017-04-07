<template>
    <div id="app">
       <!-- <h2>This is a grid component built with vue-webpack-simple scaffolding!</h2>
        <div id="searchBar">
            Search <input type="text" v-model="searchQuery" />
        </div>-->
            <li v-for="item in datas">
                <game-grid :data="item" >
                </game-grid>
            </li>
        <!--<button v-on:click="getTest('http://a8.tvesou.com/api/v2/get_game_info?gameId=1497001475326991&leagueId=6&key=evilognuf')">测试请求</button>
        -->
        <button v-on:click="test(1,2,3)">测试请求</button>
    </div>
</template>

<script>
    import gameGrid from './components/GameGrid.vue'

    export default {
        data(){
            /*return {
                datas: [
                    {
                        url:"http://baidu.com",
                        leagueName: "NBA",
                        date: "2017-04-05",
                        homeName: "主队",
                        score: "1:1",
                        guestName: "客队",
                        homeLogo: "http://i1.letvimg.com/lc05_iscms/201703/17/14/00/4d474df84ec847f998167964893a81f1.png",
                        guestLogo: "http://i1.letvimg.com/lc05_iscms/201703/17/14/00/4d474df84ec847f998167964893a81f1.png"
                    },
                    {
                        url:"http://baidu.com",
                        leagueName: "NBA",
                        date: "2017-04-05",
                        homeName: "主队",
                        score: "1:1",
                        guestName: "客队",
                        homeLogo: "http://i1.letvimg.com/lc05_iscms/201703/17/14/00/4d474df84ec847f998167964893a81f1.png",
                        guestLogo: "http://i1.letvimg.com/lc05_iscms/201703/17/14/00/4d474df84ec847f998167964893a81f1.png"
                    },
                    {
                        url:"http://baidu.com",
                        leagueName: "NBA",
                        date: "2017-04-05",
                        homeName: "主队",
                        score: "1:1",
                        guestName: "客队",
                        homeLogo: "http://i1.letvimg.com/lc05_iscms/201703/17/14/00/4d474df84ec847f998167964893a81f1.png",
                        guestLogo: "http://i1.letvimg.com/lc05_iscms/201703/17/14/00/4d474df84ec847f998167964893a81f1.png"
                    }
                ],
            }*/
            return{
                datas:[],
                //api:"http://localhost:8877/gameList"
                api:"http://a8.tvesou.com/api/v2/get_game_info?gameId=1497001475326991&leagueId=6&key=evilognuf'"
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
                console.info("api========="+this.api);
                this.$http.jsonp(this.api).then((response)=>{
                    console.info(response);
                    this.$set('datas',response.data);
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