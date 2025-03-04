<template>
    <v-card class="pa-2">
      <v-card-title>
        {{ edit ? 'Edit' : 'Tambah' }} Data Work Order 
        <v-spacer></v-spacer>
        <v-btn color="pink" dark class="mr-2" @click="cancel">
          Back
        </v-btn>
        <v-btn color="blue" dark @click="saveWorkOrder">
          Simpan
        </v-btn>
      </v-card-title>
  
      <v-card-title>
        <v-row>
          <v-col cols="8">
            <v-text-field
              label="Number"
              v-model="NumberWO"
              readonly
              persistent-hint
              hint="Number Akan Muncul Otomatis"
            ></v-text-field>
            <v-text-field
              label="Name Produk"
              v-model="NameProduct"
            ></v-text-field>
            <v-text-field
              label="Jumlah"
              v-model="qty"
            ></v-text-field>
            <v-select
              :items="Status"
              label="Status"
              item-text="name"
              item-value="id"
              v-model="selectedSatus"
            ></v-select>
            <v-autocomplete
              :items="operators"
              label="Operator"
              item-text="name"
              item-value="id"
              v-model="selectedOperator"
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-card-title>
    </v-card>
  </template>
  
  <script>
  import Vuex from 'vuex'
  export default {
    data() {
      return {};
    },
    computed: {
      ...Vuex.mapState({
        edit: (s) => s.edit,
        Status: (s) => s.Status,
        operators: (s) => s.operators,
        NumberWO: (s) => s.NumberWO,
      }),
      __s() {
        return this.$store.state; 
      },
      NameProduct: {
        get() {
          return this.__s.NameProduct;
        },
        set(v) {
          this.__c("NameProduct", v);
        },
      },
      qty: {
        get() {
          return this.__s.qty;
        },
        set(v) {
          this.__c("qty", v);
        },
      },
      selectedSatus: {
        get() {
          return this.__s.selectedSatus;
        },
        set(v) {
          this.__c("selectedSatus", v);
        },
      },
      selectedOperator: {
        get() {
          return this.__s.selectedOperator;
        },
        set(v) {
          this.__c("selectedOperator", v);
        },
      },
    },
    methods: {
      __c(a, b) {
        return this.$store.commit("SET_OBJECT", [a, b]);
      },
      cancel() {
        this.ViewDialog = false;
      },
      saveWorkOrder() {
        // Verifikasi perubahan status dan kuantitas
        if (this.selectedSatus === 'In Progress' || this.selectedSatus === 'Completed') {
          this.updateStatusAndQuantity();
        }
        this.ViewDialog = false;
      },
      updateStatusAndQuantity() {
        const statusChanges = {
          PendingToInProgress: this.selectedSatus === 'In Progress' && this.__s.selectedSatus === 'Pending',
          InProgressToCompleted: this.selectedSatus === 'Completed' && this.__s.selectedSatus === 'In Progress',
        };
  
        if (statusChanges.PendingToInProgress || statusChanges.InProgressToCompleted) {
          this.__c("qty", this.qty);  // Update quantity on status change
  
          // Logika untuk menyimpan perubahan status dalam store
          this.__c("selectedSatus", this.selectedSatus);
          alert(`Status telah diperbarui menjadi ${this.selectedSatus}. Jumlah: ${this.qty}`);
        }
      },
    },
    mounted() {
      console.log(this.$store.state);
    },
  };
  </script>
  