<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      :src="require('./assets/sidebar.jpg')"
    >
      <template #img="props">
        <v-img :gradient="gradient" v-bind="props"></v-img>
      </template>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> digital nomade </v-list-item-title>
          <v-list-item-subtitle> 으아아악 </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
          active-class="primary"
          class="py-1"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      drawer: false,

      gradient: "rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)",

      items: [
        {
          title: "Dashboard", //
          icon: "mdi-view-dashboard",
          to: "/",
        },
        {
          title: "Grid System", //
          icon: "mdi-view-grid-outline",
          to: "/gridsystem",
        },
        {
          title: "GridListPage",
          icon: "mdi-format-list-checkbox",
          to: "/grid-list-page",
        },
        {
          title: "BreaksPoints",
          icon: "mdi-cursor-pointer",
          to: "/breaks-points",
        },
        {
          title: "Typography",
          icon: "mdi-format-size",
          to: "/typography",
        },
        {
          title: "ChatComponent",
          icon: "mdi-message",
          to: "/chat-component",
        },
        {
          title: "FormComponent",
          icon: "mdi-account-supervisor-circle",
          to: "/form-component",
        },
        {
          title: "TableComponent",
          icon: "mdi-tablet",
          to: "/table-component",
        },
      ],
      right: null,
    };
  },
};
</script>

<style></style>
