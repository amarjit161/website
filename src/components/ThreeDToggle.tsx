import { useThreeD } from '../context/ThreeDContext';
import { Box, Tooltip } from '@mui/material';
import './ThreeDToggle.css';

export default function ThreeDToggle() {
  const { is3DEnabled, toggle3D } = useThreeD();

  return (
    <Tooltip title={is3DEnabled ? 'Disable 3D Effects' : 'Enable 3D Effects'}>
      <Box
        className="threeD-toggle"
        data-enabled={is3DEnabled}
        onClick={toggle3D}
        role="switch"
        aria-checked={is3DEnabled}
        aria-label="Toggle 3D animations"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggle3D();
          }
        }}
      >
        <div className="toggle-track">
          <div className="toggle-thumb" />
        </div>
        <span className="toggle-label">
          {is3DEnabled ? '3D' : '2D'}
        </span>
      </Box>
    </Tooltip>
  );
}
