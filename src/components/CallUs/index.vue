<template>
    <div class="call_us_container">
        <div class="container">
            <div class="first" v-scroll-reveal.reset="{delay:200,scarle:2}">
                <h1>Hungry?</h1>
            </div>
            <div class="second" v-scroll-reveal.reset="{delay:300,afterReveal:()=>{
                secondAnim=true
                }}" >
                <div v-if="secondAnim">
                 <Anim/>                   
                </div>
            </div>
        </div>
        <div class="third" v-scroll-reveal.reset="{delay:600,scarle:2}">
            <span>Give Us a Call </span> <span>6666-3399</span>
        </div>
    </div>
</template>


<script>
import Anim from './anim'
export default {
    data() {
        return {
            secondAnim: false
        }
    },

    components:{
        Anim
    }
}
</script>