<template>
  <div class="container-fluid">
    <h1 class="p-2 bg-primary text-white">
      Produse existente in cloud-ul MongoDB
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
            <tr v-for="produs in produse" v-bind:key="produs._id">
              <th scope="row">{{ produs._id }}</th>
              <td>{{ produs.titlu }}</td>
              <td>{{ produs.descriere }}</td>
              <td>
                <button
                  class="btn btn-danger btn-sm"
                  @click="stergeCategorie(`${produs._id}`)"
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
import ProduseServices from "../Services/ProduseServices";
export default {
  name: "ProduseComponent",
  data() {
    return {
      produse: [],
      error: "",
    };
  },
  async created() {
    try {
      const produseInfo = await ProduseServices.getproduse();
      this.produse = produseInfo.data;
    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    stergeCategorie(id) {
      alert(`Vrei sa stergi Produsul cu ID-ul ${id}`);
    }
  },
};
</script>