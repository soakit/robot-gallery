import React, { useEffect, useState } from 'react';

import styles from "./App.module.css";
import logo from "./assets/images/logo.svg";
// import robotData from './mock/robots.json'
import Robot, { RobotProps } from './components/Robot'

const App: React.FC = () => {
  const [robotGallery, setRobotGallery] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const responses = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await responses.json();
        setRobotGallery(data);
      } catch (e) {
        setError(e.message);
      }
      setLoading(false);
    }

    fetchData();
  }, [])

  return <div className={styles.app}>
    <div className={styles.appHeader}>
      <img src={logo} className={styles.appLogo} alt="logo" />
      <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
    </div>
    {(error !== undefined) && <div>网站出错：{typeof error}</div>}
    {!loading ? (
      <div className={styles.robotList}>
        {robotGallery.map((r: RobotProps) => (
          <Robot id={r.id} email={r.email} name={r.name} />
        ))}
      </div>
    ) : (
    <h2>loading 加载中...</h2>
    )}
  </div>
}

export default App;
