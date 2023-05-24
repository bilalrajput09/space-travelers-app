import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Missions from '../components/Missions';

jest.mock('react-redux');

describe('Should render correct missons', () => {
  test('Should render missons', () => {
    const mockMissions = [
      {
        mission_id: 'mission1',
        mission_name: 'Mission 1',
        description: 'Description 1',
        reserved: true,
      },
      {
        mission_id: 'mission2',
        mission_name: 'Mission 2',
        description: 'Description 2',
        reserved: false,
      },
    ];

    useSelector.mockReturnValue({ missions: mockMissions });

    render(<Missions />);

    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(mockMissions.length + 1);
  });
});
