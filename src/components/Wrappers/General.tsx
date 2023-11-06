import { ReactNode } from 'react';

const GeneralWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${className} w-full h-full inline-block z-0 bg-light dark:bg-dark p-32 `}
    >
      {children}
    </div>
  );
};

export default GeneralWrapper;
