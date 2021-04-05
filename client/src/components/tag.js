const Tag = ({ name, blogPost }) => (
  <div
    className={`rounded-md border border-tertiary ${
      blogPost ? "bg-secondary" : "bg-background"
    } bg-background text-primary px-1 py-1 text-2xs leading-none`}
  >
    {name}
  </div>
);

export default Tag;
