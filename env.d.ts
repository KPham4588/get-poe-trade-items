namespace NodeJS {
    interface ProcessEnv {
      POE_API_URL: string;
      POE_OAUTH_URL: string;
      POE_OAUTH_SECRET: string;
      POE_OAUTH_CLIENT_ID: string;
      POE_OAUTH_REDIRECT_URI: string;
      BASE_URL: string;
      DATABASE_URL: string;
      REDIS_URL: string;
      REDIS_TOKEN: string;
      POE_NINJA_POINTER: string;
      PSAPI_ACCESS_TOKEN: string;
    }
  }