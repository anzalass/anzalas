import { Link } from "react-router-dom";
import { listproject } from "./Listproject";

export default function Projects() {
  return (
    <div className="w-full grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-4 gap-3 mx-auto">
      {listproject.map((d, i) => (
        <Link key={i} to={`/project/${d?.byname}`}>
          <div className="border rounded-md mx-auto p-2">
            <img
              src={d.image}
              className="w-[300px] mx-auto h-[150px] object-cover"
              alt=""
            />
            <h1 className="font-noto font-medium">{d.name}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}
