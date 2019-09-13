import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

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
    data: null,
  }

  // componentDidMount() {
  //   axios.get('https://swapi.co/api/people/1/')
  //   .then(res =>
  //     this.setState({ data: res.data })
  //   );
  // }

  async componentDidMount() {
    const {
      getPersonPending,
      getPersonResolved,
      getPersonFailed,
    } = this.props;

    getPersonPending();

    try {
      const result = await axios.get('https://swapi.co/api/people/1/');

      getPersonResolved(result.data);
    }
    catch(error) {
      getPersonFailed(error);
    }
  }

  render() {
    console.log(this.props);

    const { person } = this.props;

    if (person.error) {
      return (
        <div>{person.error}</div>
      );
    }

    if (!person.finished) {
      return (
        <Wrapper>
          <Loader type="Oval" color="#888" height={80} width={80} />
        </Wrapper>
      );
    }

    const { data } = person;

    return (
      <Wrapper>
        <h1>{data.name}</h1>
        <h2>Liste des films:</h2>
        <ul>
        {
          data.films.map( (film, index) =>
            <li key={index}>{film}</li>
          )
        }
        </ul>
      </Wrapper>
    )
  }
}

export default Person;
