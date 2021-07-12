<template>
    <ion-card :class="linkColor" :router-link="link" router-direction="root" button="true">
        <div >
            <ion-icon slot="start" :ios="arrowForwardCircleOutline" :md="arrowForwardCircleOutline"></ion-icon>
        </div>
        <ion-card-subtitle class="subtitle ">{{subheader}}</ion-card-subtitle>
        <ion-card-title class="title">{{header}}</ion-card-title>
    </ion-card>
</template>

<script>
import { defineComponent } from 'vue'
import { IonCard, IonCardTitle,IonCardSubtitle,IonIcon } from '@ionic/vue';
import { arrowForwardCircleOutline} from 'ionicons/icons';

export default defineComponent({
    name: "DashboardCard",
    props:{
        header: String,
        subheader: String,
        linkColor: String,
        link: String
        
    },
    data: () => {
        return {
            arrowForwardCircleOutline
        }
    },
    components: {
        IonCard,
        IonCardTitle,
        IonCardSubtitle,
        IonIcon
    }
})
</script>

<style lang="scss" scoped>
ion-card {
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  position: relative;
  height: 80px;
  border-bottom-right-radius: 0px;
  margin: 4px;
  div{
        position: absolute;
        bottom: 0px;
        right: 0px;
        width: 50px;
        height: 50px;
        border-top-left-radius: 50px;
        ion-icon{
            position: absolute;
            bottom: 4px;
            right: 4px;
            color:white;
            font-size: 20px;
            
        }
  }
}
ion-card-subtitle,
ion-card-title {
  color: #fff;
  text-align: left;
}

ion-card-subtitle{
    position: relative;
    margin-left: 8px;
    margin-top: 8px;
    font-size: 15px;
}
ion-card-title {
    margin-left: 5px;
    margin-top: 5px;
}


.green {
  background: #85af5c;
    div{
        background: #168681;
    }
}
.red {
  background: rgb(236, 50, 50);
  div{
      background: rgb(160, 0, 40);
  }
  
}
.blue{
    background: rgb(36, 101, 221);
    div{
        background: rgb(1, 51, 145);
    }
}
.orange{
    background: rgb(255, 176, 6);
    div{
        background: rgb(231, 136, 27);
    }
}

</style>