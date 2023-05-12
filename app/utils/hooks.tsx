import { useMemo, useEffect, useState, useRef } from "react";
import { MainHeaderThemes } from ".";

export const useIntersectionObserver = (
  props: {
    callback: IntersectionObserverCallback;
    options?: IntersectionObserverInit;
  },
  ...elems: (HTMLElement | null)[]
) => {
  const [isReady, setIsReady] = useState(false);
  const intersectionObserver = useMemo(() => {
    if (typeof window === "undefined") return;
    return new IntersectionObserver(props.callback, props.options);
  }, [props.callback, props.options]);

  useEffect(() => {
    return () => {
      intersectionObserver?.disconnect();
    };
  }, [intersectionObserver]);

  useEffect(() => {
    if (!isReady || !intersectionObserver) return;

    let filteredElems: HTMLElement[];

    const timeoutId = setTimeout(() => {
      filteredElems = elems.filter(Boolean) as HTMLElement[];

      if (filteredElems.length === 0) return;

      filteredElems.forEach((elem) => intersectionObserver.observe(elem));
    }, 0);

    return () => {
      filteredElems?.forEach((elem) => intersectionObserver.unobserve(elem));
      clearTimeout(timeoutId);
    };
  }, [elems, intersectionObserver, isReady]);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return intersectionObserver;
};

export const useToggleMainHeaderTheme = ({
  options,
  onIntersectionChanged,
}: {
  options?: IntersectionObserverInit;
  onIntersectionChanged: (
    entry: IntersectionObserverEntry,
    themes: typeof MainHeaderThemes
  ) => void;
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  const intersectionObserver = useIntersectionObserver(
    {
      callback: (entries) => {
        entries.forEach((entry) =>
          onIntersectionChanged(entry, MainHeaderThemes)
        );
      },
      options,
    },
    sectionRef.current
  );

  useEffect(() => {
    const sectionRefCurrent = sectionRef.current;
    return () => {
      sectionRefCurrent && intersectionObserver?.unobserve(sectionRefCurrent);
    };
  }, [intersectionObserver, sectionRef]);

  return { sectionRef };
};
