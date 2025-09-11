import { forwardRef } from "react";

const Page = forwardRef((props, ref) => {
  return (
    <div className={`demoPage bg-transparent`} ref={ref}>
      <div className="h-full">
        {props.children}
      </div>
    </div>
  );
});

export default Page;

//basic page layout