var app = new Vue({
  el: "#bookstore",
  data: {
    myarr: [],
    value: ""
  },
  methods: {
    getData() {
      fetch("https://api.myjson.com/bins/1h3vb3", {
        method: "GET",
        headers: {}
      })
        .then(function(responce) {
          console.log(responce);
          return responce.json();
        })
        .then(print => {
          this.myarr = print.books;
          console.log(app.myarr);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  computed: {
    getBooks() {
      return this.myarr.filter(book => book.titulo.includes(this.value));
    }
  },
  created() {
    this.getData();
  }
});
