"use client"
import React, { useMemo, useState } from "react";
import styles from "./courseSection2.module.css";

const TABS = ["Most popular", "New", "Trending"];

const allCourses = [
  // MOST POPULAR (4)
  {
    id: 1,
    tab: "Most popular",
    title: "Ultimate AWS Certified Solutions Architect Associate 2026",
    author: "Stephane Maarek",
    rating: 4.7,
    ratingsCount: "275,495",
    tags: ["Bestseller"],
    img: "/images/aws-sa.png",
  },
  {
    id: 2,
    tab: "Most popular",
    title: "[NEW] Ultimate AWS Certified Cloud Practitioner CLF‑C02 2026",
    author: "Stephane Maarek",
    rating: 4.7,
    ratingsCount: "272,719",
    tags: ["Bestseller"],
    img: "/images/aws-cp.png",
  },
  {
    id: 3,
    tab: "Most popular",
    title: "CompTIA Security+ (SY0‑701) Complete Course & Practice Exam",
    author: "Jason Dion",
    rating: 4.7,
    ratingsCount: "109,480",
    tags: ["Bestseller"],
    img: "/images/comptia-secplus.png",
  },
  {
    id: 4,
    tab: "Most popular",
    title: "[NEW] Ultimate AWS Certified AI Practitioner AIF‑C01",
    author: "Stephane Maarek",
    rating: 4.7,
    ratingsCount: "33,060",
    tags: ["Bestseller"],
    img: "/images/aws-ai.png",
  },

  // NEW (4)
  {
    id: 5,
    tab: "New",
    title: "Kubernetes for Beginners 2026",
    author: "Mumshad Mannambeth",
    rating: 4.6,
    ratingsCount: "180,000",
    tags: [],
    img: "/images/k8s.png",
  },
  {
    id: 6,
    tab: "New",
    title: "Docker & Containers Complete Guide",
    author: "Tech World",
    rating: 4.6,
    ratingsCount: "95,310",
    tags: [],
    img: "/images/docker.png",
  },
  {
    id: 7,
    tab: "New",
    title: "React & Next.js Complete Developer Course 2026",
    author: "Modern Web",
    rating: 4.8,
    ratingsCount: "145,220",
    tags: ["Bestseller"],
    img: "/images/react.png",
  },
  {
    id: 8,
    tab: "New",
    title: "Complete Node.js & Express Backend Development",
    author: "Code Academy",
    rating: 4.7,
    ratingsCount: "98,450",
    tags: [],
    img: "/images/nodejs.png",
  },

  // TRENDING (4)
  {
    id: 9,
    tab: "Trending",
    title: "Linux Administration Bootcamp",
    author: "IT Masterclass",
    rating: 4.6,
    ratingsCount: "210,430",
    tags: ["Bestseller"],
    img: "/images/linux.png",
  },
  {
    id: 10,
    tab: "Trending",
    title: "Cybersecurity Fundamentals 2026",
    author: "Security Labs",
    rating: 4.5,
    ratingsCount: "120,010",
    tags: [],
    img: "/images/cyber.png",
  },
  {
    id: 11,
    tab: "Trending",
    title: "Complete Python for Security & Automation",
    author: "Code Secure",
    rating: 4.6,
    ratingsCount: "160,890",
    tags: [],
    img: "/images/python-sec.png",
  },
  {
    id: 12,
    tab: "Trending",
    title: "DevOps Engineering: CI/CD with Jenkins & GitLab",
    author: "DevOps Pro",
    rating: 4.7,
    ratingsCount: "132,650",
    tags: ["Bestseller"],
    img: "/images/devops.png",
  },
];

const CourseSection2 = () => {
  const [activeTab, setActiveTab] = useState("Most popular");
  const [query, setQuery] = useState("");

  const filteredCourses = useMemo(() => {
    const lower = query.trim().toLowerCase();
    return allCourses.filter((c) => {
      if (c.tab !== activeTab) return false;
      if (!lower) return true;
      return (
        c.title.toLowerCase().includes(lower) ||
        c.author.toLowerCase().includes(lower)
      );
    });
  }, [activeTab, query]);

  const handleClearSearch = () => {
    setQuery("");
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <div>
            <h2 className={styles.heading}>IT &amp; Software Courses</h2>
            <p className={styles.subheading}>
              Courses to get you started in IT, cloud, security, and more.
            </p>
          </div>

          <div className={styles.searchContainer}>
            <div className={styles.searchWrapper}>
              <svg 
                className={styles.searchIcon} 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search for a course"
                className={styles.searchInput}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <button 
                  className={styles.clearButton}
                  onClick={handleClearSearch}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </header>

        <div className={styles.tabRow}>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={
                activeTab === tab
                  ? `${styles.tabButton} ${styles.tabButtonActive}`
                  : styles.tabButton
              }
            >
              {tab}
            </button>
          ))}
        </div>

        <div className={styles.cardsRow}>
          {filteredCourses.map((course) => (
            <article key={course.id} className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <img
                  src={course.img}
                  alt={course.title}
                  className={styles.cardImage}
                />
                {course.tags.includes("Bestseller") && (
                  <span className={styles.badge}>Bestseller</span>
                )}
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{course.title}</h3>
                <p className={styles.cardAuthor}>{course.author}</p>

                <div className={styles.ratingRow}>
                  <span className={styles.ratingValue}>{course.rating}</span>
                  <div className={styles.ratingStars}>
                    {"★".repeat(5)}
                  </div>
                  <span className={styles.ratingCount}>
                    ({course.ratingsCount})
                  </span>
                </div>

                <div className={styles.priceRow}>
                  <span className={styles.price}>{course.price}</span>
                  <span className={styles.oldPrice}>{course.oldPrice}</span>
                </div>
              </div>
            </article>
          ))}
          {filteredCourses.length === 0 && (
            <div className={styles.noResult}>
              <p>No courses found for "{query}"</p>
              <button onClick={handleClearSearch} className={styles.clearResultBtn}>
                Clear search
              </button>
            </div>
          )}
        </div>

        <div className={styles.whyRow}>
          <div className={styles.whyItem}>
            <span className={styles.whyIcon}>▶</span>
            <p>Learn in‑demand skills with over 250,000 video courses.</p>
          </div>
          <div className={styles.whyItem}>
            <span className={styles.whyIcon}>★</span>
            <p>Choose courses taught by real‑world experts.</p>
          </div>
          <div className={styles.whyItem}>
            <span className={styles.whyIcon}>∞</span>
            <p>Learn at your own pace with lifetime access.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection2;