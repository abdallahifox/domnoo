<template>
    <header>
        <div class="container clear">
            <div class="logo">
                <img :src="Logo" alt="Logo">
            </div>
        </div>
    </header>
</template>

<script>
 import Logo from '../../assets/images/products/logo.png';
export default {
    data(){
        return {
            Logo:Logo,
        }
    }
}
</script>
