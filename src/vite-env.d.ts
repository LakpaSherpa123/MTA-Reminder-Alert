/// <reference types="vite/client" />



interface MyEnvVariables {
    readonly GOOGLEMAP_API_KEY : string;

  }
  
  interface ImportMeta {
    readonly env: MyEnvVariables;
  }