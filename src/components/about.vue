<template>
  <div class="about">
      <h1>About</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 text">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </p>
          <button>Read More</button>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="tabel">
            <img src="../assets/imges/table.jpg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "about",
};
</script>
<style lang="scss" scoped>
.about{
    margin-top: -40px;
    >h1{
        background-color: #01312e;
        text-align: center;
        color: white;
        font-size: 60px;
        padding: 20px;
        }
    .container{
         margin-top: 130px;
        .row{
            .text{
                margin-top: 50px;
                color: black;
                text-align: left;
                h2{
                   font-size: 50px;         
                }
                p{
                    margin: 20px 0px;
                    line-height: 1.8;
                    font-size: 20px;
                    color: rgb(61, 60, 60);
                }
                button{
                    background-color: black;
                    color: white;
                    // font-weight: bold;
                    border: 0;
                    padding: 12px 15px;
                }
            }
            .col-sm-12{
                .tabel{
                    width: 100%;
                    img{
                        width: 100%;
                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 600px) {
  .container{
    margin-top: 90px !important;
  }
  .text{
    margin-top: 0px !important;
    margin-bottom: 90px;
  }

}
@media only screen and (min-width: 768px) {
  .text{
    margin-top: 0px !important;
  }

}
@media only screen and (min-width: 1200px) {
  .text{
    margin-top: 50px !important;
  }

}
</style>
