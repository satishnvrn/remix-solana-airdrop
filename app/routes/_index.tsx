import type { V2_MetaFunction } from "@remix-run/node";

import { airdropSolana } from "~/services/solService";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Remix Tailwind Boilerplate" }];
};

export default function Index() {
  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    const tokenValue: string = e.target.token.value;
    const amount: number = e.target.amount.value;
    await airdropSolana(tokenValue, amount);
    return false;
  };

  return (
    <div>
      <div className="banner"/>
      <div className="mt-14 flex flex-col items-center">
        <form className="flex flex-col justify-center" onSubmit={handleFormSubmit}>
          <div className="flex items-center gap-3 form-group">
            <label htmlFor="token">Enter SOL Token: </label>
            <input type="text" id="token" name="token" placeholder="SOL Token ..." required/>
          </div>
          <div className="flex items-center gap-3 form-group">
            <label htmlFor="amount">Enter SOL Amount to Airdrop: </label>
            <input type="number" id="amount" name="amount" placeholder="SOL Amount ..." required/>
          </div>
          <br />
          <input type="submit" className="bg-[#4CAF50] text-white py-3 px-5 border-none rounded cursor-pointer text-base"/>
        </form>
      </div>
    </div>
  );
}
