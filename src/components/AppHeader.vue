<template>
  <div>
    <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
      <v-list>
        <v-list-tile v-for="(item, i) in menuItems" :key="`navdrawer${i}`">
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app dark flat color="transparent">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title v-text="'Сайт находится в разработке'"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="(item, i) in menuItems"
          :key="`menu.item${i}`"
          :to="item.route"
          flat
        >{{item.title}}</v-btn>
        <v-btn @click.prevent="logout()" flat>Выйти</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    
  </div>
  
</template>

<script>
export default {
  data() {
    return {
        drawer:false
      
    };
  },
  computed: { 
    menuItems() {
      return [
        {
          title: "Главная",
          route: "/"
        },
        {
          title: "О нас ",
          route: "/about"
        },
        {
          title: "Государственные закупки",
          route: "/govsell"
        },
        {
          title: "Блоги",
          route: "/home"
        },
         {
          title: "Войти",
          route: "/login"
        },
        {
          title: "Регистрация",
          route: "/registration"
        },
         {
          title: "Объявления",
          route: "/declaration"
        },
      ];
    }
  }
};
</script>
