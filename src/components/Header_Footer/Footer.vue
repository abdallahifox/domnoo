<template>
    <Footer>
        <div class="container">
            <img :src="Logo" alt="">
            <div class="contact">
                <div>Call us</div>
                <div>+201013455022</div>
            </div>
        </div>
    </Footer>
</template>



<script>

import Logo from '../../assets/images/products/logo.png';
export default {
    data() {
        return {
            Logo:Logo
        }
    }
}
</script>