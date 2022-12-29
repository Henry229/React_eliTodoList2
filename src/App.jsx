import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

const filters = ['all', 'active', 'complete'];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList />
    </>
  );
}

export default App;
