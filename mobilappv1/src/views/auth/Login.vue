<template>
    <div class="center">
        <ion-item class="login-element"> 
            <ion-input placeholder="Felhasználónév"></ion-input>
        </ion-item>
        <ion-item class="login-element"> 
            <ion-input placeholder="Jelszó"></ion-input>
        </ion-item>
         <ion-button @click="storeUser()" expand="block" class="login-element">Bejelentkezés</ion-button>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import router from '../../router/'
export default defineComponent({
    name: 'Login',
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
            router.push('/app/controlpanel')
        }
    }
})
</script>

<style scoped>
.login-element{
    max-width: 300px;
    margin: 20px;
}
.center{
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

</style>