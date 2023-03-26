import { Layout } from './TaskManager/componentsTaskManager/Layout/Layout';

////TaskManager////
//import { AppBar } from './TaskManager/componentsTaskManager/AppBar/AppBar';
// import { TaskList } from './TaskManager/componentsTaskManager/TaskList/TaskList';
// import { TaskForm } from './TaskManager/componentsTaskManager/TaskForm/TaskForm';

/////ToDo - Nepomniachiy
import { ToDo } from './ToDo/ToDo';
export const App = () => {
  return (
    <>
      <h2>Redux</h2>

      <Layout>
        <h2>Nepomniaschii</h2>
        <ToDo />

        {/* <AppBar />
        <TaskForm />
        <TaskList /> */}
      </Layout>
    </>
  );
};

// style={{
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: 40,
//   color: '#010101'
// }}
