import React from "react";
import styled from "styled-components";
import SessionCard from "./SessionCard";

const Book = () => {
  const BarStyling = {
    background: "#F2F1F9",
    border: "none",
    height: "30px",
    padding: "0.75rem",
    marginBottom: "1rem",
    borderRadius: "4px",
    fontSize: "18px",
  };

  return (
    <Container>
      <h1 className="title">Book a Trainer</h1>
      <Main>
        <h2>Available Sessions</h2>

        <SessionCard
          title="Day Starter"
          image="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/7_most_effective_exercises_slideshow/650x350_7_most_effective_exercises_slideshow.jpg"
          bio="Things that would normally raise my blood pressure (a work deadline got moved up, my kids lost their library books) seemed more manageable. I felt like I was better able to put things in perspective, perhaps due to my more positive outlook. (Try these 9 morning exercises to start your day stress-free.) Thomas notes that by starting the day with exercise, you're more focused and balanced."
          time="Monday 8:30am - 9:30am"
        />
        <h2>Comments</h2>
        <div className='textarea-container'>
        <textarea
          placeholder="Leave Comment"
          rows="20"
          name="comment[text]"
          id="comment_text"
          cols="40"
          class="ui-autocomplete-input"
          autocomplete="off"
          role="textbox"
          aria-autocomplete="list"
          aria-haspopup="true"
        ></textarea>
        <button className='submit'>Submit</button>
        </div>
      </Main>
    </Container>
  );
};

export default Book;

const Container = styled.div`
  padding: 20px 18px;
  
  .title {
    text-align: center;
  }
`;

const Main = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 

  h2 {
    font-weight: 500;
  }

.submit {
    height: 40px;
    width: 100px;
    font-size: 1.2rem;
    border: none;
    border-radius: 3px;
    background: #FFD500;
    cursor: pointer;
    
    :hover { 
        background: #FDC500;
    }
}

  .textarea-container {
      display: flex;
      flex-direction: column;
      align-items: center;
  }

  textarea {
    margin-top: 10px;
    margin-left: 50px;
    margin-bottom: 20px;
    width: 700px;
    height: 200px;
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    background: none repeat scroll 0 0 rgba(0, 0, 0, 0.07);
    border-color: -moz-use-text-color #ffffff #ffffff -moz-use-text-color;
    border-image: none;
    border-radius: 6px 6px 6px 6px;
    border-style: none solid solid none;
    border-width: medium 1px 1px medium;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;
    color: #555555;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1em;
    line-height: 1.4em;
    padding: 5px 8px;
    transition: background-color 0.2s ease 0s;
  }

  textarea:focus {
    background: none repeat scroll 0 0 #ffffff;
    outline-width: 0;
  }
`;
