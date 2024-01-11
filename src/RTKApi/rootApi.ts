import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const rootAPI = createApi({
    reducerPath: 'rootAPI',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL  }),
    endpoints: () => ({})
  });