import { rtkApi } from 'shared/api/rtkApi';
var recommendationsApi = rtkApi.injectEndpoints({
    endpoints: function (build) { return ({
        getArticleRecommendationList: build.query({
            query: function (limit) {
                return {
                    url: '/articles',
                    params: {
                        _limit: limit
                    }
                };
            }
        })
    }); },
    overrideExisting: false
});
export var useGetArticleRecommendationListQuery = recommendationsApi.useGetArticleRecommendationListQuery;
