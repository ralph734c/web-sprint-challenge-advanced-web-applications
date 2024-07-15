import { createApi } from '@reduxjs/toolkit/query';
import axios from 'axios';

const articlesUrl = 'http://localhost:9000/api/articles';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const response = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
      });
      return { data: response.data };
    } catch (axiosErr) {
      let err = axiosErr;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: axiosBaseQuery({ baseUrl: articlesUrl }),
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => ({ url: '', method: 'get' }),
    }),
    postArticle: builder.mutation({
      query: (newArticle) => ({
        url: '',
        method: 'post',
        data: newArticle,
      }),
    }),
    updateArticle: builder.mutation({
      query: ({ id, ...updatedArticle }) => ({
        url: `${id}`,
        method: 'put',
        data: updatedArticle,
      }),
    }),
    deleteArticle: builder.mutation({
      query: (id) => ({
        url: `${id}`,
        method: 'delete',
      }),
    }),
  }),
});

export const {
  useGetArticlesQuery,
  usePostArticleMutation,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
} = articlesApi;
