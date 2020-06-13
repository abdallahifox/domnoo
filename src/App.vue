<template>
  <div>
    <Header/>
      <div>
        <Slider/>
        <Menu/>
        <CallUs/>
        <NewLetter/>
      </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header_Footer/Header'
import Footer from './components/Header_Footer/Footer'
import Slider from './components/Slider/index'
import Menu from './components/Menu/index'
import CallUs from './components/CallUs/index'
import NewLetter from './components/NewsLetter/index'


export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Slider,
    Menu,
    CallUs,
    NewLetter
  }
}
</script>


<style>
  @import './assets/css/style.css';
</style>

