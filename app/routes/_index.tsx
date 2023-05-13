import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Remix Tailwind Boilerplate" }];
};

export default function Index() {
  return (
    <div>
      <div className="banner"/>
      <div className="mt-12.5 flex flex-col items-center">
        <form>
          <div className="flex items-center gap-3">
            <input type="text" id="token" name="token" placeholder="SOL Token ..."/>
          </div>
        </form>
      </div>
    </div>
  );
}
