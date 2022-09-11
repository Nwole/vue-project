<template>
   <div class="header">
   <div class="mb-5">
     <h1 class="font-semibold pt-10 text-xl font-serif leading-7 text-[#004AAD]">Verification</h1>
    <p class="font-serif font-medium text-medium text-[#828282]">Let's get your Unique Identifier</p>
    <p class="font-serif font-medium text-medium text-[#828282]">Details and you'd be set to go!</p>
   </div>

    <div class="mb-5">
        <h3 class="mb-5 font-serif font-medium text-medium text-[#4F4F4F]">CAC Verification</h3>
        <div class="upload ">
         <div class="upload-box"><v-icon style="cursor:pointer">mdi-plus</v-icon></div>
         <h3 class="flex items-end ml-5 font-medium text-medium text-[#004AAD]">Upload</h3>
        </div>
    </div>
     <form class="form-container">
       <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
        <label  class="mb-5 font-serif font-medium text-medium text-[#4F4F4F]">CAC Registration Number</label>
         <v-text-field
            outlined
          ></v-text-field>
        </v-col>
          
        <v-col
          cols="12"
          sm="6"
        >
        <label  class="mb-5 font-serif font-medium text-medium text-[#4F4F4F]">Tax ID Number</label>
         <v-text-field
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    </form>
   
     
    <div class="mb-5">
        <h3  class=" font-serif font-medium text-medium mb-5 text-[#4F4F4F]">Company Rep. ID</h3>
        <div class="upload ">
         <div class="upload-box"><v-icon style="cursor:pointer">mdi-plus</v-icon></div>
         <h3 class="flex items-end ml-5 font-medium text-medium text-[#004AAD]">Upload</h3>
        </div>
    </div>
     <form class="form-container">
       <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
        <label class=" font-serif font-medium text-medium mb-5 text-[#4F4F4F]">Company Rep. Email</label>
         <v-text-field
            outlined
          ></v-text-field>
        </v-col>
          
        <v-col
          cols="12"
          sm="6"
        >
        <label class=" font-serif font-medium text-medium mb-5 text-[#4F4F4F]">Company Rep. Phone Number</label>
         <v-text-field
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

       <div class="btn-container flex justify-end items-center gap-4">
             <div class="btn-btn text-center font-serif text-medium text-blue-600 w-[25%] p-2 bg-[#FDFFFC] border border-blue-600 rounded-2xl">
                <v-icon style="color: #004AAD" >mdi-chevron-left</v-icon>
                <button>Precious</button>
             </div>
               <div class="btn-btn text-center font-serif text-medium text-white w-[22%] p-2 bg-[#004AAD] border border-black-300 rounded-2xl">
                <button>Account</button>
                <v-icon style="color: #fff" >mdi-chevron-right</v-icon>
             </div>
            </div>
    </v-container>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.header{
    width: 85%;
    margin: auto;
}
.upload{
    display: flex;
}
.upload-box{
    width: 100px;
    height: 100px;
    background: #FDFFFC;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
}
</style>