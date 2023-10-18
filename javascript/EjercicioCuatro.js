let x;

    function abrirVentana() {
        x = window.open('', 'nueva', 'menubar=yes,resizable=yes,width=500,height=500');
        x.document.write('<html><head><title>Ventana Emergente</title></head><body>');
        x.document.write('<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque non corporis vitae praesentium assumenda quae excepturi, porro ipsum necessitatibus dolore quisquam, reiciendis eligendi! Vitae aspernatur accusantium officia, amet nam omnis.</p>');
        x.document.write('<button onclick="cerrarVentana()">Cerrar ventana</button>');
        x.document.write('<script>function cerrarVentana() { window.close(); }</script>');
        x.document.write('</body></html>');
        x.document.close();}

    function cerrarVentana() {
        if (x) {
            x.close();}}