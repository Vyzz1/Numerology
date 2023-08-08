import React from "react";
import Title from "antd/es/typography/Title";
import { GetCookie } from "../../helpers/GetCookie";
import { Col, Row } from "antd";
import "./Reveal.scss";
import { Typewriter } from "react-simple-typewriter";

import {
  calculateAttitudeNumber,
  calculateDestinyNumber,
  calculatePassionNumber,
  calculatePersonalityNumber,
  calculateRulingNumber,
  calculateSoulUrgeNumber,
  calculateMissingNumber,
  calculateLifePathNumber,
  calculateMatureNumber,
} from "../../helpers/calculateNumber";

function Reveal() {
  const { dateOfBirth, name } = JSON.parse(GetCookie("info"));
  let rulingNumber = calculateRulingNumber(dateOfBirth);
  let lifePathNumber = calculateLifePathNumber(dateOfBirth);
  let destinyNumber = calculateDestinyNumber(name);
  let matureNumber = calculateMatureNumber(dateOfBirth, name);
  let soulNumber = calculateSoulUrgeNumber(name);
  let personalityNumber = calculatePersonalityNumber(name);
  let passionNumber = calculatePassionNumber(name);
  let attitudeNumber = calculateAttitudeNumber(dateOfBirth);
  let missingNumber = calculateMissingNumber(name);
  console.log(attitudeNumber);
  return (
    <>
      <div
        style={{ textAlign: "center", margin: "25px 0" }}
        className=" animate__animated animate__jackInTheBox animate__fast"
      >
        <Title level={1} className="title title-reveal">
          Your Numerology{" "}
        </Title>
      </div>
      <Row justify="center">
        <Col xl={{ offset: 6, span: 12 }}>
          <div>
            <span className="span_typewritter">
              <Typewriter
                words={[name, dateOfBirth]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={80}
                delaySpeed={1000}
              />
            </span>
          </div>
        </Col>
      </Row>
      <Row gutter={[20, 10]}>
        <Col
          xl={{ span: 3, offset: 5 }}
          lg={{ span: 4, offset: 5 }}
          md={{ span: 5, offset: 2 }}
          sm={{ span: 7, offset: 1 }}
          xs={{ span: 12 }}
          className="animate__animated animate__fadeInLeftBig"
        >
          <div className="box">
            <div className="box__head">
              <div className="box__head-title"> Chủ đạo</div>
              <div className="box__head-sub">Ruling Number</div>
            </div>
            <div className="box__number">{rulingNumber}</div>
          </div>
        </Col>
        <Col
          xl={{ span: 3, offset: 2 }}
          lg={{ span: 4, offset: 2 }}
          md={{ span: 5, offset: 2 }}
          sm={{ span: 7, offset: 1 }}
          xs={{ span: 12 }}
          className="animate__animated animate__flipInX"
        >
          <div className="box">
            <div className="box__head">
              <div className="box__head-title"> Đường đời</div>
              <div className="box__head-sub">Life Path Number</div>
            </div>
            <div className="box__number">{lifePathNumber}</div>
          </div>
        </Col>
        <Col
          xl={{ span: 3, offset: 2 }}
          lg={{ span: 4, offset: 2 }}
          md={{ span: 5, offset: 2 }}
          sm={{ span: 7, offset: 1 }}
          xs={{ span: 12, offset: 0 }}
          className="animate__animated animate__fadeInRightBig"
        >
          <div className="box">
            <div className="box__head">
              <div className="box__head-title"> Sứ mệnh</div>
              <div className="box__head-sub">Destiny Number</div>
            </div>
            <div className="box__number">{destinyNumber}</div>
          </div>
        </Col>
        <Col
          xl={{ span: 3, offset: 5 }}
          lg={{ span: 4, offset: 5 }}
          md={{ span: 5, offset: 2 }}
          sm={{ span: 7, offset: 1 }}
          xs={{ span: 12, offset: 0 }}
          className="animate__animated animate__fadeInLeftBig"
        >
          <div className="box">
            <div className="box__head">
              <div className="box__head-title title-error"> Trưởng thành</div>
              <div className="box__head-sub">Maturity Number</div>
            </div>
            <div className="box__number">{matureNumber}</div>
          </div>
        </Col>
        <Col
          xl={{ span: 3, offset: 2 }}
          lg={{ span: 4, offset: 2 }}
          md={{ span: 5, offset: 2 }}
          sm={{ span: 7, offset: 1 }}
          xs={{ span: 12 }}
          className="animate__animated animate__flipInX"
        >
          <div className="box">
            <div className="box__head">
              <div className="box__head-title"> Linh hồn</div>
              <div className="box__head-sub">Soul Number</div>
            </div>
            <div className="box__number">{soulNumber}</div>
          </div>
        </Col>
        <Col
          xl={{ span: 3, offset: 2 }}
          lg={{ span: 4, offset: 2 }}
          md={{ span: 5, offset: 2 }}
          sm={{ span: 7, offset: 1 }}
          xs={{ span: 12 }}
          className="animate__animated animate__fadeInRightBig"
        >
          <div className="box">
            <div className="box__head">
              <div className="box__head-title"> Nhân cách</div>
              <div className="box__head-sub">Personality Number</div>
            </div>
            <div className="box__number">{personalityNumber}</div>
          </div>
        </Col>
        <Col
          xl={{ span: 3, offset: 5 }}
          lg={{ span: 4, offset: 5 }}
          md={{ span: 5, offset: 2 }}
          sm={{ span: 7, offset: 1 }}
          xs={{ span: 12 }}
          className="animate__animated animate__fadeInLeftBig"
        >
          <div className="box">
            <div className="box__head">
              <div className="box__head-title"> Đam mê</div>
              <div className="box__head-sub">Passion Number</div>
            </div>
            <div className="box__number">
              {" "}
              {Array.isArray(passionNumber) ? (
                <>{passionNumber.join(" ")}</>
              ) : (
                passionNumber
              )}
            </div>
          </div>
        </Col>
        <Col
          xl={{ span: 3, offset: 2 }}
          lg={{ span: 4, offset: 2 }}
          md={{ span: 5, offset: 2 }}
          sm={{ span: 7, offset: 1 }}
          xs={{ span: 12 }}
          className="animate__animated animate__flipInX"
        >
          <div className="box">
            <div className="box__head">
              <div className="box__head-title"> Thái độ</div>
              <div className="box__head-sub">Attitude Number</div>
            </div>
            <div className="box__number">{attitudeNumber}</div>
          </div>
        </Col>
        <Col
          xl={{ span: 3, offset: 2 }}
          lg={{ span: 4, offset: 2 }}
          md={{ span: 5, offset: 2 }}
          sm={{ span: 7, offset: 1 }}
          xs={{ span: 24 }}
          className="animate__animated animate__fadeInRightBig"
        >
          <div className="box">
            <div className="box__head">
              <div className="box__head-title">Số thiếu</div>
              <div className="box__head-sub">Missing Number</div>
            </div>
            <div className="box__number">
              {Array.isArray(missingNumber) ? (
                <>{missingNumber.join(" ")}</>
              ) : (
                missingNumber
              )}
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Reveal;
