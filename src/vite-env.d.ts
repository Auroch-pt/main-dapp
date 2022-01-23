/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_HASURA_ENDPOINT: string;
  readonly VITE_HASURA_ADMIN_SECRET: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
