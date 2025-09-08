import React from "react";
import styled from "styled-components";

const AppCard = () => {
  return (
    <StyledWrapper>
      <div className="book">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Whatsapp Chat
          </h3>

          <a
            href="https://wa.me/+263712505368"
            className="text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors"
          >
            Chat on WhatsApp
          </a>
          <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
        </div>

        <div className="cover bg-gradient-to-b from-gray-50 to-pink-500/40">
          <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center  justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .book {
    position: relative;
    border-radius: 10px;
    width: 260px;
    height: 300px;
    background-color: transparent;
    -webkit-box-shadow: 1px 1px 12px #e269dcff;
    box-shadow: 1px 1px 12px #f36eddff;
    -webkit-transform: preserve-3d;
    -ms-transform: preserve-3d;
    transform: preserve-3d;
    -webkit-perspective: 2000px;
    perspective: 2000px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #000;
  }

  .cover {
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    cursor: pointer;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform-origin: 0;
    -ms-transform-origin: 0;
    transform-origin: 0;
    -webkit-box-shadow: 1px 1px 12px #e269dcff;
    box-shadow: 1px 1px 12px #f36eddff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .book:hover .cover {
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform: rotatey(-80deg);
    -ms-transform: rotatey(-80deg);
    transform: rotatey(-80deg);
  }
`;

export default AppCard;
