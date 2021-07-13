<template>
<ion-page>
    <ion-grid>
        <ion-row >
            <ion-col v-for="item in this.cards" :key="item" size-xs="6" size-sm="4" size-md="4" size-lg="3" size-xl="2">
                <DashboardCard :subheader="item.subheader" :header="item.header"
                     :linkColor="item.color" :link="item.url"/>
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
            url: '/app/worksheets',
            color: 'green'
          },
          {
            subheader: 'Naptár',
            header: '1500',
            url: '/app/2',
            color: 'blue'
          },
          {
            subheader: 'Értesítések',
            header: '1500',
            url: '/app/3',
            color: 'red'
          },
          {
            subheader: 'Sárga',
            header: '237321',
            url: '/app/4',
            color: 'orange'
          },
          {
            subheader: 'Szürke',
            header: '237321',
            url: '/app/5',
            color: 'gray'
          },
          {
            subheader: 'Lila',
            header: '237321',
            url: '/app/6',
            color: 'purple'
          },
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