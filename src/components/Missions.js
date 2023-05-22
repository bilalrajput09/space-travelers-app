import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getAllMission from '../redux/missions/missionActions';
import styles from './styles/Missions.module.css';

const Missions = () => {
  const { missions } = useSelector((state) => state.mission);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMission());
  }, []);

  return (
    <table className={styles.table}>
      <tr className={styles.table_head_row}>
        <th className={styles.mission_header}>Mission</th>
        <th className={styles.description_header}>Description</th>
        <th className={styles.status_header}>Status</th>
        <th className={styles.join_btn_header} />
      </tr>
      {
                missions.map((mission) => (
                  <tr key={mission.mission_id}>
                    <td className={styles.mission_name_cell}>
                      {mission.mission_name}
                    </td>
                    <td className={styles.description_cell}>
                      {mission.description}
                    </td>
                    <td className={styles.status_cell}>
                      <div className={styles.status_label}>Not a Member</div>
                    </td>
                    <td className={styles.join_button_cell}>
                      <input type="submit" className={styles.join_mission_btn} value="Join Mission" />
                    </td>
                  </tr>
                ))
            }
    </table>
  );
};

export default Missions;
