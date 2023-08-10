import { Row, Col } from "antd";
import { Typewriter } from "react-simple-typewriter";
import "./Hope.scss";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import mp3 from "./audio/a.mp3";
import img1 from "../Hope/images/354469006_818480649634327_4231286301221843967_n.jpg";
import img2 from "../Hope/images/z4589506353958_360671124fe6d167869372bce83592d9.jpg";
import img3 from "../Hope/images/z4589611356142_8b8794b66e2a603b50d7f34124b4e6ce.jpg";
import img4 from "../Hope/images/333555555_903285847485414_37415155204430403_n.jpg";
import mp4 from "../Hope/video/b.mp4";
import { FaHandPointDown } from "react-icons/fa";
import { SetCookie } from "../../helpers/SetCookie";
import { useNavigate } from "react-router-dom";
import gif from "../Hope/gif/nyan-cat.gif";
import SlideUpDown from "../../components/SlideUpDown";
function Hope() {
  const [play, setPlay] = useState(true);
  let timerInterval;

  let audio = new Audio(mp3);
  audio.volume = 0.3;
  const start = () => {
    audio.play();
  };
  const obj = {
    name: "Nguyễn Thị Huyền Trang",
    dateOfBirth: "26/06/2004",
  };
  useEffect(() => {
    const handleTouchStart = () => {
      if (play === true) {
        start();
      } else {
        return;
      }
    };

    window.addEventListener("mousedown", handleTouchStart);

    return () => {
      window.removeEventListener("mousedown", handleTouchStart);
    };
  }, [play]);
  const handleOnClick = () => {
    setTimeout(() => {
      Swal.fire({
        title: "OMG!",
        text: "It's uuu 😳",
        imageUrl: `${img1}`,
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: "Custom image",
        confirmButtonText: "~~",
        showClass: {
          popup: "animate__animated animate__backInLeft ",
        },
        hideClass: {
          popup: "animate__animated animate__lightSpeedOutRight animate__fast",
        },
      });
    }, 500);
  };

  const navigate = useNavigate();
  const handleVisit = () => {
    SetCookie("info", JSON.stringify(obj), 1000, 1000);
    Swal.fire({
      width: 600,
      padding: "3em",
      color: "#716add",
      backdrop: `
        rgba(0,0,123,0.4)
        url(${gif})
        left top
        no-repeat
      `,
      html: "Chờ <b></b> milliseconds nha người ẹpp.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        audio.pause();
        setPlay(false);
        navigate("/reveal");
      }
    });
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "35px 0",
        }}
      >
        <div className="heart"></div>
      </div>
      <SlideUpDown />

      <Row justify={"center"}>
        <span className="span_typewritter">
          <Typewriter
            words={["Chào bạn nha ... "]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={80}
            delaySpeed={1000}
          />
        </span>
      </Row>
      <Row justify="center" gutter={[5, 10]}>
        <Col xl={8}>
          <div className="flip">
            <div className="front" style={{ backgroundImage: `url(${img2})` }}>
              <h1 className="text-shadow">you </h1>
            </div>
            <div className="back">
              <p>
                I try to pretend I'm just a friend when though I dream about is
                you.
              </p>
            </div>
          </div>
        </Col>
        <Col xl={8}>
          <div className="flip">
            <div className="front" style={{ backgroundImage: `url(${img3})` }}>
              <h1 className="text-shadow">are </h1>
            </div>
            <div className="back">
              <p>Why am I so afraid to lose you when you are not even mine.</p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="flip">
            <div className="front" style={{ backgroundImage: `url(${img4})` }}>
              <h1 className="text-shadow">pretty 😳</h1>
            </div>
            <div className="back">
              <p>Why i can't stop thinking about u</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row justify="center">
        <Col xl={24} xs={24} sm={24}>
          <h2 className="h2">
            Do u want to see the most beautiful girl in the world ?
          </h2>
        </Col>
      </Row>
      <Row justify="center">
        <div style={{ position: "relative" }} onClick={handleOnClick}>
          <div class="container" id="c">
            <a href={() => false}>
              <div class="button">
                <span> Click ...</span>
              </div>
              <div class="sun"></div>
            </a>
          </div>
        </div>
      </Row>

      <div style={{ textAlign: "center" }}>
        <h2 className="h2-2">
          {" "}
          Coi cái này nè{" "}
          <span>
            {" "}
            <FaHandPointDown />{" "}
          </span>
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "45px",
        }}
        onTouchStart={() => {
          audio.pause();
          setPlay(false);
        }}
      >
        <video
          className="video"
          controls
          onPlay={() => {
            audio.pause();
            setPlay(false);
          }}
          width={400}
          height={300}
          style={{ margin: "0" }}
        >
          <source src={mp4} />
        </video>
      </div>
      <div style={{ textAlign: "center" }}>
        <p className="p-text">any way, bạn có muốn coi thần số học không ?</p>

        <button onClick={handleVisit}>
          <div class="left"></div>
          Nhấn đây nè
          <div class="right"></div>
        </button>
      </div>
    </>
  );
}
export default Hope;
