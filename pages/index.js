import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import { ChevronDownIcon, AdjustmentsIcon } from "@heroicons/react/Outline";
import { useState } from "react";
import axios from "axios";
import BlogList from "../components/BlogList";

export default function Home({ blogsData }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.mainBlogs}>
        <div className={styles.category}>
          <div className={styles.accrodion}>
            {/* accrodion header */}
            <div
              className={styles.accrodion_header}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>دسته بندی مقالات</span>
              <ChevronDownIcon
                className={`${styles.Icon} ${
                  isOpen ? styles.IconRotate : styles.IconStraight
                } `}
              />
            </div>
            {/* accrodion content */}
            <div
              className={`${styles.accrodion_content} ${
                isOpen
                  ? styles.accrodion_content_auto
                  : styles.accrodion_content_hidden
              }`}
            >
              <Link href="#">
                <a>همه پست ها</a>
              </Link>
              <Link href="#">
                <a>ریکت</a>
              </Link>
              <Link href="#">
                <a>جاوا اسکریپت</a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.sort_body}>
          <div className={styles.sort_content}>
            <AdjustmentsIcon className={styles.Icon_sort} />
            <span>مرتب سازی:</span>
          </div>
          <ul>
            <li>جدید ترین</li>
            <li> پربازدید ترین</li>
            <li> محبوب ترین</li>
          </ul>
        </div>
        <div className={styles.blogs}>
          <BlogList blogsData={blogsData} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { data: results } = await axios.get(
    "http://localhost:5000/api/posts?limit=6"
  );
  const { data } = results;
  return {
    props: {
      blogsData: data,
    },
  };
}

{
  /* <div className={styles.blog}>
<div className={styles.blog_img}>
  <img src="/images/vu.png" />
</div>
<div className={styles.blog_content}>
  <h3>کاربرد ریکت </h3>
  <div>
    <div className={styles.blog_header}>
      <div className={styles.blog_content_wrapper}>
        <div className={styles.avatar}>
          <img src="/images/profile.jpg" />
        </div>
        <div className={styles.avatar_span}>علی کربلایی حسینی</div>
      </div>
      <div className={styles.tech}>ری اکت</div>
    </div>
    <div className={styles.blog_datas}>
      <div className={styles.blog_data}>
        <div className={styles.blog_data_comment}>
          <AnnotationIcon className={styles.Icon_comment} />
          <span>5</span>
        </div>
        <div className={styles.blog_data_like}>
          <HeartIcon className={styles.Icon_like} />
          <span>16</span>
        </div>
        <div className={styles.blog_data_bookmark}>
          <BookmarkIcon className={styles.Icon_bookmark} />
        </div>
      </div>
      <div className={styles.blog_time}>
        <ClockIcon className={styles.Icon_clock} />
        <span>زمان مطالعه: 20 دقیقه</span>
      </div>
    </div>
  </div>
</div>
</div> */
}
