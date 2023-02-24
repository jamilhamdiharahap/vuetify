<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const items = store.state.items;
const snackbar = store.state.snackbar;
const posting = ref("");

console.log(items.value)

const addPosting = (value) => {
  store.commit("addPosting", value);
  posting.value = ''
}

const deleteItems = (params) => {
  store.commit("deleteItems", params)
}

const deleteAllItems = () => {
  store.commit("deleteAllItems")
}

</script>

<template>
  <v-app>
    <v-layout>
      <v-app-bar color="info">
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Todo LIST</v-app-bar-title>

        <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-app-bar>
      <v-main>
        <v-row class="py-4 px-4">
          <v-col cols="4" class="py-7">
            <v-text-field v-on:keydown.enter="posting.length > 0 && addPosting(posting)" v-model="posting"
              placeholder="postingan ..." label="postingan" variant="outlined"></v-text-field>
            <v-btn @Click="posting.length > 0 && addPosting(posting)" color="success">
              + Posting
            </v-btn>
          </v-col>
          <v-col cols="8">
            <v-container>
              <v-row>
                <v-col v-for="item in items" :key="item.title" cols="12" sm="4">
                  <v-card>
                    <v-sheet class="ma-2 pa-2">
                      {{ item.title }}
                    </v-sheet>
                    <v-btn class="pa-2 ma-2" @click="deleteItems(item)">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#FF0032"
                          d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8Z" />
                      </svg>
                    </v-btn>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
            <v-snackbar v-model="snackbar.isOpen" :timeout="snackbar.timeout">
              {{ snackbar.text }}
              <v-progress-linear indeterminate color="green"></v-progress-linear>
            </v-snackbar>
          </v-col>
        </v-row>
      </v-main>
    </v-layout>
  </v-app>
</template>

<style scoped></style>
