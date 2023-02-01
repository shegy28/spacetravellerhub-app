/* eslint-disable no-unused-vars */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/combineStore';
import Mission from '../pages/Mission';
import Nav from '../components/Navigation';
import Profile from '../pages/Profile';
import RocketList from '../pages/RocketList';

describe('Render All Components', () => {
  test('render navbar', () => {
    const { container } = render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
<header>
  <nav>
    <div
      class="logo"
    >
      <img
        alt="space pic"
        class="logo-img"
        src="planet.png"
      />
      <h2>
        Space Traveller Hub
      </h2>
    </div>
    <ul
      class="nav-items"
    >
      <li>
        <a
          aria-current="page"
          class="link active"
          href="/"
        >
          Rockets
        </a>
      </li>
      <li>
        <a
          class="link"
          href="/mission"
        >
          Missions
        </a>
      </li>
      <li>
        <a
          class="link"
          href="/profile"
        >
          My Profile
        </a>
      </li>
    </ul>
  </nav>
</header>
`);
  });

  test('render Profile', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Profile />
        </Provider>
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
<div
  class="bookings"
>
  <div
    class="rocket-bookings"
  >
    <h1>
      Rocket bookings
    </h1>
    <ul
      class="bookings-list"
    />
  </div>
  <div
    class="mission-bookings"
  >
    <h1>
      Mission bookings
    </h1>
    <ul
      class="bookings-list"
    />
  </div>
</div>
`);
  });

  test('render Rockets', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <RocketList />
        </Provider>
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
<div
  class="rocketlist"
/>
`);
  });
});
