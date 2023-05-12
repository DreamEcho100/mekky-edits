// import dynamic from "next/dynamic";
import { cx } from "class-variance-authority";
import { useRef } from "react";
import Iframe from "~/components/shared/common/Iframe";
import InnerSectionContainer from "~/components/shared/core/InnerSectionContainer";
import { useIntersectionObserver } from "~/utils/hooks";

const HomeMyWorkSection = () => {
  const iframeContainerRef1 = useRef<HTMLDivElement>(null);
  const iframeContainerRef2 = useRef<HTMLDivElement>(null);
  useIntersectionObserver(
    {
      callback: (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.classList.remove("rotate-[25deg]");
          // else entry.target.classList.add("rotate-[25deg]");
        });
      },
      options: { threshold: 0.5 },
    },
    iframeContainerRef1.current,
    iframeContainerRef2.current
  );

  return (
    <section
      id="my-work"
      className={cx(
        "relative isolate",
        "bg-[url(/images/aleksandra-boguslawska-MS7KD9Ti7FQ-unsplash.webp)] bg-cover bg-fixed bg-center bg-no-repeat"
      )}
    >
      <div className="absolute inset-0 bg-white/90" />
      <InnerSectionContainer classVariants={{ gap: 16 }}>
        <header className="flex flex-col gap-2 text-center">
          <h2 className="text-5xl font-semibold">Content Editing</h2>
        </header>
        <div className="flex gap-8">
          <Iframe
            ref={iframeContainerRef1}
            containerProps={{
              className: cx(
                "perspective-animation rotate-[25deg] mx-auto max-w-full aspect-ratio-1-1 sm:aspect-ratio-16-9",
                "transition-all duration-500 delay-500"
              ),
            }}
            title="vimeo-player"
            src="https://player.vimeo.com/video/822644379?h=4b7aafc862"
            width={640}
            height={300}
          />
          <Iframe
            ref={iframeContainerRef2}
            containerProps={{
              className: cx(
                "perspective-animation rotate-[25deg] mx-auto max-w-full aspect-ratio-1-1 sm:aspect-ratio-16-9",
                "transition-all duration-500 delay-100"
              ),
            }}
            src="https://player.vimeo.com/video/822643020?h=f837ecca64"
            width={640}
            height={680}
            allow="autoplay; fullscreen; picture-in-picture"
          />
        </div>
      </InnerSectionContainer>
    </section>
  );
};

export default HomeMyWorkSection;
