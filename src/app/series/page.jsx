"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
// import x from "../../../public/imagenotfound.png";
const SeriesPage = async () => {
  const [series, setSeries] = useState([]);
  const [az, setAz] = useState("");

  const getSeries = async () => {
    const res = await fetch("http://localhost:4000/entries");
    const data = await res.json();
    const series = await data.filter(
      (item) => item.programType === "series" && item.releaseYear >= 2010
    );
    if (az === "A-Z") {
      const seriesSort = series.sort((i1, i2) =>
        i1.title.localeCompare(i2.title)
      );
      setSeries(seriesSort);
    }
    if (az === "Z-A") {
      const seriesSort = series.sort((i1, i2) =>
        i2.title.localeCompare(i1.title)
      );
      setSeries(seriesSort);
    }
    setSeries(series);
  };

  useEffect(() => {
    getSeries();
  }, [az]);

  return (
    <>
      <div className="bg-zinc-900 text-xl font-semibold text-white py-2 px-[10%] md:text-2xl">
        <Link href={"/"}>Popular series</Link>
      </div>
      {series !== null && (
        <div className="px-[10%] py-10">
          <div className="flex justify-end">
            <select
              onClick={(e) => setAz(e.target.value)}
              className="p-1 border-1 hover:border-solid hover:border-2 my-6 w-20 "
            >
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
          </div>
          <div className="grid grid-flow-row grid-cols-3 place-items-center items-center gap-x-6 gap-y-20 md:grid-cols-7">
            {series.map((i) => (
              <div
                key={i.title}
                className="w-full bg-slate-100 h-40 hover:w-[120%] hover:h-[110%] hover:drop-shadow-xx"
              >
                <img
                  className="w-[100%] h-[100%]"
                  src={i.images["Poster Art"].url}
                  onError={(e) => (e.target.src = "/imagenotfound.png")}
                  alt={i.title}
                />
                <h2 className=" font-bold">{i.title}</h2>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SeriesPage;
