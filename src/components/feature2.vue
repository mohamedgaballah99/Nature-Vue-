<template>
  <div class="feature">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 ">
          <div class="img">
            <img src="../assets/imges/blog.jpg" />
          </div>
          <h4>JANE DESIGN CHAIR</h4>
          <p>50.00$</p>
        </div>
        <div class="col-sm-12 col-md-6  ">
          <div class="img mb-10">
            <img src="../assets/imges/blol.jpg" />
          </div>
          <h4>JANE DESIGN CHAIR</h4>
          <p>180.00$</p>
        </div>
        <div class="col-sm-12 col-md-6  ">
          <div class="img">
            <img src="../assets/imges/blog.jpg" />
          </div>
          <h4>JANE DESIGN CHAIR</h4>
          <p>100.00$</p>
        </div>
        <div class="col-sm-12 col-md-6 ">
          <div class="img">
            <img src="../assets/imges/blol.jpg" />
          </div>
          <h4>JANE DESIGN CHAIR</h4>
          <p>120.00$</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "feature2",
};
</script>
<style lang="scss" scoped>
.feature {
  .container {
    .row {
        margin-top: 120px;
      .col-md-6 {
        margin-bottom: 30px;
        .img {
          margin: 20px;
          width: 100%;
          img {
              width: 100%;
            margin-bottom: 20px;
          }
        }
        h4 {
          color: black;
        }
        p {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
