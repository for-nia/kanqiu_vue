<template>
    <a class="game-item" :href="data['url']" target="_blank">
        <div class="game-desc">
            <span>{{data['leagueName']}}</span>
        </div>
        <div class="game-desc">
            <span>{{data['date']}}</span>
        </div>
        <div class="team">
            <img :src="data['homeLogo']"/>
            <span>{{data['homeName']}}</span>
        </div>
        <div class="team">
            <span>{{data['guestName']}}</span>
            <img :src="data['guestLogo']"/>
        </div>
    </a>
</template>

<script>
    export default {
        props: ["data"]
        /*data(){
            /!*return {
                leagueName:"NBA",
                date:"2017-04-05",
                homeName:"主队",
                score:"1:1",
                guestName:"客队"
            }*!/
        }*/
    }
</script>
<style>
    @import url("../assets/game-block.css");
</style>

