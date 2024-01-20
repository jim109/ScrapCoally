import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

export type AllJobs = {
  success:         boolean;
  currentDateTime: string;
  currentRecords:  number;
  professionals:   number;
  data:            Datum[];
}

export type Datum = {
  requirement: Requirement;
  _id:         string;
  title:       null | string;
  company:     null | string;
  location:    null | string;
  salary:      null | string;
  keyword:     string[] | null;
  __v:         number;
}

export type Requirement = {
  education?:  string | null;
  experience?: string | null;
  languages?:  string | null;
  skills:      string[] | null;
}

interface Experience {
  success: boolean;
  data: RoleItem[];
}

interface RoleItem {
  role: string;
  cantidad: number;
}

interface Location {
  city: string;
  amount: number
}

export const scrapingApi = createApi({
    reducerPath: "ScrapingApi",
    refetchOnFocus: true, // when the window is refocused, refetch the data
    baseQuery: fetchBaseQuery({
      baseUrl: "https://webscraping-4lkq.onrender.com/scraping/",
    }),
    endpoints: (builder) => ({
      getExperienceJobs: builder.query<Experience, null>({
        query: () => "find-experience",
      }),
      getAllJobs: builder.query<AllJobs, null>({
        query: () => `get-all-jobs`,
      }),
      getByLocation: builder.query<Location, null>({
        query: () => `find-by-location`,
      }),
    }),
  });

  
  export const { useGetAllJobsQuery, 
                useGetExperienceJobsQuery, 
                useGetByLocationQuery,
                                           } = scrapingApi;