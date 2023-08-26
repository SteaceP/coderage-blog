import Container from "../components/container";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            Hey, I'm a Developer at CodeRage. I enjoy working with Next.js,
            crafting wonderful back-end experiences and trying to make them look
            as good as possible. Hints: I s***!
          </h1>
          <p>
            This blog/portfolio is built with Next.js and Tailwind CSS. Why?
            Because everyone uses them and I have no imagination! P.S. I have
            lots of other qualities.
          </p>
        </div>
      </Container>

      <div className="container max-w-4xl m-auto px-4 mt-20">
        <Image
          src="/desk.jpg"
          alt="my desk"
          width={1920 / 2}
          height={1280 / 2}
        />
      </div>
    </>
  );
}

export default HomePage;
