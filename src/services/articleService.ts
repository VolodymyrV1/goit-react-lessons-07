import axios from 'axios';


interface ArticlesHttpResponse {
  hits: Article[];
  nbPages: number;
}

export const fetchArticles = async (topic: string) => {
  const response = await axios.get<ArticlesHttpResponse>(
    'https://hn.algolia.com/api/v1/search',
    {
      params: {
        query: topic,

      },
    }
  );

  return response.data;
};
