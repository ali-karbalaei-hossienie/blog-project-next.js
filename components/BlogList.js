import styles from "../styles/Home.module.css";
import {
  AnnotationIcon,
  HeartIcon,
  BookmarkIcon,
  ClockIcon,
} from "@heroicons/react/Outline";
const BlogList = ({ blogsData }) => {
  console.log(blogsData);
  return blogsData.docs.map((blog) => {
    return (
      <div className={styles.blog} key={blog._id}>
        <div className={styles.blog_img}>
          <img src={blog.coverImage} />
        </div>
        <div className={styles.blog_content}>
          <h3> {blog.title} </h3>
          <div>
            <div className={styles.blog_header}>
              <div className={styles.blog_content_wrapper}>
                <div className={styles.avatar}>
                  <img src="/images/profile.jpg" />
                </div>
                <div className={styles.avatar_span}>علی کربلایی حسینی</div>
              </div>
              <div className={styles.tech}>{blog.category.title}</div>
            </div>
            <div className={styles.blog_datas}>
              <div className={styles.blog_data}>
                <div className={styles.blog_data_comment}>
                  <AnnotationIcon className={styles.Icon_comment} />
                  <span>{blog.commentsCount}</span>
                </div>
                <div className={styles.blog_data_like}>
                  <HeartIcon className={styles.Icon_like} />
                  <span>{blog.likesCount}</span>
                </div>
                <div className={styles.blog_data_bookmark}>
                  <BookmarkIcon className={styles.Icon_bookmark} />
                </div>
              </div>
              <div className={styles.blog_time}>
                <ClockIcon className={styles.Icon_clock} />
                <span>زمان مطالعه: {blog.readingTime} دقیقه</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default BlogList;
