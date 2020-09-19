import Link from "next/link";
import Date from "./date";
import Tag from "./tag";

const BlogImage = ({ coverImage, title, slug }) => (
  <div className="rounded-t-md bg-secondary h-48 overflow-hidden">
    <Link as={`/blog/${slug}`} href="/blog/[slug]">
      <a aria-label={title}>
        <img
          src={coverImage.url}
          alt={`Cover image for ${title}`}
          className="object-cover min-h-full min-w-full rounded-t-md"
        />
      </a>
    </Link>
  </div>
);

const BlogMetadata = ({ title, date, slug, tags }) => (
  <div className="flex rounded-b-md bg-primary p-4 flex-1">
    <div className="text-secondary flex flex-col w-full">
      <Link as={`/blog/${slug}`} href="/blog/[slug]">
        <a aria-label={title} className="font-semibold">
          {title}
        </a>
      </Link>
      <span className="text-sm font-light">
        <Date dateString={date} />
      </span>
      <div className="flex w-full justify-end space-x-1">
        {tags.map((tag) => (
          <Tag key={tag.name} name={tag.name} />
        ))}
      </div>
    </div>
  </div>
);

const BlogCard = ({ title, coverImage, date, slug, tags }) => (
  <div className="rounded-lg border-2 border-tertiary flex flex-col">
    <BlogImage coverImage={coverImage} title={title} slug={slug} />
    <BlogMetadata title={title} date={date} slug={slug} tags={tags} />
  </div>
);

export default BlogCard;
