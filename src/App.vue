<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a class="navbar-brand" href="#">datos.gob.ar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link  class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link  class="nav-link" to="/datos">Datos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link  class="nav-link" to="/mapa">Mapa</router-link>
                    </li>      
                    <li class="nav-item">
                        <router-link  class="nav-link" to="/graficos">Graficos</router-link>
                    </li>                
                </ul>              
            </div>
        </nav>
        <router-view></router-view>
        <hr>
        <footer>
            <p>&copy; <b>Sergio Razza</b> para datos.gob.ar - 2017</p>
        </footer>
    </div>
</template>

<script>
export default {
    
}
</script>