import "./SlideUpDown.scss";
import { motion } from "framer-motion";
function SlideUpDown() {
  return (
    <>
      <div className="wrapper">
        <a>
          <div className="wrapper-contain">
            <div className="wrapper-motion">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="wrapper-motion-dev"
              ></motion.div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
export default SlideUpDown;
