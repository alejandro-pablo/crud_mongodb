const modalArtista = new bootstrap.Modal(
  document.getElementById("modalArtista")
);
const get = (el) => document.getElementById(el);

const on = (event, selector, handler) => {
  document.addEventListener(event, (e) => {
    if (e.target.closest(selector)) {
      handler(e);
    }
  });
};

on("click", ".btnEditar", (e) => {
  const fila = e.target.parentNode.parentNode;

  get("id_editar").value = fila.children[0].innerHTML.trim();
  get("nombre_editar").value = fila.children[1].innerHTML.trim();
  get("cancion_editar").value = fila.children[2].innerHTML.trim();
  get("ranking_editar").value = fila.children[3].innerHTML.trim();

  modalArtista.show();
});
