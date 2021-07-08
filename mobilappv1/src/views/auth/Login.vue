<template>
    <div class="center">
        <ion-item class="login-element"> 
            <ion-input placeholder="Email cím"></ion-input>
        </ion-item>
        <ion-item class="login-element"> 
            <ion-input placeholder="Jelszó"></ion-input>
        </ion-item>
         <ion-button @click="storeUser()" expand="block" class="login-element">Bejelentkezés</ion-button>
    </div>
</template>

<script>
import { IonButton, IonItem, IonInput } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Login',
    components: {
        IonButton,
        IonItem,
        IonInput
    },
    methods: {
        storeUser(){
            const user = {
                            'first_name': "valami",
                            'last_name': "akárki",
                            email: "email",
                            token: "random valami",
                            uuid: "szintén random akármi",
                            'partner_name': "partner"
                        }
            localStorage.setItem("app_user",JSON.stringify(user))
            this.$store.user = user
            this.$router.push('/app/controlpanel')
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