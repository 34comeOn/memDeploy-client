import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const rootAPI = createApi({
    reducerPath: 'rootAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005'}),
    endpoints: () => ({})
});