import { IconKeys, IconsObj } from './TechIconList';
import { motion } from 'framer-motion';

const TechStack = ({ techUsed }: { techUsed: IconKeys[] }) => {
  const TechTag = ({ iconName }: { iconName: string | number }) => {
    const { icon, title } = IconsObj[iconName];

    return (
      <motion.div
        whileHover={{ scale: 1.15 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className=" bg-dark cursor-pointer dark:bg-light flex   items-center gap-2 px-2 py-2 rounded-3xl"
      >
        {/*icon*/}
        <div className=" w-8 ">
          <div className="">{icon}</div>
        </div>
        {/*title*/}
        <div className="text-xl font-semibold"> {title}</div>
      </motion.div>
    );
  };

  const container = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delay: 0.4,
      },
    },
  };

  const singleTag = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="initial"
        whileInView="animate"
        className="flex items-center gap-6 pt-5 flex-wrap w-full"
      >
        {techUsed.map((item) => (
          <motion.div key={item} variants={singleTag}>
            <TechTag iconName={item} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default TechStack;
