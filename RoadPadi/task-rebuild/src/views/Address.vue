<template>
 <div class="header">
   <div class="mb-10">
     <h1 class="font-semibold pt-10 text-xl font-serif leading-7 text-[#004AAD]">Address</h1>
    <p class="font-serif font-medium text-medium text-[#828282]">We'd love to know how to</p>
    <p class="font-serif font-medium text-medium text-[#828282]">locate you</p>
   </div>

   
     <form class="form-container">
       <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
        <label>Country</label>
        <v-select
          :items="items"
          outlined
        ></v-select>
        </v-col>
          
        <v-col
          cols="12"
          sm="6"
        >
        <label>State</label>
        <v-select
          :items="items"
          outlined
        ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
        <label>City/Town</label>
        <v-select
          :items="items"
          outlined
        ></v-select>
        </v-col>
          
        <v-col
          cols="12"
          sm="6"
        >
        <label>Street Name</label>
        <v-select
          :items="items"
          outlined
        ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
        <label>Street Number</label>
        <v-select
          :items="items"
          outlined
        ></v-select>
        </v-col>
      </v-row>
       <div class="btn-container flex justify-end items-center gap-4">
             <div class="btn-btn text-center font-serif text-medium text-blue-600 w-[22%] p-2 bg-[#FDFFFC] border border-blue-600 rounded-2xl">
                <v-icon style="color: #004AAD" >mdi-chevron-left</v-icon>
                <button>Precious</button>
             </div>
               <div class="btn-btn text-center font-serif text-medium text-white w-[22%] p-2 bg-[#004AAD] border border-black-300 rounded-2xl">
                <button>Contact</button>
                <v-icon style="color: #fff" >mdi-chevron-right</v-icon>
             </div>
            </div>
    </v-container>
    </form>
  </div>
</template>

<script>
export default {
data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
}
</script>

<style>
.header{
    width: 85%;
    margin: auto;
}
</style>