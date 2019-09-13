import React, { Component } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

import styled from 'styled-components';

import Logo from '../../images/Star_Wars_Logo.svg';

const Page = styled.div`
  background: black;
  color: white;
  height: 100vh;
  overflow-y: auto;
  text-align: center;
  padding: 2em;
`;

const Wrapper = (props) =>
  <Page>
    <img src={Logo} />
    {props.children}
  </Page>
;

class Person extends Component {
  state = {
    value: 0,
  }

  // componentDidMount() {
  //   axios.get('https://swapi.co/api/people/1/')
  //   .then(res =>
  //     this.setState({ data: res.data })
  //   );
  // }

  async update(value) {
    const {
      getPersonPending,
      getPersonResolved,
      getPersonFailed,
    } = this.props;

    getPersonPending();

    if (value > 0) {
      try {
        const result = await axios.get(`https://swapi.co/api/people/${value}`);

        getPersonResolved(result.data, value);
      }
      catch(error) {
        getPersonFailed(error);
        console.error(error);
      }
    }
  }

  handleChange = (event) => {
    const value = event.target.value;

    this.setState({ value });

    if (value > 0) {
      if (!this.props.person.data.hasOwnProperty(value)) {
        this.update(value);
      }
    }
  }

  render() {
    console.log(this.props);

    const { person } = this.props;
    const { value } = this.state;

    if (value <= 0) {
      return (
        <Wrapper>
          <input type="number" onChange={this.handleChange} />
        </Wrapper>
      );
    }

    if (person.error) {
      return (
        <Wrapper>
          <input type="number" onChange={this.handleChange} />
          {person.error}
        </Wrapper>
      );
    }

    if (!person.finished) {
      return (
        <Wrapper>
          <input type="number" onChange={this.handleChange} />
          <Loader type="Oval" color="#888" height={80} width={80} />
        </Wrapper>
      );
    }

    const { data } = person;
    console.log(data);

    return (
      <Wrapper>
        <input type="number" onChange={this.handleChange} />
        <h1>{data[value].name}</h1>
        <h2>Liste des films:</h2>
        <ul>
        {
          data[value].films.map( (film, index) =>
            <li key={index}>{film}</li>
          )
        }
        </ul>
      </Wrapper>
    )
  }
}

export default Person;
