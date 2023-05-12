import { cx } from "class-variance-authority";
import { useRef } from "react";
import InnerSectionContainer from "~/components/shared/core/InnerSectionContainer";
import { useIntersectionObserver } from "~/utils/hooks";

const HomeAboutSection = () => {
  const textContainerRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(
    {
      callback: (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.classList.remove("scale-0", "opacity-0");
          // else entry.target.classList.add("scale-0", "opacity-0");
        });
      },
    },
    textContainerRef.current
  );

  return (
    <section
      id="about"
      className={cx(
        "relative isolate h-screen max-h-[80rem] custom-section-height-semi-lg:h-auto",
        "bg-[url(/images/matthias-wagner-QrqeusbpFMM-unsplash.webp)] bg-cover bg-fixed bg-center bg-no-repeat"
      )}
    >
      <div className="absolute inset-0 bg-black/80" />
      <InnerSectionContainer className="flex justify-center">
        <h2 className="text-5xl font-semibold capitalize text-white/80">
          about me
        </h2>
        <div
          ref={textContainerRef}
          className={cx(
            "relative ml-auto aspect-square w-1/2 rounded-full bg-white/70",
            "transition-all delay-100 duration-500",
            "scale-0 opacity-0"
          )}
        >
          <div className="absolute inset-[15%] flex items-center justify-self-center text-center">
            <p className="text-3xl">
              A video editor passionate about brining creative ideas to life.
            </p>
          </div>
        </div>
      </InnerSectionContainer>
    </section>
  );
};

export default HomeAboutSection;
