<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card>
        <v-card-media :src="memory.img" height="300px">
          <v-layout column class="media">
            <v-spacer></v-spacer>
            <v-card-title class="white--text pl-5 pt-5">
              <div class="display-1 pl-5 pt-5">{{ memory.title }}</div>
            </v-card-title>
          </v-layout>
        </v-card-media>
        <v-list two-line v-for="(event, index) in events" :key="event.id">
          <v-list-tile ripple @click="gotToEvent(event.id)">
            <v-list-tile-content>
              <v-list-tile-title>{{ event.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ event.shortDescription }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-list-tile-action-text>
                {{ event.date }}
              </v-list-tile-action-text>
              <v-list-tile-action-text>
                {{ event.photos }} <v-icon color="pink lighten-2">photo_library</v-icon>
              </v-list-tile-action-text>

            </v-list-tile-action>
          </v-list-tile>
          <v-divider v-if="index + 1 < events.length"></v-divider>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        memory: { title: 'Antsirabe', img: 'https://www.madagascar-photo.com/photos/Antsirabe/photo-antsirabe-madagascar/images/Antsirabe-175.jpg' },
        events: [
          { id: 1, photos: 18, title: 'Ze tany de tany', shortDescription: 'Voyage improvisé entre amis', date: "07/09/2017" },
          { id: 1, photos: 18, title: 'Ze tany de tany', shortDescription: 'Voyage improvisé entre amis', date: "07/09/2017" }
        ]
      }
    },
    methods: {
      gotToEvent: function (id) {
        return id;
      }
    },
    beforeCreate: function () {
      this.$store.state.title = "Events"
    }
  }
</script>
