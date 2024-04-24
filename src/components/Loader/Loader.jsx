import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className="flex w-full items-center justify-center flex-col">
      <div className={`${styles.loader}`} />
    </div>
  );
};

export default Loader;
