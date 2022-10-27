import React from "react";
import { motion } from "framer-motion";
import "./index.css";
import { Form } from "react-bootstrap";
import { HiViewList } from "react-icons/hi";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: ({ delay }) => ({
    opacity: 1,
    transition: {
      delay,
      duration: 1,
    },
  }),
};

export default function Option({ index, todo,remove }) {
  return (
    <motion.div
      custom={{ delay: (index + 1) * 0.1 }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      style={{
        width: "85%",
      }}
      variants={variants}
      layoutId={index}
    >
      <div className="view">
        <HiViewList style={{fontSize: "large",cursor:"pointer"}}/>
        <Form.Control onChange={() => alert("TEST")} value={todo} />
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ cursor: "pointer", scale: 1.2 }}
          type="button"
          onClick={()=>remove(index,todo)}
          className="destroy"
        />
      </div>
    </motion.div>
  );
}
