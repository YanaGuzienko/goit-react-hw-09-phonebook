import scss from './Container.module.scss';

const Container = ({ children }) => <div className={scss.container}>{children}</div>;

export default Container;
