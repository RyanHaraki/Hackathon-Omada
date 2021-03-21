import React, { useState } from "react";
import styled from "styled-components";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { Link } from "react-router-dom";
import MicNoneIcon from "@material-ui/icons/MicNone";
import MicOffIcon from "@material-ui/icons/MicOff";
import VideocamIcon from "@material-ui/icons/Videocam";
import VideocamOffIcon from "@material-ui/icons/VideocamOff";

const LiveRoom = () => {
  const [muted, setMuted] = useState(false);
  const [camera, setCamera] = useState(false);

  return (
    <Container>
      <LiveHeader>
        <div className="nav-left nav">
          <Link to="/">
            <ChevronLeftIcon />
          </Link>
          <h3>Yoga with Sally</h3>
        </div>
        <div className="nav-right nav">
          <ChatBubbleOutlineIcon />
        </div>
      </LiveHeader>
      {/* LIVE HEADER END */}
      {/* ACTUAL PAGE START  */}
      <Main>
        <div class="left">
          <iframe src="https://www.youtube.com/embed/sTANio_2E0Q"></iframe>
          <h3>
            <span>🔴</span> LIVE
          </h3>
        </div>
        <div class="right">
          <h4>Viewers</h4>
          <Viewer
            style={{
              backgroundImage: `url(https://t3.ftcdn.net/jpg/03/49/48/42/360_F_349484220_ztenUZ8pQZ1IC5wsBTWaUZTnMIKZ9wJz.jpg)`,
            }}
          ></Viewer>
          <Viewer
            style={{
              backgroundImage: `url(https://pbs.twimg.com/media/ETULi4YUwAEq-Jo.png)`,
            }}
          ></Viewer>
          <Viewer
            style={{
              backgroundImage: `url(https://thumbs.dreamstime.com/b/portrait-smiling-business-black-man-person-working-home-talking-to-his-colleagues-webcam-group-video-call-182879916.jpg)`,
            }}
          ></Viewer>
          <Viewer
            style={{
              backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI4-uf8Qo4nrGPX_UmmiXp0Etcuv13fWxb4Q&usqp=CAU)`,
            }}
          ></Viewer>
          <Viewer
            style={{
              backgroundImage: `url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2e0cc6fe-79fa-4f8c-8630-780c5f2753ed/d2umpi5-a7cf5ca2-b321-44df-bc01-fa5e3e564c3a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMmUwY2M2ZmUtNzlmYS00ZjhjLTg2MzAtNzgwYzVmMjc1M2VkXC9kMnVtcGk1LWE3Y2Y1Y2EyLWIzMjEtNDRkZi1iYzAxLWZhNWUzZTU2NGMzYS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.QzBkOQNKF4ev5DxYQSNEAeUQD7nfXxhRze7u5Kg5HZg)`,
            }}
          ></Viewer>
        </div>
      </Main>
      <ControlMenu>
        <div className="nav">
          <div onClick={() => setMuted(!muted)}>
            {muted ? <MicNoneIcon /> : <MicOffIcon />}
          </div>
          <div onClick={() => setCamera(!camera)}>
            {camera ? <VideocamIcon /> : <VideocamOffIcon />}
          </div>
        </div>
        <div className="nav"></div>
      </ControlMenu>
    </Container>
  );
};

export default LiveRoom;

const Container = styled.div`
.MuiSvgIcon-root {
  cursor: pointer;
  margin-right: 10px;
  font-size: 1.8rem;
  border-radius: 100%;
  padding: 7px;
  overflow: visible;
  color: black;

  :hover {
    background: #ededed;
  }
`;

const ControlMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  padding: 18px 20px;

  .nav {
    display: flex;
    align-items: center;
  }
`;

const Viewer = styled.div`
  width: 100%;
  height: 18%;
  background: red;
  border-radius: 8px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 10px;
  transition: all 0.2s;

  :hover {
    box-shadow: inset 0px 0px 30px 7px rgba(0, 0, 0, 0.44);
  }
`;

const Main = styled.div`
  padding: 18px 20px 0 20px;
  display: flex;

  .left {
    flex: 0.8;

    iframe {
      height: 60vh;
      width: 100%;
      border: none;
      border-radius: 14px;
      margin: 0;
    }

    h3 {
      margin: 0;
      padding: 0;
    }

    span {
      font-size: 1.1rem;
    }
  }

  .right {
    flex: 0.2;
    padding: 8px;

    h4 {
      margin: 0;
      padding: 0;
    }
  }
`;

const LiveHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  padding: 18px 20px;

  .nav {
    display: flex;
    align-items: center;
  }

  }
`;
