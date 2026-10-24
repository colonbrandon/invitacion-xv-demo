/*
  Datos del evento. Es el único archivo que se edita por cliente.
  DEMO con datos ficticios: el nombre, el salón, la dirección y el alias son inventados.
*/
window.EVENTO = {
  demo: true,
  ocasion: "Mis XV",
  nombre: "Candela",
  frase: "Hay momentos que se esperan toda la vida. Este es uno de ellos, y quiero vivirlo con vos.",
  fecha: "2027-03-20T21:30:00-03:00",
  duracionHoras: 6,
  fiesta: {
    lugar: "Salón Los Álamos (ficticio)",
    direccion: "Av. Siempreviva 742, Córdoba",
    mapsQuery: "Plaza San Martín, Córdoba"
  },
  dressCode: "Elegante. El lila queda reservado para la quinceañera.",
  regalos: {
    texto: "Tu presencia es el mejor regalo. Si además querés hacerme un obsequio, podés usar este alias:",
    alias: "EJEMPLO - NO TRANSFERIR",
    titular: "Alias ficticio de demostración: no transfieras dinero"
  },
  rsvp: {
    fechaLimite: "2027-02-28",
    // URL del Apps Script publicado (ver rsvp/INSTRUCCIONES.md). Vacío = modo demo.
    endpoint: "",
    pedirRestricciones: true,
    pedirCancion: true
  },
  tema: {
    acento: "#7b4f8e",
    acentoSuave: "#efe4f3",
    fondo: "#fbf8f5",
    texto: "#2b2230"
  }
};
