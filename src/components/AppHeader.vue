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
        <div class="dropdown">
          <v-btn class="dropbtn" to='/govsell' flat>Государственные закупки</v-btn>
          <div class="dropdown-content">
            <v-btn to='/declaration' flat>Объявления</v-btn>
            
          </div>
        </div>
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
        }
      ];
    }
  }
};
</script>

<style>
.dropdown {
  padding-top: 21px
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #0497f8;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: rgb(83, 175, 236);}

.dropdown:hover .dropdown-content {display: block;}

</style>
