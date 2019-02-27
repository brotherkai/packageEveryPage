<template>
  <div class="hello">
    首页
  </div>
</template>

<script>
export default {
   metaInfo: {
      title: 'HelloWordtitle', // set a title
      meta: [{                 // set meta
        name: 'HelloWord-name',
        content: 'HelloWord-content'
      }],
      link: [{                 // set link
        rel: 'HelloWord-rel',
        href: 'HelloWord-href'
      }]
    },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
