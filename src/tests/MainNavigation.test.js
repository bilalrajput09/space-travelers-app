import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

describe('Testing HomePage', () => {
  test('Verify header on the screen', () => {
    render(
      <MemoryRouter>
        <MainNavigation />
      </MemoryRouter>,
    );
    const navElement = screen.getByText(/SpaceX Space Tours/i);
    expect(navElement).toBeInTheDocument();
  });

  test('Should render Rocket as a link', () => {
    render(
      <MemoryRouter>
        <MainNavigation />
      </MemoryRouter>,
    );

    const rocketLink = screen.getByRole('link', { name: /Rockets/i });
    expect(rocketLink).toBeInTheDocument();
  });

  test('Should render Mission as a link', () => {
    render(
      <MemoryRouter>
        <MainNavigation />
      </MemoryRouter>,
    );

    const MissionLink = screen.getByRole('link', { name: /Missions/i });
    expect(MissionLink).toBeInTheDocument();
  });
});
