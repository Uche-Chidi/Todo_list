"use client";
import React, { useState } from 'react';
import { MdDelete, MdOutlineLightMode } from "react-icons/md";
import { Checkbox } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

export default function Main() {
  const [displayVal, setDisplayVal] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [checkedItems, setCheckedItems] = useState({});
  const [filter, setFilter] = useState("all");

  const handleClick = () => {
    if (inputVal.trim() !== "") {
      setDisplayVal([...displayVal, { id: Date.now(), text: inputVal }]);
      setInputVal("");
    }
  };

  const handleCheck = (id) => {
    setCheckedItems({
      ...checkedItems,
      [id]: !checkedItems[id],
    });
  };

  const handleDelete = (id) => {
    setDisplayVal(displayVal.filter(task => task.id !== id));
    const newCheckedItems = { ...checkedItems };
    delete newCheckedItems[id];
    setCheckedItems(newCheckedItems);
  };

  const deleteCompletedTasks = () => {
    const newDisplayVal = displayVal.filter(task => !checkedItems[task.id]);
    setDisplayVal(newDisplayVal);
    const newCheckedItems = {};
    newDisplayVal.forEach(task => {
      if (checkedItems[task.id]) {
        newCheckedItems[task.id] = checkedItems[task.id];
      }
    });
    setCheckedItems(newCheckedItems);
  };

  const filteredTasks = displayVal.filter(task => {
    if (filter === "all") return true;
    if (filter === "completed") return checkedItems[task.id];
    if (filter === "active") return !checkedItems[task.id];
  });

  const popLayout = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
  };

  const totalTasks = displayVal.length;
  const completedTasks = displayVal.filter(task => checkedItems[task.id]).length;
  const activeTasks = totalTasks - completedTasks;

  return (
    <section className='min-h-screen bg-black'>
      <div className='relative bg-black min-h-screen'>
        <div className='bg-cover h-[45vh]' style={{ backgroundImage: 'url(/bg-desktop-dark.jpg)' }}>
          <div className='flex flex-col justify-center items-center'>
            <div className='flex items-center gap-20 md:gap-x-28'>
              <h1 className='text-5xl font-extrabold text-white py-10 justify-start'>TO DO</h1>
              <span className='text-2xl cursor-pointer justify-end'><MdOutlineLightMode /></span>
            </div>
            <div className=''>
              <input
                type='text'
                onChange={(e) => setInputVal(e.target.value)}
                placeholder='Add a task...'
                value={inputVal}
                className='bg-black text-white py-2 min-w-[18vw] mr-3 mb-5 text-start pl-3'
              />
              <button onClick={handleClick} className='py-2 px-4 bg-black text-[#94A4AB]'>Add task</button>
              <ul>
                <AnimatePresence>
                  {filteredTasks.map((task) => (
                    <motion.li
                      key={task.id}
                      className='bg-black text-white py-2 text-center min-w-[25.6vw] justify-between flex pr-2 items-center'
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={popLayout}
                    >
                      <Checkbox
                        className='bg-gray-300'
                        checked={checkedItems[task.id] || false}
                        onChange={() => handleCheck(task.id)}
                        inputProps={{ 'aria-label': 'controlled' }}
                        sx={{
                          color: 'white',
                          '&.Mui-checked': {
                            color: 'white',
                          },
                        }}
                      />
                      <div className='break-words w-52'><p>{task.text}</p></div>
                      <MdDelete
                        className='cursor-pointer text-xl'
                        onClick={() => handleDelete(task.id)} />
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
              <div className='flex flex-col items-center bg-black min-w-[25.6vw]'>
                <div className='text-[#94A4AB] mb-2'>
                  {filter === "all" && <p>All: {totalTasks}</p>}
                  {filter === "completed" && <p>Completed: {completedTasks}</p>}
                  {filter === "active" && <p>Active: {activeTasks}</p>}
                </div>
                <ul className='flex justify-around w-full mb-4'>
                  <li
                    onClick={() => setFilter("all")}
                    className={`cursor-pointer ${filter === "all" ? "text-white" : "text-[#94A4AB]"}`}>
                    All
                  </li>
                  <li
                    onClick={() => setFilter("completed")}
                    className={`cursor-pointer ${filter === "completed" ? "text-white" : "text-[#94A4AB]"}`}>
                    Completed
                  </li>
                  <li
                    onClick={() => setFilter("active")}
                    className={`cursor-pointer ${filter === "active" ? "text-white" : "text-[#94A4AB]"}`}>
                    Active
                  </li>
                </ul>
                <div>
                  <p onClick={deleteCompletedTasks} className='cursor-pointer text-[#94A4AB]'>Clear Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
