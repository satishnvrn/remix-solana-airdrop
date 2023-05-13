import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Remix Tailwind Boilerplate" }];
};

export default function Index() {
  return (
    <div>
      <div className="banner"/>
      <div className="mt-14 flex flex-col items-center">
        <form className="flex flex-col justify-center">
          <div className="flex items-center gap-3 form-group">
            <label htmlFor="token">Enter SOL Token: </label>
            <input type="text" id="token" name="token" placeholder="SOL Token ..."/>
          </div>
          <br />
          <input type="submit" className="bg-[#4CAF50] text-white py-3 px-5 border-none rounded cursor-pointer text-base"/>
        </form>
      </div>
    </div>
  );
}
