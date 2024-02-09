import { rtkApi } from '@/shared/api/rtkApi'

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationList: build.query({
      query (limit: number) {
        return {
          url: '/articles',
          params: {
            _limit: limit
          }
        }
      }
    })
  }),
  overrideExisting: false
})

export const { useGetArticleRecommendationListQuery } = recommendationsApi
