import config from "@/app/lib/developer.json";
export default function Page() {
  return (
    <>
      <p className="border-2 border-lines-1">
        Hobbies Info Nested Page. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Inventore beatae at voluptatem temporibus mollitia in
        tenetur optio amet, aliquam pariatur?
      </p>
      <p className="border-2 border-lines-1">{config.name}</p>
    </>
  );
}
