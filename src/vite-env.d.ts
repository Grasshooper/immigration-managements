/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLERK_PUBLISHABLE_KEY: pk_test_c2V0dGxlZC1zaGFyay04LmNsZXJrLmFjY291bnRzLmRldiQ
  // add more environment variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}