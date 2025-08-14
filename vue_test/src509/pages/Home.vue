<template>
  <div>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link> -->
          <router-link class="list-group-item"  :to="{name: 'ns'}">News</router-link>
        </li>
        <li>
          <!-- <router-link class="list-group-item " to="/home/messages">Message</router-link> -->
          <router-link class="list-group-item " :to="{name: 'msg'}">Message</router-link>
        </li>
      </ul>
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>

</style>