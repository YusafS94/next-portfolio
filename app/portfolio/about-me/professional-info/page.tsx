import config from "@/app/lib/developer.json";

export default function Page() {
  return (
    <>
      <p className="border-2 border-lines-1">
        Professional Info Nested Page. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quod consequuntur deserunt hic ipsam rem minus alias
        porro optio quis eligendi.
      </p>
      <p className="border-2 border-lines-1">{config.name}</p>
    </>
  );
}
