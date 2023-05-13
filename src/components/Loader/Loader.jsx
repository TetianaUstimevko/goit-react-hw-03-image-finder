import HashLoader from 'react-spinners/HashLoader';
import s from './Loader.module.css';

export default function Loader() {
  return (
    <div className={s.overlay}>
      <HashLoader size={250} color={'#461646'} className={s.loader} />
    </div>
  );
}