import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getAllMission from '../redux/missions/missionActions';
import styles from './styles/Missions.module.css';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';

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
        <th className={styles.join_btn_header}>Join missions</th>
      </tr>
      {missions.map((mission) => (
        <tr key={mission.mission_id}>
          <td className={styles.mission_name_cell}>{mission.mission_name}</td>
          <td className={styles.description_cell}>{mission.description}</td>
          <td className={styles.status_cell}>
            {mission.reserved ? (
              <div className={styles.status_active_label}>Active Member</div>
            ) : (
              <div className={styles.status_label}>Not a Member</div>
            )}
          </td>
          <td className={styles.join_button_cell}>
            {mission.reserved
              && (
              <input
                type="submit"
                className={styles.join_mission_reserved_btn}
                value="Leave Mission"
                onClick={() => {
                  dispatch(leaveMission(mission.mission_id));
                }}
              />
              )}
            {!mission.reserved
          && (
          <input
            type="submit"
            className={styles.join_mission_btn}
            value="Join Mission"
            onClick={() => {
              dispatch(joinMission(mission.mission_id));
            }}
          />
          )}
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Missions;
