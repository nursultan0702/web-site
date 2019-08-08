<template>
  <div>
  <div class="row">
    <div class="col-sm-3" ></div>
    <div class="col-sm-6">

      <div class="container">
        <div><h1>Детская городская больница №2</h1></div>
        <br />
        <div class="row">
          <div class="col-md-6">
            <yandex-map
                    :coords="[43.232775305436135, 76.8559741973877]"
                    zoom="15"
                    style="width: 100%; height: 350px;"
                    :cluster-options="{
                    1: {clusterDisableClickZoom: true}
                      }"
                    :behaviors="['ruler']"
                    :controls="['trafficControl']"
                    :placemarks="placemarks"
                    @map-was-initialized="initHandler"
            />
          </div>
          <br />
          <div class="col-md-6">
            <form class="my-form">
              <div class="form-group">
                <p>Наш адрес: Микрорайон 2, дом 54</p>
              </div>
              <div class="form-group">
                <label>Наш e-mail:</label>
                <a href="mailto:dgkb.2@mail.ru"> dgkb.2@mail.ru</a>.
              </div>
              <div class="form-group">
                <label>Наш телефон:</label>
                <a href="tel:+77272765800"> 8(727) 276-58-00</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-3"></div>
  </div>
</div>
</template>

<style>
  .my-form {
    color: #305896;
  }
  .my-form .btn-default {
    background-color: #305896;
    color: #fff;
    border-radius: 0;
  }
  .my-form .btn-default:hover {
    background-color: #4498C6;
    color: #fff;
  }
  .my-form .form-control {
    border-radius: 0;
  }
</style>
<script>
  export default {
    data() {
      return {
        placemarks: [
          {
            coords: [43.232775305436135, 76.8559741973877],
            properties: {}, // define properties here
            options: {}, // define options here
            clusterName: "1",
            callbacks: {
              click: function () {
              }
            }
          }
        ]
      }
    }
  }
</script>