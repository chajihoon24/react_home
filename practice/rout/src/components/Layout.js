import Stack from 'react-bootstrap/Stack';
import Nav1 from './main'
function Layout() {
  return (
    <Stack gap={3}>
      <div className="p-2"><Nav1/></div>
      <div className="p-2">Second item</div>
      <div className="p-2">Third item</div>
    </Stack>
  );
}

export default Layout;