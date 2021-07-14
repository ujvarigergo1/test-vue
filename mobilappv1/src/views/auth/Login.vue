<template>
<ion-page>
    <div class="center">
        <ion-item class="login-element"> 
            <ion-input v-model="email" placeholder="Email cím"></ion-input>
        </ion-item>
        <ion-item class="login-element"> 
            <ion-input v-model="password" placeholder="Jelszó" type="password"></ion-input>
        </ion-item>
        <ion-item lines="none" class="login-element">
            <ion-checkbox v-model="checked"/>
            <ion-label> Emlékezz rám</ion-label>
          </ion-item>
         <ion-button :disabled="loginEnabled" @click="storeUser" type="submit" expand="block" class="login-element">Bejelentkezés</ion-button>
    </div>
</ion-page>
</template>

<script>
import { IonButton, IonItem, IonInput, IonPage, IonLabel,IonCheckbox } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Login',
    components: {
        IonButton,
        IonItem,
        IonInput,
        IonPage,
        IonCheckbox,
        IonLabel
    },
    computed:{
        loginEnabled(){
            return !(this.password != '' && this.email != '')
        }
    },
    data: function() {
      return {
        email: this.$store.state.rememberMe,
        password: '',
        checked: this.$store.state.rememberMe != ""
      }
  },
    methods: {
        storeUser(){
            localStorage.setItem("rememberme", this.checked ? this.email : "")
            this.$store.commit('login', {email: this.email, pass: this.password})
        }
    }
})
</script>

<style scoped>
.login-element{
    margin: auto;
    margin-bottom: 20px;
    max-width: 500px;
    
}
.center{
    align-content: center;
    position: absolute;
    left: 5%;
    right: 5%;
    top: 50%;
    margin: auto;
    transform: translateY(-50%);
}

</style>