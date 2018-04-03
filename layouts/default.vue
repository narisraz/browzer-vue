<template>
  <v-app>
    <v-toolbar dense>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Browser</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>person_outline</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer
      absolute
      temporary
      v-model="drawer"
    >
      <v-list dense>
        <v-divider light></v-divider>
        <v-list-tile v-for="menu in menus" :key="menu.title" :to="menu.target" @click.stop="() => drawer = !drawer">
          <v-list-tile-action>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ menu.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <nuxt/>
    
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        drawer: null,
        menus: [
          { title: 'Memories', icon: '', target: '/memories' }
        ]
      }
    }
  }
</script>

<style lang="scss">
</style>
