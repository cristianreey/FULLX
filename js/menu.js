document.getElementById("search-link").addEventListener("click", function () {
  document.getElementById("search-menu-container").style.display = "block";
});

document.getElementById("close-search-menu").addEventListener("click", function () {
  document.getElementById("search-menu-container").style.display = "none";
});

var productos = [
  { nombre: "Camiseta gris vigore mujer", url: "camisetaGrisVigoreMujer.html" },
  { nombre: "Camiseta verde menta hombre", url: "camisetaVerdeMentaHombre.html" },
  { nombre: "Camiseta mujer Azul Lavado con estampado Full X", url: "camisetaAzulLavadoMujer.html" },
  { nombre: "Camiseta mujer Negra corta", url: "camisetaNegraMujer.html" },
  { nombre: "Camiseta mujer Blanca corta", url: "camisetaBlancaMujer.html" },
  { nombre: "Camiseta hombre Negra", url: "camisetaNegraHombre.html" },
  { nombre: "Camiseta hombre Blanca", url: "camisetaBlancaHombre.html" },
  { nombre: "Camiseta hombre Rosa con estampado FULL X", url: "camisetaRosaHombre.html" },
  { nombre: "Camiseta hombre Celeste con estampado Full X", url: "camisetaCelesteHombre.html" },
];

$(function () {
  $("#search-menu input").on("input", function () {
    var searchTerm = $(this).val().toLowerCase();
    var results = [];

    // Buscar coincidencias en el array de productos
    productos.forEach(function (producto) {
      var productName = producto.nombre.toLowerCase();
      if (productName.includes(searchTerm)) {
        var index = productName.indexOf(searchTerm);
        var match = productName.substr(index, searchTerm.length);
        var highlightedName = producto.nombre.replace(new RegExp(match, "gi"), '<span class="highlight">$&</span>');
        results.push({ nombre: highlightedName, url: producto.url });
      }
    });

    // Mostrar los resultados debajo del campo de búsqueda
    var $itemList = $("#item-list");
    $itemList.empty();
    results.forEach(function (producto) {
      var $li = $("<li></li>");
      var $link = $("<a></a>").attr("href", producto.url).html(producto.nombre);
      $li.append($link);
      $itemList.append($li);
    });
  });
});
