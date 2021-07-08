<template>
<ion-page>
    <ion-grid>
        <ion-row v-for="i in (this.cards.length-this.cards.length % 2) / 2 +1" :key="i">
            <ion-col v-for="item in this.cards.slice((i-1)*2,(i-1)*2+2)" :key="item" size="6">
                <DashboardCard :subheader="item.subheader" :header="item.header"
                     :computedLinkColor="item.color"/>
            </ion-col>
        </ion-row>
    </ion-grid>
</ion-page>
</template>

<script>
import { IonGrid, IonCol,IonRow,IonPage } from '@ionic/vue';
import { defineComponent } from 'vue'
import DashboardCard from '../../components/DashboardCard.vue'

export default defineComponent({
    name: "Vezerlopult",
    components: {
        IonGrid,
        IonRow,
        IonCol,
        DashboardCard,
        IonPage
    },
    data: () => {
        const cards = [
            {
            subheader: 'Nyitott munkalapok',
            header: '1500',
            url: '/app/controlpanel',
            color: 'green'
          },
          {
            subheader: 'Naptár',
            header: '1500',
            url: '/app/controlpanel',
            color: 'blue'
          },
          {
            subheader: 'Értesítések ',
            header: '1500',
            url: '/app/controlpanel',
            color: 'red'
          },
          {
            subheader: 'Sárga ',
            header: '237321',
            url: '/app/controlpanel',
            color: 'orange'
          }
        ]
        return {cards}
    },
    
})
</script>

<style lang="scss">
ion-col{
    padding: 0px;
    margin: 0px;
}
ion-grid{
    margin: 0px;
}
</style>