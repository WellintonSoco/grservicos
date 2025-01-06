    <template>
    <div class="header-container">
        <div class="logo-container">
          <img src="/img/logo.png" alt="Logo da Empresa" class="logo" />
        </div>
        <div class="tabs-container">
          <router-link 
          v-for="(route, index) in routes" 
          :key="index" 
          :to="route.path" 
          :class="['tab', { active: $route.path === route.path }]"
        >
          {{ route.name }}
          <span class="underline"></span>
        </router-link>
        </div>
      </div>
    </template>
    <script setup>
    
    const routes = [
      { name: 'Página inicial', path: '/' },
      { name: 'Projetos', path: '/projects' },
      { name: 'Contatos', path: '/contacts' },
    ]; 
    </script>

    <style scoped>
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
  position: relative;
  z-index: 10;
  background: transparent;

}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 80px;
  object-fit: contain;
}

.tabs-container {
  display: flex;
  gap: 20px;
}

.tab {
  position: relative;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  padding: 5px 10px;
  transition: color 0.3s ease;
}

.tab:hover {
  color: rgb(250,204,11);
}
.tab.active {
  color: rgb(250,204,11); 
}
.tab.active .underline {
  width: 100%;
}


.underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: rgb(250,204,11);
  transition: width 0.3s ease;
}

.tab:hover .underline {
  width: 100%;
}

</style>
