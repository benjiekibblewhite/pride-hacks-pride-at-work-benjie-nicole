<template>
  <div>
    <nav>
      <div class="site-logo">
        <a href="/">
          <img src="./assets/Pride-at-Work-Canada-Logo.jpg">
        </a>
      </div>
      <ul id="menu">
        <li class="menu-item selected">
         <router-link to="/">HOME</router-link>
        </li>
        <li class="menu-item">
         <router-link to="/survey">ANSWER SURVEY</router-link>
        </li>
        <li class="menu-item">
         <router-link to="/summary">REVIEW SURVEY</router-link>
        </li>
        <li class="menu-item">
         <router-link to="/documents">DOCUMENTS</router-link>
        </li>
        <li class="menu-item">
         <router-link to="/reports">REPORTS</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import router from "./router.js"

</script>

<style>
body {
  font-family: Roboto;
}

h1, h2, h3, h4, h5 {
  font-family: Source Sans Pro;
}
  nav {
    background: url('./assets/rainbow-bar.jpg') center top #fff repeat-x;
    width: 100%;
    padding: 40px 40px 10px;
    display: flex;
    justify-content: space-around;
  }

  nav .site-logo {
    flex: 0 1 180px;
  }

  #menu {
    display: flex;
    flex: 1 0 auto;
    align-items: flex-end;
    font-family: Source Sans Pro;
    font-weight: 600;
  }

  .menu-item {
    flex: 1 0 120px;
    text-align: center;
  }

  .menu-item a {
    color: rgb(130, 130, 130);
    font-size: 15px;
    padding: 5px 10px;
  }

  .menu-item a:hover {
    color: rgb(146, 39, 143);
  }

  .menu-item.selected a {
    border-bottom: 4px solid #92278f;
    color: #92278f;
  }

  .container.is-fluid {
    margin-left: 32px;
    margin-right: 32px;
  }
</style>
