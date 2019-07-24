<script>
  import {
    QLayout
  } from 'quasar'

  export default {
    components: {
      QLayout
    },

    document: {
      head: {
        title: 'Cash Money'
      }
    }
  }
</script>

<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout ref="appLayout" view="lHh LpR lFf">
      <!--
        The "header", "navigation", and "footer" router views will be
        rendered in corresponding slots by default but will be overridden by
        any portals targeted here.

        According to the portal-vue documentation we should be able to put the
        <router-view/>'s directly in the <portal-target>'s', but there is some
        kind of bug that occurs when putting a router-view in a portal-target.
      -->
      <div slot="header">
        <portal-target name="header">
        </portal-target>
        <portal to="header">
          <router-view name="header"/>
        </portal>
      </div>

      <div slot="navigation">
        <portal-target name="navigation">
        </portal-target>
        <portal to="navigation">
          <router-view name="navigation"/>
        </portal>
      </div>

      <div slot="footer">
        <portal-target name="footer">
        </portal-target>
        <portal to="footer">
          <router-view name="footer"/>
        </portal>
      </div>

      <!-- The default router view -->
      <router-view/>
    </q-layout>
  </div>
</template>
