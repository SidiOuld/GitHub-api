import React, { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";

import "semantic-ui-css/semantic.min.css";
import { Input, Button } from "semantic-ui-react";

import UserCard from "./UserCard";

const Container = styled.div`
  .form {
    margin-top: 25px;
    .form__input {
      margin-right: 5px;
    }
    .form__btn {
      margin-right: 5px;
    }
  }
  .search__msg {
    font-size: 2rem;
    font-weight: bold;
    margin-top: 15%;
  }
`;

function Form() {
  const [userInput, setUserInput] = useState("");
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${name}`)
      .then(res => {
        console.log(res);
        let data = res.data;
        setData(data);
      })
      .catch(err => console.log(err, "noooo"));
  }, [name]);

  function handleSubmit(e) {
    e.preventDefault();
    setName(userInput);
  }

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit} className="form">
        <Input
          placeholder="Username..."
          onChange={handleChange}
          className="form__input"
        />
        <Button type="submit" className="form__btn">
          Search
        </Button>
      </form>
      {/* <UserCard data={data} /> */}
      {name ? (
        <UserCard data={data} />
      ) : (
        <p className="search__msg">
          To search for a user, please enter a valid username...
        </p>
      )}
    </Container>
  );
}

export default Form;

// axios
// semantic -ui react to create card

// form
// input
// button

// state to store userInput
// state to store name and control github username dynamically
// state to store data
