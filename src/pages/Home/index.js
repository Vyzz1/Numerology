import Title from "antd/es/typography/Title";
import "./Home.css";
import { Col, Form, Input, Row, Select, Spin } from "antd";
import { useState } from "react";
import { SetCookie } from "../../helpers/SetCookie";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import "animate.css";
function Home() {
  let optionsDay = [];
  for (let i = 1; i <= 31; i++) {
    if (i < 10) {
      optionsDay.push({
        value: `0${i}`,
        label: ` Ngày 0${i} `,
      });
    } else {
      optionsDay.push({
        value: i,
        label: ` Ngày ${i} `,
      });
    }
  }
  let optionsMonth = [];
  for (let i = 1; i <= 12; i++) {
    if (i < 10) {
      optionsMonth.push({
        value: `0${i}`,
        label: ` Tháng 0${i} `,
      });
    } else {
      optionsMonth.push({
        value: `${i}`,
        label: ` Tháng ${i} `,
      });
    }
  }
  let optionsYear = [];
  for (let i = 1900; i <= 2023; i++) {
    optionsYear.push({
      value: i,
      label: `  ${i} `,
    });
  }
  let body = {};
  const naviagte = useNavigate();
  const handleFinish = (e) => {
    body = {
      name: e.name,
      dateOfBirth: `${e.day}/${e.month}/${e.year}`,
    };
    SetCookie("info", JSON.stringify(body), 1000, 1000);
    setLoading(true);
    setTimeout(() => {
      setTip(<h2 style={{ color: "red" }}>Done !</h2>);
      setTimeout(() => {
        naviagte("/reveal");
      }, 1200);
    }, 2000);
  };
  const [loading, setLoading] = useState(false);
  const [tip, setTip] = useState(<h2>Đang tính toán</h2>);
  const antIcon = <LoadingOutlined style={{ fontSize: 45 }} spin />;

  return (
    <>
      <Spin spinning={loading} tip={tip} size="large" indicator={antIcon}>
        <div style={{ textAlign: "center", margin: "25px 0" }}>
          <Title
            className={
              "title" +
              (loading === true
                ? " animate__animated animate__backOutUp animate__slow"
                : "")
            }
          >
            Công cụ tính toán thần số học
          </Title>
        </div>
        <Form onFinish={handleFinish}>
          <Row gutter={[8, 20]}>
            <Col
              xl={{ span: 15, offset: 5 }}
              lg={{ span: 15, offset: 5 }}
              md={{ span: 15, offset: 5 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
              className={
                loading === true
                  ? "  animate__animated animate__zoomOutUp "
                  : ""
              }
            >
              <h3 className="label_form name"> Nhập tên của bạn </h3>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập họ & tên",
                  },
                ]}
                name="name"
              >
                <Input
                  placeholder="Ví dụ Nguyễn Văn A"
                  size="large"
                  className="input_form"
                />
              </Form.Item>
            </Col>
            <Col
              xl={{ span: 5, offset: 5 }}
              lg={{ span: 5, offset: 5 }}
              md={{ span: 5, offset: 5 }}
              sm={{ span: 8, offset: 0 }}
              xs={{ span: 8, offset: 0 }}
              className={
                loading === true
                  ? "  animate__animated animate__fadeOutBottomLeft "
                  : ""
              }
            >
              <h3 className="label_form "> Nhập ngày sinh</h3>
              <Form.Item
                name="day"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập ngày sinh",
                  },
                ]}
              >
                <Select
                  placeholder="e.g 13"
                  size="large"
                  options={optionsDay}
                  className="date_form"
                  allowClear
                  showSearch
                  placement="bottomLeft"
                />
              </Form.Item>
            </Col>
            <Col
              xl={{ span: 5 }}
              lg={{ span: 5 }}
              md={{ span: 5 }}
              sm={{ span: 8 }}
              xs={{ span: 8, offset: 0 }}
              className={
                loading === true
                  ? " animate__animated animate__bounceOutDown  animate__slow"
                  : ""
              }
            >
              <h3 className="label_form error"> Nhập tháng sinh</h3>
              <Form.Item
                name="month"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tháng sinh",
                  },
                ]}
              >
                <Select
                  placeholder="e.g 06"
                  size="large"
                  options={optionsMonth}
                  className="date_form"
                  allowClear
                  showSearch
                  placement="bottomLeft"
                />
              </Form.Item>
            </Col>
            <Col
              xl={{ span: 5 }}
              lg={{ span: 5 }}
              md={{ span: 5 }}
              sm={{ span: 8 }}
              xs={{ span: 8 }}
              className={
                loading === true
                  ? "  animate__animated animate__fadeOutBottomRight "
                  : ""
              }
            >
              <h3 className="label_form"> Nhập năm sinh</h3>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập năm sinh",
                  },
                ]}
                name="year"
              >
                <Select
                  placeholder="e.g 1999"
                  size="large"
                  options={optionsYear}
                  className="date_form"
                  allowClear
                  placement="bottomLeft"
                  showSearch
                />
              </Form.Item>
            </Col>
          </Row>
          <Row justify={"center"}>
            <Col
              className={
                loading === true
                  ? " animate__animated animate__bounceOutDown animate__slow"
                  : ""
              }
            >
              <button class="glowing-btn" type="submit">
                <span class="glowing-txt">
                  Xem kết quả<span class="faulty-letter"></span>
                </span>
              </button>
            </Col>
          </Row>
        </Form>
      </Spin>
      ;
    </>
  );
}
export default Home;
