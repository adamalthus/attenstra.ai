import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy":
        "camera=(), microphone=(), geolocation=(), interest-cohort=()",
      "Content-Security-Policy":
        "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com; img-src 'self' data: https://attenstra.ai; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; form-action 'self' https://buttondown.com; frame-ancestors 'none'; base-uri 'self'; object-src 'none'; upgrade-insecure-requests",
    },
  },
});
