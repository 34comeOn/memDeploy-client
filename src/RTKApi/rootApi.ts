import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const rootAPI = createApi({
    reducerPath: 'rootAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://memorizer-app.com:3002' }),
    endpoints: () => ({})
  });