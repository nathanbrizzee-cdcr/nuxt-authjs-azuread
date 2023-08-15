<script setup lang="ts">
   // definePageMeta({ middleware: "guest-only", auth: { authenticatedRedirectTo: "/profile" } })
   const { signIn, signOut, session, status, cookies } = useAuth()
</script>

<template>
  <div style="margin: 20px">
    <div>
      <div>
        Open an in-private browser window to test with to ensure you don't get leftover cookies or cookie crumbs.  <br />
        Also, check the browser console log for errors as you sign in and out.
      </div>
      <br />
      <!-- This will not work in Client Side Rendering -->
      <NuxtLink to="api/auth/signin" style="margin-right:20px">
        Native Link Sign in (does not work)
      </NuxtLink>
      <!-- This must be relative pathing to work -->
      <a href="api/auth/signin" style="margin-right:20px">
        Native Link Sign in (will fail sometimes with the wrong next-auth.callback-url location on first click)
      </a>
      <button @click="signIn(`azuread`)" style="margin-right:20px">
        JS Azure AD Sign In
      </button>
      <!-- <button @click="signIn(`github`)" style="margin-right:20px">
        JS Github Sign In
      </button> -->
      <button @click="signOut()" class="btn" style="margin-right:20px">
        Sign Out (Does not work)
      </button>
      <!-- This must be relative pathing to work -->
      <a href="api/auth/signout" style="margin-right:20px">
        Native Link Sign out
      </a>
      <br />
      <div>
      <NuxtLink to="profile">
        Profile
      </NuxtLink>
    </div>
    <div>
      <NuxtLink to="private">
        Private
      </NuxtLink>
    </div>
    </div>
    <div class="mt-5">
      <pre>{{ status }}</pre>
      <!-- <pre>{{ session?.user }}</pre> -->
      <pre>{{ session }}</pre>
      <pre>{{ cookies }}</pre>
    </div>
  </div>
</template>
