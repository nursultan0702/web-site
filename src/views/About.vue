<template>
    <div class="col-sm-6 pt-5">
      <v-container fluid>
        <v-layout justify-space-around>
          <v-flex xs5>
            <div class="title mb-1">Главный врач</div>
            <v-layout column>
              <div class="subheading">ФИО</div>
              <v-img src="https://firebasestorage.googleapis.com/v0/b/dgkb2-75575.appspot.com/o/images%2Fimage-head-doctor.jpeg?alt=media&token=0a5a5464-adaa-4423-b896-91cdae9eeeb8" aspect-ratio="1.7"></v-img>
            </v-layout>
          </v-flex>

          <v-flex xs5>
            <div class="title mb-1">Доктор</div>
            <v-layout column>
              <div class="subheading">ФИО</div>
              <v-img src="https://firebasestorage.googleapis.com/v0/b/dgkb2-75575.appspot.com/o/images%2Fimage-doctor.jpeg?alt=media&token=554b6002-abcf-4391-8cc2-fbc466478416" aspect-ratio="1.7" contain></v-img>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
      <v-divider></v-divider>
      <v-card>
        <yandex-map
                :coords="[43.2220, 76.8512]"
                zoom="15"
                style="height: 600px;"
        >
          <ymap-marker
                  marker-id="1"
                  marker-type="placemark"
                  :coords="[43.2220, 76.8512]"
                  hint-content="Hint content 1"
                  :balloon="{header: 'header', body: 'body', footer: 'footer'}"
                  cluster-name="1"
          ></ymap-marker>
        </yandex-map>
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Мы находимся по адресу:</span>
              </v-flex>
            </v-layout>
          </v-container>
        <v-card-title>
          <div>
            <span class="grey--text">Дом 10</span><br>
            <span>Улица Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
      </v-card>
    </div>
</template>
<script>
  export default {
  }
</script>
