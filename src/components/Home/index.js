import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { withAuthorization } from '../Session';

import TopBarPlus from '../TopBarPlus/top-bar-plus';
import CountdownCard from '../CountdownCard';
import WordOfTheDayCard from '../WordOfTheDayCard';
import XPProgressCard from '../XPProgressCard';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const HomePage = () => (
  <div>
    <TopBarPlus />

    <div>
      <div class="ml-5 mt-3 d-inline-block">
        <h1>Welcome back!</h1>
        <p>Jump straight back into learning. Practice makes perfect.</p>
      </div>

      <div class="mr-5 mt-4 d-inline-block float-right">
        <Link to={{pathname: '/chat'}}>
          <Button variant="warning" as="input" type="submit" value="Chat" style={{ width: '35rem', margin: 'auto'}}></Button>
        </Link>
      </div>

      <br /><br />
    </div>

    <div>
      <WordOfTheDayCard />

      <CountdownCard />

      <br /><br />
    </div>

    <div>
      <XPProgressCard />
    </div>
  </div>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);