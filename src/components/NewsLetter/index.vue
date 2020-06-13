<template>
    <div class="container newsl_container">
        <h2>Join to our newsLetter</h2>
        <div class="form">
            <input type="text" v-model="FormData">
            <button @click="SubmitHandler">Subscribe</button>
        </div>
        <div class="error_lable">
            <div>
                {{ErrorLable}}
            </div>
        </div>
        <div class="success_lable">
            <div>
              {{SuccessLable}}
            </div>
        </div>
        <div class="small">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, voluptate! Sint atque animi dolore illum voluptate officiis maiores praesentium neque sit amet rerum delectus laudantium sunt ipsa deleniti, sed dicta?</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            FormData: '',
            ErrorLable: '',
            SuccessLable: '',
        }
    },
    methods:{
        SubmitHandler(){
            let valid = this.validate(this.FormData);

            if (valid[0]) {
                this.ErrorLable = ''
            } else {
                this.ErrorLable = valid[1]               
            }
        },        
        validate(FormData) {
           let valid = [true,'']  ;
            if (!/\S+@\S+\.\S+/.test(FormData)) {
                valid = [false, 'Enter a Valid Email']
            }
            
            if (this.FormData === '') {
                valid = [false, 'it cant be Empty']
            }  
            return valid

                
            }
        
    }
}    
</script>

<style scoped>
.error_lable div {
    text-align: center;
    color: red;
    margin-top: 25px;
    font-weight: bold; 
}
</style>
