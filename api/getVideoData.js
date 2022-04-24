export const getData = async () => {
  //https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=marvel%20trailers&key=[YOUR_API_KEY]

  const key = process.env.YT_API_KEY;
  const url = process.env.FETCH_URL;

  const fetchData = await fetch(
    `${url}?part=snippet&maxResults=25&q=marvel%20trailers&key=${key}`
  );
  const data = await fetchData.json();

  return data.items.map((item) => {
    return {
      //   id: item?.id?.videoId,
      title: item?.snippet?.title,
      thumbnail: item?.snippet?.thumbnails?.high?.url,
      publishedAt: item?.snippet?.publishedAt,
    };
  });
};
