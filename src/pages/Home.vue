<template>
    <div>
        <div class="jumbotron">
            <div class="container">
                <h1 class="display-3">Bienvenido!</h1>
                <p>Este sitio, es un sitio de ejemplo creado por
                    <b>Sergio Razza</b> para
                    <a href="http://datos.gob.ar/">datos.gob.ar</a>
                </p>
                <p>
                    <router-link class="btn btn-primary btn-lg" to="/datos">Ver Datos &raquo;</router-link>
                    <router-link class="btn btn-primary btn-lg" to="/mapa">Ver Mapa &raquo;</router-link>
                    <router-link class="btn btn-primary btn-lg" to="/graficos">Ver Graficos &raquo;</router-link>
               </p>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h2>Boostrap</h2>
                    <p>Bootstrap es un framework desarrollado y liberado por Twitter que tiene como objetivo facilitar el diseño web. Permite crear de forma sencilla webs de diseño adaptable, es decir, que se ajusten a cualquier dispositivo y tamaño de pantalla y siempre se vean igual de bien.</p>
                    <p>
                        <a target="_blank" class="btn btn-secondary" href="http://getbootstrap.com/" role="button">Mas información &raquo;</a>
                    </p>
                </div>
                <div class="col-md-4">
                    <h2>Vuejs</h2>
                    <p>Vue.js es un framework de JavaScript nuevo, si lo comparamos con otros frameworks como Backbone o Ember. Sin embargo, su facilidad de aprendizaje y uso con respecto a otros frameworks y libraries como ReactJS, su rendimiento comparado con AngularJS y la facilidad para usarlo y adaptarlo a proyectos tanto grandes como pequeños, ha hecho que Vue gane cada vez más popularidad.</p>
                    <p>
                        <a target="_blank" class="btn btn-secondary" href="https://vuejs.org/" role="button">Mas información &raquo;</a>
                    </p>
                </div>
                <div class="col-md-4">
                    <h2>Webpack</h2>
                    <p>Webpack es un sistema de bundling para preparar el desarrollo de una aplicación web para producción. En cierta medida se puede considerar un Browserify avanzado ya que tiene muchas opciones de configuración. Adicionalmente permite automatizar los procesos de transpilar y preprocesar código de .scss a .css, de ES7 a ES5/6, etc...</p>
                    <p>
                        <a target="_blank" class="btn btn-secondary" href="https://webpack.github.io/" role="button">Mas información &raquo;</a>
                    </p>
                </div>
            </div>
        </div>       
    </div>
</template>

<script>
export default {};
</script>