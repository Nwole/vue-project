<template>
  <div class="header">
   <div class="mb-10">
     <h1 class="font-semibold pt-10 text-xl font-serif leading-7 text-[#004AAD]">Brand Identity</h1>
    <p class="font-serif font-medium text-medium text-[#828282]">Tell us everything we need to</p>
    <p class="font-serif font-medium text-medium text-[#828282]">Know about your company</p>
   </div>

   <div class="logo-wrapper"> 
            <div class="logo-content">
                <h5 class="m-2">Logo Image</h5>
                <div class="logo">
                  <img v-bind:src="logoImage_img" class="banner-logo" />
                </div>
                
            </div>
             <div class="logo-content">
                <h5 class="m-2">Color</h5>
                <div class="logo2">

                </div>
            </div>
        </div>

 <form class="form-container"> 
<v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
         <label class="mb-20">Company Name</label>
          <v-text-field
            placeholder="raodpadi"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
         <label>Company Website</label>
          <v-text-field
            placeholder="example.com"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
        <div class="statement-container">
             <div class="statement-sub-container">
                   
            <div class="statement-text-area">
            <label class="mb-12">Vision Statement</label>
            <v-textarea
             solo
            name="input-7-4"
            label="say something nice"
            ></v-textarea>
             </div>
            </div>
            </div>

            <div class="btn-container flex justify-end items-center">
             <div class="btn-btn text-center font-serif text-medium text-white w-[161px] p-2 bg-[#004AAD] border border-black-300 rounded-2xl">
                <button>Address</button>
                <v-icon style="color: #fff" >mdi-chevron-right</v-icon>
             </div>
            </div>
    </v-container>
              
         </form>
  </div>
  
</template>

<script>
export default {
    name: 'MainBar',
data(){
    return{
        logoImage_img: require("../assets/images/Vector.png")
}
    }
}
</script>

<style scoped>
.header{
    width: 85%;
    margin: auto;
}
.logo-wrapper{
    width: 59%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
}
.logo{
width: 84px;
height: 84px;
left: 632px;
top: 444px;
background: rgba(100, 100, 100, 0.06);
border-radius: 50px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

}
.logo2{
width: 84px;
height: 84px;
left: 987px;
top: 444px;
background: #004AAD;
border: 1px solid #BDBDBD;
border-radius: 50px;
}
</style>