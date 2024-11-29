import config from "@/app/lib/developer.json";
export default function Page() {
  return (
    <>
      <p className="border-2 border-lines-1">
        Personal Info Nested Page. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Cumque commodi tempora animi recusandae aliquam
        cupiditate ut numquam aut voluptatem optio.
      </p>
      <p className="border-2 border-lines-1">{config.name}</p>
    </>
  );
}
