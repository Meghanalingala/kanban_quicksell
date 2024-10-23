import React, { useState } from 'react';
import BoardColumn from './BoardColumn';
import Navbar from './Navbar';
import useApiData from '../Utils/useApiData';
import useGroup from '../Utils/useGroup';
import useSort from '../Utils/useSort';
import '../CSS/Board.css';

const Board = () => {
  const tickets = useApiData();
  const [groupingOption, setGroupingOption] = useState('priority');
  const [sortingOption, setSortingOption] = useState('');

  const groupedTickets = useGroup(tickets, groupingOption);
  const sortedTickets = useSort(groupedTickets, sortingOption);

  const renderColumns = () => {
    return sortedTickets.map((group) => (
      <BoardColumn key={group.key} group={group} />
    ));
  };

  return (
    <div>
      <Navbar
        groupingOption={groupingOption}
        setGroupingOption={setGroupingOption}
        sortingOption={sortingOption}
        setSortingOption={setSortingOption}
      />

      <div className="kanban-board">{renderColumns()}</div>
    </div>
  );
};

export default Board;