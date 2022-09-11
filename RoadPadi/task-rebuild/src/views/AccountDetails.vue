<template>
  <div class="header">
   <div class="mb-10">
     <h1 class="font-semibold pt-10 text-xl font-serif leading-7 text-[#004AAD]">Account Details</h1>
    <p class="font-serif font-medium text-medium text-[#828282]">We would like to have your </p>
    <p class="font-serif font-medium text-medium text-[#828282]">account to ease payments.</p>
   </div>

   
     <form class="form-container">
       <v-container>
     <v-row>
        <v-col
          cols="12"
          sm="6"
        >
        <label class=" font-serif font-medium text-medium mb-5 text-[#4F4F4F]">Bank Name</label>
         <v-text-field
            outlined
            placeholder="roadpadi"
          ></v-text-field>
        </v-col>
          
        <v-col
          cols="12"
          sm="6"
        >
        <label class=" font-serif font-medium text-medium mb-5 text-[#4F4F4F]">Account type</label>
         <v-text-field
            outlined
            placeholder="roadpadi"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
        <label class=" font-serif font-medium text-medium mb-5 text-[#4F4F4F]">Account Number</label>
         <v-text-field
            outlined
             placeholder="roadpadi"
          ></v-text-field>
        </v-col>
          
        <v-col
          cols="12"
          sm="6"
        >
        <label class=" font-serif font-medium text-medium mb-5 text-[#4F4F4F]">Account Name</label>
         <v-text-field
            outlined
            placeholder="roadpadi"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
      </v-row>
       <div class="btn-container flex justify-end items-center gap-4">
             <div class="btn-btn text-center font-serif text-medium text-blue-600 w-[22%] p-2 bg-[#FDFFFC] border border-blue-600 rounded-2xl">
                <v-icon style="color: #004AAD" >mdi-chevron-left</v-icon>
                <button>Precious</button>
             </div>
               <div class="btn-btn text-center font-serif text-medium text-white w-[22%] p-2 bg-[#004AAD] border border-black-300 rounded-2xl">
                <button>Done</button>
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

</style>