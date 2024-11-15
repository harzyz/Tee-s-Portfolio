import React from "react";
import styles from "./styles.module.scss";
import Casestudy from "/public/images/casestudy.png";
import Image from "next/image";
import Button from "@/components/custom_button";
import Link from "next/link";

const CaseStudy = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.case_study}>
        <Image src={Casestudy} alt="Case Study" />
        <div className={styles.inner_case}>
          <Link href={'/case-study'}>
            <Button label={"Case Study"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
