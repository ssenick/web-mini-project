import { type RatingType } from '@/entities/Rating'
import { rtkApi } from '@/shared/api/rtkApi'

interface GetArticleRatingApi {
  userId: string
  articleId: string
}

interface RateArticle {
  userId: string
  articleId: string
  rate: number
  feedback?: string
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<RatingType[], GetArticleRatingApi>({
      query ({ articleId, userId }) {
        return {
          url: '/article-ratings',
          params: {
            userId,
            articleId
          }
        }
      },
      providesTags: result => ['Rating']
    }),
    rateArticle: build.mutation<undefined, RateArticle>({
      query: (arg) => ({
        url: '/article-ratings',
        method: 'POST',
        body: arg
      }),
      invalidatesTags: ['Rating']
    })
  })
})

export const { useGetArticleRatingQuery: useGetArticleRating } = articleRatingApi
export const { useRateArticleMutation: useRateArticle } = articleRatingApi
