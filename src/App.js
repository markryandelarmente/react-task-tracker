import { useState } from "react"

import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
	const [showAddTask, setShowAddTask] = useState(false)
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: "Food Shopping",
			day: "Feb 5th at 2:00pm",
			reminder: false,
		},
		{
			id: 2,
			text: "Cook Food",
			day: "Feb 5th at 2:00pm",
			reminder: true,
		},
		{
			id: 3,
			text: "Buy pizza",
			day: "Feb 5th at 2:00pm",
			reminder: true,
		},
		{
			id: 4,
			text: "Clean the house",
			day: "Feb 5th at 2:00pm",
			reminder: false,
		},
	])

	// Add Task
	const addTask = task => {
		const id = Math.floor(Math.random() * 1000) + 1
		const newTask = { id, ...task }
		setTasks([...tasks, newTask])
	}

	// Delete task
	const deleteTask = id => {
		setTasks(tasks.filter(task => task.id !== id))
	}

	// Toogle Reminder
	const toggleReminder = id => {
		setTasks(
			tasks.map(task =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		)
	}

	return (
		<div className="container">
			<Header
				showAdd={showAddTask}
				onAdd={() => setShowAddTask(!showAddTask)}
			/>
			{showAddTask && <AddTask onAdd={addTask} />}
			{tasks.length > 0 ? (
				<Tasks
					tasks={tasks}
					onDelete={deleteTask}
					onToggle={toggleReminder}
				/>
			) : (
				"No Tasks To Show"
			)}
		</div>
	)
}

export default App
