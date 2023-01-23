import styled from "styled-components";

export const Input = styled.input`
  width: 335px;
  height: 35px;
  padding: 5px;
  margin-bottom: 15px;
  border-radius: 6px;
  border: 2px solid #e3e8ec;
  :focus {
    outline: 2px solid #7da6e6;
  }
  :invalid {
    outline: 2px solid red;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  font-size: 18px;
  font-family: "Noto Sans JP", sans-serif;
  padding-left: 15px;
  color: #666666;
`;

export const H1 = styled.h1`
  color: #666666;
  font-family: "Noto Sans JP", sans-serif;
`;
export const Form = styled.form`
  display: flex;
  align-items: start;
  padding-left: 100px;
  justify-content: center;
  flex-direction: column;
  width: 500px;
`;
export const Label = styled.label`
  color: #a8a8a8;
  font-family: "Noto Sans JP", sans-serif;
  padding-bottom: 4px;
  padding-top: 10px;
`;
export const Div = styled.div`
  border: 2px solid #e3e8ec;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const Section = styled.section`
  width: 300px;
  background-color: #ebf6fa;
  border-bottom-right-radius: 7px;
  border-top-right-radius: 7px;
  height: 540px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 50px;
`;

export const H2 = styled.h2`
  color: #458fcf;
  font-size: 20px;
  font-weight: 800;
  font-style: italic;
`;
export const H3 = styled.h3`
  color: #7eb0db;
  font-size: 20px;
  font-weight: 500;
  font-style: italic;
`;
export const Strong = styled.strong`
  color: #4a9be2;
  font-size: 18px;
  font-weight: 800;
  font-style: italic;
`;
export const Underline = styled.div`
  height: 2px;
  width: 80%;
  background-color: #dce8ec;
  margin-top: -10px;
  margin-bottom: 10px;
`;
export const ButtonStyle = styled.button`
  width: 360px;
  height: 40px;
  background-color: #447aa9;
  color: aliceblue;
  font-size: 18px;
  font-weight: 800;
  border: none;
  border-radius: 7px;
  margin-top: 15px;
`;
export const Paragraph = styled.p`
  color: red;
  font-size: 10px;
  font-weight: 800;
  margin-top: -16px;
`;
