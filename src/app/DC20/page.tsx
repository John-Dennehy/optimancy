import config from "./segment.config";

export default function Page() {
  return (
    <div>
      <article className="prose-sm md:prose lg:prose-xl py-4">
        <h1>{config.title}</h1>
        <p>{config.description}</p>
      </article>
    </div>
  );
}
