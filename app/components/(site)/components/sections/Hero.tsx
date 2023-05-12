import { cx } from "class-variance-authority";
import { useRef } from "react";
import InnerSectionContainer from "~/components/shared/core/InnerSectionContainer";
import { useIntersectionObserver } from "~/utils/hooks";

const HomeHeroSection = () => {
  const textContainerRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(
    {
      callback: (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.classList.remove(
              "scale-0",
              "opacity-0",
              "-translate-y-1/2"
            );
          // else entry.target.classList.add("scale-0", "opacity-0");
        });
      },
    },
    textContainerRef.current
  );

  return (
    <section
      id="hero"
      className={cx(
        "relative isolate h-screen max-h-[80rem] custom-section-height-semi-md:h-auto",
        "bg-[url(/images/wahid-khene-iKdQCIiSMlQ-unsplash.webp)] bg-cover bg-fixed bg-center bg-no-repeat"
      )}
    >
      <div className="absolute inset-0 bg-black/80" />
      <InnerSectionContainer
        classVariants={{ py: 64 }}
        ref={textContainerRef}
        className={cx(
          "flex h-full w-full items-center justify-center",
          "-translate-y-1/2 scale-0 opacity-0",
          "transition-all delay-100 duration-1000"
        )}
      >
        <div className="relative flex flex-col gap-2 text-center text-white">
          <h1 className="text-6xl font-semibold">Welcome to my portfolio</h1>
          <p className="text-4xl font-medium">Check out my work below</p>
        </div>
      </InnerSectionContainer>
    </section>
  );
};

export default HomeHeroSection;
