import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: "v3",
});

const getSinglePost = async (postSlug) =>
  await api.posts
    .read({ slug: postSlug, include: "tags" })
    .catch((err) => console.error(err));

const getAllPosts = async (filter) => {
  const params = !filter
    ? { limit: "all", include: "tags" }
    : { limit: "all", fields: filter };
  return await api.posts.browse(params).catch((err) => console.error(err));
};

export { getSinglePost, getAllPosts };
