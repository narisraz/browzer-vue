<template>
  <v-app>
    <v-toolbar dense color="blue lighten-1">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ $store.state.title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>person_outline</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer
      temporary
      absolute
      v-model="drawer"
    >
      <v-toolbar class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar to="/profile">
            <v-list-tile-avatar>
              <img src="https://wordsandvideos.com/wp-content/uploads/2016/12/common.png" >
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>John Doe</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list dense>
        <v-list-tile v-for="menu in menus" :key="menu.title" :to="menu.target" @click.stop="() => drawer = !drawer">
          <v-list-tile-action>
            <v-icon color="pink darken-1">{{ menu.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ menu.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <div class="main">
      <nuxt/>
    </div>

  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        menus: [
          { title: 'Memories', icon: 'memory', target: '/memories' }
        ]
      }
    }
  }
</script>

<style>
.main {
  margin-top: 10px;
  max-width: 700px;
}
</style>
