<template>
    <div>
        <carousel :perPage="1" :mouseDrag="true" :loop="true" :autoplay="true" :paginationEnabled="false">
            <slide v-for="(slide, index) in slides" :key="index">
                <div class="slider_bck" :style="{'background' : `url(${slide.bck})`}">
                    <div class="container slider-container">
                        <div class="text">
                            {{slide.text}}
                        </div>
                        <div class="image">
                            <img :src="slide.img">
                        </div>
                    </div>
                </div>
            </slide>
        </carousel>
    </div>
</template>


<script>

import { Carousel, Slide } from 'vue-carousel';

import SlideBck from '../../assets/images/products/slide_bck.jpg';
import SlideBck2 from '../../assets/images/products/slide_bck2.jpg';

import PizzaOne from '../../assets/images/products/pizza_one.png';
import PizzaTwo from '../../assets/images/products/pizza_three.png';
export default {
    data(){
        return {
            slides: [
                {
                    text: '20% OFF ON ALL PIZZAS',
                    bck:SlideBck ,
                    img:PizzaOne ,
                },
                {
                    text: 'BUY TWO GET ONE FREE',
                    bck: SlideBck2,
                    img:PizzaTwo ,
                }              
            ]
        }
    },
    components: {
        Carousel,
        Slide
   }
}
</script>
