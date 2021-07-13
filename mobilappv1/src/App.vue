<template>
  <IonApp>
    <IonSplitPane id="nav-split-pane" content-id="main-content">
      <ion-menu content-id="main-content" type="reveal">
        <ion-content>
          <ion-list id="inbox-list">
            <ion-list-header>{{$store.state.user.last_name || "Kijelentkezve"}}</ion-list-header>
            <ion-note>{{$store.state.user.email || "Jelentkezz be az alkalmazás használatához"}}</ion-note>
  
            <ion-menu-toggle auto-hide="false" v-for="(p, i) in appPages" :key="i">
              <ion-item  router-direction="root" :router-link="p.url" lines="none" detail="false" class="hydrated" :class="{ selected: p.selected }">
                <ion-icon slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>

        </ion-content>
      </ion-menu>
      <ion-page id="main-content">
        <ion-header :translucent="true">
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-menu-button color="primary"></ion-menu-button>
            </ion-buttons>
            <ion-title>{{title}}</ion-title>
          </ion-toolbar>
        </ion-header>
        
        <ion-content :fullscreen="false" >
          <ion-header collapse="condense">
            <ion-toolbar>
              <ion-title size="large">{{title}}</ion-title>
            </ion-toolbar>
          </ion-header>
        
          <div id="container">
            <ion-router-outlet ></ion-router-outlet>
          </div>
        </ion-content>
      </ion-page>
    </IonSplitPane>
    
  </IonApp>
</template>

<script lang="ts">
import { IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton,IonPage, IonApp, IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote, IonRouterOutlet, IonSplitPane } from '@ionic/vue';
import { defineComponent } from 'vue';
import { logInOutline, list,readerOutline, logOutOutline} from 'ionicons/icons';

export default defineComponent({
  name: 'App',
  components: {
    IonApp, 
    IonContent, 
    IonIcon, 
    IonItem, 
    IonLabel, 
    IonList, 
    IonListHeader, 
    IonMenu, 
    IonMenuToggle, 
    IonNote, 
    IonRouterOutlet, 
    IonSplitPane,
    IonButtons,
    IonHeader,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonPage
  },
  
  computed:{
    title(){
      const tmp = this.$route.matched
      const title = tmp[tmp.length-1].meta.title
      console.log(tmp)
      return title
    },
    appPages(){
      let pages
      if (this.$route.fullPath == "/auth/login")
        pages = [ {
            title: 'Bejelentkezés ',
            url: '/auth/login',
            iosIcon: logInOutline,
            mdIcon: logInOutline,
            selected: true
          }]
      else
        pages = [
          {
            title: 'Vezérlőpult ',
            url: '/app/controlpanel',
            iosIcon: list,
            mdIcon: list,
            selected: true
          },
          {
            title: 'Munkalapok',
            url: '/app/worksheets',
            iosIcon: readerOutline,
            mdIcon: readerOutline,
            selected: false
          },
          {
            title: 'Kijelentkezés ',
            url: '/app/logout',
            iosIcon: logOutOutline,
            mdIcon: logOutOutline,
            selected: false
          },
      ]
      pages.forEach(element => {
        if (element.url == this.$route.fullPath)
          element.selected = true
        else 
          element.selected = false
      });
      return pages
      
    },
  },
  setup() {
    return { 
    }
  }
});
</script>
<style scoped>
#nav-split-pane{
  --side-max-width: 300px;
}

ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
</style>