<template>
    <h1>Logout</h1>
</template>

<script>
import { defineComponent } from 'vue'
import router from '../../router/'
export default defineComponent({
    name: "Logout",
    setup() {
        localStorage.removeItem("app_user")
        router.push('/auth/login')
    },
})
</script>
