import { useEffect, useState, useRef } from "react";
import styles from "../styles/pages/diagnostico.module.css";
import "react-circular-progressbar/dist/styles.css";
import jsPDF from "jspdf";
import { Layout } from "../Layout/Layout";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { CategoryIndex } from "../Components/CategoryIndex";
import { useSelector } from "react-redux";
import { diagnosticText } from "../pages/api/diagnostic";
import { test360QuestionsText } from "../pages/api/questions";
import { FormModal } from "../Components/FormModal";
import { PrivacityPolicies } from "../Components/PrivacityPolicies";
import { Report } from "../containers/Report";
import { useRouter } from "next/router";

export default function Diagnostico(props) {
  const [show, setShow] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [policies, setPolicies] = useState(false);
  const [count, setCount] = useState(0);
  const element = useRef(null);
  const [view, setView] = useState(false);
  const [isDownloaded, setIsDownLoaded] = useState(false);
  const { locale } = useRouter();

  const {
    result: { index, strategy, process: process_, people, customers },
    profile: [job, employee_number, experience, position, sector],
    questions,
  } = useSelector((state) => state.index360Slice);

  const { diagnostic, h2, h3, btn } = diagnosticText[locale];

  const indicators = diagnostic(index, strategy, process_, people, customers);

  // --------------data for the main index-------------------//
  const { category, conclusion, heading, value, lse, lie } = indicators[0];

  const textHandler = (value, text, lie, lse) => {
    if (value < lie) {
      return text.low;
    } else if (value >= lie && value < lse) {
      return text.middle;
    } else if (value >= lse) {
      return text.high;
    }
  };
  const colorHandler = (points, lie, lse) => {
    if (points < lie) {
      return "#f57070";
    } else if (points >= lie && points < lse) {
      return "#3aa8f7";
    } else if (points >= lse) {
      return "#e57716";
    }
  };

  const color = colorHandler(value, lie, lse);
  const summary = textHandler(value, heading, lie, lse);
  const text = textHandler(value, conclusion, lie, lse);

  //-------------styles ---------------//
  const hoverClass = (hex) => {
    switch (hex) {
      case "#f57070":
        return styles.redhover;
      case "#3aa8f7":
        return styles.bluehover;
      case "#e57716":
        return styles.orangehover;
    }
  };

  const { testQuestions } = test360QuestionsText[locale];

  // ----------- adding answers to the dbQuestions ------------ //
  const handleDownload = async (user) => {
    let dbQuestions = {
      pregunta_0: "0",
      pregunta_1: "1",
      pregunta_2: "2",
      pregunta_3: "3",
      pregunta_4: "4",
      pregunta_5: "5",
      pregunta_6: "6",
      pregunta_7: "7",
      pregunta_8: "8",
      pregunta_9: "9",
      pregunta_10: "10",
      pregunta_11: "11",
      pregunta_12: "12",
      pregunta_13: "13",
      pregunta_14: "14",
      pregunta_15: "15",
      pregunta_16: "16",
      pregunta_17: "17",
      pregunta_18: "18",
      pregunta_19: "19",
      pregunta_20: "20",
      pregunta_21: "21",
      pregunta_22: "22",
      pregunta_23: "23",
      pregunta_24: "24",
      pregunta_25: "25",
      pregunta_26: "26",
      pregunta_27: "27",
      pregunta_28: "28",
      pregunta_29: "29",
    };

    testQuestions.map((obj, index) => {
      const { question } = obj;
      let pregunta = `pregunta_${index}`;

      if (questions.some((item) => item.question === question)) {
        const filter = questions.filter((key) => key.question === question);
        dbQuestions[pregunta] = filter[0].answer;
      } else {
        dbQuestions[pregunta] = "No aplica";
      }
    });

    handleExport();
    const data = {
      index,
      strategy,
      process: process_,
      people,
      customers,
      job: job.answer,
      employee_number: employee_number.answer,
      experience: experience.answer,
      position: position.answer,
      sector: sector.answer,
      ...user,
      ...dbQuestions,
    };

    // ---------- verify wheter or not send the info to the BD---------- //
    if (!isDownloaded) {
      sendData(data);
      setIsDownLoaded(true);
    }
    setShow(!show);
  };

  const handleClick = () => {
    setPolicies(!policies);
  };

  //--------------sending data to the API ---------------//
  async function sendData(data) {
    const URL = process.env.NEXT_PUBLIC_DB + "/api/users";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const res = await fetch(URL, options);
      const data_res = await res.json();
      console.log(data_res);
      setShow(!show);
    } catch (err) {
      console.log(err);
    }
  }
  // ------------- generating a pdf file -----------------//
  function handleExport() {
    preparePdfChart();
    let doc = new jsPDF("p", "pt", "a3");
    let margin = 10;
    let scale =
      (doc.internal.pageSize.width - margin * 2) / document.body.scrollWidth;

    let target = document.querySelector("#text-sample");

    doc.html(target, {
      x: margin,
      y: margin,
      html2canvas: {
        scale: scale,
      },
      callback: function (doc) {
        doc.save("Evaluación_360-Customer_solutions.pdf");
      },
    });
    setTimeout(() => {
      setShowReport(false);
    }, 500);
  }

  // ------------transforms a canva element to a png image -------------- //

  function preparePdfChart() {
    const canvas = document.querySelector("#radar canvas");
    if (!canvas) {
      return;
    }
    const container = document.querySelector("#radar");
    const img = document.createElement("img");
    const dataURL = canvas.toDataURL();
    img.src = dataURL;
    container.appendChild(img);
    canvas.remove();
  }

  // ------------ freeze modal from -------------------//
  const onDownload = () => {
    if (!show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    setShow(!show);
    setShowReport(true);
  };

  //---------------- animation circle chart ---------------- //

  useEffect(() => {
    //----------------show a dinamic counter------------//
    const sleep = (time) => {
      return new Promise((resolve) => setTimeout(resolve, time));
    };

    const startCount = async () => {
      for (let i = 0; i < index + 1; i++) {
        await sleep(1);
        setCount(i);
      }
    };
    //-------------- intersection observer --------------//
    let options = {
      rootMargin: "0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setView(true);
        setTimeout(() => {
          startCount();
        }, 500);
      }
    }, options);
    observer.observe(element.current);
  }, []);

  // ------------- redirects if user refresh the diagnostic page -----------------//

  return (
    <Layout page="Diagnóstico 360°">
      <section className={`${styles.diagnostic}`} id="diagnostic">
        <h2>{h2}</h2>
        <h3>{h3}</h3>
        <div ref={element} className={`${styles.index_container} `}>
          <h4>{category}</h4>
          <div className={styles.main_index}>
            <div className={styles.index_bar}>
              {view && (
                <>
                  <div className={styles.progressbar}>
                    <CircularProgressbar
                      value={count}
                      text={`${count}%`}
                      styles={buildStyles({
                        rotation: 0.25,
                        strokeLinecap: "butt",
                        textSize: "20px",
                        fontWeight: "bold",
                        pathTransitionDuration: 0.5,
                        pathColor: color,
                        textColor: color,
                        trailColor: "#daedfc",
                        backgroundColor: color,
                      })}
                    />
                  </div>
                </>
              )}
              <span style={{ color }}>{summary}</span>
            </div>
            <div className={styles.index_description}>
              <img src="/assets/Illustrations/results.svg" alt="Index image" />
              <p>{text}</p>
              <button onClick={onDownload}>
                {btn}
                <img
                  src="/assets/icons/download.svg"
                  alt="download complete inform"
                />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.indexes_container}>
          {indicators.map((obj, index) => {
            const { category, conclusion, heading, value, lse, lie } = obj;
            if (index > 0 && value > 0) {
              return (
                <CategoryIndex
                  value={value}
                  category={category}
                  conclusion={conclusion}
                  heading={heading}
                  key={category}
                  textHandler={textHandler}
                  colorHandler={colorHandler}
                  lse={lse}
                  lie={lie}
                  hoverClass={hoverClass}
                />
              );
            }
          })}
        </div>
      </section>
      {showReport && (
        <Report
          index={index}
          color={color}
          text={text}
          indicators={indicators}
          textHandler={textHandler}
          colorHandler={colorHandler}
        />
      )}
      {show ? (
        <FormModal
          handleClick={handleClick}
          handleDownload={handleDownload}
          setShow={setShow}
          show={show}
          setShowReport={setShowReport}
        />
      ) : null}
      {policies ? <PrivacityPolicies handleClick={handleClick} /> : null}
    </Layout>
  );
}
