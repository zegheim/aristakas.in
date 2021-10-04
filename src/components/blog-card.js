import Link from "next/link";
import Date from "./date";
import Tag from "./tag";

const BlogImage = ({ coverImage, title }) => (
  <div className="rounded-t-lg border-t border-l border-r border-tertiary bg-primary overflow-hidden">
    <img src={coverImage} alt={`Cover image for ${title}`} className="mb-0" />
  </div>
);

const BlogMetadata = ({ title, date, tags }) => (
  <div className="flex rounded-b-lg bg-secondary p-4 flex-1 border border-tertiary">
    <div className="text-primary flex flex-col w-full">
      <span className="text-primary font-semibold">{title}</span>
      <span className="text-sm font-light">
        <Date dateString={date} />
      </span>
      <div className="flex w-full justify-end space-x-1">
        {tags.map((tag) => (
          <Tag key={tag.id} name={tag.name} />
        ))}
      </div>
    </div>
  </div>
);

const BlogCard = ({ title, coverImage, date, slug, tags }) => (
  <Link as={`/blog/${slug}`} href="/blog/[slug]">
    <a aria-label={title}>
      <div className="hover:shadow-lg rounded-md flex flex-col">
        <BlogImage coverImage={coverImage} title={title} />
        <BlogMetadata title={title} date={date} tags={tags} />
      </div>
    </a>
  </Link>
);

export default BlogCard;
