import React, { useContext } from "react";
import { assets } from "../../src/assets/assets";
import "./Main.css";
import { Context } from "../../src/context/context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    stop,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Orion</p>
        <img src={assets.orion_ai} alt="" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Developer</span>
              </p>
              <p>How can I help You today ?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Compare the differences between pickleball and tennis</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Help me sound like an expert for an upcoming trip</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Create an image & bedtime story</p>
                <img src={assets.gemini_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the readability of the code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.orion_ai} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            {!loading ? (
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                {input ? (
                  <img
                    onClick={() => onSent()}
                    src={assets.send_icon}
                    alt=""
                    className="send-icon"
                  />
                ) : null}
              </div>
            ) : (
              <div>
                <a onClick={() => stop()}>
                  <i className="fi fi-br-cross stop">X</i>
                </a>
              </div>
            )}
          </div>
          <p className="bottom-info">
            Orion may display inaccurate info, including about people, so
            double-check its responses. Your privacy & Orion
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
