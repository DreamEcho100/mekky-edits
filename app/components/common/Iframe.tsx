import { cx } from "class-variance-authority";
import type { IframeHTMLAttributes, HTMLAttributes, ForwardedRef } from "react";
import { forwardRef } from "react";

type Props = IframeHTMLAttributes<HTMLIFrameElement> & {
  containerProps?: HTMLAttributes<HTMLDivElement>;
};

type ContainerRef = HTMLDivElement;

// eslint-disable-next-line react/display-name
const Iframe = forwardRef<ContainerRef, Props>(
  (
    { containerProps = {}, ...props }: Props,
    ref: ForwardedRef<ContainerRef>
  ) => {
    return (
      <div
        {...containerProps}
        ref={ref}
        className={cx(
          "iframe-container relative w-full overflow-hidden",
          containerProps.className
        )}
      >
        <iframe
          frameBorder={0}
          allowFullScreen
          {...props}
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }
);
export default Iframe;
