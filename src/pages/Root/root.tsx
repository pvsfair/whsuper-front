import { Outlet, useNavigation } from 'react-router';
import rootStyle from './root.module.scss';

export default function Root() {
  const navigation = useNavigation();
  return (
    <>
      <div className={rootStyle.sidebar}>
        <div className={rootStyle.header}>
          <h1>WHSuper</h1>
        </div>
        <div className={rootStyle.menu}>
          <p>placeholder</p>
        </div>
        <div className={rootStyle.footer}>Footer</div>
      </div>
      <div className={`${rootStyle.content} ${navigation.state === 'loading' ? 'loading' : ''}`}>
        <Outlet />
      </div>
    </>
  );
}
