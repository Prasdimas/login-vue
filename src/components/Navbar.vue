<template>
    <v-navigation-drawer
    v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app
      dark
    >
    <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
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
</template>


<script>

export default {
    components: {
        },
  data() {
    return {
      navbarVisible: false, // Control the visibility of the navbar
      items: [
        { title: "Home", icon: "mdi-home" },
        { title: "About", icon: "mdi-information" },
        { title: "Services", icon: "mdi-cogs" },
        { title: "Contact", icon: "mdi-phone" }
      ],
      drawer: true,

mini: false,
    };
  },
  methods: {
    toggleNavbar() {
      // Toggle the visibility of the navbar
      this.navbarVisible = !this.navbarVisible;
    }
  },
  mounted() {
  },
};
</script>

<style scoped>

</style>
