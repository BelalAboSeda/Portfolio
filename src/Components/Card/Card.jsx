import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import "./Card.scss";

const Card = ({ id, img, title, details, tech }) => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <motion.div
        layoutId={id}
        onClick={() => setSelectedId(id)}
        className="Portfolio_item"
        layout
      >
        <motion.img
          src={img}
          loading="lazy"
          type="image/webp"
          className="Portfolio_img"
          alt={title}
          layoutId={`image-${id}`}
        />
        <div className="Portfolio_hover position-absolute d-grid">
          <h3 className="Portfolio_title">{title}</h3>
        </div>
      </motion.div>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            key="modal"
            className="modal_overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
          >
            <motion.button
              className="Modal_close"
              onClick={() => setSelectedId(null)}
            >
              <IoClose />
            </motion.button>
            <motion.div
              className="modal_content"
               initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
            >
              <motion.img
                src={img}
                loading="lazy"
                type="image/webp"
                className="modal_img"
                alt={title}
              />
              <motion.h3 className="modal_title text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>{title}</motion.h3>
              <div className="modal_list  d-grid">
                {details.map((detail, index) => (
                  <div key={index} className="modal_item">
                    <span>{detail.icon}</span>
                    <h6 className="item_title">{detail.title}</h6>
                    <div className="item_details">
                      <a>{detail.desc}</a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
