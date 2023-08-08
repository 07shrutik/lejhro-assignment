import React from "react";
import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <div className={styles.blogcontent}>
      <div className={styles.blog}>
        <h2>Data Analysis: Everything You Need to Know</h2>
        <p className={styles.blockQuote}>
          "Without big data analytics, companies are blind and deaf, wandering
          out onto the web like deer on a freeway."
          <br />~ Geoffrey Moore
        </p>

        <p className={styles.paragraph}>
          Companies today need every edge and advantage they can get. Thanks to
          obstacles like rapidly changing markets, economic uncertainty, finicky
          consumer attitudes, and even global pandemics, businesses today are
          working with slimmer margins for error.
        </p>

        <p className={styles.paragraph}>
          Companies that want to thrive in these competitive markets can improve
          their odds of success with the help of data analysis.
        </p>

        <h5>What is Data Analysis?</h5>
        <p className={styles.paragraph}>
          Data analysis is defined as a process of cleaning, transforming, and
          modeling data to discover useful information for business
          decision-making. The purpose of data analysis is to extract useful
          information from data and make decisions based upon the analysis. The
          information gathered from the data is then presented visually in the
          form of charts, graphs, or dashboards.
        </p>

        <h5>Types of Data Analysis</h5>
        <p className={styles.paragraph}>
          There are several types of data analysis methods that organizations
          use to gain insights:
        </p>

        <p>
          <b>Text Analysis</b>
        </p>
        <p className={styles.paragraph}>
          Text analysis, also referred to as data mining, is a method of
          discovering patterns in large data sets using databases or data mining
          tools. It transforms raw data into business information.
        </p>

        <p>
          <b>Descriptive Analysis</b>
        </p>

        <p className={styles.paragraph}>
          Descriptive analysis aims to answer the question "What happened?" by
          ordering, manipulating, and interpreting raw data from various sources
          to turn it into valuable insights for your organization.
        </p>

        <p>
          <b>Exploratory Analysis</b>
        </p>
        {/* <h5></h5> */}
        <p className={styles.paragraph}>
          Exploratory analysis helps you explore the relationships between data
          and variables, generating hypotheses and solutions for specific
          problems.
        </p>

        <p>
          <b>Statistical Analysis</b>
        </p>

        <p className={styles.paragraph}>
          Statistical analysis shows "What happened?" by using past data in the
          form of dashboards. It includes collection, analysis, interpretation,
          presentation, and modeling of data.
        </p>

        <p>
          <b>Predictive Analysis</b>
        </p>

        <p className={styles.paragraph}>
          Predictive analysis uses past data, exploratory analysis, and machine
          learning to look into the future and uncover future trends, potential
          problems, connections, and causalities in your data.
        </p>

        <p>
          <b>Diagnostic Analysis</b>
        </p>

        <p className={styles.paragraph}>
          Diagnostic analysis finds the cause of events by identifying behavior
          patterns in data. It's useful for identifying similar patterns for new
          problems in your business process.
        </p>

        <p>
          <b>Data Analysis Process</b>
        </p>

        <p className={styles.paragraph}>
          The data analysis process involves several stages:
        </p>

        <p>
          <b>Identify</b>
        </p>

        <p className={styles.paragraph}>
          In the identification stage, you establish the questions you need to
          answer using data analysis. For example, you might identify questions
          about customer perception or engagement strategies.
        </p>

        <p>
          <b>Collect</b>
        </p>
        <p className={styles.paragraph}>
          The collection stage involves gathering data from various sources such
          as surveys, interviews, and questionnaires. You decide which sources
          to use and how to use them.
        </p>

        <p>
          <b>Cleaning</b>
        </p>
        <p className={styles.paragraph}>
          Cleaning involves preparing the collected data by removing duplicates,
          errors, or irrelevant information to ensure accurate analysis.
        </p>

        <p>
          <b>Analysis</b>
        </p>
        <p className={styles.paragraph}>
          During the analysis stage, you manipulate the data and use data
          analysis tools to understand and interpret the information based on
          your requirements.
        </p>

        <p>
          <b>Interpretations</b>
        </p>
        <p className={styles.paragraph}>
          After analyzing the data, it's time to interpret the results. You can
          present your findings using various methods like tables, charts, or
          text.
        </p>

        <p>
          <b>Visualizations</b>
        </p>
        <p className={styles.paragraph}>
          Data visualization is essential for presenting data graphically,
          making it easier for people to understand and process.
        </p>
      </div>
    </div>
  );
};

export default Blog;
