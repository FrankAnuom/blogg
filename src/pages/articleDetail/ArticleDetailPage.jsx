import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs";
import MainLayout from "../../components/MainLayout";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import SuggestedPosts from "./container/SuggestedPosts";
import CommentsContainer from "../../components/comments/CommentsContainer";

const breadCrumbsData = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Article Title", link: "/blog/1" },
];

const postsData = [
  {
    _id: "1",
    image: images.ecg,
    title: "Understanding Electrocardiogram (ECG)",
    createdAt: "2024-10-28T15:35:53.607+0000",
  },
  {
    _id: "2",
    image: images.ecg,
    title: "Understanding Electrocardiogram (ECG)",
    createdAt: "2024-10-28T15:35:53.607+0000",
  },
  {
    _id: "3",
    image: images.ecg,
    title: "Understanding Electrocardiogram (ECG)",
    createdAt: "2024-10-28T15:35:53.607+0000",
  },

  {
    _id: "4",
    image: images.ecg,
    title: "Understanding Electrocardiogram (ECG)",
    createdAt: "2024-10-28T15:35:53.607+0000",
  },
];

const tagsData = [
  "medical",
  "About Physiology",
  "Healthy",
  "Food",
  "Diet",
  "Education",
];

const ArticleDetailPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5">
        <article className="flex-1 ">
          <BreadCrumbs data={breadCrumbsData} />
          <img className="rounded-xl w-full" src={images.ecg} alt="ECG" />
          <Link
            to="/blog?category=selectedCategory"
            className="text-primary text-sm font-roboto inline-block mt-4 md:text-base"
          >
            Electrocardiogram
          </Link>
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
            Understanding Electrocardiogram (ECG)
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7 ">
              The human heart generates electrical impulses that trigger muscle
              contractions, causing it to beat and pump blood. The
              Electrocardiogram (ECG) captures and records these impulses as
              waveforms, offering a graphical representation of the heart’s
              electrical activity over time. This information helps physicians
              evaluate how efficiently the heart is functioning and detect
              potential problems early. How ECG Works During an ECG, electrodes
              are placed on the patient’s skin at specific points, such as the
              chest, arms, and legs. These electrodes detect electrical signals
              produced by the heart during its different phases: contraction and
              relaxation. The signals are then amplified and displayed as waves
              on an ECG machine. Each waveform on the ECG corresponds to a
              specific part of the heart's cycle. The P wave represents the
              electrical activity of the atria, the QRS complex corresponds to
              the ventricles contracting, and the T wave reflects the relaxation
              phase of the ventricles. By analyzing the size, shape, and timing
              of these waves, medical professionals can determine whether the
              heart is functioning properly. ### Importance of ECG ECGs play a
              critical role in diagnosing several heart conditions, including:
              1. **Arrhythmias:** An abnormal heart rhythm, such as atrial
              fibrillation, can be identified by irregular intervals between
              heartbeats on the ECG. 2. **Heart Attack (Myocardial
              Infarction):** During a heart attack, certain portions of the
              heart may be damaged, altering the typical ECG pattern. These
              changes can indicate the severity and timing of a heart attack,
              guiding immediate treatment. 3. **Electrolyte Imbalances:** The
              ECG can reflect abnormalities caused by imbalances in important
              electrolytes like potassium or calcium, which influence heart
              muscle function. 4. **Structural Problems:** ECGs can also reveal
              evidence of hypertrophy (thickening) of the heart muscle, which
              could be a sign of hypertension or other chronic conditions. ###
              Types of ECG There are different types of ECGs used based on the
              duration and specific needs of the test: - **Resting ECG:** This
              is the most common type, performed while the patient is at rest.
              It typically takes a few minutes and is useful for routine
              check-ups or when a specific heart condition is suspected. -
              **Ambulatory ECG (Holter Monitor):** In this type, the patient
              wears a portable ECG device over a period of 24-48 hours to
              monitor heart activity during daily activities. - **Stress ECG:**
              Conducted while the patient exercises, this test helps assess how
              the heart performs under physical stress. ### Conclusion The ECG
              remains one of the most valuable tools in cardiology. It’s
              non-invasive, easy to perform, and provides crucial insights into
              heart health. With early detection through ECG, many heart
              diseases can be managed or treated more effectively, potentially
              saving lives.
            </p>
          </div>
          <CommentsContainer className="mt-10" loggedInUserId="a" />
        </article>
        <SuggestedPosts
          header="Latest Article"
          posts={postsData}
          tags={tagsData}
          className="mt-8 lg:mt-0  lg:max-w-xs"
        />
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
