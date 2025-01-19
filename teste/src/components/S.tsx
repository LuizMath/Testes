import { ChangeEvent, useState } from "react";
import styles from "../styles/S.module.css";
const S = () => {
  const [sValue, setSvalue] = useState<string>("");
  return (
    <>
      <input
        placeholder="React > Angular"
        className={styles["input-test"]}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSvalue(e.target.value)
        }
      />
      <p>{sValue}</p>
    </>
  );
};

export default S;
