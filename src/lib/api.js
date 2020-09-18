import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: "preview.contentful.com",
});

const getClient = (preview) => (preview ? previewClient : client);

const parseAuthor = ({ fields }) => ({
  name: fields.name,
  picture: fields.picture.fields.file,
});

const parseTag = ({ fields }) => ({
  name: fields.name,
  coverImage: fields.coverImage?.fields.file ?? null,
});

const parseTags = (tags) => tags.map(parseTag);

const parsePost = ({ sys, fields }) => ({
  title: fields.title,
  slug: fields.slug,
  date: fields.date,
  created_at: sys.createdAt,
  updated_at: sys.updatedAt,
  content: fields.content,
  excerpt: fields.excerpt,
  coverImage: fields.coverImage.fields.file,
  author: parseAuthor(fields.author),
  tags: parseTags(fields.tags),
});

const parsePostEntries = (entries, cb = parsePost) => entries?.items?.map(cb);

const getPreviewPostBySlug = async (slug) => {
  const entries = await getClient(true).getEntries({
    content_type: "post",
    limit: 1,
    "fields.slug[in]": slug,
  });

  return parsePostEntries(entries)[0];
};

const getAllPostsWithSlug = async () => {
  const entries = await client.getEntries({
    content_type: "post",
    select: "fields.slug",
  });

  return parsePostEntries(entries, (post) => post.fields);
};

const getAllPostsForHome = async (preview) => {
  const entries = await getClient(preview).getEntries({
    content_type: "post",
    order: "-fields.date",
  });
  return parsePostEntries(entries);
};

const getPostAndMorePosts = async (slug, preview) => {
  const entry = await getClient(preview).getEntries({
    content_type: "post",
    limit: 1,
    "fields.slug[in]": slug,
  });

  const entries = await getClient(preview).getEntries({
    content_type: "post",
    limit: 2,
    order: "-fields.date",
    "fields.slug[nin]": slug,
  });

  return {
    post: parsePostEntries(entry)[0],
    morePosts: parsePostEntries(entries),
  };
};

export {
  getPreviewPostBySlug,
  getAllPostsWithSlug,
  getAllPostsForHome,
  getPostAndMorePosts,
};
