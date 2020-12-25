<template>
  <div class="container-fluid">
    <h1 class="p-2 bg-primary text-white">
      Categorii de Produse existente in cloud-ul MongoDB
    </h1>
    <div class="row">
      <div class="col-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Titlu Categorie</th>
              <th scope="col">Descriere Categorie</th>
              <th scope="col">Sterge Categorie</th>
              <th scope="col">Produse Categorie</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="categorie in categorii" v-bind:key="categorie._id">
              <th scope="row">{{ categorie._id }}</th>
              <td>{{ categorie.titlu }}</td>
              <td>{{ categorie.descriere }}</td>
              <td>
                <button
                  class="btn btn-danger btn-sm"
                  @click="stergeCategorie(`${categorie._id}`)"
                >
                  Sterge Categorie
                </button>
              </td>
              <td>
                <button class="btn btn-success btn-sm">Vezi Produse</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import CategoriiServices from "../Services/CategoriiServices";
export default {
  name: "CategoriiComponent",
  data() {
    return {
      categorii: [],
      error: "",
    };
  },
  async created() {
    try {
      const categoriiInfo = await CategoriiServices.getCategorii();
      this.categorii = categoriiInfo.data;
    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    stergeCategorie(id) {
      alert(`Vrei sa stergi categoria cu ID-ul ${id}`);
    }
  },
};
</script>