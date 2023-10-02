import { useState } from "react";

export const Home = () => {
  const [data, setData] = useState({
    name: "Akmal",
    age: "23",
    location: "Tashkent",
  });

  const handleAdd = (property, value) => {
    const newData = { ...data, [property]: value };
    setData(newData);
  };

  const handleDelete = (property) => {
    const newData = { ...data };
    delete newData[property];
    setData(newData);
  };

  return (
    <div className="h-screen py-10">
      <div className="container mx-auto px-10">
        {data.name && (
          <p
            className="text-white font-bold mb-3"
            onClick={() => handleDelete("name")}
          >
            FirstName: <span className="font-normal">{data?.name}</span>
          </p>
        )}
        {data.age && (
          <p
            className="text-white font-bold mb-3"
            onClick={() => handleDelete("age")}
          >
            Age: <span className="font-normal">{data?.age}</span>
          </p>
        )}
        {data.location && (
          <p
            className="font-bold text-white mb-3"
            onClick={() => handleDelete("location")}
          >
            Location: <span className="font-normal">{data?.location}</span>
          </p>
        )}
        {data.instagram && (
          <p
            className="text-white mb-3 font-bold"
            onClick={() => handleDelete("instagram")}
          >
            Instagram: <span className="font-normal">{data?.instagram}</span>
          </p>
        )}
        {data.telegram && (
          <p
            className="text-white mb-3 font-bold"
            onClick={() => handleDelete("telegram")}
          >
            Telegram: <span className="font-normal"> {data?.telegram}</span>
          </p>
        )}
        {data?.github && (
          <p
            className="text-white mb-3 font-bold "
            onClick={() => handleDelete("github")}
          >
            Github: <span className="font-normal">{data?.github}</span>
          </p>
        )}

        <div className="flex gap-2">
          <button
            className="py-1 px-2 text-xs bg-white font-bold"
            onClick={() => handleAdd("instagram", "akmalmamuroff")}
          >
            Add Instagram acc
          </button>
          <button
            className="py-1 px-2 text-xs bg-white font-bold"
            onClick={() => handleAdd("telegram", "@akmalmamuroff")}
          >
            Add Telegram acc
          </button>
          <button
            className="py-1 px-2 text-xs bg-white font-bold"
            onClick={() => handleAdd("github", "akoobeeey")}
          >
            Add Github acc
          </button>
        </div>
      </div>
    </div>
  );
};
