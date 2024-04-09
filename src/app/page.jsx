"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-zinc-900 text-xl font-semibold text-white py-2 px-[10%] md:text-2xl">
        <Link href={"/"}>Popular Titles</Link>
      </div>
      <div className="grid grid-flow-row grid-cols-3 gap-x-6 gap-y-20 px-[10%] py-10 md:grid-cols-7">
        <div>
          <Link href={"/series"}>
            <div className="w-full h-48 bg-zinc-800 text-zinc-400 font-bold text-3xl flex justify-center items-center">
              SERIES
            </div>
            <h2 className="text-xs">Popular Series</h2>
          </Link>
        </div>
        <div>
          <Link href={"/movies"}>
            <div className="w-full h-48 bg-zinc-800 text-zinc-400 font-bold text-3xl flex justify-center items-center">
              MOVIES
            </div>
            <h2 className="text-xs">Popular Movies</h2>
          </Link>
        </div>
      </div>
    </>
  );
}
