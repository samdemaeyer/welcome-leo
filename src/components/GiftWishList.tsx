import { useState } from "react";
import Modal from "react-responsive-modal";
import "./GiftWishList.css";

export const GiftWishList = () => {
  const [wishListModalIsOpen, setWishListModalIsOpen] = useState(false);
  return (
    <>
      <div className="gift-icon">
        <button
          onClick={() => setWishListModalIsOpen(true)}
          className="wish-list-info-button"
        >
          <i className="fa fa-gift fa-2x icon" aria-hidden="true" />
        </button>
      </div>

      <Modal
        open={wishListModalIsOpen}
        onClose={() => setWishListModalIsOpen(false)}
        center
      >
        <h2>Leo's gifts whish list.</h2>
        <p>
          As the baby borrel approaches, many of you have kindly asked about
          gift ideas. To make things easier, we have put together a wish-list
          with some items we could use. However, please feel no obligation to
          use it, your presence and good wishes are the most important gifts to
          us!
        </p>
        <p>
          If you’d like to take a look,{" "}
          <a
            className="link"
            href="https://www.moonsift.com/collection/kira_slobodina2024/ASrl3fNJP0zOGT4UxPIN"
            target="_blank"
            rel="noreferrer noopener"
          >
            Leo's wish-list can be found here
          </a>
          . But remember, any gift from the heart will be cherished and
          appreciated.
        </p>
      </Modal>
    </>
  );
};
