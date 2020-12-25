<template>
  <div class="container-fluid">
    <h1 class="p-2 m-3 text-center" style="border: 1px solid green">
      Categorii de Produse existente in cloud-ul MongoDB
    </h1>
    <!-- Adaugare categorie noua -->
    <div class="row m-3" style="border: 1px solid green">
      <div class="col-12 my-4">
        <form>
          <div class="input-group mb-1">
            <span class="input-group-text text-center" style="width: 20%"
              >Titlu Categorie</span
            >
            <input
              type="text"
              aria-label="Titlu Categorie"
              class="form-control"
              v-model="categorie.titlu"
            />
          </div>
          <div class="input-group mb-1">
            <span class="input-group-text" style="width: 20%"
              >Descriere Categorie</span
            >
            <input
              type="text"
              aria-label="Descriere categorie"
              class="form-control"
              v-model="categorie.descriere"
            />
          </div>
          <button
            type="submit"
            class="btn btn-success btn-block"
            @click.prevent="adaugaCategorie"
          >
            Adauga Categorie
          </button>
        </form>
      </div>
    </div>
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
      categorie: {
        titlu: "",
        descriere: "",
      },
    };
  },
  async created() {
    await this.preluareCategorii();
  },
  methods: {
    async stergeCategorie(id) {
      const status = await CategoriiServices.stergeCategorie(id);
      if (status === 200) {
        alert(`Categoria a fost stearsa cu succes!`);
        await this.preluareCategorii();
      }
    },
    async adaugaCategorie() {
      const status = await CategoriiServices.adaugaCategorie(this.categorie);
      if (status === 200) {
        alert(`Categoria ${this.categorie.titlu} a fost adaugata cu succes!`);
        await this.preluareCategorii();
      }
    },
    async preluareCategorii() {
      try {
        const categoriiInfo = await CategoriiServices.getCategorii();
        this.categorii = categoriiInfo.data;
      } catch (error) {
        this.error = error;
      }
    }
  },
};
</script>