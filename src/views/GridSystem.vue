<template>
  <v-container fluid>
    <v-card class="pa-2">
      <v-row>
        <v-col>
          <v-card class="pa-2" outlined> 김민형 </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-2" outlined> 시네모 </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-2" outlined> 창립 멤버 </v-card>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="mt-5 pa-2">
      <v-row :style="{ height: '120px' }" class="red" align="center">
        <v-col>
          <v-card class="pa-5" outlined> </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-5" outlined> </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-5" outlined> </v-card>
        </v-col>
      </v-row>
      <v-row :style="{ height: '120px' }" class="blue" align="center">
        <v-col align-self="end">
          <v-card class="pa-5" outlined> </v-card>
        </v-col>
        <v-col align-self="center">
          <v-card class="pa-5" outlined> </v-card>
        </v-col>
        <v-col align-self="start">
          <v-card class="pa-5" outlined> </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style></style>
