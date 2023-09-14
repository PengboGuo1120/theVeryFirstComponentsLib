import { Link, Outlet } from 'umi';
import styles from './index.less';
import FancyButton from '../components/FancyButton';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li>
      </ul>
      <FancyButton />
      <Outlet />
    </div>
  );
}
