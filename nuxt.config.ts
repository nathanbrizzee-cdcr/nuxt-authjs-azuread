// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "node:path"

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false, // enable client side rendering
  // ssr: true, // enable server side rendering
  devServer: {
		port: process.env.NUXT_WEBSERVER_PORT ? Number.parseInt(process.env.NUXT_WEBSERVER_PORT) : 3000
	},
  alias: {
    cookie: resolve(__dirname, "node_modules/cookie")
  },
  app: {
		baseURL: "/myapp/foo", // Set up the relative root URL for the app
	},
  modules: ["@hebilicious/authjs-nuxt"],
  runtimeConfig: {
    authJs: {
      secret: process.env.NUXT_NEXTAUTH_SECRET, // You can generate one with `openssl rand -base64 32`
    },
    github: {
      clientId: process.env.NUXT_GITHUB_CLIENT_ID,
      clientSecret: process.env.NUXT_GITHUB_CLIENT_SECRET,
    },
    azureAD: {
      clientId: process.env.NUXT_AZUREAD_CLIENT_ID,
      clientSecret: process.env.NUXT_AZUREAD_CLIENT_SECRET,
      tenantId: process.env.NUXT_AZUREAD_TENANT_ID
    },
    public: {
      authJs: {
        baseUrl: process.env.NUXT_NEXTAUTH_URL, // The base URL is used for the Origin Check in prod only
        verifyClientOnEveryRequest: true, // whether to hit the /auth/session endpoint on every client request
      },
    },
  },
});
