import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Remix Tailwind Boilerplate" }];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }} className="m-10">
      <h1 className="text-3xl font-bold">Welcome to Remix and Tailwind Boilerplate</h1>
      <ul>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer" className="text-indigo-500">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
