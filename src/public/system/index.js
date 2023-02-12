import { registerMicroApps, start,addGlobalUncaughtErrorHandler } from 'qiankun';
registerMicroApps([
    {
      name: 'app-system', // app name registered
      entry: 'http://localhost:8080',
      container: '#container',
      activeRule: '/system',
    },
  ]);
  addGlobalUncaughtErrorHandler((event) => {
    // console.log(event);
    const { message } = event;
    if (message && message.includes('died in status LOADING_SOURCE_CODE')) {
      console.log('微应用加载失败，请检查应用是否可运行');
    }
  });
  start(); 
  