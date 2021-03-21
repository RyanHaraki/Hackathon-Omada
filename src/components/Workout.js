import React from "react";
import styled from "styled-components";
import WorkoutCard from "./WorkoutCard";

const Workout = () => {
  return (
    <Container>
      <div>
        <h1>Workouts</h1>
      </div>
      <WorkoutCard 
        titleW="Quick Bicep Pump" 
        video="https://www.youtube.com/embed/de5FnNjRz1o" 
        description="When you perform the rep, do so quickly, pausing at the top to squeeze the biceps as hard as you can. Perform the negative under control, slowly, before doing the next rep begins." 
        time="15min - Medium" />
      <WorkoutCard 
        titleW="Tummy Toner" 
        video="https://www.youtube.com/embed/1f8yoFFdkcY" 
        description="The reverse crunch targets the lower abs, which are tough to tone. Keep your arms at your sides, palms down. Use the abs to lift the legs, bringing the knees directly over the hips."
        time="10min - Beginner"
      />
      <WorkoutCard 
        titleW="Booty Blaster"
        video="https://www.youtube.com/embed/qLPrPVz4NzQ"
        description=" Each exercise, including squats, lunges and leg presses, targeted different aspects of the glutes. Surprisingly, the  hip extension had the highest activation in the gluteus maximus. " 
        time="8min - Difficult"
      />
    </Container>
  );
};

export default Workout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    color: black;

    margin-left: 60px;
    font-size: 3rem;
    font-weight: 600;
  }
`;
