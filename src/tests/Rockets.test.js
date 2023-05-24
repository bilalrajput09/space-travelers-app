import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Rockets from '../components/Rockets';

jest.mock('react-redux');

describe('render rockets', () => {
  test('Should render list of rockets', () => {
    const mockedRocketArray = [
      {
        id: 1,
        name: 'Falcon 1',
        type: 'Normal',
        description: 'Lorem',
        reserved: false,
      },
      {
        id: 2,
        name: 'Falcon 2',
        type: 'Normal',
        description: 'Lorem',
        reserved: false,
      },
    ];

    useSelector.mockReturnValue(mockedRocketArray);
    render(<Rockets />);
    const listOfRockets = screen.getAllByRole('listitem');
    expect(listOfRockets).toHaveLength(mockedRocketArray.length);
  });
});
