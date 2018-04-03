<template>
  <v-layout row>
    <v-flex xs12>
      <v-card v-for="memory in memories" :key="memory.title">
        <v-card-media
          :src="memory.img"
          height="300px"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-center flexbox>
                <div class="title-container text-xs-center">
                  <v-chip color="pink darken-1" text-color="white" class="headline elevation-13 b-title">{{ memory.title }}</v-chip>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        memories: [
          { title: "Antsirabe", img: "https://www.madagascar-photo.com/photos/Antsirabe/photo-antsirabe-madagascar/images/Antsirabe-175.jpg" },
          { title: "Mantasoa", img: "http://www.madagascar-hotels-online.com/images/ville/1423223595_image.jpeg" }
        ]
      }
    }
  }
</script>

<style>

.title-container {
  position: absolute;
  left: 0px;
  bottom: 0px;
  padding-bottom: 10px;
  width: 100%;
}
</style>
